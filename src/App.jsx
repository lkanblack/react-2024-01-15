import { useState } from "react";
import { Layout } from "./components/layout/component";
import { RestarauntList } from "./components/restarauntList/component";
import { UserContext } from "./contexts/user";

export const App = () => {
  const [user, setUser] = useState("");
  return(
    <UserContext.Provider value={[user, setUser]}>
      <Layout>
        <RestarauntList />
      </Layout>
    </UserContext.Provider>
  )
}