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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProductCreate', 'model/ProductList', 'model/ProductRead', 'model/ProductState', 'model/ProductUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductCreate'), require('../model/ProductList'), require('../model/ProductRead'), require('../model/ProductState'), require('../model/ProductUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.ProductApi = factory(root.Podravkaio.ApiClient, root.Podravkaio.ProductCreate, root.Podravkaio.ProductList, root.Podravkaio.ProductRead, root.Podravkaio.ProductState, root.Podravkaio.ProductUpdate);
  }
}(this, function(ApiClient, ProductCreate, ProductList, ProductRead, ProductState, ProductUpdate) {
  'use strict';

  /**
   * Product service.
   * @module api/ProductApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ProductApi. 
   * @alias module:api/ProductApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:api/ProductApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a Product resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:model/ProductCreate} opts.productCreate The new Product resource
     * @param {module:api/ProductApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductRead}
     */
    this.createProduct = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['productCreate'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json', 'application/ld+json', 'text/html'];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = ProductRead;

      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:api/ProductApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the Product resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ProductApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProduct = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProduct");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/products/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:api/ProductApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Product resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ProductApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductRead}
     */
    this.getProduct = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProduct");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = ProductRead;

      return this.apiClient.callApi(
        '/products/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductList operation.
     * @callback module:api/ProductApi~getProductListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of Product resources.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {Number} opts.page The collection page number
     * @param {module:api/ProductApi~getProductListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductList>}
     */
    this.getProductList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = [ProductList];

      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductState operation.
     * @callback module:api/ProductApi~getProductStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Product resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ProductApi~getProductStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductState}
     */
    this.getProductState = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductState");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = ProductState;

      return this.apiClient.callApi(
        '/products/{id}/state', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setProductState operation.
     * @callback module:api/ProductApi~setProductStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Product resource.
     * @param {String} id 
     * @param {String} state 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ProductApi~setProductStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductState}
     */
    this.setProductState = function(id, state, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setProductState");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling setProductState");
      }


      var pathParams = {
        'id': id,
        'state': state
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = ProductState;

      return this.apiClient.callApi(
        '/products/{id}/state/{state}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/ProductApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Product resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:model/ProductUpdate} opts.productUpdate The updated Product resource
     * @param {module:api/ProductApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductRead}
     */
    this.updateProduct = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['productUpdate'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProduct");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json', 'application/ld+json', 'text/html'];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = ProductRead;

      return this.apiClient.callApi(
        '/products/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
