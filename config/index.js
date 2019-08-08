require("dotenv").config()

const config = {
    port: process.env.PORT,
    db_server_name: process.env.SERVER_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASS,
    db_name: process.env.DB_NAME
}

module.exports = { config }