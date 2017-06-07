angular
.module('esports-app')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl as usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl as usersEdit'
  })
  .state('postsIndex', {
    url: '/posts',
    templateUrl: '/js/views/posts/posts.index.html',
    controller: 'PostsIndexCtrl as postsIndex'
  })
  .state('postsShow', {
    url: '/posts/:id',
    templateUrl: '/js/views/posts/posts.show.html',
    controller: 'PostsShowCtrl as postsShow'
  })
  .state('postsNew', {
    url: '/posts/new',
    templateUrl: '/js/views/posts/posts.new.html',
    controller: 'PostsNewCtrl as postsNew'
  })
  .state('postsEdit', {
    url: '/posts/:id',
    templateUrl: '/js/views/posts/posts.edit.html',
    controller: 'PostsEditCtrl as postsEdit'
  });

  $urlRouterProvider.otherwise('/');
}
