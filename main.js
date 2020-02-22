function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const check = key.getElementsByTagName("input")[0];
    const slider = key.getElementsByTagName("input")[1];
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    if(check.checked == true){
        var timer = setInterval(function(){
            audio.play();
        },1000)
      }
      else{
          clearInterval(timer);
      }     
    document.getElementById("history").innerHTML += e.key + " - ";
  }

  const keys = Array.from(document.querySelectorAll('.box'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

function clearBtn(){
    document.getElementById("history").innerHTML = "";
    location.reload();
}
