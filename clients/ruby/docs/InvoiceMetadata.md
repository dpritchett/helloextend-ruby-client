# OpenapiClient::InvoiceMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_reference_id** | **String** | An optional purchase Order number referenced in the original contract | [optional] 
**plan_id** | **String** | The plan that the contract applied to | [optional] 
**product** | [**InvoiceMetadataProduct**](InvoiceMetadataProduct.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InvoiceMetadata.new(order_reference_id: PO-12345,
                                 plan_id: 10001-auto-part-base-replace-1y,
                                 product: null)
```


