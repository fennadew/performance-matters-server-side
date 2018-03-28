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