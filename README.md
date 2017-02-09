# A demo of using ES6/ Webpack/ React in a way that's friendly to people that just want to dip their toes in

This was inspired by/ forked from Cory House's [Build a JS Dev Environment in 1 Hour](https://www.codemash.org/session/build-a-javascript-dev-environment-in-1-hour/), Matthew LaForest's, [Integrating React into a legacy web app](https://www.codemash.org/session/integrating-react-into-a-legacy-web-app/), and my own interest in using React in various places. 

##What I'm working on here

- Intentionally limiting the other strange new stuff going on here to just Webpack, React, and ES6.
- But you are using ES6, JSX, all of that's getting bundled, so you feel really cutting edge.
- At the end of the day, the bundled stuff is copied to a folder where it can be served or maybe copied and used inside of another app. I wanted it to just be really obvious and self-contained ("HERE IS THE FINAL PRODUCT").
- JSX is automatically getting transpiled in the background as you change it so you can just refresh your browser to test new code.
- BUT, it's not hot-reloading as you change stuff. I love hot-reloading, but maybe this is just part of one app that's already being served from somewhere else. I've read it's possible to use hot-reloading with another web server but let's do that later. I just wanted to pull that all apart and get to a point where I was testing and linting and keeping files up-to-date without necessarily hot-reloading. I hope to add it back later.

##What I changed from the original demo
- Not hot reloading right now
- Added CSS bundling
- Added copying index.html to the build folder
- Added React/ JSX
- Added onto the import/ export example so I could prove I was doing it right since I'm new to ES6

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
- It should minify the JS/ CSS.
- I think I took out the linting.
- I'd like to write up how to run all the commands at once, so you can run one command and get JIT transpiling, linting, unit tests running and live updating, etc. all at once.

##Interesting bits
- Most tutorials assume you want to hot reload so it wasn't obvious initially how to just keep the build folder up-to-date so something else could serve it. It'd be nice to do this with something other than the webpack --watch command, so then you wouldn't need that separate global install.

## More Info and Inspiration
- [Codemash Talk Slides](https://www.dropbox.com/s/utvgg07ib25dq4x/Build%20a%20JS%20Dev%20Env%20in%201%20Hr%20-%20Codemash.pptx?dl=0)
- [Building a JavaScript Development Environment on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents) 
- [React Slingshot](https://github.com/coryhouse/react-slingshot) - My starter Kit
- [Andrew Farmer's list of React Starter Kits](http://andrewhfarmer.com/starter-project/)
