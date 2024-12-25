async function checkRole(req, res, next) {
    try {
        if (res.locals.role == process.env.USER) {

            return res.status(400).json({
                message:"you dont have a permission to access this content",
                success:false,
                error:true
            })

        }
        else{
            next();
        }

    } catch (error) {

        return res.status(400).json({
            message:"there is an error in check role file ",
            success:false,
            error:true
        })

    }
}

module.exports = checkRole