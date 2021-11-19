import './App.scss';

import MainContainer from "./components/MainContainer";

function App() {

  return (
    <div className="App">

      <MainContainer />

    </div>
  );
}
var images = [],
  index = 0;
images[0] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3152&q=80' alt='backgroundimage'></div>";
images[1] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1621397822911-381557355e81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2736&q=80'  alt='backgroundimage'></div>";
images[2] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1530256191203-3c2e2a93cd19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80' alt='backgroundimage'></div>";
images[3] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1484693996095-5dee5c38ac74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80' alt='backgroundimage'></div>";
images[4] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1470399332216-237209aa628e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80' alt='backgroundimage'></div>";
images[5] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1463171515643-952cee54d42a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3570&q=80' alt='backgroundimage'></div>";
images[6] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1486155410187-0317218a4949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3571&q=80' alt='backgroundimage'></div>";
images[7] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1524261185784-f3d0c95e3fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3571&q=80' alt='backgroundimage'></div>";
images[8] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1524706617554-26ee848fd76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3928&q=80' alt='backgroundimage'></div>";
images[9] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1529333110658-26b4cf759641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3928&q=80' alt='backgroundimage'></div>";
images[10] = "<div id='bgimg'><img src='https://images.unsplash.com/photo-1533377285233-2e53ba99e0fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3570&q=80' alt='backgroundimage'></div>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);

export default App;

