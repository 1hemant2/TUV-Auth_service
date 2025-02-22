const operation = { 
    userOperation : {
        'create_user' : `insert into users (name, username, email, password, firstName, lastName) values ($1, $2, $3, $4, $5)`,
        'find_user_email' : `select * from users where email = $1`,
        'find_user_username' : `select * from users where username = $1`,
        'find_user_id' : `select * from users where _id = $1`,
        'find_user_email_password' : `select * from users where email = $1 and password = $2`, 
        'find_user_username_password' : `select * from users where username = $1 and password = $2`,
        'find_user_otp' : `select * from otp where user_name = $1`,
        'find_user_session' : `select * from session where user_name = $1`,
        'find_user_access_token' : `select * from access_token where user_name = $1`,
        'update_user' : `update users set name = $1, username = $2, email = $3, password = $4 where _id = $5`,
        'update_username' : `update users set username = $1 where _id = $2`,
        'update_email' : `update users set email = $1 where _id = $2`,
        'update_password' : `update users set password = $1 where _id = $2`,
        'update_name' : `update users set name = $1 where _id = $2`,
        'update_firstName' : `update users set firstName = $1 where _id = $2`,
        'update_lastName' : `update users set lastName = $1 where _id = $2`,
        'delete_user' : `delete from users where _id = $1`,
        'delete_user_email' : `delete from users where email = $1`,
        'delete_user_username' : `delete from users where username = $1`,
    },
    otpOperation : {
        'create_otp' : `insert into otp (user_id, otp) values ($1, $2)`,
        'find_otp' : `select * from otp where otp = $1`,
        'update_otp' : `update otp set otp = $1 where _id = $2`,
        'delete_otp' : `delete from otp where _id = $1`,
        'delete_otp_user_id' : `delete from otp where user_id = $1`,
    },
    accessTokenOperation : {
        'create_access_token' : `insert into access_token (user_id, access_token) values ($1, $2)`,
        'find_access_token' : `select * from access_token where acess_token = $1`,
        'find_access_token_user_id' : `select * from access_token where user_id = $1`, 
        'delete_access_token' : `delete from access_tken where _id  = $1`,
        'delete_access_token_user_id' : `delete token from access_token where user_id = $1`,
    }
}

module.exports = {
    operation
}