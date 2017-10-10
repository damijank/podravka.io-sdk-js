# Podravkaio.ImageApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteImageItem**](ImageApi.md#deleteImageItem) | **DELETE** /api/images/{id} | Removes the Image resource.
[**getImageCollection**](ImageApi.md#getImageCollection) | **GET** /api/images | Retrieves the collection of Image resources.
[**getImageItem**](ImageApi.md#getImageItem) | **GET** /api/images/{id} | Retrieves a Image resource.
[**postImageCollection**](ImageApi.md#postImageCollection) | **POST** /api/images | Creates a Image resource.
[**putImageItem**](ImageApi.md#putImageItem) | **PUT** /api/images/{id} | Replaces the Image resource.


<a name="deleteImageItem"></a>
# **deleteImageItem**
> deleteImageItem(id)

Removes the Image resource.

### Example
```javascript
import Podravkaio from 'podravkaio';
let defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Podravkaio.ImageApi();

let id = "id_example"; // String | 


apiInstance.deleteImageItem(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

<a name="getImageCollection"></a>
# **getImageCollection**
> [ImageImageListList] getImageCollection(opts)

Retrieves the collection of Image resources.

### Example
```javascript
import Podravkaio from 'podravkaio';
let defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Podravkaio.ImageApi();

let opts = { 
  'page': 56 // Number | The collection page number
};

apiInstance.getImageCollection(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ImageImageListList]**](ImageImageListList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="getImageItem"></a>
# **getImageItem**
> ImageImageReadRead getImageItem(id)

Retrieves a Image resource.

### Example
```javascript
import Podravkaio from 'podravkaio';
let defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Podravkaio.ImageApi();

let id = "id_example"; // String | 


apiInstance.getImageItem(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ImageImageReadRead**](ImageImageReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html

<a name="postImageCollection"></a>
# **postImageCollection**
> ImageImageCreateReadCreateReadRead postImageCollection(opts)

Creates a Image resource.

### Example
```javascript
import Podravkaio from 'podravkaio';
let defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Podravkaio.ImageApi();

let opts = { 
  'image': new Podravkaio.ImageImageCreate() // ImageImageCreate | The new Image resource
};

apiInstance.postImageCollection(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | [**ImageImageCreate**](ImageImageCreate.md)| The new Image resource | [optional] 

### Return type

[**ImageImageCreateReadCreateReadRead**](ImageImageCreateReadCreateReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html

<a name="putImageItem"></a>
# **putImageItem**
> ImageImageUpdateReadUpdateReadRead putImageItem(id, opts)

Replaces the Image resource.

### Example
```javascript
import Podravkaio from 'podravkaio';
let defaultClient = Podravkaio.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Podravkaio.ImageApi();

let id = "id_example"; // String | 

let opts = { 
  'image': new Podravkaio.ImageImageUpdate() // ImageImageUpdate | The updated Image resource
};

apiInstance.putImageItem(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **image** | [**ImageImageUpdate**](ImageImageUpdate.md)| The updated Image resource | [optional] 

### Return type

[**ImageImageUpdateReadUpdateReadRead**](ImageImageUpdateReadUpdateReadRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html
 - **Accept**: application/ld+json, application/json, text/html

