const domElements = require('./dom.js');

const images = {
    count: 0,
    changeImages(obj, totalPosition) {
        let img = document.querySelector(".placeholder");
        let link = document.querySelector(".profile-link");
        console.log(typeof totalPosition)
        link.href = /portret/ + (totalPosition + this.count);
        img.src = obj[this.count].img;
        this.count += 1;

        if (this.count >= obj.length) {
            this.count = 0;
        }
    }
}
module.exports = images;