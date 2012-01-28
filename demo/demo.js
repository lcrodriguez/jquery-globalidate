(function( $ ) {

$(function() {

    // fill cultures dropdown with the available cultures
    $.each(sortByName(Globalize.cultures), function(i, culture) {
        $("<option/>", {
            value: culture.name,
            text: culture.name + ": " + culture.englishName + " (" + culture.nativeName + ")"
        }).appendTo("#cultures");
    });

    // re-render templates after selecting a culture
    $("#cultures").bind("change keyup", selectCulture).val("es-AR");

    $("#parseDate").change(function() {
        $("#parseDateResult").text(Globalize.parseDate($(this).val()).toString());
    });
    $("#parseNumber").change(function() {
        $("#parseNumberResult").text(Globalize.parseFloat($(this).val()).toString());
    });

    function selectCulture() {
        // sets the current culture to the value specified in the cultures dropdown,
        // populates the calendars dropdown with that cultures calendars,
        // and renders the formatting templates.
        Globalize.culture($("#cultures").val());
    }
	
	function sortByName(map) {
        // converts a dictionary into a sorted dictionary based on obj.name
        var arr = [];
        $.each(map, function(name, value) {
            arr.push(value);
        });
        arr.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
        return arr;
    }
	
	$("#frm-to-validate").validate( 
		{
			rules: {
				number: { required: true, number: true, range: [100,200] },
				date: { required: true, date: true },
			}
		}
	);
	
    // initial rendering
    selectCulture();
});

}( jQuery ));