let bouton = document.getElementById('toggle'), menu = document.getElementById('menu'), count = 0,imgs = document.querySelectorAll('[class*="images"]'),title = document.querySelector('h2'),words = ["water","learn","grow","protection","care","heal"],
lefts = ["30","30","30","10","30","30"]

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
