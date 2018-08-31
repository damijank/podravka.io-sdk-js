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
    instance = new Podravkaio.ArticleRead();
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

  describe('ArticleRead', function() {
    it('should create an instance of ArticleRead', function() {
      // uncomment below and update the code to test ArticleRead
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be.a(Podravkaio.ArticleRead);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property subtitle (base name: "subtitle")', function() {
      // uncomment below and update the code to test the property subtitle
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property teaser (base name: "teaser")', function() {
      // uncomment below and update the code to test the property teaser
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property lead (base name: "lead")', function() {
      // uncomment below and update the code to test the property lead
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updated_by")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property publishRequestedAt (base name: "publish_requested_at")', function() {
      // uncomment below and update the code to test the property publishRequestedAt
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property publishRequestedBy (base name: "publish_requested_by")', function() {
      // uncomment below and update the code to test the property publishRequestedBy
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property publishedStart (base name: "published_start")', function() {
      // uncomment below and update the code to test the property publishedStart
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property publishedEnd (base name: "published_end")', function() {
      // uncomment below and update the code to test the property publishedEnd
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

    it('should have the property extendedAttributes (base name: "extended_attributes")', function() {
      // uncomment below and update the code to test the property extendedAttributes
      //var instance = new Podravkaio.ArticleRead();
      //expect(instance).to.be();
    });

  });

}));
