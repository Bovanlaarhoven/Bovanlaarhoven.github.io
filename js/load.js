fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            const iconLink = document.createElement('a');
            iconLink.href = project.Link;
            iconLink.target = "_blank";
            const iconImage = document.createElement('img');
            iconImage.src = project.images ? project.images : 'https://avatars.githubusercontent.com/u/44844728?v=4';
            iconImage.alt = project.name;
            iconLink.appendChild(iconImage);
            projectDiv.appendChild(iconLink);

            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');

            const nameElement = document.createElement('h3');
            nameElement.textContent = project.name;
            projectDetails.appendChild(nameElement);

            const positionElement = document.createElement('p');
            positionElement.textContent = project.position;
            projectDetails.appendChild(positionElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = project.description;
            projectDetails.appendChild(descriptionElement);

            projectDiv.appendChild(projectDetails);

            document.getElementById('portfolio-item').appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error loading portfolio:', error));
