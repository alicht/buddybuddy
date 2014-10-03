import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>Who are you?</h2>\n<div class=\"row\">\n  <div class=\"col-xs-10\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("model"),
    'value': ("selectedUser"),
    'optionLabelPath': ("content.name"),
    'prompt': ("Select your name"),
    'class': ("form-control")
  },hashTypes:{'content': "ID",'value': "ID",'optionLabelPath': "STRING",'prompt': "STRING",'class': "STRING"},hashContexts:{'content': depth0,'value': depth0,'optionLabelPath': depth0,'prompt': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n  <div class=\"col-xs-2\">\n    <button class=\"btn btn-default btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", "selectedUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Login</button>\n  </div>\n</div>");
  return buffer;
  
});
