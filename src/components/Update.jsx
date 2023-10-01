// react
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// redux toolkit
import { useSelector, useDispatch } from "react-redux";
// redux
import { updateUser } from "../redux/userSlice";
function Update() {
  const { id } = useParams();
  let users = useSelector((state) => state.users);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = users.filter((user) => user.id == id);
  const { firstName, lastName, email } = currentUser[0];
  const [nFirstName, setNFirstName] = useState(firstName);
  const [nlastName, setNLastName] = useState(lastName);
  const [nEmail, setNEmail] = useState(email);
  //

  function handleUpdatedSubmit(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        firstName: nFirstName,
        lastName: nlastName,
        email: nEmail,
      })
    );
    navigate("/");
  }
  return (
    <section className="create-modal z-10">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleUpdatedSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2 italic"
              htmlFor="first-name"
            >
              First name:
            </label>
            <input
              name="first-name"
              type="text"
              placeholder="Shamsiddin"
              className="input input-bordered w-full max-w-xs"
              autoComplete="off"
              required
              value={nFirstName}
              onChange={(e) => {
                setNFirstName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2 italic"
              htmlFor="last-name"
            >
              Last name:
            </label>
            <input
              name="last-name"
              type="text"
              placeholder="Abdurahmonov"
              className="input input-bordered w-full max-w-xs"
              autoComplete="off"
              required
              value={nlastName}
              onChange={(e) => {
                setNLastName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2 italic"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              placeholder="abdurahmonov@gmail.com"
              className="input input-bordered w-full max-w-xs"
              autoComplete="off"
              required
              value={nEmail}
              onChange={(e) => {
                setNEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-accent text-lg mt-8">
            Update
          </button>
        </form>
      </div>
    </section>
  );
}

export default Update;
