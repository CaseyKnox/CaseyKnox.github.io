document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/content/about.md');
        const markdown = await response.text();
        
        // Parse the markdown content
        const htmlContent = marked.parse(markdown);
        
        // Convert the HTML string into sections
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        const aboutContent = document.querySelector('.about-content');
        aboutContent.innerHTML = ''; // Clear existing content
        
        // Process each h1 as a section
        let currentSection = null;
        Array.from(tempDiv.children).forEach(element => {
            if (element.tagName === 'H1') {
                // Create new section
                currentSection = document.createElement('section');
                currentSection.id = element.textContent.toLowerCase().replace(/\s+/g, '-');
                
                // Convert h1 to h2 for the section
                const h2 = document.createElement('h2');
                h2.textContent = element.textContent;
                currentSection.appendChild(h2);
                aboutContent.appendChild(currentSection);
            } else if (element.tagName === 'H2') {
                // Create work-item or skill-category div
                const div = document.createElement('div');
                div.className = currentSection.id === 'selected-work' ? 'work-item' : 'skill-category';
                
                const h3 = document.createElement('h3');
                h3.innerHTML = element.innerHTML;
                
                div.appendChild(h3);
                currentSection.appendChild(div);
            } else if (element.tagName === 'EM') {
                // Create meta div for work items
                const meta = document.createElement('div');
                meta.className = 'meta';
                meta.textContent = element.textContent;
                currentSection.lastElementChild.appendChild(meta);
            } else if (currentSection) {
                currentSection.lastElementChild.appendChild(element.cloneNode(true));
            }
        });
    } catch (error) {
        console.error('Error loading about content:', error);
    }
});
