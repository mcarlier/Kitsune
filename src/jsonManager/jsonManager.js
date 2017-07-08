var fs = require('fs');

export const saveFormInJson = (path) => {
  var names = [];
  var values = [];
  $('label').each(function(){
      names.push($(this).text());
  });
  $('input').each(function(){
      values.push($(this).val());
  });
  console.log(names);
  createFile(path)
};

const createFile = (path) =>{
  var nameFile =path+ "/app/data/classeA.json"
  if(fs.existsSync(nameFile)){
    return false;
    console.log("le fichier existe dejà");
  }
  else{
    fs.writeFile(nameFile, "", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

  }

}
