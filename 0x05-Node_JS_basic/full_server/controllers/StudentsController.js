import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const filePath = process.argv.at(-1).split('/')[1];
    readDatabase(filePath)
      .then((data) => {
	const { CS, SWE } = data;
        let result = `This is the list of our students\n`;
	result += `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`;
	result += `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
        response.status(200).send(result);
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major.toUpperCase();
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    const filePath = process.argv.at(-1).split('/')[1];
    return readDatabase(filePath)
      .then((data) => {
        const result = `List: ${data[major].join(', ')}`;
        return response.status(200).send(result);
      })
      .catch((error) => response.status(500).send(error.message));
  }
}

export default StudentsController;
