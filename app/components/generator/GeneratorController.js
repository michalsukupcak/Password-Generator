/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('GeneratorController', ['$scope', function ($scope) {
        
    /**
     * Initializes controller instance - set default variables.
     * 
     */
    $scope.init = function () {
        $scope.alias = '';
        $scope.secret = '';
        $scope.password = '';
        $scope.visibleSecret = false;
    };
    
    /**
     * Switch between text and password input types for ng-model="secret" field.
     * 
     */
    $scope.toggleSecret = function () {
        $scope.visibleSecret = !$scope.visibleSecret;
    };
    
    /**
     * Reset generator form - set default values to variables and show toast
     * message.
     * 
     * @returns {undefined}
     */
    $scope.clear = function () {
        $scope.init();
        $scope.toast('All data have been cleared.');
    };
    
    /**
     * Check if both alias and secret have been filled in. If yes, run
     * generator, otherwise show toast message.
     * 
     * @returns {undefined}
     */
    $scope.generate = function () {
        if ($scope.alias.length > 0 && $scope.secret.length > 0) {
            $scope.password = Base64.encode(Sha256.hash($scope.alias+$scope.secret)).substring(17,49);
            document.querySelector('paper-action-dialog').open();
        } else {
            $scope.toast('Please fill in both Alias and Secret!');
        }
    };
        
    /**
     * Show toast message.
     * 
     * @param {string} string
     */
    $scope.toast = function (string) {
        var notification = document.querySelector('paper-toast');
        notification.dismiss();
        notification.setAttribute('text',string);
        notification.show();
    };
        
}]);