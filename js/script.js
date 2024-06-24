const usersList = document.getElementById('listaUsuarios');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    users.forEach(user => {
        const randomAge = Math.floor(Math.random() * 13) + 18;
        const userImage = `./assets/img/${user.id}.jpeg`;

        const newUser = {
            ...user,
            age: randomAge,
            img: userImage,
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`
        };

        const userItem = document.createElement('li');
        userItem.innerHTML = `
            <img src="${newUser.img}" alt="Imagen de ${newUser.name}">
            <div class="user-details">
                    <div class="personal-info">
                        <div><span class="info">Name:</span> ${newUser.name}</div>
                        <div><span class="info">Age:</span> ${newUser.age}</div>
                        <div><span class="info">Username:</span> ${newUser.username}</div>
                        <div><span class="info">Phone:</span> ${newUser.phone}</div>
                        <div><span class="info">Email:</span> ${newUser.email}</div>
                    </div>
                    <div class="business-info">
                        <div><span class="info">Company:</span> ${newUser.company.name}</div>
                        <div><span class="info">Address:</span> ${newUser.address}</div>
                    </div>
            </div>
        `;
        usersList.appendChild(userItem);
    });
})
.catch(error => console.error('Error fetching users:', error));