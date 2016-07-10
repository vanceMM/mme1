/**
 * Created by valentin on 10/07/16.
 */
$("#addFormButton").click(function () {
    alert("The paragraph was clicked.");
    $.get('#add_form');
    console.log('#add_form'.blink);
});