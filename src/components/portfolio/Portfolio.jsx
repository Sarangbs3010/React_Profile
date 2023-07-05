import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  const arr=[
    {
      id:1,
      image: IMG1,
      title: 'Visualization of data on the planet for global data',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/21221296-Visualization-of-data-on-the-planet-for-global-data'
    },
    {
      id:2,
      image: IMG2,
      title: 'Orion UI kit – data visualization and charts templates for Figma',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/20894791-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
    },
    {
      id:3,
      image: IMG3,
      title: 'Eclipse - Figma dashboard UI kit for data design web apps',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/21277763-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id:4,
      image: IMG4,
      title: 'Eclipse - Figma dashboard UI kit for data design web apps',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/21221451-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id:5,
      image: IMG5,
      title: 'Orion UI kit – data visualization and charts templates for Figma',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/20512316-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
    },
    {
      id:6,
      image: IMG6,
      title: 'Orion UI kit – data visualization and charts templates for Figma',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/21221232-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          arr.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio_card'>
              <div className="portfolio_img">
                <img src={image} alt={title} />
              </div>
              <h3>This is portfolio image</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn'>
                  Github
                </a>
                <a href={demo} target='_blank'>
                   Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio