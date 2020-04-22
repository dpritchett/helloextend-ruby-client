# OpenapiClient::Invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The invoice id, which is exactly the same as the corresponding contract id. | [optional] [readonly] 
**details** | [**InvoiceDetails**](InvoiceDetails.md) |  | [optional] 
**payee** | [**InvoicePayee**](InvoicePayee.md) |  | [optional] 
**payer** | [**InvoicePayer**](InvoicePayer.md) |  | [optional] 
**items** | [**Array&lt;InvoiceItems&gt;**](InvoiceItems.md) |  | [optional] 
**total_amount_due** | [**Amount**](Amount.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Invoice.new(id: cc957cb3-3d5d-430b-90a2-9ec96ee4c3cf,
                                 details: null,
                                 payee: null,
                                 payer: null,
                                 items: null,
                                 total_amount_due: null)
```


