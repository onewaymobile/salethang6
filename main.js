var hideBtns = document.querySelectorAll(".open__hide");
var footerShowParents = document.querySelectorAll(".footer__show--parent");
hideBtns.forEach(function(hideBtn){
  hideBtn.onclick = function(){
    var parentElement = hideBtn.parentNode;
    var hideEle = parentElement.querySelector(".row__hide");
    if(hideEle.classList.contains('show-on-pc')){
      console.log("close")
      hideEle.classList.remove('show-on-pc');
      hideBtn.innerHTML = "Xem Thêm"
    } else {
      console.log("open")
      hideEle.classList.add('show-on-pc');
      hideBtn.innerHTML = "Đóng"
    }
  }
})
footerShowParents.forEach(function(footerShowParent){
  var headerBtn = footerShowParent.querySelector(".footer__show--btn")
  headerBtn.onclick = function(){
    var footerShowItem = footerShowParent.querySelector(".footer__show--item");
    if(footerShowItem.classList.contains('show')){
      footerShowItem.classList.remove('show')
    } else {
      footerShowItem.classList.add('show')
    }
  }
})
