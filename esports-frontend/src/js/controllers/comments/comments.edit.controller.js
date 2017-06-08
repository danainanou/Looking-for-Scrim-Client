angular
  .module('esports-app')
  .controller('CommentsEditCtrl', CommentsEditCtrl);

CommentsEditCtrl.$inject = ['API', '$stateParams', '$state', 'Comment'];
function CommentsEditCtrl(API, $stateParams, $state, Comment) {
  const vm = this;


  vm.comment = Comment.get($stateParams);
  vm.update = commentsUpdate;

  function commentsUpdate() {
    Comment
      .update({ id: $stateParams.id }, vm.comment)
      .$promise
      .then(() => {
        $state.go('commentsIndex');
      });
  }
}
