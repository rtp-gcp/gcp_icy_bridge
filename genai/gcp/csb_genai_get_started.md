# Generative AI with Vertex AI: Getting Started

This one uses jupyter lab studio to open notebooks in the training-data-analyst
git repo to use the API to simple tests.

It does not use the GoogleCloudPlatform repo.  It uses a different [one]( https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/intro_prompt_design.ipynb).


Demos:

* text-bison - the generic text model
* zero shot - no context to question
* one shot - one item of context for question
* few shot - more than one item of context for question
* PaLM 2 - a Language GenAI API?
    - text-bison - covered by lab in notebook and in workbench
    - code-bison - covered by lab in notebook
    - code-gecko - covered by lab in notebook
* qualities of the prompt response
    - temperature 
        - varies 0 - 1
        - default is 0.2
        - lower numbers give more determinstic response
        - when 1, each answer varies
        - when 0, each answer is the same
    - token limit
        - how large of a result
        - text is one token per syllabl
        - code is one token per character
        - experimentation shows that its words though
    - top-K
        - varies 0-40
        - specifies how many top probable results and then picks the most probable of that group based upon temp?
    - top-P
        - varies 0-1
        - default 0.8
        - the tokens picked most probable to least until sum equals top-P value.




Lab info:

- lab number: GSP1150
- [lab url](https://www.cloudskillsboost.google/games/4348/labs/28207)

# setup

## console shell setup

```

```

## API marketplace enables

*

# Walkthrough

1. AI / Vertex AI -> Workbench
2. User managed notebooks
    1. open jupyter studio notebook
3. Next task is to use AI / Vertex AI -> Overview
    1. language on left
    2. 

It has a notebook which shows how to use the API directly.

language/getting-started/intro_palm_api.ipynb	Notebook on getting started with the Vertex AI PaLM API & Python SDK
language/getting-started/intro_generative_ai_studio.md	UI-based tutorial on getting started with Generative AI Studio



