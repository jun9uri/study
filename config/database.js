const mysql = require('promise-mysql');

const connection = {
    host: 'localhost',  // 로컬 호스트 주소
    port: 3306,         // 포트번호
    user: 'root',      // 유저
    password: '7457',   // 비밀번호
    database: 'hyunjung'   // 접근할 데이터베이스 (스키마)
};

module.exports = mysql.createPool(connection)