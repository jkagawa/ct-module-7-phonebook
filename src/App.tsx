import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import AuthChecker from './auth/AuthChecker'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                  
                }
              />
            )) }
          </Routes>
        </Provider>
    </BrowserRouter>
  )
}

export default App