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
        fields[i].addEventListener("keydown", validateText);

    }
    document.getElementById("test_button").addEventListener("click", removeHint);
    document.forms["add-form"]["adress"].addEventListener("focusout", validateAdress);
    document.getElementById("false_test_button").addEventListener("click", function () {
        fForm();
        validateClick()
    });
    document.getElementById("test_button").addEventListener("click", validate);
    var checkboxes = document.getElementsByClassName("checkboxes");
    for (var i=0; i<checkboxes.length; i++){
        checkboxes[i].addEventListener("click", validateCheckbox);
    }

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
    } if(re.test(adress.value)) {
        adress.previousElementSibling.innerHTML = "";
    }

}

function removeHint() {
    var fields = document.getElementsByClassName("fa-exclamation-triangle");
    for(var i =0; i<fields.length; i++) {
        fields[i].style.visibility = "hidden";
        fields[i].style.visibility.innerHTML = "";
    }
}
function validateCheckbox() {

    //check if checkboxes is selected(at least one)
    var checkboxes = document.getElementsByClassName("checkboxes");
    if(checkboxes[0].checked === false && checkboxes[1].checked === false && checkboxes[2].checked === false ) {
        document.getElementById("checkbox_warning").innerHTML='<span>No Category selected! Please select at least one!</span>';
    } else {
        document.getElementById("checkbox_warning").innerHTML="";
    }
}

function validate() {
    console.log("validate called");
    validateText();
    validateAdress();
    validateCheckbox();
}

function validateClick() {
    //test for title
    var title = document.forms["add-form"]["title"];
    if (title.value == "") {
        title.previousElementSibling.style.visibility = "visible";
        title.previousElementSibling.innerHTML = '<span class="tooltiptext">Please type in a '+ title.name +'</span>';
    } if (title.value.length > 0 ) {
        title.previousElementSibling.style.visibility = "hidden";
        title.previousElementSibling.innerHTML = "";
    }
    //test for description
    var description = document.forms["add-form"]["description"];
    if (description.value == "") {
        description.previousElementSibling.style.visibility = "visible";
        description.previousElementSibling.innerHTML = '<span class="tooltiptext">Please type in a '+ description.name +'</span>';
    } if (description.value.length > 0 ) {
        description.previousElementSibling.style.visibility = "hidden";
        description.previousElementSibling.innerHTML = "";
    }
    //test for adress
    var adress = document.forms["add-form"]["adress"];
    if (adress.value == "") {
        adress.previousElementSibling.style.visibility = "visible";
        adress.previousElementSibling.innerHTML = '<span class="tooltiptext">Please type in a '+ adress.name +'</span>';
    } if (adress.value.length > 0 ) {
        adress.previousElementSibling.style.visibility = "hidden";
        adress.previousElementSibling.innerHTML = "";
    }
    //check for checkboxes selected
    var checkboxes = document.getElementsByClassName("checkboxes");
    if(checkboxes[0].checked === false && checkboxes[1].checked === false && checkboxes[2].checked === false ) {
        document.getElementById("checkbox_warning").innerHTML='<span>No Category selected! Please select at least one!</span>';
    }
    validateCheckbox();

}