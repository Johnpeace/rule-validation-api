import request from 'supertest';

import server from '../server';
import User from '../server/models/user';
import { setupDatabase } from './fixtures/db';

beforeEach(setupDatabase);

test('Should get user', async () => {
  await request(server).get('/api/v1').send().expect(200);
});
