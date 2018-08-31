# Podravkaio.UserApi

All URIs are relative to *https://podravkaio.dev.webburza.eu/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserGroupItem**](UserApi.md#deleteUserGroupItem) | **DELETE** /usergroups/{id} | Removes the UserGroup resource.
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | Retrieves a User resource.
[**getUserCollection**](UserApi.md#getUserCollection) | **GET** /users | Retrieves the collection of User resources.
[**getUserGroupCollection**](UserApi.md#getUserGroupCollection) | **GET** /usergroups | Retrieves the collection of UserGroup resources.
[**getUserGroupItem**](UserApi.md#getUserGroupItem) | **GET** /usergroups/{id} | Retrieves a UserGroup resource.
[**getUserListMetrics**](UserApi.md#getUserListMetrics) | **GET** /users/metrics | Retrieves the metrics of User collection.
[**getUserMetrics**](UserApi.md#getUserMetrics) | **GET** /users/{id}/metrics | Retrieves the metrics of User resource.
[**membersAddUserGroupItem**](UserApi.md#membersAddUserGroupItem) | **PUT** /usergroups/{id}/members/{userId} | Replaces the UserGroup resource.
[**membersRemoveUserGroupItem**](UserApi.md#membersRemoveUserGroupItem) | **DELETE** /usergroups/{id}/members/{userId} | Removes the UserGroup resource.
[**postUserGroupCollection**](UserApi.md#postUserGroupCollection) | **POST** /usergroups | Creates a UserGroup resource.
[**putUser**](UserApi.md#putUser) | **PUT** /users/{id} | Replaces the User resource.
[**putUserGroupItem**](UserApi.md#putUserGroupItem) | **PUT** /usergroups/{id} | Replaces the UserGroup resource.


<a name="deleteUserGroupItem"></a>
# **deleteUserGroupItem**
> deleteUserGroupItem(id)

Removes the UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserGroupItem(id, callback);
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

<a name="getUser"></a>
# **getUser**
> UserRead getUser(id)

Retrieves a User resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserCollection"></a>
# **getUserCollection**
> [UserList] getUserCollection(opts)

Retrieves the collection of User resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
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
apiInstance.getUserCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[UserList]**](UserList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroupCollection"></a>
# **getUserGroupCollection**
> [UserGroupList] getUserGroupCollection(opts)

Retrieves the collection of UserGroup resources.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
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
apiInstance.getUserGroupCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] 

### Return type

[**[UserGroupList]**](UserGroupList.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroupItem"></a>
# **getUserGroupItem**
> UserGroupRead getUserGroupItem(id)

Retrieves a UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserGroupItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UserGroupRead**](UserGroupRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserListMetrics"></a>
# **getUserListMetrics**
> Metrics getUserListMetrics(opts)

Retrieves the metrics of User collection.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
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
apiInstance.getUserListMetrics(opts, callback);
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

<a name="getUserMetrics"></a>
# **getUserMetrics**
> Metrics getUserMetrics(id, opts)

Retrieves the metrics of User resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
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
apiInstance.getUserMetrics(id, opts, callback);
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

<a name="membersAddUserGroupItem"></a>
# **membersAddUserGroupItem**
> UserGroup membersAddUserGroupItem(id, opts)

Replaces the UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var opts = {
  'userGroup': new Podravkaio.UserGroup() // UserGroup | The updated UserGroup resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.membersAddUserGroupItem(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **userGroup** | [**UserGroup**](UserGroup.md)| The updated UserGroup resource | [optional] 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="membersRemoveUserGroupItem"></a>
# **membersRemoveUserGroupItem**
> membersRemoveUserGroupItem(id)

Removes the UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.membersRemoveUserGroupItem(id, callback);
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

<a name="postUserGroupCollection"></a>
# **postUserGroupCollection**
> UserGroupRead postUserGroupCollection(opts)

Creates a UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var opts = {
  'userGroupCreate': new Podravkaio.UserGroupCreate() // UserGroupCreate | The new UserGroup resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUserGroupCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupCreate** | [**UserGroupCreate**](UserGroupCreate.md)| The new UserGroup resource | [optional] 

### Return type

[**UserGroupRead**](UserGroupRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> UserRead putUser(id, opts)

Replaces the User resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var opts = {
  'userUpdate': new Podravkaio.UserUpdate() // UserUpdate | The updated User resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putUser(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **userUpdate** | [**UserUpdate**](UserUpdate.md)| The updated User resource | [optional] 

### Return type

[**UserRead**](UserRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUserGroupItem"></a>
# **putUserGroupItem**
> UserGroupRead putUserGroupItem(id, opts)

Replaces the UserGroup resource.

### Example
```javascript
var Podravkaio = require('podravkaio');
var defaultClient = Podravkaio.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Podravkaio.UserApi();
var id = "id_example"; // String | 
var opts = {
  'userGroupUpdate': new Podravkaio.UserGroupUpdate() // UserGroupUpdate | The updated UserGroup resource
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putUserGroupItem(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **userGroupUpdate** | [**UserGroupUpdate**](UserGroupUpdate.md)| The updated UserGroup resource | [optional] 

### Return type

[**UserGroupRead**](UserGroupRead.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

