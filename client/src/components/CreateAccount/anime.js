import anime from 'animejs';

function animateThing2() {

var playPause = anime({

        targets: ".CaForm",
        translateX: [
            { value: -800, duration: 8000 }
          ],
          delay: function(el, i, l) { return i * 1000 },
          autoplay: false
    });

    document.querySelector("#btn2").onclick = playPause.play;
    // document.querySelector("#btn5").onclick = playPause.play;
}



export default { animateThing2 };