const api = require('./api.js');
const domElements = require('./dom.js');

(function () {
    const app = {
        init() {
            domElements.placeholder.setAttribute("class", "placeholder");
            domElements.placeholder.setAttribute("src", "images/placeholder.png");
            domElements.link.setAttribute("class", "profile-link");
            domElements.frame.setAttribute("src", "images/frameround.png");
            domElements.frame.setAttribute("class", "frame");
            domElements.heading.appendChild(document.createTextNode("Move your mouse"));
            domElements.subheading.appendChild(document.createTextNode("Or click on the image for more cool stuff"));
            domElements.container.appendChild(domElements.heading);
            domElements.container.appendChild(domElements.subheading);
            domElements.link.appendChild(domElements.frame);
            domElements.link.appendChild(domElements.placeholder);
            domElements.div.appendChild(domElements.link);
            domElements.container.appendChild(domElements.div);
            api.handleRequest()
            window.addEventListener('resize', (event) => {
                domElements.halfWidth = window.innerWidth / 2;
            });
        }
    }
    if (domElements.container.classList.contains('index')) {
        app.init();
    }

})();

