const ctx = document.getElementById('lineChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','Aug','Sept','Oct','Nov','Dec'],
    datasets: [{
      label: 'Earning in $',
      data: [12, 11, 10, 5, 8, 7,4,2,3,1,44,50],
      backgroundColor:[
        'rgba(85,85,85,1)'
      ],
      borderColor:[
        'rgb(41,155,99)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});
