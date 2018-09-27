let bouton = document.getElementById('toggle'), menu = document.getElementById('menu'), count = 0,imgs = document.querySelectorAll('[class*="images"]'),title = document.querySelector('h2'),words = ["water","learn","grow","protection","care","heal"],
lefts = ["30","30","30","10","30","30"], flowers = document.querySelectorAll('[class*="flower"]')

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
      function()
      {
        title.style.opacity = '0'
        setTimeout(function(){ title.innerHTML = `${words[i]}`, title.style.left = `${lefts[i]}%` }, 500)
        setTimeout(function(){ title.style.opacity = '1' }, 500)
      }
  )
}

//mooving flowers
  tilt()

function tilt()
{
  for (let i = 0; i < flowers.length; i++) {
    setInterval(function(){flowers[i].style.transform = 'rotate(0.01turn)'},1000)
    setInterval(function(){flowers[i].style.transform = 'rotate(-0.01turn)'},2000)
  }
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
