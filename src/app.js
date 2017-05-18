var $ = require("jquery");

var status;

// Small helpers you might want to keep
import './helpers/context_menu.js';
import './helpers/external_links.js';

// All stuff below is just to show you how it works. You can delete all of it.
import { greet } from './hello_world/hello_world';
import { remote } from 'electron';


const app = remote.app;


//const manifest = appDir.read('package.json', 'json');


// document.querySelector('#greet').innerHTML = greet();

// $(".classRollTarget").click(function() {
//   alert(this.getAttribute('data-user-status'));
//   status = this.getAttribute('data-user-status');
// });

$(document).on('click', 'button', function(e) {
  if(this.getAttribute('data-target')){
    $(".container").load(app.getAppPath()+"/app"+this.getAttribute('data-target'));
  }
  if(this.getAttribute('data-user-status')){
    status = this.getAttribute('data-user-status');
  }
})
