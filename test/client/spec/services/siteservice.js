'use strict';

describe('Service: Siteservice', function () {

  // load the service's module
  beforeEach(module('webTntApp'));

  // instantiate service
  var Siteservice;
  beforeEach(inject(function (_Siteservice_) {
    Siteservice = _Siteservice_;
  }));

  it('should do something', function () {
    expect(!!Siteservice).toBe(true);
  });

});
