const mysql = require('promise-mysql');

const connection = {
    host: process.env.DB_HOST,  // 로컬 호스트 주소
    port: process.env.DB_PORT,         // 포트번호
    user: process.env.DB_NAME,      // 유저
    password: process.env.DB_PASSWORD,   // 비밀번호
    database: 'hyunjung'   // 접근할 데이터베이스 (스키마)
};

module.exports = mysql.createPool(connection)