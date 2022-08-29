document.getElementById("spinner").style.display = "none";
const loadPlayer = (search) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayer(data.player));
};

const displayPlayer = (players) => {
  document.getElementById("spinner").style.display = "none";

  const cardPlayer = document.getElementById("card-player");
  cardPlayer.innerHTML = "";
  players.forEach((player) => {
    // console.log(player);
    const { strThumb, idPlayer } = player;
    const childDiv = document.createElement("div");
    childDiv.classList.add("col");
    childDiv.innerHTML = `
        <div class="card h-100">
            <img class="h-100" src="${
              strThumb
                ? strThumb
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&usqp=CAU"
            }" class="card-img-top" alt="" />
            <div class="card-body">
                <button onclick="playerDetails('${idPlayer}')" class="btn btn-primary">Player Details</button>
            </div>
        </div>
        `;
    cardPlayer.appendChild(childDiv);
  });
};

const playerDetails = (idPlayer) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayerDetails(data.players[0]));
};

const displayPlayerDetails = (player) => {
  window.scrollTo(0, 50);
  const { strPlayer, strTeam, strThumb, strGender, strNationality } = player;
  const playerDetail = document.getElementById("player-detail");
  playerDetail.innerHTML = `
    <div class="card">
    <img class="h-100" src="${
      strThumb
        ? strThumb
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&usqp=CAU"
    }" class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">Name: ${strPlayer}</h5>
        <p class="card-text">Gender: ${strGender}</p>
        <p class="card-text">Team: ${strTeam}</p>
        <p class="card-text">Nationality: ${strNationality}</p>
        </div>
    </div>
    `;
};

const searchPlayer = () => {
  const searchInput = document.getElementById("input-field");
  const searchResult = searchInput.value;
  searchInput.value = "";
  if (searchResult === "") {
    document.getElementById("spinner").style.display = "none";
  } else {
    loadPlayer(searchResult);
    document.getElementById("spinner").style.display = "block";
  }
};

// loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

loadPlayer("");
