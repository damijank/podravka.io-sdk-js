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
    root.Podravkaio.TaxonomyList = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaxonomyList model module.
   * @module model/TaxonomyList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaxonomyList</code>.
   * Taxonomy.
   * @alias module:model/TaxonomyList
   * @class
   * @param name {String} 
   * @param nestable {Boolean} 
   * @param sortable {Boolean} 
   * @param scope {String} 
   */
  var exports = function(name, nestable, sortable, scope) {
    var _this = this;


    _this['name'] = name;
    _this['nestable'] = nestable;
    _this['sortable'] = sortable;
    _this['scope'] = scope;
  };

  /**
   * Constructs a <code>TaxonomyList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxonomyList} obj Optional instance to populate.
   * @return {module:model/TaxonomyList} The populated <code>TaxonomyList</code> instance.
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
      if (data.hasOwnProperty('nestable')) {
        obj['nestable'] = ApiClient.convertToType(data['nestable'], 'Boolean');
      }
      if (data.hasOwnProperty('sortable')) {
        obj['sortable'] = ApiClient.convertToType(data['sortable'], 'Boolean');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
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
   * @member {Boolean} nestable
   */
  exports.prototype['nestable'] = undefined;
  /**
   * @member {Boolean} sortable
   */
  exports.prototype['sortable'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;



  return exports;
}));

