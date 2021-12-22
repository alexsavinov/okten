const wrapper = document.createElement('div');
wrapper.classList.add('m-0');
document.body.appendChild(wrapper);

// navigation
nav = document.createElement('nav');
nav.classList.add('nav', 'bg-light', 'border-bottom');
wrapper.appendChild(nav);

navHome = document.createElement('a');
navHome.classList.add('nav-link');
navHome.setAttribute('href', 'index.html');
navHome.innerText = 'Home';
nav.appendChild(navHome);

const divPost = document.createElement('div');
divPost.classList.add('post', 'border', 'border-secondary', 'rounded', 'm-2', 'p-2');

const wrapComments = document.createElement('div');
wrapComments.classList.add('comments', 'row', 'm-1', 'g-0');
wrapper.append(divPost, wrapComments);

postId = localStorage.getItem('postId') || 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const divPostId = document.createElement('div');
        divPostId.classList.add('post-id', 'badge', 'bg-warning', 'text-dark');
        divPostId.innerText = `id: ${postId}`;

        const divTitle = document.createElement('div');
        divTitle.classList.add('post-title', 'h4', 'align-top', 'mt-2', 'mb-2');
        divTitle.innerText = post.title;

        const divBody = document.createElement('div');
        divBody.classList.add('post-body', 'mt-2', 'mb-2');
        divBody.innerText = post.body;

        divPost.append(divPostId, divTitle, divBody);
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
            for (const comment of comments) {
                const wrapComment = document.createElement('div');
                wrapComment.classList.add('wrap-comment', 'col-3', 'g-0', 'mt-1', 'mb-1');
                wrapComments.appendChild(wrapComment);

                const divComment = document.createElement('div');
                divComment.classList.add('comment', 'bg-light', 'm-1', 'h-100', 'rounded', 'border', 'border-success', 'p-2',);
                wrapComment.appendChild(divComment);

                const divCommentId = document.createElement('div');
                divCommentId.classList.add('comment-id', 'badge', 'bg-success');
                divCommentId.innerText = `id: ${comment.id}`;

                const divName = document.createElement('div');
                divName.classList.add('comment-name', 'bg-light', 'h6', 'mt-2');
                divName.innerText = comment.name;

                const divEmail = document.createElement('div');
                divEmail.classList.add('comment-email', 'badge', 'bg-secondary', 'text-light');
                divEmail.innerText = comment.email;

                const divBody = document.createElement('div');
                divBody.classList.add('comment-body', 'bg-white', 'rounded', 'border', 'mt-2', 'p-2');
                divBody.innerText = comment.body;

                divComment.append(divCommentId, divName, divEmail, divBody);
            }
        }
    )
;










