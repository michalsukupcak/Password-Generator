/* 
 * Sets up routerProvider.
 * 
 */

app.config(function ($routeProvider) {
    $routeProvider
    .when('/about',{
        templateUrl: 'app/components/about/About.html',
        controller: 'AboutController'
    })
    .when('/generator',{
        templateUrl: 'app/components/generator/Generator.html',
        controller: 'GeneratorController'
    }).otherwise({
        redirectTo: '/generator'
    });
});