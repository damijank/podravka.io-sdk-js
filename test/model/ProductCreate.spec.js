/**
 * podravka.io
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
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
    instance = new Podravkaio.ProductCreate();
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

  describe('ProductCreate', function() {
    it('should create an instance of ProductCreate', function() {
      // uncomment below and update the code to test ProductCreate
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be.a(Podravkaio.ProductCreate);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property lead (base name: "lead")', function() {
      // uncomment below and update the code to test the property lead
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property claim (base name: "claim")', function() {
      // uncomment below and update the code to test the property claim
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property preparation (base name: "preparation")', function() {
      // uncomment below and update the code to test the property preparation
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property nutritionalFacts (base name: "nutritional_facts")', function() {
      // uncomment below and update the code to test the property nutritionalFacts
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property storageInstructions (base name: "storage_instructions")', function() {
      // uncomment below and update the code to test the property storageInstructions
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property shelfLife (base name: "shelf_life")', function() {
      // uncomment below and update the code to test the property shelfLife
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property publishedStart (base name: "published_start")', function() {
      // uncomment below and update the code to test the property publishedStart
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property publishedEnd (base name: "published_end")', function() {
      // uncomment below and update the code to test the property publishedEnd
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property launchedAt (base name: "launched_at")', function() {
      // uncomment below and update the code to test the property launchedAt
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property nutritionDeclaration (base name: "nutrition_declaration")', function() {
      // uncomment below and update the code to test the property nutritionDeclaration
      //var instance = new Podravkaio.ProductCreate();
      //expect(instance).to.be();
    });

  });

}));