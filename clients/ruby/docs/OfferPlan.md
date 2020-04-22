# OpenapiClient::OfferPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for a warranty Plan | [optional] 
**price** | **Float** | The offer price, in base units | [optional] 
**contract** | [**OfferPlanContract**](OfferPlanContract.md) |  | [optional] 
**url** | **String** | A link to the extended warranty plan terms and information.  Any offer display must include a “Learn More” or “See Plan Details” call-to-action that enables the customer to see exactly what the warranty plan covers | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::OfferPlan.new(id: AmazingAppliancePlan,
                                 price: 199,
                                 contract: null,
                                 url: null)
```


