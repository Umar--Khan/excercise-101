const UserForm = ({ user, onChange, handleSave }) => {
  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" value={user.firstName} onChange={onChange}/>
          <button type="submit">Save</button>
      </form>
    </>
  );
};

export default UserForm;
