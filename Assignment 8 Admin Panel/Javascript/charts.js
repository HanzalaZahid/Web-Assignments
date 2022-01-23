const totalBalance = document.getElementsByClassName("graph_total_balance");
const newMembers = document.getElementsByClassName("graph_new_members");
const newOrders = document.getElementsByClassName("graph_new_orders");

const totalBalanceChart = new Chart(totalBalance,
    {
        type: 'doughnut',
        data:
        {
            labels: ['one', 'two'],
            datasets:
            [{
                label: 'My Data Sheet',
                data: [43, 57],
                backgroundColor: ['rgba(255, 255, 255, 0.8)', 'rgba(0,0,0, .1)'],
                borderWidth: 0,
            }]
        },
        options:
        {
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            cutout: 55,
            // maintainAspectRatio: false,
            responsive: false,
        }
    })


const newMembersChart = new Chart(newMembers,
    {
        type: 'doughnut',
        data:
        {
            labels: ['one', 'two'],
            datasets:
            [{
                label: 'My Data Sheet',
                data: [65, 35],
                backgroundColor: ['rgba(255, 255, 255, 0.8)', 'rgba(0,0,0, .1)'],
                borderWidth: 0,
            }]
        },
        options:
        {
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            cutout: 55,
            // maintainAspectRatio: false,
            responsive: false,
        }
    })
    

const newOrdersChart = new Chart(newOrders,
    {
        type: 'doughnut',
        data:
        {
            labels: ['one', 'two'],
            datasets:
            [{
                label: 'My Data Sheet',
                data: [24, 76],
                backgroundColor: ['rgba(255, 255, 255, 0.8)', 'rgba(0,0,0, .1)'],
                borderWidth: 0,
            }]
        },
        options:
        {
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            cutout: 55,
            // maintainAspectRatio: false,
            responsive: false,
        }
    })
    


// ********************CARDS GRPAHS********************
// ********************CARDS GRPAHS********************
// ********************CARDS GRPAHS********************

const statistics = document.getElementsByClassName('statistics_graph');

const statisticsGraph = new Chart(statistics, 
    {
        type: 'line',
        data:
        {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            datasets:
            [
                {
                    label: 'New Users',
                    data: [45, 60, 40, 25, 60, 50, 83, 93],
                    borderColor: 'rgba(86, 244, 116, .9)',
                    tension: .4 

                },
                {
                    label: 'Old Users',
                    data: [20, 80, 90, 100, 65, 60, 50, 40],
                    borderColor: 'rgba(29, 125, 245, 1)',
                    tension: .4 

                }
            ]
        },
        options:
        {
            scales:
            {
                y:
                {
                    beginAtZero: true
                }
            },
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            maintainAspectRatio: false,
        }
    })
    

const balance = document.getElementsByClassName('balance_graph');
const balanceChart = new Chart(balance,
    {
        type: 'doughnut',
        data:
        {
            labels: ['Members', 'Sales', 'Loss'],
            datasets:
            [{
                label: 'My Data Sheet',
                data: [43, 36, 21],
                backgroundColor: ['#1a7cf9', '#57d766', '#f54037'],
                borderWidth: [10, 20, '300px'],
                borderWidth: 0,
            }]
        },
        options:
        {
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            cutout: 140,
            maintainAspectRatio: false,
            // responsive: false,
        }
    })