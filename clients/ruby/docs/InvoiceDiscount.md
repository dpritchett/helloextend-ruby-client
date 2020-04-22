# OpenapiClient::InvoiceDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent** | **Float** |  | [optional] 
**label** | **String** |  | [optional] [default to &#39;Merchant revenue share&#39;]
**amount** | [**Amount**](Amount.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InvoiceDiscount.new(percent: 25,
                                 label: null,
                                 amount: null)
```


