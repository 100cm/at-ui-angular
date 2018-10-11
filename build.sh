#!/usr/bin/env bash

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf publish
rm -rf __gen_components
cp -r src/app/components __gen_components


echo 'Compiling to es2015 via Angular compiler'
$(npm bin)/ngc -p tsconfig-build.json -t es2015 --outDir publish-es2015/src

echo 'Bundling to es module of es2015'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i publish-es2015/src/index.js -o publish-es2015/esm2015/at-ng.js

echo 'Compiling to es5 via Angular compiler'
$(npm bin)/ngc -p tsconfig-build.json -t es5 --outDir publish-es5/src

echo 'Bundling to es module of es5'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i publish-es5/src/index.js -o publish-es5/esm5/at-ng.js

echo 'Bundling to umd module of es5'
export ROLLUP_TARGET=umd
$(npm bin)/rollup -c rollup.config.js -f umd -i publish-es5/esm5/at-ng.js -o publish-es5/bundles/at-ng.umd.js

echo 'Bundling to minified umd module of es5'
export ROLLUP_TARGET=mumd
$(npm bin)/rollup -c rollup.config.js -f umd -i publish-es5/esm5/at-ng.js -o publish-es5/bundles/at-ng.umd.min.js


echo 'Unifying publish folder'
mv publish-es5 publish
mv publish-es2015/esm2015 publish/esm2015
rm -rf publish-es2015

echo 'Cleaning up temporary files'
rm -rf __gen_components
rm -rf publish/src/*.js
rm -rf publish/src/**/*.js

echo 'Normalizing entry files'
sed -e "s/from '.\//from '.\/src\//g" publish/src/index.d.ts > publish/at-ng.d.ts
sed -e "s/\":\".\//\":\".\/src\//g" publish/src/index.metadata.json > publish/at-ng.metadata.json
rm publish/src/index.d.ts publish/src/index.metadata.json



echo 'Copying package.json'
cp package.json publish/package.json

echo 'moving styles'
cp -r src/assets/stylesheets publish/assets

rm -rf __gen_components
