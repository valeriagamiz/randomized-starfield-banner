var $banner = $('.banner');
var $addStars;
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();



for (i = 0; i < 75; i++) {
  $rotateNum = Math.random() * 1000;
  $scaleNum = Math.random() * 10000;
  $animateNum = Math.random() * 50;
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css({
    left: Math.random() * 1000,
    top: Math.random() * 1000,
    opacity: Math.random() * 10,
    width: Math.random() * 100,
    transform: 'rotate(' + $rotateNum + 'deg)',
    transform: 'scale(' + $scaleNum + '%)',
    animation: 'growstars ' + $animateNum + 's alternate infinite'
  });

 $banner.append($addStars);
};
