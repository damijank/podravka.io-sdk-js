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
    instance = new Podravkaio.RecipeCreate();
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

  describe('RecipeCreate', function() {
    it('should create an instance of RecipeCreate', function() {
      // uncomment below and update the code to test RecipeCreate
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be.a(Podravkaio.RecipeCreate);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property lead (base name: "lead")', function() {
      // uncomment below and update the code to test the property lead
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property advice (base name: "advice")', function() {
      // uncomment below and update the code to test the property advice
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property remark (base name: "remark")', function() {
      // uncomment below and update the code to test the property remark
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property serving (base name: "serving")', function() {
      // uncomment below and update the code to test the property serving
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "video")', function() {
      // uncomment below and update the code to test the property video
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property videos (base name: "videos")', function() {
      // uncomment below and update the code to test the property videos
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property publishedStart (base name: "published_start")', function() {
      // uncomment below and update the code to test the property publishedStart
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property publishedEnd (base name: "published_end")', function() {
      // uncomment below and update the code to test the property publishedEnd
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property ingredients (base name: "ingredients")', function() {
      // uncomment below and update the code to test the property ingredients
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property preparationSteps (base name: "preparation_steps")', function() {
      // uncomment below and update the code to test the property preparationSteps
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

    it('should have the property extendedAttributes (base name: "extended_attributes")', function() {
      // uncomment below and update the code to test the property extendedAttributes
      //var instance = new Podravkaio.RecipeCreate();
      //expect(instance).to.be();
    });

  });

}));