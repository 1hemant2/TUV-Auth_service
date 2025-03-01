class Utill {
   static throwError(message, statusCode) { 
       const error = new Error(message);
       error.statusCode = statusCode || 500;
       throw error;
   }
}

module.exports = {
    Utill
}