const createTable = {
   create_user_table :
      `create table users (
            _id uuid primary key,
            name varchar(200),
            username varchar(200) unique,
            email varchar(200) unique,
            password TEXT,  
            firstName  TEXT,
            lastName TEXT,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
   create_OTP_table : 
       `create table otp (
            _id uuid primary key,
            user_id uuid,
            otp TEXT unique,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
    create_access_token_table : 
       `create table access_token (
            _id uuid primary key,
            user_id uuid,
            access_token TEXT,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
    create_session_table : 
       `create table session (
            _id uuid,
            user_id uuid,
            session_id TEXT,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
    create_logs_table : 
        `create table logs (
            _id uuid primary key,
            name varchar(50),
            username varchar(50),
            email varchar(200),
            password TEXT,  
            firstName  TEXT,
            lastName TEXT,
            session_id TEXT,
            access_token TEXT,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
    create_role_table : 
        `create table role (
            _id uuid primary key,
            user_id uuid,
            name TEXT,
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`,
    create_allowed_role_table : 
        `create table allowed_roles(
            _id uuid primary key,
            name TEXT, 
            timestamp TIMESTAMPTZ DEFAULT NOW()
            createdAT TIMESTAMPTZ DEFAULT NOW()
        )`
}

module.exports = {
    createTable
}