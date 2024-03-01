import { useState, useEffect } from "react";

const apiKey = process.env.CAT_API_KEY;

function Footer(props) {
  //use state
  const [catImageUrl, setCatImageUrl] = useState(null);

  useEffect(() => {
    async function fetchCatImage() {
      try {
        //api call
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to load cat");
        }

        const data = await response.json();
        const fetchedCatImageUrl = data[0].url;
        setCatImageUrl(fetchedCatImageUrl);
      } catch (error) {
        console.error("Error fetching cat image:", error);
      }
    }

    fetchCatImage();
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
   
      <div className="showcase">
        <div className="copyright">
          <h3>High-Five Development &copy; 2024</h3>
        </div>
        {catImageUrl && (
          <img src={catImageUrl} className="footerImage" alt="Cat" />
        )}
      </div>
  
  );
}

export default Footer;
