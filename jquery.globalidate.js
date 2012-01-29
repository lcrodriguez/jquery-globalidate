$.validator.methods.range = function (value, element, param) {
	var globalizedValue = Globalize.parseFloat(value);
	return this.optional(element) || (globalizedValue >= param[0] && globalizedValue <= param[1]);
}

$.validator.methods.min = function (value, element, param) {
	var globalizedValue = Globalize.parseFloat(value);
	return this.optional(element) || globalizedValue >= param;
}

$.validator.methods.max = function (value, element, param) {
	var globalizedValue = Globalize.parseFloat(value);
	return this.optional(element) || globalizedValue <= param;
}

$.validator.methods.number = function (value, element) {
	culture = Globalize.culture();
	return this.optional(element) || new RegExp("^-?(?:\\d+|\\d{1,3}(?:" + culture.numberFormat[","].replace(".","\\.") + "\\d{3})+)(?:" + culture.numberFormat["."].replace(".","\\.") + "\\d+)?$").test(value);
}

$.validator.methods.date = function (value, element) {
	return this.optional(element) || (parsed = Globalize.parseDate(value) && parsed != null && !/Invalid|NaN/.test(parsed));
}