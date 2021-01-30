import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name must be provided'],
    trim: true,
  },
  github: {
    type: String,
    required: [true, 'A github username must be provided'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'An email must be provided'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  mobile: {
    type: String,
    required: [true, 'A mobile number must be provided'],
    unique: true,
    trim: true,
    validate: [validator.isMobilePhone, ['en-NG']],
  },
  twitter: {
    type: String,
    unique: true,
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
