echo 'moving styles'
cp -r src/assets/stylesheets publish/assets
cp -r src/assets publish/styles
cp schematics/ng-add/schema.json publish/schematics/ng-add/schema.json
cp schematics/collection.json publish/schematics/collection.json
