import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainPage, DocsPage, NotFoundPage, PersonalCenterPage } from './pages';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['App']}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<MainPage/>}></Route>
          <Route path='/docs' element={<DocsPage/>}></Route>
          <Route path='/personalcenter' element={<PersonalCenterPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
