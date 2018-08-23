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
    define(['ApiClient', 'model/ImageEmbed', 'model/UserEmbed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageEmbed'), require('./UserEmbed'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.VideoList = factory(root.Podravkaio.ApiClient, root.Podravkaio.ImageEmbed, root.Podravkaio.UserEmbed);
  }
}(this, function(ApiClient, ImageEmbed, UserEmbed) {
  'use strict';




  /**
   * The VideoList model module.
   * @module model/VideoList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VideoList</code>.
   * Video.
   * @alias module:model/VideoList
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;






  };

  /**
   * Constructs a <code>VideoList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoList} obj Optional instance to populate.
   * @return {module:model/VideoList} The populated <code>VideoList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('manifest_url')) {
        obj['manifest_url'] = ApiClient.convertToType(data['manifest_url'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ImageEmbed.constructFromObject(data['thumbnail']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = UserEmbed.constructFromObject(data['created_by']);
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_by')) {
        obj['updated_by'] = UserEmbed.constructFromObject(data['updated_by']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} manifest_url
   */
  exports.prototype['manifest_url'] = undefined;
  /**
   * @member {module:model/ImageEmbed} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {module:model/UserEmbed} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {module:model/UserEmbed} updated_by
   */
  exports.prototype['updated_by'] = undefined;



  return exports;
}));

