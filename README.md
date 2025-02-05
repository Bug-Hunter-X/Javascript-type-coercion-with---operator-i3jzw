# Javascript Type Coercion with + Operator
This repository demonstrates a common error in Javascript related to type coercion when using the + operator.  The + operator in Javascript will perform string concatenation if either operand is a string, leading to unexpected results when working with numbers.  This example shows how to avoid this issue and ensures correct numeric addition.

## Bug
The `bug.js` file contains code that demonstrates the unexpected behavior of the + operator in Javascript when used with mixed number and string types.  The program outputs unexpected string concatenations rather than numeric addition.

## Solution
The `bugSolution.js` file demonstrates how to explicitly convert strings to numbers before performing addition to avoid the unexpected behavior.