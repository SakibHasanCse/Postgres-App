export default async(req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'you are not authorized' })
    }
    const token = req.headers.authorization.split(' ')[1]
}