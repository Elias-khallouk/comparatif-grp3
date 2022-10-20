/*------------------------------*/
/*     GRAPHIQUE 1 ANKAMA      */
/*------------------------------*/
var ctx_1_ankama = document.getElementById('graph1_ankama').getContext('2d')

var data_1_ankama ={
    labels: ['2012', '2013', '2014', '2015', '2016','2017','2018'],
    datasets: [
        {
        label: 'Mises A Jour',
        data: [ 4, 8, 9, 6, 6, 5, 4],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_1_ankama 
var config_1_ankama ={
    type: 'bar',
    data: data_1_ankama,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Nombre de mise à jour majeures de Dofus par an '
        }
      }
    },

}
var graph1_ankama = new Chart(ctx_1_ankama, config_1_ankama)
/*------------------------------*/
/*------------------------------*/





