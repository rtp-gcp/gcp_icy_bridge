
# before running this script, do
# gcloud auth login
# 
# then do
# gcloud config set project devpost-goog-sq

SERVICE_ACCOUNT_ID=jams-devpost-sa
PROJECT_ID=$(gcloud config get-value core/project)


# create
## authentication
gcloud iam service-accounts create $SERVICE_ACCOUNT_ID  \
    --description="A custom service account for devpost hackathon" \
    --display-name="devpost service account for AI, CS, AE"


# Authorization

## storage (bucket )
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/storage.admin"

## app engine admin?
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/appengine.appAdmin"

## ai engine
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com \
    --role="roles/aiplatform.serviceAgent"

#
# Create the json credentials file
#

gcloud iam service-accounts keys \
    create application_default_credentials.json \
    --iam-account $SERVICE_ACCOUNT_ID@$PROJECT_ID.iam.gserviceaccount.com
