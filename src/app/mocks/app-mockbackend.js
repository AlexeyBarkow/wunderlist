import ServerDataModel from './server-data-model.js'
export default ['$httpBackend', ServerDataModel, function mockBackend($httpBackend, ServerDataModel) {
  $httpBackend.whenPOST('/login', /^\{"username":"[a-zA-Z]+","password":".*"\}$/).respond(function (method, url, data) {
    console.log(method, url, typeof data);
    return [200, JSON.parse(data).username, {}];
  });
  $httpBackend.whenPOST('/login').respond(function (method, url, data) {
    console.log(method, url, data, 'error')
    return [401, {}, {}]
  });
}];
