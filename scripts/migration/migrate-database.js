// /scripts/migration/migrate-database.js

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// MongoDB connection setup
const uri = "mongodb://localhost:27017/digital_banking";  // Update with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Migration function to create necessary collections and insert seed data
const migrateDatabase = async () => {
    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');
    const transactionsCollection = db.collection('transactions');

    // Check if collections exist, otherwise create them
    const collections = await db.listCollections().toArray();
    if (!collections.some(col => col.name === 'users')) {
        await usersCollection.createIndex({ email: 1 }, { unique: true });  // Add indexes
        console.log('Created users collection');
    }

    if (!collections.some(col => col.name === 'transactions')) {
        await transactionsCollection.createIndex({ transactionId: 1 }, { unique: true });
        console.log('Created transactions collection');
    }

    // Seed users data
    const userData = JSON.parse(fs.readFileSync(path.join(__dirname, 'seeders/users.json')));
    await usersCollection.insertMany(userData);
    console.log('Seeded users data');

    // Seed transactions data
    const transactionsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'seeders/transactions.json')));
    await transactionsCollection.insertMany(transactionsData);
    console.log('Seeded transactions data');
};

// Run migration and seed
migrateDatabase().catch(error => {
    console.error('Error during migration:', error);
    process.exit(1);
});

