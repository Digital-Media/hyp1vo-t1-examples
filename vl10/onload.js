function showURL(event) {
    alert(this.href);
    event.preventDefault();
}

function prepareHandlers() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", showURL);
    }
}

window.addEventListener("load", prepareHandlers);

// Alternativ auch mit dieser Schreibweise möglich:
// window.onload = prepareHandlers;