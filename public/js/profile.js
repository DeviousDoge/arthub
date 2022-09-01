//using placeholder elements as i do not know the classnames of these textbox and button elements

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titletext').value.trim();
    const description = document.querySelector('#descriptiontext').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#newcontent')
    .addEventListener('click', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  