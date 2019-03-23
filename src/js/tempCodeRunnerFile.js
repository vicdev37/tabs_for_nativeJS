function hui(a, b) {
		console.log(this)
		return a
	}

	console.log(hui(5, 6));