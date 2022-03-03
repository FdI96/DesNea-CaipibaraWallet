import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./layout.css"

function Layout(props) {
    return (
      <div id='layout-fede'>
          <NavBar/>
            {props.children}
          <Footer/>
      </div>
    );
  }
  
  export default Layout;
  