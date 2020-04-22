# OpenapiClient::PlanDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the warranty plan. Use this in the product title for the warranty plan SKU(s) in your store | [optional] 
**image_url** | **String** | The imageUrl for the warranty plan. Use this as the product image for the warranty plan SKU(s) in your store | [optional] 
**term_length** | **Float** | The length of the extended warranty coverage, in months | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::PlanDetails.new(title: An amazing Appliance Plan,
                                 image_url: null,
                                 term_length: 36)
```


