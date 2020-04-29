let popup = document.getElementById('mypopup');
let popupToggle = document.getElementById('header_btn');
let popupClose = document.querySelector('.close');
let popupFooter = document.getElementById('footer_btn');
let thanksPopup = document.getElementById('thanksPopup');
let callme = document.getElementById('call');
let ok = document.getElementById('ok');
let secondClose = document.getElementById('secondClose');

popupFooter.onclick = function() {
  popup.style.display = "block";
}
callme.onclick = function() {
  thanksPopup.style.display = "block";
  popup.style.display = "none";
}
popupToggle.onclick = function() {
  popup.style.display = "block";
}
popupClose.onclick = function() {
  popup.style.display = "none";
}

ok.onclick = function() {
  thanksPopup.style.display = "none";
}
window.onclick = function(e) {
  if (e.target == popup){
      popup.style.display = "none";
  }else if (e.target == thanksPopup){
    thanksPopup.style.display = "none";
  }
}

secondClose.onclick = function() {
  thanksPopup.style.display = "none";
}


$('.accordion-head .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-head').hasClass('active')) {
        // Remove active classes
        $('.accordion-head').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-head').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-head').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('text_p').not($content).slideUp('fast');
});
/*plus.onclick = function() {
  plus.style.display = "none";
  document.querySelector('.text_p').style.display = 'block';
  minus.style.display = "block";
}
minus.onclick = function() {
  plus.style.display = "block";
  document.querySelector('.text_p').style.display = 'none';
  minus.style.display = "none";
}*/
