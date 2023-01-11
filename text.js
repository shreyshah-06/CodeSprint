// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|!)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.line1',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo"
    // delay: 500
  });

  function togl() {
    const nav = document.querySelector('.tabsList2');
    nav.classList.toggle('tabsList_act');
}