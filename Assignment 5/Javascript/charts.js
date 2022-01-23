const earningGraph = document.getElementById('earning_graph');
const ctx = earningGraph.getContext('2d');

// defining Gradient colors for Background OLD USER
var gradientNew = ctx.createLinearGradient(0, 0, 0, 400);
gradientNew.addColorStop(0, 'rgba(22,148,250,.6)');   
gradientNew.addColorStop(1, 'rgba(22,148,250,0)');

// defining Gradient colors for Background NEW USER

var gradientOld = ctx.createLinearGradient(0, 0, 0, 400);
gradientOld.addColorStop(0, 'rgba(115,130,249,.6)');   
gradientOld.addColorStop(1, 'rgba(115,130,249,0)');

const earninggraph = new Chart(earningGraph,
    {
        type: 'line',
        data:
        {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: 
            [
                {
                    label: 'New User',
                    data: [1250, 1120, 1100, 1050, 1310, 1806, 1200, 1350, 1700, 1290, 1550, 1000],
                    borderColor: 'rgba(22,148,250,.7)',
                    backgroundColor: gradientNew,
                    fill: true,
                    tension: .3,
                    borderWidth: 2
                
                },
                {
                    label: 'Old User',
                    data: [1250, 980, 1150, 1480, 1230, 1600, 1800, 1430, 1320, 1650, 1720, 1305],
                    borderColor: 'rgba(115,130,249,.7)',
                    backgroundColor: gradientOld,
                    fill: true,
                    tension: .3,
                    borderWidth: 2
                
                }
            ]
        },

        options:
        {
            scales:
            {
                x:
                {
                    grid:
                    {
                        display: false
                    }
                },
                y:
                {
                    grid:
                    {
                        display: false
                    }
                }
            },
            elements:
            {
                point:
                {
                    radius: 0
                }
            },
            plugins:
            {
                legend:
                {
                    align: 'start',
                    pointStyle: 'circle'
                }
            },
            maintainAspectRatio: false
        }
    }
);

// LAST WEEK GRAPH //
/////////////////////

const lastWeekGraph = document.getElementById('lastweekGraph').getContext('2d');


// CREATING BAR COLORS
lastweekgraph_gradientOLD = lastWeekGraph.createLinearGradient(0, 0, 170, 0);

lastweekgraph_gradientOLD.addColorStop(0, '#14a6f9');   
lastweekgraph_gradientOLD.addColorStop(1, '#1483f9');

lastweekgraph_gradientNEW = lastWeekGraph.createLinearGradient(0, 0, 170, 0);
lastweekgraph_gradientNEW.addColorStop(0, '#8a7bfa');   
lastweekgraph_gradientNEW.addColorStop(1, '#5d4dd2');

const lastweekGraph = new Chart(lastWeekGraph,
    {
        type: 'bar',
        data:
        {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: 
            [
                {
                    label: 'New User',
                    data: [1250, 1120, 1100, 1050, 1310, 1806, 1200],
                    borderColor: 'rgba(22,148,250,.7)',
                    backgroundColor: lastweekgraph_gradientOLD,
                    barThickness: 16
                
                },
                {
                    label: 'Old User',
                    data: [1250, 980, 1150, 1480, 1230, 1600, 1800],
                    borderColor: 'rgba(115,130,249,.7)',
                    backgroundColor: lastweekgraph_gradientNEW,
                    barThickness: 16
                }
            ],
            
        },

        options:
        {

            scales: 
            {
                x: 
                {
                    stacked: true,
                    grid:
                    {
                        display: false
                    }
                },
                y: 
                {
                    stacked: true,
                    grid:
                    {
                        display: false
                    }
                }
            },
            plugins:
            {
                legend:
                {
                    align: 'start',
                    pointStyle: 'circle'
                }
            },
            maintainAspectRatio: false
        }
    }
);


// TOP PRODUCT SALES GRAPH //
/////////////////////////////
const salesGraph = document.getElementById('sales_graph').getContext('2d');



const salesgraph = new Chart(salesGraph,
    {
        type: 'doughnut',
        data:
        {
            labels: ['iPhone', 'iMac', 'iPad'],
            datasets: 
            [
                {
                    data: [8510, 7320, 5644],
                    backgroundColor: ['#0c85d8', '#5345d0', '#d63db2'],
                    borderWidth: 0,
                }
            ]
            
        },

        options:
        {
            maintainAspectRatio: false,
            cutout: 100,
            plugins:
            {
                legend:
                {
                    position: 'bottom',
                    pointStyle: 'circle'
                }
            },
        }
    }
);

/* Total Lead Graph */
/********************/

const leadGraph = document.getElementById('total_lead_graph').getContext('2d');
var gradientLead = leadGraph.createLinearGradient(0, 0, 0, 400);
gradientLead.addColorStop(0, 'rgba(22,148,250,.2)');   
gradientLead.addColorStop(.5, 'rgba(22,148,250,0)');
const leadgraph = new Chart(leadGraph,
    {
        type: 'line',
        data:
        {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','May', 'Jun'],
            datasets: 
            [
                {
                    data: [6,7,6,6.5,5,7.5,8.5,5],
                    borderColor: 'rgba(22,148,250,.7)',
                    backgroundColor: gradientLead,
                    fill: true,
                    tension: 0,
                    borderWidth: 2
                
                }
            ]
        },

        options:
        {
            scales:
            {
                x:
                {
                    grid:
                    {
                        display: false
                    },
                    ticks:
                    {
                        display: false
                    }
                },
                y:
                {
                    grid:
                    {
                        display: false,
                        
                    },
                    ticks:
                    {
                        display: false
                    },
                    beginAtZero: true
                }
            },
            elements:
            {
                point:
                {
                    radius: 0
                }
            },
            plugins:
            {
                legend:
                {
                    display: false
                }
            },
            maintainAspectRatio: false
        }
    }
);



/* 3 GRAPHS ROW 5 BLOCK 2 */
/**************************/

/* GRAPH 1 */

const bounceRate = document.getElementById("bounce_rate_graph").getContext('2d');

const bounce_rate_graph = new Chart(bounceRate,
    {
        type: 'doughnut',
        
        data:
        {
            label: ['iPhone'],
            datasets: 
            [
                {
                    data: [32,68],
                    backgroundColor: ['#283054', '#0eac4d'],
                    borderWidth: 0,
                }
            ]
        },
        options:
        {
            cutout: 54,
            rotation: 245
        }

    }
);

/* GRAPH 2 */

const returningUser = document.getElementById("returning_user_graph").getContext('2d');

const returninguser = new Chart(returningUser,
    {
        type: 'doughnut',
        
        data:
        {
            label: ['iPhone'],
            datasets: 
            [
                {
                    data: [35,75],
                    backgroundColor: ['#283054', '#7265e8'],
                    borderWidth: 0,
                }
            ]
        },
        options:
        {
            cutout: 54,
            rotation: 245
        }

    }
);

/* GRAPH 3 */

const newUser = document.getElementById("new_user_graph").getContext('2d');

const newuser = new Chart(newUser,
    {
        type: 'doughnut',
        
        data:
        {
            label: ['iPhone'],
            datasets: 
            [
                {
                    data: [50,50],
                    backgroundColor: ['#283054', '#e5833a'],
                    borderWidth: 0,
                }
            ]
        },
        options:
        {
            cutout: 54,
            rotation: 180,
            
        }

    }
);


/*      DEVICE USERS GRAPHS     */
/********************************/



/* IPHONE GRAPH */

const iPhoneGraph = document.getElementById("iPhoneGraph").getContext('2d');

var iPhoneGradient = iPhoneGraph.createLinearGradient(0, 0, 170, 0);
iPhoneGradient.addColorStop(0, "#16abfb");
iPhoneGradient.addColorStop(1, "#157ff5");
const iphonegraph = new Chart(iPhoneGraph,
    {
        type: 'bar',
        data:
        {
            labels: ['No. of devices'],
            datasets: 
            [
                {
                    label: 'iPhone Users',
                    data: [1784],
                    borderColor: iPhoneGradient,
                    backgroundColor: iPhoneGradient,
                    barThickness: 4
                
                }
            ],
            
        },

        options:
        {

            scales: 
            {
                x: 
                {
                    stacked: true,
                    ticks:
                    {
                        display: false
                    },
                    grid:
                    {
                        display: false
                    }
                },
                y: 
                {
                    stacked: true,
                    ticks:
                    {
                        display: false
                    },
                    grid:
                    {
                        display: false
                    }
                    
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
            responsive: false,
            indexAxis: 'y',
        }
    }
);



/* ANDROID GRAPH */
const androidGraph = document.getElementById("androidGraph").getContext('2d');

var androidGraphGradient = iPhoneGraph.createLinearGradient(0, 0, 170, 0);
androidGraphGradient.addColorStop(0, "#fc65d8");
androidGraphGradient.addColorStop(1, "#d12ba9");
const androidgraph = new Chart(androidGraph,
    {
        type: 'bar',
        data:
        {
            labels: ['No. of devices'],
            datasets: 
            [
                {
                    label: 'Android Users',
                    data: [1204],
                    borderColor: androidGraphGradient,
                    backgroundColor: androidGraphGradient,
                    barThickness: 4
                
                }
            ],
            
        },

        options:
        {

            scales: 
            {
                x: 
                {
                    stacked: true,
                    ticks:
                    {
                        display: false
                    },
                    grid:
                    {
                        display: false
                    }
                },
                y: 
                {
                    stacked: true,
                    ticks:
                    {
                        display: false
                    },
                    grid:
                    {
                        display: false
                    }
                    
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
            responsive: false,
            indexAxis: 'y',
        }
    }
);



/*      POPULAR PRODUCTS GRAPH      */
/* LAST GRAPH SHUKR ALHAMDULILLAH   */
/************************************/

let popular_product_graph_list = document.getElementsByClassName('popular_product_graph');

for (let i = 0 ; i < popular_product_graph_list.length ; i++)
{
    let popular_product_graph = document.getElementById('popular_product_graph'+i).getContext('2d');
    var gradientPopularProducts = popular_product_graph.createLinearGradient(0, 0, 0, 400);
    gradientPopularProducts.addColorStop(0, 'rgba(41, 179, 252,.4)');   
    gradientPopularProducts.addColorStop(.2, 'rgba(41, 179, 252,0)');
    let popularproductgraph = new Chart(popular_product_graph,
        {
            type: 'line',
            data:
            {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','May', 'Jun'],
                datasets: 
                [
                    {
                        data: [2,5,2,4,3,7,4,8],
                        borderColor: '#29b3fc',
                        backgroundColor: gradientPopularProducts,
                        fill: true,
                        tension: 0,
                        borderWidth: 2
                    
                    }
                ]
            },
    
            options:
            {
                scales:
                {
                    x:
                    {
                        grid:
                        {
                            display: false
                        },
                        ticks:
                        {
                            display: false
                        }
                    },
                    y:
                    {
                        grid:
                        {
                            display: false,
                            
                        },
                        ticks:
                        {
                            display: false
                        },
                        beginAtZero: true
                    }
                },
                elements:
                {
                    point:
                    {
                        radius: 0
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
                responsive: false
            }
        }
    );
    
}

