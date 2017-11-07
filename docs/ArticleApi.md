# Podravkaio.ArticleApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiArticlesImagesGetSubresource**](ArticleApi.md#apiArticlesImagesGetSubresource) | **GET** /api/articles/{id}/images | Retrieves the collection of Image resources.
[**apiGetStateArticleItem**](ArticleApi.md#apiGetStateArticleItem) | **GET** /api/articles/{id}/state | Retrieves a Article resource.
[**apiSetStateArticleItem**](ArticleApi.md#apiSetStateArticleItem) | **PUT** /api/articles/{id}/state/{state} | Replaces the Article resource.
[**deleteArticleItem**](ArticleApi.md#deleteArticleItem) | **DELETE** /api/articles/{id} | Removes the Article resource.
[**getArticleCollection**](ArticleApi.md#getArticleCollection) | **GET** /api/articles | Retrieves the collection of Article resources.
[**getArticleItem**](ArticleApi.md#getArticleItem) | **GET** /api/articles/{id} | Retrieves a Article resource.
[**postArticleCollection**](ArticleApi.md#postArticleCollection) | **POST** /api/articles | Creates a Article resource.
[**putArticleItem**](ArticleApi.md#putArticleItem) | **PUT** /api/articles/{id} | Replaces the Article resource.


<a name="apiArticlesImagesGetSubresource"></a>
# **apiArticlesImagesGetSubresource**
> [ImageImageReadRead] apiArticlesImagesGetSubresource(id)

Retrieves the collection of Image resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiArticlesImagesGetSubresource(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**[ImageImageReadRead]**](ImageImageReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="apiGetStateArticleItem"></a>
# **apiGetStateArticleItem**
> ArticleApiState apiGetStateArticleItem(id)

Retrieves a Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiGetStateArticleItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ArticleApiState**](ArticleApiState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="apiSetStateArticleItem"></a>
# **apiSetStateArticleItem**
> ArticleApiState apiSetStateArticleItem(id, state)

Replaces the Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 

var state = "state_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiSetStateArticleItem(id, state, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **state** | **String**|  | 

### Return type

[**ArticleApiState**](ArticleApiState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html

<a name="deleteArticleItem"></a>
# **deleteArticleItem**
> deleteArticleItem(id)

Removes the Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteArticleItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getArticleCollection"></a>
# **getArticleCollection**
> [ArticleArticleListList] getArticleCollection(opts)

Retrieves the collection of Article resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var opts = { 
  'page': 56 // Number | The collection page number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getArticleCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ArticleArticleListList]**](ArticleArticleListList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="getArticleItem"></a>
# **getArticleItem**
> ArticleArticleReadRead getArticleItem(id)

Retrieves a Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getArticleItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ArticleArticleReadRead**](ArticleArticleReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="postArticleCollection"></a>
# **postArticleCollection**
> ArticleArticleCreateReadCreateReadArticleReadRead postArticleCollection(opts)

Creates a Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var opts = { 
  'article': new Podravkaio.ArticleArticleCreate() // ArticleArticleCreate | The new Article resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postArticleCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article** | [**ArticleArticleCreate**](ArticleArticleCreate.md)| The new Article resource | [optional] 

### Return type

[**ArticleArticleCreateReadCreateReadArticleReadRead**](ArticleArticleCreateReadCreateReadArticleReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html

<a name="putArticleItem"></a>
# **putArticleItem**
> ArticleArticleUpdateReadUpdateReadArticleReadRead putArticleItem(id, opts)

Replaces the Article resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();

var id = "id_example"; // String | 

var opts = { 
  'article': new Podravkaio.ArticleArticleUpdate() // ArticleArticleUpdate | The updated Article resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putArticleItem(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **article** | [**ArticleArticleUpdate**](ArticleArticleUpdate.md)| The updated Article resource | [optional] 

### Return type

[**ArticleArticleUpdateReadUpdateReadArticleReadRead**](ArticleArticleUpdateReadUpdateReadArticleReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html

