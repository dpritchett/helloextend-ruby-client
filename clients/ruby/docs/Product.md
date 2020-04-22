# OpenapiClient::Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **String** | Product Brand, Manufacturer or Vendor | [optional] 
**category** | **String** | Product category. Can be any value and may be used by Extend to map the product to warranty plans. | [optional] 
**created_at** | **Float** | The timestamp when the object was created (internal) | [optional] [readonly] 
**description** | **String** | Product description | [optional] 
**enabled** | **Boolean** | Enable/disable selling of warranties on this product | [optional] 
**image_url** | **String** | A url pointing to the primary image for the product | [optional] 
**mfr_warranty** | [**ProductMfrWarranty**](ProductMfrWarranty.md) |  | [optional] 
**price** | **Float** | The base retail price of the product (in cents) | 
**title** | **String** | Product name | 
**updated_at** | **Float** | The timestamp when the object was last updated (internal) | [optional] [readonly] 
**status** | **String** |  | [optional] [readonly] 
**reference_id** | **String** | This is the unique identifier that identifies the product. This can be a product SKU, or variant id.  | 
**parent_reference_id** | **String** | This is the id of the parent product, if there is one. This allows nesting of a single parent product with multiple variants (such as multiple color options for the same product) | [optional] 
**plans** | **Array&lt;String&gt;** | A list of all extended warranty plans for which the product is eligible, listed by planId.  The Offers SDK or Offers API will provide more detail about which plan options to display for a given product at a given time. | [optional] 
**identifiers** | [**ProductIdentifiers**](ProductIdentifiers.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Product.new(brand: ACME,
                                 category: sports,
                                 created_at: 1557267465,
                                 description: One Dozen. Tickle your friends! Suprise your opponent!,
                                 enabled: true,
                                 image_url: https://bit.ly/2VN88Jf,
                                 mfr_warranty: null,
                                 price: 2599,
                                 title: Explosive Tennis Balls,
                                 updated_at: 1557267465,
                                 status: new,
                                 reference_id: 2324f800-7575-4c65-bd2c-588c89e8ab7f,
                                 parent_reference_id: 2324f800-7575-4c65-bd2c-588c89e8ab7f,
                                 plans: null,
                                 identifiers: null)
```


