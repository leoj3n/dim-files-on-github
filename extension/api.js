(() => {
	'use strict';

	window.DimFilesOnGitHub = (() => {
		const defaults = {
			dimRegExp: '^\\.|^license|^appveyor\\.yml$'
		};

		const api = {
			storage: {
				get: cb => {
					window.chrome.storage.sync.get(defaults, items => {
						cb(null, items);
					});
				},
				set: obj => {
					window.chrome.storage.sync.set(obj);
				}
			}
		};

		api.defaults = defaults;

		return api;
	})();
})();
