=begin
#Extend API Reference

## Introduction Welcome to the Extend API Documentation! Our goal is to make your integration as clear and easy as possible, so if you have feedback or suggestions for our API or reference docs, [please let us know](mailto:devs@helloextend.com).    If you are implementing the API for the first time, please use the latest \"2019-08-01\" API version. If you have already implemented the API and haven't specified a version, you are on the \"Default\" API version.   #### You can get up and running with Extend with just 5 simple steps:  *   Create an account with Extend, and get an access token from your Extend merchant portal  *   Sync your store's products to Extend *   Get the relevant Extend warranty SKUs and add them to your store  *   Add the JS SDK snippets to your store's website, which will enable warranty offers to be displayed in your store  *   Record warranty purchases with Extend so we can create a new contract and deliver it to the customer, or record warranty returns / refunds so we can cancel the contract and account for the refunded amount  <div class='wrapper tip'><h2>Pro Tip! Keep your store's products up to date</h2><p>To make sure you are selling warranty plans on all eligible products (and not selling them on ineligible ones), it is best to keep your store's products in sync with Extend. If you update your products infrequently, it might be easiest to manually upload or edit products in your merchant portal. If you do update frequently, though, consider integrating with our Products API resource.</p><p>Need help? <a href='mailto:devs@helloextend.com'>Contact us!</a> We love to help!</p></div>

The version of the OpenAPI document: Default

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::ProductsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'ProductsApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::ProductsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ProductsApi' do
    it 'should create an instance of ProductsApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::ProductsApi)
    end
  end

  # unit tests for stores_store_id_products_post
  # Create a product
  # @param store_id Unique identifier for a Store on Extend
  # @param [Hash] opts the optional parameters
  # @option opts [Boolean] :batch Use the value true if passing a batch of products.
  # @option opts [Boolean] :upsert If true, will update products that already exist.
  # @option opts [Product] :product 
  # @return [Product]
  describe 'stores_store_id_products_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for stores_store_id_products_product_id_delete
  # Delete a product
  # @param store_id Unique identifier for a Store on Extend
  # @param product_id The unique referenceId passed to extend when creating a product.
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'stores_store_id_products_product_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for stores_store_id_products_product_id_get
  # Get a product
  # Returns information about a product
  # @param store_id Unique identifier for a Store on Extend
  # @param product_id The unique referenceId passed to extend when creating a product.
  # @param [Hash] opts the optional parameters
  # @return [Product]
  describe 'stores_store_id_products_product_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for stores_store_id_products_product_id_put
  # Update a product
  # When you update a product, you may not update the referenceId.
  # @param store_id Unique identifier for a Store on Extend
  # @param product_id The unique referenceId passed to extend when creating a product.
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [Product]
  describe 'stores_store_id_products_product_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
