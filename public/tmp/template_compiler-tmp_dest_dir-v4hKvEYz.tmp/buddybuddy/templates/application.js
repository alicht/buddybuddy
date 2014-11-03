import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.user", "currentUserService.user", options) : helperMissing.call(depth0, "link-to", "users.user", "currentUserService.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li><li> <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sign Out</a></li>\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "currentUserService.user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\" navbar-header\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("navbar-brand")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Welcome to Buddy Buddy", "application", options) : helperMissing.call(depth0, "link-to", "Welcome to Buddy Buddy", "application", options))));
  data.buffer.push("\n      <div class=\"navbar-left\">\n        <ul class=\"nav navbar-nav\">\n          <li>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Buddies", "users.index", options) : helperMissing.call(depth0, "link-to", "Buddies", "users.index", options))));
  data.buffer.push("</li>\n          ");
  stack1 = helpers['if'].call(depth0, "currentUserService.user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n      </div>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>\n\n<div class=\"container main-container\">\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div><!-- /.container -->\n\n");
  return buffer;
  
});
