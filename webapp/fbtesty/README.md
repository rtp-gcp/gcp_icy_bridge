

# firestore app engine stub

This shows:

* How to create a simple NODE.js app
* How to deploy it on GCP as an App Engine microservice
* How to add Firestore connectivity.  
  * Use firestore API to R/W our database.
* How to use openweathermap.org API
* In terms of GCP, this is a noSQL database in "Cloud Firestore in Native Mode".
  * [New model](https://cloud.google.com/datastore/docs/firestore-or-datastore)
  * Realtime updates
  * Mobile and web client libraries
  * [quickstart](https://cloud.google.com/firestore/docs/create-database-server-client-library)

# TODO:

* Add Read by ID for openweather map API
* Add Recipe database using doc/collection/doc/collection pattern.
  * Add method to read formatted recipes in UI


## NODE.js Notes

### install packages

```
$ npm install .
```

#### install dev package nodemon
```
$ npm i nodemod -D
```

Modify the `scripts` section of `package.json` so that it starts the app
and uses nodemon to restart the app everytime its saved during
development.

```
 "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "start": "node index.js",
+    "dev": "nodemon index.js"
  },
```

### starting locally

```
$ npm start
```

#### starting developer mode

Run the dev script portion of the package.json via

```
$ npm run dev
```


### Test with urls of this form



Durham by ID
```
https://somehostedurl/myrouter/ByID/4464368
```

Wichita by Name
```
https://somehostedurl/myrouter/ByName/Wichita
```

## GCP App Engine Specifics


### URLS
https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project

1. Create project
2. $ gcloud init
2. Enable cloud build api.

### if you can't the default app engine service

Go to settings in app engine and disable the default service.

Nevermind, you can't delete the default service.  You have to delete the entire project.
See [here](https://stackoverflow.com/a/49388143/1008596)


### Setup for gcloud

Make sure you run `gcloud info` to see the
project settings are correct.

```
$ gcloud info
```

Make sure you install required packages before the deploy.

```
$ npm install .
```


### starting on app engine

In the package.json have a section like this

```
"scripts": {
  "start": "node app.js"
}
```

### deploying the webapp to app engine

In order to have two app engine services in the same project, edit the `app.yaml` file to specify a new service.
See [here](https://cloud.google.com/appengine/docs/standard/reference/app-yaml?tab=node.js#top)

```
untime: nodejs16
service: fbtesty
```

In the directory containing the app.yaml and package.json do:

```
$ gcloud app deploy
```

Likewise to view the app in your browser.  Note, you need to specify the service otherwise it will
show the default service.

```
$ gcloud app browse --service=fbtesty
```





## Testing

```
$ npm run dev
```

### Web Server Public URLs

| URL                           | app      | Notes                              |
|-------------------------------|----------|------------------------------------|
|  http:/server.com/            |  public  | renders view/index.js              |
|  http:/server.com/index.js    |  public  | renders view/index.js              |
|  http:/server.com/about.js    |  public  | renders view/about.js              |
|  http:/server.com/doit.js     |  public  | renders view/doit.js              |

### Web Server API Private/Router URLs

For now, these are not private.  Its also just a single app. 

| URL                                 | app      | Notes                              |
|-------------------------------------|----------|------------------------------------|
|  http:/server.com/weather            | private  | public uses router/weather.js /               |
|  http:/server.com/weather/nnnn       | private  | public uses router/weather.js /nnn            |
|  http:/server.com/weather/ByID/nnn   | private  | public uses router/weather.js /ByID/nnn       |
|  http:/server.com/weather/ByName/xxx | private  | public uses router/weather.js /ByName/xxx     |
|  http:/server.com/myfs               | private  | public uses router/myfs.js /               |
|  http:/server.com/myfs               | private  | public uses router/myfs.js /read/TODO               |
|  http:/server.com/myfs               | private  | public uses router/myfs.js /write/TODO               |

### Errors

Use `rs` to restart `npm run dev`.


### Firestore 

This is for access to google cloud firestore in native mode 

TODO: This needs to be cleaned up

```
$ export GOOGLE_APPLICATION_CREDENTIALS=~/progs/gcp_icy_bridge/secrets/keys/fire_testy.json 
$ npm install --save @google-cloud/firestore
```


### URLS

* [firestore native mode](https://cloud.google.com/firestore/docs/create-database-server-client-library)
* jsfiddle
* codepen
* stackoverflow code snippet using the new button in the markdown editor
