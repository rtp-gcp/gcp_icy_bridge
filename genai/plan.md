# GenAI Learning Plan

The overall goal is to learn how to implement models in GenAI with a goal of understanding how it can be used in conjunction with an application towards detecting icy bridges.  When we were doing the initial work with AWS Recognition and Mxnet, we had difficulty in training data to detect bridge seams which I considered an important ablitly.   We could not even identify bridges with certainity.  Due to the advancement of genAI and LLM I wanted to learn about this technology and if it could be utilized towards our goal of detecting icy bridges.

## General purpose genAI theory

There exists somem free (low cost) classes available.  These classes are openAI ChatGPT focused but the material applies to both the GCP and AWS implementation of microservices.  In order to learn the fundamentals before the implementation details of the various cloud providers, this is a good starting point and more easily accessible to everyone.

Classes of interest (in order of increasing difficulty) are:

* Datacamp: Intro to ChatGPT - complete 20230813
* Datacamp: webinar - complete 20230819
* github/vscode: learn how to setup vscode with jupyter and openai API - complete 20230820
* optimize: how to save money and cost with the first sample - 
* Datacamp: ai fundamentals track - todo

## openAI.com (ChatGPT) specific implementation

I haven't fully investiated these classes yet, but here is a starter

The OpenAI chatgpt or API can help us with understanding the image classification problem, provide with information on specific ML algorithms that are good for such task and can help us to build classifier to run in our environments. 


* Datacamp: openAI API course - todo
* DeepLearning.ai: ChatGPT Prompt Engineering course - todo


### Google Cloud Platform (GCP) Implementation

The available material from Google for learning GenAI.


Classes of interest (in order of increasing difficulty) are:

* GCP GenAI learning path
* CloudSkillsBoost.google
    These labs use two different git repos.  The notes on the labs are in the cloudskillboost directory.
    - [GoogleCloudPlatform/training-data-analyst](https://github.com/GoogleCloudPlatform/training-data-analyst)
    - [generative-ai]( https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/intro_prompt_design.ipynb).
    Labs completed - 20230827



Vertex AI 

* Vision API. Pretty accurate image claffification API that can be tried for free using UI here: [https://cloud.google.com/vision](https://cloud.google.com/vision) and got a production grade solutions.
* Custom ML models. 



Image can be uploaded with the text prompt and in response you got a pretty accurate image classification provided in text description. 

There is no API for Bard and this is not suitable for production image classfier. 

Other google services are worth a look on image classification.




## Amazon Web Services (AWS) specific implementation

I haven't fully investiated these classes yet, but here is a starter

* AWS/DeepLearning AI class

# URLS

URLS for reference.

* [datacamp chatGPT](https://app.datacamp.com/learn/courses/introduction-to-chatgpt)
* [ai fundamentals track](https://app.datacamp.com/learn/skill-tracks/ai-fundamentals)
* [webinar](https://www.datacamp.com/resources/webinars/ungated-getting-started-with-the-openai-api-and-chatgpt)
* [openAI API course](https://app.datacamp.com/learn/courses/working-with-the-openai-api)
* [deeplearning ChatGPT for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
* [google generative AI learning path](https://www.cloudskillsboost.google/journeys/118)
* [deeplearning.ai/AWS genAI with LLM](https://www.deeplearning.ai/courses/generative-ai-with-llms/)
* [medium post on gcp bard](https://generativeai.pub/googles-bard-a-step-by-step-guide-to-using-the-unofficial-bard-api-3abb5b2d6abc)

Free Classes (somewhat related)

* [google Machine Learning Crash Course with TensorFlow](https://developers.google.com/machine-learning/crash-course)
* [google Analytics Academy](https://analytics.google.com/analytics/academy/)
* [elements of AI](https://www.elementsofai.com)

Mix of Free and Low Cost (somewhat related)

* [Grow with Google](https://grow.google/intl/en_in/certificates/)
* [Grow with Google Catalog](https://grow.google/intl/uk/courses-and-tools/)

