import Student from "../student/student";

const Students = ({ studentsList = [], handleAddToFev, handleTotalAge }) => {
  return (
    <div>
      <h1 className="text-3xl text-center py-4 font-bold">
        Total Students {studentsList.length}
      </h1>
      <div className="  grid grid-cols-2 gap-3  ">
        {studentsList.map((student) => (
          <Student
            key={student.id}
            student={student}
            handleAddToFev={handleAddToFev}
            handleTotalAge={handleTotalAge}
          ></Student>
        ))}
      </div>
    </div>
  );
};

export default Students;
