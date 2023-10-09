
<h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answere </b></summary>
<p>

Answer: A

<i>This output represents an empty JavaScript object, which is enclosed in curly braces {}. The code successfully assigns an empty object to the greeting variable and then displays it in the console using console.log()</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

Answer: c

<i>To fix this and ensure that a and b are treated as numbers, you should explicitly convert b to a number before performing the addition. You can use the parseInt or parseFloat function to achieve this.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

Answer: A

<i>The critical point to understand is that when the info.favoriteFood property is assigned the value "🍝", it doesn't affect the food array in any way. The food array remains unchanged, and the elements in the food array are not modified. Therefore, the correct answer is option A, which represents the original contents of the food array.
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

 Answer: B

<i>In the code you've provided, you've defined a function sayHi(name) that takes one parameter name and returns a greeting string. However, when you call the sayHi() function in console.log(sayHi());, you do not provide an argument for the name parameter. This will result in an error because the function expects a name argument.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

 Answer: C

<i>The output is 3 because there are three truthy values (1, 2, and 3) in the nums array, and the count variable has been incremented for each of them.</i>

</p>
</details>
