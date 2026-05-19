//your JS code here. If required.
let name = document.getElementById("fname");
name.onblur = function toUpper(params) {
	name.value = name.value.toUpperCase();
}