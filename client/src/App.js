import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css';
import Properties from './components/properties/Properties';
import PopularProperties from './components/popularProperties/PopularProperties';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import NewsLetter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Yachts from './components/yachts/Yachts';
import YachtDetails from './components/yachtDetails/YachtDetails';
import CreateYacht from './components/createYacht/CreateYacht';
import YachtEdit from './components/yachtEdit/YachtEdit';
import EditProperty from './components/editProperty/EditProperty';
import MyProfile from './components/myProfile/MyProfile';
import NotFound from './components/notFound/NotFound';

function App() {
  const {user} = useSelector((state) => state.auth)
  const url = useLocation().pathname

  useEffect(() => {
    url && window.scrollTo(0, 0)
  }, [url])

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <PopularProperties />
            <NewsLetter />
            <Footer />
          </>
        } />

        <Route path='/signup' element={!user ?
          <>
            <Navbar />
            <Signup />
            <Footer />
          </>
          : <Navigate to='/' />
        } />
        <Route path='/signin' element={!user ?
          <>
            <Navbar />
            <Signin />
            <Footer />
          </>
          : <Navigate to='/' />
        } />


        <Route path='properties' element={
          <>
            <Navbar />
            <Properties />
            <Footer />
          </>
        } />


        <Route path='/yachts' element={user ?
          <>
            <Navbar />
            <Yachts />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />
        <Route path='/yachts/:id' element={user ?
          <>
            <Navbar />
            <YachtDetails />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />
        <Route path='/create-yacht' element={user ?
          <>
            <Navbar />
            <CreateYacht />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />
        <Route path='/yachts-edit/:id' element={user ?
          <>
            <Navbar />
            <YachtEdit />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />


        <Route path='propertyDetail/:id' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />
        <Route path='/edit property/:id' element={user ?
          <>
            <Navbar />
            <EditProperty />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />


        <Route path='/my-profile' element={user ?
          <>
            <Navbar />
            <MyProfile />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />
        <Route path='/update-profile' element={user ?
          <>
            <Navbar />
            <Yachts />
            <Footer />
          </>
          : <Navigate to='/signin' />
        } />


        <Route path='*' elementment={
          <>
            <Navbar />
            <NotFound />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
