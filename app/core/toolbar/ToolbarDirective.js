/* 
 * Directive for a core-header-panel element containing configuration to display 
 * Drawer content.
 * 
 * @author Michal Sukupčák <sukupcak@webdesign-studio.sk>
 * @copyright Webdesign Studio s.r.o. (c) 2015
 */
app.directive('ngXToolbar', function () {
    
    return {
        restrict: 'A',
        templateUrl: './app/core/toolbar/Toolbar.html',
        controller: 'ToolbarController'
    };
    
});