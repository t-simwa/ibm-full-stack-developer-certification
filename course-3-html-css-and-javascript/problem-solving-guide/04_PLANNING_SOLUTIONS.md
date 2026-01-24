# Planning Your Solution
## Step 3: Think Before You Code

---

## Why Planning Matters

### The Rush to Code

**Common mistake:** Understanding the problem, then immediately starting to write code.

**Why it's bad:**
- You write code without a clear direction
- You might solve it the wrong way
- You'll write code you'll delete later
- You'll get stuck and frustrated

### The Power of Planning

**Better approach:** Plan your solution first, then code.

**Why it's good:**
- You know exactly what to code
- You catch problems before coding
- You write code more efficiently
- You have a roadmap to follow

### Real Example

**Problem:** "Find the average of numbers in an array"

**Without planning:**
- Start coding immediately
- Try different approaches
- Get confused
- Delete code and start over

**With planning:**
1. Sum all numbers
2. Count the numbers
3. Divide sum by count
4. Return result

Now you know exactly what to code!

---

## What is Planning?

### Definition

**Planning** means deciding HOW you'll solve each piece of the problem before writing any code. It's like drawing a blueprint before building a house.

### What Planning Includes

1. **Choosing data structures** - How will you store data?
2. **Identifying algorithms** - What methods will you use?
3. **Writing pseudocode** - What will your code do?
4. **Thinking about flow** - What order will things happen?
5. **Considering edge cases** - What special situations exist?

---

## Planning Tools

### Tool 1: Pseudocode

**What is pseudocode?**

Pseudocode is code-like text that describes what you'll do, without worrying about exact syntax. It's like a rough draft of your code.

**Why use it?**
- Focus on logic, not syntax
- Easy to read and understand
- Can be written in plain English
- Helps you think through the solution

**Example: Total Sales Problem**

**Problem:** "Calculate total sales amount"

**Pseudocode:**
```
FUNCTION calculateTotalSales(sales):
    SET total = 0
    
    FOR EACH sale IN sales:
        SET itemTotal = sale.price × sale.quantity
        ADD itemTotal TO total
    
    RETURN total
END FUNCTION
```

**Breaking it down:**
- `FUNCTION calculateTotalSales(sales):` - We'll create a function
- `SET total = 0` - Start with zero
- `FOR EACH sale IN sales:` - Loop through each sale
- `SET itemTotal = sale.price × sale.quantity` - Calculate for this sale
- `ADD itemTotal TO total` - Add to running total
- `RETURN total` - Return the result

**Now you know exactly what to code!**

### Tool 2: Flowcharts (Mental Models)

**What is a flowchart?**

A flowchart is a visual representation of the steps in your solution. It shows the flow of logic.

**Why use it?**
- Visual learners understand better
- Shows decision points clearly
- Shows the flow of execution
- Helps identify loops and conditions

**Example: Find Maximum Problem**

**Flowchart:**
```
START
  ↓
Get array of numbers
  ↓
Set max = first number
  ↓
Set index = 1
  ↓
┌─────────────────┐
│ Is index <      │
│ array.length?   │
└─────────────────┘
  │           │
 YES          NO
  │           │
  ↓           ↓
┌─────────┐   Return max
│ Is      │   END
│ number  │
│ > max?  │
└─────────┘
  │     │
 YES    NO
  │     │
  ↓     ↓
Set    (do nothing)
max =  
number
  ↓
Increment index
  ↓
(loop back)
```

**This shows:**
- Where we start
- What decisions we make
- What happens in each case
- Where we loop
- Where we end

### Tool 3: Step-by-Step Outline

**What is it?**

A numbered list of steps you'll follow, with details for each step.

**Why use it?**
- Simple and clear
- Easy to follow
- Can add details as needed
- Good for linear problems

**Example: Count Even Numbers**

**Outline:**
1. **Initialize counter**
   - Set count = 0
   - This will track how many even numbers we find

2. **Loop through array**
   - For each number in the array
   - We need to check each one

3. **Check if even**
   - Divide number by 2
   - Check if remainder is 0
   - If remainder is 0, it's even

4. **Increment counter**
   - If number is even, add 1 to count
   - Otherwise, do nothing

5. **Return count**
   - After checking all numbers, return the count

**Now you have a clear roadmap!**

---

## Choosing Data Structures

### What Are Data Structures?

Data structures are ways of organizing and storing data. Different structures are good for different purposes.

### Common Data Structures

#### 1. Array/List

**What:** An ordered collection of items

**When to use:**
- You have multiple items of the same type
- Order matters
- You need to access items by position

**Example uses:**
- List of numbers: [1, 2, 3, 4, 5]
- List of names: ["Alice", "Bob", "Charlie"]
- List of sales: [{item: "apple", price: 1.00}, ...]

**Operations:**
- Add item
- Remove item
- Access by index
- Loop through

#### 2. Object/Dictionary/Map

**What:** A collection of key-value pairs

**When to use:**
- You have related data that belongs together
- You need to access data by name (key)
- Data has multiple properties

**Example uses:**
- Person: {name: "Alice", age: 30, city: "NYC"}
- Sale: {item: "apple", price: 1.00, quantity: 10}
- Configuration: {theme: "dark", language: "en"}

**Operations:**
- Access by key: person.name
- Add property: person.email = "..."
- Check if key exists

#### 3. Set

**What:** A collection of unique items (no duplicates)

**When to use:**
- You need to track unique values
- You need to check if something exists
- You don't care about order

**Example uses:**
- Unique user IDs
- Tags on a blog post
- Visited pages

**Operations:**
- Add item
- Check if item exists
- Remove item

#### 4. Stack

**What:** Last-In-First-Out (LIFO) collection

**When to use:**
- You need to process items in reverse order
- Undo/redo functionality
- Function call tracking

**Example uses:**
- Browser back button
- Undo in text editor
- Expression evaluation

**Operations:**
- Push (add to top)
- Pop (remove from top)
- Peek (look at top)

#### 5. Queue

**What:** First-In-First-Out (FIFO) collection

**When to use:**
- You need to process items in order
- Task scheduling
- Message processing

**Example uses:**
- Print queue
- Task queue
- Message queue

**Operations:**
- Enqueue (add to back)
- Dequeue (remove from front)
- Peek (look at front)

### How to Choose

**Ask yourself:**
1. What data do I have?
2. How do I need to access it?
3. What operations do I need?
4. Does order matter?
5. Do I need unique values?

**Example: Total Sales Problem**

**Data:** Sales transactions
- Each has: item, price, quantity
- Multiple transactions
- Need to process each one

**Choice:** Array of objects
- Array: Multiple transactions
- Objects: Each transaction has multiple properties

**Why not just array?**
- We need to store item name, price, AND quantity together
- Objects group related data

**Why not just objects?**
- We have multiple transactions
- Arrays are better for collections

---

## Identifying Algorithms

### What Are Algorithms?

Algorithms are step-by-step procedures for solving problems. They're like recipes for computation.

### Common Algorithms

#### 1. Linear Search

**What:** Look through items one by one until you find what you're looking for

**When to use:**
- Finding an item in a list
- Checking if something exists
- Small to medium lists

**Example:** Find a name in a list
```
FOR EACH name IN names:
    IF name == target:
        RETURN true
RETURN false
```

#### 2. Accumulation

**What:** Build up a value by processing multiple items

**When to use:**
- Summing numbers
- Counting items
- Building strings
- Creating new collections

**Example:** Sum numbers
```
SET total = 0
FOR EACH number IN numbers:
    total = total + number
RETURN total
```

#### 3. Finding Maximum/Minimum

**What:** Find the largest or smallest value

**When to use:**
- Finding best/worst value
- Comparing items
- Ranking

**Example:** Find maximum
```
SET max = first number
FOR EACH number IN remaining numbers:
    IF number > max:
        max = number
RETURN max
```

#### 4. Filtering

**What:** Keep only items that meet a condition

**When to use:**
- Removing unwanted items
- Finding items matching criteria
- Cleaning data

**Example:** Keep only even numbers
```
SET result = []
FOR EACH number IN numbers:
    IF number % 2 == 0:
        ADD number TO result
RETURN result
```

#### 5. Transformation/Mapping

**What:** Convert each item to something else

**When to use:**
- Converting data format
- Calculating new values
- Extracting information

**Example:** Double each number
```
SET result = []
FOR EACH number IN numbers:
    ADD (number × 2) TO result
RETURN result
```

### How to Identify

**Ask yourself:**
1. What am I trying to accomplish?
2. Do I need to process each item?
3. Do I need to find something?
4. Do I need to transform data?
5. Do I need to filter data?

**Example: Total Sales Problem**

**Goal:** Calculate total sales

**Process:**
- Need to process each sale
- Need to calculate something for each
- Need to accumulate results

**Algorithm:** Accumulation
- Process each sale
- Calculate price × quantity
- Add to running total

---

## Planning Example: Total Sales

### The Problem

"Calculate the total sales amount for sales transactions."

### Step 1: Understand (from previous step)

- **Input:** Array of sales objects
- **Output:** Total amount (number)
- **Process:** Multiply price × quantity for each, then sum

### Step 2: Break Down (from previous step)

1. Loop through sales
2. Calculate price × quantity for each
3. Add to running total
4. Return total

### Step 3: Plan (this step!)

#### 3.1: Choose Data Structures

**Input data structure:**
- Array of objects
- Each object: {item: string, price: number, quantity: number}

**Working variables:**
- `total` (number) - to accumulate the sum
- `sale` (object) - current sale being processed

**Why these choices:**
- Array: We have multiple sales
- Objects: Each sale has multiple properties
- Number for total: We're calculating a sum

#### 3.2: Identify Algorithm

**Algorithm:** Accumulation pattern
- Start with initial value (0)
- Process each item
- Add to accumulator
- Return result

#### 3.3: Write Pseudocode

```
FUNCTION calculateTotalSales(sales):
    // Initialize accumulator
    SET total = 0
    
    // Process each sale
    FOR EACH sale IN sales:
        // Calculate this sale's total
        SET itemTotal = sale.price × sale.quantity
        
        // Add to running total
        total = total + itemTotal
    
    // Return final total
    RETURN total
END FUNCTION
```

#### 3.4: Consider Edge Cases

**Edge case 1: Empty array**
- If sales is empty, loop won't run
- Total stays 0
- Return 0 ✓ (correct!)

**Edge case 2: Zero quantity**
- price × 0 = 0
- Adds 0 to total
- Works correctly ✓

**Edge case 3: Zero price**
- 0 × quantity = 0
- Adds 0 to total
- Works correctly ✓

**Edge case 4: Negative numbers**
- Need to clarify: Can prices/quantities be negative?
- For now, assume they're positive
- If needed, add validation later

#### 3.5: Think About Flow

**Execution flow:**
1. Function called with sales array
2. Initialize total = 0
3. Enter loop
4. For each sale:
   - Calculate itemTotal
   - Add to total
5. Exit loop
6. Return total

**Visual flow:**
```
Start
  ↓
total = 0
  ↓
Loop: sale 1
  → itemTotal = 1.00 × 10 = 10.00
  → total = 0 + 10.00 = 10.00
  ↓
Loop: sale 2
  → itemTotal = 0.50 × 20 = 10.00
  → total = 10.00 + 10.00 = 20.00
  ↓
Loop: sale 3
  → itemTotal = 0.25 × 30 = 7.50
  → total = 20.00 + 7.50 = 27.50
  ↓
Exit loop
  ↓
Return 27.50
  ↓
End
```

### Now You're Ready to Code!

With this plan, you know:
- What data structures to use
- What algorithm to follow
- What the code should do (pseudocode)
- What edge cases to consider
- How the execution flows

**You can now write the code confidently!**

---

## Planning Checklist

Before you start coding, make sure you have:

- [ ] Chosen appropriate data structures
- [ ] Identified the algorithm(s) you'll use
- [ ] Written pseudocode
- [ ] Considered edge cases
- [ ] Thought about execution flow
- [ ] Verified your plan solves the problem

---

## Common Planning Mistakes

### Mistake 1: Skipping Planning

**Problem:** Jumping straight to code

**Solution:** Always plan first, even for simple problems

### Mistake 2: Planning Too Vaguely

**Problem:** "I'll use a loop and add things"

**Solution:** Be specific: "I'll use a for loop to iterate through the array, multiply price by quantity for each item, and accumulate the sum in a variable called total"

### Mistake 3: Not Considering Data Structures

**Problem:** Using the wrong structure, making code complicated

**Solution:** Think about your data and choose the best structure

### Mistake 4: Ignoring Edge Cases

**Problem:** Plan only works for "happy path"

**Solution:** Consider empty inputs, zero values, etc.

---

## Summary

Planning is crucial for writing good code. Remember:

1. **Choose data structures** - How will you store data?
2. **Identify algorithms** - What methods will you use?
3. **Write pseudocode** - What will your code do?
4. **Consider edge cases** - What special situations exist?
5. **Think about flow** - What order will things happen?

**Next:** Once you have a plan, you're ready to write code!

**Next File:** `05_WRITING_CODE.md`

---

## Quick Reference

**Planning Tools:**
- Pseudocode
- Flowcharts
- Step-by-step outlines

**Data Structures:**
- Array/List - ordered collection
- Object/Dict/Map - key-value pairs
- Set - unique items
- Stack - LIFO
- Queue - FIFO

**Common Algorithms:**
- Linear search
- Accumulation
- Find max/min
- Filtering
- Transformation

