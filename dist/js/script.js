$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  items:1,
  lazyLoad:true,
  loop:true,
  autoplay:true,
  margin:10
});
var headerButton = document.querySelector('.header__button');
var lidwindow = document.querySelector('.lidwindow');
var exitButton = document.querySelector('.lidwindow__box__exit');
var autoLinks = document.querySelectorAll('.auto__link');
var winoverlay = document.querySelector('.winoverlay');

headerButton.addEventListener('click', function() {
lidwindow.classList.add('lidwindow__active');
});

exitButton.addEventListener('click', function() {
lidwindow.classList.remove('lidwindow__active');
});

autoLinks.forEach(function(autoLink) {
autoLink.addEventListener('click', function() {
  lidwindow.classList.add('lidwindow__active');
});

// сендвич активность


});

$(document).ready(function() {
  $('body').on('click', '.sandwich', function() {
    $('.sandwich__window').addClass('sandwichact');
  });

  $('body').on('click', '.sandwichenxt', function() {
    $('.sandwich__window').removeClass('sandwichact');
  });
});

// отправка формы

$(document).ready(function() {

  $('form').submit(function(e) {
    e.preventDefault();
    var form = $(this); // Store the form element in a variable

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: form.serialize()
    }).done(function() {
      form.find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      
      // Add the class to the specified element
      $('.thankyou').addClass('thankyouact');
      
      // Remove the class from the specified element
      $('.lidwindow').removeClass('lidwindow__active');
    });

    return false;
  });

  // Event handler for the "Хорошо" button
  $('.thankyou__box__btn').on('click', function() {
    // Remove the class from the specified element
    $('.thankyou').removeClass('thankyouact');
  });


// яндекс метрика
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(94017058, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });

   // гугл аналитика
   
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BB00LVQLZ');

});