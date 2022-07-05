$(() => {
  $('.registration-wrap').hide();
  $('.dark-block').hide();

  $('.register-btn').click(function () {
    $(this).fadeOut(1);
    $('.dark-block').fadeIn(1000);
    $('.registration-wrap').fadeIn(1000);
  })
  $("body").bind('keydown', function (e) {
    if (e.which === 27) {
      setTimeout(function () {
        $('.register-btn').fadeIn(600);
      }, 1000)
      $('.dark-block').fadeOut(1000);
      $('.registration-wrap').fadeOut(1000);
    }
  });
  $(".lol").bind('click', function (e) {
    setTimeout(function () {
      $('.register-btn').fadeIn(600);
    }, 1000)
    $('.dark-block').fadeOut(1000);
    $('.registration-wrap').fadeOut(1000);
  });
})