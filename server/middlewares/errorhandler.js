const errorHandler = (err, req, res, next) => {
    console.log(err)
    let statusCode = 500

    switch (err.name) {
        case "InvalidInput":
            statusCode = 400
            res.status(statusCode).json({
                message: "Invalid input"
            })
            break


        case "Unauthorized":
            statusCode = 401
            res.status(statusCode).json({
                message: "Invalid Email/Password"
            })
            break

        case "InvalidToken":
            statusCode = 401
            res.status(statusCode).json({
                message: "Invalid Token"
            })
            break
        case "NotFound":
            statusCode = 404
            res.status(statusCode).json({
                message: "Not Found"
            })
            break
        default:
            res.status(statusCode).json({
                message: "Internal Server Error"
            })
            break
    }
}

module.exports = errorHandler