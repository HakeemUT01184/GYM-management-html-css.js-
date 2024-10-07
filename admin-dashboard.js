window.onload = function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#userTable tbody');
    
    // Check if users array is correctly retrieved
    if (!Array.isArray(users)) {
        console.error('Users data is not an array or could not be retrieved.');
        return;
    }

    // Clear previous table rows if any
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        if (user) { // Ensure user data exists
            const row = tableBody.insertRow();
            row.insertCell(0).innerText = user.fullname || 'N/A';
            row.insertCell(1).innerText = user.mobilenumber || 'N/A';
            row.insertCell(2).innerText = user.address || 'N/A';
            row.insertCell(3).innerText = user.activities ? user.activities.join(', ') : 'N/A';
            
            
            const actionsCell = row.insertCell(4);
            actionsCell.innerHTML = `
                <button onclick="viewUser(${index})">View</button>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            `;
        } else {
            console.error('User data is undefined or null.');
        }
    });
};

function viewUser(index) {
    localStorage.setItem('currentUserIndex', index);
    window.location.href = 'user-dashboard.html';
}

function editUser(index) {
    localStorage.setItem('currentUserIndex', index);
    window.location.href = 'edit-user.html';
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.reload();
}


