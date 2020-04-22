# OpenapiClient::Customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **String** |  | [optional] 
**email** | **String** | While you can create a contract without passing an email address, we &lt;b&gt;strongly&lt;/b&gt; recommend that you require and include the customer’s email address for every transaction including an extended warranty purchase.  Extend needs to be able to email the customer their warranty contract information and terms, and to be able to communicate with the customer throughout the life of the protection plan. | 
**name** | **String** |  | 
**address** | [**Address**](Address.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Customer.new(phone: 123-456-7890,
                                 email: BobRoss@gmail.com,
                                 name: Bob Ross,
                                 address: null)
```


