let hasCollab = false;


const collabButtonHandler = async (event) => {
    event.preventDefault();

    
    const URL = window.location.search; 
    const urlParams = new URLSearchParams(URL);
    const project_id = urlParams.get(id);
    
    if (hasCollab = false) {
        const response = await fetch(`/api/collaborator`, {
            method: 'POST',
            body: JSON.stringify({project_id}),
            headers: {
                'Content-Type': 'application/json',
              },
        });

        if (response.ok) {
            document.location.replace('/project/:id');
          } else {
            alert('Failed to become a collaborator');
          }
    }
}

document
    .querySelector('.collaborate')
    .addEventListener('click', collabButtonHandler);