$(function () {
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