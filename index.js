const mysql = require('mysql2/promise');

// TODO: read from config:
const HOST = 'localhost'; // = process.env.MEMSQL_HOST;
const PORT = 3306; // = process.env.MEMSQL_PORT || 3306;
const USER = 'root'; // = process.env.MEMSQL_USER;
const PASSWORD = ''; // = process.env.MEMSQL_PASSWORD;
const DATABASE = 'acme'; // = process.env.MEMSQL_DATABASE;

// main is run at the end
async function main() {
  let conn;
  try {
    conn = await mysql.createConnection({
      host: HOST,
      port: PORT,
      user: USER,
      password: PASSWORD,
      database: DATABASE
    });
    
    const id = await create({conn, content: 'Inserted row'});
    console.log(`Inserted row id ${id}`);

    const msg = await readOne({conn, id});
    console.log('Read one row:');
    if (msg == null) {
      console.log('not found');
    } else {
      console.log(`${msg.id}, ${msg.content}, ${msg.createdate}`);
    }

    await update({conn, id, content: 'Updated row'});
    console.log(`Updated row id ${id}`);

    const messages = await readAll({conn});
    console.log('Read all rows:');
    messages.forEach(m => {
      console.log(`${m.id}, ${m.content}, ${m.createdate}`);
    });

    await delete_({conn, id});    
  } catch (err) {
    console.error('ERROR', err);
    process.exit(1);
  } finally {
    if (conn) {
      await conn.end();
    }
  }
}

async function create({conn, content}) {
  const [results] = await conn.execute('INSERT INTO messages (content) VALUES (?)', [content]);
  return results.insertId;
}

async function readOne({conn, id}) {
  const [rows, fields] = await conn.execute('SELECT id, content, createdate FROM messages WHERE id = ?', [id]);
  return rows[0];
}

async function readAll({conn}) {
  const [rows, fields] = await conn.execute('SELECT * FROM messages ORDER BY id');
  return rows;
}

async function update({conn, id, content}) {
  await conn.execute('UPDATE messages SET content = ? WHERE id = ?', [content, id]);
}

async function delete_({conn, id}) {
  await conn.execute('DELETE FROM messages WHERE id = ?', [id]);
}

main();