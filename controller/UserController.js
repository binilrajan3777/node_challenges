const Joi = require('joi');
const apiresponse = require('../helper/apiResponse');
const userservice = require('../service/userservice');


module.exports =
{
    login: (req, res) => {
        try {
            const schema = Joi.object().keys({
                username: Joi.string().required(),
                password: Joi.string().required()
            });
            const { error, value } = schema.validate(req.body);
            if (error)
                return apiresponse.ValidationErrorResponse(res, 'Validation Error.', error.details.map(x => x.message).join(', '));
            userservice.authcheck(res,value);
        }
        catch (err) {
            apiresponse.ErrorResponse(res, err);
        }
    },
    searchStock: (req, res) => {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required()
            });
            const { error, value } = schema.validate(req.params);
            if (error)
                return apiresponse.ValidationErrorResponse(res, 'Validation Error.', error.details.map(x => x.message).join(', '));
            userservice.searchstock(res, value);
        }
        catch (err) {
            apiresponse.ErrorResponse(res, err);
        }
    },

    suggestion: (req, res) => {
        try {
            const schema = Joi.object().keys({
                name: Joi.string().required()
            });
            const { error, value } = schema.validate(req.body);
            if (error)
                return apiresponse.ValidationErrorResponse(res, 'Validation Error.', error.details.map(x => x.message).join(', '));
            userservice.suggestion(res, value);
        }
        catch (err) {
            apiresponse.ErrorResponse(res, err);
        }
    },
    getdetails: (req, res) => {
        try {
            const schema = Joi.object().keys({
                id: Joi.number().integer().required()
            });
            const { error, value } = schema.validate(req.params);
            if (error)
                return apiresponse.ValidationErrorResponse(res, 'Validation Error.', error.details.map(x => x.message).join(', '));
            userservice.getdetails(res, value);
        }
        catch (err) {
            apiresponse.ErrorResponse(res, err);
        }
    }

}