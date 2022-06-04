self.addEventListener('push', e=>{
   let body ='kodee';
    
    self.registration.showNotification('test', {
      body:body,
      icon:'http://image.ibb.co/frYOFd/tmlogo.png'
    })
  });