window.addEventListener("keydown", function(e){
    var sound = this.document.querySelectorAll("audio");
    sound.forEach(element => {
        if(e.keyCode == element.dataset.key){
            element.play();
            this.document.getElementById("history").innerHTML += e.key + " - ";
            };
        });
});
function clearBtn() {
    document.getElementById("history").innerHTML = "";
}