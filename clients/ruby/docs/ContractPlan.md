# OpenapiClient::ContractPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchase_price** | **Float** | Price paid for the plan at time of sale. Please ensure this is the same price that was listed on the offer or this request might be rejected. | 
**plan_id** | **String** | The plan id being purchased. This is provided in the sdk as well as being visible per product once the product has been approved as warrantable. | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ContractPlan.new(purchase_price: 499,
                                 plan_id: 10001-misc-elec-adh-replace-1y)
```


