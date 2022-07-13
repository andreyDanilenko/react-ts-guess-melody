import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage, LoginPage, GamePage, ResultPage, NotFoundPage } from 'src/pages';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import PrivateRoute from '../privateRoute/PrivateRoute';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path={AppRoute.WelcomePage}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                <WelcomePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.GamePage}
            element={<GamePage /> }
          />
          <Route
            path={AppRoute.ResultPage}
            element={ <ResultPage /> }
          />
          <Route
            path={AppRoute.LoginPage}
            element={ <LoginPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </div>

);

export default App;
