# Vertex AI: Qwik Start

This one sets up a jupyter lab notebook and then uses tensorflow. 
Not really a genAI lab, but more of an introduction to 
jupyterstudio, notebooks, tensorflow as hosted in gcp.


It demos:

* cloud storage
* bigquery
* AI -> Vertex AI -> Workbench


Lab info:

- lab number: GSP917
- [lab url](https://www.cloudskillsboost.google/games/4348/labs/28206)

# setup

## console shell setup

Enable services

```
$ gcloud services enable \
  compute.googleapis.com \
  iam.googleapis.com \
  iamcredentials.googleapis.com \
  monitoring.googleapis.com \
  logging.googleapis.com \
  notebooks.googleapis.com \
  aiplatform.googleapis.com \
  bigquery.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  container.googleapis.com
```

Create custom service account

Authentication

```
$ SERVICE_ACCOUNT_ID=vertex-custom-training-sa
$ gcloud iam service-accounts create $SERVICE_ACCOUNT_ID  \
    --description="A custom service account for Vertex custom training with Tensorboard" \
    --display-name="Vertex AI Custom Training"
```

Authorization

Grant for cloud storage for read/write tensorboard logs

```
$ PROJECT_ID=$(gcloud config get-value core/project)
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/storage.admin"
```


Authorization

Grant for BigQuery as data source (READ) into tensorflow model

```
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/bigquery.admin"
```


Authorization

Grant for Vertex AI to run model training, deployment and prediction

```
$ gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/aiplatform.user"
```





## API marketplace enables

*

# Walkthrough

1. AI -> Vertex AI -> Workbench
2. User Managed Notebooks
3. create new
    1. Environment: TensorFlow LTS
    2. Advanced: Machine Type : e2-standard-2
4. open jupyter lab
5. open terminal
    ```
    $ git clone https://github.com/GoogleCloudPlatform/training-data-analyst
    $ cd training-data-analyst/self-paced-labs/vertex-ai/vertex-ai-qwikstart
    $ pip3 install --user -r requirements.txt
    ```





# Notebooks used

* training-data-analyst/self-paced-labs/vertex-at/vertex-ai-qwikstart/lab_exercise.ipynb
    * uses bigquery
    * uses tensorflow to build a keras model with DNN and dropout

