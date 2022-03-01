#!/usr/bin/env bash
echo "┏━━━ 🎯 WATCH TEST: $(pwd) ━━━━━━━━━━━━━━━━━━━"

yarn jest --bail --passWithNoTests --no-cache --runInBand --watch