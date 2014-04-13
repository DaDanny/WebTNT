'use strict';

describe('Service: Profileservice', function () {

  // load the service's module
  beforeEach(module('webTntApp'));

  // instantiate service
  var Profileservice;
  beforeEach(inject(function (_Profileservice_) {
    Profileservice = _Profileservice_;
  }));

  it('should do something', function () {
    expect(!!Profileservice).toBe(true);
  });

});
