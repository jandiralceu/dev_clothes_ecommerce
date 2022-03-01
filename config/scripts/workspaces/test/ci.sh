#!/usr/bin/env bash
echo "┏━━━ 🎯 CI TEST: $(pwd) ━━━━━━━━━━━━━━━━━━━"

yarn jest --bail --passWithNoTests --no-cache --runInBand --coverage