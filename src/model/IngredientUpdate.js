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
    define(['ApiClient', 'model/NutritionDeclarationCreate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NutritionDeclarationCreate'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.IngredientUpdate = factory(root.Podravkaio.ApiClient, root.Podravkaio.NutritionDeclarationCreate);
  }
}(this, function(ApiClient, NutritionDeclarationCreate) {
  'use strict';




  /**
   * The IngredientUpdate model module.
   * @module model/IngredientUpdate
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>IngredientUpdate</code>.
   * Ingredient.
   * @alias module:model/IngredientUpdate
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>IngredientUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IngredientUpdate} obj Optional instance to populate.
   * @return {module:model/IngredientUpdate} The populated <code>IngredientUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('name_english')) {
        obj['name_english'] = ApiClient.convertToType(data['name_english'], 'String');
      }
      if (data.hasOwnProperty('name_latin')) {
        obj['name_latin'] = ApiClient.convertToType(data['name_latin'], 'String');
      }
      if (data.hasOwnProperty('name_regional')) {
        obj['name_regional'] = ApiClient.convertToType(data['name_regional'], 'String');
      }
      if (data.hasOwnProperty('teaser')) {
        obj['teaser'] = ApiClient.convertToType(data['teaser'], 'String');
      }
      if (data.hasOwnProperty('lead')) {
        obj['lead'] = ApiClient.convertToType(data['lead'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('published_at')) {
        obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');
      }
      if (data.hasOwnProperty('nutrition_declaration')) {
        obj['nutrition_declaration'] = NutritionDeclarationCreate.constructFromObject(data['nutrition_declaration']);
      }
      if (data.hasOwnProperty('extended_attributes')) {
        obj['extended_attributes'] = ApiClient.convertToType(data['extended_attributes'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} name_english
   */
  exports.prototype['name_english'] = undefined;
  /**
   * @member {String} name_latin
   */
  exports.prototype['name_latin'] = undefined;
  /**
   * @member {String} name_regional
   */
  exports.prototype['name_regional'] = undefined;
  /**
   * @member {String} teaser
   */
  exports.prototype['teaser'] = undefined;
  /**
   * @member {String} lead
   */
  exports.prototype['lead'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Date} published_at
   */
  exports.prototype['published_at'] = undefined;
  /**
   * @member {module:model/NutritionDeclarationCreate} nutrition_declaration
   */
  exports.prototype['nutrition_declaration'] = undefined;
  /**
   * @member {Object} extended_attributes
   */
  exports.prototype['extended_attributes'] = undefined;



  return exports;
}));


