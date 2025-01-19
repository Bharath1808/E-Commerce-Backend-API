import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECTRET, (err, decoded) => {
    if (err) {
      console.log(err);

      return false;
    } else {
      return decoded;
    }
  });
};
