document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const mobilenumber = document.getElementById('mobilenumber').value;
    const address = document.getElementById('address').value;
    const emergencycontact = document.getElementById('emergencycontact').value;
    const nicnumber = document.getElementById('nicnumber').value;
    const activities = Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(cb => cb.value);
    
    const userData = {
        fullname,
        password,
        mobilenumber,
        address,
        emergencycontact,
        nicnumber,
        activities
    };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    document.getElementById('message').innerText = 'Registration successful! Redirecting to payment page...';
    setTimeout(() => {
        window.location.href = 'payment.html';
    },500); // Delay to show success message
});
