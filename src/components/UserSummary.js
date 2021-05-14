import { useState } from "react";
import UserForm from "./UserForm";

const UserSummary = ({ user, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleSave = () => {
    setIsEditMode(false);
    onSave(tempUser)
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    const userToUpdate = { ...tempUser, [name]: value };

    setTempUser(userToUpdate);
  };

  return (
    <>
      <h2>User Summary</h2>
      {!isEditMode ? (
        <>
          <button onClick={() => setIsEditMode(true)}>Edit</button>
          <ul>
            <li>
              <strong>Name:</strong>
              <span>
                {user.title} {user.firstName} {user.lastName}
              </span>
            </li>
            <li>
              <strong>Date of birth:</strong>
              <span>{user.dob}</span>
            </li>
          </ul>
        </>
      ) : (
        <>
          <button onClick={handleSave}>Save</button>
          <UserForm user={tempUser} onChange={handleChange} />
        </>
      )}
    </>
  );
};

export default UserSummary;
