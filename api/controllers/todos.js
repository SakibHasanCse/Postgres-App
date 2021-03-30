import { Todo } from '../models'

export const Todos = {
    async create({ body, decoded }, res, next) {
        const { title } = body
        const { userId } = decoded
        await Todo.create({ title, userId })
            .then((data) => {
                return res.status(201).json(data)

            }).catch((err) => {
                return next(new Error(err))
            })

    },
    async fetchAll({ decoded }, res, next) {
        try {
            await Todo.findAll({ where: { userId: decoded.userId } })
                .then((data) => {
                    return res.status(200).json(data)

                }).catch((err) => {
                    return next(new Error(err))
                })
        } catch (error) {

        }
    },
    async fetchOne({ params, decoded }, res, next) {
        try {
            await Todo.findOne({
                    where: { id: params.id, userId: decoded.userId }
                })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo is not available' })
                    }
                    return res.status(200).json(data)

                }).catch((err) => {
                    return next(new Error(err))
                })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async update({ body, params, decoded }, res, next) {
        try {
            await Todo.findOne({ where: { id: params.id, userId: decoded.userId } })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo is not available' })
                    }
                    Todo.update({ title: body.title || data.title })
                        .then((data) => {
                            return res.status(200).json(data)
                        }).catch((err) => {
                            return next(new Error(err))
                        })
                }).catch((err) => {
                    return next(new Error(err))
                })

        } catch (error) {
            return next(new Error(error))
        }
    },
    async delete({ params, decoded }, res, next) {
        try {
            await Todo.findOne({ where: { id: params.id, userId: decoded.userId } })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo is not available' })
                    }
                    data.destroy()
                    return res.status(200).json({ message: 'delete was successful' })

                }).catch((err) => {
                    return next(new Error(err))
                })

        } catch (error) {
            return next(new Error(error))
        }
    }
}