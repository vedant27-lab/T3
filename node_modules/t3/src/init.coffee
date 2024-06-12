path = require 'path'
fs = require 'fs-extra'
tilde = require 'tilde-expansion'

module.exports = ->
	tilde '~/', (home) ->
		t3 =
			directory: home
			currentSheet: ''
		fs.mkdirs home + '/.t3', (err) =>
			err && throw err
			fs.writeJson home + '.t3/t3.json', t3, (err) =>
				err && throw err
				console.log "T3 is ready to be used."
