
angular
  .module('esports-app')
  .controller('PostsNewCtrl', PostsNewCtrl);

PostsNewCtrl.$inject = ['API', '$state', 'Post'];
function PostsNewCtrl(API, $state, Post) {
  const vm  = this;

  vm.create = postsCreate;

  function postsCreate(){
    return Post
      .save({ post: vm.post })
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }
}
