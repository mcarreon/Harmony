import anime from 'animejs';

function animateThing() {
  console.log('hello')
  // debugger;
  anime.timeline({loop: false})
  .add({
    targets: '.container .welcome',
  
    opacity: [0,0],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.container .welcome',
    opacity: 1,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 10
  });

  // anime.timeline({loop: false})
  // .add({
  //   targets: '.container .buttons',
  
  //   opacity: [0,0],
  //   easing: "easeOutCirc",
  //   duration: 800,
  //   delay: function(el, i) {
  //     return 800 * i;
  //   }
  // }).add({
  //   targets: '.container .buttons',
  //   opacity: 1,
  //   duration: 8000,
  //   easing: "easeOutExpo",
  //   delay: 3000
  // });

  // anime.timeline({loop: false})
  // .add({
  //   targets: '.container .C2',
  
  //   opacity: [0,0],
  //   easing: "easeOutCirc",
  //   duration: 800,
  //   delay: function(el, i) {
  //     return 800 * i;
  //   }
  // }).add({
  //   targets: '.container .C2',
  //   opacity: 1,
  //   duration: 8000,
  //   easing: "easeOutExpo",
  //   delay: 3000
  // });
}

export default { animateThing };