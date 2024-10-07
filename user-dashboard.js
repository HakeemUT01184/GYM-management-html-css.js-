
window.onload = function() {
    const index = localStorage.getItem('currentUserIndex');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    // Check if user exists
    if (!user) {
        alert('No user data found');
        window.location.href = 'login.html';
        return;
    }

    const latestPayments = JSON.parse(localStorage.getItem('payments')) || [];

    // Filter payments for the current user by NIC number
    const userPayments = latestPayments.filter(payment => payment.nicnumber === user.nicnumber);

    // Display user details
    document.getElementById('userDetails').innerHTML = `
        <p>Full Name: ${user.fullname}</p>
        <p>Mobile Number: ${user.mobilenumber}</p>
        <p>Address: ${user.address}</p>
        <p>Emergency Contact: ${user.emergencycontact}</p>
        <p>NIC Number: ${user.nicnumber}</p>
        <p>Activities: ${user.activities.join(', ')}</p>
        <p>Payments:</p>
        <ul id="paymentList"></ul>
    `;

    // Display payments related to this user
    const paymentList = document.getElementById('paymentList');
    if (userPayments.length > 0) {
        userPayments.forEach(payment => {
            const listItem = document.createElement('li');
            listItem.textContent = ` [rejister payment: ${payment.Register_fee}.00 ] Monthly Payment ${payment.amount} for ${payment.month} , ${payment.date}`;
            paymentList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No payments found for this user.';
        paymentList.appendChild(listItem);
    }



    
};
