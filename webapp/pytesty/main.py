

import datetime
# Import the os package, used to set env variables and check paths
import os
# import the dotenv package for client keys in .env file
from dotenv import load_dotenv


# for random UUID keys
# https://docs.python.org/3/library/uuid.html
import uuid
# Import square 
from square.client import Client

# import pandas so we can create a table to
# display JSON results from SQ
import pandas as pd
# get the normalize api from pandas
#from pandas.io.json import json_normalize

# for pretty print
#import pprint
# for datetime stamp
#import datetime
# for JSON
import json


from flask import Flask, render_template


#### from notebook

# Get the current working directory
cwd = os.getcwd()

# Construct the .env file path
env_path = os.path.join(cwd, '.env')

# Load the .env file
load_dotenv(dotenv_path=env_path)

###### end from notebook




app = Flask(__name__)


# @app.route("/")
# def root():
#     # For the sake of example, use static information to inflate the template.
#     # This will be replaced with real information in later steps.
#     dummy_times = [
#         datetime.datetime(2018, 1, 1, 10, 0, 0),
#         datetime.datetime(2018, 1, 2, 10, 30, 0),
#         datetime.datetime(2018, 1, 3, 11, 0, 0),
#     ]

#     return render_template("index.html", times=dummy_times)


@app.route("/")
def root():
    # For the sake of example, use static information to inflate the template.
    # This will be replaced with real information in later steps.
    dummy_times = [
        datetime.datetime(2018, 1, 1, 10, 0, 0),
        datetime.datetime(2018, 1, 2, 10, 30, 0),
        datetime.datetime(2018, 1, 3, 11, 0, 0),
    ]

    # VERTEX AI
    #PROJECT_ID = os.environ['GCP_PROJ_ID']  # @param {type:"string"}
    # Notice the project name is uppercase. However, the project ID is lowercase
    #print(PROJECT_ID)

    TESTENV = os.environ['TESTENV']  # @param {type:"string"}
    # Notice the project name is uppercase. However, the project ID is lowercase
    #print(PROJECT_ID)

    dummy_txt = TESTENV


    # SQUARE API
    # init the square API
    # using generic os environment this fails.
    # However, when using the dotenv package it works
    sq_client = Client(
        access_token=os.environ['SQUARE_ACCESS_TOKEN'],
        environment='production'  
    )

    result = sq_client.invoices.list_invoices(
        location_id = "LZBNSDTSHAMM8"
    )

    if result.is_success():
        print(result.body)
    elif result.is_error():
        print(result.errors)

    result_txt = result.body


    # render a sample dataframe as a table
    data_dic = {
        'id': [100, 101, 102],
        'color': ['red', 'blue', 'red']}
    columns = ['id', 'color']
    index = ['a', 'b', 'c']

    df = pd.DataFrame(data_dic, columns=columns, index=index)
    table = df.to_html(index=False)


    # read our JSON result into a pandas dataframe
    #pd.read_json(StringIO(_), orient='index')
    #aDF = pd.DataFrame(result.body['invoices'])
    aDF = pd.DataFrame(result.body)
    #dummy_txt = aDF.columns

    # Flatten business data into a dataframe, replace separator
    #invoices_DF = json_normalize(result.body["invoices"], sep='_')
    invoices_DF = pd.json_normalize(result.body['invoices'])
    table2 = invoices_DF[['id', 'order_id', 'invoice_number']].to_html(index=False)
    
    return render_template("index.html", times=dummy_times, mytext=dummy_txt, myresult=result_txt, mytable=table2)



if __name__ == "__main__":
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host="127.0.0.1", port=8080, debug=True)