const Student = ({ student = {}, handleAddToFev, handleRemove }) => {
  const { name, age, university } = student;
  return (
    <div className="card bg-emerald-600 text-white w-96">
      <div className="card-body items-center text-center">
        <h2 className=" text-white text-3xl font-bold">{name}</h2>
        <p>{university}</p>
        <p>Age: {age}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToFev(student)}
            className="btn btn-primary"
          >
            Add To Fev
          </button>
          <button
            onClick={() => handleRemove(student)}
            className="btn btn-error"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
