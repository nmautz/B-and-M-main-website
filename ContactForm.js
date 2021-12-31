function sendEmail(address)
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    
    Email.send({
        Host: "smtp.gmail.com",
        Username : "thebertonmautzproject@gmail.com",
        Password : "ProteinCup45!",
        To : 'thebertonmautzproject@gmail.com',
        From : "thebertonmautzproject@gmail.com",
        Subject : fname+" "+lname,
        Body : "Email: "+ email + " "+"Subject: "+subject,
        }).then(
            message => alert("mail sent successfully")
        );
    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    document.getElementById("email").value='';
    document.getElementById("subject").value='';
}