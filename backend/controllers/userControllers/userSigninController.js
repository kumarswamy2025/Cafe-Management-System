connectDB.query(checkingExitingUserQuery, [userData.email], (error, result) => {
    if (!error) {
        // Checking if email already exists
        if (result.length <= 0) {
            let createUserData = "INSERT INTO user(name, contactnumber, email, password, role, status) VALUES (?, ?, ?, ?, 'user', 'false')";

            connectDB.query(createUserData, [userData.name, userData.contactnumber, userData.email, userData.password], (createUserError, createUserResult) => {
                if (!createUserError) {
                    // Fetch the newly created user data
                    const getUserQuery = "SELECT id, name, contactnumber, email, role, status FROM user WHERE id = ?";
                    
                    connectDB.query(getUserQuery, [createUserResult.insertId], (getUserError, userResult) => {
                        if (!getUserError && userResult.length > 0) {
                            return res.status(201).json({
                                message: "User registered successfully",
                                data: userResult[0], // Returning the full user data
                                success: true,
                                error: false
                            });
                        } else {
                            return res.status(500).json({
                                message: "User registered, but unable to fetch saved data",
                                success: false,
                                error: true
                            });
                        }
                    });
                } else {
                    res.status(500).json({
                        message: "There is an error in user registration. Please try again.",
                        success: false,
                        error: true
                    });
                }
            });
        } else {
            return res.status(200).json({
                message: "Email already exists",
                success: false,
                error: true
            });
        }
    } else {
        return res.status(500).json({
            message: "Error checking existing user",
            success: false,
            error: true
        });
    }
});
