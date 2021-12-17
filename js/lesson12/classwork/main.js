// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//

const wrapperPosts = document.createElement('div');
wrapperPosts.classList.add('container-fluid', 'g-0');
document.body.appendChild(wrapperPosts);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            const divPost = document.createElement('div');
            divPost.classList.add('post', 'm-1', 'rounded', 'p-2');
            wrapperPosts.appendChild(divPost);

            const divId = document.createElement('div');
            divId.classList.add('badge', 'bg-primary');
            divId.innerText = `post id: ${post.id}`;

            const divTitle = document.createElement('div');
            divTitle.classList.add('h6');
            divTitle.innerText = post.title;

            const divBody = document.createElement('div');
            divBody.classList.add('bg-light', 'p-1', 'rounded');
            divBody.innerText = post.body;
            divBody.style.fontSize = '12px';

            const wrapperComments = document.createElement('div');
            wrapperComments.classList.add('comments', 'collapse', 'hide');
            wrapperComments.setAttribute('id', `comments-${post.id}`);

            const btnComments = document.createElement('button');
            btnComments.classList.add('btn', 'btn-secondary', 'mt-2');
            btnComments.innerText = 'Comments';
            btnComments.setAttribute('type', 'button');
            btnComments.setAttribute('data-bs-toggle', 'collapse');
            btnComments.setAttribute('data-bs-target', `#comments-${post.id}`);
            btnComments.setAttribute('aria-expanded', 'false');
            btnComments.setAttribute('aria-controls', `comments-${post.id}`);

            divPost.append(divId, divTitle, divBody, btnComments, wrapperComments);

            btnComments.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        while (wrapperComments.firstChild) {
                            wrapperComments.removeChild(wrapperComments.firstChild);
                        }

                        for (const comment of comments) {
                            const divComment = document.createElement('div');
                            divComment.classList.add('comment', 'm-1', 'rounded', 'p-2');
                            wrapperComments.appendChild(divComment);

                            const divCommentId = document.createElement('div');
                            divCommentId.classList.add('badge', 'bg-success');
                            divCommentId.innerText = `comment id: ${comment.id}`;

                            const divPostId = document.createElement('div');
                            divPostId.classList.add('badge', 'bg-secondary', 'ms-1');
                            divPostId.innerText = `post id: ${comment.postId}`;

                            const divName = document.createElement('div');
                            divName.classList.add('h6');
                            divName.innerText = comment.name;
                            divName.style.fontSize = '14px';

                            const divEmail = document.createElement('div');
                            divEmail.classList.add('badge', 'bg-warning', 'text-dark');
                            divEmail.innerText = comment.email;
                            divEmail.style.fontSize = '10px';

                            const divBody = document.createElement('div');
                            divBody.classList.add('bg-light', 'p-1', 'rounded');
                            divBody.innerText = comment.body;
                            divBody.style.fontSize = '12px';

                            divComment.append(divCommentId, divPostId, divName, divEmail, divBody);
                        }
                    });
            }

        }
    });
