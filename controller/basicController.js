const basicController = {};

basicController.get = (req, res) => {
	res.json({
		message: "hey Welcome to my Api"
	});
}

export default basicController;