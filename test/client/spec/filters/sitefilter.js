'use strict';

describe('Filter: siteFilter', function () {

  // load the filter's module
  beforeEach(module('webTntApp'));

  // initialize a new instance of the filter before each test
  var siteFilter;
  beforeEach(inject(function ($filter) {
    siteFilter = $filter('siteFilter');
  }));

  it('should return the input prefixed with "siteFilter filter:"', function () {
    var text = 'angularjs';
    expect(siteFilter(text)).toBe('siteFilter filter: ' + text);
  });

});
