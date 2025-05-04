import Contact from "./Contact";
import "./ContactList.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="contact-list-item">
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
