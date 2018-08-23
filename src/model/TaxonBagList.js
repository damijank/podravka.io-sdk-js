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
    define(['ApiClient', 'model/TaxonomyList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxonomyList'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.TaxonBagList = factory(root.Podravkaio.ApiClient, root.Podravkaio.TaxonomyList);
  }
}(this, function(ApiClient, TaxonomyList) {
  'use strict';




  /**
   * The TaxonBagList model module.
   * @module model/TaxonBagList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaxonBagList</code>.
   * TaxonBag.
   * @alias module:model/TaxonBagList
   * @class
   * @param name {String} 
   * @param taxonomy {Array.<module:model/TaxonomyList>} 
   * @param sortable {Boolean} 
   * @param distinct {String} 
   * @param scope {String} 
   */
  var exports = function(name, taxonomy, sortable, distinct, scope) {
    var _this = this;


    _this['name'] = name;
    _this['taxonomy'] = taxonomy;
    _this['sortable'] = sortable;
    _this['distinct'] = distinct;
    _this['scope'] = scope;
  };

  /**
   * Constructs a <code>TaxonBagList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxonBagList} obj Optional instance to populate.
   * @return {module:model/TaxonBagList} The populated <code>TaxonBagList</code> instance.
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
      if (data.hasOwnProperty('taxonomy')) {
        obj['taxonomy'] = ApiClient.convertToType(data['taxonomy'], [TaxonomyList]);
      }
      if (data.hasOwnProperty('sortable')) {
        obj['sortable'] = ApiClient.convertToType(data['sortable'], 'Boolean');
      }
      if (data.hasOwnProperty('distinct')) {
        obj['distinct'] = ApiClient.convertToType(data['distinct'], 'String');
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
   * @member {Array.<module:model/TaxonomyList>} taxonomy
   */
  exports.prototype['taxonomy'] = undefined;
  /**
   * @member {Boolean} sortable
   */
  exports.prototype['sortable'] = undefined;
  /**
   * @member {String} distinct
   */
  exports.prototype['distinct'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;



  return exports;
}));


