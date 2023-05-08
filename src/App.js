import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Forms from './pages/Forms'
import Formik from './pages/loginFormik'
import OriginalForm from './pages/OriginalForm'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route  path="/loginFormik">
              <Formik />
            </Route>
            <Route path="/LinerStepper">
              <Forms />
            </Route>
            <Route path="/OriginalForm">
              <OriginalForm />
            </Route>
            
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
