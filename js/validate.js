/**
 * Created by valentin on 23/05/16.
 */

document.addEventListener("DOMContentLoaded", init, true);

/**
 * regex for a german adress
 * @type {RegExp}
 */

var re = /([a-zäöüß\s\d.,-]+?)\s*([\d\s]+(?:\s?[-|+/]\s?\d+)?\s*[a-z]?)?\s*(\d{5})\s*(.+)/;

function init() {
    var fields = document.getElementsByClassName("textfield");
    for(var i=0; i<fields.length; i++){
        fields[i].addEventListener("focusout", validateText);

    }
    document.getElementById("test_button").addEventListener("click", removeHint);
    document.forms["add-form"]["adress"].addEventListener("focusout", validateAdress);

}

function validateText() {
    if (this.value == "") {
        this.previousElementSibling.style.visibility = "visible";
        this.previousElementSibling.innerHTML = '<span class="tooltiptext">Please type in a '+ this.name +'</span>';
    } if (this.value.length > 0 ) {
        this.previousElementSibling.style.visibility = "hidden";
        this.previousElementSibling.innerHTML = "";
    }
}

function validateAdress() {
    var adress = document.forms["add-form"]["adress"];
    console.log(adress);
    if(!re.test(adress.value)) {
        adress.previousElementSibling.style.visibility = "visible";
        adress.previousElementSibling.innerHTML = '<span class="tooltiptext">Please type in a valid adress</span>';
    }

}

function removeHint() {
    var fields = document.getElementsByClassName("fa-exclamation-triangle");
    for(var i =0; i<fields.length; i++) {
        fields[i].style.visibility = "hidden";
        fields[i].style.visibility.innerHTML = "";
    }
}
function validate() {
    
    var checkboxes = document.getElementsByClassName("checkboxes");
    checkboxes.forEach(function (item) {
        if(item.checked == true) {
            return true
        } else {
            console.log("none selected");
            false;
        }
    })
}