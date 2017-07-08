var Datastore = require('nedb')
var db;
export class database {

    constructor(path) {
    this.path = path;
    this.db = new Datastore({ filename: path+'/app/data/classes.db', autoload: true });

  }

  displayClasses(status){
    this.db.find({ name: { $exists: true } },  (err, docs) => {
      if(docs.length == 0){
        $("#content-receipt").append("<div>Pas de classe pour l'instant</div>")
      }
      else {
        for (var i = 0; i< docs.length; i++) {
          var img = this.path+ '/app/data/img/classes/'+docs[i].img;
          $("#content-receipt").append('<a id="classe'+i+'" class = "browsing" data-target="/html/studentRoll.html" data-current-class="'+docs[i]._id+'" href="#"><img class="classe_img"  src="'+img+'"> <p> ' + docs[i].name+'</p></a>');
          var divId = "classe"+i;
          // document.getElementById(divId).addEventListener("click", function(){
          //   ListeEleves(idUser,this.getAttribute('data-id'))
          // });

        }
      }
      if (status == "teacher") {
        $("#content-receipt").append('<button type="button" class="browsing btn btn-default" onClick: "return true" data-target="/html/classeCreation.html"> Créer une classe </button>')
        $("#createClasse").on("click", "button", function(){
          createClasse();
        });
      }

    });
  }
   displayStudents(classeId,status){
    if (status == "teacher") {
      $("#content-receipt").append('<button type="button" class="browsing btn btn-default" onClick: "return true" data-target="/html/classeCreation.html"> Créer une classe </button>')
      $("#createClasse").on("click", "button", function(){
        createClasse();
      });
    }
   }

  saveClasse(path){
  }
}
