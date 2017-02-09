# An ES6/ React Enclave for a Legacy Web App

This was inspired by/ forked from Cory House's [Build a JS Dev Environment in 1 Hour](https://www.codemash.org/session/build-a-javascript-dev-environment-in-1-hour/), Matthew LaForest's, [Integrating React into a legacy web app](https://www.codemash.org/session/integrating-react-into-a-legacy-web-app/), my own interest in using React, and a need to carve out a spot in an app I work on to use cutting edge stuff without disrupting everything else.

"Legacy app" has a connotation of something unsupported and really old that you can't stand to work on. Here, it just means something big that's used a lot and has been around for a while that you're not about to completely rewrite. Obviously you're trying to add new stuff to it if you're interested in something like this. You must love it at least a little bit ;-).

##The big idea

- Everything in the enclave is coded in ES6/ JSX.
- Everything in the enclave is bundled.
- At the end of the day, the bundled stuff is copied to a folder where it can be dealt with easily by the legacy app's build process.
- The developer doesn't have to do anything extra to be able to test locally (just refresh your browser)- so, JSX is automatically getting transpiled in the background as you change it.
- BUT, it's not hot-reloading as you change stuff, because your app is probably already being served by another web server (like IIS). The hot-reloading stuff uses its own web server, generally. I've read that using another web server is possible, let's keep things easy for now. If the enclave is just one part of my app, serving it on its own for the sake of hot reloading may not make a lot of sense, either.

##How to use 

After cloning, run
```
npm install
npm install webpack -g
```

Then, to build to the build folder, run:
```
webpack
```

To build and keep building to the build folder, run `webpack --watch`. Obviously, make sure you're serving the build folder somehow.

To run unit tests, run `npm run test`.

##TODO

- There's a ton of dependencies that aren't needed but are still there
- It should minify the CSS.
- I think I took out the linting.
- I'd like to write up how to run all the commands at once, so you can run one command and get JIT transpiling, linting, unit tests running and live updating, etc. all at once.

##Interesting bits
- Most tutorials assume you want to hot reload so it wasn't obvious initially how to just keep the build folder up-to-date so something else could serve it. It'd be nice to do this with something other than the webpack --watch command, so then you wouldn't need that separate global install.

## More Info and Inspiration
- [Codemash Talk Slides](https://www.dropbox.com/s/utvgg07ib25dq4x/Build%20a%20JS%20Dev%20Env%20in%201%20Hr%20-%20Codemash.pptx?dl=0)
- [Building a JavaScript Development Environment on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents) 
- [React Slingshot](https://github.com/coryhouse/react-slingshot) - My starter Kit
- [Andrew Farmer's list of React Starter Kits](http://andrewhfarmer.com/starter-project/)
