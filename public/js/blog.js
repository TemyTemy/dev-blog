const moveToHomePage = () => {
  document.location.replace('/new-post');
};  

const moveToDisplayItemPage = (src) => {  
  const id = src.target.id;
  document.location.replace(`/post/${id}`);
};

const moveToEditItemPage = (src) => {
  const target = src.target;
  const id = target.getAttribute('data-key');
  document.location.replace(`/post/${id}/edit`);
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
  itemDisplay.forEach(item => {    
    item.addEventListener('click', moveToDisplayItemPage);
  });
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
  

const updatePost = async (src) => {
  const topic = document.querySelector("#topic").value.trim();
  const content = document.querySelector("#content").value.trim();
  const target = src.target;
  const id = target.getAttribute('data-key');
  if (!topic || !content) {
    alert('Please enter a topic and a content to update blog post');
    return;
  };
  const payLoad = {
    "topic": topic,
    "content": content
  };
  const response = await fetch(`/api/post/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payLoad),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('../../');
  } else {
    alert('Failed to update existing post');
  }
};

const submitExistingPostButton = document.querySelector("#submit-post");
if (submitExistingPostButton) {
  submitExistingPostButton.addEventListener('click', updatePost);
}

const deletePost = async (src) => {
  const target = src.target;
  const id = target.getAttribute('data-key');
  if (!id) {
    alert('Please specify an id for the post to delete');
    return;
  };

  const url = `/api/post/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('../../');
  } else {
    alert('Failed to delete existing post');
  }
};

const deleteExistingPostButton = document.querySelector("#delete-post");
if (deleteExistingPostButton) {
  deleteExistingPostButton.addEventListener('click', deletePost);
}

const addComment = async (src) => {
  const content = document.querySelector("#content").value.trim();
  const target = src.target;
  const id = target.getAttribute('data-key');
  if (!content) {
    alert('Please enter a content to comment');
    return;
  };
  const payLoad = {
    "content": content
  };
  const response = await fetch(`/api/post/${id}/comment`, {
    method: 'PATCH',
    body: JSON.stringify(payLoad),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('../../');
  } else {
    alert('Failed to update existing post');
  }
};

const postCommentButton = document.querySelector("#submit-comment");
if (postCommentButton) {
  postCommentButton.addEventListener('click', addComment);
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#user_name').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (user_name && password) {
    const payLoad = {
      "user_name": user_name,
      "password": password
    };
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  } else {
    alert('Please provide a user name and password to login');
  }
};

const loginForm = document.querySelector('#login-form');
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}


const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#user_name').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (user_name && password) {
    const payLoad = {
      "user_name": user_name,
      "password": password
    };
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign you up');
    }
  } else {
    alert('Please provide a user name and password to login');
  }
};

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}

