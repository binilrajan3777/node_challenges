exports.SuccessResponse = function (res, msg) {
	var data = {
		statuscode: 200,
		message: msg
	};
	return res.status(200).json(data);
};

exports.SuccessResponseWithData = function (res, msg, data) {
	var resData = {
		statuscode: 200,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.ErrorResponse = function (res, msg) {
	var data = {
		statuscode: 500,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.NotFoundResponse = function (res, msg) {
	var data = {
		statuscode: 404,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.ValidationErrorResponse = function (res, msg, data) {
	var resData = {
		statuscode: 400,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};
exports.UnauthorizedResponse = function (res, msg) {
	var resData = {
		statuscode: 401,
		message: msg
	};
	return res.status(401).json(resData);
};