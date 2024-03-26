import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUpPage from './components/LoginSignUpPage';
import FindDoctor from './pages/FindDoctor';
import ConfirmPaymentPage from './pages/ConfirmPaymentPage';
import AppointmentsPage from './pages/AppointmentsPage';
import VideoCallPage from './pages/VideoCallPage';
import ConsultDoctor from './pages/ConsultDoctor';
import AddDoctorPage from './pages/AddDoctorPage';
import FindDoctorPage from './pages/FindDoctorPage';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/login' element={
          <Layout>
            <LoginSignUpPage />
          </Layout>
        } />
        <Route path='/bookAppointment' element={
          <Layout>
            <FindDoctor />
          </Layout>
        } />
        <Route path='/confirmPayment' element={
          <Layout>
            <ConfirmPaymentPage />
          </Layout>
        } />
        <Route path='/appointmentsPage' element={
          <Layout>
            <AppointmentsPage />
          </Layout>
        } />
        <Route path='/videoCall' element={
          <Layout>
            <VideoCallPage />
          </Layout>
        } />
        <Route path='/consultNow' element={
          <Layout>
            <ConsultDoctor />
          </Layout>
        } />
        <Route path='/addDoctor' element={
          <Layout>
            <AddDoctorPage />
          </Layout>
        } />
        <Route path='/findDoctor' element={
          <Layout>
            <FindDoctorPage />
          </Layout>
        } />
      </Routes>
     </Router>
    </>
  )
}

export default App
