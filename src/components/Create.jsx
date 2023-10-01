// icons
import { AiOutlinePlus } from "react-icons/ai";
// react
import { useState } from "react";
import { Link } from "react-router-dom";
// components
import Modal from "./Modal";
function Create() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="align-elements">
      <Link
        to="/create"
        onClick={() => {
          setShowModal(true);
        }}
        className="btn btn-primary"
      >
        Create
        <div className="">
          <AiOutlinePlus size={16} />
        </div>
      </Link>
    </div>
  );
}

export default Create;
