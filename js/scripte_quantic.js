/*------------------------------*/
/*     GRAPHIQUE 1 QUANTIC      */
/*------------------------------*/
var ctx_1_quantic = document.getElementById('graph1_quantic').getContext('2d')

var data_1_quantic ={
    labels: ['Youtube', 'Instagramme', 'Facebook', 'Twitter', 'Linkedin','Tiktok'],
    datasets: [
        {
        label: 'Réseaux Sociaux',
        data: [11.7,67.7 , 35, 100.7, 31.4, 11.4],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_1_quantic 
var config_1_quantic ={
    type: 'bar',
    data: data_1_quantic,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Nombre des abonné des réseaux sociaux en milliers'
        }
      }
    },

}
var graph1_quantic = new Chart(ctx_1_quantic, config_1_quantic)
/*------------------------------*/
/*------------------------------*/