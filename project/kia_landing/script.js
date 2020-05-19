$(document).ready( function () {
                 $( '.next' ).click(function(){
                     var currentImage = $('.img_slider_1.curry');
                     var currentImageIndex = $('.img_slider_1.curry').index();
                     var nextImageIndex = currentImageIndex + 1;
                     var nextImage = $('.img_slider_1').eq(nextImageIndex);
                     currentImage.fadeOut(2000);
                     currentImage.removeClass('curry');

                     if(nextImageIndex == ($('.img_slider_1:last').index()+1)){
                         $('.img_slider_1').eq(0).fadeIn(2000);
                         $('.img_slider_1').eq(0).addClass('curry');
                     } else {
                         nextImage.fadeIn(2000);
                         nextImage.addClass('curry');
                     }
                 });

    $('.prev').click(function(){
                     var currentImage = $('.img_slider_1.curry');
                     var currentImageIndex = $( '.img_slider_1.curry' ).index();
                     var prevImageIndex = currentImageIndex - 1;
                     var prevImage = $('.img_slider_1').eq(prevImageIndex);

                    currentImage.fadeOut(2000);
                    currentImage.removeClass('curry');
                    prevImage.fadeIn(2000);
                    prevImage.addClass('curry');


                    });
                 });

$(document).ready( function () {
                 $( '.next_2' ).click(function(){
                     var currentImage = $('.img_slider_2.curry');
                     var currentImageIndex = $('.img_slider_2.curry').index();
                     var nextImageIndex = currentImageIndex + 1;
                     var nextImage = $('.img_slider_2').eq(nextImageIndex);
                     currentImage.fadeOut(2000);
                     currentImage.removeClass('curry');

                     if(nextImageIndex == ($('.img_slider_2:last').index()+1)){
                         $('.img_slider_2').eq(0).fadeIn(2000);
                         $('.img_slider_2').eq(0).addClass('curry');
                     } else {
                         nextImage.fadeIn(2000);
                         nextImage.addClass('curry');
                     }
                 });

    $('.prev_2').click(function(){
                     var currentImage = $('.img_slider_2.curry');
                     var currentImageIndex = $( '.img_slider_2.curry' ).index();
                     var prevImageIndex = currentImageIndex - 1;
                     var prevImage = $('.img_slider_2').eq(prevImageIndex);

                    currentImage.fadeOut(2000);
                    currentImage.removeClass('curry');
                    prevImage.fadeIn(2000);
                    prevImage.addClass('curry');


                    });
                 });

$(document).ready( function () {
                 $( '.next_3' ).click(function(){
                     var currentImage = $('.img_slider_3.curry');
                     var currentImageIndex = $('.img_slider_3.curry').index();
                     var nextImageIndex = currentImageIndex + 1;
                     var nextImage = $('.img_slider_3').eq(nextImageIndex);
                     currentImage.fadeOut(2000);
                     currentImage.removeClass('curry');

                     if(nextImageIndex == ($('.img_slider_3:last').index()+1)){
                         $('.img_slider_3').eq(0).fadeIn(2000);
                         $('.img_slider_3').eq(0).addClass('curry');
                     } else {
                         nextImage.fadeIn(2000);
                         nextImage.addClass('curry');
                     }
                 });

    $('.prev_3').click(function(){
                     var currentImage = $('.img_slider_3.curry');
                     var currentImageIndex = $( '.img_slider_3.curry' ).index();
                     var prevImageIndex = currentImageIndex - 1;
                     var prevImage = $('.img_slider_3').eq(prevImageIndex);

                    currentImage.fadeOut(2000);
                    currentImage.removeClass('curry');
                    prevImage.fadeIn(2000);
                    prevImage.addClass('curry');


                    });
                 });

table1.onclick = function(){
  document.getElementById('table1').classList.add("clickerTable");
  document.getElementById('table2').classList.remove("clickerTable");
  document.getElementById('table3').classList.remove("clickerTable");
  document.getElementById('text1').innerHTML = 123;
  document.getElementById('text2').innerHTML = 151;
  document.getElementById('text3').innerHTML = 7.4;
  document.getElementById('text4').innerHTML = 12.01;
}
table2.onclick = function(){
  document.getElementById('table1').classList.remove("clickerTable");
  document.getElementById('table2').classList.add("clickerTable");
  document.getElementById('table3').classList.remove("clickerTable");
  document.getElementById('text1').innerHTML = 150;
  document.getElementById('text2').innerHTML = 192;
  document.getElementById('text3').innerHTML = 8.4;
  document.getElementById('text4').innerHTML = 9.2;
}
table3.onclick = function(){
  document.getElementById('table1').classList.remove("clickerTable");
  document.getElementById('table2').classList.remove("clickerTable");
  document.getElementById('table3').classList.add("clickerTable");
  document.getElementById('text1').innerHTML = 200;
  document.getElementById('text2').innerHTML = 265;
  document.getElementById('text3').innerHTML = 9.01;
  document.getElementById('text4').innerHTML = 7.5;
}

interier.onclick = function(){
  document.getElementById('exterior').classList.remove("clickerTable");
  document.getElementById('interier').classList.add("clickerTable");
  document.getElementById('clickInterier').classList.remove("displayNone");
  document.getElementById("colors").style.display = "none";
  document.getElementById("showrum").style.display = "none";
}
exterior.onclick = function(){
  document.getElementById('exterior').classList.add("clickerTable");
  document.getElementById('interier').classList.remove("clickerTable");
  document.getElementById('clickInterier').classList.add("displayNone");
  document.getElementById("colors").style.display = "flex";
  document.getElementById("showrum").style.display = "flex";
}
