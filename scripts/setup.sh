#!/bin/bash
# shellcheck disable=SC2207
PROJECTS=( $(jq -r '.projects[].root' ./nest-cli.json) )

echo "Service and Library build system started"

for VAR in "${PROJECTS[@]}" ; do
  echo "Building for" "${VAR:5}"
  npx nest build "${VAR:5}"
done

echo "Service and Library build system completed"
echo "Copying proto files..."
cp -r ./libs/proto-schema/src/proto/ ./dist/.
echo "Copying proto files complete"
