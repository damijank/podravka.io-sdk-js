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
    instance = new Podravkaio.VideoCreate();
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

  describe('VideoCreate', function() {
    it('should create an instance of VideoCreate', function() {
      // uncomment below and update the code to test VideoCreate
      //var instance = new Podravkaio.VideoCreate();
      //expect(instance).to.be.a(Podravkaio.VideoCreate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Podravkaio.VideoCreate();
      //expect(instance).to.be();
    });

    it('should have the property customThumbnail (base name: "custom_thumbnail")', function() {
      // uncomment below and update the code to test the property customThumbnail
      //var instance = new Podravkaio.VideoCreate();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new Podravkaio.VideoCreate();
      //expect(instance).to.be();
    });

    it('should have the property extendedAttributes (base name: "extended_attributes")', function() {
      // uncomment below and update the code to test the property extendedAttributes
      //var instance = new Podravkaio.VideoCreate();
      //expect(instance).to.be();
    });

  });

}));
