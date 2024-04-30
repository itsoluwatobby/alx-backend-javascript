const fs = require('fs');

function countStudents(path) {
  try {
    const filePath = `${process.cwd()}/${path}`;
    const db = fs.readFileSync(filePath, 'utf-8');
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
    const counts = { CS: [], SWE: [] };
    objects.forEach((obj) => {
      if (obj.field === 'CS') counts.CS.push(obj.firstname);
      else counts.SWE.push(obj.firstname);
    });
    const { CS, SWE } = counts;
    let response = `Number of students: ${objects.length}\n`;
    response += `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`;
    response += `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;

    console.log(response);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
