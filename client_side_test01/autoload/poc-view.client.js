YUI.add("poc-view", function (Y) {var cache = Y.namespace("Env.Mojito.Handlebars");cache["/static/Main/views/other.hb.html"] = {compiled: Y.Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"";
  foundHelper = helpers.mojit_view_id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.mojit_view_id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n   Other!\n</div>\n";
  return buffer;})};}, "0.0.1", {requires: ["mojito-hb"]});