const assert = require('assert');
const { fetchMyIP } = require('./iss');

describe('fetchMyIP', function() {
  it('should return the IP address as a string', function(done) {
    fetchMyIP((error, ip) => {
      assert.strictEqual(error, null);
      assert.strictEqual(typeof ip, 'string');
      done();
    });
  });

  it('should return an error if request fails', function(done) {
    // Mocking a request failure by passing an invalid URL
    fetchMyIP('invalid-url', (error, ip) => {
      assert.ok(error instanceof Error);
      assert.strictEqual(ip, null);
      done();
    });
  });
});
