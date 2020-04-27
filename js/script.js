window.onload=function(){
    var height_h1r=$(document).height();
    $('#head_h1').animate({height: 230, overflow: 'none'},1000);
};



document.getElementById('imgselector').onclick = function() {
  if(document.getElementById('imgselector').checked){
      document.getElementById('img_1').classList.remove('curry');
      document.getElementById('img_2').classList.add('curry');
      document.getElementById('about_text').classList.add('vibrate-3');
  }else{
      document.getElementById('img_2').classList.remove('curry');
      document.getElementById('img_1').classList.add('curry');
      document.getElementById('about_text').classList.remove('vibrate-3');
  }
};
