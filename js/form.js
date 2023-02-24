function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "chukwuemekavagu@gmail.com",
        Password : "$developer001",
        To : 'chukwuemekavagu@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact Form Enquiry",
        Body : "Name: " + document.getElementById('name').value
          + " <br> Email: " + document.getElementById('email').value
          + " <br> Project/Work: " + document.getElementById('project').value
          + " <br> Message: " + document.getElementById('message').value
    }).then(
      message => alert('Message sent successfully')
    );
}