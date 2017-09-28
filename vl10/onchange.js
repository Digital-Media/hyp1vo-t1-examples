function valChange() {
    alert(this.options[this.selectedIndex].value + " wurde ausgewählt");
}

window.addEventListener("load", function () {
   document.getElementById("values").addEventListener("change", valChange);
});