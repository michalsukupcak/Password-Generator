/* 
 * Controller for Ui components.
 * 
 */

app.controller('UiController', ['$scope','$location', function ($scope,$location) {

    /**
     * Initialize default values for the controller.
     * 
     */
    $scope.init = function () {
        $scope.appTitle = 'WDS Password Generator';
        $scope.showGeneratorUi = true;
    };

    /**
     * Click on the back arrow in About menu - redirect back to generator page.
     * 
     */
    $scope.back = function () {
        $location.path('/generator');
    };

    /**
     * Whenever route changes, decide which page is shown and set app title and
     * modify UI accordingly.
     * 
     */
    $scope.$on('$routeChangeSuccess', function () {
        var controller = $location.path().split('/')[1];
        if (controller === 'about') {
            $scope.appTitle = 'About';
            $scope.showGeneratorUi = false;
        } else {
            $scope.appTitle = 'WDS Password Generator';
            $scope.showGeneratorUi = true;
        } 
    });

}]);