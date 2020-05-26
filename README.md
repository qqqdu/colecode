## cole code  

funny code base on javascript parse

### example  

```javascript
let b = 3
let a = 2 + b
function hello() {}
```

#### step1  

let -> definition  0
b   -> letters  1
=   -> assignment 2
2   -> number 3  
+   -> operator 4

#### step2

definition  letters  assignment number

definition letters assignment number operator letters

#### step3

token(0, 'let', 0)
token(1, 'b', 0)
token(2, '=', 0)
token(3, '3', 0)
token(0, 'let', 1)
token(1, 'a', 1)
token(2, '=', 1)
token(3, '2', 1)
token(4, '+', 1)