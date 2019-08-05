// import mysql from 'mysql'

// class Connect {
//     constructor(){
//         this.connector = mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '1234theanh',
//             database: 'todos'
//         })
//         this.table = 'todosList'
//     }

//     getTodosFromDB () {
//         const sql = `SELECT * FROM ${this.table}`;
//         this.connector.query(sql, (err, results) => {
//             if (err) throw err;
//             return results
//         })
//     }

//     addTodoIntoDB (name, id) {
//         const sql = `INSERT INTO ${this.table} (id, isDone, name) VALUES (${id}, '0, ${name})`
//         this.connector.query(sql, (err, results) => {
//             if (err) throw err;
//             console.log(results)
//         })
//     }
// }

// export const Connector = new Connect()

// // var con = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '1234theanh',
// //     database: 'todos'
// // })

// // const table = 'todosList'

// // export default con.connect(err => {
// //     if(err) throw err
// //     console.log("Connected")
// // })

// // export const getTodosFromDB = con.connect(() => {
// //     const sql = `SELECT * FROM ${table}`
// //     con.query(sql, (err, results) => {
// //         if (err) throw err;
// //         var todos = results
// //         console.log(todos)
// //     })
// // })

// // export const getTodosFromDB = () => {
// //     const sql = `SELECT * FROM ${table}`;
// //     con.query(sql, (err, results) => {
// //         if (err) throw err;
// //         var todos = results
// //         console.log(results)
// //         // return results
// //     })
// // }

// // export const addTodoIntoDB = (name, id) => {
// //     const sql = `INSERT INTO ${table} (id, isDone, name) VALUES (${id}, '0, ${name})`
// //     con.query(sql, (err, results) => {
// //         if (err) throw err;
// //         console.log(results)
// //     })
// // }