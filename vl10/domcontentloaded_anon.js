"use strict";

function showURL(event) {
    alert(this.href);
    event.preventDefault();
}

function prepareListeners() {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", showURL);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    alert("DOMContentLoaded-Event ausgelöst!");
    prepareListeners();
});

// Alternativ auch mit dem load-Event möglich:
// window.addEventListener("load", function() {
//   alert("load-Event ausgelöst!");
//   prepareListeners();
// };
