# Podravkaio.ArticleApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArticle**](ArticleApi.md#createArticle) | **POST** /articles | Creates a Article resource.
[**deleteArticle**](ArticleApi.md#deleteArticle) | **DELETE** /articles/{id} | Removes the Article resource.
[**getArticle**](ArticleApi.md#getArticle) | **GET** /articles/{id} | Retrieves a Article resource.
[**getArticleList**](ArticleApi.md#getArticleList) | **GET** /articles | Retrieves the collection of Article resources.
[**getArticleListMetrics**](ArticleApi.md#getArticleListMetrics) | **GET** /articles/metrics | Retrieves the metrics of Article collection.
[**getArticleMetrics**](ArticleApi.md#getArticleMetrics) | **GET** /articles/{id}/metrics | Retrieves the metrics of Article resource.
[**getArticleState**](ArticleApi.md#getArticleState) | **GET** /articles/{id}/state | Retrieves a Article resource.
[**setArticleState**](ArticleApi.md#setArticleState) | **PUT** /articles/{id}/state/{state} | Replaces the Article resource.
[**updateArticle**](ArticleApi.md#updateArticle) | **PUT** /articles/{id} | Replaces the Article resource.


<a name="createArticle"></a>
# **createArticle**
> ArticleRead createArticle(opts)

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
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'articleCreate': new Podravkaio.ArticleCreate() // ArticleCreate | The new Article resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createArticle(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **articleCreate** | [**ArticleCreate**](ArticleCreate.md)| The new Article resource | [optional] 

### Return type

[**ArticleRead**](ArticleRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteArticle"></a>
# **deleteArticle**
> deleteArticle(id, opts)

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
apiInstance.deleteArticle(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getArticle"></a>
# **getArticle**
> ArticleRead getArticle(id, opts)

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
apiInstance.getArticle(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ArticleRead**](ArticleRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getArticleList"></a>
# **getArticleList**
> [ArticleList] getArticleList(opts)

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
apiInstance.getArticleList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ArticleList]**](ArticleList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getArticleListMetrics"></a>
# **getArticleListMetrics**
> Metrics getArticleListMetrics(opts)

Retrieves the metrics of Article collection.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleApi();
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
apiInstance.getArticleListMetrics(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getArticleMetrics"></a>
# **getArticleMetrics**
> Metrics getArticleMetrics(id, opts)

Retrieves the metrics of Article resource.

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
  'acceptLanguage': "acceptLanguage_example" // String | Locale code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getArticleMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getArticleState"></a>
# **getArticleState**
> ArticleState getArticleState(id, opts)

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
apiInstance.getArticleState(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ArticleState**](ArticleState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setArticleState"></a>
# **setArticleState**
> ArticleState setArticleState(id, state, opts)

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
apiInstance.setArticleState(id, state, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **state** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ArticleState**](ArticleState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateArticle"></a>
# **updateArticle**
> ArticleRead updateArticle(id, opts)

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
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'articleUpdate': new Podravkaio.ArticleUpdate() // ArticleUpdate | The updated Article resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateArticle(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **articleUpdate** | [**ArticleUpdate**](ArticleUpdate.md)| The updated Article resource | [optional] 

### Return type

[**ArticleRead**](ArticleRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

