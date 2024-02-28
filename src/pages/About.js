import { useLoaderData, Link } from "react-router-dom"

function About() {
  const about = useLoaderData();
  
  return (
    <div className="background">
      <div>
        {about.map((about) => {
          return (
            <div className="aboutPage">
              <div className="aboutName">
                
              <h1>{about.name}</h1>
              </div>
              <Link to={about.LinkedIn}>
                <h1>LinkedIn</h1>
              </Link>
              <Link to={about.GitHub}>
                <h1>GitHub</h1>
              </Link>
              
            </div>
            
          )
        })}
      </div>50%
      <div>
        <a href="/">
          <button>
            Back to main page
          </button>
        </a>
      </div>
    </div>
  )
}


export default About;
