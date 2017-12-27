const {Button, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'Tabris.js rocks!';
});

webserver.onRequest(
	function(request) {
		console.log("O MA GAWD! This is the request: ", request);

		webserver.sendResponse(
			request.requestId,
			{
				status: 200,
				body: '<html>Hello World</html>',
				headers: {
					'Content-Type': 'text/html'
				}
			}
		);
	}
);

webserver.start();
