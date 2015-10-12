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

// Crosses the item through to show completed
$(document).on('click', '.check', function() {
  $(this).closest('li').addClass('completed');
  console.log('checked');
});

//Removes the line through completed item
$(document).on('click', '.completed', function() {
  $(this).closest('li').removeClass('completed').addClass('list-items');
  console.log('unchecked');
});

//Deletes the item
$(document).on('click', '.delete', function() {
  $(this).closest('li').remove();
  console.log('gone');
});

});