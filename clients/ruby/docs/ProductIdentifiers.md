# OpenapiClient::ProductIdentifiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **String** | A unique identifier for the product that is specific to your store | [optional] 
**gtin** | **String** | &lt;p&gt;Global Trade Item Number (GTIN) - A unique identifier for trade items, developed by GS1. &lt;a href&#x3D;&#39;https://www.gs1.org/standards/id-keys/gtin&#39;&gt;Learn more here&lt;/a&gt;&lt;/p&gt; | [optional] 
**upc** | **String** | The Universal Product Code (UPC) barcode | [optional] 
**asin** | **String** | The Amazon Standard Identification Number (ASIN) | [optional] 
**barcode** | **String** | The product&#39;s barcode. Non-Standard | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductIdentifiers.new(sku: KS944RUR,
                                 gtin: 012345678901234,
                                 upc: 0123456789012,
                                 asin: 0123456789,
                                 barcode: 123)
```


