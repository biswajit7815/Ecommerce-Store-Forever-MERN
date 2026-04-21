import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    // Token verify karein
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    // Check karein ki decoded ID wahi hai jo ADMIN_EMAIL hai
    // Kyunki adminLogin mein humne { id: email } sign kiya tha
    if (tokenDecode.id !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized, Login Again" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
