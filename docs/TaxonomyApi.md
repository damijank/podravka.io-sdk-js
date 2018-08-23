# Podravkaio.TaxonomyApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentTaxon**](TaxonomyApi.md#createContentTaxon) | **POST** /{entity_name}/{entity_id}/taxons/{bag_name} | Creates a ContentTaxon resource.
[**createTaxon**](TaxonomyApi.md#createTaxon) | **POST** /taxons/{taxonomy_name} | Creates a Taxon resource.
[**createTaxonBag**](TaxonomyApi.md#createTaxonBag) | **POST** /taxons-bags | Creates a TaxonBag resource.
[**createTaxonomy**](TaxonomyApi.md#createTaxonomy) | **POST** /taxonomies | Creates a Taxonomy resource.
[**deleteContentTaxon**](TaxonomyApi.md#deleteContentTaxon) | **DELETE** /{entity_name}/{entity_id}/taxons/{bag_name}/{id} | Removes the ContentTaxon resource.
[**deleteTaxon**](TaxonomyApi.md#deleteTaxon) | **DELETE** /taxons/{taxonomy_name}/{id} | Removes the Taxon resource.
[**deleteTaxonBag**](TaxonomyApi.md#deleteTaxonBag) | **DELETE** /taxons-bags/{id} | Removes the TaxonBag resource.
[**deleteTaxonomy**](TaxonomyApi.md#deleteTaxonomy) | **DELETE** /taxonomies/{id} | Removes the Taxonomy resource.
[**getContentTaxon**](TaxonomyApi.md#getContentTaxon) | **GET** /{entity_name}/{entity_id}/taxons/{bag_name}/{id} | Retrieves a ContentTaxon resource.
[**getContentTaxonList**](TaxonomyApi.md#getContentTaxonList) | **GET** /{entity_name}/{entity_id}/taxons/{bag_name} | Retrieves the collection of ContentTaxon resources.
[**getTaxon**](TaxonomyApi.md#getTaxon) | **GET** /taxons/{taxonomy_name}/{id} | Retrieves a Taxon resource.
[**getTaxonBag**](TaxonomyApi.md#getTaxonBag) | **GET** /taxons-bags/{id} | Retrieves a TaxonBag resource.
[**getTaxonBagList**](TaxonomyApi.md#getTaxonBagList) | **GET** /taxons-bags | Retrieves the collection of TaxonBag resources.
[**getTaxonList**](TaxonomyApi.md#getTaxonList) | **GET** /taxons/{taxonomy_name} | Retrieves the collection of Taxon resources.
[**getTaxonomy**](TaxonomyApi.md#getTaxonomy) | **GET** /taxonomies/{id} | Retrieves a Taxonomy resource.
[**getTaxonomyList**](TaxonomyApi.md#getTaxonomyList) | **GET** /taxonomies | Retrieves the collection of Taxonomy resources.
[**updateContentTaxon**](TaxonomyApi.md#updateContentTaxon) | **PUT** /{entity_name}/{entity_id}/taxons/{bag_name}/{id} | Replaces the ContentTaxon resource.
[**updateTaxon**](TaxonomyApi.md#updateTaxon) | **PUT** /taxons/{taxonomy_name}/{id} | Replaces the Taxon resource.
[**updateTaxonBag**](TaxonomyApi.md#updateTaxonBag) | **PUT** /taxons-bags/{id} | Replaces the TaxonBag resource.
[**updateTaxonomy**](TaxonomyApi.md#updateTaxonomy) | **PUT** /taxonomies/{id} | Replaces the Taxonomy resource.


<a name="createContentTaxon"></a>
# **createContentTaxon**
> ContentTaxonRead createContentTaxon(entityName, entityId, bagName, opts)

Creates a ContentTaxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var entityName = "entityName_example"; // String | 
var entityId = null; // String | 
var bagName = "bagName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'contentTaxonCreate': new Podravkaio.ContentTaxonCreate() // ContentTaxonCreate | The new ContentTaxon resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContentTaxon(entityName, entityId, bagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityName** | **String**|  | 
 **entityId** | [**String**](.md)|  | 
 **bagName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **contentTaxonCreate** | [**ContentTaxonCreate**](ContentTaxonCreate.md)| The new ContentTaxon resource | [optional] 

### Return type

[**ContentTaxonRead**](ContentTaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="createTaxon"></a>
# **createTaxon**
> TaxonRead createTaxon(taxonomyName, opts)

Creates a Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomyName = "taxonomyName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonCreate': new Podravkaio.TaxonCreate() // TaxonCreate | The new Taxon resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTaxon(taxonomyName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomyName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonCreate** | [**TaxonCreate**](TaxonCreate.md)| The new Taxon resource | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="createTaxonBag"></a>
# **createTaxonBag**
> TaxonBagRead createTaxonBag(opts)

Creates a TaxonBag resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonBagCreate': new Podravkaio.TaxonBagCreate() // TaxonBagCreate | The new TaxonBag resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTaxonBag(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonBagCreate** | [**TaxonBagCreate**](TaxonBagCreate.md)| The new TaxonBag resource | [optional] 

### Return type

[**TaxonBagRead**](TaxonBagRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="createTaxonomy"></a>
# **createTaxonomy**
> TaxonomyRead createTaxonomy(opts)

Creates a Taxonomy resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonomyCreate': new Podravkaio.TaxonomyCreate() // TaxonomyCreate | The new Taxonomy resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTaxonomy(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonomyCreate** | [**TaxonomyCreate**](TaxonomyCreate.md)| The new Taxonomy resource | [optional] 

### Return type

[**TaxonomyRead**](TaxonomyRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="deleteContentTaxon"></a>
# **deleteContentTaxon**
> deleteContentTaxon(id, entityName, entityId, bagName, opts)

Removes the ContentTaxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var entityName = "entityName_example"; // String | 
var entityId = null; // String | 
var bagName = "bagName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContentTaxon(id, entityName, entityId, bagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **entityName** | **String**|  | 
 **entityId** | [**String**](.md)|  | 
 **bagName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTaxon"></a>
# **deleteTaxon**
> deleteTaxon(taxonomyName, id, opts)

Removes the Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomyName = "taxonomyName_example"; // String | 
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaxon(taxonomyName, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomyName** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTaxonBag"></a>
# **deleteTaxonBag**
> deleteTaxonBag(id, opts)

Removes the TaxonBag resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaxonBag(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTaxonomy"></a>
# **deleteTaxonomy**
> deleteTaxonomy(id, opts)

Removes the Taxonomy resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaxonomy(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getContentTaxon"></a>
# **getContentTaxon**
> ContentTaxonRead getContentTaxon(id, entityName, entityId, bagName, opts)

Retrieves a ContentTaxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var entityName = "entityName_example"; // String | 
var entityId = null; // String | 
var bagName = "bagName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentTaxon(id, entityName, entityId, bagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **entityName** | **String**|  | 
 **entityId** | [**String**](.md)|  | 
 **bagName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ContentTaxonRead**](ContentTaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getContentTaxonList"></a>
# **getContentTaxonList**
> [ContentTaxonList] getContentTaxonList(entityName, entityId, bagName, opts)

Retrieves the collection of ContentTaxon resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var entityName = "entityName_example"; // String | 
var entityId = null; // String | 
var bagName = "bagName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'page': 56 // Number | The collection page number
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentTaxonList(entityName, entityId, bagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityName** | **String**|  | 
 **entityId** | [**String**](.md)|  | 
 **bagName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ContentTaxonList]**](ContentTaxonList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxon"></a>
# **getTaxon**
> TaxonRead getTaxon(taxonomyName, id, opts)

Retrieves a Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomyName = "taxonomyName_example"; // String | 
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxon(taxonomyName, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomyName** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxonBag"></a>
# **getTaxonBag**
> TaxonBagRead getTaxonBag(id, opts)

Retrieves a TaxonBag resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxonBag(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**TaxonBagRead**](TaxonBagRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxonBagList"></a>
# **getTaxonBagList**
> [TaxonBagList] getTaxonBagList(opts)

Retrieves the collection of TaxonBag resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'page': 56 // Number | The collection page number
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxonBagList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[TaxonBagList]**](TaxonBagList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxonList"></a>
# **getTaxonList**
> [TaxonList] getTaxonList(taxonomyName, opts)

Retrieves the collection of Taxon resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomyName = "taxonomyName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'page': 56 // Number | The collection page number
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxonList(taxonomyName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomyName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[TaxonList]**](TaxonList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxonomy"></a>
# **getTaxonomy**
> TaxonomyRead getTaxonomy(id, opts)

Retrieves a Taxonomy resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxonomy(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**TaxonomyRead**](TaxonomyRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getTaxonomyList"></a>
# **getTaxonomyList**
> [TaxonomyList] getTaxonomyList(opts)

Retrieves the collection of Taxonomy resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'page': 56 // Number | The collection page number
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxonomyList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[TaxonomyList]**](TaxonomyList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateContentTaxon"></a>
# **updateContentTaxon**
> ContentTaxonRead updateContentTaxon(id, entityName, entityId, bagName, opts)

Replaces the ContentTaxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var entityName = "entityName_example"; // String | 
var entityId = null; // String | 
var bagName = "bagName_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'contentTaxonUpdate': new Podravkaio.ContentTaxonUpdate() // ContentTaxonUpdate | The updated ContentTaxon resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContentTaxon(id, entityName, entityId, bagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **entityName** | **String**|  | 
 **entityId** | [**String**](.md)|  | 
 **bagName** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **contentTaxonUpdate** | [**ContentTaxonUpdate**](ContentTaxonUpdate.md)| The updated ContentTaxon resource | [optional] 

### Return type

[**ContentTaxonRead**](ContentTaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateTaxon"></a>
# **updateTaxon**
> TaxonRead updateTaxon(taxonomyName, id, opts)

Replaces the Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomyName = "taxonomyName_example"; // String | 
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonUpdate': new Podravkaio.TaxonUpdate() // TaxonUpdate | The updated Taxon resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaxon(taxonomyName, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomyName** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonUpdate** | [**TaxonUpdate**](TaxonUpdate.md)| The updated Taxon resource | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateTaxonBag"></a>
# **updateTaxonBag**
> TaxonBagRead updateTaxonBag(id, opts)

Replaces the TaxonBag resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonBagUpdate': new Podravkaio.TaxonBagUpdate() // TaxonBagUpdate | The updated TaxonBag resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaxonBag(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonBagUpdate** | [**TaxonBagUpdate**](TaxonBagUpdate.md)| The updated TaxonBag resource | [optional] 

### Return type

[**TaxonBagRead**](TaxonBagRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateTaxonomy"></a>
# **updateTaxonomy**
> TaxonomyRead updateTaxonomy(id, opts)

Replaces the Taxonomy resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var id = null; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'taxonomyUpdate': new Podravkaio.TaxonomyUpdate() // TaxonomyUpdate | The updated Taxonomy resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaxonomy(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonomyUpdate** | [**TaxonomyUpdate**](TaxonomyUpdate.md)| The updated Taxonomy resource | [optional] 

### Return type

[**TaxonomyRead**](TaxonomyRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

