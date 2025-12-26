import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import PostsPage from './pages/PostsPage';

function App () {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts' element={<PostsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
