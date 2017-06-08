angular
  .module('esports-app')
  .controller('PostsEditCtrl', PostsEditCtrl);

PostsEditCtrl.$inject = ['API', '$stateParams', '$state', 'Post'];
function PostsEditCtrl(API, $stateParams, $state, Post) {
  const vm = this;


  vm.post = Post.get($stateParams);
  vm.update = postsUpdate;

  function postsUpdate() {
    Post
      .update({ id: $stateParams.id }, vm.post)
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }
}
