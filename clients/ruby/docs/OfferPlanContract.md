# OpenapiClient::OfferPlanContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_starts** | **String** | Describes when the contract term begins, relative to the manufacturer’s warranty length.  For example, “immediate” means coverage starts immediately on the purchase date, and “after” means coverage starts after the manufacturer’s warranty has expired | [optional] 
**coverage_includes** | **String** | Possible values include “base”, which means the extended warranty is a base plan covering mechanical and electrical failures through normal use, or “adh”, which means the plan includes coverage for accidental damage (i.e. “Accidental Damage in Handling”) | [optional] 
**service_type** | **String** | This is the claims resolution service the plan includes.  Responses include “replacement” (the damaged item is replaced by a new or refurbished equivalent), “repair_depot” (the customer mails the damaged item to a repair facility), or “repair_onsite” (a repair technician goes out to the customer’s home to repair the item) | [optional] 
**replacement_type** | **String** | Indicates whether the damaged item will be replaced by a “new” or “refurbished” item | [optional] 
**deductible** | **Float** | The amount of the deductible charged to the customer during a claim, if there is one.  For most Extend protection plans, there is no deductible | [optional] 
**term_length** | **Float** | The length of the extended warranty coverage, in months | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::OfferPlanContract.new(coverage_starts: immediate,
                                 coverage_includes: adh,
                                 service_type: replace,
                                 replacement_type: new,
                                 deductible: 0,
                                 term_length: 36)
```


