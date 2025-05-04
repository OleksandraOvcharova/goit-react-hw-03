import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./Contact.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className="contact-box">
      <div className="contact-container">
        <div className="contact-name-container">
          <svg className="icon-box">
            <FaUserAlt className="icon" />
          </svg>
          <p>{name}</p>
        </div>
        <div className="contact-number-container">
          <svg className="icon-box">
            <FaPhone className="icon" />
          </svg>
          <p>{number}</p>
        </div>
      </div>
      <button
        className="contact-button"
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
