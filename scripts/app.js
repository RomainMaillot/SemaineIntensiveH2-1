let bouton = document.getElementById('toggle'), menu = document.getElementById('menu'), count = 0,imgs = document.querySelectorAll('[class*="images"]'),title = document.querySelector('h2'),words = ["water","learn","grow","protection","care","heal"],
lefts = ["30","30","30","10","30","30"], counter = 0

//menu animation
bouton.addEventListener(
  "click",
  function(){
    if (count==0) {
      menu.style.transform = "translateX(0)"
      count++
    }
    else if (count==1) {
      count=0
      menu.style.transform = "translateX(100%)"
    }
  }
)

//wheel hover
for(let i = 0;i<imgs.length;i++)
{
  imgs[i].addEventListener(
    'mouseover',
    function() {
      wheel(i)
    }
  )
}

//responsive wheel
if (document.documentElement.clientWidth <= 1024 && document.querySelectorAll('#homepage_container').length==1) {
  window.onload = function () {
    setInterval(function(){
      if (counter<6) {
        wheel(counter)
        counter++
      }
      else {
        counter = 0
      }
    },1500)
   }
}


function wheel(number){
  title.style.opacity = '0'
  imgs[number].classList.toggle('big')
  setTimeout(function(){imgs[number].classList.toggle('big') }, 500)
  setTimeout(function(){ title.innerHTML = `${words[number]}`, title.style.left = `${lefts[number]}%` }, 500)
  setTimeout(function(){ title.style.opacity = '1' }, 500)
}

//scrolling animation
var controller = new ScrollMagic.Controller();
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
        // trigger animation by adding a css class
        .setClassToggle("#animate1", "enter")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
        // trigger animation by adding a css class
        .setClassToggle("#animate2", "enter")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger3"})
        // trigger animation by adding a css class
        .setClassToggle("#animate3", "enter")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger4"})
        // trigger animation by adding a css class
        .setClassToggle("#animate4", "open")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger4"})
        // trigger animation by adding a css class
        .setClassToggle("#animate5", "open1")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger6"})
        // trigger animation by adding a css class
        .setClassToggle("#animate6", "turn")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger7"})
        // trigger animation by adding a css class
        .setClassToggle("#animate7", "turn")
        .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger8"})
        // trigger animation by adding a css class
        .setClassToggle("#animate8", "turn")
        .addTo(controller);
