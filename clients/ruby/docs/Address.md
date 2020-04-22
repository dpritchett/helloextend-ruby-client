# OpenapiClient::Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** |  | 
**address2** | **String** |  | [optional] 
**city** | **String** |  | [optional] 
**country_code** | **String** | This is an ISO 3166 formatted country code. See &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes for examples&#39;&gt;https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes for examples&lt;/a&gt; for more information | [optional] 
**postal_code** | **String** |  | [optional] 
**province_code** | **String** | This is an ISO 3166-2 formatted region. See &lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-2&#39;&gt;https://en.wikipedia.org/wiki/ISO_3166-2&lt;/a&gt; for more information | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Address.new(address1: 535 Mission Street,
                                 address2: 11th Floor,
                                 city: San Francisco,
                                 country_code: USA,
                                 postal_code: 94526,
                                 province_code: CA)
```


