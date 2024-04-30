import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const filePath = process.argv.at(-1).split('/')[1];
      const students = await readDatabase(filePath);
      const result = `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\nNumber of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`;
      return response.status(200).send(`This is the list of our students\n${result}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      const values = ['CS', 'SWE'];
      if (!values.includes(major)) {
        throw new Error('Major parameter must be CS or SWE');
      }
      const filePath = process.argv.at(-1).split('/')[1];
      const students = await readDatabase(filePath);
      const result = `List: ${students[major].join(', ')}`;
      return response.status(200).send(result);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }
}

export default StudentsController;
