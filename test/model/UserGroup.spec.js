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
    instance = new Podravkaio.UserGroup();
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

  describe('UserGroup', function() {
    it('should create an instance of UserGroup', function() {
      // uncomment below and update the code to test UserGroup
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be.a(Podravkaio.UserGroup);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updated_by")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property ownedByClient (base name: "owned_by_client")', function() {
      // uncomment below and update the code to test the property ownedByClient
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property systemGroup (base name: "system_group")', function() {
      // uncomment below and update the code to test the property systemGroup
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new Podravkaio.UserGroup();
      //expect(instance).to.be();
    });

  });

}));
