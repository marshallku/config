#!/bin/bash

result="$1"

check_lint_error() {
    local rule="$1"

    if [[ $result != *"$rule"* ]]; then
        echo "Failed to find $rule"
        return 1
    fi

    return 0
}

check_error_not_included() {
    local rule="$1"

    if [[ $result == *"$rule"* ]]; then
        echo "Found $rule"
        return 1
    fi

    return 0
}

set -e
