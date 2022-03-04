import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout(props) {
  return (
    <div id="Layout">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
