Jujhar.com
==========

My website

Because vim and jekyll (and now docker) are the best cms tools out there

### Buidling
```bash
docker run --rm -v $(pwd):/srv/jekyll -p 127.0.0.1:4000:4000 \
  jekyll/jekyll jekyll build
```

