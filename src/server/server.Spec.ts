import * as chai from 'chai';
import * as supertest from 'supertest';

import './server';

let server = supertest.agent("http://localhost:4001");


describe('Server', () => {

    it('should get the status page', (done) => {
        // Given
        server
            .get('/api/status')
            .expect("Content-type",/text/)
            .expect(200)
            .end(function(err,res){
                // HTTP status should be 200
                chai.expect(res.status).to.equal(200);
                // Error key should be false.
                chai.expect(res.body.error).to.not.exist;
                done();
            });
    })
});