#!/bin/bash

result=$(pnpm react lint)

# Function to check for a specific lint error in results
check_lint_error() {
    local rule="$1"

    if [[ $result != *"$rule"* ]]; then
        echo "Failed to find $rule"
        return 1
    fi

    return 0
}

check_lint_error "@rushstack/typedef-var"

check_lint_error "@typescript-eslint/naming-convention"
check_lint_error "Interface name"
check_lint_error "Type Alias"

check_lint_error "react/display-name"
check_lint_error "react/jsx-no-target-blank"
check_lint_error "react-hooks/exhaustive-deps"

check_lint_error "jsx-a11y/alt-text"
check_lint_error "jsx-a11y/no-static-element-interactions"
