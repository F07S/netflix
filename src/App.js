import "./App.css";
import Data from "../src/data.json";

const tab = Data;
// const titles = tab.map((elem) => {
//   return elem.category;
// });
// console.log(titles);

// const allImages = tab.map((elem) => {
//   return elem.images;
// });
// console.log(allImages);

function App() {
  return (
    <>
      <body>
        <main>
          <div className="Category">
            {tab.map((elem, index) => {
              return (
                <>
                  <div>
                    <h1 key={index} className="title">
                      {elem.category}
                    </h1>
                    {tab.map((item, index) => {
                      return (
                        <img
                          key={index}
                          className="images"
                          src={item.images}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
