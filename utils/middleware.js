const unknownEndpoint = (req, res) => {
	res.json({
		message: 'Page not found, please GO BACK!!'
	})
}

module.exports = {
	unknownEndpoint
}