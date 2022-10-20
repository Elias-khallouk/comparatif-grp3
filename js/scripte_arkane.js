/*------------------------------*/
/*     GRAPHIQUE 1 ARKANE      */
/*------------------------------*/
var ctx_1_arkane = document.getElementById('graph1_arkane').getContext('2d')

var data_1_arkane ={
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [{
        label: 'Courbe du nombre de salariés',
        data: [114, 108, 113, 143, 155],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
    }]
}
var options_1_arkane
var config_1_arkane ={
    type: 'line',
    data: data_1_arkane,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Evolution du nombre de salariés par année'
        }
      }
    },
}
var graph1_arkane = new Chart(ctx_1_arkane, config_1_arkane)
/*------------------------------*/
/*------------------------------*/



/*------------------------------*/
/*     GRAPHIQUE 2 ARKANE      */
/*------------------------------*/
var ctx_2_arkane = document.getElementById('graph2_arkane').getContext('2d')

var data_2_arkane ={
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [{
        label: 'Courbe du capital',
        data: [11, 10, 10, 12, 15],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
    }]
}
var options_2_arkane
var config_2_arkane ={
    type: 'line',
    data: data_2_arkane,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Evolution du capital en milion d'euros par année"
        }
      }
    },
}
var graph1_arkane = new Chart(ctx_2_arkane, config_2_arkane)
/*------------------------------*/
/*------------------------------*/



/*------------------------------*/
/*     GRAPHIQUE 3 ARKANE      */
/*------------------------------*/
var ctx_3_arkane = document.getElementById('graph3_arkane').getContext('2d')

var data_3_arkane ={
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [{
        label: 'Courbe du capital',
        data: [11, 10, 10, 12, 15],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
    }]
}
var options_3_arkane
var config_3_arkane ={
    type: 'line',
    data: data_3_arkane,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Evolution du d'affaire en milion d'euros par année"
        }
      }
    },
}
var graph1_arkane = new Chart(ctx_3_arkane, config_3_arkane)
/*------------------------------*/
/*------------------------------*/