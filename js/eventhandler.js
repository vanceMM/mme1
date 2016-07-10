/**
 * Created by valentin on 04/07/16.
 */
console.log("test ajax");
$(function () {

    $.ajaxSetup({
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connected.\n Verify Network.');
            } else if (jqXHR.status == 404) { alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) { alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') { alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') { alert('Time out error.');
            } else if (exception === 'abort') { alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            } }
    });

});

/*
$(document).ready(function () {
    $.getJSON('crud.php', function (data) {
        console.log("test");
        console.log(data);
    })
});
*/

$(document).ready(function () {
    $.get('crud.php', function (data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        var tbody ='<tbody> ' +
          $.each(json, function (index, item) {
              var type;
              tbody += '<tr><td>' + item.title + '</td><td>' + 'TODO' + '</td><td>' + item.location + '</td><td>' + 'TODO' + '</td><td>' +'</td><td>' + 'TODO' + '</td></tr> ';

          }) + tbody + '</tbody>';
        $("#table_content").html(tbody);
    })
});