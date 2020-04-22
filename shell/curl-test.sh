#!/bin/bash

set -eo pipefail
set -x

function checkAuth {
curl -X GET \
  "https://${EXTEND_API_DOMAIN}/stores/${EXTEND_STORE_ID}/products" \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H "X-Extend-Access-Token: ${EXTEND_API_KEY}"
}

#TEST_URL="stores/${EXTEND_STORE_ID}/products"
TEST_URL="stores/${EXTEND_STORE_ID}/" # exists!

function findSwag {
  curl -X GET \
    "https://${EXTEND_API_DOMAIN}/${TEST_URL}" \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H "X-Extend-Access-Token: ${EXTEND_API_KEY}"
}

# checkAuth
findSwag
