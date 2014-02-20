// create the module and name it cvApp
  var cvApp = angular.module('cvApp', ['ngRoute','ngStorage','firebase']);

// configure our routes
cvApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'views/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'contactController'
    })

    // route for the basic section
    .when('/basic', {
      templateUrl : 'views/basic.html',
      controller  : 'basicController' 
    })

    // route for the education section
    .when('/education', {
      templateUrl : 'views/education.html',
      controller  : 'educationController' 
    })

    // route for the pastExperiences section
    .when('/pastExperiences', {
      templateUrl : 'views/pastExperiences.html',
      controller  : 'pastExperiencesController' 
    })

    // route for the skills section
    .when('/skills', {
      templateUrl : 'views/skills.html',
      controller  : 'skillsController' 
    })

    // route for the skills section
    .when('/finish', {
      templateUrl : 'views/finish.html',
      controller  : 'finishController' 
    });
});

// create the controller and inject Angular's $scope
cvApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Welcome to the CV website';
});

cvApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

cvApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});

cvApp.controller('basicController', function($scope,$sessionStorage) {
  $scope.message = 'This is the basic section';
  $scope.$storage = $sessionStorage.$default({
    firstName : '',
    lastName  : '',
    email     : ''
  });
});

cvApp.controller('educationController', function($scope,$sessionStorage) {
  $scope.message = 'This is the education section';
  $scope.$storage = $sessionStorage.$default({
    college : '',
    major    : ''
  });
});

cvApp.controller('pastExperiencesController', function($scope,$sessionStorage) {
  $scope.message   = 'This is the past experiences section';
  $scope.$storage = $sessionStorage.$default({
    pastWork  : '',
    volunteer : ''
  });
});

cvApp.controller('skillsController', function($scope,$sessionStorage) {
  $scope.message = 'This is the skills section';
  $scope.$storage = $sessionStorage.$default({
    skill  : ''
  });
});

cvApp.controller('finishController', function($scope,$sessionStorage) {
  $scope.message = 'This is your resume';
  $scope.$storage = $sessionStorage.$default({});
});


// Sample Controller
.controller("SampleController", ["$scope", "$firebase", "$firebaseSimpleLogin",
  
]);
