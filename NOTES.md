# Why to choosed postgre over mongoDB for auth service. 
Strong consistency.
Complex queries for user roles and permissions.
Robust transaction handling.
Schema enforcement.

# folder structure of auth service 
  - config/
    - constant.js  
  - controllers/
    - authController.js
    - profileController.js
    - passwordController.js
  - routes/
    - authRoutes.js
    - profileRoutes.js
    - passwordRoutes.js
  - models/
    - userModel.js       // Schema for user data
  - middleware/
    - authMiddleware.js  // Middleware to protect routes
  - index.js
