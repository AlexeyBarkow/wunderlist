import angular from 'angular';
const MODEL_NAME = 'ServerDataModel';

angular.module('app').service('ServerDataModel', function () {
  this.data = {
    //toDo: fill it later
  };
  this.getDate = function () {
    return this.data;
  };
  this.setData = function () {
    this.data = data;
  }
})

export default MODEL_NAME;
