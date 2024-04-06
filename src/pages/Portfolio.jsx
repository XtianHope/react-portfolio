import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div className="content">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Weather Dashboard"
          image="../../public/images/weatherdash.png"
          deployedLink="https://xtianhope.github.io/sky-weather-dashboard/"
          githubLink="https://github.com/XtianHope"
        />
        <Project
          title="Code Quiz"
          image="../../public/images/codingquiz.png"
          deployedLink="https://xtianhope.github.io/code-quiz/"
          githubLink="https://github.com/XtianHope"
        />
        <Project
          title="Workday Scheduler"
          image="../../public/images/workdayscheduler.png"
          deployedLink="https://xtianhope.github.io/work-day-scheduler/"
          githubLink="https://github.com/XtianHope"
        />
      </div>
    </div>
  );
}

export default Portfolio;