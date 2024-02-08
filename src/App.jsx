import { useState } from "react";
import { Layout } from "./components/layout/component";
import { RestarauntList } from "./components/restarauntList/component";
import { UserContext } from "./contexts/user";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  const [user, setUser] = useState("");
  return(
    <Provider store={store}>
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <RestarauntList />
        </Layout>
      </UserContext.Provider>
    </Provider>
  )
}