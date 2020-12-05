
function hide_input_area() {
    var hidden_elements = document.getElementsByClassName("hidden_area");
    for (var i = 0; i < hidden_elements.length; i++) {
        hidden_elements[i].style.display = "none";
    }
}