(function() {
  function AlbumCtrl() {
    this.albumData = angular.copy(albumPicasso);
    }
console.log(albumPicasso);

  angular
  .module('blocJams')
  .controller('AlbumCtrl', AlbumCtrl);
})();
