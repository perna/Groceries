var frameModule = require("ui/frame");
var page;
var email;

exports.loaded = function(args) {
  console.log("hello");
};

exports.signIn = function() {
  alert("Signing in");
};

exports.register = function() {
  var topmost = frameModule.topmost();
  topmost.navigate("views/register/register")
}