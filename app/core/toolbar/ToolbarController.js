/* 
 * Toolbar controller
 * 
 * @author Michal Sukupčák <sukupcak@webdesign-studio.sk>
 */
app.controller('ToolbarController', [
    '$scope',
    '$location', 
    function (
        $scope,
        $location
    ) {

    /**
     * Initialize default values for the controller.
     * 
     */
    $scope.init = function () {
        $scope.appTitle = 'WDS Password Generator';
        $scope.showBackArrow = false;
        $scope.showEllipsis = true;
    };

    /**
     * Click on the back arrow in About menu - redirect back to generator page.
     * 
     */
    $scope.openGenerator = function () {
        $location.path('/generator');
    };

    /**
     * Click on the About link in elipsis menu.
     * 
     */
    $scope.openAbout = function () {
        $location.path('/about');
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
            $scope.showBackArrow = true;
            $scope.showEllipsis = false;
        } else {
            $scope.appTitle = 'WDS Password Generator';
            $scope.showBackArrow = false;
            $scope.showEllipsis = true;
        } 
    });

}]);