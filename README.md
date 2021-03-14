# Jujhar.com

My website [https://jujhar.com]()

## Local Development

```bash
# to server on localhost:4000 and continuously transpile output
docker run -it --rm \
  -v ${PWD}/docs:/srv/jekyll \
  -p 4000:4000 \
  jekyll/jekyll \
  jekyll serve --watch

# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g reload`
(cd docs/_site && reload -e "html|js|css|json")
```

## Build and deploy

This site is a [Jekyll static site](https://jekyllrb.com/) and will be auto deployed via Github pages upon commit to master.

If you're not publishing to Github pages use this command to one time build assets into `_site` and then publish to a S3 static bucket or old school server.
