document.addEventListener('DOMContentLoaded', () => {
    const totalUsersElem = document.getElementById('total-users');

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Users:', users); // Debugging: Check retrieved users

    // Display total users
    totalUsersElem.textContent = users.length;

    // Extract activities from all users
    let activityCounts = {};
    let totalActivities = 0;

    users.forEach(user => {
        if (user.activities && Array.isArray(user.activities)) {
            user.activities.forEach(activity => {
                activityCounts[activity] = (activityCounts[activity] || 0) + 1;
                totalActivities += 1;
            });
        }
    });

    console.log('Activity Counts:', activityCounts); // Debugging: Check activity counts
    console.log('Total Activities:', totalActivities); // Debugging: Check total activities

    // Prepare data for the chart
    const activityLabels = Object.keys(activityCounts);
    const activityData = activityLabels.map(activity => (activityCounts[activity] / totalActivities * 100).toFixed(2));

    // Chart.js configuration
    const ctx = document.getElementById('activity-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: activityLabels,
            datasets: [{
                label: 'Activity Distribution',
                data: activityData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ' + context.raw + '%';
                            }
                            return label;
                        }
                    }
                },
                datalabels: {
                    color: '#000',
                    formatter: (value, context) => {
                        return `${value}%`;
                    },
                    anchor: 'end',
                    align: 'start',
                    offset: 10
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});