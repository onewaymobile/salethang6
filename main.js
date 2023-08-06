var screenWidth = window.innerWidth;
if (screenWidth <= 1024 && screenWidth > 350) {
  var text = document.querySelector(".search__bar span")
  text.innerHTML = "Tìm kiếm sản phẩm"
} else if(screenWidth <= 350) {
  var text = document.querySelector(".search__bar span")
  text.innerHTML = "Tìm kiếm"
}
var hideBtns = document.querySelectorAll(".open__hide");
var footerShowParents = document.querySelectorAll(".footer__show--parent");
var body = document.querySelector("body")
var searchBar = document.querySelector(".search__bar");
var menu = document.querySelector("#menu")
var menuBtn = document.querySelector(".search__menu")

menuBtn.onclick = function(){
  menu.classList.add("show")
}
menu.onclick = function(){
  menu.classList.remove("show")
}

hideBtns.forEach(function(hideBtn){
  hideBtn.onclick = function(){
    var parentElement = hideBtn.parentNode;
    var hideEle = parentElement.querySelector(".row__hide");
    var hideEleMbs = parentElement.querySelectorAll(".row__hide-mb");
    if(hideEle){
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

    hideEleMbs.forEach(function(hideEleMb){
      if(hideEleMb.classList.contains('show')){
        hideEleMb.classList.remove('show');
        if(!hideEle){
          hideBtn.innerHTML = "Xem Thêm"
        }
      } else {
        hideEleMb.classList.add('show');
        if(!hideEle){
          hideBtn.innerHTML = "Đóng"
        }
      }
    })

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

searchBar.onclick = function(e){
  e.stopPropagation();
  var searchBarlink =  searchBar.querySelector(".search__bar-link");
  searchBarlink.classList.add("show");
}

body.onclick = function(e){
  var searchBarlink =  searchBar.querySelector(".search__bar-link");
  searchBarlink.classList.remove("show");
}

