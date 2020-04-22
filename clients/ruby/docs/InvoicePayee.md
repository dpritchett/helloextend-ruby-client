# OpenapiClient::InvoicePayee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**email** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InvoicePayee.new(name: Extend, Inc,
                                 address: null,
                                 email: billing@helloextend.com,
                                 phone: 555-555-5555)
```


