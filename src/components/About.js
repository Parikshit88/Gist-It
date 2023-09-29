import React from "react";

const About = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mt-5">
          <h1 className="accordion-header mb-3">About</h1>
          <div className="accordion-body">
            <h6 className="headerforhead">
              Welcome to <strong>Gist-It</strong>, your go-to solution for
              organizing your thoughts, ideas, and important information in one
              place. With our user-friendly Notes App, you can root to efficient
              time managament, streamline your note-taking process and boost
              your productivity like never before.
            </h6>

            <h4 className="mt-5">Key Features :</h4>
            <br />
            <ul className=" list">
              <li>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Effortless Note taking -</div> Take
                  notes quickly and easily, whether you're in a meeting,
                  brainstorming, or jotting down important details. Our
                  intuitive interface ensures a smooth note-taking experience.
                </div>
              </li>
              <br />
              <li>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Organize and Categorize -</div> Keep
                  your notes organized by creating tags. This helps you find the
                  information you need in seconds, even as your note collection
                  grows.
                </div>
              </li>
              <br />
              <li>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Sync Across Devices -</div> Access
                  your notes from anywhere, on any device. Seamlessly sync your
                  notes between your computer, tablet, and smartphone so you can
                  stay productive on the go.
                </div>
              </li>
              <br />
              <li>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Stay Secure -</div> Your data's
                  security is our top priority. We employ industry-standard
                  encryption to keep your notes safe and private.
                </div>
              </li>
            </ul>
            <p className="pforfoot mt-5">
              <strong>Gist-It</strong> is designed to simplify your note-taking
              tasks and help you stay organized in today's fast-paced world. Say
              Goodbye to scattered sticky notes and Hello to a more efficient
              way of managing your ideas and information.
            </p>
            <p className="pforfootfoot mt-5">Get Started Today</p>
          </div>
        </div>
      </div>
      <p className="pforcopyright mt-5 mb-4">
        Copyright &copy; Gist-It | All Rights Reserved
      </p>
    </>
  );
};

export default About;
