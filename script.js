$(function () {
    var $mail = $("#mail"),
        $remail = $("#remail"),
        keyupWait,
        timeout = 1000;
    
    function onKeyup () {
        var text = $mail.val(),
            jqxhr;
        jqxhr = $.get('http://localhost/chatterbot/', {q: "" + text})
            .done(function (data) {
                $remail.html(data);
            })
            .always(function (data) {
                console.log(data);
            });
    }
    
    $mail.on("keyup", function () {
        if (keyupWait) {
            window.clearTimeout(keyupWait);
        }
        keyupWait = window.setTimeout(onKeyup, timeout);
    });
});