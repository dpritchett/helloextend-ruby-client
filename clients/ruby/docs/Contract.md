# OpenapiClient::Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique Extend ID for the warranty contract. Use this for reference when recording returns / refunds. | [optional] [readonly] 
**created_at** | **Float** | The timestamp when the object was created (internal). | [optional] [readonly] 
**updated_at** | **Float** | The timestamp when the object was updated (internal). | [optional] [readonly] 
**transaction_id** | **String** | Your store&#39;s unique transaction identifier, which may be used to query for transactions in the future | 
**po_number** | **String** | An optional merchant generated purchase order number used for reconciliation | [optional] 
**transaction_total** | **Integer** | The total sale transaction amount, in the base unit (i.e. cents) with no currency code. This will help us more easily find transactions and associated warranty contracts during the claims process. | [optional] 
**customer** | [**Customer**](Customer.md) |  | 
**product** | [**ContractProduct**](ContractProduct.md) |  | 
**currency** | **String** | This is an ISO-4217 currency code. See &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217&#39;&gt;https://en.wikipedia.org/wiki/ISO_4217&lt;/a&gt; for more information | 
**transaction_date** | **Float** | The sale transaction date. The warranty contract term is based on this date. This is the epoch time as an integer. | 
**plan** | [**ContractPlan**](ContractPlan.md) |  | 
**status** | **String** | The current status of the contract. When requesting a refund, this will have a different value. | [optional] [readonly] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Contract.new(id: cc957cb3-3d5d-430b-90a2-9ec96ee4c3cf,
                                 created_at: 1557267465,
                                 updated_at: 1557267556,
                                 transaction_id: 99999999,
                                 po_number: ABC-123,
                                 transaction_total: 14999,
                                 customer: null,
                                 product: null,
                                 currency: USD,
                                 transaction_date: 1563388069,
                                 plan: null,
                                 status: null)
```


