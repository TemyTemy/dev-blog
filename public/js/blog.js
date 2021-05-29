const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const moveToHomePage = () => {
  document.location.replace('/new-post');
};  

const moveToDisplayItemPage = () => {
  document.location.replace('/post/1');
};

const moveToEditItemPage = () => {
  document.location.replace('/post/1/edit');
};


const newPost = document.querySelector('#btn_new_post');
if (newPost) {
  newPost.addEventListener('click', moveToHomePage);
}

const itemDisplay = document.querySelectorAll('.list-item');
if (itemDisplay) {
  itemDisplay.forEach(item => item.addEventListener('click', moveToDisplayItemPage));
}

const editPost = document.querySelector('#edit-post');
if (editPost) {
  editPost.addEventListener('click', moveToEditItemPage);
}
  
