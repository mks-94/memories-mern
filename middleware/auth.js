import jwt from "jsonwebtoken";

//wants to like a post
//click the like button=>auth middleware (NEXT)=>like controller...

const auth = async (req, res, next) => {
  try {
    const token = req.header.authorition.split(" ")[1];
    const customAuth = token.length > 500;

    let decodedData;

    if (token && customAuth) {
      decodedData = jwt.verify(token, "secret");

      req.userId = decodedData?.id;
    } else {
      //this is for google aut jwt
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
