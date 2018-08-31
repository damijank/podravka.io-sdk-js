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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.UserGroupRead = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserGroupRead model module.
   * @module model/UserGroupRead
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>UserGroupRead</code>.
   * Class UserGroup.
   * @alias module:model/UserGroupRead
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;






    _this['name'] = name;

  };

  /**
   * Constructs a <code>UserGroupRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserGroupRead} obj Optional instance to populate.
   * @return {module:model/UserGroupRead} The populated <code>UserGroupRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('updated_by')) {
        obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], Object);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {String} updated_by
   */
  exports.prototype['updated_by'] = undefined;
  /**
   * @member {Object} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;



  return exports;
}));


