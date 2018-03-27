const domElements = {
    halfWidth: window.innerWidth / 2,
    timeOut: 0,
    loader: document.querySelector('.loader'),
    loadingText: document.querySelector('.text'),
    heading: document.createElement("h1"),
    subheading: document.createElement("h2"),
    div: document.createElement("div"),
    link:  document.createElement("a"),
    placeholder: document.createElement("img"),
    frame: document.createElement("img"),
    container: document.querySelector('main'),
}

module.exports = domElements;