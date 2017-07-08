var jsonfile = require('jsonfile')


var MongoClient = require("mongodb").MongoClient;

import {saveFormInJson} from '../jsonManager/jsonManager';

export class classe {
  constructor() {
  }
  displayClasses(path,status){
  var file = path+ '/app/data/classes.json';
  jsonfile.readFile(file, function(err, obj) {
    if(obj.counter==0){
      $("#content-receipt").append("<div>Pas de classe pour l'instant</div>")
    }
    else {
      for (var i = 1; i<= obj.counter; i++) {
        var img = path+ '/app/data/img/classes/'+obj[i.toString()].img;
        $("#content-receipt").append('<a id="classe'+i+'" data-id="'+i+'" href="#"><img class="classe_img"  src="'+img+'"> <p> '+obj[i.toString()].name+'</p></a>');
        var divId = "classe"+i;
        document.getElementById(divId).addEventListener("click", function(){
          ListeEleves(idUser,this.getAttribute('data-id'))
        });

      }
    }
    if (status=="teacher") {
      $("#content-receipt").append('<button type="button" class="btn btn-default" onClick: "return true" data-target="/html/classeCreation.html"> Créer une classe </button>')
      $("#createClasse").on("click", "button", function(){
        createClasse();
      });
    }
  });

  }

  saveClasse(path){
    saveFormInJson(path)

    // const form = $(".label").value
    // console.log(form);
    // saveFormInJson();
  }
}
