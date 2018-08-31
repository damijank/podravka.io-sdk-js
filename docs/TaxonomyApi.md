# Podravkaio.TaxonomyApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentTaxon**](TaxonomyApi.md#createContentTaxon) | **POST** /{entity}/{id}/taxons/{bag} | Creates a ContentTaxon resource.
[**createTaxon**](TaxonomyApi.md#createTaxon) | **POST** /taxons/{taxonomy} | Creates a Taxon resource.
[**createTaxonBag**](TaxonomyApi.md#createTaxonBag) | **POST** /taxons-bags | Creates a TaxonBag resource.
[**createTaxonomy**](TaxonomyApi.md#createTaxonomy) | **POST** /taxonomies | Creates a Taxonomy resource.
[**deleteContentTaxon**](TaxonomyApi.md#deleteContentTaxon) | **DELETE** /{entity}/{id}/taxons/{bag}/{id} | Removes the ContentTaxon resource.
[**deleteTaxon**](TaxonomyApi.md#deleteTaxon) | **DELETE** /taxons/{taxonomy}/{id} | Removes the Taxon resource.
[**deleteTaxonBag**](TaxonomyApi.md#deleteTaxonBag) | **DELETE** /taxons-bags/{id} | Removes the TaxonBag resource.
[**deleteTaxonomy**](TaxonomyApi.md#deleteTaxonomy) | **DELETE** /taxonomies/{id} | Removes the Taxonomy resource.
[**getContentTaxon**](TaxonomyApi.md#getContentTaxon) | **GET** /{entity}/{id}/taxons/{bag}/{id} | Retrieves a ContentTaxon resource.
[**getContentTaxonList**](TaxonomyApi.md#getContentTaxonList) | **GET** /{entity}/{id}/taxons/{bag} | Retrieves the collection of ContentTaxon resources.
[**getTaxon**](TaxonomyApi.md#getTaxon) | **GET** /taxons/{taxonomy}/{id} | Retrieves a Taxon resource.
[**getTaxonBag**](TaxonomyApi.md#getTaxonBag) | **GET** /taxons-bags/{id} | Retrieves a TaxonBag resource.
[**getTaxonBagList**](TaxonomyApi.md#getTaxonBagList) | **GET** /taxons-bags | Retrieves the collection of TaxonBag resources.
[**getTaxonList**](TaxonomyApi.md#getTaxonList) | **GET** /taxons/{taxonomy} | Retrieves the collection of Taxon resources.
[**getTaxonomy**](TaxonomyApi.md#getTaxonomy) | **GET** /taxonomies/{id} | Retrieves a Taxonomy resource.
[**getTaxonomyList**](TaxonomyApi.md#getTaxonomyList) | **GET** /taxonomies | Retrieves the collection of Taxonomy resources.
[**updateTaxon**](TaxonomyApi.md#updateTaxon) | **PUT** /taxons/{taxonomy}/{id} | Replaces the Taxon resource.
[**updateTaxonBag**](TaxonomyApi.md#updateTaxonBag) | **PUT** /taxons-bags/{id} | Replaces the TaxonBag resource.
[**updateTaxonomy**](TaxonomyApi.md#updateTaxonomy) | **PUT** /taxonomies/{id} | Replaces the Taxonomy resource.


<a name="createContentTaxon"></a>
# **createContentTaxon**
> ContentTaxonRead createContentTaxon(entity, id, bag, opts)

Creates a ContentTaxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var entity = "entity_example"; // String | 
var id = null; // String | 
var bag = "bag_example"; // String | 
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
apiInstance.createContentTaxon(entity, id, bag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **bag** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **contentTaxonCreate** | [**ContentTaxonCreate**](ContentTaxonCreate.md)| The new ContentTaxon resource | [optional] 

### Return type

[**ContentTaxonRead**](ContentTaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTaxon"></a>
# **createTaxon**
> TaxonRead createTaxon(taxonomy, opts)

Creates a Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomy = "taxonomy_example"; // String | 
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
apiInstance.createTaxon(taxonomy, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomy** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonCreate** | [**TaxonCreate**](TaxonCreate.md)| The new Taxon resource | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

 - **Content-Type**: application/json
 - **Accept**: application/json

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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentTaxon"></a>
# **deleteContentTaxon**
> deleteContentTaxon(id, entity, bag, opts)

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
var entity = "entity_example"; // String | 
var bag = "bag_example"; // String | 
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
apiInstance.deleteContentTaxon(id, entity, bag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **entity** | **String**|  | 
 **bag** | **String**|  | 
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
> deleteTaxon(taxonomy, id, opts)

Removes the Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomy = "taxonomy_example"; // String | 
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
apiInstance.deleteTaxon(taxonomy, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomy** | **String**|  | 
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
> ContentTaxonRead getContentTaxon(id, entity, bag, opts)

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
var entity = "entity_example"; // String | 
var bag = "bag_example"; // String | 
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
apiInstance.getContentTaxon(id, entity, bag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **entity** | **String**|  | 
 **bag** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ContentTaxonRead**](ContentTaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContentTaxonList"></a>
# **getContentTaxonList**
> [ContentTaxonList] getContentTaxonList(entity, id, bag, opts)

Retrieves the collection of ContentTaxon resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var entity = "entity_example"; // String | 
var id = null; // String | 
var bag = "bag_example"; // String | 
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
apiInstance.getContentTaxonList(entity, id, bag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **bag** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ContentTaxonList]**](ContentTaxonList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaxon"></a>
# **getTaxon**
> TaxonRead getTaxon(taxonomy, id, opts)

Retrieves a Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomy = "taxonomy_example"; // String | 
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
apiInstance.getTaxon(taxonomy, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomy** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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
 - **Accept**: application/json

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
 - **Accept**: application/json

<a name="getTaxonList"></a>
# **getTaxonList**
> [TaxonList] getTaxonList(taxonomy, opts)

Retrieves the collection of Taxon resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomy = "taxonomy_example"; // String | 
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
apiInstance.getTaxonList(taxonomy, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomy** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[TaxonList]**](TaxonList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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
 - **Accept**: application/json

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
 - **Accept**: application/json

<a name="updateTaxon"></a>
# **updateTaxon**
> TaxonRead updateTaxon(taxonomy, id, opts)

Replaces the Taxon resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.TaxonomyApi();
var taxonomy = "taxonomy_example"; // String | 
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
apiInstance.updateTaxon(taxonomy, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxonomy** | **String**|  | 
 **id** | [**String**](.md)|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **taxonUpdate** | [**TaxonUpdate**](TaxonUpdate.md)| The updated Taxon resource | [optional] 

### Return type

[**TaxonRead**](TaxonRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

 - **Content-Type**: application/json
 - **Accept**: application/json

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

 - **Content-Type**: application/json
 - **Accept**: application/json

