import "./App.css";
import Data from "../src/data.json";

const categoryTab = Data;

function App() {
  return (
    <>
      <img
        className="logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt=""
      />
      <main>
        <div>
          {categoryTab.map((category, index) => {
            return (
              <div>
                <h1 key={index} className="category-title">
                  {category.category}
                </h1>
                <div className="image-block">
                  {category.images.map((movie, index) => {
                    return (
                      <img
                        key={index}
                        className="movie-images"
                        src={movie}
                        alt="movie"
                      />
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
