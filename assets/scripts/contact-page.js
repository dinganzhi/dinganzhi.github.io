var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: 'https://formspree.io/contactform@vietanhdev.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$submit.attr('disabled', true).val('Sending...');
		},
		success: function(data) {
			$submit.val('Message sent!');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
		},
		error: function(err) {
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 5000);
		}
	});
});
