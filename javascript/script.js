
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

function save_button_pressed() {
    var text_area = document.getElementsByTagName("textarea");
    var user_input = text_area[0].value.split('\n');
    var the_title = ""
    var the_contents = "";

    if (user_input[0] != "") {
        console.log(user_input[0]);
        for (var i = 0; i < user_input.length; i++) {
            if (i == 0) {
                the_title = user_input[i];
            }
            else {
                the_contents += user_input[i] + '\n';
            }
        }
        notesArray.push({title: the_title, body: the_contents});
        notes_list = document.getElementById("note-list");
        var list_item = document.createElement("li");
        var link = document.createElement("a");
        link.innerHTML = '<a href="#" onclick="list_item_clicked(this.text)">' + the_title + '</a>';
        list_item.append(link);
        notes_list.append(list_item);
    }
}

function list_item_clicked(source) {
    var text_area = document.getElementsByTagName("textarea");
    for (var i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title == source) {
            text_area[0].value = notesArray[i].title + '\n' + notesArray[i].body;
            break;
        }
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