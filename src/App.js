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
      <img
        className="logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt=""
      />
      <main>
        <div className="Category">
          {tab.map((elem, index) => {
            // console.log(elem);
            return (
              <div>
                <h1 key={index} className="title">
                  {elem.category}
                </h1>
                <div className="image-block">
                  {elem.images.map((item, index) => {
                    console.log(item);
                    return (
                      <img key={index} className="images" src={item} alt="" />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
