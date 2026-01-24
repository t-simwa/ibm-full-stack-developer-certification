# Common Algorithms
## Step-by-Step Procedures for Solving Problems

---

## What Are Algorithms?

### Definition

An **algorithm** is a step-by-step procedure for solving a problem or accomplishing a task. It's like a recipe - follow the steps in order, and you get the result.

### Why Algorithms Matter

**Algorithms are the building blocks of programming:**
- They solve common problems
- They're reusable patterns
- They're efficient solutions
- They're well-tested approaches

### Real-World Analogy

**Algorithm = Recipe**

Just like a recipe tells you:
1. Gather ingredients
2. Mix them in order
3. Cook for specific time
4. Serve

An algorithm tells you:
1. Get the data
2. Process it in steps
3. Return the result

---

## Algorithm 1: Linear Search

### What Is Linear Search?

**Linear search** is an algorithm that looks through items one by one until it finds what it's looking for.

### How It Works

1. Start at the beginning
2. Check each item in order
3. If you find it, stop and return it
4. If you reach the end without finding it, return "not found"

### Visual Representation

```
Searching for 7 in [3, 1, 7, 2, 9]:

Step 1: Check index 0 → 3 (not 7, continue)
Step 2: Check index 1 → 1 (not 7, continue)
Step 3: Check index 2 → 7 (found! return index 2)
```

### When to Use

- Small to medium lists
- Unsorted data
- Simple search needs
- When you need the first match

### Step-by-Step Implementation

#### Step 1: Understand the Problem

**Problem:** Find if a number exists in an array

**Input:** Array of numbers, target number
**Output:** True if found, False if not

#### Step 2: Plan the Algorithm

```
1. Loop through each number in the array
2. Compare current number with target
3. If they match, return true
4. If loop ends without match, return false
```

#### Step 3: Write the Code

**JavaScript:**
```javascript
function linearSearch(numbers, target) {
    // Step 1: Loop through each number
    for (let i = 0; i < numbers.length; i++) {
        // Step 2: Compare with target
        if (numbers[i] === target) {
            // Step 3: Found it! Return true
            return true;
        }
    }
    // Step 4: Not found, return false
    return false;
}
```

**Python:**
```python
def linear_search(numbers, target):
    # Step 1: Loop through each number
    for number in numbers:
        # Step 2: Compare with target
        if number == target:
            # Step 3: Found it! Return True
            return True
    # Step 4: Not found, return False
    return False
```

#### Step 4: Test the Algorithm

```javascript
let numbers = [3, 1, 7, 2, 9];
console.log(linearSearch(numbers, 7));  // true (found)
console.log(linearSearch(numbers, 5));  // false (not found)
```

### Variations

#### Variation 1: Find Index

**Problem:** Return the index where the item is found

**Solution:**
```javascript
function linearSearchIndex(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;  // Return index, not true
        }
    }
    return -1;  // Not found (convention: -1 means not found)
}
```

#### Variation 2: Find All Occurrences

**Problem:** Find all indices where the item appears

**Solution:**
```javascript
function linearSearchAll(numbers, target) {
    let indices = [];  // Store all indices
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            indices.push(i);  // Add index to results
        }
    }
    
    return indices;  // Return all indices
}
```

### Time Complexity

**Best case:** O(1) - Item is first
**Average case:** O(n) - Item is in middle
**Worst case:** O(n) - Item is last or not found

Where n is the number of items in the array.

---

## Algorithm 2: Accumulation (Sum/Count)

### What Is Accumulation?

**Accumulation** is building up a value by processing multiple items and adding to a running total.

### How It Works

1. Start with an initial value (usually 0)
2. Loop through each item
3. Process the item (calculate something)
4. Add the result to the accumulator
5. Return the final accumulated value

### Visual Representation

```
Summing [10, 20, 30]:

Step 1: total = 0 (initial)
Step 2: Process 10 → total = 0 + 10 = 10
Step 3: Process 20 → total = 10 + 20 = 30
Step 4: Process 30 → total = 30 + 30 = 60
Result: 60
```

### When to Use

- Summing numbers
- Counting items
- Building totals
- Calculating aggregates

### Step-by-Step Implementation

#### Example 1: Sum Numbers

**Problem:** Sum all numbers in an array

**Algorithm:**
```
1. Initialize total = 0
2. For each number:
   - Add number to total
3. Return total
```

**Code:**
```javascript
function sum(numbers) {
    let total = 0;  // Step 1: Initialize
    
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];  // Step 2: Add to total
    }
    
    return total;  // Step 3: Return result
}
```

**Python:**
```python
def sum(numbers):
    total = 0  # Step 1: Initialize
    
    for number in numbers:
        total += number  # Step 2: Add to total
    
    return total  # Step 3: Return result
```

#### Example 2: Count Items Matching Condition

**Problem:** Count how many numbers are even

**Algorithm:**
```
1. Initialize count = 0
2. For each number:
   - If number is even:
     - Add 1 to count
3. Return count
```

**Code:**
```javascript
function countEven(numbers) {
    let count = 0;  // Step 1: Initialize
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {  // Check if even
            count++;  // Step 2: Increment count
        }
    }
    
    return count;  // Step 3: Return result
}
```

#### Example 3: Calculate Total Sales (Our Main Example)

**Problem:** Calculate total sales amount

**Algorithm:**
```
1. Initialize total = 0
2. For each sale:
   - Calculate: price × quantity
   - Add to total
3. Return total
```

**Code:**
```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;  // Step 1: Initialize
    
    for (let i = 0; i < sales.length; i++) {
        let itemTotal = sales[i].price * sales[i].quantity;  // Calculate
        totalSales += itemTotal;  // Step 2: Add to total
    }
    
    return totalSales;  // Step 3: Return result
}
```

### Time Complexity

**Always:** O(n) - Must process each item once

Where n is the number of items.

---

## Algorithm 3: Find Maximum/Minimum

### What Is It?

**Find maximum/minimum** finds the largest or smallest value in a collection.

### How It Works

1. Start by assuming the first item is the max/min
2. Compare it with each remaining item
3. If you find a larger/smaller item, update max/min
4. Return the final max/min

### Visual Representation

```
Finding maximum in [3, 7, 2, 9, 1]:

Step 1: max = 3 (first item)
Step 2: Compare 3 with 7 → 7 > 3 → max = 7
Step 3: Compare 7 with 2 → 2 < 7 → max = 7 (no change)
Step 4: Compare 7 with 9 → 9 > 7 → max = 9
Step 5: Compare 9 with 1 → 1 < 9 → max = 9 (no change)
Result: 9
```

### When to Use

- Finding best/worst value
- Comparing items
- Ranking
- Optimization

### Step-by-Step Implementation

#### Example 1: Find Maximum

**Problem:** Find the largest number

**Algorithm:**
```
1. Set max = first number
2. For each remaining number:
   - If number > max:
     - Set max = number
3. Return max
```

**Code:**
```javascript
function findMax(numbers) {
    let max = numbers[0];  // Step 1: Start with first
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {  // Step 2: Compare
            max = numbers[i];  // Update if larger
        }
    }
    
    return max;  // Step 3: Return result
}
```

**Python:**
```python
def find_max(numbers):
    max_num = numbers[0]  # Step 1: Start with first
    
    for number in numbers[1:]:  # Rest of numbers
        if number > max_num:  # Step 2: Compare
            max_num = number  # Update if larger
    
    return max_num  # Step 3: Return result
```

#### Example 2: Find Minimum

**Problem:** Find the smallest number

**Algorithm:** Same as maximum, but use `<` instead of `>`

**Code:**
```javascript
function findMin(numbers) {
    let min = numbers[0];  // Start with first
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {  // Use < instead of >
            min = numbers[i];  // Update if smaller
        }
    }
    
    return min;
}
```

### Time Complexity

**Always:** O(n) - Must check each item once

Where n is the number of items.

---

## Algorithm 4: Filter

### What Is Filter?

**Filter** creates a new collection containing only items that meet a condition.

### How It Works

1. Create an empty result collection
2. Loop through each item
3. Check if item meets condition
4. If yes, add to result
5. Return the filtered collection

### Visual Representation

```
Filtering even numbers from [1, 2, 3, 4, 5, 6]:

Step 1: result = []
Step 2: Check 1 → not even → skip
Step 3: Check 2 → even → add to result → result = [2]
Step 4: Check 3 → not even → skip
Step 5: Check 4 → even → add to result → result = [2, 4]
Step 6: Check 5 → not even → skip
Step 7: Check 6 → even → add to result → result = [2, 4, 6]
Result: [2, 4, 6]
```

### When to Use

- Removing unwanted items
- Finding items matching criteria
- Cleaning data
- Selecting subsets

### Step-by-Step Implementation

#### Example 1: Filter Even Numbers

**Problem:** Keep only even numbers

**Algorithm:**
```
1. Create empty result array
2. For each number:
   - If number is even:
     - Add to result
3. Return result
```

**Code:**
```javascript
function filterEven(numbers) {
    let result = [];  // Step 1: Create empty array
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {  // Step 2: Check condition
            result.push(numbers[i]);  // Add if condition true
        }
    }
    
    return result;  // Step 3: Return filtered array
}
```

**Python:**
```python
def filter_even(numbers):
    result = []  # Step 1: Create empty list
    
    for number in numbers:
        if number % 2 == 0:  # Step 2: Check condition
            result.append(number)  # Add if condition true
    
    return result  # Step 3: Return filtered list
```

#### Example 2: Filter Expensive Items

**Problem:** Keep only items above a certain price

**Code:**
```javascript
function filterExpensive(items, minPrice) {
    let result = [];
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > minPrice) {  // Condition
            result.push(items[i]);
        }
    }
    
    return result;
}
```

### Time Complexity

**Always:** O(n) - Must check each item once

Where n is the number of items.

---

## Algorithm 5: Transformation/Map

### What Is Transformation?

**Transformation** (also called **mapping**) converts each item to something else, creating a new collection.

### How It Works

1. Create an empty result collection
2. Loop through each item
3. Transform the item (apply a function)
4. Add transformed item to result
5. Return the new collection

### Visual Representation

```
Doubling each number in [1, 2, 3, 4]:

Step 1: result = []
Step 2: Transform 1 → 2 → result = [2]
Step 3: Transform 2 → 4 → result = [2, 4]
Step 4: Transform 3 → 6 → result = [2, 4, 6]
Step 5: Transform 4 → 8 → result = [2, 4, 6, 8]
Result: [2, 4, 6, 8]
```

### When to Use

- Converting data format
- Calculating new values
- Extracting information
- Transforming data

### Step-by-Step Implementation

#### Example 1: Double Each Number

**Problem:** Create new array with each number doubled

**Algorithm:**
```
1. Create empty result array
2. For each number:
   - Calculate: number × 2
   - Add to result
3. Return result
```

**Code:**
```javascript
function double(numbers) {
    let result = [];  // Step 1: Create empty array
    
    for (let i = 0; i < numbers.length; i++) {
        let doubled = numbers[i] * 2;  // Step 2: Transform
        result.push(doubled);  // Add to result
    }
    
    return result;  // Step 3: Return transformed array
}
```

**Python:**
```python
def double(numbers):
    result = []  # Step 1: Create empty list
    
    for number in numbers:
        doubled = number * 2  # Step 2: Transform
        result.append(doubled)  # Add to result
    
    return result  # Step 3: Return transformed list
```

#### Example 2: Extract Prices

**Problem:** Get array of prices from array of items

**Code:**
```javascript
function getPrices(items) {
    let prices = [];
    
    for (let i = 0; i < items.length; i++) {
        let price = items[i].price;  // Transform: extract price
        prices.push(price);
    }
    
    return prices;
}
```

### Time Complexity

**Always:** O(n) - Must process each item once

Where n is the number of items.

---

## Algorithm 6: Calculate Average

### What Is It?

**Calculate average** finds the mean value by summing all items and dividing by the count.

### How It Works

1. Sum all items (using accumulation)
2. Count the items (get length)
3. Divide sum by count
4. Return the average

### Visual Representation

```
Calculating average of [10, 20, 30]:

Step 1: Sum = 10 + 20 + 30 = 60
Step 2: Count = 3
Step 3: Average = 60 / 3 = 20
Result: 20
```

### When to Use

- Finding mean values
- Statistical calculations
- Performance metrics
- Aggregating data

### Step-by-Step Implementation

**Algorithm:**
```
1. Sum all numbers (accumulation)
2. Get count (array length)
3. Calculate: sum / count
4. Return average
```

**Code:**
```javascript
function average(numbers) {
    // Step 1: Sum all numbers
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    // Step 2 & 3: Calculate average
    let avg = sum / numbers.length;
    
    // Step 4: Return result
    return avg;
}
```

**Python:**
```python
def average(numbers):
    # Step 1: Sum all numbers
    sum_total = sum(numbers)  # Built-in function
    
    # Step 2 & 3: Calculate average
    avg = sum_total / len(numbers)
    
    # Step 4: Return result
    return avg
```

### Time Complexity

**Always:** O(n) - Must sum all items (O(n)) + division (O(1)) = O(n)

Where n is the number of items.

---

## Algorithm 7: Reverse Array

### What Is It?

**Reverse array** reverses the order of items in an array.

### How It Works

**Method 1: Two-Pointer Approach**
1. Start with pointer at beginning and end
2. Swap items at both pointers
3. Move pointers toward center
4. Repeat until pointers meet

**Method 2: Build New Array**
1. Create empty result array
2. Loop from end to beginning
3. Add each item to result
4. Return result

### Visual Representation

**Two-Pointer Method:**
```
Reversing [1, 2, 3, 4, 5]:

Initial: [1, 2, 3, 4, 5]
         ↑           ↑
       left        right

Step 1: Swap 1 and 5 → [5, 2, 3, 4, 1]
            ↑     ↑
          left  right

Step 2: Move pointers → [5, 2, 3, 4, 1]
              ↑   ↑
            left right

Step 3: Swap 2 and 4 → [5, 4, 3, 2, 1]
              ↑   ↑
            left right

Step 4: Move pointers → [5, 4, 3, 2, 1]
                ↑
            left/right (meet, stop)

Result: [5, 4, 3, 2, 1]
```

### Step-by-Step Implementation

**Two-Pointer Method:**
```javascript
function reverseArray(arr) {
    let left = 0;  // Start from beginning
    let right = arr.length - 1;  // Start from end
    
    while (left < right) {  // Continue until pointers meet
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        // Move pointers
        left++;
        right--;
    }
    
    return arr;
}
```

**Build New Array Method:**
```javascript
function reverseArray(arr) {
    let result = [];
    
    // Loop from end to beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    
    return result;
}
```

### Time Complexity

**Both methods:** O(n) - Must process each item once

Where n is the number of items.

---

## Combining Algorithms

### Real Problems Use Multiple Algorithms

**Example:** "Find the average price of expensive items"

**Algorithms used:**
1. **Filter** - Keep only expensive items
2. **Transformation** - Extract prices
3. **Accumulation** - Sum prices
4. **Calculate Average** - Divide by count

**Code:**
```javascript
function averageExpensivePrice(items, minPrice) {
    // Step 1: Filter expensive items
    let expensive = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > minPrice) {
            expensive.push(items[i]);
        }
    }
    
    // Step 2: Extract prices (transformation)
    let prices = [];
    for (let i = 0; i < expensive.length; i++) {
        prices.push(expensive[i].price);
    }
    
    // Step 3: Sum prices (accumulation)
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    
    // Step 4: Calculate average
    return sum / prices.length;
}
```

---

## Algorithm Selection Guide

### How to Choose an Algorithm

**Ask yourself:**

1. **What am I trying to find?**
   - A specific item? → Linear Search
   - Maximum/Minimum? → Find Max/Min
   - A sum/count? → Accumulation
   - Filtered items? → Filter
   - Transformed items? → Transformation

2. **What operations do I need?**
   - Search → Linear Search
   - Calculate total → Accumulation
   - Compare values → Find Max/Min
   - Select items → Filter
   - Convert items → Transformation

3. **What's the data structure?**
   - Array → Most algorithms work
   - Object → May need to convert to array first
   - Set → Use set operations

---

## Summary

**Common Algorithms:**

1. **Linear Search** - Find an item
2. **Accumulation** - Build up a value
3. **Find Max/Min** - Find best/worst
4. **Filter** - Keep matching items
5. **Transformation** - Convert each item
6. **Calculate Average** - Find mean
7. **Reverse Array** - Reverse order

**Key Points:**
- Algorithms are step-by-step procedures
- Each algorithm has a specific purpose
- Can combine algorithms for complex problems
- Practice recognizing which algorithm to use

**Next:** Practice applying these algorithms to real problems!

**Next File:** `10_PRACTICE_EXERCISES.md` (if created)

---

## Quick Reference

**Linear Search:**
- Loop through items
- Compare with target
- Return when found

**Accumulation:**
- Initialize accumulator
- Process each item
- Add to accumulator
- Return result

**Find Max/Min:**
- Start with first item
- Compare with rest
- Update if better
- Return result

**Filter:**
- Create result array
- Check condition
- Add if true
- Return result

**Transformation:**
- Create result array
- Transform each item
- Add to result
- Return result

