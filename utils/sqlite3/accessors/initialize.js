import * as sqlite3 from 'sqlite3'
const Database = new sqlite3.Database('../store/Database.db')
export {
  Database
}