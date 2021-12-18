// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
const wrapperPosts = document.createElement('div');
wrapperPosts.classList.add('container-fluid', 'row', 'justify-content-center', 'g-0');
document.body.appendChild(wrapperPosts);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            const divPost = document.createElement('div');
            divPost.classList.add('post', 'col-2', 'm-1', 'rounded', 'p-2');
            wrapperPosts.appendChild(divPost);

            const divId = document.createElement('div');
            divId.classList.add('badge', 'bg-primary');
            divId.innerText = `id: ${post.id}`;

            const divTitle = document.createElement('div');
            divTitle.classList.add('h6');
            divTitle.innerText = post.title;

            const divBody = document.createElement('div');
            divBody.classList.add('bg-light', 'p-1', 'rounded');
            divBody.innerText = post.body;
            divBody.style.fontSize = '12px';

            divPost.append(divId, divTitle, divBody);
        }
    });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
const wrapperComments = document.createElement('div');
wrapperComments.classList.add('container-fluid', 'g-0');
document.body.appendChild(wrapperComments);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const divComments = document.createElement('div');
            divComments.classList.add('comment', 'm-1', 'rounded', 'p-2');
            wrapperComments.appendChild(divComments);

            const divId = document.createElement('div');
            divId.classList.add('badge', 'bg-success');
            divId.innerText = `comment id: ${comment.id}`;

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

            divComments.append(divId, divPostId, divName, divEmail, divBody);
        }
    });