angular
  .module('esports-app')
  .controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['API', 'Post'];
function PostsIndexCtrl(API, Post) {
  const vm = this;
  vm.posts = Post.query();
}
