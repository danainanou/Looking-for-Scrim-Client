angular
.module('esports-app')
.factory('Comment', commentFactory);

commentFactory.$inject = ['API', '$resource'];
function commentFactory(API, $resource){
  return $resource(`${API}/comments/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
