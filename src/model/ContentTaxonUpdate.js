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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.ContentTaxonUpdate = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContentTaxonUpdate model module.
   * @module model/ContentTaxonUpdate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ContentTaxonUpdate</code>.
   * ContentTaxon.
   * @alias module:model/ContentTaxonUpdate
   * @class
   * @param position {Number} 
   */
  var exports = function(position) {
    var _this = this;

    _this['position'] = position;
  };

  /**
   * Constructs a <code>ContentTaxonUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentTaxonUpdate} obj Optional instance to populate.
   * @return {module:model/ContentTaxonUpdate} The populated <code>ContentTaxonUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));


