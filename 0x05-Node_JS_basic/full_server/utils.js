import fs from 'fs';
import fsPromises from 'fs/promises';

const readDatabase = async (path) => {
  try {
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
    const response = {
      CS: [],
      SWE: [],
    };
    objects.forEach((obj) => {
      if (obj.field === 'CS') response.CS.push(obj.firstname);
      else response.SWE.push(obj.firstname);
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default readDatabase;
