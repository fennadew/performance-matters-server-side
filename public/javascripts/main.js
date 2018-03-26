const api = require('./api.js');
const domElements = require('./dom.js');

(function () {
    const app = {
        init() {
            domElements.placeholder.setAttribute("class", "placeholder");
            domElements.link.setAttribute("class", "profile-link");
            domElements.heading.appendChild(document.createTextNode("Move your mouse"));
            domElements.container.appendChild(domElements.heading);
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

