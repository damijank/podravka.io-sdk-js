# Podravkaio.VideoApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVideo**](VideoApi.md#createVideo) | **POST** /videos | Creates a Video resource.
[**deleteVideo**](VideoApi.md#deleteVideo) | **DELETE** /videos/{id} | Removes the Video resource.
[**getVideo**](VideoApi.md#getVideo) | **GET** /videos/{id} | Retrieves a Video resource.
[**getVideoList**](VideoApi.md#getVideoList) | **GET** /videos | Retrieves the collection of Video resources.
[**getVideoListMetrics**](VideoApi.md#getVideoListMetrics) | **GET** /videos/metrics | Retrieves the metrics of Video collection.
[**getVideoMetrics**](VideoApi.md#getVideoMetrics) | **GET** /videos/{id}/metrics | Retrieves the metrics of Video resource.
[**getVideoState**](VideoApi.md#getVideoState) | **GET** /videos/{id}/state | Retrieves a Video resource.
[**setVideoState**](VideoApi.md#setVideoState) | **PUT** /videos/{id}/state/{state} | Replaces the Video resource.
[**updateVideo**](VideoApi.md#updateVideo) | **PUT** /videos/{id} | Replaces the Video resource.


<a name="createVideo"></a>
# **createVideo**
> VideoCreateRead createVideo(videoCreate, opts)

Creates a Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
var videoCreate = new Podravkaio.VideoCreate(); // VideoCreate | The new Video resource
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
apiInstance.createVideo(videoCreate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoCreate** | [**VideoCreate**](VideoCreate.md)| The new Video resource | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**VideoCreateRead**](VideoCreateRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVideo"></a>
# **deleteVideo**
> deleteVideo(id, opts)

Removes the Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.deleteVideo(id, opts, callback);
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

<a name="getVideo"></a>
# **getVideo**
> VideoRead getVideo(id, opts)

Retrieves a Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.getVideo(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**VideoRead**](VideoRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVideoList"></a>
# **getVideoList**
> [VideoList] getVideoList(opts)

Retrieves the collection of Video resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.getVideoList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[VideoList]**](VideoList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVideoListMetrics"></a>
# **getVideoListMetrics**
> Metrics getVideoListMetrics(opts)

Retrieves the metrics of Video collection.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.getVideoListMetrics(opts, callback);
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

<a name="getVideoMetrics"></a>
# **getVideoMetrics**
> Metrics getVideoMetrics(id, opts)

Retrieves the metrics of Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.getVideoMetrics(id, opts, callback);
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

<a name="getVideoState"></a>
# **getVideoState**
> VideoState getVideoState(id, opts)

Retrieves a Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.getVideoState(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**VideoState**](VideoState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setVideoState"></a>
# **setVideoState**
> VideoState setVideoState(id, state, opts)

Replaces the Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
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
apiInstance.setVideoState(id, state, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **state** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**VideoState**](VideoState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVideo"></a>
# **updateVideo**
> VideoUpdateRead updateVideo(id, opts)

Replaces the Video resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.VideoApi();
var id = "id_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'videoUpdate': new Podravkaio.VideoUpdate() // VideoUpdate | The updated Video resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVideo(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **videoUpdate** | [**VideoUpdate**](VideoUpdate.md)| The updated Video resource | [optional] 

### Return type

[**VideoUpdateRead**](VideoUpdateRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

