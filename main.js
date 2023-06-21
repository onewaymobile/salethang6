var hideBtns = document.querySelectorAll(".open__hide");
var footerShowBtns = document.querySelectorAll(".footer__show--btn");

hideBtns.forEach(function(hideBtn){
  hideBtn.onclick = function(){
    var parentElement = hideBtn.parentNode;
    var hideEle = parentElement.querySelector(".row__hide");
    hideEle.classList.add('show-on-pc')
    hideBtn.classList.add('hide_on_pc')
  }
})

footerShowBtns.forEach(function(footerShowBtn){
  footerShowBtn.onclick = function(){
    var footerShowItem = footerShowBtn.querySelector(".footer__show--item");
    hideEle.classList.add('show-on-pc')
    hideBtn.classList.add('hide_on_pc')
  }
})
