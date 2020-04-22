# Load the gem
require 'openapi_client'
require 'pry'

# Setup authorization
OpenapiClient.configure do |config|
  # Configure API key authorization: ExtendAccessToken
  config.api_key['X-Extend-Access-Token'] = ENV.fetch('EXTEND_API_KEY') #'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['X-Extend-Access-Token'] = 'Bearer'
end

@api_instance = OpenapiClient::ProductsApi.new
@store_id = ENV.fetch('EXTEND_STORE_ID')

def upsert_product(title="Product title", reference_id=rand(1000..9999).to_s, brand="ACME Brand")
  product = OpenapiClient::Product.new( brand: brand)
  product.title = title
  product.reference_id = reference_id

  result = @api_instance.stores_store_id_products_post(@store_id, product: product, upsert: true)
end

begin
  result = upsert_product
  puts result
  pp result
rescue OpenapiClient::ApiError => e
  puts "Exception when creating a new product via API: #{e}"
end