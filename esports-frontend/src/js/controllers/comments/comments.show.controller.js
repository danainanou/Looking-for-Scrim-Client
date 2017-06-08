angular
.module('esports-app')
.controller('CommentsShowCtrl', CommentsShowCtrl);

CommentsShowCtrl.$inject =
['API', '$stateParams', '$state', 'Comment'];

function CommentsShowCtrl(API, $stateParams, $state, Comment) {
  const vm = this;
  vm.delete = commentsDelete;

  vm.comment = Comment.get($stateParams);

  function commentsDelete() {
    Comment
    .remove({ id: vm.comment.id })
    .$promise
    .then(() => {
      $state.go('commentsIndex');
    });
  }
}
