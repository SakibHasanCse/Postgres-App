import { pool } from '../db'
import slugify from 'slugify'
export const getBlogs = async(req, res, next) => {
    await pool.query('SELECT * FROM todo').then(todo => {
        res.json(todo.rows)
    })
}

export const getBlog = async(req, res, next) => {
    const id = req.params.id
    await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]).then(todo => {
        res.json(todo.rows)
    })
}

export const CreateBlog = async(req, res, next) => {
    try {
        const { description, title } = req.body
        var slug = slugify(title)
        await pool.query('INSERT INTO todo (description ,title ,slug) VALUES($1 ,$2 ,$3)  RETURNING* ', [description, title, slug]).then(todo => {
            console.log(todo)
            res.json(todo.rows[0])
        })

    } catch (error) {
        console.error(error)

    }
}

export const Update = async(req, res) => {
    const { description, title } = req.body
    const { id } = req.params
    await pool.query('UPDATE todo SET description =$1 WHERE todo_id = $2', [description, id])
        .then(date => {
            res.json({ message: 'Updated Successfully' })
        })
}
export const DeleteBlog = async(req, res) => {
    const id = req.params.id
    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]).then(date => {
        console.log(date)
        res.json({ message: 'Deleted Successfully' })
    })
}