var $ = require("jquery");


export const browsing = (path) => {
  console.log(status);
  $(document).on('click', 'button', function(e) {
    if(this.getAttribute('data-target')){
      $(".container").load(path+"/app"+this.getAttribute('data-target'));
    }
    if(this.getAttribute('data-user-status')){
      status = this.getAttribute('data-user-status');
    }
  })

}
