$(function () {
    var $mail = $("#mail"),
        $remail = $("#remail"),
        $remailHolder = $("#remailholder"),
        keyupWait,
        timeout = 1000,
        audio,
        audioFile = "sounds/New Mail.wav";
    
    function onKeyup () {
        var text = $mail.val(),
            jqxhr;
        jqxhr = $.get('http://localhost/chatterbot/', {q: "" + text})
            .done(function (data) {
                $remail.html(data);
                audio.play();
                $remailHolder.show("slow");
            })
            .always(function (data) {
                console.log(data);
            });
    }
    
    $remailHolder.hide();
    audio = new Audio(audioFile);
    $mail.on("keyup", function () {
        if (keyupWait) {
            window.clearTimeout(keyupWait);
        }
        keyupWait = window.setTimeout(onKeyup, timeout);
    });
});