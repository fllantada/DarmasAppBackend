// import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
// import request from 'supertest';
// import { MoocBackendApp } from '../../../../../src/apps/mooc/backend/MoocBackendApp';

// let _request: request.Test;
// let application: MoocBackendApp;
// let _response: request.Response;

// //asociado cucumber.js
// //script en un json
// //types cucumber
// console.log('------------>>>>>>>>Iniciando test de SEDES');

Given('I send a GET request to {string}', (route: string) => {
  return 'pending'; // _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  // _response = await _request.expect(status);
  return 'pending';
});

Then('the response should be  an object with the list of Sedes', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
// Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
//   _request = request(application.httpServer).put(route).send(JSON.parse(body));
// });

// Then('the response should be empty', () => {
//   assert.deepStrictEqual(_response.body, {});
// });

// BeforeAll(async () => {
//   // application = new MoocBackendApp();
//   // await application.start();
// });

// AfterAll(async () => {
//   // await application.stop();
// });
