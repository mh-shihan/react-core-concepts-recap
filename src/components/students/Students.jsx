import Student from "../student/student";

const Students = ({ studentsList = [] }) => {
  const { id, name, age, student_id, section, university } = studentsList;
  return (
    <div>
      <h1 className="text-3xl text-center pt-4 font-bold">
        Total Students {studentsList.length}
      </h1>
      <div>
        {studentsList.map((student) => (
          <Student key={student.id}></Student>
        ))}
      </div>
    </div>
  );
};

export default Students;
