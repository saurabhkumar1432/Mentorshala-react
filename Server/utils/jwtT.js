import jwt from "jsonwebtoken";

function generateToken(user) {

// const generateToken = (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  return token;
};

function getJWTToken(user) {

// const getJWTToken = function (user) {
  return generateToken(user);
};

export default getJWTToken;