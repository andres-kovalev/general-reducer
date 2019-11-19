#/bin/sh

set -e

node ./tools/generate-readmes.js
node ./tools/jsdoc-to-markdown.js ./src/actions/README.hbs --actions "./src/actions/*/index.js" > ./src/actions/README.md
node ./tools/jsdoc-to-markdown.js ./README.hbs --actions "./src/actions/*/index.js" > ./README.md
node ./tools/jsdoc-to-markdown.js ./SUMMARY.hbs --actions "./src/actions/*/index.js" > ./SUMMARY.md
