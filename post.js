//third form
let postForm = document.getElementById("post-form");
if (postForm) {
    postForm.addEventListener("submit", post(e));
}

function post(e) {
    e.preventDefault();
    let postTitle = document.getElementById("postTitle").value;
    let userText = document.getElementById("userText").value;


    const post = {
        title: postTitle,
        description: userText
    }
    console.log(post)
}