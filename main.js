var SpeechRecognition = window.webkitpeechRecognition;

var recognition = new SpeechRecognition();

funcction Start()
{
    document.getElementById("textbox").innerHTML
    recognition.Start()

}
recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].trancript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}

function speak(){
}


