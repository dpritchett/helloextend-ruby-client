# OpenapiClient::ContractsApi

All URIs are relative to *https://api-demo.helloextend.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contract_invoice**](ContractsApi.md#contract_invoice) | **GET** /stores/{storeId}/contracts/{contractId}/invoice | Get invoice information for a contract
[**create_contracts**](ContractsApi.md#create_contracts) | **POST** /stores/{storeId}/contracts | Create a warranty contract
[**refund_contract**](ContractsApi.md#refund_contract) | **POST** /stores/{storeId}/contracts/{contractId}/refund | Cancel a warranty contract and request a refund



## contract_invoice

> Invoice contract_invoice(store_id, contract_id)

Get invoice information for a contract

Extend automatically generates an invoice to the merchant whenever a warranty contract is sold.  If it helps with your record-keeping and back end reconciliation, you can get the invoice details using this API call.  If you sent us a purchase order number when making the 'Create a warranty contract' call, we'll include that in the invoice, too, for your reference.

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

api_instance = OpenapiClient::ContractsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
contract_id = 'cc957cb3-3d5d-430b-90a2-9ec96ee4c3cf' # String | Unique identifier for an Extend warranty Contract

begin
  #Get invoice information for a contract
  result = api_instance.contract_invoice(store_id, contract_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContractsApi->contract_invoice: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **contract_id** | [**String**](.md)| Unique identifier for an Extend warranty Contract | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_contracts

> Contract create_contracts(store_id, contract)

Create a warranty contract

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

api_instance = OpenapiClient::ContractsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
contract = OpenapiClient::Contract.new # Contract | 

begin
  #Create a warranty contract
  result = api_instance.create_contracts(store_id, contract)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContractsApi->create_contracts: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **contract** | [**Contract**](Contract.md)|  | 

### Return type

[**Contract**](Contract.md)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refund_contract

> refund_contract(store_id, contract_id, opts)

Cancel a warranty contract and request a refund

This endpoint is your way to report a refunded warranty contract to Extend. If a customer returns an item for which a warranty was purchased, or just the warranty itself, to your store, you should let Extend know so we can cancel the warranty contract. We will also refund you, the merchant, in the next invoice. The amount Extend will refund you (and the amount you should refund to the customer), depends on the date of the refund and the terms of the warranty contract. <div class='wrapper tip'><h2>Pro Tip! Check the refund amount before you refund your customer</h2>  To make sure you refund your customer the same amount as Extend will be refunding you, there is a three-step process:  <ul><li>Send the cancellation API request to Extend with query parameter \"commit\" set to FALSE. This gives you a preview of the cancellation, Including the amount that would be refunded (the \"cancellation quote\") </li><li>Issue a refund to the customer for the amount matching the cancellation quote</li><li>Re-send the cancellation API request to Extend with query parameter \"commit\" set to TRUE. This will cause Extend to cancel the contract and issue the merchant refund for the amount matching the cancellation quote</li></ul></div><div class='wrapper important'><h2>Important:</h2>  Please note that this endpoint <strong>does not cause Extend to refund the customer</strong> - they would get the refund from the store where they purchased the product and warranty contract. A successful call to this endpoint <strong>will void the customer’s warranty contract</strong>, and initiate reimbursement to you, the merchant.</div>

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

api_instance = OpenapiClient::ContractsApi.new
store_id = 'c57ed096-24ef-49a4-a20a-d1b8bf770980' # String | Unique identifier for a Store on Extend
contract_id = 'cc957cb3-3d5d-430b-90a2-9ec96ee4c3cf' # String | Unique identifier for an Extend warranty Contract
opts = {
  commit: true # Boolean | Use the value <strong>\"false\"</strong> to get a preview of the cancellation quote - the amount you will be refunded for the cancelled contract. If you use the value <strong>\"true\"</strong> or omit the query parameter, Extend will execute the contract cancellation.
}

begin
  #Cancel a warranty contract and request a refund
  api_instance.refund_contract(store_id, contract_id, opts)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContractsApi->refund_contract: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | [**String**](.md)| Unique identifier for a Store on Extend | 
 **contract_id** | [**String**](.md)| Unique identifier for an Extend warranty Contract | 
 **commit** | **Boolean**| Use the value &lt;strong&gt;\&quot;false\&quot;&lt;/strong&gt; to get a preview of the cancellation quote - the amount you will be refunded for the cancelled contract. If you use the value &lt;strong&gt;\&quot;true\&quot;&lt;/strong&gt; or omit the query parameter, Extend will execute the contract cancellation. | [optional] 

### Return type

nil (empty response body)

### Authorization

[ExtendAccessToken](../README.md#ExtendAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

