/**
 * podravka.io
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ImageApiState', 'model/ImageImageCreate', 'model/ImageImageCreateReadCreateReadRead', 'model/ImageImageListList', 'model/ImageImageReadRead', 'model/ImageImageUpdate', 'model/ImageImageUpdateReadUpdateReadRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImageApiState'), require('../model/ImageImageCreate'), require('../model/ImageImageCreateReadCreateReadRead'), require('../model/ImageImageListList'), require('../model/ImageImageReadRead'), require('../model/ImageImageUpdate'), require('../model/ImageImageUpdateReadUpdateReadRead'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.ImageApi = factory(root.Podravkaio.ApiClient, root.Podravkaio.ImageApiState, root.Podravkaio.ImageImageCreate, root.Podravkaio.ImageImageCreateReadCreateReadRead, root.Podravkaio.ImageImageListList, root.Podravkaio.ImageImageReadRead, root.Podravkaio.ImageImageUpdate, root.Podravkaio.ImageImageUpdateReadUpdateReadRead);
  }
}(this, function(ApiClient, ImageApiState, ImageImageCreate, ImageImageCreateReadCreateReadRead, ImageImageListList, ImageImageReadRead, ImageImageUpdate, ImageImageUpdateReadUpdateReadRead) {
  'use strict';

  /**
   * Image service.
   * @module api/ImageApi
   * @version 0.0.2.1
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
     * Callback function to receive the result of the apiArticlesImagesGetSubresource operation.
     * @callback module:api/ImageApi~apiArticlesImagesGetSubresourceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageImageReadRead>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of Image resources.
     * @param {String} id 
     * @param {module:api/ImageApi~apiArticlesImagesGetSubresourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageImageReadRead>}
     */
    this.apiArticlesImagesGetSubresource = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiArticlesImagesGetSubresource");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = [ImageImageReadRead];

      return this.apiClient.callApi(
        '/api/articles/{id}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiGetStateImageItem operation.
     * @callback module:api/ImageApi~apiGetStateImageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageApiState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Image resource.
     * @param {String} id 
     * @param {module:api/ImageApi~apiGetStateImageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageApiState}
     */
    this.apiGetStateImageItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiGetStateImageItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = ImageApiState;

      return this.apiClient.callApi(
        '/api/images/{id}/state', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiSetStateImageItem operation.
     * @callback module:api/ImageApi~apiSetStateImageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageApiState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Image resource.
     * @param {String} id 
     * @param {String} state 
     * @param {module:api/ImageApi~apiSetStateImageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageApiState}
     */
    this.apiSetStateImageItem = function(id, state, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiSetStateImageItem");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling apiSetStateImageItem");
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
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = ImageApiState;

      return this.apiClient.callApi(
        '/api/images/{id}/state/{state}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteImageItem operation.
     * @callback module:api/ImageApi~deleteImageItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the Image resource.
     * @param {String} id 
     * @param {module:api/ImageApi~deleteImageItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteImageItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteImageItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/images/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageCollection operation.
     * @callback module:api/ImageApi~getImageCollectionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageImageListList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of Image resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number
     * @param {module:api/ImageApi~getImageCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageImageListList>}
     */
    this.getImageCollection = function(opts, callback) {
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
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = [ImageImageListList];

      return this.apiClient.callApi(
        '/api/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getImageItem operation.
     * @callback module:api/ImageApi~getImageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageImageReadRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a Image resource.
     * @param {String} id 
     * @param {module:api/ImageApi~getImageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageImageReadRead}
     */
    this.getImageItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getImageItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = ImageImageReadRead;

      return this.apiClient.callApi(
        '/api/images/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postImageCollection operation.
     * @callback module:api/ImageApi~postImageCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageImageCreateReadCreateReadRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a Image resource.
     * @param {module:model/ImageImageCreate} image The new Image resource
     * @param {module:api/ImageApi~postImageCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageImageCreateReadCreateReadRead}
     */
    this.postImageCollection = function(image, callback) {
      var postBody = image;

      // verify the required parameter 'image' is set
      if (image === undefined || image === null) {
        throw new Error("Missing the required parameter 'image' when calling postImageCollection");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = ImageImageCreateReadCreateReadRead;

      return this.apiClient.callApi(
        '/api/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putImageItem operation.
     * @callback module:api/ImageApi~putImageItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageImageUpdateReadUpdateReadRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces the Image resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ImageImageUpdate} opts.image The updated Image resource
     * @param {module:api/ImageApi~putImageItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageImageUpdateReadUpdateReadRead}
     */
    this.putImageItem = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['image'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putImageItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = ImageImageUpdateReadUpdateReadRead;

      return this.apiClient.callApi(
        '/api/images/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
