import { useState, useEffect } from "react";
import Favourites from "./components/favourites/Favourites";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Students from "./components/students/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [fevStudents, setFevStudents] = useState([]);
  // const [alreadySelected, setAlreadySelected] = useState(-1);
  const [totalAge, setTotalAge] = useState(0);

  useEffect(() => {
    fetch("../public/studentsList.json")
      .then((response) => response.json())
      .then((data) => setStudentsList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToFev = (student) => {
    let newArray = [...fevStudents];

    let alreadySelected = newArray.find((s) => s.id === student.id);
    if (!alreadySelected) {
      newArray.push(student);
      setFevStudents(newArray);
    }
  };

  const handleRemove = (student) => {
    const newArray = fevStudents.filter((s) => s.id !== student.id);
    setFevStudents(newArray);
  };

  useEffect(() => {
    const total = fevStudents.reduce((sum, stu) => sum + stu.age, 0);
    setTotalAge(total);
  }, [fevStudents]);

  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-screen-xl mx-auto bg-white  min-h-screen grid grid-cols-9 gap-2 my-4">
        <div className="col-span-6 pl-6   border-2 border-red-500 rounded-md">
          <Students
            studentsList={studentsList}
            handleAddToFev={handleAddToFev}
            handleTotalAge={totalAge}
            handleRemove={handleRemove}
          ></Students>
        </div>
        <div className="col-span-3 border-2 border-red-500 rounded-md">
          <Favourites
            fevStudents={fevStudents}
            totalAge={totalAge}
          ></Favourites>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
