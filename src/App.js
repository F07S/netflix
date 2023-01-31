import "./App.css";
import Data from "../src/data.json";

const tab = Data;
const titles = tab.map((elem) => {
  return elem.category;
});
// console.log(titles);

const allImages = tab.map((elem) => {
  return elem.images;
});
// console.log(allImages);

function App() {
  return (
    <>
      <body>
        <main>
          <div className="Category">
            <h1>{titles[0]}</h1>
            <img src={allImages[0][0]} alt="" />
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
