# Understanding Data Structures
## How to Organize and Store Data Effectively

---

## What Are Data Structures?

### Definition

**Data structures** are ways of organizing and storing data in a computer so that it can be accessed and used efficiently.

### Why They Matter

**Different problems need different ways to store data:**
- Some need ordered lists
- Some need key-value pairs
- Some need unique values
- Some need fast access

**Choosing the right structure makes your code:**
- Easier to write
- More efficient
- Easier to understand
- More maintainable

### Real-World Analogy

Think of data structures like different types of containers:

- **Array/List** = A numbered shelf (items in order, access by position)
- **Object/Dictionary** = A filing cabinet with labeled folders (access by name)
- **Set** = A collection of unique items (no duplicates)
- **Stack** = A stack of plates (last in, first out)
- **Queue** = A line of people (first in, first out)

---

## Data Structure 1: Array/List

### What Is an Array?

An **array** (also called a **list** in some languages) is an ordered collection of items stored in sequence.

### Key Characteristics

1. **Ordered** - Items have a position (index)
2. **Indexed** - Access items by their position (0, 1, 2, ...)
3. **Mutable** - Can add, remove, or change items
4. **Can contain duplicates** - Same value can appear multiple times

### Visual Representation

```
Array: [10, 20, 30, 40, 50]
        │   │   │   │   │
Index:  0   1   2   3   4
```

### When to Use

- You have multiple items of the same type
- Order matters
- You need to access items by position
- You need to iterate through items

### Common Operations

#### 1. Create an Array

**JavaScript:**
```javascript
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
let empty = [];
```

**Python:**
```python
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
empty = []
```

**Java:**
```java
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};
int[] empty = new int[0];
```

#### 2. Access an Element

**By index (position):**

**JavaScript:**
```javascript
let numbers = [10, 20, 30];
console.log(numbers[0]);  // 10 (first item, index 0)
console.log(numbers[1]);  // 20 (second item, index 1)
console.log(numbers[2]);  // 30 (third item, index 2)
```

**Python:**
```python
numbers = [10, 20, 30]
print(numbers[0])  # 10
print(numbers[1])  # 20
print(numbers[2])  # 30
```

**Important:** Arrays start at index 0, not 1!

#### 3. Get Length

**JavaScript:**
```javascript
let numbers = [10, 20, 30];
console.log(numbers.length);  // 3
```

**Python:**
```python
numbers = [10, 20, 30]
print(len(numbers))  # 3
```

#### 4. Add an Element

**JavaScript:**
```javascript
let numbers = [10, 20];
numbers.push(30);  // Add to end
console.log(numbers);  // [10, 20, 30]
```

**Python:**
```python
numbers = [10, 20]
numbers.append(30)  # Add to end
print(numbers)  # [10, 20, 30]
```

#### 5. Remove an Element

**JavaScript:**
```javascript
let numbers = [10, 20, 30];
numbers.pop();  // Remove from end
console.log(numbers);  // [10, 20]
```

**Python:**
```python
numbers = [10, 20, 30]
numbers.pop()  # Remove from end
print(numbers)  # [10, 20]
```

#### 6. Loop Through Array

**JavaScript:**
```javascript
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Python:**
```python
numbers = [10, 20, 30]
for number in numbers:
    print(number)
```

### Example: Using Arrays

**Problem:** Store a list of student grades

**Solution:**
```javascript
let grades = [85, 92, 78, 96, 88];

// Calculate average
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let average = sum / grades.length;
console.log("Average:", average);
```

---

## Data Structure 2: Object/Dictionary/Map

### What Is an Object?

An **object** (also called **dictionary** in Python, **map** in some languages) is a collection of key-value pairs. Each value is associated with a unique key.

### Key Characteristics

1. **Key-Value Pairs** - Data stored as pairs (key: value)
2. **Unordered** (in some languages) - No guaranteed order
3. **Unique Keys** - Each key appears only once
4. **Fast Lookup** - Access values by key name

### Visual Representation

```
Object: {
    name: "Alice",
    age: 30,
    city: "New York"
}

Keys:   name, age, city
Values: "Alice", 30, "New York"
```

### When to Use

- You have related data that belongs together
- You need to access data by name (not position)
- Data has multiple properties
- You need to group related information

### Common Operations

#### 1. Create an Object

**JavaScript:**
```javascript
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
```

**Python:**
```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
```

**Java:**
```java
// Using Map
Map<String, Object> person = new HashMap<>();
person.put("name", "Alice");
person.put("age", 30);
person.put("city", "New York");
```

#### 2. Access a Value

**By key:**

**JavaScript:**
```javascript
let person = {name: "Alice", age: 30};
console.log(person.name);      // "Alice" (dot notation)
console.log(person["age"]);    // 30 (bracket notation)
```

**Python:**
```python
person = {"name": "Alice", "age": 30}
print(person["name"])  # "Alice"
print(person.get("age"))  # 30
```

#### 3. Add/Update a Property

**JavaScript:**
```javascript
let person = {name: "Alice"};
person.age = 30;           // Add new property
person.name = "Bob";       // Update existing property
```

**Python:**
```python
person = {"name": "Alice"}
person["age"] = 30  # Add new property
person["name"] = "Bob"  # Update existing property
```

#### 4. Check if Key Exists

**JavaScript:**
```javascript
let person = {name: "Alice", age: 30};
console.log("name" in person);  // true
console.log("email" in person); // false
```

**Python:**
```python
person = {"name": "Alice", "age": 30}
print("name" in person)  # True
print("email" in person)  # False
```

#### 5. Loop Through Object

**JavaScript:**
```javascript
let person = {name: "Alice", age: 30, city: "NYC"};
for (let key in person) {
    console.log(key + ":", person[key]);
}
```

**Python:**
```python
person = {"name": "Alice", "age": 30, "city": "NYC"}
for key, value in person.items():
    print(key + ":", value)
```

### Example: Using Objects

**Problem:** Store information about a sale

**Solution:**
```javascript
let sale = {
    item: "apple",
    price: 1.00,
    quantity: 10
};

// Calculate total
let total = sale.price * sale.quantity;
console.log("Total:", total);  // 10
```

---

## Data Structure 3: Array of Objects

### What Is It?

An **array of objects** combines arrays and objects - it's an array where each element is an object.

### When to Use

- You have multiple items
- Each item has multiple properties
- You need to process each item
- You need to access properties of each item

### Visual Representation

```
Array of Objects:
[
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
]

Array index:    0                   1                   2
Object keys:    item, price, qty    item, price, qty    item, price, qty
```

### Example: Total Sales Problem

**Problem:** Calculate total sales for multiple transactions

**Data Structure:**
```javascript
let sales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
];
```

**Why this structure:**
- **Array:** We have multiple sales (need a list)
- **Objects:** Each sale has multiple properties (item, price, quantity)

**Accessing data:**
```javascript
// Access first sale
let firstSale = sales[0];
console.log(firstSale.item);      // "apple"
console.log(firstSale.price);     // 1.00
console.log(firstSale.quantity);  // 10

// Access price of second sale
console.log(sales[1].price);  // 0.50

// Loop through all sales
for (let i = 0; i < sales.length; i++) {
    console.log(sales[i].item, sales[i].price);
}
```

---

## Data Structure 4: Set

### What Is a Set?

A **set** is a collection of unique items - no duplicates allowed.

### Key Characteristics

1. **Unique Values** - Each value appears only once
2. **Unordered** (in some languages) - No guaranteed order
3. **Fast Lookup** - Quickly check if item exists
4. **No Index** - Can't access by position

### When to Use

- You need to track unique values
- You need to check if something exists
- You don't care about order
- You want to remove duplicates

### Common Operations

#### 1. Create a Set

**JavaScript:**
```javascript
let numbers = new Set([1, 2, 3, 3, 4]);  // Duplicates removed
console.log(numbers);  // Set {1, 2, 3, 4}
```

**Python:**
```python
numbers = {1, 2, 3, 3, 4}  # Duplicates removed
print(numbers)  # {1, 2, 3, 4}
```

#### 2. Add an Element

**JavaScript:**
```javascript
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(1);  // Duplicate - ignored
console.log(numbers);  // Set {1, 2}
```

**Python:**
```python
numbers = set()
numbers.add(1)
numbers.add(2)
numbers.add(1)  # Duplicate - ignored
print(numbers)  # {1, 2}
```

#### 3. Check if Element Exists

**JavaScript:**
```javascript
let numbers = new Set([1, 2, 3]);
console.log(numbers.has(2));  // true
console.log(numbers.has(5));  // false
```

**Python:**
```python
numbers = {1, 2, 3}
print(2 in numbers)  # True
print(5 in numbers)  # False
```

#### 4. Remove an Element

**JavaScript:**
```javascript
let numbers = new Set([1, 2, 3]);
numbers.delete(2);
console.log(numbers);  // Set {1, 3}
```

**Python:**
```python
numbers = {1, 2, 3}
numbers.remove(2)
print(numbers)  # {1, 3}
```

### Example: Using Sets

**Problem:** Find unique tags from blog posts

**Solution:**
```javascript
let allTags = ["javascript", "python", "javascript", "java", "python"];
let uniqueTags = new Set(allTags);
console.log(uniqueTags);  // Set {"javascript", "python", "java"}
```

---

## Data Structure 5: Stack

### What Is a Stack?

A **stack** is a Last-In-First-Out (LIFO) data structure - the last item added is the first item removed.

### Key Characteristics

1. **LIFO** - Last In, First Out
2. **Two Operations** - Push (add) and Pop (remove)
3. **Top Access Only** - Can only access the top item
4. **Like a Stack of Plates** - Add to top, remove from top

### Visual Representation

```
Stack (like plates):
    [3]  ← Top (last added, first removed)
    [2]
    [1]  ← Bottom (first added, last removed)

Push 4:     Pop (returns 3):
    [4]         [2]
    [3]         [1]
    [2]
    [1]
```

### When to Use

- Undo/redo functionality
- Function call tracking
- Expression evaluation
- Back button in browser

### Common Operations

#### 1. Push (Add to Top)

**JavaScript:**
```javascript
let stack = [];
stack.push(1);  // Add to top
stack.push(2);
stack.push(3);
console.log(stack);  // [1, 2, 3]
```

**Python:**
```python
stack = []
stack.append(1)  # Add to top
stack.append(2)
stack.append(3)
print(stack)  # [1, 2, 3]
```

#### 2. Pop (Remove from Top)

**JavaScript:**
```javascript
let stack = [1, 2, 3];
let top = stack.pop();  // Remove and return top
console.log(top);       // 3
console.log(stack);     // [1, 2]
```

**Python:**
```python
stack = [1, 2, 3]
top = stack.pop()  # Remove and return top
print(top)  # 3
print(stack)  # [1, 2]
```

#### 3. Peek (Look at Top Without Removing)

**JavaScript:**
```javascript
let stack = [1, 2, 3];
let top = stack[stack.length - 1];  // Look at top
console.log(top);  // 3
console.log(stack);  // [1, 2, 3] (unchanged)
```

**Python:**
```python
stack = [1, 2, 3]
top = stack[-1]  # Look at top
print(top)  # 3
print(stack)  # [1, 2, 3] (unchanged)
```

### Example: Using Stacks

**Problem:** Implement undo functionality

**Solution:**
```javascript
let actions = [];
let currentState = "";

// Perform actions
function doAction(action) {
    actions.push(currentState);  // Save current state
    currentState = action;       // Update state
}

// Undo
function undo() {
    if (actions.length > 0) {
        currentState = actions.pop();  // Restore previous state
    }
}
```

---

## Data Structure 6: Queue

### What Is a Queue?

A **queue** is a First-In-First-Out (FIFO) data structure - the first item added is the first item removed.

### Key Characteristics

1. **FIFO** - First In, First Out
2. **Two Operations** - Enqueue (add to back) and Dequeue (remove from front)
3. **Like a Line** - People join at back, leave from front
4. **Ordered** - Maintains order of insertion

### Visual Representation

```
Queue (like a line):
Front → [1] [2] [3] ← Back

Enqueue 4:        Dequeue (returns 1):
Front → [1] [2] [3] [4] ← Back    Front → [2] [3] [4] ← Back
```

### When to Use

- Task scheduling
- Print queue
- Message processing
- Breadth-first search
- Any "first come, first served" scenario

### Common Operations

#### 1. Enqueue (Add to Back)

**JavaScript:**
```javascript
let queue = [];
queue.push(1);  // Add to back
queue.push(2);
queue.push(3);
console.log(queue);  // [1, 2, 3]
```

**Python:**
```python
from collections import deque
queue = deque()
queue.append(1)  # Add to back
queue.append(2)
queue.append(3)
print(queue)  # deque([1, 2, 3])
```

#### 2. Dequeue (Remove from Front)

**JavaScript:**
```javascript
let queue = [1, 2, 3];
let front = queue.shift();  // Remove from front
console.log(front);         // 1
console.log(queue);         // [2, 3]
```

**Python:**
```python
from collections import deque
queue = deque([1, 2, 3])
front = queue.popleft()  # Remove from front
print(front)  # 1
print(queue)  # deque([2, 3])
```

### Example: Using Queues

**Problem:** Process tasks in order

**Solution:**
```javascript
let taskQueue = [];

// Add tasks
taskQueue.push("Task 1");
taskQueue.push("Task 2");
taskQueue.push("Task 3");

// Process tasks in order
while (taskQueue.length > 0) {
    let task = taskQueue.shift();  // Get first task
    console.log("Processing:", task);
}
```

---

## Choosing the Right Data Structure

### Decision Tree

**Ask yourself:**

1. **Do I have multiple items?**
   - Yes → Need a collection (array, set, stack, queue)
   - No → Single value (variable)

2. **Does order matter?**
   - Yes → Array, Stack, or Queue
   - No → Set or Object

3. **Do I need unique values?**
   - Yes → Set
   - No → Array

4. **Do I need to access by name/key?**
   - Yes → Object/Dictionary
   - No → Array, Set, Stack, or Queue

5. **Do I need LIFO (last in, first out)?**
   - Yes → Stack
   - No → Continue

6. **Do I need FIFO (first in, first out)?**
   - Yes → Queue
   - No → Array

### Examples

**Example 1: Store student grades**
- Multiple items? Yes
- Order matters? Yes (maybe)
- Access by name? No
- **Choice:** Array `[85, 92, 78]`

**Example 2: Store student information**
- Multiple items? No (one student)
- Multiple properties? Yes
- Access by name? Yes
- **Choice:** Object `{name: "Alice", age: 20, grade: 85}`

**Example 3: Store multiple students with information**
- Multiple items? Yes
- Each has properties? Yes
- **Choice:** Array of Objects
```javascript
[
    {name: "Alice", age: 20, grade: 85},
    {name: "Bob", age: 21, grade: 92}
]
```

**Example 4: Track unique visitors**
- Multiple items? Yes
- Need unique? Yes
- Order matters? No
- **Choice:** Set

**Example 5: Undo functionality**
- LIFO needed? Yes
- **Choice:** Stack

**Example 6: Print queue**
- FIFO needed? Yes
- **Choice:** Queue

---

## Summary

**Common Data Structures:**

1. **Array/List** - Ordered collection, access by index
2. **Object/Dictionary** - Key-value pairs, access by key
3. **Array of Objects** - Multiple items, each with properties
4. **Set** - Unique values, no duplicates
5. **Stack** - LIFO (last in, first out)
6. **Queue** - FIFO (first in, first out)

**Key Points:**
- Choose based on your needs
- Different structures for different problems
- Can combine structures (array of objects)
- Practice recognizing when to use each

**Next:** Learn about algorithms that work with these data structures!

**Next File:** `09_ALGORITHMS.md`

---

## Quick Reference

**Array:**
- Ordered, indexed
- Access by position: `arr[0]`
- Add: `push()`, Remove: `pop()`

**Object:**
- Key-value pairs
- Access by key: `obj.key` or `obj["key"]`
- Add/Update: `obj.key = value`

**Set:**
- Unique values
- Check: `set.has(value)`
- Add: `set.add(value)`

**Stack:**
- LIFO
- Push: `push()`, Pop: `pop()`

**Queue:**
- FIFO
- Enqueue: `push()`, Dequeue: `shift()` or `popleft()`

