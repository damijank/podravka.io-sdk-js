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
    define(['ApiClient', 'model/VideoCreate', 'model/VideoCreateRead', 'model/VideoList', 'model/VideoRead', 'model/VideoState', 'model/VideoUpdate', 'model/VideoUpdateRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VideoCreate'), require('../model/VideoCreateRead'), require('../model/VideoList'), require('../model/VideoRead'), require('../model/VideoState'), require('../model/VideoUpdate'), require('../model/VideoUpdateRead'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.VideoApi = factory(root.Podravkaio.ApiClient, root.Podravkaio.VideoCreate, root.Podravkaio.VideoCreateRead, root.Podravkaio.VideoList, root.Podravkaio.VideoRead, root.Podravkaio.VideoState, root.Podravkaio.VideoUpdate, root.Podravkaio.VideoUpdateRead);
  }
}(this, function(ApiClient, VideoCreate, VideoCreateRead, VideoList, VideoRead, VideoState, VideoUpdate, VideoUpdateRead) {
  'use strict';

  /**
   * Video service.
   * @module api/VideoApi
   * @version 0.1.0
   */

  /**
   * Constructs a new VideoApi. 
   * @alias module:api/VideoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createVideo operation.
     * @callback module:api/VideoApi~createVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoCreateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a Video resource.
     * @param {module:model/VideoCreate} videoCreate The new Video resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/VideoApi~createVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoCreateRead}
     */
    this.createVideo = function(videoCreate, opts, callback) {
      opts = opts || {};
      var postBody = videoCreate;

      // verify the required parameter 'videoCreate' is set
      if (videoCreate === undefined || videoCreate === null) {
        throw new Error("Missing the required parameter 'videoCreate' when calling createVideo");
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
      var contentTypes = ['application/json', 'application/ld+json', 'text/html'];
      var accepts = ['application/json', 'application/ld+json', 'text/html'];
      var returnType = VideoCreateRead;

      return this.apiClient.callApi(
        '/videos', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVideo operation.
     * @callback module:api/VideoApi~deleteVideoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the Video resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/VideoApi~deleteVideoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVideo = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVideo");
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
        '/videos/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideo operation.
     * @callback module:api/VideoApi~getVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Video resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/VideoApi~getVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoRead}
     */
    this.getVideo = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideo");
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
      var returnType = VideoRead;

      return this.apiClient.callApi(
        '/videos/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoList operation.
     * @callback module:api/VideoApi~getVideoListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VideoList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of Video resources.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {Number} opts.page The collection page number
     * @param {module:api/VideoApi~getVideoListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VideoList>}
     */
    this.getVideoList = function(opts, callback) {
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
      var returnType = [VideoList];

      return this.apiClient.callApi(
        '/videos', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoState operation.
     * @callback module:api/VideoApi~getVideoStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Video resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/VideoApi~getVideoStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoState}
     */
    this.getVideoState = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideoState");
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
      var returnType = VideoState;

      return this.apiClient.callApi(
        '/videos/{id}/state', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setVideoState operation.
     * @callback module:api/VideoApi~setVideoStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Video resource.
     * @param {String} id 
     * @param {String} state 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/VideoApi~setVideoStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoState}
     */
    this.setVideoState = function(id, state, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setVideoState");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling setVideoState");
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
      var returnType = VideoState;

      return this.apiClient.callApi(
        '/videos/{id}/state/{state}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVideo operation.
     * @callback module:api/VideoApi~updateVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoUpdateRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Video resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:model/VideoUpdate} opts.videoUpdate The updated Video resource
     * @param {module:api/VideoApi~updateVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoUpdateRead}
     */
    this.updateVideo = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['videoUpdate'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateVideo");
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
      var returnType = VideoUpdateRead;

      return this.apiClient.callApi(
        '/videos/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
