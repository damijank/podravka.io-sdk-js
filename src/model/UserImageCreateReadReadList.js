/**
 * podravka.io
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.UserImageCreateReadReadList = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserImageCreateReadReadList model module.
   * @module model/UserImageCreateReadReadList
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UserImageCreateReadReadList</code>.
   * User.
   * @alias module:model/UserImageCreateReadReadList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserImageCreateReadReadList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserImageCreateReadReadList} obj Optional instance to populate.
   * @return {module:model/UserImageCreateReadReadList} The populated <code>UserImageCreateReadReadList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


