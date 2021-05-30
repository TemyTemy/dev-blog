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

const moveToDisplayComments = () => {
  document.location.replace('/post/1/comments');
};

const newPost = document.querySelector('#btn_new_post');
if (newPost) {
  newPost.addEventListener('click', moveToHomePage);
}

const itemDisplay = document.querySelectorAll('.topic-item');
if (itemDisplay) {
  itemDisplay.forEach(item => item.addEventListener('click', moveToDisplayItemPage));
}

const editPost = document.querySelector('#edit-post');
if (editPost) {
  editPost.addEventListener('click', moveToEditItemPage);
}

const commentCountDisplay = document.querySelectorAll('.comment-count');
if (commentCountDisplay) {
  commentCountDisplay.forEach(item => item.addEventListener('click', moveToDisplayComments));
}
const createNewPost = async () => {
  const topic = document.querySelector("#topic").value.trim();
  const content = document.querySelector("#content").value.trim();
  if (!topic || !content) {
    alert('Please enter a topic and a content to create a blog post');
    return;
  };
  const payLoad = {
    "topic": topic,
    "content": content,
    "userId": 1
  };
  const response = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify(payLoad),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('../');
  } else {
    alert('Failed to create a new post');
  }
};

const submitNewPostButton = document.querySelector("#submit-new-post");
if (submitNewPostButton) {
  submitNewPostButton.addEventListener('click', createNewPost);
}
  
