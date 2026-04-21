import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  
  // Debug Log 1: Check if token is reaching the backend
  console.log("DEBUG: Token received in header:", token); 

  if (!token) {
    console.log("DEBUG: No token provided");
    return res.json({
      success: false,
      message: "Not Authorized",
    });
  }

 try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Yahan fix: Agar tokenDecode object hai toh .id lo, nahi toh direct token use karo
    req.body.userId = typeof tokenDecode === 'object' ? tokenDecode.id : tokenDecode;

    // Requested debug log: Check if userId is successfully assigned to body
    console.log("Check if userId is successfully assigned to body:", req.body.userId);

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
