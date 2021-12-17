// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести
// в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку
// в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку
// в окремий блок виводяться всі коментарі поточного поста
//

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },

const wrapUsers = document.createElement('div');
// wrapUsers.classList.add('container-fluid', 'g-0');
wrapUsers.classList.add('container-fluid', 'g-0');
document.body.appendChild(wrapUsers);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            const divUser = document.createElement('div');
            divUser.classList.add('user', 'card', 'm-2');
            wrapUsers.appendChild(divUser);

            // UserHeader
            const divUserHeader = document.createElement('div');
            divUserHeader.classList.add('card-header', 'p-1');

            const divId = document.createElement('div');
            divId.classList.add('badge', 'bg-warning', 'text-dark');
            divId.innerText = `id: ${user.id}`;

            const divName = document.createElement('div');
            divName.classList.add('badge', 'bg-light', 'text-dark');
            divName.innerText = user.name;

            divUserHeader.append(divId, divName);

            // UserBody
            const divUserBody = document.createElement('div');
            divUserBody.style.fontSize = '12px';
            divUserBody.classList.add('card-body', 'p-1');

            const divUsername = document.createElement('div');
            divUsername.innerText = `username: ${user.username}`;

            const divEmail = document.createElement('div');
            divEmail.innerText = `email: ${user.email}`;

            // Address
            const wrapAddress = document.createElement('div');
            wrapAddress.classList.add('address', 'border', 'p-1', 'm-1');

            const divAddressHeader = document.createElement('div');
            divAddressHeader.classList.add('badge', 'bg-light', 'text-dark');
            divAddressHeader.innerText = 'Address';

            const divAddressStreet = document.createElement('div');
            divAddressStreet.innerText = `street: ${user.address.street}`;

            const divAddressSuite = document.createElement('div');
            divAddressSuite.innerText = `suite: ${user.address.suite}`;

            const divAddressCity = document.createElement('div');
            divAddressCity.innerText = `city: ${user.address.city}`;

            const divAddressZipcode = document.createElement('div');
            divAddressZipcode.innerText = `zipcode: ${user.address.zipcode}`;

            const divAddressLat = document.createElement('div');
            divAddressLat.innerText = `geo: ${user.address.geo.lat} ${user.address.geo.lng}`;

            wrapAddress.append(divAddressHeader, divAddressStreet, divAddressSuite, divAddressCity, divAddressZipcode, divAddressLat);

            // UserBody
            const divPhone = document.createElement('div');
            divPhone.innerText = `phone: ${user.phone}`;

            const divWebsite = document.createElement('div');
            divWebsite.innerText = `website: ${user.website}`;

            // Company
            const wrapCompany = document.createElement('div');
            wrapCompany.classList.add('company', 'border', 'p-1', 'm-1');

            const divCompanyHeader = document.createElement('div');
            divCompanyHeader.classList.add('badge', 'bg-light', 'text-dark');
            divCompanyHeader.innerText = 'Company';

            const divCompanyName = document.createElement('div');
            divCompanyName.innerText = `name: ${user.company.name}`;

            const divCompanyCatchPhrase = document.createElement('div');
            divCompanyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;

            const divCompanyBs = document.createElement('div');
            divCompanyBs.innerText = `bs: ${user.company.bs}`;

            wrapCompany.append(divCompanyHeader, divCompanyName,
                divCompanyCatchPhrase, divCompanyBs);

            divUserBody.append(divUsername, divEmail, wrapAddress,
                divPhone, divWebsite, wrapCompany);

            // Posts
            const wrapPosts = document.createElement('div');
            wrapPosts.classList.add('posts', 'collapse', 'hide');
            wrapPosts.setAttribute('id', `users-${user.id}`);

            const divBtnPosts = document.createElement('div');
            divBtnPosts.classList.add('d-flex');

            const btnPosts = document.createElement('button');
            btnPosts.classList.add('btn', 'btn-primary', 'btn-sm', 'border', 'm-2');
            btnPosts.innerText = 'Posts';
            btnPosts.setAttribute('type', 'button');
            btnPosts.setAttribute('data-bs-toggle', 'collapse');
            btnPosts.setAttribute('data-bs-target', `#posts-${user.id}`);
            btnPosts.setAttribute('aria-expanded', 'false');
            btnPosts.setAttribute('aria-controls', `posts-${user.id}`);

            divBtnPosts.appendChild(btnPosts);

            divUser.append(divUserHeader, divUserBody, divBtnPosts, wrapPosts);

            // ** POSTS
            btnPosts.onclick = () => {
                console.log(wrapPosts.classList);


                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        while (wrapPosts.firstChild) {
                            wrapPosts.removeChild(wrapPosts.firstChild);
                        }

                        for (const post of posts) {
                            const divPost = document.createElement('div');
                            divPost.classList.add('post', 'm-1', 'rounded', 'p-2');
                            wrapPosts.appendChild(divPost);

                            const divPostId = document.createElement('div');
                            divPostId.classList.add('badge', 'bg-primary');
                            divPostId.innerText = `post id: ${post.id}`;

                            divPost.append(divPostId);
                            // , divTitle, divBody, btnComments, wrapComments);
                            // wrapPosts.appendChild(divPost);
                        }


                    })
            };


//             btnComments.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(response => response.json())
//                     .then(comments => {
//                         while (wrapComments.firstChild) {
//                             wrapComments.removeChild(wrapComments.firstChild);
//                         }
//
//                         for (const comment of comments) {

        }
    });
//
//
// const wrapPosts = document.createElement('div');
// wrapPosts.classList.add('container-fluid', 'g-0');
// document.body.appendChild(wrapPosts);
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             const divPost = document.createElement('div');
//             divPost.classList.add('post', 'm-1', 'rounded', 'p-2');
//             wrapPosts.appendChild(divPost);
//
//             const divId = document.createElement('div');
//             divId.classList.add('badge', 'bg-primary');
//             divId.innerText = `post id: ${post.id}`;
//
//             const divTitle = document.createElement('div');
//             divTitle.classList.add('h6');
//             divTitle.innerText = post.title;
//
//             const divBody = document.createElement('div');
//             divBody.classList.add('bg-light', 'p-1', 'rounded');
//             divBody.innerText = post.body;
//             divBody.style.fontSize = '12px';
//
//             const wrapComments = document.createElement('div');
//             wrapComments.classList.add('comments', 'collapse', 'hide');
//             wrapComments.setAttribute('id', `comments-${post.id}`);
//
//             const btnComments = document.createElement('button');
//             btnComments.classList.add('btn', 'btn-secondary', 'mt-2');
//             btnComments.innerText = 'Comments';
//             btnComments.setAttribute('type', 'button');
//             btnComments.setAttribute('data-bs-toggle', 'collapse');
//             btnComments.setAttribute('data-bs-target', `#comments-${post.id}`);
//             btnComments.setAttribute('aria-expanded', 'false');
//             btnComments.setAttribute('aria-controls', `comments-${post.id}`);
//
//             divPost.append(divId, divTitle, divBody, btnComments, wrapComments);
//
//             btnComments.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(response => response.json())
//                     .then(comments => {
//                         while (wrapComments.firstChild) {
//                             wrapComments.removeChild(wrapComments.firstChild);
//                         }
//
//                         for (const comment of comments) {
//                             const divComment = document.createElement('div');
//                             divComment.classList.add('comment', 'm-1', 'rounded', 'p-2');
//                             wrapComments.appendChild(divComment);
//
//                             const divCommentId = document.createElement('div');
//                             divCommentId.classList.add('badge', 'bg-success');
//                             divCommentId.innerText = `comment id: ${comment.id}`;
//
//                             const divPostId = document.createElement('div');
//                             divPostId.classList.add('badge', 'bg-secondary', 'ms-1');
//                             divPostId.innerText = `post id: ${comment.postId}`;
//
//                             const divName = document.createElement('div');
//                             divName.classList.add('h6');
//                             divName.innerText = comment.name;
//                             divName.style.fontSize = '14px';
//
//                             const divEmail = document.createElement('div');
//                             divEmail.classList.add('badge', 'bg-warning', 'text-dark');
//                             divEmail.innerText = comment.email;
//                             divEmail.style.fontSize = '10px';
//
//                             const divBody = document.createElement('div');
//                             divBody.classList.add('bg-light', 'p-1', 'rounded');
//                             divBody.innerText = comment.body;
//                             divBody.style.fontSize = '12px';
//
//                             divComment.append(divCommentId, divPostId, divName, divEmail, divBody);
//                         }
//                     });
//             }
//
//         }
//     });
