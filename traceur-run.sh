#!/bin/bash
traceur --script $1 --out foo.js --experimental && node -e "require('traceur/bin/traceur-runtime');require('./foo')"