# OpenapiClient::InvoiceMetadataProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**reference_id** | **String** | The store-specific unique reference identifier for the product that the warranty plan is connected to. In other words, if the customer is buying a TV and a warranty plan for the TV, this would be the ID for the TV. Example ID types: a product SKU, variant ID, GTIN, or any other unique identifier you use in your store. Please see the documentation for &lt;a href&#x3D;&#39;/#tag/Store&#39;&gt;&#39;Create a product&#39;&lt;/a&gt; for more information | [optional] 
**price** | [**Amount**](Amount.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InvoiceMetadataProduct.new(name: Xbox One X 1TB console,
                                 reference_id: SKU-123-456,
                                 price: null)
```


