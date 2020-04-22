# OpenapiClient::ProductMfrWarranty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | **Float** | Length of the manufacturers warranty for parts in months. | [optional] 
**labor** | **Float** | Length of the manufacturers warranty for labor in months. | [optional] 
**url** | **String** | Link to the manufacturers warranty for this product. | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductMfrWarranty.new(parts: 12,
                                 labor: 12,
                                 url: http://example.com)
```


