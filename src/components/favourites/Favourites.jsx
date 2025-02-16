import Fav from "../fav/Fav";

const Favourites = ({ fevStudents = [] }) => {
  return (
    <div>
      <div>
        <h1 className="pl-8 text-3xl font-bold py-4">Total Age: </h1>
      </div>
      <h1 className="text-3xl font-bold mt-4 mb-4 text-center border-b-2 pb-2">
        Favourites Students : {fevStudents.length}
      </h1>
      <div className="space-y-4 pl-4">
        {fevStudents.map((fav, idx) => (
          <Fav key={idx} fav={fav}></Fav>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
