all: clean build-ruby-client install-gem ruby-product-demo

build-ruby-client:
	env OUTPUT_LANGUAGE=ruby ./shell/generate-bindings.sh

install-gem:
	cd ./clients/ruby && \
	gem build openapi_client.gemspec && \
	gem install ./openapi_client-1.0.0.gem

clean:
	gem uninstall openapi_client
	rm -rf ./clients/ruby

ruby-product-demo:
	ruby ./test_client.rb
