/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import { afterEach, beforeEach } from 'mocha';
import shortid from 'shortid';
import supertest from 'supertest';
import app from '../../index';
import DBSequelize from '../../src/common/db/dBSequelize';

let firstUserIdTest = '';
const firstUserBody = {
  email: `example+${shortid.generate()}@example.com`,
  password: 'Sup3rSecret!23',
};

// const accessToken = '';
// const refreshToken = '';
// const newFirstName = 'Jose';
// const newFirstName2 = 'Paulo';
// const newLastName2 = 'Faraco';

let request: supertest.SuperAgentTest;
beforeEach(() => {
  request = supertest.agent(app);
  DBSequelize.getSequelize();
});
afterEach(() => {
  app.close();
  // DBSequelize.getSequelize().close();
});

describe('user and auth endpoints', () => {
  it('should allow a POST to /user', async () => {
    const res = await request.post('/user').send(firstUserBody);
    expect(res.status).to.equal(201);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an('object');
    // expect(res.body.rol).to.equal(2);
    // expect(res.body.id).to.be.a('string');
    firstUserIdTest = res.body.id;
  });

  // it('should allow a POST to /auth', async () => {
  //   const res = await request.post('/auth').send(firstUserBody);
  //   expect(res.status).to.equal(201);
  //   expect(res.body).not.to.be.empty();
  //   expect(res.body).to.be.an('object');
  //   expect(res.body.accessToken).to.be.a('string');
  //   accessToken = res.body.accessToken;
  //   refreshToken = res.body.refreshToken;
  // });

  // it('should allow a GET from /user/:userId with an access token', async () => {
  //   const res = await request
  //     .get(`/user/${firstUserIdTest}`)
  //     .set({ Authorization: `Bearer ${accessToken}` })
  //     .send();
  //   expect(res.status).to.equal(200);
  //   expect(res.body).not.to.be.empty();
  //   expect(res.body).to.be.an('object');
  //   expect(res.body.id).to.be.a('string');
  //   expect(res.body.id).to.equal(firstUserIdTest);
  //   expect(res.body.email).to.equal(firstUserBody.email);
  // });

  // describe('with a valid access token', () => {
  //   it('should allow a GET from /user', async () => {
  //     const res = await request
  //       .get('/user')
  //       .set({ Authorization: `Bearer ${accessToken}` })
  //       .send();
  //     expect(res.status).to.equal(403);
  //   });

  //   it('should disallow a PATCH to /user/:userId', async () => {
  //     const res = await request
  //       .patch(`/user/${firstUserIdTest}`)
  //       .set({ Authorization: `Bearer ${accessToken}` })
  //       .send({
  //         firstName: newFirstName,
  //       });
  //     expect(res.status).to.equal(403);
  //   });

  //   it('should disallow a PUT to /user/:userId with an nonexistent ID', async () => {
  //     const res = await request
  //       .put('/user/i-do-not-exist')
  //       .set({ Authorization: `Bearer ${accessToken}` })
  //       .send({
  //         email: firstUserBody.email,
  //         password: firstUserBody.password,
  //         firstName: 'Marcos',
  //         lastName: 'Silva',
  //         permissionFlags: 256,
  //       });
  //     expect(res.status).to.equal(404);
  //   });

  //   it('should disallow a PUT to /user/:userId trying to change the permission flags', async () => {
  //     const res = await request
  //       .put(`/user/${firstUserIdTest}`)
  //       .set({ Authorization: `Bearer ${accessToken}` })
  //       .send({
  //         email: firstUserBody.email,
  //         password: firstUserBody.password,
  //         firstName: 'Marcos',
  //         lastName: 'Silva',
  //         permissionFlags: 256,
  //       });
  //     expect(res.status).to.equal(400);
  //     expect(res.body.errors).to.be.an('array');
  //     expect(res.body.errors).to.have.length(1);
  //     expect(res.body.errors[0]).to.equal(
  //       'User cannot change permission flags',
  //     );
  //   });

  //   it('should allow a PUT to /user/:userId/permissionFlags/2 for testing', async () => {
  //     const res = await request
  //       .put(`/user/${firstUserIdTest}/permissionFlags/2`)
  //       .set({ Authorization: `Bearer ${accessToken}` })
  //       .send({});
  //     expect(res.status).to.equal(204);
  //   });

  //   describe('with a new set of permission flags', () => {
  //     it('should allow a POST to /auth/refresh-token', async () => {
  //       const res = await request
  //         .post('/auth/refresh-token')
  //         .set({ Authorization: `Bearer ${accessToken}` })
  //         .send({ refreshToken });
  //       expect(res.status).to.equal(201);
  //       expect(res.body).not.to.be.empty();
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.accessToken).to.be.a('string');
  //       accessToken = res.body.accessToken;
  //       refreshToken = res.body.refreshToken;
  //     });

  //     it('should allow a PUT to /user/:userId to change first and last names', async () => {
  //       const res = await request
  //         .put(`/user/${firstUserIdTest}`)
  //         .set({ Authorization: `Bearer ${accessToken}` })
  //         .send({
  //           email: firstUserBody.email,
  //           password: firstUserBody.password,
  //           firstName: newFirstName2,
  //           lastName: newLastName2,
  //           permissionFlags: 2,
  //         });
  //       expect(res.status).to.equal(204);
  //     });

  //     it('should allow a GET from /user/:userId and should have a new full name', async () => {
  //       const res = await request
  //         .get(`/user/${firstUserIdTest}`)
  //         .set({ Authorization: `Bearer ${accessToken}` })
  //         .send();
  //       expect(res.status).to.equal(200);
  //       expect(res.body).not.to.be.empty();
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.id).to.be.a('string');
  //       expect(res.body.firstName).to.equal(newFirstName2);
  //       expect(res.body.lastName).to.equal(newLastName2);
  //       expect(res.body.email).to.equal(firstUserBody.email);
  //       expect(res.body.id).to.equal(firstUserIdTest);
  //     });

  //     it('should allow a DELETE from /user/:userId', async () => {
  //       const res = await request
  //         .delete(`/user/${firstUserIdTest}`)
  //         .set({ Authorization: `Bearer ${accessToken}` })
  //         .send();
  //       expect(res.status).to.equal(204);
  //     });
  //   });
  // });
});
