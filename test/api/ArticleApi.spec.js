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
    instance = new Podravkaio.ArticleApi();
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

  describe('ArticleApi', function() {
    describe('createArticle', function() {
      it('should call createArticle successfully', function(done) {
        //uncomment below and update the code to test createArticle
        //instance.createArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteArticle', function() {
      it('should call deleteArticle successfully', function(done) {
        //uncomment below and update the code to test deleteArticle
        //instance.deleteArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticle', function() {
      it('should call getArticle successfully', function(done) {
        //uncomment below and update the code to test getArticle
        //instance.getArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleList', function() {
      it('should call getArticleList successfully', function(done) {
        //uncomment below and update the code to test getArticleList
        //instance.getArticleList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleListMetrics', function() {
      it('should call getArticleListMetrics successfully', function(done) {
        //uncomment below and update the code to test getArticleListMetrics
        //instance.getArticleListMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleMetrics', function() {
      it('should call getArticleMetrics successfully', function(done) {
        //uncomment below and update the code to test getArticleMetrics
        //instance.getArticleMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleState', function() {
      it('should call getArticleState successfully', function(done) {
        //uncomment below and update the code to test getArticleState
        //instance.getArticleState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setArticleState', function() {
      it('should call setArticleState successfully', function(done) {
        //uncomment below and update the code to test setArticleState
        //instance.setArticleState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateArticle', function() {
      it('should call updateArticle successfully', function(done) {
        //uncomment below and update the code to test updateArticle
        //instance.updateArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
