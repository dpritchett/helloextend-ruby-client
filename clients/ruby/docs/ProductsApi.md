# OpenapiClient::ProductsApi

All URIs are relative to *https://api-demo.helloextend.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stores_store_id_products_post**](ProductsApi.md#stores_store_id_products_post) | **POST** /stores/{storeId}/products | Create a product
[**stores_store_id_products_product_id_delete**](ProductsApi.md#stores_store_id_products_product_id_delete) | **DELETE** /stores/{storeId}/products/{productId} | Delete a product
[**stores_store_id_products_product_id_get**](ProductsApi.md#stores_store_id_products_product_id_get) | **GET** /stores/{storeId}/products/{productId} | Get a product
[**stores_store_id_products_product_id_put**](ProductsApi.md#stores_store_id_products_product_id_put) | **PUT** /stores/{storeId}/products/{productId} | Update a product



## stores_store_id_products_post

> Product stores_store_id_products_post(store_id, opts)

Create a product

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

api_instance = OpenapiClient::ProductsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
opts = {
  batch: true, # Boolean | Use the value true if passing a batch of products.
  upsert: true, # Boolean | If true, will update products that already exist.
  product: OpenapiClient::Product.new # Product | 
}

begin
  #Create a product
  result = api_instance.stores_store_id_products_post(store_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->stores_store_id_products_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **batch** | **Boolean**| Use the value true if passing a batch of products. | [optional] 
 **upsert** | **Boolean**| If true, will update products that already exist. | [optional] 
 **product** | [**Product**](Product.md)|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stores_store_id_products_product_id_delete

> stores_store_id_products_product_id_delete(store_id, product_id)

Delete a product

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

api_instance = OpenapiClient::ProductsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
product_id = 'product_id_example' # String | The unique referenceId passed to extend when creating a product.

begin
  #Delete a product
  api_instance.stores_store_id_products_product_id_delete(store_id, product_id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->stores_store_id_products_product_id_delete: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **product_id** | [**String**](.md)| The unique referenceId passed to extend when creating a product. | 

### Return type

nil (empty response body)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stores_store_id_products_product_id_get

> Product stores_store_id_products_product_id_get(store_id, product_id)

Get a product

Returns information about a product

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

api_instance = OpenapiClient::ProductsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
product_id = 'product_id_example' # String | The unique referenceId passed to extend when creating a product.

begin
  #Get a product
  result = api_instance.stores_store_id_products_product_id_get(store_id, product_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->stores_store_id_products_product_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **product_id** | [**String**](.md)| The unique referenceId passed to extend when creating a product. | 

### Return type

[**Product**](Product.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stores_store_id_products_product_id_put

> Product stores_store_id_products_product_id_put(store_id, product_id, opts)

Update a product

When you update a product, you may not update the referenceId.

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

api_instance = OpenapiClient::ProductsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
product_id = 'product_id_example' # String | The unique referenceId passed to extend when creating a product.
opts = {
  unknown_base_type: OpenapiClient::UNKNOWN_BASE_TYPE.new # UNKNOWN_BASE_TYPE | 
}

begin
  #Update a product
  result = api_instance.stores_store_id_products_product_id_put(store_id, product_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->stores_store_id_products_product_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **product_id** | [**String**](.md)| The unique referenceId passed to extend when creating a product. | 
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

