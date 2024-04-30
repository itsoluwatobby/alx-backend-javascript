const fsPromises = require('fs/promises');
const fs = require('fs');

async function countStudents(path) {
  const filePath = `${process.cwd()}/${path}`;
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  const db = await fsPromises.readFile(filePath, 'utf-8');
  const lines = db.split('\n');
  const headers = lines[0].split(',');
  const objects = [];

  lines.slice(1).forEach((line) => {
    const values = line.split(',');
    if (values.length <= 1) return;
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    objects.push(obj);
  });
  const counts = {
    CS: [],
    SWE: [],
  };
  objects.forEach((obj) => {
    if (obj.field === 'CS') counts.CS.push(obj.firstname);
    else counts.SWE.push(obj.firstname);
  });

  const { CS, SWE } = counts;
  const response = `Number of students: ${objects.length}\nNumber of students in CS: ${CS.length}. List: ${CS.join(', ')}\nNumber of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
  console.log(response);
  return response;
}

module.exports = countStudents;
