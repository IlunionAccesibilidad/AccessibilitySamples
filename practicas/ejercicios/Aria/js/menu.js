<script>

var lastExpanded = new Array();
var menuIsClicked = false;

$(document).ready(function() {
handleClick('#main_menu');
handleFocus();
});// documentready.

$(document).keydown(function(e) {
handleKeyDown(e, 27);
}); // documentkeydown.

function handleClick(ulId){

menuIsClicked = true;
$(ulId).find('a').each(function() {
var linkId = "#"+$(this).attr("id");

$(linkId).bind("click", function(){

var expanded = $(linkId).attr('aria-expanded');

if(expanded == 'false'){
$(linkId).attr('aria-expanded', 'true');
$(linkId).next().show();
lastExpanded.push(linkId);
} else if(expanded == 'true'){
$(linkId).attr('aria-expanded', 'false');
$(linkId).next().hide();
}// end if expanded.

});// click.
});// each.

}// end handleClick.

function handleKeyDown(event, code){


// event.preventDefault();
var key = event.which;

switch(key){
case code:
var lastElement = lastExpanded[(lastExpanded.length-1)];
  $(lastElement).focus();
$(lastElement).attr('aria-expanded', 'false');
    var nextId = "#"+$(lastElement).next().attr('id');
$(nextId).hide();

lastExpanded.pop();
}// end switch

}// end handleKeyDown.

function handleFocus(){
$("#main_menu a").focus(function(){

var focused = $(this);
focused.css('background-color', '#000000');
focused.css('color', '#ffffff');

}); // end focus.

$("#main_menu a").blur(function(){

var blurred = $(this);
blurred.css('background-color', '#ffffff');
blurred.css('color', '#000000');

});

}// end handleFocus.
</script>