import React from "react";
import Github from "../Icons/Github";
import Web from "../Icons/Web";
import { Card } from "react-bootstrap";
import spicyBites from "../../assets/projects/spicy-bites.JPG";
import booksearch from "../../assets/projects/booksearch.PNG";
import weatherDashboard from "../../assets/projects/weather-dashboard.JPG";
import workdayScheduler from "../../assets/projects/workday-scheduler.JPG";
import teamGenerator from "../../assets/projects/team-generator.PNG";
import techSavvy from "../../assets/projects/tech-savvy.PNG";

const Project = () => {
  return (
    <div className="project-cards">
      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={spicyBites} />
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Spicy Bites</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/spicy-bites.git"
            >
              <Github />
            </a>
          </Card.Link>
          <Card.Link>
            <a className="footer-icon" href="https://spicy-bites.herokuapp.com">
              <Web />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={booksearch} />
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Book Search</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/reading-nook.git"
            >
              <Github />
            </a>
          </Card.Link>
          <Card.Link>
            <a className="footer-icon" href="https://mkothari-booksearch.herokuapp.com/">
              <Web />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={weatherDashboard} />
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Weather Dashboard</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/weather-dashboard.git"
            >
              <Github />
            </a>
          </Card.Link>
          <Card.Link>
            <a className="footer-icon" href="https://mkothari93.github.io/weather-dashboard/">
              <Web />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={workdayScheduler}/>
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Workday Scheduler</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/work-day-scheduler.git"
            >
              <Github />
            </a>
          </Card.Link>
          <Card.Link>
            <a className="footer-icon" href="https://mkothari93.github.io/work-day-scheduler/">
              <Web />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={teamGenerator} />
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Team Generator</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/team-profile-generator.git"
            >
              <Github />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={techSavvy} />
        <Card.Body className="mt-3">
          <Card.Title><h1 className="fw-bold">Tech Savvy: A Tech Blog</h1></Card.Title>
          <Card.Text><h5>Description</h5></Card.Text>
          <Card.Link>
            <a
              className="footer-icon"
              href="https://github.com/mkothari93/Tech-Savvy.git"
            >
              <Github />
            </a>
          </Card.Link>
          <Card.Link>
            <a className="footer-icon" href="https://mkothari-tech-savvy.herokuapp.com/">
              <Web />
            </a>
          </Card.Link>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Project;
