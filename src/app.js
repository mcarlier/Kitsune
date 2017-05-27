import { remote } from 'electron';
const app = remote.app;

import { socket } from './socket/socket';
var status;
import { browsing } from './browsing/browsing';

socket();
browsing(app.getAppPath());

var jsonfile = require('jsonfile')
//
var file = app.getAppPath()+ '/app/data/classes.json';
console.log(file);
// jsonfile.readFile(file, function(err, obj) {
  // $("#content-receipt").html("<h1> Liste des classes</h1>");
  // if(obj.counter==0){
  //   $("#content-receipt").append("<div>Pas de classe pour l'instant</div>")
  // }
  // else {
  //   for (var i = 1; i<= obj.counter; i++) {
  //     var img = cwd().replace(/build/,'app/data/img/classes/'+obj[i.toString()].img);
  //     $("#content-receipt").append('<a id="classe'+i+'" data-id="'+i+'" href="#"><img class="classe_img"  src="'+img+'"> <p> '+obj[i.toString()].name+'</p></a>');
  //     var divId = "classe"+i;
  //     document.getElementById(divId).addEventListener("click", function(){
  //       ListeEleves(idUser,this.getAttribute('data-id'))
  //     });
  //
  //   }
  // }

  // if (idUser=="enseignant") {
  //   $("#content-receipt").append('<div id="createClasse"><button type="button" class="btn btn-default" onClick: "return true"> Créer une classe </button></div>')
  //   $("#createClasse").on("click", "button", function(){
  //     createClasse();
  //   });
  // }
//});
