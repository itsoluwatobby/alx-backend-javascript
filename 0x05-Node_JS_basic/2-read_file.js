const fs = require('fs');

function countStudents(path) {
  const filePath = `${process.cwd()}/${path}`;
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
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
  const counts = {
    CS: { names: [] },
    SWE: { names: [] },
  };
  objects.forEach((obj) => {
    if (obj.field === 'CS') counts.CS.names.push(obj.firstname);
    else counts.SWE.names.push(obj.firstname);
  });

  const { CS, SWE } = counts;
  const response = `Number of students: ${objects.length}\nNumber of students in CS: ${CS.names.length}. List: ${CS.names.join(', ')}\nNumber of students in SWE: ${SWE.names.length}. List: ${SWE.names.join(', ')}`;
  console.log(response);
}

module.exports = countStudents;
