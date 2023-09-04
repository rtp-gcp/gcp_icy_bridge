
# URLS

* gcp app engine [ref](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project)
* [node gitignore] (https://github.com/github/gitignore/blob/main/Node.gitignore)
* [Firebase page on express](https://firebase.google.com/docs/hosting/frameworks/express)

1. Create project
2. $ gcloud init
2. Enable cloud build api.

# if you can't the default app engine service

Go to settings in app engine and disable the default service.

Nevermind, you can't delete the default service.  You have to delete the entire project.
See [here](https://stackoverflow.com/a/49388143/1008596)

# install packages

```
$ npm install .
```

# starting locally

```
$ npm start
```

# starting on app engine

In the package.json have a section like this

```
"scripts": {
  "start": "node app.js"
}
```

# deploying the webapp

In the directory containing the app.yaml and package.json do:

```
$ gcloud app deploy
```
