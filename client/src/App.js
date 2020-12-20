import { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import AuthContext from './Components/Authentication/AuthFunctions';
import { PrivateRoute } from './Components/Authentication/PrivateRoute';
import BookingContainer from './Components/BookingContainer/BookingContainer';
import CinemaContainer from './Components/CinemaContaner/CinemaContainer';
import Navbar from './Components/Navbar/Navbar';
import { fetchAllCinema } from './Redux/Action/CinemaAction';
import { addCurrentUser } from './Redux/Action/UserInfoAction';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCinema())
    dispatch(addCurrentUser(JSON.parse(localStorage.getItem('currentUser'))))
  }, [dispatch])

  return (
    <>
      <AuthContext>
      <NotificationContainer/>
        <Navbar/>
        <Switch>
          <Route path='/home'>
            <CinemaContainer />
          </Route>
          <Route path='/login'>
            <Authentication />
          </Route>
          <PrivateRoute path='/cinema/:cinemaId'>
            <BookingContainer />
          </PrivateRoute>
          <Route exact path='/'>
            <CinemaContainer />
          </Route>
        </Switch>
      </AuthContext>
    </>
  );
}

export default App;
