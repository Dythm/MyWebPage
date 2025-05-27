document.addEventListener('DOMContentLoaded', () => {
    const proyectosContainer = document.getElementById('proyectos-container');

    
    if (typeof proyectos !== 'undefined' && proyectos.length > 0) {
        proyectos.forEach(proyecto => {
            
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card'); 
            
            
            const projectImage = document.createElement('img');
            projectImage.src = proyecto.imagen;
            projectImage.alt = `Captura de pantalla de ${proyecto.nombre}`;
            projectImage.classList.add('project-image'); 
            projectCard.appendChild(projectImage);

            
            const projectContent = document.createElement('div');
            projectContent.classList.add('project-content'); 

         
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title'); 
            projectTitle.textContent = proyecto.nombre;
            projectContent.appendChild(projectTitle);

            
            const projectDescription = document.createElement('p');
            projectDescription.classList.add('project-description');
            projectDescription.textContent = proyecto.descripcionCorta;
            projectContent.appendChild(projectDescription);

            
            const techContainer = document.createElement('div');
            techContainer.classList.add('tech-container'); 
            proyecto.tecnologias.forEach(tech => {
                const techSpan = document.createElement('span');
                techSpan.classList.add('tech-tag'); 
                techSpan.textContent = tech;
                techContainer.appendChild(techSpan);
            });
            projectContent.appendChild(techContainer);

            
            const linksContainer = document.createElement('div');
            linksContainer.classList.add('links-container'); 

            
            const repoLink = document.createElement('a');
            repoLink.href = proyecto.linkRepositorio;
            repoLink.target = "_blank"; 
            repoLink.classList.add('link-button', 'repo-button'); 
            repoLink.innerHTML = `<i class="fab fa-github"></i> <span>Código</span>`;
            linksContainer.appendChild(repoLink);

            
            if (proyecto.linkDemo) {
                const demoLink = document.createElement('a');
                demoLink.href = proyecto.linkDemo;
                demoLink.target = "_blank"; 
                demoLink.classList.add('link-button', 'demo-button'); 
                demoLink.innerHTML = `<i class="fas fa-external-link-alt"></i> <span>Demo</span>`;
                linksContainer.appendChild(demoLink);
            }

            projectContent.appendChild(linksContainer);
            projectCard.appendChild(projectContent);

            
            proyectosContainer.appendChild(projectCard);
        });
    } else {
        
        proyectosContainer.innerHTML = '<p class="text-center text-gray-600 col-span-full">No hay proyectos para mostrar en este momento.</p>';
    }
});
