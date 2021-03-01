import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './models/userModel.js';
import users from './data/users.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const sampleUsers = await User.insertMany(users);
    const adminUser = await sampleUsers[0]._id;
    console.log('data is imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();

    const sampleUsers = await User.insertMany(users);
    const adminUser = await sampleUsers[0]._id;
    console.log('data is deleted');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
