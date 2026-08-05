# React Accordion

A simple Accordion component built with **React** and **Tailwind CSS**. This project demonstrates both **Single Selection** and **Multiple Selection** accordion behavior using React's `useState` hook.

---

## Features

- 📌 Single Selection Mode
- 📌 Multiple Selection Mode
- 📌 Toggle between modes
- 📌 Responsive UI with Tailwind CSS
- 📌 Clean and beginner-friendly code

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)

---

## Project Structure

```
src/
│
├── components/
│   └── accordian/
│       ├── Index.jsx
│       └── data.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## State Variables

### 1. Single Selection State

```js
const [select, setSelected] = useState(null);
```

Stores the ID of the currently opened accordion.

Example:

```
select = 2
```

Only Question 2 is open.

---

### 2. Multiple Selection Mode

```js
const [Enablemultiselection, setEnablemultiselection] = useState(false);
```

Controls whether the accordion works in:

- Single Selection Mode (`false`)
- Multiple Selection Mode (`true`)

---

### 3. Multiple Selected Items

```js
const [multiple, setmultiple] = useState([]);
```

Stores all opened accordion IDs.

Example:

```
multiple = [1,3,5]
```

Questions 1, 3, and 5 are open simultaneously.

---

# Single Selection Logic

```js
function handlesingleSelection(currentid){
    setSelected(currentid === select ? null : currentid)
}
```

### How it works

If the clicked question is already open:

```
select = 2
click 2

↓

select = null
```

The accordion closes.

If another question is clicked:

```
select = 2
click 4

↓

select = 4
```

Question 2 closes and Question 4 opens.

Only one item can remain open.

---

# Multiple Selection Logic

```js
function handlemultipleselection(currentid){

    let cpymultiple = [...multiple]

    const findindex = cpymultiple.indexOf(currentid)

    if(findindex === -1){
        cpymultiple.push(currentid)
    }
    else{
        cpymultiple.splice(findindex,1)
    }

    setmultiple(cpymultiple)
}
```

---

## Step 1

Copy the array.

```js
let cpymultiple = [...multiple]
```

React state should never be modified directly.

Instead of

```js
multiple.push(id)
```

make a copy first.

---

## Step 2

Find whether the clicked ID already exists.

```js
const findindex = cpymultiple.indexOf(currentid)
```

Example

```
multiple = [2,4]
currentid = 4

findindex = 1
```

If it doesn't exist:

```
findindex = -1
```

---

## Step 3

If the ID isn't present

```js
cpymultiple.push(currentid)
```

Example

Before

```
[2,4]
```

After clicking Question 5

```
[2,4,5]
```

Question 5 opens.

---

## Step 4

If the ID already exists

```js
cpymultiple.splice(findindex,1)
```

Example

Before

```
[2,4,5]
```

Click Question 4 again

After

```
[2,5]
```

Question 4 closes.

---

## Step 5

Update React state

```js
setmultiple(cpymultiple)
```

React re-renders the component with the updated list.

---

# Rendering Logic

### Single Selection

```jsx
select === dataitem.id &&
<div>
    {dataitem.answer}
</div>
```

Only the selected question displays its answer.

---

### Multiple Selection

```jsx
multiple.indexOf(dataitem.id) !== -1 &&
<div>
    {dataitem.answer}
</div>
```

If the ID exists inside the array, React renders the answer.

---

# Button Logic

```jsx
onClick={() =>
setEnablemultiselection(!Enablemultiselection)
}
```

This switches between

```
Single Selection

↓

Multiple Selection

↓

Single Selection
```

every time the button is clicked.

---

# Click Flow

### Single Selection

```
Click Question 1

↓

select = 1

↓

Question 1 Opens

↓

Click Question 3

↓

select = 3

↓

Question 1 Closes
Question 3 Opens
```

---

### Multiple Selection

```
multiple = []

↓

Click Question 1

↓

[1]

↓

Click Question 3

↓

[1,3]

↓

Click Question 5

↓

[1,3,5]

↓

Click Question 3

↓

[1,5]
```

Each click toggles the question.

---

# Time Complexity

### Single Selection

```
O(1)
```

Only one state value changes.

### Multiple Selection

Finding an item

```
indexOf()
```

takes

```
O(n)
```

Adding

```
push()
```

takes

```
O(1)
```

Removing

```
splice()
```

takes

```
O(n)
```

Overall complexity:

```
O(n)
```

where **n** is the number of opened accordion items.

---

# Future Improvements

- Add smooth open/close animations.
- Rotate the "+" icon into "−" using CSS.
- Use `includes()` instead of `indexOf()` for better readability.
- Close all accordions with one button.
- Store opened items in `localStorage`.
- Add keyboard accessibility.

---

## What I Learned

- React `useState`
- Conditional Rendering
- Event Handling
- Ternary Operators
- Array Methods (`push`, `splice`, `indexOf`)
- State Immutability
- Building reusable React components
- Difference between Single and Multiple Selection

---

## Output

- Single Selection: Only one accordion remains open.
- Multiple Selection: Multiple accordions can stay open simultaneously.