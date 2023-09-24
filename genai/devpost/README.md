# notes on devpost hackathon entry

* Google AI API
* Google Payments API
* Square Inventory API

# urls specified by the hackathon

* [Square Discord](https://discord.gg/squaredev)
* [Square Developer API](https://developer.squareup.com/)
* [Google Developer API](https://developers.google.com/focus/ai-development)
* [devpost hackathon](https://square-google-ai.devpost.com/)
* [recommended url by square regarding sellers](https://www.sellercommunity.com/t5/Developer-Discussions/bd-p/developers)
* [architecture](https://jamboard.google.com/d/1JzK6G_0dXeQbO9hn1cRglIOKM3M9DumtcLcAYPRXDjI/edit?usp=sharing)
* [square webapp docs](https://developer.squareup.com/docs/app-marketplace)
* [google payments api](https://developers.google.com/pay/api/web/overview)
* [square sellers store homepage](https://squareup.com/dashboard/sites)
* [square sandbox](https://developer.squareup.com/docs/devtools/sandbox/overview)
* [setup free online store workflow](https://squareup.com/us/en/the-bottom-line/starting-your-business/how-to-start-a-free-online-store)
* [square dashboard](https://square.online/app/home/users/147028449/sites/933423469753632432/dashboard)
* [square guide for upsert](https://developer.squareup.com/docs/catalog-api/build-with-catalog)
* [square upsert api](https://developer.squareup.com/reference/square/catalog-api/upsert-catalog-object)

### The hot list
* [square dashboard](https://squareup.com/dashboard/)
* [online store](https://rtp-gcp-usergroup.square.site/)
* [square api docs](https://developer.squareup.com/docs/catalog-api/search-catalog-objects)
* [square api explorer](https://developer.squareup.com/explorer/square/catalog-api/list-catalog)

# Required API Usages

* Square Terminal API, Subscriptions API, Invoices API

# Square Invoice API 

https://developer.squareup.com/docs/invoices-api/overview

Manages Orders.  Require use of order API

# Square Order API

https://developer.squareup.com/reference/square/orders-api


# setup gcp

### install gcloud 

```
$ sudo apt-get install apt-transport-https ca-certificates gnupg curl sudo
$ echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
$ curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
$ sudo apt-get update && sudo apt-get install google-cloud-cli
$ gcloud init
```

## setup authentication and authorization

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

## setup auth via guide

[Using this guide](https://cloud.google.com/docs/authentication/provide-credentials-adc#how-to)

```
# orig from guide
# $ gcloud auth application-default login --impersonate-service-account SERVICE_ACCT_EMAIL

# our version
$ gcloud auth application-default login --impersonate-service-account $SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com

```

This will create credentials and print the following info regarding the credentials:

```
Credentials saved to file: [/home/codespace/.config/gcloud/application_default_credentials.json]

These credentials will be used by any library that requests Application Default Credentials (ADC).
```
These credentials in this case are saved outside the gitrepo in this particular git codespace and thus
do not need to be put in a `.gitignore`

From the page above:


> Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of the JSON file that contains your service account key. This variable only applies to your current shell session, so if you open a new session, set the variable again.

# urls to resume

https://cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk#:~:text=The%20Vertex%20AI%20SDK%20for%20Python%20helps%20you%20automate%20data,in%20the%20Google%20Cloud%20console.

