import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p><a href={deployedLink}>Deployed App</a></p>
      <p><a href={githubLink}>GitHub Repository</a></p>
    </div>
  );
}

export default Project;