const trigger = {
    updatedAtFunction : 
        `CREATE OR REPLACE FUNCTION updatedAtFn()
            RETURNS TRIGGER AS $$
               BEGIN
                   IF NEW IS DISTINCT FROM OLD THEN
                       NEW.updatedAT =  NOW();
                   END IF;
                   RETURN NEW;
               END;
            $$ LANGUAGE plpgsql;`,
    updateAt : {
        create_user_table : 
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON user
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,
        create_OTP_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON otp
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,
        create_access_token_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON access_token
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,   
        create_session_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON session
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,
        create_logs_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON logs
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,
        create_role_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON role
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`,   
        create_allowed_role_table :
            `CREATE TRIGGER updatedAtTrigger
                BEFORE UPDATE ON allowed_roles
                FOR EACH ROW
                EXECUTE FUNCTION updatedAtFn();`
        
    }
}