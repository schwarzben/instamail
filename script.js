$(function () {
    var $mail = $("#mail"),
        $remail = $("#remail"),
        keyupWait,
        timeout = 1000;
    
    function onKeyup () {
        var text = $mail.val(),
            jqxhr;
        // debug
        //$remail.text('Danke!');
        jqxhr = $.get('http://localhost/chatterbot/', {q: "" + text})
            .done(function (data) {
                $remail.val(data);
            })
            .always(function (data) {
                console.log(data);
            });
    }
    
    $remail.attr("disabled", "disabled");
    $mail.on("keyup", function () {
        if (keyupWait) {
            window.clearTimeout(keyupWait);
        }
        keyupWait = window.setTimeout(onKeyup, timeout);
    });
});