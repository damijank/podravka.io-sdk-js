/**
 * podravka.io
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.2.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Podravkaio);
  }
}(this, function(expect, Podravkaio) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Podravkaio.BrandList();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BrandList', function() {
    it('should create an instance of BrandList', function() {
      // uncomment below and update the code to test BrandList
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be.a(Podravkaio.BrandList);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property claim (base name: "claim")', function() {
      // uncomment below and update the code to test the property claim
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property statement (base name: "statement")', function() {
      // uncomment below and update the code to test the property statement
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property lead (base name: "lead")', function() {
      // uncomment below and update the code to test the property lead
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Podravkaio.BrandList();
      //expect(instance).to.be();
    });

  });

}));
