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
        }



    },
    dashBoard_API: {

    }


}

