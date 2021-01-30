import mongoose from 'mongoose';
import validator from 'validator';

const runValidationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name must be provided'],
    trim: true,
  },
  crew: {
    type: String,
    required: [true, 'A crew must be provided'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'An age must be provided'],
    trim: true,
  },
  position: {
    type: String,
    required: [true, 'A position must be provided'],
    trim: true,
  },
  missions: {
    type: Number,
    required: [true, 'Missions must be provided'],
    trim: true,
  },
  field: {
    type: String,
    trim: true,
  },
  condition: {
    type: String,
    trim: true,
  },
  condition_value: {
    type: Number,
    trim: true,
  },
});

const RunValidation = mongoose.model('RunValidation', runValidationSchema);

export default RunValidation;
