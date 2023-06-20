var hideBtns = document.querySelectorAll(".open__hide");

hideBtns.forEach(function(hideBtn){
  hideBtn.onclick = function(){
    var parentElement = hideBtn.parentNode;
    var hideEle = parentElement.querySelector(".row__hide");
    hideEle.classList.add('show-on-pc')
    hideBtn.classList.add('hide_on_pc')
  }
})
