import { Todo, TodoItem } from '../models'

export const todoitem = {
    async create(req, res, next) {

        const { text, todoId } = req.body
        await TodoItem.create({ text, todoId })
            .then((data) => {
                return res.status(201).json(data)
            }).catch((err) => {
                return next(new Error(err))
            })

    },
    async fetchAll(req, res, next) {
        try {
            const { todoId } = req.params
            await TodoItem.findAll({
                    where: { todoId },
                    include: {
                        model: Todo,
                        as: 'todo'
                    }
                })
                .then((data) => {
                    return res.status(200).json(data)

                }).catch((err) => {
                    return next(new Error(err))
                })
        } catch (error) {

        }
    },
    async fetchOne(req, res, next) {
        try {
            const { todoItemId } = req.params
            await TodoItem.findOne({
                    where: { id: todoItemId },
                    include: {
                        model: Todo,
                        as: 'todo'
                    }
                })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo Item is not available' })
                    }
                    return res.status(200).json(data)

                }).catch((err) => {
                    return next(new Error(err))
                })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async update(req, res, next) {
        try {
            const body = req.body
            const { todoItemId } = req.params
            await TodoItem.findOne({ where: { id: todoItemId } })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo Item is not available' })
                    }

                    TodoItem.update({ text: body.text || data.text, isCompleted: body.isCompleted }, {
                            where: {
                                id: todoItemId
                            },

                            returning: true,
                            plain: true
                        })
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
    async delete({ params }, res, next) {
        try {
            await TodoItem.findOne({ where: { id: params.todoItemId, } })
                .then((data) => {
                    if (!data) {
                        return res.status(400).json({ error: 'Todo Item is not available' })
                    }
                    data.destroy()
                    return res.status(200).json({ message: ' Todo delete was successful' })

                }).catch((err) => {
                    return next(new Error(err))
                })

        } catch (error) {
            return next(new Error(error))
        }
    }
}