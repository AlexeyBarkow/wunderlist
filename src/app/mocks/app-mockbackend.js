import ServerDataModel from './server-data-model.js'
export default ['$httpBackend', ServerDataModel, 'authService', function mockBackend($httpBackend, ServerDataModel, auth) {
  let responseList = [
    // {
    //   title: 'ToDo item #1',
    //   text: 'some text here',
    //   date: new Date(2016, 11, 16)
    // },
    // {
    //   title: 'ToDo item #2',
    //   text: 'some text here',
    //   date: new Date(2017, 1, 12)
    // },
    // {
    //   title: 'ToDo item #3',
    //   text: 'some text here',
    //   date: new Date(2017, 3, 2)
    // },
    // {
    //   title: 'ToDo item #3',
    //   text: 'some text here',
    //   date: new Date(2017, 3, 2)
    // }
  ]
  for (let i = 0; i < 100; i++) {
      responseList.push({
        title: `ToDo item #${ i + 1 }`,
        text: 'some text here',
        completed: Math.random() > 0.5 ? false : true,
        date: new Date(2017, Math.random() * 12, Math.random() * 31),
        dateAdded: Date.now()
      });
  }

  $httpBackend.whenGET(/^\/users\/[a-zA-Z0-9]{4,10}\/list(.*)/).respond(function (method, url, data) {
    // console.log(/^\/users\/[a-zA-Z0-9]{4,10}\/list\?size=(.*)&start=(.*)$/.exec(url), url)
    console.log(url)
    let parsed = /^\/users\/([a-zA-Z0-9]{4,10})\/list\?showAll=(true|false)&size=([^$&]*)&start=([^$&]*)$/.exec(url);
    let showAll = parsed[2] === 'true' ? true : false;
    let size = parsed[3] === 'full' ? responseList.length : Number.parseInt(parsed[3]);
    let start = Number.parseInt(parsed[4]);
    let sentList = showAll ? responseList : responseList.filter(curr => {
      return !curr.completed;
    });
    // console.log('uasadeasd', sentList, showAll)
    if (auth.getUser()) {
      return [200, {
        totalSize: sentList.length,
        list: sentList.slice(start, start + size)
      }, {}];
    } else {
      return [401, {}, {}];
    }
  });
  $httpBackend.whenPOST(/^\/users\/[a-zA-Z0-9]{4,10}\/list$/).respond(function (method, url, data) {
    console.log(data);
    let parsedData = JSON.parse(data);
    parsedData.dateAdded = Date.now();
    parsedData.completed = false;
    responseList.push(parsedData);
    // let username = /^\/users\/([a-zA-Z0-9]{4,10})\/list$/.exec(url)[1];
    return [200, {
      // redirectAddress: `/users/${ username }/list/`,
      // newSize: responseList.length
    }, {}];
  })
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
