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