import { Pool } from 'pg'

export const pool = new Pool({
    user: 'amiar',
    password: '',
    host: 'localhost',
    port: '5432',
    database: 'sakib'

})