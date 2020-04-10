import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import List from './List';
import Top from './Top';
//import Form from './Form';
import CustomInput from './CustomInput';

function App() {
  return (
    <div  >
      <Header/>
      <Top/>
      <CustomInput/>
      {/* <Form/> */}
      {/* <Main/> */}
      {/* <List/> */}
      <Footer name="Makanan Nusantara"/>
    </div>
  );
}
export default App;
