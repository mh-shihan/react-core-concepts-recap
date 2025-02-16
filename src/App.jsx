import { useState, useEffect } from "react";
import Favourites from "./components/favourites/Favourites";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Students from "./components/students/Students";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("../public/studentsList.json")
      .then((response) => response.json())
      .then((data) => setStudentsList(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(studentsList);
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-screen-xl mx-auto bg-white  min-h-screen grid grid-cols-9 gap-2 my-4">
        <div className="col-span-6  border-2 border-red-500 rounded-md">
          <Students studentsList={studentsList}></Students>
        </div>
        <div className="col-span-3 border-2 border-red-500 rounded-md">
          <Favourites></Favourites>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
