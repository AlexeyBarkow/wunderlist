import angular from 'angular'
const MODULE_NAME = 'list.listGetService';

angular.module(MODULE_NAME, [])
  .factory('getListService', ['$http', 'GET_ALL_LIST', 'GET_LIST_ELEMENTS_BY_QUERY', 'authService', function ($http, getAddress, getElementsAddress, authService) {
    let factoryObj = {};

    factoryObj.getListQuery = function (start, size) {
      return $http.get(getAddress.replace(':user', authService.getUser() || 'error'), {
        params: {
          start: start || '0',
          size: size || 'full'
        }
      });
    }
    factoryObj.getAllList = function () {
      return this.getListQuery();
    }
    return factoryObj;
  }])
  // this one is never used
  .value('GET_ALL_LIST', '/users/:user/list?size=full')
  .value('GET_LIST_ELEMENTS_BY_QUERY', '/users/:user/list?start=:start&size=:size');

export default MODULE_NAME;
