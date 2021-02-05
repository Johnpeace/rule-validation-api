import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import server from '../server';

chai.use(chaiHttp);
describe('#Validate rule features: ', () => {
  describe('Testing validate rule controller', () => {
    const route = '/validate-rule';

    it('should create rule validation', (done) => {
      chai
        .request(server)
        .post(route)
        .send({
          rule: {
            field: 'missions.count',
            condition: 'gte',
            condition_value: 30,
          },
          data: {
            name: 'James Holden',
            crew: 'Rocinante',
            age: 34,
            position: 'Captain',
            missions: {
              count: 55,
              successful: 44,
              failed: 1,
            },
          },
        })
        .end((error, response) => {
          expect(response.body).to.be.an('object');
          expect(response).to.have.status(200);
          expect(response.body.status).to.be.a('string');
          expect(response.body.status).to.equal('success');
          expect(response.body.data.error).to.equal(false);
          expect(response.body.data.error).to.be.a('boolean');
          expect(response.body.message).to.equal(
            `field ${response.body.data.field} successfully validated.`
          );
          done();
        });
    });

    it('should not create rule validation', (done) => {
      chai
        .request(server)
        .post(route)
        .send({
          rule: {
            field: '5',
            condition: 'contains',
            condition_value: 22,
          },
          data: ['The Nauvoo', 'The Razorback', 'The Roci', 'Tycho'],
        })
        .end((error, response) => {
          expect(response.body).to.be.an('object');
          expect(response).to.have.status(400);
          expect(response.body.status).to.be.a('string');
          expect(response.body.status).to.equal('error');
          expect(response.body.data).to.equal(null);
          expect(response.body.message).to.equal(
            'field 5 is missing from data.'
          );
          done();
        });
    });

    it('should return a failed validation', (done) => {
      chai
        .request(server)
        .post(route)
        .send({
          rule: {
            field: '0',
            condition: 'eq',
            condition_value: 4,
          },
          data: 'damien-marley',
        })
        .end((error, response) => {
          expect(response.body).to.be.an('object');
          expect(response).to.have.status(400);
          expect(response.body.status).to.be.a('string');
          expect(response.body.status).to.equal('error');
          expect(response.body.data.error).to.be.a('boolean');
          expect(response.body.data.error).to.equal(true);
          expect(response.body.message).to.equal('field 0 failed validation.');
          done();
        });
    });
  });
});
