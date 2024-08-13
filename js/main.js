var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 70,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  $('.questions__info').on('click', function () {
    var $parentItem = $(this).parent();

    if ($parentItem.hasClass('questions__item--active')) {
      $parentItem.removeClass('questions__item--active');
    } else {
      $('.questions__item').removeClass('questions__item--active');
      $parentItem.addClass('questions__item--active');
    }
  });

  $('.questions__info').click(function () {
    var $button = $(this).find('.questions__btn');

    $button.removeClass('rotate');

    void $button[0].offsetWidth;
    $button.addClass('rotate');
  });
})