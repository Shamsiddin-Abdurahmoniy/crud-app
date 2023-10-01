// react
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// redux
import { createUser } from "../redux/userSlice";
function Modal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  let { users } = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        id: users[users.length - 1].id + 1,
        firstName,
        lastName,
        email,
      })
    );
    navigate("/");
  };
  return (
    <section className="create-modal z-10">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
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
              onChange={(e) => {
                setFirstName(e.target.value);
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
              onChange={(e) => {
                setLastName(e.target.value);
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary text-lg mt-8">Submit</button>
        </form>
      </div>
    </section>
    // <section className="flex flex-col">
    //   <form>
    //     <h3 className="font-bold text-lg">Create new user</h3>
    //     <div className="modal-action">
    //       <input
    //         type="text"
    //         placeholder="First name"
    //         className="input input-bordered w-full"
    //       />
    //       <input
    //         type="text"
    //         placeholder="Last name"
    //         className="input input-bordered w-full"
    //       />
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         className="input input-bordered w-full"
    //       />
    //       <button type="submit" className="btn">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </section>
  );
}

export default Modal;
