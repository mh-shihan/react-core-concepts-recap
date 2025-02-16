const Favourites = ({ fevStudents = [] }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-4 text-center">
        Favourites Students : {fevStudents.length}
      </h1>
    </div>
  );
};

export default Favourites;
