import React from 'react';
import Register from './SANDBOX/auth/Register';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div>
				<Route path='/login' exact component={Login} />
				<Route path='/about' exact component={About} />
        <Route path='/' component={Register} />
      </div>
    </BrowserRouter>
  )
}
export default App;