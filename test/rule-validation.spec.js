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
  });
});
