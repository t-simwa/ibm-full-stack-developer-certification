# Common Problem-Solving Patterns
## Reusable Solutions for Common Problems

---

## What Are Patterns?

### Definition

**Patterns** are common solutions to recurring problems. Once you recognize a pattern, you know how to solve similar problems.

### Why Patterns Matter

- **Save time** - You don't reinvent the wheel
- **Reduce errors** - Proven solutions work
- **Improve understanding** - You see the structure
- **Build confidence** - You recognize familiar problems

### How to Use Patterns

1. **Recognize** - "This looks like pattern X"
2. **Apply** - Use the pattern's structure
3. **Adapt** - Modify for your specific problem

---

## Pattern 1: The Accumulator Pattern

### What It Is

Build up a value by processing multiple items and accumulating results.

### When to Use

- Summing numbers
- Counting items
- Concatenating strings
- Building collections
- Calculating totals

### Structure

```
SET accumulator = initialValue

FOR EACH item IN items:
    accumulator = accumulator + process(item)

RETURN accumulator
```

### Example 1: Sum Numbers

**Problem:** Sum all numbers in an array

**Pattern:** Accumulator

**Solution:**
```javascript
function sum(numbers) {
    let total = 0;  // Initialize accumulator
    
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];  // Accumulate
    }
    
    return total;  // Return result
}
```

**Python:**
```python
def sum(numbers):
    total = 0  # Initialize accumulator
    
    for number in numbers:
        total += number  # Accumulate
    
    return total  # Return result
```

**Java:**
```java
public static int sum(int[] numbers) {
    int total = 0;  // Initialize accumulator
    
    for (int i = 0; i < numbers.length; i++) {
        total += numbers[i];  // Accumulate
    }
    
    return total;  // Return result
}
```

**The pattern is the same in all languages!**

### Example 2: Count Items

**Problem:** Count how many items match a condition

**Pattern:** Accumulator (counting)

**Solution:**
```javascript
function countEven(numbers) {
    let count = 0;  // Initialize accumulator
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;  // Accumulate (add 1)
        }
    }
    
    return count;  // Return result
}
```

### Example 3: Total Sales (Our Main Example)

**Problem:** Calculate total sales amount

**Pattern:** Accumulator

**Solution:**
```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;  // Initialize accumulator
    
    for (let i = 0; i < sales.length; i++) {
        let itemTotal = sales[i].price * sales[i].quantity;
        totalSales += itemTotal;  // Accumulate
    }
    
    return totalSales;  // Return result
}
```

### Key Points

- **Initial value:** Usually 0 for sums, "" for strings, [] for arrays
- **Accumulation:** Add to the accumulator in the loop
- **Return:** Return the final accumulated value

---

## Pattern 2: Find Maximum/Minimum

### What It Is

Find the largest or smallest value in a collection.

### When to Use

- Finding best/worst value
- Comparing items
- Ranking
- Optimization problems

### Structure

```
SET max = firstItem

FOR EACH item IN remainingItems:
    IF item > max:
        max = item

RETURN max
```

### Example 1: Find Maximum Number

**Problem:** Find the largest number in an array

**Pattern:** Find Maximum

**Solution:**
```javascript
function findMax(numbers) {
    let max = numbers[0];  // Start with first
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];  // Update if larger
        }
    }
    
    return max;  // Return result
}
```

**Python:**
```python
def find_max(numbers):
    max_num = numbers[0]  # Start with first
    
    for number in numbers[1:]:  # Rest of numbers
        if number > max_num:
            max_num = number  # Update if larger
    
    return max_num  # Return result
```

### Example 2: Find Minimum

**Problem:** Find the smallest number

**Pattern:** Find Minimum (same as max, but use <)

**Solution:**
```javascript
function findMin(numbers) {
    let min = numbers[0];  // Start with first
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];  // Update if smaller
        }
    }
    
    return min;  // Return result
}
```

### Key Points

- **Start with first item** - Assume it's the max/min
- **Compare with rest** - Check each remaining item
- **Update if needed** - Replace if you find better
- **Return result** - Return the final max/min

---

## Pattern 3: Filter Pattern

### What It Is

Keep only items that meet a condition, creating a new collection.

### When to Use

- Removing unwanted items
- Finding items matching criteria
- Cleaning data
- Selecting subsets

### Structure

```
SET result = []

FOR EACH item IN items:
    IF condition(item):
        ADD item TO result

RETURN result
```

### Example 1: Filter Even Numbers

**Problem:** Keep only even numbers

**Pattern:** Filter

**Solution:**
```javascript
function filterEven(numbers) {
    let result = [];  // Initialize result array
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {  // Condition
            result.push(numbers[i]);  // Add if condition true
        }
    }
    
    return result;  // Return filtered array
}
```

**Python:**
```python
def filter_even(numbers):
    result = []  # Initialize result list
    
    for number in numbers:
        if number % 2 == 0:  # Condition
            result.append(number)  # Add if condition true
    
    return result  # Return filtered list
```

### Example 2: Filter Expensive Items

**Problem:** Keep only items above a certain price

**Pattern:** Filter

**Solution:**
```javascript
function filterExpensive(items, minPrice) {
    let result = [];  // Initialize result
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > minPrice) {  // Condition
            result.push(items[i]);  // Add if condition true
        }
    }
    
    return result;  // Return filtered array
}
```

### Key Points

- **Create new collection** - Don't modify original
- **Check condition** - Test each item
- **Add if true** - Include items that pass
- **Return result** - Return the filtered collection

---

## Pattern 4: Transformation/Map Pattern

### What It Is

Convert each item to something else, creating a new collection.

### When to Use

- Converting data format
- Calculating new values
- Extracting information
- Transforming data

### Structure

```
SET result = []

FOR EACH item IN items:
    SET transformed = transform(item)
    ADD transformed TO result

RETURN result
```

### Example 1: Double Each Number

**Problem:** Create new array with each number doubled

**Pattern:** Transformation

**Solution:**
```javascript
function double(numbers) {
    let result = [];  // Initialize result
    
    for (let i = 0; i < numbers.length; i++) {
        let doubled = numbers[i] * 2;  // Transform
        result.push(doubled);  // Add to result
    }
    
    return result;  // Return transformed array
}
```

**Python:**
```python
def double(numbers):
    result = []  # Initialize result
    
    for number in numbers:
        doubled = number * 2  # Transform
        result.append(doubled)  # Add to result
    
    return result  # Return transformed list
```

### Example 2: Extract Prices

**Problem:** Get array of prices from array of items

**Pattern:** Transformation

**Solution:**
```javascript
function getPrices(items) {
    let prices = [];  // Initialize result
    
    for (let i = 0; i < items.length; i++) {
        let price = items[i].price;  // Transform (extract)
        prices.push(price);  // Add to result
    }
    
    return prices;  // Return transformed array
}
```

### Key Points

- **Create new collection** - Don't modify original
- **Transform each item** - Apply transformation
- **Add to result** - Include transformed item
- **Return result** - Return the new collection

---

## Pattern 5: Linear Search

### What It Is

Look through items one by one until you find what you're looking for.

### When to Use

- Finding an item in a list
- Checking if something exists
- Finding first match
- Small to medium collections

### Structure

```
FOR EACH item IN items:
    IF item == target:
        RETURN item (or true, or index)

RETURN not found (or false, or -1)
```

### Example 1: Find Item

**Problem:** Check if a number exists in an array

**Pattern:** Linear Search

**Solution:**
```javascript
function findNumber(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {  // Found it!
            return true;  // Return true
        }
    }
    
    return false;  // Not found
}
```

**Python:**
```python
def find_number(numbers, target):
    for number in numbers:
        if number == target:  # Found it!
            return True  # Return True
    
    return False  # Not found
```

### Example 2: Find Index

**Problem:** Find the index of an item

**Pattern:** Linear Search

**Solution:**
```javascript
function findIndex(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {  // Found it!
            return i;  // Return index
        }
    }
    
    return -1;  // Not found (convention: -1 means not found)
}
```

### Key Points

- **Check each item** - Look through one by one
- **Return early** - Stop when you find it
- **Handle not found** - Return appropriate value if not found

---

## Pattern 6: Two-Pointer Pattern

### What It Is

Use two pointers (indices) that move through the data, often from different ends.

### When to Use

- Finding pairs
- Reversing arrays
- Merging sorted arrays
- Palindrome checking

### Structure

```
SET left = 0
SET right = length - 1

WHILE left < right:
    PROCESS items[left] and items[right]
    left = left + 1
    right = right - 1
```

### Example: Reverse Array

**Problem:** Reverse an array in place

**Pattern:** Two-Pointer

**Solution:**
```javascript
function reverseArray(arr) {
    let left = 0;  // Start from beginning
    let right = arr.length - 1;  // Start from end
    
    while (left < right) {
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

### Key Points

- **Two indices** - Track two positions
- **Move toward each other** - Or in same direction
- **Process pairs** - Work with both positions
- **Stop when they meet** - Or cross

---

## Pattern 7: Sliding Window

### What It Is

Maintain a "window" of elements and slide it through the data.

### When to Use

- Finding subarrays
- Maximum/minimum in window
- String problems
- Optimization problems

### Structure

```
SET windowStart = 0
SET windowEnd = 0

WHILE windowEnd < length:
    EXPAND window (windowEnd++)
    
    WHILE condition:
        PROCESS window
        SHRINK window (windowStart++)
```

### Example: Maximum Sum of Subarray

**Problem:** Find maximum sum of any subarray of size k

**Pattern:** Sliding Window

**Solution:**
```javascript
function maxSumSubarray(numbers, k) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += numbers[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let windowEnd = k; windowEnd < numbers.length; windowEnd++) {
        // Add new element, remove old element
        windowSum += numbers[windowEnd] - numbers[windowStart];
        windowStart++;
        
        // Update max
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

---

## Combining Patterns

### Real Problems Use Multiple Patterns

**Example:** "Find the average price of expensive items"

**Patterns used:**
1. **Filter** - Keep only expensive items
2. **Transformation** - Extract prices
3. **Accumulator** - Sum the prices
4. **Calculate** - Divide by count

**Solution:**
```javascript
function averageExpensivePrice(items, minPrice) {
    // Pattern 1: Filter
    let expensive = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > minPrice) {
            expensive.push(items[i]);
        }
    }
    
    // Pattern 2: Accumulator (sum prices)
    let total = 0;
    for (let i = 0; i < expensive.length; i++) {
        total += expensive[i].price;
    }
    
    // Calculate average
    return total / expensive.length;
}
```

---

## Pattern Recognition Practice

### Exercise 1

**Problem:** "Count how many numbers are greater than 10"

**Pattern:** ?
- Accumulator (counting)
- Filter (but we're counting, not filtering)

**Solution:**
```javascript
function countGreaterThan10(numbers) {
    let count = 0;  // Accumulator
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {  // Condition
            count++;  // Accumulate
        }
    }
    
    return count;
}
```

### Exercise 2

**Problem:** "Get array of item names from array of items"

**Pattern:** ?
- Transformation (extracting property)

**Solution:**
```javascript
function getItemNames(items) {
    let names = [];
    
    for (let i = 0; i < items.length; i++) {
        names.push(items[i].name);  // Transform
    }
    
    return names;
}
```

---

## Summary

**Common Patterns:**
1. **Accumulator** - Build up a value
2. **Find Max/Min** - Find best/worst
3. **Filter** - Keep matching items
4. **Transform** - Convert each item
5. **Linear Search** - Find an item
6. **Two-Pointer** - Use two indices
7. **Sliding Window** - Maintain a window

**Key Points:**
- Recognize the pattern
- Apply the structure
- Adapt for your problem
- Combine patterns when needed

**Next:** Practice recognizing and applying these patterns!

---

## Quick Reference

**Accumulator:**
```
SET accumulator = initialValue
FOR EACH item: accumulator += process(item)
RETURN accumulator
```

**Find Max:**
```
SET max = firstItem
FOR EACH item: IF item > max THEN max = item
RETURN max
```

**Filter:**
```
SET result = []
FOR EACH item: IF condition THEN ADD item TO result
RETURN result
```

**Transform:**
```
SET result = []
FOR EACH item: ADD transform(item) TO result
RETURN result
```

**Linear Search:**
```
FOR EACH item: IF item == target THEN RETURN item
RETURN not found
```

