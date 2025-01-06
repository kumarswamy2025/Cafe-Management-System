async function checkTokenController(req,res) {
    try {
        return res.status(200).json({
            message:"token is varied successfully...",
            success:true,
            error:false
        })
    } catch (error) {
        return res.status(404).json({
            message:"there is an error in token varifivation..",
            success:false,
            error:true,
            errorData:error
        })
        
    }
    
}

module.exports=checkTokenController