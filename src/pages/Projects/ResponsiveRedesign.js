import React from 'react';
import '../../styles/ProjectContent.css';
import Navbar from '../../components/Navbar';

import original_img from '../../assets/rr_original_site.png'

function ResponsiveRedesign() {

    return (
        <div className='app'>
            <Navbar />
            <h1>AUDREY SITE REDESIGN</h1>
            <p className='project-subtitle'>Designed an <a>accessible and responsive</a> redesign of the Audrey Thong Lor branch site using HTML and CSS.</p>   
            <a href="https://earth15354.github.io/earth-responsive-redesign/"><button className="project-but">PROJECT LINK</button></a> 

            <br/><hr/><br/>

            <div className='project-content'>
                <h2 className='project-headers'>Problem</h2>
                <img src={original_img} className='project-image'/>
                <p className="project-description">
                I redesigned the website for the Thong Lor branch of Cafe Audrey (a restaurant in Thailand). 
                The original site (shown above) had multiple issues, such as missing images, incosistent fonts, and very small or low contrast text that was hard to read. 
                Furthermore, a lot of important elements, like the links to the cafe's socials and a "reserve" button to reserve places at the cafe, were very small and not made prominent.
                Finally, as someone who has also frequented the restaurant, I chose to redesign this site for one of my UIUX course assignments.
                </p>
                <h2 className='project-headers'>Process</h2>
                <p className="project-description">
                I first had to come up with a design for my redesign of the site. In order to do so, I sketched out many different unique of the site on a piece of paper,
                making sure to keep the important elements in the original site present in my sketches. Then, I'd try to aggregate my favorite sketches together and create
                a low fidelity outline for the site in Figma.

                Afterwards, I created high fidelity mockups of my site so I could plan out colors, fonts, and unique designs for different screen shapes. The high fidelity
                mockups proved to make designing the site much easier later on, as trying out colors and designs in Figma take up much less time than in HTML/CSS.
                </p>
                <h2 className='project-headers'>Outcomes</h2>
                <p className="project-description">
                After the end of the process, I created a site in HTML and CSS deployed on Github pages (linked above and below). I decided to clean up the navigation branch
                so the options and buttons were clearer, and I displayed important information much more prominantly (ex. maps, contact information, and reservation details). 

                I also made sure the site worked with a screen-reader and fulfilled most of the accessibility requirements in a WAVE test.
                </p>
                <h2 className='project-headers'>Evaluations and Learnings</h2>
                <p className="project-description">
                <ul>
                    <li>Learned how to make a webpage responsive and look nice on all screen sizes</li>
                    <li>Learned to test for and identify accessibility issues in websites</li>
                    <li>Learned the importance of drafting and planning before implementing designs</li>
                </ul>
                There are also things I would like to improve on my design. At the time, as I was newer to web design, I focused too much on making the site responsive to changes
                in window size that I forgot to test zooming capabilities. Since I had styled my text based on window size, zooming in or out did not change the dimensions of the site,
                which could be detrimental for some users.
                </p>

                <h2 className='project-headers'>Skills and Tools Used</h2>
                <p className="project-description">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Github & Github Pages</li>
                        <li>Figma (Low-Fi & Hi-Fi Prototyping)</li>
                        <li>Sketching</li>
                    </ul>
                </p>
                <h2 className='project-headers'>View Deployed Site</h2>
                <div className='project-buttons'>
                    <a href="https://earth15354.github.io/earth-responsive-redesign/"><button className="project-but">REDESIGNED SITE</button></a>
                    <a href="http://www.audreygroup.com/AudreyCafeBistroThongLoSoi11.html#menu"><button className="project-but">ORIGINAL SITE</button></a>
                </div>

            </div>

            
        </div>
    );
}

export default ResponsiveRedesign;