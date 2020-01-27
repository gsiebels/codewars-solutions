# Even Or Odd

#### Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

## Details 
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


## Starting code
```js
function even_or_odd(number) {
  // ...
}
```

## Solution 🤩

#### What is the problem?

For this function, we have to write a logic that verifies if the number is Even of Odd.
We will use the ```if``` statement and Modulus (Remainder) operator just like this:

``` js
function even_or_odd(number) {
  if ( number % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}
```
We can also use Conditional (ternary) operator that replace the if statement but work the same way.

```js
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
```

This function can also be written on one-liner code using the arrow function and the Conditional operator that we've learned above.

```js
const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd'
```



## Documantation 📖

 - Explains the ```if``` statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return


 - Explains Modulus: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

 - Explains Conditional (ternary) operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

  - Explains Arrow Function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
