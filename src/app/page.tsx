import Navbar from "./components/navbar";
import Header from "./components/header";
import Editor from "./components/editor";
import Products from "./components/products";

import Classic from "./components/classic";
import Universe from "./components/universe";
import Featured from "./components/featured";
import Footer from "./components/footer";



export default function Home() {
  return (
    <div>
     
      <Navbar/>
      <Header/>
      <Editor/>
       <Products/>  
      <Classic/>
      <Universe/>
      <Featured/>
      <Footer/>
    
    </div>
  );
}
