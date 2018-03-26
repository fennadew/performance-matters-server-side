const domElements = require('./dom.js');
const images = require('./images.js');

const mouse = {
    mousePosition: 0,
    handleMouseMovement(event, collection) {
        if (domElements.halfWidth - 100 > event.pageX) {
            if (this.mousePosition !== 1) {
                this.mousePosition = 1;
                clearInterval(domElements.timeOut)
                images.count = 0;
                let objectsBefore  = 0;
                domElements.timeOut = setInterval(() => {
                    images.changeImages(collection.left, objectsBefore);
                }, 1000);
            }
        } else if (domElements.halfWidth + 100 < event.pageX) {
            if (this.mousePosition !== -1) {
                this.mousePosition = -1;
                clearInterval(domElements.timeOut)
                images.count = 0;
                let objectsBefore  = collection.left.length + collection.center.length;
                domElements.timeOut = setInterval(() => {
                    images.changeImages(collection.right, objectsBefore);
                }, 1000);
            }
        } else {
            if (this.mousePosition !== 0) {
                this.mousePosition = 0;
                clearInterval(domElements.timeOut)
                images.count = 0;
                let objectsBefore  = collection.left.length;
                domElements.timeOut = setInterval(() => {
                    images.changeImages(collection.center, objectsBefore);
                }, 1000);
            }
        }
    },
    onMouseMovement(collection) {
        document.onmousemove = (e) => this.handleMouseMovement(e, collection);
    }
}

module.exports = mouse;