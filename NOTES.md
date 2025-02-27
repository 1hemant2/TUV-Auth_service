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
  - middleware/
    - authMiddleware.js  // Middleware to protect routes
  - index.js

# architecture 
https://chatgpt.com/c/67b9824e-13cc-8003-bf54-efd9c0005fd5

# tasks 
https://www.notion.so/1a3d6604a3aa80fa8616daf45199b381?v=1a3d6604a3aa8009af20000cdf9106e8&p=1a5d6604a3aa8003aeb2fa8a777c11ad&pm=s
  
