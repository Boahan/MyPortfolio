var smallitemNavBar = document.getElementsByClassName('nav-sm')[0];
var normalitemNavBar = document.getElementsByClassName('landing-area-nav')[0];
var smallitemNavBarElements = document.getElementsByClassName('nav-sm-items')[0];
var modalContainer = document.getElementsByClassName('modal-container')[0];
var connectUsNavButtonSm = document.getElementById('connect-btn-sm');
var connectUsNavButtonLg = document.getElementById('connect-btn-lg');
var modalCloseButton = document.getElementById('modal-close-btn');
if(screen.width<576){
    smallitemNavBar.classList.remove('hide');
    normalitemNavBar.classList.add('hide');
}
window.addEventListener('resize',function(){
    if (screen.width<576){
        if(smallitemNavBar.classList.contains('hide')){
            smallitemNavBar.classList.remove('hide');
            normalitemNavBar.classList.add('hide');
        }
    }else {
        smallitemNavBar.classList.add('hide');
        normalitemNavBar.classList.remove('hide');
    }
});

smallitemNavBar.addEventListener('click',function(){
        if(smallitemNavBarElements.classList.contains('hide')){
            smallitemNavBarElements.classList.remove('hide');
        }
    else {
        smallitemNavBarElements.classList.add('hide');
    }
});

smallitemNavBarElements.addEventListener('click',function(){
    smallitemNavBarElements.classList.add('hide');
});

connectUsNavButtonSm.addEventListener('click', function(){
  if(modalContainer.classList.contains('hide')){
    modalContainer.classList.remove('hide');
  }
});

connectUsNavButtonLg.addEventListener('click', function(){
  if(modalContainer.classList.contains('hide')){
    modalContainer.classList.remove('hide');
}
});

modalCloseButton.addEventListener('click', function(){
    modalContainer.classList.add('hide');
});