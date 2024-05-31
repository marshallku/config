#!/bin/bash

result=$(pnpm react lint)

source ./__tests__/util.sh "$result"

check_lint_error "@typescript-eslint/naming-convention"
check_lint_error "Interface name"
check_lint_error "Type Alias"

check_lint_error "react/display-name"
check_lint_error "react/jsx-no-target-blank"
check_lint_error "react-hooks/exhaustive-deps"

check_lint_error "jsx-a11y/alt-text"
check_lint_error "jsx-a11y/no-static-element-interactions"
