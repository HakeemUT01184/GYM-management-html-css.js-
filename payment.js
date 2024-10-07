// document.getElementById('paymentForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const paymentType = document.getElementById('month').value;
//     const amount = document.getElementById('amount').value;
    
//     const paymentData = {
//         month,
//         amount
//     };
    
//     localStorage.setItem('latestPayment', JSON.stringify(paymentData));
    
//     document.getElementById('message').innerText = `Payment of ${amount} for ${month} has been recorded. Redirecting to dashboard...`;
//     setTimeout(() => {
//         window.location.href = 'admin-dashboard.html'; // Redirect to Admin Dashboard or User Dashboard
//     }, 500); // Delay to show success message
// });

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from form fields
    const Rfee = document.getElementById('Rfee').value;
    const month = document.getElementById('month').value;
    const amount = document.getElementById('amount').value;
    const nicnumber = document.getElementById('nicnumber').value;
    const date = document.getElementById('date').value;
    
    // Create payment data object
    const paymentData = {
        month: month,
        amount: amount,
        nicnumber:nicnumber,
        date:date,
        Register_fee:Rfee
    };

    // Retrieve existing payments from localStorage
    let payments = JSON.parse(localStorage.getItem('payments')) || [];
    
    // Add new payment to the array
    payments.push(paymentData);
    
    // Save updated payments array back to localStorage
    localStorage.setItem('payments', JSON.stringify(payments));
    
    // Show success message and redirect
    document.getElementById('message').innerText = `Payment of ${amount} for ${month} has been recorded. Redirecting to dashboard...`;
    setTimeout(() => {
        window.location.href = 'admin-dashboard.html'; // Redirect to Admin Dashboard or User Dashboard
    }, 500); // Delay to show success message
});
