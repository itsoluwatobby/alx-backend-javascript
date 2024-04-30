import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const filePath = process.argv.at(-1).split('/')[1];
    readDatabase(filePath)
      .then((data) => {
        const result = `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\nNumber of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`;
        response.send(`This is the list of our students\n${result}`);
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    const filePath = process.argv.at(-1).split('/')[1];
    return readDatabase(filePath)
      .then((data) => {
        const result = `List: ${data[request.params.major].join(', ')}`;
        return response.send(result);
      })
      .catch((error) => response.status(500).send(error.message));
  }
}

export default StudentsController;
