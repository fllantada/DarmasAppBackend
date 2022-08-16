import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { LiquidacionesApp } from '../../../../../../src/apps/liquidaciones/liquidacionesApp';

let _request: request.Test;
let application: LiquidacionesApp;
let _response: request.Response;

//asociado cucumber.js
//script en un json
//types cucumber
Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).post(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new LiquidacionesApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
