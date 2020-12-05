
var notesArray = new Array();
notesArray.push({title:"note one", body:"some text 1"});
notesArray.push({title:"note two", body:"some text 2"});

function hide_input_area() {
    var hidden_elements = document.getElementsByClassName("hidden_area");
    for (var i = 0; i < hidden_elements.length; i++) {
        hidden_elements[i].style.display = "none";
    }
}

function newnote_button_pressed() {
    var hidden_elements = document.getElementsByClassName("hidden_area");
    if (hidden_elements[0].style.display == "none") {
        for (var i = 0; i < hidden_elements.length; i++) {
            hidden_elements[i].style.display = "grid";
        }
    }
    else {
        var text_area = document.getElementsByTagName("textarea");
        text_area[0].value = "";
    }
}

function dark_light_theme() {
    var newnote_button = document.getElementById("newnote-button");
    var dark_button = document.getElementById("darktheme-button");
    var save_button = document.getElementById("save-button");
    var cancel_button = document.getElementById("cancel-button");
    var aside_area = document.getElementsByTagName("aside");
    var content_area = document.getElementsByTagName("content");
    var text_box = document.getElementsByTagName("textarea");

    if (dark_button.innerHTML == "Dark Theme") {
        newnote_button.style.backgroundColor = "#2e4a3d";
        dark_button.innerHTML = "Light Theme";
        dark_button.style.backgroundColor = "#3d3d3d";
        save_button.style.backgroundColor = "#2e4a3d";
        cancel_button.style.backgroundColor = "#822515";
        aside_area[0].style.backgroundColor = "#707070";
        content_area[0].style.backgroundColor = "#858282";
        text_box[0].style.backgroundColor = "black";
        text_box[0].style.color = "white";
    }
    else {
        newnote_button.style.backgroundColor = "#5F987D";
        dark_button.innerHTML = "Dark Theme";
        dark_button.style.backgroundColor = "#696969";
        save_button.style.backgroundColor = "#5F987D";
        cancel_button.style.backgroundColor = "#D23C22";
        aside_area[0].style.backgroundColor = "#C0C0C0";
        content_area[0].style.backgroundColor = "#ECE8E8";
        text_box[0].style.backgroundColor = "white";
        text_box[0].style.color = "black";
    }
}