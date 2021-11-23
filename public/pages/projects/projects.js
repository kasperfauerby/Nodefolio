fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => { 
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.title)}</h3>
            <p>Date: ${escapeHTML(project.date)}</p>
            <p>Description: ${escapeHTML(project.description.join(", "))}</p>
            <p>Github: ${escapeHTML(project.github.join(", "))}</p>
        `;
        
        projectsWrapperDiv.appendChild(projectDiv);

    });
});
