# Unexpected Return Value with Null Arguments

This repository demonstrates a common JavaScript bug involving unexpected behavior when null values are passed as arguments to a function.  The function `foo` returns 0 when either `a` or `b` is null, which might not be the desired behavior in all cases.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a more robust solution.

## Bug

The issue lies in the handling of null values within the function `foo`.  A better approach would be to either throw an error to indicate invalid input or handle null values in a more meaningful way (e.g., assigning default values).

## Solution

The `bugSolution.js` file presents a revised version of `foo` that addresses the bug.  It incorporates error handling, providing clarity and preventing unexpected results.