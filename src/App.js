import { useState } from "react";
import { USERS } from "./service/__mocks/users";
import UserSummary from "./components/UserSummary";
import "./App.css";

const App = () => {
  const [accounts, setAccounts] = useState(USERS);

  const onSave = (user) => {
    const accountsToUpdate = accounts.map((account) => {
      if (account.id === user.id) {
        return user;
      }
      return account;
    });

    setAccounts(accountsToUpdate);
  };

  return (
    <div className="App">
      <div>
        {accounts.map((user) => (
          <UserSummary user={user} key={user.id} onSave={onSave}/>
        ))}
      </div>
    </div>
  );
};

export default App;
