var $ = require("jquery");

var status = "";
export const browsing = (path) => {
  console.log("path = ", path)
  $(document).on('click', 'button', function(e) {
    if(this.getAttribute('data-target')){
      console.log("path = ", path)
      $(".container").load(path+"/app"+this.getAttribute('data-target'));
    }
    if(this.getAttribute('data-user-status')){
      status = this.getAttribute('data-user-status');
    }
  })
}
export const getStatus = () => {
  return status;
};
