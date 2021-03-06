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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ImageCreate', 'model/ImageCreateRead', 'model/ImageList', 'model/ImageRead', 'model/ImageState', 'model/ImageUpdate', 'model/ImageUpdateRead', 'model/Metrics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageCreate'), require('../model/ImageCreateRead'), require('../model/ImageList'), require('../model/ImageRead'), require('../model/ImageState'), require('../model/ImageUpdate'), require('../model/ImageUpdateRead'), require('../model/Metrics'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.ImageApi = factory(root.Podravkaio.ApiClient, root.Podravkaio.ImageCreate, root.Podravkaio.ImageCreateRead, root.Podravkaio.ImageList, root.Podravkaio.ImageRead, root.Podravkaio.ImageState, root.Podravkaio.ImageUpdate, root.Podravkaio.ImageUpdateRead, root.Podravkaio.Metrics);
  }
}(this, function(ApiClient, ImageCreate, ImageCreateRead, ImageList, ImageRead, ImageState, ImageUpdate, ImageUpdateRead, Metrics) {
  'use strict';

  /**
   * Image service.
   * @module api/ImageApi
   * @version 0.2.0
   */

  /**
   * Constructs a new ImageApi. 
   * @alias module:api/ImageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createImage operation.
     * @callback module:api/ImageApi~createImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageCreateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a Image resource.
     * @param {module:model/ImageCreate} imageCreate The new Image resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~createImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageCreateRead}
     */
    this.createImage = function(imageCreate, opts, callback) {
      opts = opts || {};
      var postBody = imageCreate;

      // verify the required parameter 'imageCreate' is set
      if (imageCreate === undefined || imageCreate === null) {
        throw new Error("Missing the required parameter 'imageCreate' when calling createImage");
      }


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImageCreateRead;

      return this.apiClient.callApi(
        '/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteImage operation.
     * @callback module:api/ImageApi~deleteImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~deleteImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteImage = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteImage");
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
        '/images/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImage operation.
     * @callback module:api/ImageApi~getImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~getImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageRead}
     */
    this.getImage = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getImage");
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
      var accepts = ['application/json'];
      var returnType = ImageRead;

      return this.apiClient.callApi(
        '/images/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageList operation.
     * @callback module:api/ImageApi~getImageListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of Image resources.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {Number} opts.page The collection page number
     * @param {module:api/ImageApi~getImageListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageList>}
     */
    this.getImageList = function(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = [ImageList];

      return this.apiClient.callApi(
        '/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageListMetrics operation.
     * @callback module:api/ImageApi~getImageListMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the metrics of Image collection.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~getImageListMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metrics}
     */
    this.getImageListMetrics = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Metrics;

      return this.apiClient.callApi(
        '/images/metrics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageMetrics operation.
     * @callback module:api/ImageApi~getImageMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the metrics of Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~getImageMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metrics}
     */
    this.getImageMetrics = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getImageMetrics");
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
      var accepts = ['application/json'];
      var returnType = Metrics;

      return this.apiClient.callApi(
        '/images/{id}/metrics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageState operation.
     * @callback module:api/ImageApi~getImageStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~getImageStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageState}
     */
    this.getImageState = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getImageState");
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
      var accepts = ['application/json'];
      var returnType = ImageState;

      return this.apiClient.callApi(
        '/images/{id}/state', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setImageState operation.
     * @callback module:api/ImageApi~setImageStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Image resource.
     * @param {String} id 
     * @param {String} state 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/ImageApi~setImageStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageState}
     */
    this.setImageState = function(id, state, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setImageState");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling setImageState");
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
      var accepts = ['application/json'];
      var returnType = ImageState;

      return this.apiClient.callApi(
        '/images/{id}/state/{state}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateImage operation.
     * @callback module:api/ImageApi~updateImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUpdateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:model/ImageUpdate} opts.imageUpdate The updated Image resource
     * @param {module:api/ImageApi~updateImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageUpdateRead}
     */
    this.updateImage = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['imageUpdate'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateImage");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImageUpdateRead;

      return this.apiClient.callApi(
        '/images/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
