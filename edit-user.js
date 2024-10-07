window.onload = function() {
    const index = localStorage.getItem('currentUserIndex');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];
    
    if (user) {
        document.getElementById('fullname').value = user.fullname;
        document.getElementById('password').value = user.password;
        document.getElementById('mobilenumber').value = user.mobilenumber;
        document.getElementById('address').value = user.address;
        document.getElementById('emergencycontact').value = user.emergencycontact;
        document.getElementById('nicnumber').value = user.nicnumber;
        
        const activities = document.querySelectorAll('input[name="activity"]');
        activities.forEach(checkbox => {
            checkbox.checked = user.activities.includes(checkbox.value);
        });
    } else {
        alert('No user data found');
        window.location.href = 'login.html';
    }
};

document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const mobilenumber = document.getElementById('mobilenumber').value;
    const address = document.getElementById('address').value;
    const emergencycontact = document.getElementById('emergencycontact').value;
    const nicnumber = document.getElementById('nicnumber').value;
    const activities = Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(cb => cb.value);
    
    let users = JSON.parse(localStorage.getItem('users'));
    users[localStorage.getItem('currentUserIndex')] = {
        fullname,
        password,
        mobilenumber,
        address,
        emergencycontact,
        nicnumber,
        activities
    };
    
    localStorage.setItem('users', JSON.stringify(users));
    
    document.getElementById('message').innerText = 'Details updated successfully!';
    setTimeout(() => {
        if (localStorage.getItem('currentUserIndex') === null) {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'user-dashboard.html';
        }
    }, 2000); // Delay to show success message
});
