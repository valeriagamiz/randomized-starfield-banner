var $body = $('.banner');
var $star;
var bannerWidth = $body.outerWidth();
var bannerHeight = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * bannerHeight,
    left: Math.random() * bannerWidth,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'

  });
  $body.append($star);
}
