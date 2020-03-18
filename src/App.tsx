import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuBar from "./components/parts/menu";
import {
  ButtonScreen,
  CompWiresScreen,
  KeyPadsScreen,
  KnobsScreen,
  MazesScreen,
  MemoryScreen,
  MorseScreen,
  PasswordsScreen,
  SeqWiresScreen,
  SimonScreen,
  WhoScreen,
  WiresScreen
} from "./components/screens";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MenuBar />
        <Switch>
          <Route path="/button">
            <ButtonScreen />
          </Route>
          <Route path="/comp_wires">
            <CompWiresScreen />
          </Route>
          <Route path="/keypads">
            <KeyPadsScreen />
          </Route>
          <Route path="/knobs">
            <KnobsScreen />
          </Route>
          <Route path="/mazes">
            <MazesScreen />
          </Route>
          <Route path="/memory">
            <MemoryScreen />
          </Route>
          <Route path="/morse">
            <MorseScreen />
          </Route>
          <Route path="/passwords">
            <PasswordsScreen />
          </Route>
          <Route path="/seq_wires">
            <SeqWiresScreen />
          </Route>
          <Route path="/simon">
            <SimonScreen />
          </Route>
          <Route path="/who">
            <WhoScreen />
          </Route>
          <Route path="/wires">
            <WiresScreen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

const Home: React.FC = () => {
  return <h2>Home</h2>;
};

export default App;
