import ServerDataModel from './server-data-model.js'
export default ['$httpBackend', ServerDataModel, 'authService', function mockBackend($httpBackend, ServerDataModel, auth) {
  let responseList = [
    {
      title: 'ToDo item #1',
      text: 'some text here',
      date: new Date(2016, 11, 16)
    },
    {
      title: 'ToDo item #2',
      text: 'some text here',
      date: new Date(2017, 1, 12)
    },
    {
      title: 'ToDo item #3',
      text: 'some text here',
      date: new Date(2017, 3, 2)
    }
  ]
  $httpBackend.whenGET(/^\/users\/[a-zA-Z0-9]{4,10}\/list?.*$/).respond(function (method, url, data) {
    if (auth.getUser()) {
      return [200, {
        list: responseList
      }, {}];
    } else {
      return [401, {}, {}];
    }
  });
  $httpBackend.whenPOST('/login', /^\{"username":"[a-zA-Z0-9]{4,10}","password":".*"\}$/).respond(function (method, url, data) {
    console.log(method, url, typeof data);
    return [200, JSON.parse(data).username, {}];
  });
  $httpBackend.whenPOST('/login').respond(function (method, url, data) {
    console.log(method, url, data, 'error')
    return [401, {}, {}];
  });
  $httpBackend.whenPOST('/logout').respond(function (method, url, data) {
    return [200, {}, {}];
  });

}];
