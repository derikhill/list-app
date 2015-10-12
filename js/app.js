$(document).ready(function() {

var check = '<span class="check"></span>'
var done = '<span class="delete"></span>'


$('.enter-items').keydown(function(event) {
	if (event.which == 13) {
		event.preventDefault();
		var text = $('.enter-items').val();
		$('.list-items').prepend('<li>' + check + text + done + '</li>');
		$('.enter-items').val('');
		console.log ("hello");
		};
	});

$(document).on('click', '.check', function() {
  $(this).closest('li').addClass('completed');
  console.log('checked');
});

});