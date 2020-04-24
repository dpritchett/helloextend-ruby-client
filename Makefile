ell: clean build-ruby-client install-gem ruby-product-demo

build-ruby-client:
	env OUTPUT_LANGUAGE=ruby ./shell/generate-bindings.sh

release-gem: clean build-ruby-client
	cd ./clients/ruby && rake clean clobber install release

install-gem:
	cd ./clients/ruby && \
	rake build install

clean:
	gem uninstall openapi_client
	rm -rf ./clients/ruby

ruby-product-demo:
	ruby ./test_client.rb
