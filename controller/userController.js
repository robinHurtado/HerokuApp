import db from "./../models"; // it loads index.js by default 

const userController = {}

userController.post = (req, res) => {
	// Destructuring - bind variables with the keys in body object
	const { username, password } = req.body; 

	// validation

	// es6 allows you simplify {username:user} to {username}
	const user = new db.User({
		username,
		password
	});

	user.save().then((newUser) => {
		res.status(200).json({
			success: true,
			data: newUser
		});

	}).catch((err) => {
		res.status(500).json({
			message: err
		})
	})
}


userController.get = (req, res) => {
	// user 
	const user = db.User;

	user.find().then((result) => {
		res.status(200).json({result});

	}).catch((err) => {
		res.status(500).json({
			message: err
		})
	})
}

export default userController;