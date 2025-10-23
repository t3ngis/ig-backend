import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ message: 'need auth header' });
  }

  const accessToken = authHeader.split(' ')[1];
  if (!accessToken) {
    return res.status(400).json({ message: 'need auth token' });
  }

  console.log(accessToken, "token");

  try {
    const user = jwt.verify(accessToken, 'TEST');
    if (!user) {
      return res.status(400).json({ message: 'need to sign in' });
    }

    req.user = user.data;
    next();
  } catch (error) {
    console.error('JWT verify error:', error.message);
    return res.status(401).json({ message: 'invalid or expired token' });
  }
};
