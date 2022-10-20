/*------------------------------*/
/*              Graphe CA       */
/*------------------------------*/
var ctx_CA = document.getElementById('graph_CA').getContext('2d')

var data_CA ={
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
        {
            label: 'Ankama Games',
            data: [0, 0 , 0, 29, 0],
            fill: false,
            borderColor: 'rgb(255, 51, 0)',
            backgroundColor: 'rgb(255, 51, 0)',
        },
        {
            label: 'Arkane Studios',
            data: [11, 10 , 10, 12, 15],
            fill: false,
            borderColor: 'rgb(255, 153, 0)',
            backgroundColor: 'rgb(255, 153, 0)',
        },
        {
            label: "Don't nod Entertainement",
            data: [8, 9 , 14, 14, 13],
            fill: false,
            borderColor: 'rgb(0, 102, 102)',
            backgroundColor: 'rgb(0, 102, 102)',
        },
        {
            label: 'Quantic Dream',
            data: [0, 0 , 4, 14, 13],
            fill: false,
            borderColor: 'rgb(0, 153, 255)',
            backgroundColor: 'rgb(0, 153, 255)',
        } 
    ]
}
var options_CA
var config_CA ={
    type: 'bar',
    data: data_CA,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
              borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
        title: {
          display: true,
          text: "Chiffre d'affaires en millions"
        }
      }
    },

}
var graph_CA = new Chart(ctx_CA, config_CA)
/*------------------------------*/
/*------------------------------*/

/*------------------------------*/
/*         Graphe employés      */
/*------------------------------*/
var ctx_emp = document.getElementById('graph_emp').getContext('2d')

var data_emp ={
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
        {
            label: 'Ankama Games',
            data: [0, 0 , 0, 78, 0],
            fill: false,
            borderColor: 'rgb(255, 51, 0)',
            backgroundColor: 'rgb(255, 51, 0)',
        },
        {
            label: 'Arkane Studios',
            data: [114, 108 , 113, 143, 155],
            fill: false,
            borderColor: 'rgb(255, 153, 0)',
            backgroundColor: 'rgb(255, 153, 0)',
        },
        {
            label: "Don't nod Entertainement",
            data: [83, 103 , 132, 197, 224],
            fill: false,
            borderColor: 'rgb(0, 102, 102)',
            backgroundColor: 'rgb(0, 102, 102)',
        },
        {
            label: 'Quantic Dream',
            data: [0, 0 , 115, 117, 139],
            fill: false,
            borderColor: 'rgb(0, 153, 255)',
            backgroundColor: 'rgb(0, 153, 255)',
        } 
    ]
}
var options_emp
var config_emp ={
    type: 'bar',
    data: data_emp,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
              borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
        title: {
          display: true,
          text: "Nombre d'employés par an"
        }
      }
    },

}
var graph_emp = new Chart(ctx_emp, config_emp)
/*------------------------------*/
/*------------------------------*/

/*------------------------------*/
/*     GRAPHIQUE Salaire     */
/*------------------------------*/
var ctx_salaire = document.getElementById('graph_salaire').getContext('2d')

var data_salaire ={
    labels: ['Ankama Games', 'Arkane Studios', "Don't Nod Entertainement", 'Quantic Dream'],
    datasets: [
        {
        label: "Salaire en milier d'euros",
        data: [25, 32, 31, 25],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_salaire 
var config_salaire ={
    type: 'bar',
    data: data_salaire,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Salaire annuel moyen d'un game designer"
        }
      }
    },

}
var graph_salaire = new Chart(ctx_salaire, config_salaire)
/*------------------------------*/
/*------------------------------*/

/*------------------------------*/
/*     GRAPHIQUE Sastisfaction     */
/*------------------------------*/
var ctx_satisfaction = document.getElementById('graph_satisfaction').getContext('2d')

var data_satisfaction ={
    labels: ['Ankama Games', 'Arkane Studios', "Don't Nod Entertainement", 'Quantic Dream'],
    datasets: [
        {
        label: "Note des employés",
        data: [3, 4, 3.8, 4.2],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_satisfaction 
var config_satisfaction ={
    type: 'bar',
    data: data_satisfaction,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Satisfaction des employés dans les différents studios"
        }
      }
    },

}
var graph_satisfaction = new Chart(ctx_satisfaction, config_satisfaction)
/*------------------------------*/
/*------------------------------*/

/*------------------------------*/
/*     GRAPHIQUE reco     */
/*------------------------------*/
var ctx_reco = document.getElementById('graph_reco').getContext('2d')

var data_reco ={
    labels: ['Ankama Games', 'Arkane Studios', "Don't Nod Entertainement", 'Quantic Dream'],
    datasets: [
        {
        label: "Pourcentage d'employés recommandant leur entreprise",
        data: [37, 87, 68, 82],
        fill: false,
        borderColor: 'rgb(255, 195, 0)',
        backgroundColor: 'rgb(255, 195, 0)',
        }      
    ]
}
var options_reco 
var config_reco ={
    type: 'bar',
    data: data_reco,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Taux de recommandations des entreprises"
        }
      }
    },

}
var graph_reco = new Chart(ctx_reco, config_reco)
/*------------------------------*/
/*------------------------------*/