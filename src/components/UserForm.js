const UserForm = ({ user, onChange }) => {
  return (
    <>
      <form>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" value={user.firstName} onChange={onChange}/>
      </form>
    </>
  );
};

export default UserForm;
