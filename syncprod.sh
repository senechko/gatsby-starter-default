#!/usr/bin/env bash
# Undefined variables are errors.
set -euo pipefail

errcho ()
{
    echo "$@" 1>&2
}

errxit ()
{
  errcho "$@"
  exit 1
}

BUCKET='westegg-sites'
FOLDER='westegg-frontend'
LIVE='live'
GATSBY_ASSET_PREFIX="https://${BUCKET}.sfo2.digitaloceanspaces.com/${FOLDER}/${LIVE}"
gatsby build --prefix-paths
cd public
s3cmd sync --acl-public --guess-mime-type . s3://${BUCKET}/${FOLDER}/${LIVE}/
