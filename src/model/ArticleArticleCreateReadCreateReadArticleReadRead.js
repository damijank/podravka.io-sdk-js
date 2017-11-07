/**
 * podravka.io
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2
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
    root.Podravkaio.ArticleArticleCreateReadCreateReadArticleReadRead = factory(root.Podravkaio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ArticleArticleCreateReadCreateReadArticleReadRead model module.
   * @module model/ArticleArticleCreateReadCreateReadArticleReadRead
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>ArticleArticleCreateReadCreateReadArticleReadRead</code>.
   * Article.
   * @alias module:model/ArticleArticleCreateReadCreateReadArticleReadRead
   * @class
   * @param title {String} 
   */
  var exports = function(title) {
    var _this = this;


    _this['title'] = title;


















  };

  /**
   * Constructs a <code>ArticleArticleCreateReadCreateReadArticleReadRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArticleArticleCreateReadCreateReadArticleReadRead} obj Optional instance to populate.
   * @return {module:model/ArticleArticleCreateReadCreateReadArticleReadRead} The populated <code>ArticleArticleCreateReadCreateReadArticleReadRead</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
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
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_by')) {
        obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'String');
      }
      if (data.hasOwnProperty('publish_requested_at')) {
        obj['publish_requested_at'] = ApiClient.convertToType(data['publish_requested_at'], 'Date');
      }
      if (data.hasOwnProperty('publish_requested_by')) {
        obj['publish_requested_by'] = ApiClient.convertToType(data['publish_requested_by'], 'String');
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
      if (data.hasOwnProperty('origin')) {
        obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
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
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} updated_by
   */
  exports.prototype['updated_by'] = undefined;
  /**
   * @member {Date} publish_requested_at
   */
  exports.prototype['publish_requested_at'] = undefined;
  /**
   * @member {String} publish_requested_by
   */
  exports.prototype['publish_requested_by'] = undefined;
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
   * @member {String} origin
   */
  exports.prototype['origin'] = undefined;



  return exports;
}));

