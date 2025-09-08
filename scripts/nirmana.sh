#!/usr/bin/env bash

set -e

if [[ "$OSTYPE" == "darwin"* ]]; then
	realpath() { [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"; }
	ROOT=$(dirname "$(dirname "$(realpath "$0")")")
else
	ROOT=$(dirname "$(dirname "$(readlink -f $0)")")
fi

function nirmana() {
	cd "$ROOT"

	if [[ "$OSTYPE" == "darwin"* ]]; then
		NAME=`node -p "require('./product.json').nameLong"`
		NIRMANA="./dist-electron/main.js"
	else
		NAME=`node -p "require('./product.json').applicationName"`
		NIRMANA="dist-electron/main.js"
	fi

	# Get electron, compile, built-in extensions
	if [[ -z "${NIRMANA_SKIP_PRELAUNCH}" ]]; then
		node build/npm/postinstall.js
	fi

	# Configuration
	export NODE_ENV=development
	export NIRMANA_DEV=1
	export NIRMANA_CLI=1
	export ELECTRON_ENABLE_STACK_DUMPING=1
	export ELECTRON_ENABLE_LOGGING=1

	# Launch Nirmana
	exec electron "$NIRMANA" . "$@"
}

nirmana "$@"

exit $?
