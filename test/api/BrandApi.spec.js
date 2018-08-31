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
    instance = new Podravkaio.BrandApi();
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

  describe('BrandApi', function() {
    describe('createBrand', function() {
      it('should call createBrand successfully', function(done) {
        //uncomment below and update the code to test createBrand
        //instance.createBrand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBrand', function() {
      it('should call deleteBrand successfully', function(done) {
        //uncomment below and update the code to test deleteBrand
        //instance.deleteBrand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrand', function() {
      it('should call getBrand successfully', function(done) {
        //uncomment below and update the code to test getBrand
        //instance.getBrand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrandList', function() {
      it('should call getBrandList successfully', function(done) {
        //uncomment below and update the code to test getBrandList
        //instance.getBrandList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrandListMetrics', function() {
      it('should call getBrandListMetrics successfully', function(done) {
        //uncomment below and update the code to test getBrandListMetrics
        //instance.getBrandListMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrandMetrics', function() {
      it('should call getBrandMetrics successfully', function(done) {
        //uncomment below and update the code to test getBrandMetrics
        //instance.getBrandMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrandState', function() {
      it('should call getBrandState successfully', function(done) {
        //uncomment below and update the code to test getBrandState
        //instance.getBrandState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setBrandState', function() {
      it('should call setBrandState successfully', function(done) {
        //uncomment below and update the code to test setBrandState
        //instance.setBrandState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBrand', function() {
      it('should call updateBrand successfully', function(done) {
        //uncomment below and update the code to test updateBrand
        //instance.updateBrand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
