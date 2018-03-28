# Portrets following mouse

Portrets from the city archive of Amsterdam follow the direction of the mouse by looking at it. The face position of the portrets is detected with the [Microsoft face API](https://azure.microsoft.com/en-us/services/cognitive-services/face/).
*   [x] Works without JavaScript
*   [x] Server: Express
*   [x] Templating: EJS
*   [x] Env: dotenv
*   [x] GZIP: Compression
    [x] CSS: SASS
*   [x] Bundling server side: CommonJS
*   [x] Bundling client side: Browserify
*   [x] Minify client side: Babel

![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/example.gif)

## NPM scripts, CommonJS & Browserify
You can find the npm scripts in the `package.json` file under "scripts". When you run `npm start` your the terminal, `node app.js` will be executed.
`build-js` is a custom npm script so you need to run `npm run build-js` in your terminal. It will run browserify. This looks up all the scripts in the public/javascripts folder and bundles all modules in public/javascripts/bundle.js.
Browserify lets you require('modules') in the browser by bundling up all of your dependencies. Node does that automatically by using CommonJS.

  "scripts": {

    "start": "node app.js",
    "build-js": "browserify public/javascripts/*.js > public/javascripts/bundle.js"

  }

## Get started

* Run `$ git clone https://github.com/fennadew/performance-matters-server-side.git` in your terminal in the desired directory.

* `cd` to the repository and create a new file called vars.env
In this file, add a SUB_KEY= with a valid key from [Microsoft face API](https://azure.microsoft.com/en-us/services/cognitive-services/face/).
This webapp is based on the free key with 20 calls/minute. 

* Run `npm install` to install all dependencies.

* Run `npm start` start the server.
App listens on `http://localhost:8000/`.

* To bundle the JavaScript files into bundle.js run `npm run bundle-js`.

## Perfomance
### 1. Added Gzip
added node module [compression](https://github.com/expressjs/compression) middleware for Node.js Express. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.

* Improves paint with 2.66sec and usable page with 11.37 sec on slow 3G.

<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/gzip.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/aftergzip.png)

### 2. Compress images
I used a background image. It's pretty large and makes the page slow. I managed to reduce the size of de background image and the frame with 50%.

* Doesn't improve the paint, but improves usable page with 6.68 sec on slow 3G.

<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/aftergzip.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/compressimg.png)

### 3. Minified JavaScript
Minified JavaScript with minifier [Babel](https://github.com/babel/minify) using NPM scripts.

* Didn't improve paint or usable page (only 0.01s on slow 3G). Maybe in the future, when the project get bigger, it will have more effect.

<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/compressimg.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/minify.png)

### 4. Service worker
This is the biggest improvement so far. The only thing is that the website should be visited already.

* Improves paint with 4.3sec and usable page with 15.78sec on slow 3G.

<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/minify.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/serviceworker.png)

## To do
*   [x] Add service worker for offline usage
*   [x] Add gzip
*   [x] Minify JS
*   [x] Compress images
*   [x] Improve styling
*   [x] Add more content

## License
MIT © Fenna de Wilde

## Resources

* [env](https://github.com/motdotla/dotenv)
* [Babel](https://github.com/babel/minify)
* [Compression](https://github.com/expressjs/compression)
* [SASS](https://sass-lang.com/)
* [Icons](flaticon.com)
* [Wall](https://desktopwalls.net/wp-content/uploads/2015/02/White%20Wall%20Texture%20Cracks%20Grunge%20Desktop%20Wallpaper.jpg)
* [Frame](http://pluspng.com/png-54437.html)
* [Express](https://github.com/expressjs/express)
* [CommonJS](https://nodejs.org/docs/latest/api/modules.html)
* [Browserify](http://browserify.org/)




