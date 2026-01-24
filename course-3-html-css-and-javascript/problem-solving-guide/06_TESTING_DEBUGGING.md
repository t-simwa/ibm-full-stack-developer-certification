# Testing and Debugging
## Step 5 & 6: Verify Your Solution Works and Fix Problems

---

## Why Testing and Debugging Matter

### The Reality of Programming

**Fact:** Code rarely works perfectly the first time.

**Why:**
- We make mistakes
- We misunderstand requirements
- We miss edge cases
- We have typos

**Solution:** Test thoroughly and debug systematically.

### What is Testing?

**Testing** means running your code with different inputs to verify it produces the correct outputs.

**Why test:**
- Catch bugs early
- Verify your solution works
- Build confidence
- Prevent future problems

### What is Debugging?

**Debugging** means finding and fixing problems in your code.

**Why debug:**
- Fix errors
- Understand what went wrong
- Learn from mistakes
- Improve your code

---

## Understanding Errors

### Types of Errors

#### 1. Syntax Errors

**What:** Code that doesn't follow the language's rules.

**When:** Before code runs (caught by the compiler/interpreter).

**Example:**
```javascript
// Missing closing brace
function calculateTotal(sales) {
    let total = 0;
    // Missing }
```

**Error message:**
```
SyntaxError: Unexpected end of input
```

**How to fix:**
- Check for missing brackets, braces, parentheses
- Check for missing semicolons (in some languages)
- Check for typos in keywords

#### 2. Runtime Errors

**What:** Errors that occur while code is running.

**When:** During execution.

**Example:**
```javascript
let numbers = [1, 2, 3];
console.log(numbers[10]);  // Index doesn't exist
```

**Error message:**
```
TypeError: Cannot read property of undefined
```

**How to fix:**
- Check array bounds
- Check if variables are defined
- Check if objects have the properties you're accessing

#### 3. Logic Errors

**What:** Code runs but produces wrong results.

**When:** Code executes but logic is incorrect.

**Example:**
```javascript
function calculateTotal(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].price;  // Forgot to multiply by quantity!
    }
    return total;
}
```

**Error message:**
- None! Code runs fine, but answer is wrong.

**How to fix:**
- Test with known inputs/outputs
- Trace through the logic
- Add debug statements
- Check your calculations

---

## Testing Strategies

### Strategy 1: Manual Testing

**What:** Run your code manually and check the output.

**When:** Always! For every function you write.

**How:**
1. Call your function with test data
2. Check the output
3. Verify it matches expected result

**Example: Total Sales Function**

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}

// Manual testing
let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

let result = calculateTotalSales(testSales);
console.log("Result:", result);
console.log("Expected: 20");
console.log("Match?", result === 20);
```

**Output:**
```
Result: 20
Expected: 20
Match? true
```

**✓ Test passed!**

### Strategy 2: Test with Examples

**What:** Use the examples from the problem statement.

**When:** First thing after writing code.

**How:**
1. Use the provided examples
2. Calculate expected output manually
3. Run your code
4. Compare results

**Example: Problem Says**

"Calculate total for: 10 apples at $1.00, 20 bananas at $0.50"

**Expected calculation:**
- Apples: 10 × $1.00 = $10.00
- Bananas: 20 × $0.50 = $10.00
- Total: $20.00

**Test:**
```javascript
let exampleSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

let result = calculateTotalSales(exampleSales);
console.log("Result:", result);
console.log("Expected: 20");
console.log("Test:", result === 20 ? "PASS" : "FAIL");
```

### Strategy 3: Test Edge Cases

**What:** Test special situations that might break your code.

**When:** After basic tests pass.

**Common edge cases:**
- Empty input
- Single item
- Zero values
- Negative numbers
- Very large numbers
- Very small numbers

**Example: Testing Edge Cases**

```javascript
// Test 1: Empty array
console.log("Test 1 - Empty array:");
let result1 = calculateTotalSales([]);
console.log("Result:", result1);
console.log("Expected: 0");
console.log("Pass?", result1 === 0);

// Test 2: Single item
console.log("\nTest 2 - Single item:");
let result2 = calculateTotalSales([
    {item: "apple", price: 1.00, quantity: 10}
]);
console.log("Result:", result2);
console.log("Expected: 10");
console.log("Pass?", result2 === 10);

// Test 3: Zero quantity
console.log("\nTest 3 - Zero quantity:");
let result3 = calculateTotalSales([
    {item: "apple", price: 1.00, quantity: 0}
]);
console.log("Result:", result3);
console.log("Expected: 0");
console.log("Pass?", result3 === 0);

// Test 4: Zero price
console.log("\nTest 4 - Zero price:");
let result4 = calculateTotalSales([
    {item: "freebie", price: 0.00, quantity: 10}
]);
console.log("Result:", result4);
console.log("Expected: 0");
console.log("Pass?", result4 === 0);
```

### Strategy 4: Test with Different Inputs

**What:** Test with various inputs to ensure robustness.

**When:** After edge cases pass.

**How:**
- Try different data
- Try different sizes
- Try different values

**Example:**
```javascript
// Test with different numbers of items
calculateTotalSales([...1 item...]);
calculateTotalSales([...5 items...]);
calculateTotalSales([...100 items...]);

// Test with different prices
calculateTotalSales([...low prices...]);
calculateTotalSales([...high prices...]);
calculateTotalSales([...mixed prices...]);
```

---

## Debugging Techniques

### Technique 1: Add Print Statements (Console.log)

**What:** Print values at different points in your code.

**Why:** See what's happening inside your code.

**How:**
1. Add print statements at key points
2. Run the code
3. Check the output
4. Identify where things go wrong

**Example: Debugging Total Sales**

**Problem:** Function returns wrong value.

**Add debug statements:**
```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    console.log("Starting total:", totalSales);  // Debug: Initial value
    
    for (let i = 0; i < sales.length; i++) {
        console.log("Processing sale", i);  // Debug: Which sale
        console.log("Sale data:", sales[i]);  // Debug: Sale contents
        
        let itemTotal = sales[i].price * sales[i].quantity;
        console.log("Item total:", itemTotal);  // Debug: Calculation
        
        totalSales += itemTotal;
        console.log("Running total:", totalSales);  // Debug: Accumulation
    }
    
    console.log("Final total:", totalSales);  // Debug: Final value
    return totalSales;
}
```

**Run with test data:**
```javascript
let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

calculateTotalSales(testSales);
```

**Output:**
```
Starting total: 0
Processing sale 0
Sale data: {item: 'apple', price: 1, quantity: 10}
Item total: 10
Running total: 10
Processing sale 1
Sale data: {item: 'banana', price: 0.5, quantity: 20}
Item total: 10
Running total: 20
Final total: 20
```

**Now you can see:**
- What values are being used
- What calculations are happening
- Where the problem might be

### Technique 2: Check Variable Values

**What:** Print variable values to see what they contain.

**Why:** Variables might not have the values you expect.

**Example:**
```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    console.log("sales parameter:", sales);  // Check input
    console.log("sales.length:", sales.length);  // Check array length
    
    for (let i = 0; i < sales.length; i++) {
        console.log("i:", i);  // Check loop index
        console.log("sales[i]:", sales[i]);  // Check current sale
        console.log("sales[i].price:", sales[i].price);  // Check price
        console.log("sales[i].quantity:", sales[i].quantity);  // Check quantity
        
        totalSales += sales[i].price * sales[i].quantity;
    }
    
    return totalSales;
}
```

### Technique 3: Trace Through the Code

**What:** Follow the code execution step by step, manually.

**Why:** Understand the flow and find logic errors.

**How:**
1. Start at the beginning
2. Follow each line
3. Track variable values
4. See where it diverges from expected

**Example: Tracing Total Sales**

**Code:**
```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}

let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

calculateTotalSales(testSales);
```

**Tracing:**
```
Line 1: Function called with testSales
Line 2: totalSales = 0
Line 3: Loop starts, i = 0
Line 4: Check: 0 < 2? YES, enter loop
Line 5: totalSales += sales[0].price * sales[0].quantity
        totalSales += 1.00 * 10
        totalSales += 10
        totalSales = 0 + 10 = 10
Line 3: Loop continues, i = 1
Line 4: Check: 1 < 2? YES, enter loop
Line 5: totalSales += sales[1].price * sales[1].quantity
        totalSales += 0.50 * 20
        totalSales += 10
        totalSales = 10 + 10 = 20
Line 3: Loop continues, i = 2
Line 4: Check: 2 < 2? NO, exit loop
Line 6: return totalSales (which is 20)
```

**This shows exactly what happens at each step!**

### Technique 4: Simplify the Problem

**What:** Test with the simplest possible input.

**Why:** Easier to see what's happening.

**Example:**
```javascript
// Instead of testing with complex data:
let complexSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20},
    {item: "cherry", price: 0.25, quantity: 30}
];

// Test with simplest case:
let simpleSales = [
    {item: "apple", price: 1.00, quantity: 1}
];

// Expected: 1.00
// Easier to verify!
```

### Technique 5: Isolate the Problem

**What:** Test parts of your code separately.

**Why:** Find which part is broken.

**Example:**
```javascript
// Instead of testing the whole function:
function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}

// Test parts separately:

// Test 1: Can we access the array?
let testSales = [{item: "apple", price: 1.00, quantity: 10}];
console.log("Array access:", testSales[0]);  // Should work

// Test 2: Can we access properties?
console.log("Price:", testSales[0].price);  // Should be 1.00
console.log("Quantity:", testSales[0].quantity);  // Should be 10

// Test 3: Does multiplication work?
console.log("Calculation:", testSales[0].price * testSales[0].quantity);  // Should be 10

// Test 4: Does the loop work?
for (let i = 0; i < testSales.length; i++) {
    console.log("Loop iteration:", i);  // Should print 0
}

// If all these work, the function should work!
```

---

## Common Bugs and How to Fix Them

### Bug 1: Off-by-One Error

**What:** Using wrong index, usually off by one.

**Example:**
```javascript
// Wrong: Using <= instead of <
for (let i = 0; i <= array.length; i++) {
    // This will try to access array[array.length], which doesn't exist!
}

// Correct:
for (let i = 0; i < array.length; i++) {
    // This stops at the last valid index
}
```

**How to fix:**
- Remember: arrays start at index 0
- Last index is length - 1
- Use `< length`, not `<= length`

### Bug 2: Forgetting to Return

**What:** Function doesn't return a value.

**Example:**
```javascript
// Wrong: No return statement
function calculateTotal(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].price * sales[i].quantity;
    }
    // Missing return!
}

// Correct:
function calculateTotal(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].price * sales[i].quantity;
    }
    return total;  // Return the result!
}
```

**How to fix:**
- Always check: Does your function return something?
- If it should return a value, make sure it does!

### Bug 3: Wrong Variable Name

**What:** Using a variable that doesn't exist or wrong name.

**Example:**
```javascript
// Wrong: Typo in variable name
function calculateTotal(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return total;  // Wrong: should be totalSales!
}

// Correct:
function calculateTotal(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;  // Correct variable name!
}
```

**How to fix:**
- Check variable names carefully
- Use consistent naming
- Let your editor help (autocomplete)

### Bug 4: Not Initializing Variables

**What:** Using a variable before giving it a value.

**Example:**
```javascript
// Wrong: totalSales not initialized
function calculateTotal(sales) {
    // totalSales is undefined!
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;  // Error!
    }
    return totalSales;
}

// Correct:
function calculateTotal(sales) {
    let totalSales = 0;  // Initialize!
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}
```

**How to fix:**
- Always initialize variables
- Set initial values before using them

### Bug 5: Wrong Operator

**What:** Using the wrong operator (e.g., = instead of ==, or + instead of *).

**Example:**
```javascript
// Wrong: Using + instead of *
function calculateTotal(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price + sales[i].quantity;  // Wrong: should be *
    }
    return totalSales;
}

// Correct:
function calculateTotal(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales += sales[i].price * sales[i].quantity;  // Correct: multiply
    }
    return totalSales;
}
```

**How to fix:**
- Double-check operators
- Think about what operation you need
- Test with simple examples

---

## Systematic Debugging Process

### Step 1: Reproduce the Error

**What:** Make the error happen consistently.

**Why:** You can't fix what you can't see.

**How:**
- Run the code with the same input
- Note what error you get
- Note when it happens

### Step 2: Understand the Error

**What:** Read and understand the error message.

**Why:** Error messages tell you what's wrong.

**How:**
- Read the error message carefully
- Note the error type
- Note the line number
- Look up the error if needed

### Step 3: Isolate the Problem

**What:** Find the smallest piece that causes the error.

**Why:** Easier to fix a small problem than a big one.

**How:**
- Comment out parts of code
- Test each part separately
- Find which part breaks

### Step 4: Add Debug Statements

**What:** Print values to see what's happening.

**Why:** See the actual values, not what you think they are.

**How:**
- Add console.log at key points
- Print variable values
- Print intermediate results

### Step 5: Fix the Problem

**What:** Make the correction.

**Why:** To make the code work.

**How:**
- Make a small change
- Test immediately
- Verify it fixes the problem

### Step 6: Test Again

**What:** Verify the fix works and didn't break anything else.

**Why:** Make sure everything still works.

**How:**
- Run all your tests
- Test edge cases
- Test with different inputs

---

## Testing Checklist

Before considering your code done, verify:

- [ ] Code runs without syntax errors
- [ ] Code runs without runtime errors
- [ ] Output matches expected for provided examples
- [ ] Edge cases are handled (empty input, zero values, etc.)
- [ ] Code works with different inputs
- [ ] Logic is correct (manual verification)
- [ ] Variable names are clear
- [ ] Code is readable

---

## Debugging Checklist

When debugging, follow these steps:

- [ ] Can I reproduce the error?
- [ ] Do I understand the error message?
- [ ] Have I isolated the problem?
- [ ] Have I added debug statements?
- [ ] Can I see what values variables have?
- [ ] Have I traced through the code?
- [ ] Have I tested the fix?
- [ ] Do all tests pass now?

---

## Example: Complete Testing and Debugging Session

### The Problem

"Calculate total sales amount"

### The Code (with a bug)

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i <= sales.length; i++) {  // BUG: Should be < not <=
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}
```

### Step 1: Test with Example

```javascript
let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

let result = calculateTotalSales(testSales);
// Error: Cannot read property 'price' of undefined
```

### Step 2: Understand the Error

**Error:** "Cannot read property 'price' of undefined"

**Meaning:** Trying to access a property of something that doesn't exist.

**Line:** Inside the loop, when accessing sales[i]

### Step 3: Add Debug Statements

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    console.log("Array length:", sales.length);  // Debug
    for (let i = 0; i <= sales.length; i++) {
        console.log("i:", i, "sales[i]:", sales[i]);  // Debug
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}
```

**Output:**
```
Array length: 2
i: 0 sales[i]: {item: 'apple', price: 1, quantity: 10}
i: 1 sales[i]: {item: 'banana', price: 0.5, quantity: 20}
i: 2 sales[i]: undefined  // AHA! Problem here!
```

### Step 4: Identify the Problem

**Problem:** Loop runs one too many times!
- Array has 2 items (indices 0 and 1)
- Loop runs for i = 0, 1, 2
- When i = 2, sales[2] doesn't exist (undefined)

**Root cause:** Using `<=` instead of `<`

### Step 5: Fix the Problem

```javascript
function calculateTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {  // Fixed: Changed <= to <
        totalSales += sales[i].price * sales[i].quantity;
    }
    return totalSales;
}
```

### Step 6: Test Again

```javascript
let testSales = [
    {item: "apple", price: 1.00, quantity: 10},
    {item: "banana", price: 0.50, quantity: 20}
];

let result = calculateTotalSales(testSales);
console.log("Result:", result);  // 20
console.log("Expected: 20");
console.log("Test:", result === 20 ? "PASS" : "FAIL");  // PASS
```

**✓ Fixed and tested!**

---

## Summary

Testing and debugging are essential skills:

**Testing:**
- Test with examples
- Test edge cases
- Test with different inputs
- Verify outputs

**Debugging:**
- Understand errors
- Add debug statements
- Trace through code
- Isolate problems
- Fix systematically

**Remember:**
- All code has bugs (at first)
- Testing catches them early
- Debugging fixes them
- Practice makes perfect

**Next:** Once your code works, you can refine and improve it!

**Next File:** Continue with `07_COMMON_PATTERNS.md` or practice with real problems!

---

## Quick Reference

**Testing Strategies:**
- Manual testing
- Test with examples
- Test edge cases
- Test with different inputs

**Debugging Techniques:**
- Add print statements
- Check variable values
- Trace through code
- Simplify the problem
- Isolate the problem

**Common Bugs:**
- Off-by-one errors
- Missing return statements
- Wrong variable names
- Uninitialized variables
- Wrong operators

**Debugging Process:**
1. Reproduce error
2. Understand error
3. Isolate problem
4. Add debug statements
5. Fix problem
6. Test again

