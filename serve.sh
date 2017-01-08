#!/bin/bash

node_modules/.bin/webpack -p && node_modules/.bin/babel-node --presets 'react,es2015' src/server.js
