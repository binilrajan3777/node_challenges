
const apiresponse = require('../helper/apiResponse');
const pool = require('../config/dbconnection');
const jwt = require('jsonwebtoken');
const appconfig = require('../config/appconfig');

module.exports={
    authcheck: (res, data) => {
        try {
            pool.getConnection(function (err, connection) {
                try {
                    if (err) 
                        return apiresponse.ErrorResponse(res, err.message);
                    
                    connection.query('CALL sp_login(?,?)', [data.username, data.password], function (err, results_data) {
                        try {
                            if (err)
                                return apiresponse.ErrorResponse(res, err.message);

                            if (results_data.length > 0) {
                                if (results_data[0].length !== 0) {
                                    console.log(typeof (results_data[0][0].id));
                                    if (results_data[0][0].id == 0)
                                        apiresponse.UnauthorizedResponse(res, "Invalid username or password");
                                    else {
                                        const token = jwt.sign({ userid: results_data[0][0].id }, appconfig.auth.jwt_secret, { expiresIn: appconfig.auth.jwt_expiresin, algorithm: 'HS512' });
                                        return apiresponse.SuccessResponseWithData(res, "Login Success", token);
                                    }
                                        
                                }
                                else {
                                    connection.release();
                                    return apiresponse.UnauthorizedResponse(res, "Invalid username or password");
                                }
                            }
                            else {
                                connection.release();
                                return apiresponse.UnauthorizedResponse(res, "Invalid username or password");
                            }
                        }
                        catch (err) {
                            return apiresponse.ErrorResponse(res, err.message);
                        }
                    });   
                }
                catch (err) {
                    return apiresponse.ErrorResponse(res, err.message);
                }
            });
        }
        catch (err) {
            return apiresponse.ErrorResponse(res, err.message);
        }
    },

    searchstock: (res, data) => {
        try {
            pool.getConnection(function (err, connection) {
                try {
                    if (err)
                        return apiresponse.ErrorResponse(res, err.message);

                    connection.query('CALL sp_search_stock(?)', [data.name], function (err, results_data) {
                        try {
                            if (err)
                                return apiresponse.ErrorResponse(res, err.message);

                            if (results_data.length > 0) {
                                if (results_data[0].length !== 0) {
                                        return apiresponse.SuccessResponseWithData(res, "Search Success", results_data[0]);
                                }
                                else {
                                    connection.release();
                                    return apiresponse.SuccessResponseWithData(res, "Search Stock", {});
                                }
                            }
                            else {
                                connection.release();
                                return apiresponse.SuccessResponseWithData(res, "Search Stock", {});
                            }
                        }
                        catch (err) {
                            return apiresponse.ErrorResponse(res, err.message);
                        }
                    });
                }
                catch (err) {
                    return apiresponse.ErrorResponse(res, err.message);
                }
            });
        }
        catch (err) {
            return apiresponse.ErrorResponse(res, err.message);
        }
    },

    suggestion: (res, data) => {
        try {
            pool.getConnection(function (err, connection) {
                try {
                    if (err)
                        return apiresponse.ErrorResponse(res, err.message);

                    connection.query('CALL sp_search_stock(?)', [data.name], function (err, results_data) {
                        try {
                            if (err)
                                return apiresponse.ErrorResponse(res, err.message);

                            if (results_data.length > 0) {
                                if (results_data[0].length !== 0) {
                                        return apiresponse.SuccessResponseWithData(res, "Success", results_data[0]);
                                }
                                else {
                                    connection.release();
                                    return apiresponse.SuccessResponseWithData(res, "Success", {});
                                }
                            }
                            else {
                                connection.release();
                                return apiresponse.SuccessResponseWithData(res, "Success", {});
                            }
                        }
                        catch (err) {
                            return apiresponse.ErrorResponse(res, err.message);
                        }
                    });
                }
                catch (err) {
                    return apiresponse.ErrorResponse(res, err.message);
                }
            });
        }
        catch (err) {
            return apiresponse.ErrorResponse(res, err.message);
        }
    },

    getdetails: (res, data) => {
        try {
            pool.getConnection(function (err, connection) {
                try {
                    if (err)
                        return apiresponse.ErrorResponse(res, err.message);

                    connection.query('CALL sp_get_details_by_id(?)', [data.id], function (err, results_data) {
                        try {
                            if (err)
                                return apiresponse.ErrorResponse(res, err.message);

                            if (results_data.length > 0) {
                                if (results_data[0].length !== 0) {
                                    return apiresponse.SuccessResponseWithData(res, "Success", results_data[0][0]);
                                }
                                else {
                                    connection.release();
                                    return apiresponse.SuccessResponseWithData(res, "Success", {});
                                }
                            }
                            else {
                                connection.release();
                                return apiresponse.SuccessResponseWithData(res, "Success", {});
                            }
                        }
                        catch (err) {
                            return apiresponse.ErrorResponse(res, err.message);
                        }
                    });
                }
                catch (err) {
                    return apiresponse.ErrorResponse(res, err.message);
                }
            });
        }
        catch (err) {
            return apiresponse.ErrorResponse(res, err.message);
        }
    }
}