function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
});
window.onload = function () {
  let scrolled;
  let timer;

  document.getElementById('upbutton').onclick = function () {
    scrolled = window.pageYOffset;
    // window.scrollTo(0,0);
    scrollToTop();
  }

  function scrollToTop () {
    if (scrolled > 0){
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 5);
    }
    else{
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }


// let smoothJumpUp = function() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//       window.scrollBy(0,-50);
//       setTimeout(smoothJumpUp, 100);
//   }
// }

window.onscroll = function() {
let scrolled = window.pageYOffset || document.documentElement.scrollTop;
if (scrolled > 100) {
  document.getElementById('upbutton').style.display = 'block';
} else {
  document.getElementById('upbutton').style.display = 'none';
}
}
}