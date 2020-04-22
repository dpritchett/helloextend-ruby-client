# OpenapiClient::PlansApi

All URIs are relative to *https://api-demo.helloextend.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offers_liststore_idstore_id_get**](PlansApi.md#offers_liststore_idstore_id_get) | **GET** /offers/list?storeId&#x3D;{storeId} | A list of warranty plans available to the store



## offers_liststore_idstore_id_get

> PlansList offers_liststore_idstore_id_get(store_id)

A list of warranty plans available to the store

### Example

```ruby
# load the gem
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure API key authorization: ExtendAccessToken
  config.api_key['X-Extend-Access-Token'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-Extend-Access-Token'] = 'Bearer'
end

api_instance = OpenapiClient::PlansApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend

begin
  #A list of warranty plans available to the store
  result = api_instance.offers_liststore_idstore_id_get(store_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PlansApi->offers_liststore_idstore_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 

### Return type

[**PlansList**](PlansList.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

