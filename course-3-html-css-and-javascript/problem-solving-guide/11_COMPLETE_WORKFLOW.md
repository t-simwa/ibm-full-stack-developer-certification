# Complete Workflow Examples
## See the Full Problem-Solving Process from Start to Finish

---

## What This Section Shows

This section demonstrates the **complete problem-solving workflow** from understanding a problem to having a working, tested solution. You'll see:

- Every step of the process
- Real problems solved completely
- How all the concepts work together
- Multiple examples with different complexities

---

## Example 1: Calculate Total Sales (Complete Walkthrough)

### The Problem

"You are working for an online store. Your task is to write a JavaScript code snippet that calculates the total sales amount for a given set of sales transactions."

### Step 1: UNDERSTAND the Problem

#### 1.1: Read Carefully

**Reading 1:** General sense
- Topic: Online store, sales calculations
- Task: Calculate total sales amount
- Context: Sales transactions

**Reading 2:** Key details
- Input: A set of sales transactions (likely an array)
- Output: Total sales amount (a number)
- Process: Need to calculate something from transactions

**Reading 3:** Edge cases
- What if no transactions? (empty array)
- What if zero quantity?
- What if zero price?

#### 1.2: Identify Key Information

**Input:**
- Sales transactions
- Format: Likely array of objects
- Properties: Each transaction probably has item, price, quantity

**Output:**
- Total sales amount
- Format: A number (like 27.50)

**Process:**
- For each transaction: multiply price × quantity
- Add all those results together

#### 1.3: Create Examples

**Example 1: Simple**
```
Input:
[
    {item: "apple", price: 1.00, quantity: 10}
]

Process:
- Transaction 1: 1.00 × 10 = 10.00
- Total: 10.00

Output: 10.00
```

**Example 2: Multiple Items**
```
Input:
[
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
]

Process:
- Transaction 1: 1.00 × 10 = 10.00
- Transaction 2: 0.50 × 20 = 10.00
- Transaction 3: 0.25 × 30 = 7.50
- Total: 10.00 + 10.00 + 7.50 = 27.50

Output: 27.50
```

#### 1.4: Identify Edge Cases

- Empty array → return 0
- Zero quantity → 0 × price = 0 (should work)
- Zero price → quantity × 0 = 0 (should work)

#### 1.5: Restate in Own Words

"I have a list of sales. Each sale has a price and a quantity. I need to multiply price times quantity for each sale, then add up all those results to get the total money made from all sales."

**✓ Understanding complete!**

---

### Step 2: BREAK DOWN the Problem

#### 2.1: High-Level Steps

1. Get the sales data
2. For each sale, calculate: price × quantity
3. Add all the results together
4. Return the total

#### 2.2: More Detailed Steps

**Step 1: Store the sales data**
- We need a way to represent multiple transactions
- Each transaction needs: item name, price, quantity

**Step 2: Create a function to calculate total**
- Function name: `calculateTotalSales`
- Input: array of sales
- Output: total amount (number)

**Step 3: Inside the function:**
- Start with total = 0
- Loop through each sale
- For each sale: calculate price × quantity
- Add that to the total
- Return the total

**Step 4: Test the function**
- Call it with sample data
- Display the result

#### 2.3: Visual Breakdown

```
Calculate Total Sales
│
├── Step 1: Get Sales Data
│   └── (Input - already have it)
│
├── Step 2: Calculate Each Sale's Total
│   ├── 2.1: Loop through sales
│   ├── 2.2: Get price and quantity
│   └── 2.3: Multiply price × quantity
│
├── Step 3: Sum All Totals
│   ├── 3.1: Initialize total = 0
│   └── 3.2: Add each sale total to running total
│
└── Step 4: Return Result
    └── Return the final total
```

**✓ Breaking down complete!**

---

### Step 3: PLAN the Solution

#### 3.1: Choose Data Structures

**Input data structure:**
- Array of objects
- Each object: {item: string, price: number, quantity: number}

**Working variables:**
- `totalSales` (number) - to accumulate the sum
- `i` (number) - loop index

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
    SET totalSales = 0
    
    // Process each sale
    FOR EACH sale IN sales:
        // Calculate this sale's total
        SET itemTotal = sale.price × sale.quantity
        
        // Add to running total
        totalSales = totalSales + itemTotal
    
    // Return final total
    RETURN totalSales
END FUNCTION

SET sales = [array of sales data]
SET result = CALL calculateTotalSales(sales)
DISPLAY result
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

#### 3.5: Think About Flow

**Execution flow:**
1. Function called with sales array
2. Initialize totalSales = 0
3. Enter loop
4. For each sale:
   - Calculate itemTotal
   - Add to totalSales
5. Exit loop
6. Return totalSales

**✓ Planning complete!**

---

### Step 4: CODE the Solution

#### 4.1: Start with Simplest Version

```javascript
function calculateTotalSales(sales) {
    return 0;  // Just return something
}

// Test
console.log(calculateTotalSales([])); // Should be 0
```

**✓ Function structure works!**

#### 4.2: Add Variable Initialization

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;  // Initialize accumulator
    console.log("Initial total:", totalSales);  // Test: Should be 0
    return totalSales;
}

// Test
console.log(calculateTotalSales([])); // Should be 0
```

**✓ Variable initialized correctly!**

#### 4.3: Add Loop Structure

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        console.log("Processing sale", i);  // Test: See loop working
    }
    
    return totalSales;
}

// Test
let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];
calculateTotalSales(testSales);
// Should print: "Processing sale 0" and "Processing sale 1"
```

**✓ Loop iterates through all sales!**

#### 4.4: Access Sale Data

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        let currentSale = sales[i];  // Get current sale
        console.log("Current sale:", currentSale);  // Test: See the sale
    }
    
    return totalSales;
}
```

**✓ Can access each sale!**

#### 4.5: Calculate Item Total

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        let currentSale = sales[i];
        let itemTotal = currentSale.price * currentSale.quantity;  // Calculate
        console.log("Item total:", itemTotal);  // Test: See calculation
    }
    
    return totalSales;
}
```

**✓ Calculation works correctly!**

#### 4.6: Add to Running Total

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        let currentSale = sales[i];
        let itemTotal = currentSale.price * currentSale.quantity;
        totalSales += itemTotal;  // Add to total
        console.log("Running total:", totalSales);  // Test: See accumulation
    }
    
    return totalSales;
}
```

**✓ Accumulation works!**

#### 4.7: Final Version (Remove Test Code)

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    
    return totalSales;
}
```

**✓ Code complete!**

---

### Step 5: TEST the Solution

#### 5.1: Test with Provided Example

```javascript
let sales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
];

let result = calculateTotalSales(sales);
console.log("Result:", result);        // 27.5
console.log("Expected: 27.5");
console.log("Test:", result === 27.5 ? "PASS" : "FAIL");  // PASS ✓
```

#### 5.2: Test Edge Cases

```javascript
// Test 1: Empty array
console.log("Test 1 - Empty array:");
let result1 = calculateTotalSales([]);
console.log("Result:", result1);  // 0
console.log("Expected: 0");
console.log("Pass?", result1 === 0);  // true ✓

// Test 2: Single item
console.log("\nTest 2 - Single item:");
let result2 = calculateTotalSales([
    {item: "apple", price: 1.00, quantity: 10}
]);
console.log("Result:", result2);  // 10
console.log("Expected: 10");
console.log("Pass?", result2 === 10);  // true ✓

// Test 3: Zero quantity
console.log("\nTest 3 - Zero quantity:");
let result3 = calculateTotalSales([
    {item: "apple", price: 1.00, quantity: 0}
]);
console.log("Result:", result3);  // 0
console.log("Expected: 0");
console.log("Pass?", result3 === 0);  // true ✓
```

**✓ All tests pass!**

---

### Step 6: DEBUG (If Needed)

**In this case, no debugging needed - all tests pass!**

But if there were issues, we would:
1. Add console.log statements
2. Check variable values
3. Trace through the code
4. Fix the problem
5. Test again

---

### Step 7: REFINE the Code

#### 7.1: Clean Up

The code is already clean, but we could:
- Add comments for clarity
- Use more descriptive variable names (already good)
- Consider error handling

#### 7.2: Final Refined Version

```javascript
/**
 * Calculates the total sales amount for a set of sales transactions
 * @param {Array} sales - Array of sales objects with price and quantity
 * @returns {number} Total sales amount
 */
function calculateTotalSales(sales) {
    let totalSales = 0;
    
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    
    return totalSales;
}

// Usage
let sales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
];

console.log("Total sales amount: $" + calculateTotalSales(sales));
```

**✓ Solution complete and refined!**

---

## Example 2: Track Product Stock Levels (Complete Walkthrough)

### The Problem

"Write a function that checks stock levels for products and displays whether each product is in stock or out of stock."

### Step 1: UNDERSTAND

#### Input:
- Array of products
- Each product has: product name, stock (quantity)

#### Output:
- Console messages for each product
- "Product is In Stock" or "Product is Out of Stock"

#### Process:
- Loop through products
- Check if stock > 0
- Display appropriate message

#### Examples:
```
Input:
[
    {product: "Laptop", stock: 5},
    {product: "Headphones", stock: 0}
]

Output:
"Laptop is In Stock."
"Headphones is Out of Stock."
```

**✓ Understanding complete!**

---

### Step 2: BREAK DOWN

1. Loop through each product
2. Check if stock > 0
3. If yes: display "In Stock"
4. If no: display "Out of Stock"

**✓ Breaking down complete!**

---

### Step 3: PLAN

**Data structure:** Array of objects
**Algorithm:** Iteration with conditional
**Pseudocode:**
```
FUNCTION checkStockLevels(products):
    FOR EACH product IN products:
        IF product.stock > 0:
            DISPLAY product.product + " is In Stock."
        ELSE:
            DISPLAY product.product + " is Out of Stock."
```

**✓ Planning complete!**

---

### Step 4: CODE

#### Step 4.1: Function Structure

```javascript
function checkStockLevels(products) {
    // Will implement
}
```

#### Step 4.2: Add Loop

```javascript
function checkStockLevels(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Processing product", i);
    }
}
```

#### Step 4.3: Add Conditional

```javascript
function checkStockLevels(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            console.log(`${products[i].product} is In Stock.`);
        } else {
            console.log(`${products[i].product} is Out of Stock.`);
        }
    }
}
```

**✓ Code complete!**

---

### Step 5: TEST

```javascript
const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];

checkStockLevels(products);

// Expected output:
// "Laptop is In Stock."
// "Headphones is Out of Stock."
// "Smartphone is In Stock."
```

**✓ All tests pass!**

---

## Example 3: Generate Order Receipt (Complete Walkthrough)

### The Problem

"Write a function that generates a formatted order receipt showing each item, its price, quantity, and total, plus a grand total."

### Step 1: UNDERSTAND

#### Input:
- Array of orders
- Each order has: item, price, quantity

#### Output:
- Formatted receipt with:
  - Header
  - Each item line: "item - $price x quantity = $total"
  - Separator lines
  - Grand total

#### Process:
1. Print header
2. Loop through orders
3. Calculate item total for each
4. Print item line
5. Accumulate grand total
6. Print grand total

**✓ Understanding complete!**

---

### Step 2: BREAK DOWN

1. Print header and separator
2. Initialize grand total = 0
3. For each order:
   - Calculate item total (price × quantity)
   - Add to grand total
   - Print formatted line
4. Print separator
5. Print grand total
6. Print separator

**✓ Breaking down complete!**

---

### Step 3: PLAN

**Algorithm:** Accumulation + formatting
**Pseudocode:**
```
FUNCTION generateOrderReceipt(orders):
    PRINT "Order Receipt"
    PRINT separator
    SET grandTotal = 0
    
    FOR EACH order IN orders:
        SET itemTotal = order.price × order.quantity
        grandTotal = grandTotal + itemTotal
        PRINT order.item + " - $" + order.price + " x " + order.quantity + " = $" + itemTotal
    
    PRINT separator
    PRINT "Grand Total: $" + grandTotal
    PRINT separator
```

**✓ Planning complete!**

---

### Step 4: CODE

```javascript
function generateOrderReceipt(orders) {
    let grandTotal = 0;
    console.log("Order Receipt");
    console.log("--------------------------------");
    
    for (let i = 0; i < orders.length; i++) {
        let itemTotal = orders[i].price * orders[i].quantity;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - $${orders[i].price.toFixed(2)} x ${orders[i].quantity} = $${itemTotal.toFixed(2)}`);
    }
    
    console.log("--------------------------------");
    console.log(`Grand Total: $${grandTotal.toFixed(2)}`);
    console.log("--------------------------------");
}
```

**✓ Code complete!**

---

### Step 5: TEST

```javascript
var orders = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
];

generateOrderReceipt(orders);

// Expected output:
// Order Receipt
// --------------------------------
// apple - $1.00 x 10 = $10.00
// banana - $0.50 x 20 = $10.00
// cherry - $0.25 x 30 = $7.50
// --------------------------------
// Grand Total: $27.50
// --------------------------------
```

**✓ All tests pass!**

---

## Key Takeaways from Complete Workflows

### What We Learned

1. **Always follow the process** - Don't skip steps
2. **Start simple** - Build up complexity gradually
3. **Test frequently** - After each addition
4. **Break down thoroughly** - Small pieces are manageable
5. **Plan before coding** - Saves time and prevents errors

### The Process Works!

Every problem, regardless of complexity, follows the same process:
1. Understand
2. Break down
3. Plan
4. Code
5. Test
6. Debug
7. Refine

### Practice Makes Perfect

The more you practice this process, the more natural it becomes. Soon, you'll be able to:
- Recognize patterns quickly
- Break down problems efficiently
- Write code confidently
- Debug systematically

---

## Summary

**Complete workflow examples show:**
- Every step of the process
- How concepts work together
- Real problems solved completely
- The value of following the process

**Remember:**
- Follow the process every time
- Don't skip steps
- Practice regularly
- Learn from each problem

**You now have everything you need to solve programming problems!**

---

## Quick Reference: The Complete Process

**For every problem:**

1. **UNDERSTAND**
   - Read carefully
   - Identify inputs/outputs/process
   - Create examples
   - Identify edge cases

2. **BREAK DOWN**
   - Split into smaller pieces
   - Identify sub-problems
   - Think about data transformations

3. **PLAN**
   - Choose data structures
   - Identify algorithms
   - Write pseudocode
   - Consider edge cases

4. **CODE**
   - Start simple
   - Add incrementally
   - Test as you go

5. **TEST**
   - Test with examples
   - Test edge cases
   - Verify output

6. **DEBUG**
   - Find the problem
   - Fix systematically
   - Test again

7. **REFINE**
   - Clean up code
   - Improve readability
   - Add comments

**Follow this process, and you'll solve any programming problem!** 🚀

