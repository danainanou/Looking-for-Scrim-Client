angular
.module('esports-app')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject =
['API', '$stateParams', '$state', 'Post', 'Comment'];

function PostsShowCtrl(API, $stateParams, $state, Post, Comment) {
  const vm  = this;
  vm.delete = postsDelete;
  vm.createComment = createComment;
  vm.post   = Post.get($stateParams);


  function createComment() {
    vm.comment.post_id = $stateParams.id;

    Comment
      .save(vm.comment)
      .$promise
      .then(comment => {
        vm.post.comments.push(comment);
        vm.comment.body = '';
      });
  }

  function postsDelete() {
    Post
    .remove({ id: vm.post.id })
    .$promise
    .then(() => {
      $state.go('postsIndex');
    });
  }
}
