ell: clean build-ruby-client install-gem ruby-product-demo

build-ruby-client:
	env OUTPUT_LANGUAGE=ruby ./shell/generate-bindings.sh

release-gem: clean build-ruby-client
	cd ./clients/ruby && rake clean clobber install release

install-gem:
	cd ./clients/ruby && \
	gem build openapi_client.gemspec && \
	gem install ./openapi_client-1.0.0.gem

clean:
	gem uninstall openapi_client
	rm -rf ./clients/ruby

ruby-product-demo:
	ruby ./test_client.rb
