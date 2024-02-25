import { useLoaderData, Link } from "react-router-dom"

function About() {
  const about = useLoaderData();
  
  return (
    <div>
      <div>
        {about.map((about) => {
          return (
            <div>
              <h1>{about.name}</h1>
              <Link to={about.LinkedIn}>
                <h1>LinkedIn</h1>
              </Link>
              <Link to={about.GitHub}>
                <h1>GitHub</h1>
              </Link>
              
            </div>
          )
        })}
      </div>
      About Page...Hello
    </div>
  )
}


export default About;
