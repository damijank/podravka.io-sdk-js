# Podravkaio.ProductApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductApi.md#createProduct) | **POST** /products | Creates a Product resource.
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /products/{id} | Removes the Product resource.
[**getProduct**](ProductApi.md#getProduct) | **GET** /products/{id} | Retrieves a Product resource.
[**getProductList**](ProductApi.md#getProductList) | **GET** /products | Retrieves the collection of Product resources.
[**getProductState**](ProductApi.md#getProductState) | **GET** /products/{id}/state | Retrieves a Product resource.
[**setProductState**](ProductApi.md#setProductState) | **PUT** /products/{id}/state/{state} | Replaces the Product resource.
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /products/{id} | Replaces the Product resource.


<a name="createProduct"></a>
# **createProduct**
> ProductRead createProduct(opts)

Creates a Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'productCreate': new Podravkaio.ProductCreate() // ProductCreate | The new Product resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProduct(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **productCreate** | [**ProductCreate**](ProductCreate.md)| The new Product resource | [optional] 

### Return type

[**ProductRead**](ProductRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(id, opts)

Removes the Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
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
apiInstance.deleteProduct(id, opts, callback);
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

<a name="getProduct"></a>
# **getProduct**
> ProductRead getProduct(id, opts)

Retrieves a Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
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
apiInstance.getProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ProductRead**](ProductRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getProductList"></a>
# **getProductList**
> [ProductList] getProductList(opts)

Retrieves the collection of Product resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
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
apiInstance.getProductList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[ProductList]**](ProductList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="getProductState"></a>
# **getProductState**
> ProductState getProductState(id, opts)

Retrieves a Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
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
apiInstance.getProductState(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ProductState**](ProductState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="setProductState"></a>
# **setProductState**
> ProductState setProductState(id, state, opts)

Replaces the Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
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
apiInstance.setProductState(id, state, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **state** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**ProductState**](ProductState.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/ld+json, text/html

<a name="updateProduct"></a>
# **updateProduct**
> ProductRead updateProduct(id, opts)

Replaces the Product resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.ProductApi();
var id = "id_example"; // String | 
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'productUpdate': new Podravkaio.ProductUpdate() // ProductUpdate | The updated Product resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **productUpdate** | [**ProductUpdate**](ProductUpdate.md)| The updated Product resource | [optional] 

### Return type

[**ProductRead**](ProductRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json, application/ld+json, text/html
 - **Accept**: application/json, application/ld+json, text/html

