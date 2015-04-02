/* 
 * 
 * 
 * @author Michal Sukupčák <sukupcak@webdesign-studio.sk>
 */
app.directive('ngXCheckbox', function () {
        
    return {
        restrict: 'E',
        templateUrl: 'app/shared/directives/checkbox/Checkbox.html',
        require: 'ngModel',
        link: function (scope,element,attrs,ngModel) {
                    
            // Initialize title
            element[0].querySelector('div.title').innerHTML = attrs.ngXTitle;
                                    
            // Initialize description
            var initValue = scope[attrs.ngModel];
                        
            if (initValue) {
                element[0].querySelector('div.description').innerHTML = attrs.ngXTrue;
                element[0].querySelector('paper-checkbox').setAttribute('checked',true);
            } else {
                element[0].querySelector('div.description').innerHTML = attrs.ngXFalse;
                element[0].querySelector('paper-checkbox').setAttribute('checked',false);
            }
                                    
            // On each change (= click), revert current element status
            element.on('click',function () {
                var value = ngModel.$viewValue;
                if (value) {
                    element[0].querySelector('div.description').innerHTML = attrs.ngXFalse;
                    element[0].querySelector('paper-checkbox').setAttribute('checked',false);
                    ngModel.$setViewValue(false);
                } else {
                    element[0].querySelector('div.description').innerHTML = attrs.ngXTrue;
                    element[0].querySelector('paper-checkbox').setAttribute('checked',true);
                    ngModel.$setViewValue(true);
                }
                scope.$apply();
            });
                        
        }
    };
    
});