import { useState } from "react";
import { Layout } from "./components/layout/component";
import { RestarauntList } from "./components/restarauntList/component";
import { UserContext } from "./contexts/user";

export const App = () => {
  const [context, setContext] = useState("");
  return(
    <UserContext.Provider value={[context, setContext]}>
      <Layout>
        <RestarauntList />
      </Layout>
    </UserContext.Provider>
  )
}