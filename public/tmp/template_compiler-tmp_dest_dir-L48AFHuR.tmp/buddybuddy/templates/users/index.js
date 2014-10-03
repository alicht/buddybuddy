import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"col-md-4\"> <span class=\"glyphicon glyphicon-user\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "user.name", "users.user", "user", options) : helperMissing.call(depth0, "link-to", "user.name", "users.user", "user", options))));
  data.buffer.push("</div>\n  </div>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>Buddies</h2>\n\n<div class=\"container\">\n  ");
  stack1 = helpers.each.call(depth0, "user", "in", "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n</div>\n");
  return buffer;
  
});
