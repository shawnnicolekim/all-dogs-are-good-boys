import React, { useState } from 'react';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(done) {
    this.authenticated = true;
    done();
  }

  logout(done) {
    this.authenticated = false;
    done();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
// may need to create a new instance everytime
// export default new Auth();