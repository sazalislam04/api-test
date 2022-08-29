const loadRandomUser = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayRandomUser(data.results));
};

const displayRandomUser = (users) => {
  // get the users container
  //   console.log(users);
  users.forEach((user) => {
    const { location, picture, name } = user;
    const { title, first, last } = name;
    // console.log(user);
    const { street, city, state, country } = location;
    const userContainer = document.getElementById("random-user");
    userContainer.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${picture.large}" class="img-fluid h-100 rounded-start" alt=".." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title} ${first} ${last}</h5>
          <p class="card-text">${street.name}, ${street.number}</p>
          <p class="card-text">${city}, ${state}</p>
          <p class="card-text">${country}</p>
        </div>
      </div>
    </div>
  </div>
      `;
  });
};

const loadUser = () => {
  loadRandomUser();
};

loadRandomUser();
