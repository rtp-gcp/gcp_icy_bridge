# README

##  github codespaces setup

These are notes on how to setup a vs code installation using github codespaces for use with 
jupyter/inotebooks

### workflow

1. start a githubcodespace via a git repo
2. using settings icon in lower left, select themes
3. in terminal create the venv
    1. cd notebooks/
    2.  ls
    3.  python -m venv myenv
    4.  source myenv/bin/activate
    5.  pip install --upgrade pip
    6.  python -m pip install numpy
        - python install -r requirements.txt
    7. add .gitignore for myenv
4. setup python inpreter for the workspace
    1. cmd shift p to bring up command window
    2. type `Python: Select Interpreter`
    3. Use browse capability to browse to `notebooks/myenv/bin/python3`
5. Use requirements.txt to template a pandas install
    1. contents of requirements.txt
        > pandas
    2. install pandas via requirements.txt
        - `$ pip install -r requirements.txt`
6. Test notebook setup
    1. Right click and create `file testy.ipynb`
    1. Use this code for testy.ipynb

        ```
        from pprint import pprint
        foo={"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {  "street": "Kulas Light",  "suite": "Apt. 556",  "city": "Gwenborough",  "zipcode": "92998-3874",  "geo": {    "lat": "-37.3159",    "lng": "81.1496"  }},"phone": "1-770-736-8031 x56442","website": "hildegard.org","company": {  "name": "Romaguera-Crona",  "catchPhrase": "Multi-layered client-server neural-net",  "bs": "harness real-time e-markets"}}
        pprint(foo)

        import pandas as pd
        df = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})
        print(df)
        ```
7. Within github codespaces, the python env file is in top level of gitrepo.  
    1. Put `.env` at top level
    2. place api key in this file
    3. add to `.gitignore`


# VS Code General tips

* use `ctrl-enter` to execute shells. Apparantly `shift-enter`` does not work.
* use `b` to add a new code cell.


## vs code multiple tabs

```
Within your settings, under workbench, set:

"workbench.editor.enablePreview": false,
"workbench.editor.enablePreviewFromQuickOpen": false
This will allow you to open the files with a single click, as opposed to double-clicking. It may seem minute, but it was incredibly annoying to have to double-click every single file.
```


# Creating service accounts for these notebooks


## Authentication

### Set and create
```
$ SERVICE_ACCOUNT_ID=jams-devpost
$ gcloud iam service-accounts create $SERVICE_ACCOUNT_ID  \
    --description="A custom service account for Vertex custom training with Tensorboard" \
    --display-name="Vertex AI Custom Training"
```
## Authorization

### cloud storage

```
$ PROJECT_ID=$(gcloud config get-value core/project)
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/storage.admin"
```

### App engine

App Engine default service account	
Editor

```
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/appengine.appAdmin"
```


### Vertex AI

```
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/aiplatform.serviceAgent"
 ```
    

## create the json key

```
$ gcloud iam service-accounts keys create ~/path/to/your-key-file.json --iam-account SERVICE_ACCOUNT_NAME@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

