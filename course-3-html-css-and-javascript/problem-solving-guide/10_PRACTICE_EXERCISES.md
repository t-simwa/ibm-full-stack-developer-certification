# Practice Exercises
## Apply What You've Learned with Real Problems

---

## How to Use This Section

### Purpose

This section provides practice problems to help you:
- Apply the problem-solving process
- Recognize patterns
- Build confidence
- Improve your skills

### How to Practice

1. **Read the problem carefully**
2. **Follow the process:**
   - Understand the problem
   - Break it down
   - Plan your solution
   - Write code step by step
   - Test your solution
3. **Try to solve it yourself first**
4. **Compare with the solution**
5. **Learn from differences**

### Difficulty Levels

- **Beginner** - Basic concepts, simple logic
- **Intermediate** - Multiple steps, some complexity
- **Advanced** - Complex logic, multiple patterns

---

## Exercise 1: Sum of Numbers (Beginner)

### Problem Statement

Write a function that takes an array of numbers and returns their sum.

### Example

```javascript
sum([1, 2, 3, 4])  // Should return 10
sum([10, 20, 30])  // Should return 60
sum([])            // Should return 0
```

### Step-by-Step Solution

#### Step 1: Understand the Problem

**Input:** Array of numbers
**Output:** Single number (sum)
**Process:** Add all numbers together

**Edge cases:**
- Empty array → return 0
- Single number → return that number
- Negative numbers → should work

#### Step 2: Break Down

1. Initialize total = 0
2. Loop through each number
3. Add number to total
4. Return total

#### Step 3: Plan

**Data structure:** Array
**Algorithm:** Accumulation pattern
**Pseudocode:**
```
FUNCTION sum(numbers):
    SET total = 0
    FOR EACH number IN numbers:
        total = total + number
    RETURN total
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function sum(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    return total;
}
```

**Python:**
```python
def sum(numbers):
    total = 0
    
    for number in numbers:
        total += number
    
    return total
```

#### Step 5: Test

```javascript
console.log(sum([1, 2, 3, 4]));    // 10 ✓
console.log(sum([10, 20, 30]));    // 60 ✓
console.log(sum([]));              // 0 ✓
console.log(sum([5]));             // 5 ✓
console.log(sum([-1, 2, -3]));     // -2 ✓
```

---

## Exercise 2: Find Maximum (Beginner)

### Problem Statement

Write a function that finds the largest number in an array.

### Example

```javascript
findMax([3, 7, 2, 9, 1])  // Should return 9
findMax([-5, -2, -10])    // Should return -2
findMax([5])              // Should return 5
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of numbers
**Output:** Largest number
**Process:** Compare each number, keep track of largest

**Edge cases:**
- Single number → return that number
- All negative → return least negative (largest)
- All same → return that number

#### Step 2: Break Down

1. Start with first number as max
2. Compare with each remaining number
3. If larger, update max
4. Return max

#### Step 3: Plan

**Algorithm:** Find Maximum pattern
**Pseudocode:**
```
FUNCTION findMax(numbers):
    SET max = numbers[0]
    FOR EACH number IN numbers[1 to end]:
        IF number > max:
            max = number
    RETURN max
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function findMax(numbers) {
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
}
```

**Python:**
```python
def find_max(numbers):
    max_num = numbers[0]
    
    for number in numbers[1:]:
        if number > max_num:
            max_num = number
    
    return max_num
```

#### Step 5: Test

```javascript
console.log(findMax([3, 7, 2, 9, 1]));  // 9 ✓
console.log(findMax([-5, -2, -10]));    // -2 ✓
console.log(findMax([5]));              // 5 ✓
console.log(findMax([5, 5, 5]));        // 5 ✓
```

---

## Exercise 3: Count Even Numbers (Beginner)

### Problem Statement

Write a function that counts how many even numbers are in an array.

### Example

```javascript
countEven([1, 2, 3, 4, 5, 6])  // Should return 3
countEven([1, 3, 5])           // Should return 0
countEven([2, 4, 6, 8])        // Should return 4
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of numbers
**Output:** Count of even numbers
**Process:** Check each number, count if even

**What is even?** Number divisible by 2 (remainder is 0)

#### Step 2: Break Down

1. Initialize count = 0
2. Loop through each number
3. Check if number is even (number % 2 === 0)
4. If even, increment count
5. Return count

#### Step 3: Plan

**Algorithm:** Accumulation (counting) pattern
**Pseudocode:**
```
FUNCTION countEven(numbers):
    SET count = 0
    FOR EACH number IN numbers:
        IF number % 2 == 0:
            count = count + 1
    RETURN count
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function countEven(numbers) {
    let count = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    
    return count;
}
```

**Python:**
```python
def count_even(numbers):
    count = 0
    
    for number in numbers:
        if number % 2 == 0:
            count += 1
    
    return count
```

#### Step 5: Test

```javascript
console.log(countEven([1, 2, 3, 4, 5, 6]));  // 3 ✓
console.log(countEven([1, 3, 5]));           // 0 ✓
console.log(countEven([2, 4, 6, 8]));        // 4 ✓
console.log(countEven([]));                  // 0 ✓
```

---

## Exercise 4: Calculate Average (Beginner)

### Problem Statement

Write a function that calculates the average of numbers in an array.

### Example

```javascript
average([10, 20, 30])  // Should return 20
average([5, 10, 15, 20])  // Should return 12.5
average([100])         // Should return 100
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of numbers
**Output:** Average (sum / count)
**Process:** Sum all numbers, divide by count

**Edge cases:**
- Empty array → handle (return 0 or error?)
- Single number → return that number

#### Step 2: Break Down

1. Sum all numbers (accumulation)
2. Get count (array length)
3. Calculate: sum / count
4. Return average

#### Step 3: Plan

**Algorithm:** Accumulation + division
**Pseudocode:**
```
FUNCTION average(numbers):
    SET sum = 0
    FOR EACH number IN numbers:
        sum = sum + number
    SET avg = sum / numbers.length
    RETURN avg
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function average(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}
```

**Python:**
```python
def average(numbers):
    sum_total = 0
    
    for number in numbers:
        sum_total += number
    
    return sum_total / len(numbers)
```

#### Step 5: Test

```javascript
console.log(average([10, 20, 30]));      // 20 ✓
console.log(average([5, 10, 15, 20]));   // 12.5 ✓
console.log(average([100]));             // 100 ✓
```

---

## Exercise 5: Filter Expensive Items (Intermediate)

### Problem Statement

Write a function that takes an array of items (each with a price) and a minimum price, and returns only items that cost more than the minimum price.

### Example

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "laptop", price: 1000.00},
    {item: "banana", price: 0.50}
];

filterExpensive(items, 10)  
// Should return [{item: "laptop", price: 1000.00}]
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** 
- Array of objects (each has item and price)
- Minimum price (number)

**Output:** Array of objects (filtered)

**Process:** Keep only items where price > minPrice

#### Step 2: Break Down

1. Create empty result array
2. Loop through each item
3. Check if item.price > minPrice
4. If true, add to result
5. Return result

#### Step 3: Plan

**Data structure:** Array of objects
**Algorithm:** Filter pattern
**Pseudocode:**
```
FUNCTION filterExpensive(items, minPrice):
    SET result = []
    FOR EACH item IN items:
        IF item.price > minPrice:
            ADD item TO result
    RETURN result
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function filterExpensive(items, minPrice) {
    let result = [];
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > minPrice) {
            result.push(items[i]);
        }
    }
    
    return result;
}
```

**Python:**
```python
def filter_expensive(items, min_price):
    result = []
    
    for item in items:
        if item["price"] > min_price:
            result.append(item)
    
    return result
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "laptop", price: 1000.00},
    {item: "banana", price: 0.50}
];

console.log(filterExpensive(items, 10));
// [{item: "laptop", price: 1000.00}] ✓
```

---

## Exercise 6: Extract Prices (Intermediate)

### Problem Statement

Write a function that takes an array of items and returns an array of just their prices.

### Example

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "banana", price: 0.50},
    {item: "cherry", price: 0.25}
];

getPrices(items)  // Should return [1.00, 0.50, 0.25]
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of objects
**Output:** Array of numbers (prices)
**Process:** Extract price property from each object

#### Step 2: Break Down

1. Create empty result array
2. Loop through each item
3. Get item.price
4. Add to result
5. Return result

#### Step 3: Plan

**Algorithm:** Transformation pattern
**Pseudocode:**
```
FUNCTION getPrices(items):
    SET prices = []
    FOR EACH item IN items:
        ADD item.price TO prices
    RETURN prices
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function getPrices(items) {
    let prices = [];
    
    for (let i = 0; i < items.length; i++) {
        prices.push(items[i].price);
    }
    
    return prices;
}
```

**Python:**
```python
def get_prices(items):
    prices = []
    
    for item in items:
        prices.append(item["price"])
    
    return prices
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "banana", price: 0.50},
    {item: "cherry", price: 0.25}
];

console.log(getPrices(items));  // [1.00, 0.50, 0.25] ✓
```

---

## Exercise 7: Find Item by Name (Intermediate)

### Problem Statement

Write a function that takes an array of items and a name, and returns the item with that name, or null if not found.

### Example

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "banana", price: 0.50},
    {item: "cherry", price: 0.25}
];

findItem(items, "banana")  
// Should return {item: "banana", price: 0.50}

findItem(items, "orange")  
// Should return null
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** 
- Array of objects
- Item name (string)

**Output:** Object or null

**Process:** Search for item with matching name

#### Step 2: Break Down

1. Loop through each item
2. Check if item.item === name
3. If match, return that item
4. If loop ends, return null

#### Step 3: Plan

**Algorithm:** Linear search pattern
**Pseudocode:**
```
FUNCTION findItem(items, name):
    FOR EACH item IN items:
        IF item.item == name:
            RETURN item
    RETURN null
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function findItem(items, name) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].item === name) {
            return items[i];
        }
    }
    return null;
}
```

**Python:**
```python
def find_item(items, name):
    for item in items:
        if item["item"] == name:
            return item
    return None
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "banana", price: 0.50}
];

console.log(findItem(items, "banana"));  // {item: "banana", price: 0.50} ✓
console.log(findItem(items, "orange"));  // null ✓
```

---

## Exercise 8: Calculate Total with Discount (Intermediate)

### Problem Statement

Write a function that calculates the total price of items, applying a discount percentage.

### Example

```javascript
let items = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

calculateTotalWithDiscount(items, 10)  
// 10% discount on total of 20 = 18
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:**
- Array of items (price, quantity)
- Discount percentage

**Output:** Total after discount

**Process:**
1. Calculate total (price × quantity for each)
2. Apply discount
3. Return discounted total

#### Step 2: Break Down

1. Calculate total (accumulation)
2. Calculate discount amount: total × (discount / 100)
3. Calculate final: total - discount
4. Return final

#### Step 3: Plan

**Algorithms:** Accumulation + calculation
**Pseudocode:**
```
FUNCTION calculateTotalWithDiscount(items, discountPercent):
    SET total = 0
    FOR EACH item IN items:
        total = total + (item.price × item.quantity)
    SET discount = total × (discountPercent / 100)
    SET final = total - discount
    RETURN final
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function calculateTotalWithDiscount(items, discountPercent) {
    // Step 1: Calculate total
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    
    // Step 2: Calculate discount
    let discount = total * (discountPercent / 100);
    
    // Step 3: Apply discount
    let final = total - discount;
    
    return final;
}
```

**Python:**
```python
def calculate_total_with_discount(items, discount_percent):
    # Step 1: Calculate total
    total = 0
    for item in items:
        total += item["price"] * item["quantity"]
    
    # Step 2: Calculate discount
    discount = total * (discount_percent / 100)
    
    # Step 3: Apply discount
    final = total - discount
    
    return final
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

console.log(calculateTotalWithDiscount(items, 10));  // 18 ✓
// Total: 20, Discount: 2, Final: 18
```

---

## Exercise 9: Count Items by Category (Advanced)

### Problem Statement

Write a function that counts how many items are in each category.

### Example

```javascript
let items = [
    {item: "apple", category: "fruit"},
    {item: "banana", category: "fruit"},
    {item: "carrot", category: "vegetable"},
    {item: "lettuce", category: "vegetable"},
    {item: "lettuce", category: "vegetable"}
];

countByCategory(items)
// Should return {fruit: 2, vegetable: 3}
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of objects with category
**Output:** Object with category counts
**Process:** Count items per category

#### Step 2: Break Down

1. Create empty result object
2. Loop through each item
3. Get item.category
4. If category exists in result, increment
5. If not, set to 1
6. Return result

#### Step 3: Plan

**Data structure:** Object (for counts)
**Algorithm:** Accumulation with grouping
**Pseudocode:**
```
FUNCTION countByCategory(items):
    SET counts = {}
    FOR EACH item IN items:
        IF item.category IN counts:
            counts[item.category] = counts[item.category] + 1
        ELSE:
            counts[item.category] = 1
    RETURN counts
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function countByCategory(items) {
    let counts = {};
    
    for (let i = 0; i < items.length; i++) {
        let category = items[i].category;
        
        if (category in counts) {
            counts[category]++;
        } else {
            counts[category] = 1;
        }
    }
    
    return counts;
}
```

**Python:**
```python
def count_by_category(items):
    counts = {}
    
    for item in items:
        category = item["category"]
        
        if category in counts:
            counts[category] += 1
        else:
            counts[category] = 1
    
    return counts
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", category: "fruit"},
    {item: "banana", category: "fruit"},
    {item: "carrot", category: "vegetable"}
];

console.log(countByCategory(items));
// {fruit: 2, vegetable: 1} ✓
```

---

## Exercise 10: Find Most Expensive Item (Advanced)

### Problem Statement

Write a function that finds the most expensive item in an array.

### Example

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "laptop", price: 1000.00},
    {item: "banana", price: 0.50}
];

findMostExpensive(items)
// Should return {item: "laptop", price: 1000.00}
```

### Step-by-Step Solution

#### Step 1: Understand

**Input:** Array of objects with price
**Output:** Object (most expensive item)
**Process:** Find item with highest price

#### Step 2: Break Down

1. Start with first item as most expensive
2. Loop through remaining items
3. Compare price with current most expensive
4. If higher, update most expensive
5. Return most expensive item

#### Step 3: Plan

**Algorithm:** Find maximum pattern (on price property)
**Pseudocode:**
```
FUNCTION findMostExpensive(items):
    SET mostExpensive = items[0]
    FOR EACH item IN items[1 to end]:
        IF item.price > mostExpensive.price:
            mostExpensive = item
    RETURN mostExpensive
```

#### Step 4: Write Code

**JavaScript:**
```javascript
function findMostExpensive(items) {
    let mostExpensive = items[0];
    
    for (let i = 1; i < items.length; i++) {
        if (items[i].price > mostExpensive.price) {
            mostExpensive = items[i];
        }
    }
    
    return mostExpensive;
}
```

**Python:**
```python
def find_most_expensive(items):
    most_expensive = items[0]
    
    for item in items[1:]:
        if item["price"] > most_expensive["price"]:
            most_expensive = item
    
    return most_expensive
```

#### Step 5: Test

```javascript
let items = [
    {item: "apple", price: 1.00},
    {item: "laptop", price: 1000.00},
    {item: "banana", price: 0.50}
];

console.log(findMostExpensive(items));
// {item: "laptop", price: 1000.00} ✓
```

---

## Practice Tips

### Tip 1: Start Simple

- Begin with the simplest version
- Add complexity gradually
- Test each step

### Tip 2: Use the Process

- Always follow: Understand → Break Down → Plan → Code → Test
- Don't skip steps
- Take your time

### Tip 3: Test Thoroughly

- Test with provided examples
- Test edge cases
- Test with different inputs

### Tip 4: Compare Solutions

- After solving, look at the solution
- Understand differences
- Learn from them

### Tip 5: Practice Regularly

- Solve problems daily
- Start with easy, progress to hard
- Review previous problems

---

## Additional Practice Problems

### Beginner Level

1. **Find Minimum** - Find smallest number in array
2. **Count Odd Numbers** - Count odd numbers
3. **Double Each Number** - Create array with each number doubled
4. **Check if Contains** - Check if array contains a value
5. **Get First Item** - Return first item in array

### Intermediate Level

1. **Calculate Total Weight** - Sum weight × quantity for items
2. **Find Items by Price Range** - Filter items within price range
3. **Sort by Price** - Sort items by price (ascending)
4. **Get Item Names** - Extract all item names
5. **Calculate Tax** - Add tax to total

### Advanced Level

1. **Group by Category** - Group items by category
2. **Find Average Price** - Calculate average price of items
3. **Get Unique Categories** - Find all unique categories
4. **Calculate Total per Category** - Sum prices by category
5. **Find Cheapest in Category** - Find cheapest item in each category

---

## Summary

**Practice is essential for improvement!**

- Start with beginner problems
- Progress to intermediate
- Challenge yourself with advanced
- Use the problem-solving process
- Test thoroughly
- Learn from solutions

**Remember:** Every expert was once a beginner. Keep practicing!

---

## Quick Reference

**Common Patterns:**
- Sum/Count → Accumulation
- Find Max/Min → Comparison
- Filter → Condition check
- Transform → Extract/Convert
- Search → Linear search

**Always:**
- Understand first
- Break down
- Plan
- Code step by step
- Test

