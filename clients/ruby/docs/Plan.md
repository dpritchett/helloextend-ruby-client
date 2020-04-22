# OpenapiClient::Plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for a warranty Plan | [optional] 
**details** | [**PlanDetails**](PlanDetails.md) |  | [optional] 
**prices** | [**PlanPrices**](PlanPrices.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Plan.new(id: AmazingAppliancePlan,
                                 details: null,
                                 prices: null)
```


