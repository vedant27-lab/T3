path = require 'path'
fs = require 'fs-extra'
tilde = require 'tilde-expansion'
log = console.log
walk = require 'walk'

module.exports = ->
	tilde '~', (home) =>
		dir = home + '/.t3'
		files = []

		# Walker options
		console.log dir
		walker = walk.walk(dir,
			followLinks: false
		)
		walker.on "file", (root, stat, next) ->

			# Add this file to the list of files
			unless stat.name is 't3.json'
				files.push root + "/" + stat.name
			next()

		walker.on "end", ->
			console.log files
			for file in files
				fs.readJson file, (err, object) ->
					console.log object

