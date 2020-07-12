angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});



  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };



})

.controller('PlaylistsCtrl', function($scope,$stateParams,$http,$rootScope) {

$scope.isimAl = function(isim){
    $scope.kullanici = isim;

    localStorage.setItem('name',isim);
    $scope.kullanici=localStorage.getItem('name');

}

 $scope.kullanici=localStorage.getItem('name');
 $scope.ruyaBul = function(ruya){

    $http.get('http://yerelsecim.co/webservis/02_Turkan/ruya/?kelime_al='+ruya)
       .success(function(data) {
          $rootScope.ruyalar = data;
       });

}


 /* $scope.ruyalar = [
    { adi: 'Aslan',goren:
      [
         {adi:'Ali',tarih:'3 gün önce'},
         {adi:'Fatma',tarih:'9 gün önce'},
         {adi:'Cemre',tarih:'23 gün önce'},
         {adi:'Cemil',tarih:'26 gün önce'}
      ]
,aciklama:'Rüyada aslan öldürüğünüzü gördüyseniz her alanda başarıya ulaşacağınız anlamına gelmektedir. Rüyada aslanla karşılaşan ve korku duyan bir kimse maceralı sayılan bir işten büyük kazanç sağlayacak ve üstün, önemli biriyle dost olacak anlamına gelir. Kafesteki aslan bir dostun güç durumda kalacağına işarettir.', id: 0 },
    { adi: 'Aslan öldürmek',goren:'9',aciklama:'Rüyada aslan öldürüğünüzü gördüyseniz her alanda başarıya ulaşacağınız anlamına gelmektedir. Rüyada aslanla karşılaşan ve korku duyan bir kimse maceralı sayılan bir işten büyük kazanç sağlayacak ve üstün, önemli biriyle dost olacak anlamına gelir. Kafesteki aslan bir dostun güç durumda kalacağına işarettir.', id: 1 },
    { adi: 'Kaplan',goren:'7',aciklama:'Kaplan ruya aciklaması', id: 2 },
    { adi: 'Ekmek',goren:'2',aciklama:'Ekmek ruya aciklaması', id: 3 },
    { adi: 'Su',goren:'1',aciklama:'Su ruya aciklaması', id: 4 },
    { adi: 'Ateş',goren:'1',aciklama:'Ateş ruya aciklaması', id: 5 },
    { adi: 'Yol',goren:'9',aciklama:'Yol ruya aciklaması', id: 6 },
    { adi: 'Araba',goren:'9',aciklama:'Araba ruya aciklaması', id: 7 },
    { adi: 'Deniz',goren:'9',aciklama:'Deniz ruya aciklaması', id: 8 },
    { adi: 'Köpek',goren:'9',aciklama:'Köpek ruya aciklaması', id: 9 }
  ];
*/


console.log("Gelen ID:"+$stateParams.ruyaId);
if($stateParams.ruyaId){
console.log("Bana bu bilgiyi ver:"+$rootScope.ruyalar[$stateParams.ruyaId].adi);
$scope.bilgi = $rootScope.ruyalar[$stateParams.ruyaId];
}


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
