import { useCallback, useState } from "react";
import { USERS } from "./service/__mocks/users";
import UserSummary from "./components/UserSummary";
import "./App.css";

const App = () => {
  const [accounts, setAccounts] = useState(USERS);

  const onSave = useCallback(
    (user) => {
      const accountsToUpdate = accounts.map((account) => {
        if (account.id === user.id) {
          return user;
        }
        return account;
      });

      setAccounts(accountsToUpdate);
    },
    [accounts]
  );

  const renderUserSummary = useCallback(
    () =>
      accounts.map((user) => (
        <UserSummary user={user} key={user.id} onSave={onSave} />
      )),
    [accounts, onSave]
  );

  return (
    <div className="App">
      <div>{renderUserSummary()}</div>
    </div>
  );
};

export default App;
