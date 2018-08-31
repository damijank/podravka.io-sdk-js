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
    root.Podravkaio.ArticleUpdate = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ArticleUpdate model module.
   * @module model/ArticleUpdate
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>ArticleUpdate</code>.
   * Article.
   * @alias module:model/ArticleUpdate
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>ArticleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArticleUpdate} obj Optional instance to populate.
   * @return {module:model/ArticleUpdate} The populated <code>ArticleUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('subtitle')) {
        obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
      }
      if (data.hasOwnProperty('teaser')) {
        obj['teaser'] = ApiClient.convertToType(data['teaser'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('lead')) {
        obj['lead'] = ApiClient.convertToType(data['lead'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('published_start')) {
        obj['published_start'] = ApiClient.convertToType(data['published_start'], 'Date');
      }
      if (data.hasOwnProperty('published_end')) {
        obj['published_end'] = ApiClient.convertToType(data['published_end'], 'Date');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = ApiClient.convertToType(data['author'], 'String');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
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
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {String} subtitle
   */
  exports.prototype['subtitle'] = undefined;
  /**
   * @member {String} teaser
   */
  exports.prototype['teaser'] = undefined;
  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {String} lead
   */
  exports.prototype['lead'] = undefined;
  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Date} published_start
   */
  exports.prototype['published_start'] = undefined;
  /**
   * @member {Date} published_end
   */
  exports.prototype['published_end'] = undefined;
  /**
   * @member {String} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {Object} extended_attributes
   */
  exports.prototype['extended_attributes'] = undefined;



  return exports;
}));


