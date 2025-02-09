import React from "react";
import { Link } from "react-router-dom";

const images = [
  "https://media.istockphoto.com/id/1415525222/photo/fire-and-chinese-chefs.jpg?s=612x612&w=0&k=20&c=HWFi9uabb3CD0t9UkHfhTWDgtvhKq1gv2sK7MLVzxkc=",
  "https://media.istockphoto.com/id/1339324933/vector/cooking-seamless-pattern-with-empty-spase-for-text.jpg?s=612x612&w=0&k=20&c=2ilcamG-XIDWMPDVp7vKRO70fVaNSbiz4kRhQhc7iWg=",
  "https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng=",
  "https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I=",
  "https://media.istockphoto.com/id/2004635695/photo/chef-preparing-food-in-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=jAGQtFawn534LND5Dn5qOS8Fiw0oSpoSKoxvF5215Ek=",
  "https://media.istockphoto.com/id/675787815/video/flames-burn-under-a-frying-pan-filled-with-shrimp.jpg?s=640x640&k=20&c=2JubyQLa6jzvmQBY5EP5rIi1IubPCjowxqmRKQ3Ee7c="
];

const App = () => {
  return (
    <div className="app-container">
      {/* Background Grid */}
      <div className="background-grid">
        {images.map((img, index) => (
          <div key={index} style={{ backgroundImage: `url(${img})` }}></div>
        ))}
      </div>

      {/* Content */}
      <header className="apphead">
        <h2>🍽️ Welcome to Recipe Finder</h2>
        <p>Find the best recipes for any occasion!</p>
      </header>
      <nav className="appnav">
        <h2>Recipe Finder</h2>
        <div>
          <Link to="/searchpage">
            <button>Start Cooking</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default App;
