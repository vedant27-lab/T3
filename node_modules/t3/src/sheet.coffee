path = require 'path'
fs = require 'fs-extra'
tilde = require 'tilde-expansion'

module.exports = (args) ->
	tilde '~/', (home) ->
		fs.readJson home + '.t3/t3.json', (err, t3Object) =>
			console.log t3Object
			fileName = home + '.t3/' +  args[0] + '.json'
			fs.exists fileName, (exists) =>
				if exists
					t3Object.currentSheet = args[0]
					fs.writeJson home + '.t3/t3.json', t3Object, (err) =>
						console.log "Switched to sheet #{args[0]}"
				else
					object =
						lastId: 0
						items: []

					fs.writeJson fileName, object, (err) =>
						err && throw err
						t3Object.currentSheet = args[0]
						fs.writeJson home + '.t3/t3.json', t3Object, (err) =>
							console.log "Switched to sheet #{args[0]}"
							console.log "Sheet #{args[0]} created here: #{ fileName}"

