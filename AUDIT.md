## Perfomance
### 1. Added Gzip
Added node module [compression](https://github.com/expressjs/compression) middleware for Node.js Express. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.
Gzip improves the perfomance a lot!

* Improves paint with 2.66sec and usable page with 11.37 sec on slow 3G.

<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/gzip.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/aftergzip.png)

### 2. Compress images
I used a background image. It's pretty large and makes the page slow. I managed to reduce the size of de background image and the frame with 50%. Maybe I need to leave the background out in the next release, to improve the perfomance even more. This step is only needed when there is nothing left to imrpove and the perfomance is still not that good.

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
#### Job stories
* When I'm on the train with bad internet connection I want a fast website so I can sit on my phone and I'm not bored
* When I do not have internet, I still want to be able to access my previously visited pages so that I can get the information I need
* when I have internet, I want the page to load even faster, so that I can directly access information without having to wait.

This is the biggest improvement so far. The only thing is that the website should be visited already to load this fast.

* Improves paint with 4.3sec and usable page with 15.78sec on slow 3G. This gives a total page load from only <b>277ms</b> on 3G!. This is amazing!


<b>Before</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/minify.png)

<b>After</b>
![Example webapp](https://github.com/fennadew/performance-matters-server-side/blob/master/public/images/serviceworker.png)