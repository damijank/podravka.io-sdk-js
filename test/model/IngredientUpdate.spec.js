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
    instance = new Podravkaio.IngredientUpdate();
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

  describe('IngredientUpdate', function() {
    it('should create an instance of IngredientUpdate', function() {
      // uncomment below and update the code to test IngredientUpdate
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be.a(Podravkaio.IngredientUpdate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property nameEnglish (base name: "name_english")', function() {
      // uncomment below and update the code to test the property nameEnglish
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property nameLatin (base name: "name_latin")', function() {
      // uncomment below and update the code to test the property nameLatin
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property nameRegional (base name: "name_regional")', function() {
      // uncomment below and update the code to test the property nameRegional
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property teaser (base name: "teaser")', function() {
      // uncomment below and update the code to test the property teaser
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property lead (base name: "lead")', function() {
      // uncomment below and update the code to test the property lead
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property publishedAt (base name: "published_at")', function() {
      // uncomment below and update the code to test the property publishedAt
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property nutritionDeclaration (base name: "nutrition_declaration")', function() {
      // uncomment below and update the code to test the property nutritionDeclaration
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

    it('should have the property extendedAttributes (base name: "extended_attributes")', function() {
      // uncomment below and update the code to test the property extendedAttributes
      //var instance = new Podravkaio.IngredientUpdate();
      //expect(instance).to.be();
    });

  });

}));
