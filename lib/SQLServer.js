'use strict'

const sql = require('mssql')
const { config } = require('../config')


const USER = encodeURIComponent(config.db_user)
const PASSWORD = encodeURIComponent(config.db_password)
const SERVER_NAME = config.db_server_name
const DATABASE = config.db_name
const PORT = config.port


const dbconfig = {
    user: USER,
    password: PASSWORD,
    server: SERVER_NAME,
    database: DATABASE,
    port: PORT
}

const getAreasIco = () => {
    const pool = new sql.ConnectionPool(dbconfig)
    let req = new sql.Request(pool)

    pool.connect((err) => {
        if(err){
            console.error(err)
            return
        }
        req.query("SELECT * FROM tbICO_Areas", (err, data) => {
            if(err){
                console.error(err)
                return
            }else{    
                if(data.rowsAffected.length > 0){
                    const dataSQL = data.recordset
                    console.log(dataSQL)
                }else{
                    console.log('No hay datos en la tabla')
                }              
            }
            pool.close()
        })
    })
}

module.exports = {getAreasIco}