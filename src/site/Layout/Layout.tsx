import { Routes, Route, Navigate } from 'react-router-dom';

import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

// Pages
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import Books from '../../pages/Books/Books';

const Layout = () => {
      return (
            <div>
                  <NavBar />
                  <Content>
                        <Routes>
                              <Route path='/' element={ <Home /> } />
                              <Route path='/contact' element={ <Contact /> } />
                              <Route path='/books' element={ <Books /> } />
                              {/* <Route path='/category/:id' element={<ItemListContainer />} />
                              <Route path='/item/:id' element = {<ItemDetailContainer />} />
                              <Route path='/cart' element = {<Cart />} />
                              <Route path='/order' element = { <Order />} /> */}
                              <Route path='*' element={ <Navigate to={'/'} /> } />
                        </Routes>
                  </Content>
                  <Footer />
            </div>
      );
}

export default Layout;