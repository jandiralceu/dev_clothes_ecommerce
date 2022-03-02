#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"

yarn eslint --ext ts,js,tsx,jsx --fix ./src