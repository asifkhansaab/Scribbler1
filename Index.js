// Toggle Edit/Save
function toggleEditSave() {
    const postText = document.getElementById('postText');
    const postTitle = document.getElementById('postTitle');
    const editPostButton = document.getElementById('editPostButton');
  
    if (postText.getAttribute('contentEditable') === 'true') {
      postText.setAttribute('contentEditable', 'false');
      postTitle.setAttribute('contentEditable', 'false');
      postText.style.border = 'none';
      postTitle.style.border = 'none';
      editPostButton.innerHTML = 'Edit<i class="fa fa-edit"></i>';
    } else {
      postText.setAttribute('contentEditable', 'true');
      postTitle.setAttribute('contentEditable', 'true');
      postText.style.border = '2px solid pink';
      postTitle.style.border = '2px solid pink';
      editPostButton.innerHTML = 'Save<i class="fa fa-save"></i>';
    }
  }
  
// Open Sign Up Modal
function openSignUpModal() {
  document.getElementById('signupModal').style.display = 'block';
}

// Close Sign Up Modal
function closeSignUpModal() {
  document.getElementById('signupModal').style.display = 'none';
}

// Open Sign In Modal
function openSignInModal() {
  document.getElementById('signInModal').style.display = 'block';
}

  // Like Post
  let numberOfLikes = 0;
  
  function likePost() {
    numberOfLikes++;
    const likeButton = document.getElementById('likePostBtn');
    const likesCount = document.getElementById('likesCount');
  
    if (numberOfLikes === 1) {
      likesCount.innerHTML = '1 person likes this!';
    } else {
      likesCount.innerHTML = `${numberOfLikes} people like this!`;
    }
  
    likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i>Liked';
  }
  
  // Add Comment
  function addComment() {
    const comment = document.getElementById('commentText').value;
    const allCommentsBox = document.getElementById('allCommentsBox');
  
    if (comment === '') {
      alert('Please add a comment!');
      return;
    }
  
    const newNode = document.createElement('div');
    newNode.innerHTML = comment;
    newNode.style.backgroundColor = '#fff';
    newNode.style.margin = '10px';
    newNode.style.padding = '0 20px 20px 10px';
  
    allCommentsBox.style.display = 'block';
    allCommentsBox.insertBefore(newNode, allCommentsBox.firstChild);
  
    // Clear the comment input
    document.getElementById('commentText').value = '';
  }
  