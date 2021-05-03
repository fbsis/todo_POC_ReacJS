
import { StateProvider } from './store/Store';
import TodoContainer from "./Domain/projects/Todo/TodoContainer";
import LoginContainer from "./Domain/user/Login/LoginContainer";
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  return (
    <StateProvider>
      <CssBaseline />
      <Header />
      <Container >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/todo" component={TodoContainer} />
          </Switch>
        </ BrowserRouter>
      </Container>
    </StateProvider>
  );
}

export default App;
