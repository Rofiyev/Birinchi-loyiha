import "./App.css";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
import img6 from "./img6.webp";
import img7 from "./img7.webp";
import img8 from "./img8.webp";
import img9 from "./img9.webp";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Odam Lviran</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <div className="container">
          <h1>Illustrator</h1>
          <div className="wrapper">
            <div className="row-1">
              <div className="card">
                <img src={img1} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img3} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img5} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img7} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img9} alt="Rasm" />
              </div>
            </div>
            <div className="row-2">
              <div className="card">
                <img src={img2} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img4} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img6} alt="Rasm" />
              </div>
              <div className="card">
                <img src={img8} alt="Rasm" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <span>© 2035 by Odam Lviran. Proudly created with Wix.com</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
