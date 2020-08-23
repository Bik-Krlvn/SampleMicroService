#! /bin/bash

# Generate Typescript for GRPC protobuf

SRC_DIR="./libs/proto-schema/src/proto/*.proto"
DEST_DIR="./libs/proto-schema/src"

protoc --plugin=node_modules/ts-proto/protoc-gen-ts_proto --ts_proto_opt=outputEncodeMethods=true,useEnumNames=false,asClass=false,outputJsonMethods=true,context=true,outputNestJs=true,outputClientImpl=false --ts_proto_out=${DEST_DIR} ${SRC_DIR}
