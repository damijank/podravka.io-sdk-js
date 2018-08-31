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
    define(['ApiClient', 'model/RecipeIngredientCreate', 'model/RecipeOriginCreate', 'model/RecipePreparationStepCreate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecipeIngredientCreate'), require('./RecipeOriginCreate'), require('./RecipePreparationStepCreate'));
  } else {
    // Browser globals (root is window)
    if (!root.Podravkaio) {
      root.Podravkaio = {};
    }
    root.Podravkaio.RecipeUpdate = factory(root.Podravkaio.ApiClient, root.Podravkaio.RecipeIngredientCreate, root.Podravkaio.RecipeOriginCreate, root.Podravkaio.RecipePreparationStepCreate);
  }
}(this, function(ApiClient, RecipeIngredientCreate, RecipeOriginCreate, RecipePreparationStepCreate) {
  'use strict';




  /**
   * The RecipeUpdate model module.
   * @module model/RecipeUpdate
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>RecipeUpdate</code>.
   * Recipe.
   * @alias module:model/RecipeUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>RecipeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeUpdate} obj Optional instance to populate.
   * @return {module:model/RecipeUpdate} The populated <code>RecipeUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('lead')) {
        obj['lead'] = ApiClient.convertToType(data['lead'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('advice')) {
        obj['advice'] = ApiClient.convertToType(data['advice'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('remark')) {
        obj['remark'] = ApiClient.convertToType(data['remark'], 'String');
      }
      if (data.hasOwnProperty('serving')) {
        obj['serving'] = ApiClient.convertToType(data['serving'], 'String');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = ApiClient.convertToType(data['author'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
      }
      if (data.hasOwnProperty('video')) {
        obj['video'] = ApiClient.convertToType(data['video'], 'String');
      }
      if (data.hasOwnProperty('videos')) {
        obj['videos'] = ApiClient.convertToType(data['videos'], ['String']);
      }
      if (data.hasOwnProperty('published_start')) {
        obj['published_start'] = ApiClient.convertToType(data['published_start'], 'Date');
      }
      if (data.hasOwnProperty('published_end')) {
        obj['published_end'] = ApiClient.convertToType(data['published_end'], 'Date');
      }
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = RecipeOriginCreate.constructFromObject(data['origin']);
      }
      if (data.hasOwnProperty('ingredients')) {
        obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [RecipeIngredientCreate]);
      }
      if (data.hasOwnProperty('preparation_steps')) {
        obj['preparation_steps'] = ApiClient.convertToType(data['preparation_steps'], [RecipePreparationStepCreate]);
      }
      if (data.hasOwnProperty('extended_attributes')) {
        obj['extended_attributes'] = ApiClient.convertToType(data['extended_attributes'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} lead
   */
  exports.prototype['lead'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {String} advice
   */
  exports.prototype['advice'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * @member {String} remark
   */
  exports.prototype['remark'] = undefined;
  /**
   * @member {String} serving
   */
  exports.prototype['serving'] = undefined;
  /**
   * @member {String} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {String} video
   */
  exports.prototype['video'] = undefined;
  /**
   * @member {Array.<String>} videos
   */
  exports.prototype['videos'] = undefined;
  /**
   * @member {Date} published_start
   */
  exports.prototype['published_start'] = undefined;
  /**
   * @member {Date} published_end
   */
  exports.prototype['published_end'] = undefined;
  /**
   * @member {module:model/RecipeOriginCreate} origin
   */
  exports.prototype['origin'] = undefined;
  /**
   * @member {Array.<module:model/RecipeIngredientCreate>} ingredients
   */
  exports.prototype['ingredients'] = undefined;
  /**
   * @member {Array.<module:model/RecipePreparationStepCreate>} preparation_steps
   */
  exports.prototype['preparation_steps'] = undefined;
  /**
   * @member {Object} extended_attributes
   */
  exports.prototype['extended_attributes'] = undefined;



  return exports;
}));


