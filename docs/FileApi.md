# Podravkaio.FileApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FileApi.md#createFile) | **POST** /files | Creates a File resource.
[**deleteFile**](FileApi.md#deleteFile) | **DELETE** /files/{id} | Removes the File resource.
[**getFile**](FileApi.md#getFile) | **GET** /files/{id} | Retrieves a File resource.
[**getFileList**](FileApi.md#getFileList) | **GET** /files | Retrieves the collection of File resources.
[**getFileState**](FileApi.md#getFileState) | **GET** /files/{id}/state | Retrieves a File resource.
[**setFileState**](FileApi.md#setFileState) | **PUT** /files/{id}/state/{state} | Replaces the File resource.
[**updateFile**](FileApi.md#updateFile) | **PUT** /files/{id} | Replaces the File resource.


<a name="createFile"></a>
# **createFile**
> FileCreateRead createFile(fileCreate, opts)

Creates a File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
var fileCreate = new Podravkaio.FileCreate(); // FileCreate | The new File resource
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
apiInstance.createFile(fileCreate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileCreate** | [**FileCreate**](FileCreate.md)| The new File resource | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**FileCreateRead**](FileCreateRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="deleteFile"></a>
# **deleteFile**
> deleteFile(id, opts)

Removes the File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
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
apiInstance.deleteFile(id, opts, callback);
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

<a name="getFile"></a>
# **getFile**
> FileRead getFile(id, opts)

Retrieves a File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
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
apiInstance.getFile(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**FileRead**](FileRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getFileList"></a>
# **getFileList**
> [FileList] getFileList(opts)

Retrieves the collection of File resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
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
apiInstance.getFileList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[FileList]**](FileList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getFileState"></a>
# **getFileState**
> FileState getFileState(id, opts)

Retrieves a File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
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
apiInstance.getFileState(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**FileState**](FileState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="setFileState"></a>
# **setFileState**
> FileState setFileState(id, state, opts)

Replaces the File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
var id = "id_example"; // String | 
var state = "state_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'filename': "filename_example" // String | Specifies the filename to be used for the 'upload' transition
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setFileState(id, state, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **state** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **filename** | **String**| Specifies the filename to be used for the &#39;upload&#39; transition | [optional] 

### Return type

[**FileState**](FileState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateFile"></a>
# **updateFile**
> FileUpdateRead updateFile(id, opts)

Replaces the File resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.FileApi();
var id = "id_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'fileUpdate': new Podravkaio.FileUpdate() // FileUpdate | The updated File resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFile(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **fileUpdate** | [**FileUpdate**](FileUpdate.md)| The updated File resource | [optional] 

### Return type

[**FileUpdateRead**](FileUpdateRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

