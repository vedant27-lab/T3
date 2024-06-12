path = require 'path'
fs = require 'fs-extra'
tilde = require 'tilde-expansion'
log = console.log

module.exports = (args) ->
	tilde '~', (home) =>
		# get the location of the settings
		dir = home + '/.t3/'
		fileName = dir + 't3.json'
		log 'settings json location'
		log fileName
		# read the settings file
		fs.readJson fileName, (err, t3Object) =>
			err && throw err
			log 'current sheet from settings'
			# log the setings object
			log t3Object
			# log the current shheet
			sheet = t3Object.currentSheet
			console.log sheet
			# show the location of the current sheet
			sheetLocation = dir + sheet + '.json'
			log 'location of current sheet'
			console.log sheetLocation
			# read the current sheet
			fs.readJson sheetLocation, (err, sheetObject) =>
				err && throw err
				# log the json from the sheet
				log 'json object of current sheet'
				console.log sheetObject
				# log the last id of the sheet object
				newId = parseInt sheetObject.lastId
				console.log newId
				if args[0] is undefined then args[0] = "unknown"
				itemObject =
					id: newId + 1
					note: args[0]
					start: Date.now()
					end: false
				#log the item object
				sheetObject.items.push itemObject
				sheetObject.lastId = newId + 1
				fs.writeJson sheetLocation, sheetObject, (err) =>
					log itemObject
					console.log "New task in #{ sheet } started"

				
				

