import fs from 'fs';

const readDatabase = (path) => {
  const filePath = `${process.cwd()}/${path}`;
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      const lines = data.split('\n');
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
      const response = { CS: [], SWE: [] };
      objects.forEach((obj) => {
        if (obj.field === 'CS') response.CS.push(obj.firstname);
        else response.SWE.push(obj.firstname);
      });

      return resolve(response);
    });
  });
};

export default readDatabase;
