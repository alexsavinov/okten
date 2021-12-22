const wrapper = document.createElement('div');
wrapper.classList.add('m-0');
document.body.appendChild(wrapper);

// navigation
nav = document.createElement('nav');
nav.classList.add('nav', 'bg-light', 'border-bottom');

navHome = document.createElement('a');
navHome.classList.add('nav-link');
navHome.href = 'index.html';
navHome.innerText = 'Home';

nav.appendChild(navHome);
wrapper.appendChild(nav);

const wrapUsers = document.createElement('div');
wrapUsers.classList.add('row', 'g-0', 'justify-content-evenly');
wrapper.appendChild(wrapUsers);

userId = localStorage.getItem('userId') || 1;

fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(response => response.json())
    .then(user => {
            const divUser = document.createElement('div');
            divUser.classList.add('user', 'card', 'm-2', 'col-11', 'bg-white', 'border-secondary');
            wrapUsers.appendChild(divUser);

            // UserHeader
            const divUserHeader = document.createElement('div');
            divUserHeader.classList.add('card-header', 'p-1');

            const divId = document.createElement('div');
            divId.classList.add('badge', 'bg-secondary', 'm-1');
            divId.innerText = `id: ${user.id}`;

            const divName = document.createElement('div');
            divName.classList.add('badge', 'text-dark');
            divName.innerHTML = user.name;

            divUserHeader.append(divId, divName);

            // UserBody
            const divUserBody = document.createElement('div');
            divUserBody.style.fontSize = '14px';
            divUserBody.classList.add('card-body', 'p-2');

            const divUsername = document.createElement('div');
            divUsername.innerText = `Username: ${user.username}`;

            const divEmail = document.createElement('div');
            divEmail.innerText = `E-mail: ${user.email}`;

            // Address
            const wrapAddress = document.createElement('div');
            wrapAddress.classList.add('address', 'border', 'rounded', 'p-2', 'mt-2', 'mb-2');

            const divAddressHeader = document.createElement('div');
            divAddressHeader.classList.add('badge', 'bg-light', 'text-dark', 'border', 'mb-2');
            divAddressHeader.innerText = 'Address';

            const divAddressStreet = document.createElement('div');
            divAddressStreet.innerText = `Street: ${user.address.street}`;

            const divAddressSuite = document.createElement('div');
            divAddressSuite.innerText = `Suite: ${user.address.suite}`;

            const divAddressCity = document.createElement('div');
            divAddressCity.innerText = `City: ${user.address.city}`;

            const divAddressZipcode = document.createElement('div');
            divAddressZipcode.innerText = `Zip code: ${user.address.zipcode}`;

            const divAddressLat = document.createElement('div');
            divAddressLat.innerText = `Geo: ${user.address.geo.lat} ${user.address.geo.lng}`;

            wrapAddress.append(divAddressHeader, divAddressStreet, divAddressSuite, divAddressCity, divAddressZipcode, divAddressLat);

            // UserBody
            const divPhone = document.createElement('div');
            divPhone.innerText = `Phone: ${user.phone}`;

            const divWebsite = document.createElement('div');
            divWebsite.innerText = `Website: ${user.website}`;

            // Company
            const wrapCompany = document.createElement('div');
            wrapCompany.classList.add('company', 'border', 'rounded', 'p-2', 'm-0', 'mt-2');

            const divCompanyHeader = document.createElement('div');
            divCompanyHeader.classList.add('badge', 'bg-light', 'text-dark', 'border', 'mb-2');
            divCompanyHeader.innerText = 'Company';

            const divCompanyName = document.createElement('div');
            divCompanyName.innerText = `Name: ${user.company.name}`;

            const divCompanyCatchPhrase = document.createElement('div');
            divCompanyCatchPhrase.innerText = `Catch phrase: ${user.company.catchPhrase}`;

            const divCompanyBs = document.createElement('div');
            divCompanyBs.innerText = `Bs: ${user.company.bs}`;

            wrapCompany.append(divCompanyHeader, divCompanyName,
                divCompanyCatchPhrase, divCompanyBs);

            divUserBody.append(divUsername, divEmail, wrapAddress,
                divPhone, divWebsite, wrapCompany);

            // Posts
            const wrapPosts = document.createElement('div');
            wrapPosts.classList.add('posts', 'row', 'col-11', 'justify-content-between', 'g-0');
            wrapPosts.setAttribute('id', `posts-${user.id}`);

            const divBtnPosts = document.createElement('div');
            divBtnPosts.classList.add('d-flex', 'col-11');

            const btnPosts = document.createElement('button');
            btnPosts.classList.add('btn', 'btn-outline-primary', 'col-12', 'm-0', 'mb-2');
            btnPosts.innerText = 'Posts of current user';
            btnPosts.setAttribute('type', 'button');
            btnPosts.setAttribute('data-bs-toggle', 'collapse');
            btnPosts.setAttribute('data-bs-target', `#posts-${user.id}`);
            btnPosts.setAttribute('aria-expanded', 'false');
            btnPosts.setAttribute('aria-controls', `posts-${user.id}`);

            divBtnPosts.appendChild(btnPosts);

            divUser.append(divUserHeader, divUserBody);

            wrapUsers.append(divBtnPosts, wrapPosts);

            btnPosts.onclick = (e) => {
                // don't fetch while collapsing
                if (e.target.classList.contains('collapsed')) {
                    return;
                }

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        while (wrapPosts.firstChild) {
                            wrapPosts.removeChild(wrapPosts.firstChild);
                        }

                        let postCounter = 0;
                        for (const post of posts) {
                            postCounter++;
                            const divPost = document.createElement('div');

                            divPost.classList.add('post', 'border', 'border-secondary', 'd-flex', 'flex-column',
                                'justify-content-between', 'align-items-baseline', 'mt-1', 'rounded', 'p-2', 'col-2');
                            if (postCounter === 1 || postCounter % 5 === 0 || (postCounter - 1) % 5 === 0) {
                                divPost.classList.add('ms-0', 'me-0');
                            } else {
                                divPost.classList.add('ms-1', 'me-1');
                            }
                            wrapPosts.appendChild(divPost);

                            const divPostId = document.createElement('div');
                            divPostId.classList.add('post-id', 'badge', 'bg-warning', 'text-dark');
                            divPostId.innerText = `id: ${post.id}`;

                            const divTitle = document.createElement('div');
                            divTitle.classList.add('post-title', 'h-100', 'align-top', 'mt-2', 'mb-2', 'fst-italic');
                            divTitle.innerText = post.title;

                            // Comments
                            const wrapComments = document.createElement('div');
                            wrapComments.classList.add('comments');
                            wrapComments.setAttribute('id', `comments-${post.id}`);

                            const divBtnComments = document.createElement('div');
                            divBtnComments.classList.add('d-flex', 'col-12');

                            const btnComments = document.createElement('button');
                            btnComments.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'col-12');
                            btnComments.innerText = 'Comments';

                            divBtnComments.appendChild(btnComments);
                            divPost.append(divPostId, divTitle, divBtnComments);

                            btnComments.onclick = () => {
                                localStorage.setItem('postId', post.id);
                                location.href = 'post-details.html';
                            }
                        }
                    })
            };

        }
    )
