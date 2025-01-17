const domain = "http://localhost:8080/"
export var Apis = {

    user_Api: {

        signUp_API: {
            API: `${domain}user/signup`,

        },
        passwordReset_API: {
            API: `${domain}user/resetPassword`

        },
        login_API: {
            API: `${domain}user/login`
        },
        adminUsers_API: {
            API: `${domain}user/adminUsers`
        },
        allUsers_API: {
            API: `${domain}user/allUsers`
        },
        updateStatus_API: {
            API: `${domain}user/updateStatus`
        },
        updatePassword_API: {
            API: `${domain}user/updatePassword`
        },
        check_token: {
            API: `${domain}user/checkToken`
            
        }



    },
    dashBoard_API: {

        dashboard_details: {
            API: `${domain}dashboard/dashboardDetails`
        }

    },
    category_API:{
        addCategory:{
            API:`${domain}category/addCategory`
        },
        getCategory:{
            API:`${domain}category/getAllCategory`
        },
        updateCategory:{
            API:`${domain}category/updateCategory`
        }

    },

    product_API:{
        addProduct:{
            API:`${domain}product/addProduct`
        },
        getProduct:{
            API:`${domain}product/getProduct`
        },
        getProductsByCategoryId:{
            API:`${domain}product/getProductsByCategoryId/`
        },
        getProductsByProductId:{
            API:`${domain}product/getProductsByProductId/`
        },
        updateProduct:{
            API:`${domain}product/updateProduct`
        },
        deleteProduct:{
            API:`${domain}product/deleteProduct/`
        },
        updateStatus:{
            API:`${domain}product/updateStatus`
        }

    },
    bill_API:{
        generateBillPDF:{
            API:`${domain}bill/generateBillPDF`
        },
        getPdf:{
            API:`${domain}bill/getPdf`
        },
        
        getAllBills:{
            API:`${domain}bill/getAllBills`
        },
        deleteBill:{
            API:`${domain}bill/deleteBill/`
        },
        viewBill:{
            API:`${domain}bill/viewBill/`
        },

    }


}

