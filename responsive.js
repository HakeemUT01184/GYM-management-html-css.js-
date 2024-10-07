// document.addEventListener('DOMContentLoaded', () => {
//     const totalMembersElem = document.getElementById('total-members');
//     const recentAdmissionElem = document.getElementById('recent-admission');
//     const userForm = document.getElementById('user-form');
    
//     let totalMembers = 0;
//     let recentAdmissionDate = null;

//     userForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const admissionDate = document.getElementById('admission-date').value;

//         if (admissionDate) {
//             totalMembers++;
//             recentAdmissionDate = admissionDate;

//             // Update the dashboard
//             totalMembersElem.textContent = totalMembers;
//             recentAdmissionElem.textContent = new Date(recentAdmissionDate).toLocaleDateString();

//             // Clear the form
//             userForm.reset();
//         }
//     });
// });
