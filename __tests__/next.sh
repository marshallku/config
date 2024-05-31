#!/bin/bash

result=$(pnpm next lint)

source ./__tests__/util.sh "$result"

check_lint_error "react-refresh/only-export-components"

check_lint_error "jsx-a11y/alt-text"
