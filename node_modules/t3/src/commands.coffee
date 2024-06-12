module.exports =
	init: ->
		require('./init')()
	start: ->
		require('./start')()
	create: (args) ->
		require('./sheet')(args)
	s: (args) ->
		require('./sheet')(args)
	sheet: (args) ->
		require('./sheet')(args)
	in: (args) ->
		require('./in')(args)
	out: (args) ->
		require('./out')(args)
	show: ->
		require('./show')()
