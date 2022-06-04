var push = require('web-push');

var vapIdKeys = { publicKey:
    'BLSmud58LjBWTpQ-YXtzUGWOfHy8qfzYv-aFIYXPcAYnpLbNuaDsSu5R6Tk3JAXpGaGyn9ZWGptIoSnCjaGv7Lc',
   privateKey: 'PZPfiSH0bJB1Z_atxa3in6MJ2Pn1M-8Mjeg8WPJPzfs' 
};

push.setVapidDetails('mailto:kotee@gmail.com',vapIdKeys.publicKey,vapIdKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'test kodee');



