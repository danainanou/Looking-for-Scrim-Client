angular
.module('esports-app')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject =
['API', '$stateParams', '$state', 'Post'];

function PostsShowCtrl(API, $stateParams, $state, Post) {
  const vm = this;
  vm.delete = postsDelete;

  vm.post = Post.get($stateParams);

  function postsDelete() {
    Post
    .remove({ id: vm.post.id })
    .$promise
    .then(() => {
      $state.go('postsIndex');
    });
  }
}
