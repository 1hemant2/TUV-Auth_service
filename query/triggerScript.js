const trigger = { 
    //created a function which return the updated row
    update_row_timestamp :
        `CREATE OR REPLACE FUNCTION update_timestamp_column()
            RETURNS TRIGGER AS $$
            BEGIN
                NEW.timestamp = NOW(); 
                RETURN NEW;
            END;
        $$ LANGUAGE plpgsql;`,

    //Create a trigger to execute the function before an update
    create_timestamp_trigger : (tableName) => {
        `CREATE TRIGGER timestamp_trigger
         BEFORE UPDATE ON ${tableName} 
         FOR EACH ROW
         EXECUTE FUNCTION update_timestamp_column()`
    }
}

module.exports = {
    trigger
}


