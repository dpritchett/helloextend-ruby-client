# OpenapiClient::OffersApi

All URIs are relative to *https://api-demo.helloextend.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_offer**](OffersApi.md#get_offer) | **GET** /offers?storeId&#x3D;{storeId}&amp;productId&#x3D;{productId} | Get Offer information



## get_offer

> Offer get_offer(store_id, product_id)

Get Offer information

Returns warranty plans and pricing for a specific product. 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::OffersApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
product_id = 'product_id_example' # String | The unique referenceId passed to extend when creating a product.

begin
  #Get Offer information
  result = api_instance.get_offer(store_id, product_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling OffersApi->get_offer: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **product_id** | [**String**](.md)| The unique referenceId passed to extend when creating a product. | 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

