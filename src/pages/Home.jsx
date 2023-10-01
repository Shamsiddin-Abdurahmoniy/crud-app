// react
import { Link } from "react-router-dom";
// icons
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
// redux-toolkit
import { useSelector, useDispatch } from "react-redux";
// redux
import { deleteUser } from "../redux/userSlice";
function Home() {
  let { users } = useSelector((state) => state);
  let dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="align-elements py-11">
      <table className="table">
        <thead>
          <tr className="text-xs">
            <th>№</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="rounded-lg">
          {users.map((user, index) => {
            const { firstName, lastName, email, id } = user;
            return (
              <tr key={id}>
                <td className="font-semibold">{index + 1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td className="flex">
                  <Link to={`/edit/${id}`}>
                    <FiEdit className="text-2xl text-emerald-600 mr-5" />
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    <FaRegTrashAlt className="text-2xl text-red-500" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
