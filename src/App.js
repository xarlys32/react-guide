import {Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import ProductDetail from './component/ProductDetail';
import Products from './component/Products';
import Welcome from './component/Welcome';

function App() {
  return (
    <div>
      <Header />
      {/**Routes is the same as switch on version 5 */}
      <Routes>
        <Route path='welcome' element={<Welcome />}>
          {/**This nested version is only for version 6 */}
          <Route path='newUser' element={<p>Welcome BITCH!</p>}/>
        </Route>
        <Route path='/products' element={<Products />} >
          <Route path='/products/:product' element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
