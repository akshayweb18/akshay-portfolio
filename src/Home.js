
import {Link} from "react-router-dom"
const Home = ({colors}) => {
  return (
    <>
    <div  className={colors ? 'navbar-light home-section' : 'navbar-dark home-section'}>
      <section>
        <div className="container">
          <div className="row align-items-center for-mob-desk">
            <div className="col-lg-6 col-md-6 text-start">
              <h1 className="hello-text">Hello 👋</h1>
              <h1>
                This is <span className="fixeolor">Akshay Chaudhari</span><br />I'm a Professional
              </h1>
              <h1 className="pink-red">UI/UX Developer</h1>
              <div className='mt-2 icons-groups'>
                {/* <i class="fa fa-github" aria-hidden="true"></i> */}
              <a href="https://www.linkedin.com/in/akshayweb18"> <i class="fa fa-linkedin-square" aria-hidden="true"></i></a> 
                <a href="https://www.instagram.com/itsakshay.18/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://x.com/Akshay71066"><i class="fa fa-twitter-square" aria-hidden="true"></i></a> 
              </div>
              <div className='group-btns-home'>
                <Link to="/Contactus"><button className='contact-me'>Contact Me
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path></svg>
                </button></Link>

                <a href="/AKSHAY-CHAUDHARI-RESUME.pdf"><button className='resume'>get resume
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg>
                </button></a>

              </div>
            </div>
            <div className="col-lg-6  col-md-6  text-center">
              {/* You can add an image or animation here later */}
              <img class="neon-border img-fluid" src="../rounded_profile_image_resizeds.png" alt="Profile Image" />

            </div>
          </div>

        </div>

      </section>



      <section className="skills-slider">

        <div className='container'>

          <div className='row'>

            <div className='col-lg-12'>
              <h5 className="title-fix">Skills</h5>
              <div className="skills-wrapper">
                {/* HTML */}
                <div className="skill-card">
                  <img
                    alt="HTML"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                    src="/assets/html.png"
                  />
                </div>

                {/* CSS */}
                <div className="skill-card">
                  <img
                    alt="CSS"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                   src="/assets/css.png"
                  />
                </div>

                {/* JavaScript */}
                <div className="skill-card">
                  <img
                    alt="JavaScript"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                     src="/assets/js.png"
                  />
                </div>

                <div className="skill-card">
                  <img
                    alt="JavaScript"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                     src="/assets/boot.png"
                  />
                </div>

                {/* React */}
                <div className="skill-card">
                  <img
                    alt="React"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                    src="/assets/react.png"
                  />

                </div>
                {/* Bootstrap */}
                <div className="skill-card">
                  <img
                    alt="Bootstrap"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                   src="/assets/sass.png"
                  />
                </div>
                

                <div className="skill-card">
                  <img
                    alt="Bootstrap"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                   src="/assets/jq.png"
                  />
                </div>
                

                {/* Figma */}
                <div className="skill-card">
                  <img
                    alt="Figma"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                     src="/assets/figma.png"
                  />
                </div>

                {/* Git */}
                <div className="skill-card">
                  <img
                    alt="Git"
                    loading="lazy"

                    className="h-full w-auto rounded-lg"
                    src="/assets/github.png"
                  />
                </div>
              </div>

            </div>
            <hr className="neon-hr" />
          </div>

        </div>

      </section>



      <section className="profile">

        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='wrapper'>
                <div className='wrapper-one'>
                  <h5 className="title-fix">SUMMARY</h5>
                  <p className='profile-text'>Highly motivated and detail-oriented Front-End Web Developer with 2.6 years of experience in designing
                    and developing responsive, user-friendly interfaces for modern web applications. Proficient in HTML, CSS,
                    JavaScript, jQuery, and Bootstrap, with a proven ability to transform complex design concepts into
                    functional, efficient, and visually appealing web solutions.</p>
                </div>

              </div>
            </div>
          </div>
          <hr className="neon-hr" />
        </div>
      </section>

      <section className={colors ? 'navbar-light experience' : 'navbar-dark experience'}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flex-education-box'>
                <div>
                  <h5 className="title-fix">EXPERIENCE  ( 2.6 YEARS )</h5>
                  <ul>
                    <li style={{ listStyle: "none" }}><h5>Responsibilities</h5></li>
                    <li>Developed responsive user interfaces and reusable components for web applications.</li>
                    <li>Translated Figma/design mockups into functional, pixel-perfect code.</li>
                    <li>Implemented accessibility features and ensured cross-browser compatibility.</li>
                    <li>Integrated REST APIs in React</li>
                    <li>Created stateful and stateless components with proper props & state management.</li>
                    <li>Optimized React rendering performance using memoization and key handling.</li>
                    <li>Participated in code reviews to maintain clean and efficient code standards.</li>
                    <li>Fixed bugs and maintained the existing codebase.</li>
                    <li>Collaborated with senior developers to enhance technical skills and project quality.</li>
                  </ul>
                </div>
                <div>
                  <div className='shine-boxes'>

                    <div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path></svg>
                    </div>
                    <div>
                      <h6>( OCT 2022 - JAN 2025 )</h6>
                      <h4>UI/UX Developer</h4>
                      <p>CMOTS INTERNET TECHNOLOGY</p>
                      {/* <img className='img-fluid' style={{width : "200px"}} src="../cmots-png.png" alt="" /> */}
                    </div>

                  </div>
                  <div className='shine-boxes'>
                    <div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path></svg>
                    </div>
                    <div>
                      <h6>( JAN 2025 - MARCH 2025 )</h6>
                      <h4>UI/UX Developer</h4>
                      <p>MEETUP SYSTEM</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <hr className="neon-hr" />
          </div>

        </div>

      </section>


      <section className="education">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flex-education-box'>
                <div>
                  <h5 className="title-fix">EDUCATION</h5>
                  <div className='shine-boxes-edu borders'>

                    <div>
                     <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h6>GRADUATION</h6>
                      <h4>Bachelor of Arts - Yashwantrao Chavan Maharashtra Open University</h4>
                      <p>Panvel</p>

                      {/* <img className='img-fluid' style={{width : "200px"}} src="../cmots-png.png" alt="" /> */}
                    </div>

                  </div>
                
                  <div className='shine-boxes-edu'>
                    <div>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h6>Higher Secondary</h6>
                      <h4>N.N Palivala</h4>
                      <p>Panvel</p>
                    </div>

                  </div>
                    <div className='shine-boxes-edu'>
                    <div>
                      <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h6>SCHOOL</h6>
                      <h4>Mahatma School of Academics & Sports</h4>
                      <p>Panvel</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <hr className="neon-hr" />
          </div>

        </div>

      </section>






</div>

    </>

  );
};

export default Home;
