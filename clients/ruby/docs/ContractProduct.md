# OpenapiClient::ContractProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **String** | The store-specific unique reference identifier for the product that the warranty plan is connected to. In other words, if the customer is buying a TV and a warranty plan for the TV, this would be the ID for the TV. Example ID types: a product SKU, variant ID, GTIN, or any other unique identifier you use in your store. Please see the documentation for &lt;a href&#x3D;&#39;/#tag/Store&#39;&gt;&#39;Create a product&#39;&lt;/a&gt; for more information. | 
**purchase_price** | **Integer** | The price paid for the product, in the base unit (i.e. cents) with no currency code. If this amount was lower than the retail price, Extend will assume the price was discounted. | 
**manufacturer_warranty_length** | **Integer** | The duration of the product&#39;s manufacturer warranty as a numer of months. | [optional] [readonly] 
**manufacturer_warranty_length_parts** | **Integer** | The manufacturer warranty length parts. | [optional] [readonly] 
**manufacturer_warranty_length_labor** | **Integer** | The manufacturer warranty length labor. | [optional] [readonly] 
**serial_number** | **String** | The serial number of the product. | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ContractProduct.new(reference_id: SKU-123-456,
                                 purchase_price: 14999,
                                 manufacturer_warranty_length: 12,
                                 manufacturer_warranty_length_parts: 123456,
                                 manufacturer_warranty_length_labor: 123456,
                                 serial_number: ABCD123456)
```


