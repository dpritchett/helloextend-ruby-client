=begin
#Extend API Reference

## Introduction Welcome to the Extend API Documentation! Our goal is to make your integration as clear and easy as possible, so if you have feedback or suggestions for our API or reference docs, [please let us know](mailto:devs@helloextend.com).    If you are implementing the API for the first time, please use the latest \"2019-08-01\" API version. If you have already implemented the API and haven't specified a version, you are on the \"Default\" API version.   #### You can get up and running with Extend with just 5 simple steps:  *   Create an account with Extend, and get an access token from your Extend merchant portal  *   Sync your store's products to Extend *   Get the relevant Extend warranty SKUs and add them to your store  *   Add the JS SDK snippets to your store's website, which will enable warranty offers to be displayed in your store  *   Record warranty purchases with Extend so we can create a new contract and deliver it to the customer, or record warranty returns / refunds so we can cancel the contract and account for the refunded amount  <div class='wrapper tip'><h2>Pro Tip! Keep your store's products up to date</h2><p>To make sure you are selling warranty plans on all eligible products (and not selling them on ineligible ones), it is best to keep your store's products in sync with Extend. If you update your products infrequently, it might be easiest to manually upload or edit products in your merchant portal. If you do update frequently, though, consider integrating with our Products API resource.</p><p>Need help? <a href='mailto:devs@helloextend.com'>Contact us!</a> We love to help!</p></div>

The version of the OpenAPI document: Default

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for OpenapiClient::Contract
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'Contract' do
  before do
    # run before each test
    @instance = OpenapiClient::Contract.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of Contract' do
    it 'should create an instance of Contract' do
      expect(@instance).to be_instance_of(OpenapiClient::Contract)
    end
  end
  describe 'test attribute "id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "created_at"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "updated_at"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "transaction_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "po_number"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "transaction_total"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "customer"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "product"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "currency"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "transaction_date"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "plan"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "status"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('String', ["live", "refund_requested", "refund_accepted", "refund_paid", "refund_denied", "expired"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.status = value }.not_to raise_error
      # end
    end
  end

end
