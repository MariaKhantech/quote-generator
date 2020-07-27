$(document).ready(() => {
	let quoteApi = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`;

	$(window).keypress((state) => {
		if (state.which === 32) {
			$('#quote').addClass('reset');
			$('#quote').removeClass('executed');
			$('#writer').toggleClass('fade');
			setTimeout(() => {
				$.get(quoteApi).then((response) => {
					console.log(response);

					const quote = response[0];
					console.log(quote.content);
					console.log(Object.keys(quote.content));
					console.log(Object.values(quote.content));
					$('#quote').html(Object.values(quote.content));
					$('#writer').html(Object.values(quote.title));
					$('#quote').addClass('executed');
					$('#quote').removeClass('reset');
					$('#writer').toggleClass('fade');
				});
			}, 1000);
		}
	});
});
