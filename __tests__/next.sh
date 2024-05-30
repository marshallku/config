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

check_lint_error "react-refresh/only-export-components"

check_lint_error "jsx-a11y/alt-text"
