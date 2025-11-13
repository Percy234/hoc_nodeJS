import errorApi from "../middlewares/errorAPI.js";

const notFound = (req, res, next) => {
    const error = new errorApi(`Resource not found`, 404);
    next(error);
}

const errrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.json({
        status: "error",
        statusCode: statusCode,
        message: err.message || "Internal Server Error"
    });
}

export {
    notFound,
    errrorHandler
}