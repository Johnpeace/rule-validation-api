import mongoose from 'mongoose';

import RunValidation from '../../server/models/ruleValidationModel';
import User from '../../server/models/userModel';

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: 'Amos Burton',
  github: '@amosburton',
  email: 'amosburton@rocinantecrew.com',
  mobile: '08069920011',
  twitter: '@amosb',
};

const validateRuleOne = {
  _id: new mongoose.Types.ObjectId(),
  rule: {
    field: 'missions',
    condition: 'gte',
    condition_value: 30,
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: 45,
  },
};

const setupDatabase = async () => {
  await User.deleteMany();
  await RunValidation.deleteMany();
  await new User(userOne).save();
  await new RunValidation(validateRuleOne).save();
};

export default () => {
  userOne,
  validateRuleOne,
  setupDatabase,
};
