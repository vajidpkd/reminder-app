import React, { useState } from "react";
import "../reminder-app/Reminder.css";

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  // input value
  const handleInputChange = (event) => {
    setNewReminder(event.target.value);
  };

  // add
  const handleAddReminder = (event) => {
    event.preventDefault();
    if (newReminder !== "") {
      setReminder([...reminder, { item: newReminder, id: Date.now() }]);
      setNewReminder("");
    }
  };

  // delete
  const handleDeleteReminder = (id) => {
    const filterData = reminder.filter((reminder) => reminder.id !== id);
    setReminder(filterData);
  };

  return (
    <div className="container">
      <h1>Reminder App</h1>
      <form className="input-seciton">
        <input
          type="text"
          placeholder="Enter a reminder"
          onChange={handleInputChange}
          value={newReminder}
        />
        <button onClick={handleAddReminder}>Add Reminder</button>
      </form>

      <ul className="reminds">
        <p className={reminder.length > 0 ? "display-non" : ""}>
          not reminders found..
        </p>
        {reminder.map((reminder) => (
          <li key={reminder.id}>
            <span>{reminder.item}</span>
            <button onClick={() => handleDeleteReminder(reminder.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reminder;
