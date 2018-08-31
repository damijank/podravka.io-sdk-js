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
    define(['ApiClient', 'model/AttributeDefinitionCreate', 'model/AttributeDefinitionList', 'model/AttributeDefinitionRead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AttributeDefinitionCreate'), require('../model/AttributeDefinitionList'), require('../model/AttributeDefinitionRead'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.AttributeDefinitionApi = factory(root.Podravkaio.ApiClient, root.Podravkaio.AttributeDefinitionCreate, root.Podravkaio.AttributeDefinitionList, root.Podravkaio.AttributeDefinitionRead);
  }
}(this, function(ApiClient, AttributeDefinitionCreate, AttributeDefinitionList, AttributeDefinitionRead) {
  'use strict';

  /**
   * AttributeDefinition service.
   * @module api/AttributeDefinitionApi
   * @version 0.2.0
   */

  /**
   * Constructs a new AttributeDefinitionApi. 
   * @alias module:api/AttributeDefinitionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAttributeDefinition operation.
     * @callback module:api/AttributeDefinitionApi~createAttributeDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeDefinitionRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a AttributeDefinition resource.
     * @param {module:model/String} entity The entity type
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:model/AttributeDefinitionCreate} opts.attributeDefinitionCreate The new AttributeDefinition resource
     * @param {module:api/AttributeDefinitionApi~createAttributeDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeDefinitionRead}
     */
    this.createAttributeDefinition = function(entity, opts, callback) {
      opts = opts || {};
      var postBody = opts['attributeDefinitionCreate'];

      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling createAttributeDefinition");
      }


      var pathParams = {
        'entity': entity
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
      var returnType = AttributeDefinitionRead;

      return this.apiClient.callApi(
        '/attributes/{entity}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAttributeDefinition operation.
     * @callback module:api/AttributeDefinitionApi~deleteAttributeDefinitionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the AttributeDefinition resource.
     * @param {module:model/String} entity The entity type
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/AttributeDefinitionApi~deleteAttributeDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAttributeDefinition = function(entity, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteAttributeDefinition");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAttributeDefinition");
      }


      var pathParams = {
        'entity': entity,
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
        '/attributes/{entity}/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttributeDefinition operation.
     * @callback module:api/AttributeDefinitionApi~getAttributeDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeDefinitionRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a AttributeDefinition resource.
     * @param {module:model/String} entity The entity type
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {module:api/AttributeDefinitionApi~getAttributeDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeDefinitionRead}
     */
    this.getAttributeDefinition = function(entity, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getAttributeDefinition");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttributeDefinition");
      }


      var pathParams = {
        'entity': entity,
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
      var returnType = AttributeDefinitionRead;

      return this.apiClient.callApi(
        '/attributes/{entity}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttributeDefinitionList operation.
     * @callback module:api/AttributeDefinitionApi~getAttributeDefinitionListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttributeDefinitionList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the collection of AttributeDefinition resources.
     * @param {module:model/String} entity The entity type
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage Locale code
     * @param {Number} opts.page The collection page number
     * @param {module:api/AttributeDefinitionApi~getAttributeDefinitionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AttributeDefinitionList>}
     */
    this.getAttributeDefinitionList = function(entity, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getAttributeDefinitionList");
      }


      var pathParams = {
        'entity': entity
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
      var returnType = [AttributeDefinitionList];

      return this.apiClient.callApi(
        '/attributes/{entity}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));