## Vanilla Conditional Statements and Loops

----------------------------------------------------------

### if/else/elseif:
The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

#### Syntax:
The **if** statement specifies a block of code to be executed if a condition is true:
```javascript
if (condition) {
  // block of code to be executed if the condition is true
}
```
The **else** statement specifies a block of code to be executed if the condition is false:
```javascript
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```
The **else if** statement specifies a new condition if the first condition is false:
```javascript
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```

----------------------------------------------------------

### Inline if:
The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is truthy followed by a colon (`:`), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the `if` statement.

#### Syntax:
```javascript
condition ? true : false;
```

Example1:
```javascript
let a = 2;
let b = 3;    
let c = ((a < b) ? 'Condition is true' : 'Condition is false');
console.log(c); // output is 'Condition is true'
```

Example2:
```javascript
let a = 2;  
console.log(((a === 3) ? 'Condition is true' : 'Condition is false')); // output is 'Condition is false'
```
----------------------------------------------------------

### Switch Statement
The **switch** statement is used to perform different actions based on different conditions.

#### Syntax:
```javascript
switch(expression) {
  case x:
    // block of code to be executed if expression === x
    break;
  case y:
    // block of code to be executed if expression === y
    break;
  default:
    // block of code to be executed if none of the above go through
    break;
}
```

Example1:
```javascript
var number = 5;
switch(expression) {
  case 1:
    // block of code will NOT be executed
    break;
  case 5:
    // block of code WILL be executed <--
    break;
  case 9:
   // block of code will NOT be executed
    break;
  default:
    // block of code will NOT be executed
    break;
}
```

Example2:
```javascript
var word = "Test";
switch(expression) {
  case "Test123":
    // block of code will NOT be executed
    break;
  case "Something":
    // block of code will NOT be executed
    break;
  case "Test":
    // block of code WILL be executed <--
    break;
  default:
    // block of code will NOT be executed
    break;
}
```

Example3:
```javascript
var word = "Something";
switch(expression) {
  case "Test":
    // block of code will NOT be executed
    break;
  case 1234:
    // block of code will NOT be executed
    break;
  default:
    // block of code WILL be executed <--
    break;
}
```
----------------------------------------------------------

### For loop:
Loops can execute a block of code a number of times.

#### Syntax:
```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```
**Statement 1** is executed (one time) before the execution of the code block.

**Statement 2** defines the condition for executing the code block.

**Statement 3** is executed (every time) after the code block has been executed.

Example:
```javascript
for (let i = 0; i < 5; i++) {
  // code block will be executed 5 times
}
```

----------------------------------------------------------

### For..in loop:
A `for..in` loop iterates over an `Array` or an `Object`
In the example shown below `i` value is equal to the loops iteration

#### Syntax/Example:

```javascript
let someArray = [4,5,6,0,9];
for(let i in someArray){
  console.log(i);
  // code will be executed 5 times and the out put is:
  // 0 1 2 3 4
}
```
----------------------------------------------------------

### For..of loop:
A `for..of` loop iterates over an `Array` or an `Object`
In the example shown below `i` value is equal to the objects/arrays value

#### Syntax/Example:

```javascript
let someArray = [4,5,6,0,9];
for(let i of someArray){
  console.log(i);
  // code will be executed 5 times and the out put is:
  // 4 5 6 0 9
}
```

----------------------------------------------------------

### While loop:

The while loop loops through a block of code as long as a specified condition is true.

#### Syntax:

```javascript
while (condition) {
  // code block to be executed
}
```

Example:
```javascript
let i = 0;
while (i < 10) {
  // code block will be executed 10 times
  i++;
}
```
----------------------------------------------------------

### Do..while loop:

The while loop loops through a block of code as long as a specified condition is true.

#### Syntax:

```javascript
do{
// code block to be executed
} while (condition);
```

Example:
```javascript
let i = 0;
do{
  // code block will be executed 10 times
  i++;
} while (i < 10);
```