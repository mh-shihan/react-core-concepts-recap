const Fav = ({ fav = {} }) => {
  const { name, student_id } = fav;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <p className="text-black">{name}</p>
        <p className="text-black">Student ID: {student_id}</p>
      </div>
    </div>
  );
};

export default Fav;
