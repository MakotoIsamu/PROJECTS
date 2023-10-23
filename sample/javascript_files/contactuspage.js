document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const messageStatus = document.getElementById('message-status');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      messageStatus.textContent = 'Sending...';
  
      setTimeout(function() {
        messageStatus.textContent = 'Message sent successfully!';
        contactForm.reset();
      }, 2000);
    });
  });
  