function showMes() {
    console.log("hello");
}
showMes();
function message(from, text) {
    if (text === void 0) { text = "no text provided"; }
    console.log(from + ": " + text);
}
message("anshul");
//closures
var pet = function (s) {
    var getName = function () {
        return s;
    };
    return getName;
};
var viv = pet("Vivie");
console.log(viv());
