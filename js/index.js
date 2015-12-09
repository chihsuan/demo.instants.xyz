(function() {
  var image = document.createElement('img');
    image.id = 'background';
    image.crossOrigin = 'anonymous';
    document.body.appendChild(image);
  image.src = 'https://s3-ap-northeast-1.amazonaws.com/now.instants.xyz/background.jpg';
})();
