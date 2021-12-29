# Core-Docs

View the current io page [here](https://ucgd.github.io/Core-Docs/docs/intro/)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Preparation

On Mac OS [install Homebrew](https://brew.sh) and then install yarn
```
$ brew install yarn
```

### Installation

```
$ git clone git@github.com:UCGD/Core-Docs.git 
$ cd Core-Docs
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
