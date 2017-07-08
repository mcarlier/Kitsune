var $ = require("jquery");

var status = "";
var classe = "";
var student = "";


export const browsing = (path) => {
  $(document).on('click', '.browsing', function(e) {
    if(this.getAttribute('data-target')){
      $(".container").load(path+"/app"+this.getAttribute('data-target'));
    }
    if(this.getAttribute('data-user-status')){
      status = this.getAttribute('data-user-status');
    }
    if(this.getAttribute('data-current-class')){
      classe = this.getAttribute('data-current-class');
    }
  })
}
export const get = (val) => {
   switch(val) {
    case 'status':
      return status;
    case 'classe':
      return classe;
    case 'student':
      return student;
  }
};

// export const set = (val) => {
//    switch(val) {
//     case 'status':
//        status = val;
//     case 'classe':
//        classe = val;
//     case 'student':
//        student = val;
//   }
// };
