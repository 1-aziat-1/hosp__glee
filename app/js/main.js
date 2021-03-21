$(function () {
  
  $('.product-page__input').styler();

  $('.product-slider__thumb').slick({
    asNavFor: '.product-slider__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-slider__big').slick({
    asNavFor: '.product-slider__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop__content-btn').on('click',function (){
    $('.shop__content-btn').removeClass('shop__content-btn--active');
    $(this).addClass('shop__content-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list')
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
  });

  $(function () {

    $(".star__list").rateYo({
      rating: 3.6,
      starWidth: "20px",
      readOnly: true
    });


    $(".star__product").rateYo({
      spacing: "10px",
      starWidth: "12px",
      readOnly: true 
    });
    

  });

  $(function () {

    $(".star").rateYo({
      rating: 3.6,
      starWidth: "12px",
      readOnly: true
    });

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text('$' + data.from);
      $('.filter-price__to').text('$' + data.to);
    },
    onChange: function (data){
      $('.filter-price__from').text('$' + data.from);
      $('.filter-price__to').text('$' + data.to);
    },
  });


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  var containerEl1 = document.querySelector('[data-ref="container-1"]')
  var containerEl2 = document.querySelector('[data-ref="container-2"]')
  var config = {
    controls: {
      scope: 'local'
    }
  }
  var Mixer1 = mixitup(containerEl1, config)
  var Mixer2 = mixitup(containerEl2, config)
});