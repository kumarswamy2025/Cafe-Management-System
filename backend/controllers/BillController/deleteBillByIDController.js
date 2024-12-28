// importing data base
const connectDB = require('../../connectDB');

async function deleteBillByIDController(req,res) {

    try {
        const billID=req.params.id
        const deleteBillByIDQuery="delete from bill where id=?";
        connectDB.query(deleteBillByIDQuery,[billID],(deleteBillByIDQueryError,deleteBillByIDQueryResult)=>{

            if(!deleteBillByIDQueryError){

                if(deleteBillByIDQueryResult.affectedRows==0){
                    return res.status(400).json({
                        message:"the bill id is not found ",
                        success:false,
                        error:true
                    })
                }
                else{
                    return res.status(201).json({
                        message:"bill is deleted successfully...",
                        success:true,
                        error:false
                    })
                }

            }
            else{

                return res.status(400).json({
                    message:"there is an error in the deleteBillByIDQuery please check once ",
                    success:false,
                    error:true
                })


            }

        })
        
    } catch (error) {
        return res.status(400).json({
            message:"there is an error in the deleteBillByIDController please check once ",
            success:false,
            error:true,
            errorData:error
        })
        
    }
    
}

module.exports=deleteBillByIDController