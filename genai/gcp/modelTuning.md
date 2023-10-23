# Model Tuning Notes

* [gcp doc on model tuning Root](https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart-tuning#generative-ai-tune-model-console)
* [better](https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models)
* 
# Steps

## Step 1 

Create a bucket (cloud storage)


## step 2

Upload data


The sample provided data

```
{"input_text": "question: How many people live in Beijing? context: With over 21 million residents, Beijing is the world's most populous national capital city and is China's second largest city after Shanghai. It is located in Northern China, and is governed as a municipality under the direct administration of the State Council with 16 urban, suburban, and rural districts.[14] Beijing is mostly surrounded by Hebei Province with the exception of neighboring Tianjin to the southeast; together, the three divisions form the Jingjinji megalopolis and the national capital region of China.", "output_text": "over 21 million people"}

{"input_text": "question: How many parishes are there in Louisiana? context: The U.S. state of Louisiana is divided into 64 parishes (French: paroisses) in the same manner that 48 other states of the United States are divided into counties, and Alaska is divided into boroughs.", "output_text": "64"}

{"input_text": "question: How many churches in Texas? context: In 2010, there were a number of religious congregations in the state of Texas.", "output_text": "27,848"}

{"input_text": "question: How many lakes in North Dakota? context: North Dakota has many lakes and rivers offering exciting action for walleye, northern pike, perch, bass, salmon, catfish and other game fish with seasons for most species open year-round.", "output_text": "400"}

{"input_text": "question: How many rivers in the United States? context: The United States of America has over 250,000 rivers, with a total of about 3,500,000 miles of rivers. The longest river in the USA is the Missouri River (it is a tributary of the Mississippi River and is 2,540 miles long), but the biggest in terms of water volume is the deeper Mississippi River", "output_text": "over 250,000"}

{"input_text": "question: How many mountains in Oregon? context: There are 4760 named mountain ranges in Oregon and approximately 3,764 mountains altogether.", "output_text": "3,764"}

{"input_text": "question: How many small businesses in the state of Vermont? context: Vermont has 78,883 small businesses, most of which are sole proprietors. Vermont small businesses employ 157,131 workers, which is 60.2% of the state's workforce. The top three industries for small business in Vermont are professional, scientific, and technical services; construction; and retail.", "output_text": "78,883"}

{"input_text": "question: How many states grow apples? context: 2,500 varieties of apples are grown in the United States. 7,500 varieties of apples are grown throughout the world. 100 varieties of apples are grown commercially in the United States. Apples are grown commercially in 36 states.", "output_text": "36"}

{"input_text": "question: How many states grow mangos? context: Because mangos need a tropical climate to flourish, only Florida, California, Hawaii, and Puerto Rico grow mangos.", "output_text": "4"}

{"input_text": "question: How often does it storm in Missouri? context: Thunderstorms normally occur between 40 and 50 days per year. During any year, there are usually a few of these thunderstorms that are severe, and produce large hail and damaging winds. Tornadoes have produced extensive damage and loss of life in the St. Louis area.", "output_text": "Thunderstorms normally occur between 40 and 50 days per year."}
```

The form of the example data is:

* input_text
    - "question: <some question>"
    - "context: <some context>"
* output_text
    - "a word or sentence of expected answer to question and given context"
