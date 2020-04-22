# OpenapiClient::Amount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | This is an ISO-4217 currency code. See &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217&#39;&gt;https://en.wikipedia.org/wiki/ISO_4217&lt;/a&gt; for more information | [optional] 
**amount** | **Float** | Amount, in cents, eg $19.99 would be 1999 | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Amount.new(currency_code: USD,
                                 amount: 1999)
```


