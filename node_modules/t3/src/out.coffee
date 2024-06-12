path = require 'path'
fs = require 'fs-extra'
tilde = require 'tilde-expansion'
log = console.log
_ = require 'underscore'

module.exports = (args) ->
	tilde '~', (home) =>
		# get the location of the settings
		dir = home + '/.t3/'
		fileName = dir + 't3.json'
		# read the settings file
		fs.readJson fileName, (err, t3Object) =>
			err && throw err
			# log the setings object
			# log the current shheet
			sheet = t3Object.currentSheet
			# show the location of the current sheet
			sheetLocation = dir + sheet + '.json'
			# read the current sheet
			fs.readJson sheetLocation, (err, sheetObject) =>
				err && throw err
				# log the json from the sheet
				# log the last id of the sheet object
				lastId = parseInt sheetObject.lastId
				# log the last object
				log _.findWhere sheetObject.items, {id: lastId}
				for item in sheetObject.items when item.id is lastId
					item.end = Date.now()
					console.log item
				fs.writeJson sheetLocation, sheetObject, (err) =>
					console.log "Task in #{ sheet } finished"
				
				

