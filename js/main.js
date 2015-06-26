// require config
require.config({
	paths: {
		'jquery': 'lib/jquery/jquery-2.1.4.min',
		'hbs': 'lib/Handlebars/handlebars-v3.0.3',
		'utils': 'utils/utils'
	}
});

// require main
require(['jquery', 'hbs', 'utils', 'view/initialView'], function($, hbs, utils, initialView) {

	$(document).ready(function() {

		initialView.init();

	});

});