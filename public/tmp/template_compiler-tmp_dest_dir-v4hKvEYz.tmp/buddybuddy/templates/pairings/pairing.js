import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<li>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "createdAt", "MMM DD, YYYY", options) : helperMissing.call(depth0, "format-date", "createdAt", "MMM DD, YYYY", options))));
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" by ");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n");
  return buffer;
  }

  data.buffer.push("<h3>Hi ");
  stack1 = helpers._triageMustache.call(depth0, "currentUserService.user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("!</h3>\n<hr />\n<div class=\"row\">\n  <div class=\"col-xs-9\">\n    <p>Your buddy is ");
  stack1 = helpers._triageMustache.call(depth0, "yourBuddy.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" for ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "startDate", "MMM DD, YYYY", options) : helperMissing.call(depth0, "format-date", "startDate", "MMM DD, YYYY", options))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "endDate", "MMM DD, YYYY", options) : helperMissing.call(depth0, "format-date", "endDate", "MMM DD, YYYY", options))));
  data.buffer.push(".</p>\n  </div>\n  <div class=\"col-xs-3\">\n    <button class=\"btn btn-primary btn-block btn-lg\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "checkin", "content", "today", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-ok\"></span> Check In Today</button>\n  </div>\n</div>\n<h4>\n\n<h4>\n	");
  stack1 = helpers._triageMustache.call(depth0, "primaryUser.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"glyphicon glyphicon-heart\"></span> ");
  stack1 = helpers._triageMustache.call(depth0, "secondaryUser.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</h4>\n\n<h4>Checked-ins: </h4>\n<ul>\n");
  stack1 = helpers.each.call(depth0, "logs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
