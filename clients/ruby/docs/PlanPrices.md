# OpenapiClient::PlanPrices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min** | **Integer** | The minimum price allowed for the warranty plan offered, in the base unit (i.e. cents) with no currency code | [optional] 
**max** | **Integer** | The maximum price for the warranty plan offered, in the base unit (i.e. cents) with no currency code | [optional] 
**points** | **Array&lt;Integer&gt;** | A list of all possible rounded price points at which the warranty plan could be offered. If your system does not allow dynamic pricing on the product page and in the cart, then create a seperate warranty plan SKU for each price point | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::PlanPrices.new(min: 99,
                                 max: 1099,
                                 points: [99,399,799,1099])
```


