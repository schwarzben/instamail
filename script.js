$(function () {
    var $mail = $("#mail"),
        $remail = $("#remail"),
        $remailHolder = $("#remailholder"),
        keyupWait,
        timeout = 1000,
        audio,
        audioFile = "sounds/New Mail.wav",
        botapiUrl = "http://localhost/chatterbot/botapi-js.php";
    
    function onKeyup () {
        var text = $mail.val(),
            jqxhr;
        jqxhr = $.get(botapiUrl, {q: "" + text})
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
  
    // Fullscreen
    var fsbut = $("<button>fs</button>").appendTo("body");
    fsbut.on("click", function() {
        /* cross-browser implementation, without keys
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
    */
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        fsbut.hide();
    });
});