# OpenapiClient::InvoiceItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | [optional] 
**transaction_date** | **DateTime** | A Date-Time stamp in ISO 8601 format (UTC) | [optional] [readonly] 
**retail_price** | [**Amount**](Amount.md) |  | [optional] 
**unit_price** | [**Amount**](Amount.md) |  | [optional] 
**line_total** | [**Amount**](Amount.md) |  | [optional] 
**quantity** | **Float** | Number of contracts sold (always 1) | [optional] 
**discount** | [**InvoiceDiscount**](InvoiceDiscount.md) |  | [optional] 
**metadata** | [**InvoiceMetadata**](InvoiceMetadata.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InvoiceItems.new(title: Extend Protection Plan - AV Receiver,
                                 transaction_date: 2019-07-09T23:56Z,
                                 retail_price: null,
                                 unit_price: null,
                                 line_total: null,
                                 quantity: 1,
                                 discount: null,
                                 metadata: null)
```


