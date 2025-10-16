// Sample application with 3 intentional bugs

const express = require('express');
const app = express();

app.use(express.json());

// Bug #1 FIXED: Logic Error - Off-by-one error in array indexing
function findMax(numbers) {
    if (numbers.length === 0) return null;
    
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {  // FIXED: changed <= to <
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Bug #2 FIXED: Performance Issue - Using Set for O(n) time complexity
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

// Bug #3 FIXED: Security Vulnerability - Using parameterized query to prevent SQL injection
function getUserById(userId) {
    const db = require('./db'); // hypothetical database module
    
    // FIXED: Using parameterized query instead of string concatenation
    const query = 'SELECT * FROM users WHERE id = ?';
    return db.query(query, [userId]);
}

// Bug #4 (Bonus): Memory leak - event listener not removed
class DataProcessor {
    constructor() {
        this.data = [];
        this.listener = (event) => {
            this.data.push(event.data);
        };
        // BUG: Event listener is added but never removed, causing memory leak
        process.on('data', this.listener);
    }
    
    process() {
        return this.data;
    }
}

// API endpoints using buggy functions
app.get('/max', (req, res) => {
    const numbers = req.query.numbers ? req.query.numbers.split(',').map(Number) : [];
    res.json({ max: findMax(numbers) });
});

app.get('/duplicates', (req, res) => {
    const arr = req.query.arr ? req.query.arr.split(',') : [];
    res.json({ hasDuplicates: hasDuplicates(arr) });
});

app.get('/user/:id', (req, res) => {
    const user = getUserById(req.params.id);
    res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { findMax, hasDuplicates, getUserById, DataProcessor };
