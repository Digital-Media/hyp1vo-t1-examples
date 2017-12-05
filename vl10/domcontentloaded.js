function showURL(event) {
    alert(this.href);
    event.preventDefault();
}

function prepareListeners() {
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", showURL);
    }
}

document.addEventListener("DOMContentLoaded", prepareListeners);

// Alternativ auch mit dem load-Event:
// window.addEventListener("load", prepareListeners);
