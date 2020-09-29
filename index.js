for (i = 0; i < artists.length; i++) {
  if (artists[i].first === "Chaim") {
    document.querySelector("h1").textContent =
      artists[i].first + " I found you!";
  }
}

function artistsLoop(artistArray) {
  array.forEach((artistArray) => {
    console.log(artistArray.first);
  });
}

function showArtists(myArr) {
  for (i = 0; i < myArr.length; i++) {
    console.log(myArr.first);
  }
}
