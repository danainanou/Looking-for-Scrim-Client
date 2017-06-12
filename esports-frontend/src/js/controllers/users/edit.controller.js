angular
  .module('esports-app')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['API', '$stateParams', '$state', 'User'];
function UsersEditCtrl(API, $stateParams, $state, User) {
  const vm  = this;
  vm.user   = User.get($stateParams);
  vm.update = usersUpdate;

  function usersUpdate() {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }

}
