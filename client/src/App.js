import { Routes, Route } from 'react-router-dom'
import './App.css';
import Properties from './components/properties/Properties';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import NewsLetter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/'element={<>
        <Navbar/>
        <Hero/>
        <Properties/>
        <FeaturedProperties/>
        <NewsLetter/>
        <Footer/>
      </>
      } />

      <Route path='properties'element={<>
        <Navbar/>
        <Properties/>
        <Footer/>
      </>} />

      
      <Route path='propertyDetail/:id'element={<>
        <Navbar/>
        <PropertyDetail/>
        <Footer/>
      </>} />


      <Route path='/signup'element={<Signup/>} />
      <Route path='signin'element={<Signin/>} />


    </Routes>
    </div>
  );
}

export default App;
