# Big O Notation

Big O notation is the language and metric we use use to describe the efficiency of algorithms.

## Big O Notation Values

Below are some of the values of Big O notation listed according their growth rate during an algorithm runtime.

- O(1) -> `Constant`
- O(log n) -> `Logarithmic`
- O(n) -> `Linear`
- O(n log n) -> `Logarithmic`
- O(n^2) -> `Quadratic`
- O(2^n) -> `Exponential`
- O(n^n) -> `??`
- O(n!) -> `Factorial`

From the above values, when more inputs are passed into 
algorithm or when an algorithm scales, the value `O(1)` will perform better than `O(log n)`

## Applying Big O values to real world code

There are real world examples of how BigO values can be used with real world code in the file `bigO.js`

## Explanation of Big O values in terms of code

- O(1): Operations(addition,division,multiplication, subtraction, etc), if statements will have a value of O(1)

- O(n): Loops will have a value of O(n)

- O(n^2): Happens when we have a `nested for loop`. That is, a for loop within another for loop 

- O(log n): When there is a division going on where n is divided by 2. O(log n) value is often used.


## Big O Rules to follow:

1. **Different steps get added**: If you have two different steps in your in your algorithm, you add up those steps.

2. **Drop constant**: You donot describe things of O(2n), O(3n), etc. This is because, we're just looking for how things scale. Is it roughly linear relation? Or is it a quadrant, exponential, logarithmic, etc.

3. **Different inputs => Different variables**: If you have different inputs, you are usually going to use different varialbes to represent them.

4. **Drop non-dorminant terms**