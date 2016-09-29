import angular from 'angular'
const MODULE_NAME = 'list.listGetService';

angular.module(MODULE_NAME, [])
  .factory('getListService', ['$http', 'GET_ALL_LIST', 'GET_LIST_ELEMENTS_BY_QUERY', 'POST_NEW_LIST_ITEM', 'authService', function ($http, getAddress, getElementsAddress, postAddress, authService) {
    let factoryObj = {};

    factoryObj.getListQuery = function (start, size, showCompleted) {
      console.log(start || '0', size || 'full')
      console.log('shall I show completed? ', showCompleted)
      return $http.get(getElementsAddress.replace(':user', authService.getUser() || 'error'), {
        params: {
          start: start || '0',
          size: size || 'full',
          showAll: showCompleted || false
        }
      });
    }
    factoryObj.getAllList = function () {
      return this.getListQuery();
    }
    factoryObj.postListItem = function (data) {
      return $http.post(postAddress.replace(':user', authService.getUser() || 'error'), data);
    }
    return factoryObj;
  }])
  // this one is never used
  .value('GET_ALL_LIST', '/users/:user/list?size=full')
  .value('GET_LIST_ELEMENTS_BY_QUERY', '/users/:user/list')
  .value('POST_NEW_LIST_ITEM', '/users/:user/list');
export default MODULE_NAME;
