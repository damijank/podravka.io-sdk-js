# Podravkaio.ArticleOriginApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiArticleOriginsGetEmbeddedArticleOriginItem**](ArticleOriginApi.md#apiArticleOriginsGetEmbeddedArticleOriginItem) | **GET** /api/article_origins/{id} | Retrieves a ArticleOrigin resource.
[**apiArticlesOriginGetSubresourceArticleOriginCollection**](ArticleOriginApi.md#apiArticlesOriginGetSubresourceArticleOriginCollection) | **GET** /api/article_origins | Retrieves the collection of ArticleOrigin resources.


<a name="apiArticleOriginsGetEmbeddedArticleOriginItem"></a>
# **apiArticleOriginsGetEmbeddedArticleOriginItem**
> ArticleOriginArticleReadRead apiArticleOriginsGetEmbeddedArticleOriginItem(id)

Retrieves a ArticleOrigin resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleOriginApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiArticleOriginsGetEmbeddedArticleOriginItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ArticleOriginArticleReadRead**](ArticleOriginArticleReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="apiArticlesOriginGetSubresourceArticleOriginCollection"></a>
# **apiArticlesOriginGetSubresourceArticleOriginCollection**
> [ArticleOriginArticleReadRead] apiArticlesOriginGetSubresourceArticleOriginCollection(opts)

Retrieves the collection of ArticleOrigin resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ArticleOriginApi();

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
apiInstance.apiArticlesOriginGetSubresourceArticleOriginCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ArticleOriginArticleReadRead]**](ArticleOriginArticleReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

