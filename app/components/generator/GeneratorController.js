/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('GeneratorController', ['$scope','$localStorage', function ($scope,$localStorage) {
        
    /**
     * Initializes controller instance - set default variables.
     * 
     */
    $scope.init = function (allowSave) {
        $scope.alias = '';
        if ($localStorage.secret && allowSave === true) {
            $scope.secret = $localStorage.secret;
            $scope.saveSecret = true;
            //document.querySelector('paper-checkbox[ng-model]').setAttribute('checked',true);
        } else {
            delete $localStorage.secret;
            $scope.secret = '';
            $scope.saveSecret = false;
        }
        console.log($scope.saveSecret);
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
     * Show warning dialog.
     */
    $scope.showWarning = function () {
        if ($scope.saveSecret === true) {
            document.querySelector('paper-action-dialog#warning').toggle();
        }
    };
    
    /**
     * Reset generator form - set default values to variables and show toast
     * message.
     */
    $scope.clear = function () {
        $scope.init(false);
        $scope.toast('All data have been cleared.');
    };
    
    /**
     * Check if both alias and secret have been filled in. If yes, run
     * generator, otherwise show toast message.
     */
    $scope.generate = function () {
        if ($scope.alias.length > 0 && $scope.secret.length > 0) {
            $scope.password = Base64.encode(Sha256.hash($scope.alias+$scope.secret)).substring(17,49);
            document.querySelector('paper-action-dialog#password').open();
            if ($scope.saveSecret === true) {
                $localStorage.secret = $scope.secret;
            }
        } else {
            $scope.toast('Please fill in both Alias and Secret!');
        }
    };
        
    /**
     * Show toast message.
     */
    $scope.toast = function (string) {
        var notification = document.querySelector('paper-toast');
        notification.dismiss();
        notification.setAttribute('text',string);
        notification.show();
    };
            
}]);