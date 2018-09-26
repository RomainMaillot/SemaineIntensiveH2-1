let bouton = document.getElementById('toggle'), menu = document.getElementById('menu'), a = 0

bouton.addEventListener(
  "click",
  function(){
    if (a==0) {
      menu.style.transform = "translateX(0)"
      a++
    }
    else if (a==1) {
      a=0
      menu.style.transform = "translateX(100%)"
    }
  }
)
