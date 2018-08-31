# Podravkaio.AttributeDefinitionApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAttributeDefinition**](AttributeDefinitionApi.md#createAttributeDefinition) | **POST** /attributes/{entity} | Creates a AttributeDefinition resource.
[**deleteAttributeDefinition**](AttributeDefinitionApi.md#deleteAttributeDefinition) | **DELETE** /attributes/{entity}/{id} | Removes the AttributeDefinition resource.
[**getAttributeDefinition**](AttributeDefinitionApi.md#getAttributeDefinition) | **GET** /attributes/{entity}/{id} | Retrieves a AttributeDefinition resource.
[**getAttributeDefinitionList**](AttributeDefinitionApi.md#getAttributeDefinitionList) | **GET** /attributes/{entity} | Retrieves the collection of AttributeDefinition resources.


<a name="createAttributeDefinition"></a>
# **createAttributeDefinition**
> AttributeDefinitionRead createAttributeDefinition(entity, opts)

Creates a AttributeDefinition resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.AttributeDefinitionApi();
var entity = "entity_example"; // String | The entity type
var opts = {
  'acceptLanguage': "acceptLanguage_example", // String | Locale code
  'attributeDefinitionCreate': new Podravkaio.AttributeDefinitionCreate() // AttributeDefinitionCreate | The new AttributeDefinition resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAttributeDefinition(entity, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| The entity type | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **attributeDefinitionCreate** | [**AttributeDefinitionCreate**](AttributeDefinitionCreate.md)| The new AttributeDefinition resource | [optional] 

### Return type

[**AttributeDefinitionRead**](AttributeDefinitionRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAttributeDefinition"></a>
# **deleteAttributeDefinition**
> deleteAttributeDefinition(entity, id, opts)

Removes the AttributeDefinition resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.AttributeDefinitionApi();
var entity = "entity_example"; // String | The entity type
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
apiInstance.deleteAttributeDefinition(entity, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| The entity type | 
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAttributeDefinition"></a>
# **getAttributeDefinition**
> AttributeDefinitionRead getAttributeDefinition(entity, id, opts)

Retrieves a AttributeDefinition resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.AttributeDefinitionApi();
var entity = "entity_example"; // String | The entity type
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
apiInstance.getAttributeDefinition(entity, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| The entity type | 
 **id** | **String**|  | 
 **acceptLanguage** | **String**| Locale code | [optional] 

### Return type

[**AttributeDefinitionRead**](AttributeDefinitionRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttributeDefinitionList"></a>
# **getAttributeDefinitionList**
> [AttributeDefinitionList] getAttributeDefinitionList(entity, opts)

Retrieves the collection of AttributeDefinition resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.AttributeDefinitionApi();
var entity = "entity_example"; // String | The entity type
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
apiInstance.getAttributeDefinitionList(entity, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| The entity type | 
 **acceptLanguage** | **String**| Locale code | [optional] 
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[AttributeDefinitionList]**](AttributeDefinitionList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

