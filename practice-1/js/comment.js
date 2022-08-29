const loadComment = () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComment(data));
};
const displayComment = (comments) => {
  //   console.log(comments);
  comments.slice(0, 20).forEach((comment, index) => {
    // console.log(comment);
    const commentContainer = document.getElementById("comment-container");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("col");
    commentDiv.innerHTML = `
    <div class="card">
      <div class="card-body">
        <p>${index + 1}</p>
        <h5 class="card-title">Name: ${comment.name}</h5>
        <p>Email: ${comment.email}</p>
        <a href="#" class="btn btn-primary" onclick="postDetails(${
          comment.postId
        })">Post Detail</a>
      </div>
    </div>
    `;
    commentContainer.appendChild(commentDiv);
  });
};

const postDetails = (postId) => {
  //   console.log(postId);
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPostDetails(data));
};

const displayPostDetails = (post) => {
  //   console.log(post);
  const postDetail = document.getElementById("post-details");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
};

loadComment();
