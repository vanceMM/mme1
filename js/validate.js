/**
 * Created by valentin on 23/05/16.
 */

document.addEventListener("DOMContentLoaded", validate, false);

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