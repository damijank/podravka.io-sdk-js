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
    define(['ApiClient', 'model/ImageOriginCreate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImageOriginCreate'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.ImageCreate = factory(root.Podravkaio.ApiClient, root.Podravkaio.ImageOriginCreate);
  }
}(this, function(ApiClient, ImageOriginCreate) {
  'use strict';




  /**
   * The ImageCreate model module.
   * @module model/ImageCreate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ImageCreate</code>.
   * Image.
   * @alias module:model/ImageCreate
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;

  };

  /**
   * Constructs a <code>ImageCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageCreate} obj Optional instance to populate.
   * @return {module:model/ImageCreate} The populated <code>ImageCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ImageOriginCreate.constructFromObject(data['origin']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ImageOriginCreate} origin
   */
  exports.prototype['origin'] = undefined;



  return exports;
}));

