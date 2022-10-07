

/*------------------------------*/
/*     GRAPHIQUE 1 QUANTIC      */
/*------------------------------*/
var ctx_1_quantic = document.getElementById('graph1_quantic').getContext('2d')

var data_1_quantic ={
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
    }]
}
var options_1_quantic 
var config_1_quantic ={
    type: 'line',
    data: data_1_quantic,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'EVOLUTION line Chart'
        }
      }
    },
}
var graph1_quantic = new Chart(ctx_1_quantic, config_1_quantic)
/*------------------------------*/
/*------------------------------*/





/*------------------------------*/
/*     GRAPHIQUE 2 QUANTIC      */
/*------------------------------*/
var ctx_2_quantic = document.getElementById('graph2_quantic').getContext('2d')

var data_2_quantic ={
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'Looping tension',
        data: [65, 59, 80, 82, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_2_quantic 
var config_2_quantic ={
    type: 'bar',
    data: data_2_quantic,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'EVOLUTION line Chart'
        }
      }
    },

}
var graph2_quantic = new Chart(ctx_2_quantic, config_2_quantic)
/*------------------------------*/
/*------------------------------*/
