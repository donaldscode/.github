# Bug Fixes Report

This document details the 3 bugs found and fixed in the codebase.

---

## Bug #1: Logic Error - Off-by-One Error in Array Indexing

### **Severity**: High
### **Type**: Logic Error

### **Description**:
The `findMax()` function had an off-by-one error in the loop condition. The loop was iterating with `i <= numbers.length` instead of `i < numbers.length`, causing the loop to access an index beyond the array bounds.

### **Impact**:
- Attempts to access `numbers[numbers.length]` which is `undefined`
- Comparison `undefined > max` always returns `false`, but could cause unexpected behavior
- In strict mode or with certain inputs, could throw errors
- Results in incorrect maximum value calculation

### **Location**: `buggy-app.js`, lines 9-10

### **Original Code**:
```javascript
for (let i = 0; i <= numbers.length; i++) {  // BUG: should be i < numbers.length
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
```

### **Fixed Code**:
```javascript
for (let i = 0; i < numbers.length; i++) {  // FIXED: changed <= to <
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
```

### **Explanation**:
Changed the loop condition from `i <= numbers.length` to `i < numbers.length`. Array indices in JavaScript are 0-based and range from `0` to `length - 1`. Accessing `numbers[length]` is out of bounds and returns `undefined`.

---

## Bug #2: Performance Issue - Inefficient Duplicate Detection (O(n²) Complexity)

### **Severity**: Medium
### **Type**: Performance Issue

### **Description**:
The `hasDuplicates()` function used a nested loop approach with O(n²) time complexity. The inner loop started from index 0 instead of `i+1`, causing unnecessary comparisons. Additionally, the algorithm itself was inefficient for large arrays.

### **Impact**:
- Poor performance with large arrays (quadratic time complexity)
- Redundant comparisons (each pair checked twice)
- For an array of 10,000 elements, this means 100,000,000 comparisons instead of ~10,000
- Could cause timeouts or slow response times in production

### **Location**: `buggy-app.js`, lines 18-26

### **Original Code**:
```javascript
function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {  // BUG: starts from 0, also O(n²)
            if (i !== j && arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
```

### **Fixed Code**:
```javascript
function hasDuplicates(arr) {
    const seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item);
    }
    return false;
}
```

### **Explanation**:
Replaced the nested loop approach with a Set-based solution. Sets provide O(1) average-case lookup time, making the overall algorithm O(n). This reduces the time complexity from quadratic to linear:
- **Before**: O(n²) - 10,000 items = ~100,000,000 operations
- **After**: O(n) - 10,000 items = ~10,000 operations

This is a ~10,000x improvement for large datasets!

---

## Bug #3: Security Vulnerability - SQL Injection

### **Severity**: Critical
### **Type**: Security Vulnerability (CWE-89: SQL Injection)

### **Description**:
The `getUserById()` function constructed SQL queries by directly concatenating user input into the query string. This is a classic SQL injection vulnerability that allows attackers to execute arbitrary SQL commands.

### **Impact**:
- **Data Breach**: Attackers can access sensitive data from the database
- **Data Manipulation**: Attackers can modify or delete data
- **Authentication Bypass**: Attackers can bypass login mechanisms
- **System Compromise**: In some cases, attackers can execute system commands

### **Attack Example**:
If an attacker passes `userId = "1 OR 1=1"`, the query becomes:
```sql
SELECT * FROM users WHERE id = 1 OR 1=1
```
This returns ALL users instead of just one, bypassing security controls.

A more malicious example: `userId = "1; DROP TABLE users; --"` could delete the entire users table.

### **Location**: `buggy-app.js`, lines 31-32

### **Original Code**:
```javascript
// BUG: SQL injection vulnerability - user input directly concatenated
const query = `SELECT * FROM users WHERE id = ${userId}`;
return db.query(query);
```

### **Fixed Code**:
```javascript
// FIXED: Using parameterized query instead of string concatenation
const query = 'SELECT * FROM users WHERE id = ?';
return db.query(query, [userId]);
```

### **Explanation**:
Implemented parameterized queries (also called prepared statements) where user input is passed separately from the SQL command. The database driver automatically escapes and sanitizes the input, preventing SQL injection attacks. The `?` placeholder is replaced with the escaped value from the parameters array.

**Security Best Practices**:
1. Always use parameterized queries/prepared statements
2. Never concatenate user input directly into SQL queries
3. Implement input validation as a defense-in-depth measure
4. Use an ORM (Object-Relational Mapping) library that handles parameterization automatically
5. Apply the principle of least privilege to database users

---

## Summary

All three bugs have been successfully identified and fixed:

1. ✅ **Logic Error**: Fixed off-by-one error in array iteration
2. ✅ **Performance Issue**: Optimized duplicate detection from O(n²) to O(n)
3. ✅ **Security Vulnerability**: Eliminated SQL injection vulnerability using parameterized queries

The codebase is now more reliable, efficient, and secure.
