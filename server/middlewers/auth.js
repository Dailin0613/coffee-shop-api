import jwt from 'jsonwebtoken'


function authenticateToken(res, req, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('  ')[1]
    if (token == null) return res.status(401).json({ error: 'Invalid token' });
    jwt.verify(token, "13KNksMYjhPJktJK06", (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        req.user = user;
        next();
    })
};

export { authenticateToken }
