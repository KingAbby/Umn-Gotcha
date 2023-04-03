/* Tampilan Register */

window.onload = function () {
  showSlides(1);
};
let slideIndex = 1;

let petImages = ["Asset/ayam.png", "Asset/koala.png", "Asset/kudanil.png"];

function chosenPet() {
  localStorage.setItem("petName", document.getElementById("input-pet").value);
  localStorage.setItem("chosenPet", petImages[slideIndex - 1]);
  petName = document.getElementById("input-pet").value;
  window.location.href = "./umngotcha.html";
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (!window.location.pathname.includes("register.html")) {
    return;
  }
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Tampilan Umngotcha */

/* Inisialisasi variabel */
let petName = "";
let petImage = "";
let petHealth = 100;
let petHunger = 100;
let petSleepiness = 100;
let petHappiness = 100;
let petLevel = 1;
let petExp = 0;
let time = 0;
let hour = 0;
let activityTime = 15000; // 15 detik
let progress = 50;
let progress1 = 50;
let progress2 = 50;
let progress3 = 50;
let petImagePlay;
let petNamePlay;
let activeTab;

/* Pilihan gambar avatar hewan */
let avatarImages = [
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
];
// Ubah variabel waktu supaya menjadi 1 detik irl = 1 menit in-game

/* Inisialisasi waktu */
function initTime() {
  setInterval(updateTime, 1000);
}

function pencetTabMakan() {
  let barMakan = document.getElementById("status-makan");
  let petImagePlay = localStorage.getItem("chosenPet");
  let avatar = document.querySelector("#avatar");
  let avatarID = document.getElementById("avatar");
  activeTab = "makan";
  document.getElementById("game-container").style.display = "none";
  avatar.src = petImagePlay.replace(".png", "-makan.png");
  avatarID.style.width = "200px";
  if (progress >= 100) {
    return;
  }
  progress += 10; // Setiap klik tambah 10% progress
  barMakan.style.width = progress + "%";
}
function pencetTabTidur() {
  let petImagePlay = localStorage.getItem("chosenPet");
  let avatar = document.querySelector("#avatar");
  let avatarID = document.getElementById("avatar");
  if (activeTab === "tidur") {
    avatar.src = petImagePlay;
    avatarID.style.width = "400px";
    activeTab = "";
    return;
  }
  activeTab = "tidur";
  document.getElementById("game-container").style.display = "none";
  avatar.src = petImagePlay.replace(".png", "-tidur.png");
  avatarID.style.width = "200px";
}
function pencetTabMain() {
  let petImagePlay = localStorage.getItem("chosenPet");
  let avatar = document.querySelector("#avatar");
  let avatarID = document.getElementById("avatar");
  if (activeTab === "main") {
    document.getElementById("game-container").style.display = "none";
    activeTab = "";
    return;
  }
  let foodA = document.getElementById("food-a");
  let foodB = document.getElementById("food-b");
  let foodC = document.getElementById("food-c");
  let foodD = document.getElementById("food-d");
  foodA.style.display = "block";
  foodB.style.display = "block";
  foodC.style.display = "block";
  foodD.style.display = "block";
  activeTab = "main";
  document.getElementById("game-container").style.display = "block";
  let imagePet = document.querySelector("#petCharacter");
  imagePet.src = petImagePlay;
  avatar.src = petImagePlay;
  avatarID.style.width = "400px";
}

function pencetTabObat() {
  let barKesehatan = document.getElementById("status-kesehatan");
  let petImagePlay = localStorage.getItem("chosenPet");
  let avatar = document.querySelector("#avatar");
  let avatarID = document.getElementById("avatar");
  activeTab = "kesehatan";
  document.getElementById("game-container").style.display = "none";
  avatar.src = petImagePlay.replace(".png", "-obat.png");
  avatarID.style.width = "200px";
  if (progress3 >= 100) {
    return;
  }
  progress3 += 10; // Setiap klik tambah 10% progress
  barKesehatan.style.width = progress3 + "%";
}

if (window.location.pathname.includes("umngotcha.html")) {
  window.onload = function () {
    let avatar = document.querySelector("#avatar");
    let avatarID = document.getElementById("avatar");
    let barMakan = document.getElementById("status-makan");
    let barTidur = document.getElementById("status-tidur");
    let barMain = document.getElementById("status-main");
    let barKesehatan = document.getElementById("status-kesehatan");
    let petImagePlay = localStorage.getItem("chosenPet");
    let petNamePlay = localStorage.getItem("petName");
    avatar.src = petImagePlay;
    let greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Good Night, ${petNamePlay} !`;
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      window.location.href = "./register.html";
      modal.style.display = "none";
    };

    //progress makan
    let interval = setInterval(makan, 10000); // 10000 Milisekon
    barMakan.style.width = progress + "%"; // update status
    function makan() {
      //Progress = 25 + 25 = 50 > 100, Set var progress = 100 agar tidak lebih dari 100
      if (progress >= 100) {
        // Gak ngelebihin seratus
        if (activeTab !== "makan") {
          progress -= 10; // set progress
          barMakan.style.width = progress + "%"; // update status
          return;
        } else {
          progress = 100; // set progress
          barMakan.style.width = progress + "%"; // update status
        }
      } else {
        if (progress <= 0) {
          progress = 0;
        }
        if (activeTab !== "makan") {
          progress -= 10; // set progress
          barMakan.style.width = progress + "%"; // update status
          return;
        } else {
          progress += 10; // Setiap klik tambah 10% progress
          barMakan.style.width = progress + "%";
        }
      }
    }

    //progress tidur
    let interval1 = setInterval(tidur, 10000); // 10000 Milisekon
    barTidur.style.width = progress1 + "%"; // update status
    function tidur() {
      // Progress = 90 + 25 = 115 > 100, Set var progress = 100 agar tidak lebih dari 100
      if (progress1 > 100) {
        // Gak ngelebihin seratus
        if (activeTab !== "tidur") {
          progress1 -= 10; // set progress
          barTidur.style.width = progress1 + "%"; // update status
          return;
        } else {
          progress1 = 100; // set progress
          barTidur.style.width = progress1 + "%"; // update status
        }
      } else {
        if (activeTab !== "tidur" && progress1 > 0) {
          progress1 -= 10; // set progress
          barTidur.style.width = progress1 + "%"; // update status
          return;
        } else {
          if (progress1 <= 0) {
            progress1 = 0;
            return;
          }
          progress1 += 10; // Setiap klik tambah 10% progress
          barTidur.style.width = progress1 + "%";
        }
      }
    }
    //progress main

    let interval2 = setInterval(main, 10000); // 10000 Milisekon
    barMain.style.width = progress2 + "%"; // update status
    function main() {
      // Progress = 90 + 25 = 115 > 100, Set var progress = 100 agar tidak lebih dari 100
      if (progress2 >= 100) {
        // Gak ngelebihin seratus
        if (activeTab !== "main") {
          progress2 -= 10; // set progress
          barMain.style.width = progress2 + "%"; // update status
          return;
        } else {
          progress2 = 100; // set progress
          barMain.style.width = progress2 + "%"; // update status
        }
      } else {
        if (activeTab !== "main" && progress2 > 0) {
          progress2 -= 10; // set progress
          barMain.style.width = progress2 + "%"; // update status
          return;
        } else {
          if (progress2 <= 0) {
            progress2 = 0;
            return;
          }
          progress2 += 10; // Setiap klik tambah 10% progress
          barMain.style.width = progress2 + "%";
        }
      }
    }
    //progress kesehatan

    let interval3 = setInterval(kesehatan, 10000); // 10000 Milisekon
    barKesehatan.style.width = progress3 + "%";
    function kesehatan() {
      // Progress = 90 + 25 = 115 > 100, Set var progress = 100 agar tidak lebih dari 100
      if (progress3 >= 100) {
        // Gak ngelebihin seratus
        if (activeTab !== "kesehatan") {
          progress3 -= 10; // set progress
          barKesehatan.style.width = progress3 + "%";
          return;
        } else {
          progress3 = 100; // set progress
          barKesehatan.style.width = progress3 + "%";
        }
      } else {
        if (progress3 <= 0) {
          progress3 = 0;
          return;
        }
        if (activeTab !== "kesehatan") {
          progress3 -= 10; // set progress
          barKesehatan.style.width = progress3 + "%";
        } else {
          progress3 += 10; // Setiap klik tambah 10% progress
          barKesehatan.style.width = progress3 + "%";
        }
      }
    }
    let bottom = 80;
    let right = 500;
    let character = document.getElementById("character-wrapper");
    const positionA = [100, 300];
    const positionB = [200, 200];
    const positionC = [250, 120];

    function gotcha() {
      if (bottom === 40 && right === 140) {
        let foodA = document.getElementById("food-a");
        foodA.style.display = "none";
        main();
      } else if (bottom === 20 && right === 680) {
        main();
        let foodB = document.getElementById("food-b");
        foodB.style.display = "none";
      } else if (bottom === 80 && right === 480) {
        main();
        let foodC = document.getElementById("food-c");
        foodC.style.display = "none";
      } else if (bottom === 80 && right === 540) {
        main();
        let foodD = document.getElementById("food-d");
        foodD.style.display = "none";
      }
    }

    document.addEventListener("keyup", function (e) {
      const element = document.getElementById("game-container");
      const positionInfo = element.getBoundingClientRect();
      const width = positionInfo.width;
      gotcha();
      switch (e.keyCode) {
        //up
        case 38:
          if (bottom >= 120) {
            return;
          }
          character.style.bottom = String(bottom + 20) + "px";
          bottom = bottom + 20;
          break;
        //down
        case 40:
          if (bottom <= 0) {
            return;
          }
          character.style.bottom = String(bottom - 20) + "px";
          bottom = bottom - 20;
          break;
        //right
        case 39:
          if (right <= 0) {
            return;
          }
          character.style.right = String(right - 20) + "px";
          right = right - 20;
          break;
        //left
        case 37:
          if (right >= width - 100) {
            return;
          }
          character.style.right = String(right + 20) + "px";
          right = right + 20;
          break;
      }
    });

    function handleMovement(type) {
      gotcha();
      switch (type) {
        //up
        case "up":
          if (bottom >= 300) {
            return;
          }
          character.style.bottom = String(bottom + 20) + "px";
          bottom = bottom + 20;
          break;
        //down
        case "down":
          if (bottom <= 0) {
            return;
          }
          character.style.bottom = String(bottom - 20) + "px";
          bottom = bottom - 20;
          break;
        //right
        case "right":
          if (right <= 0) {
            return;
          }
          character.style.right = String(right - 20) + "px";
          right = right - 20;
          break;
        //left
        case "left":
          if (right >= 760) {
            return;
          }
          character.style.right = String(right + 20) + "px";
          right = right + 20;
          break;
      }
    }

    let minutes = 00;
    let hours = 00;

    function updateTime() {
      if (window.location.pathname.includes("umngotcha.html")) {
        if (
          progress === 0 &&
          progress1 === 0 &&
          progress2 === 0 &&
          progress3 === 0
        ) {
          let modal = document.getElementById("myModal");
          modal.style.display = "block";
        }

        minutes += 1;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
        if (hours >= 24) {
          hours = 0;
        }

        // Tampilkan waktu pada div dengan id "clock"

        let h = hours < 10 ? `0` + hours : hours;
        let m = minutes < 10 ? `0` + minutes : minutes;

        /* Update jam pada tampilan */
        // let timeElement = document.getElementById("time");
        document.getElementById("clock").textContent = ` ${h} : ${m}`;
        if (hours === 10) {
          document.getElementById("level").innerHTML = 2;
        }
        if (hours === 20) {
          document.getElementById("level").innerHTML = 3;
        }
        let bodyHTML = document.getElementById("container");
        if (hours >= 5 && hours < 12) {
          // timeElement.textContent = "Good Morning!";
          bodyHTML.style.backgroundImage = "url('Asset/Morning.jpg')";
          greetingElement.textContent = `Good Morning, ${petNamePlay} !`;
          // setBackground("bg-morning");
        } else if (hours >= 12 && hours < 18) {
          // timeElement.textContent = "Good Afternoon!";
          greetingElement.textContent = `Good Afternoon, ${petNamePlay} !`;
          bodyHTML.style.backgroundImage = "url('Asset/Evening.jpg')";
          // setBackground("bg-afternoon");
        } else {
          // timeElement.textContent = "Good Night!";
          greetingElement.textContent = `Good Night, ${petNamePlay} !`;
          bodyHTML.style.backgroundImage = "url('Asset/Night.jpg')";
          // setBackground("bg-night");
        }
      }
    }

    // Jalankan fungsi updateTime setiap 1 detik
    setInterval(updateTime, 1000);
  };
}

/* Update waktu */

/* Update tampilan */
function updateDisplay() {
  /* Update avatar */
  let petImageElement = document.getElementById("pet-image");
  petImageElement.style.backgroundImage = `url(${petImage})`;

  /* Update status bar */
  let healthBar = document.getElementById("health-bar");
  healthBar.style.width = `${petHealth}%`;

  let hungerBar = document.getElementById("hunger-bar");
  hungerBar.style.width = `${petHunger}%`;

  let sleepinessBar = document.getElementById("sleepiness-bar");
  sleepinessBar.style.width = `${petSleepiness}%`;

  let happinessBar = document.getElementById("happiness-bar");
  happinessBar.style.width = `${petHappiness}%`;

  let levelElement = document.getElementById("level");
  levelElement.textContent = `Level ${petLevel} (${petExp} XP)`;
}

/* Inisialisasi tampilan */
function initDisplay() {
  /* Set nama hewan piaraan */
  let petNameElement = document.getElementById("pet-name");
  petNameElement.textContent = petName;

  /* Set gambar avatar */
  petImage = avatarImages[Math.floor(Math.random() * avatarImages.length)];
  let petImageElement = document.getElementById("pet-image");
  petImageElement.style.backgroundImage = `url(${petImage})`;

  /* Update tampilan */
  updateDisplay();

  /* Inisialisasi waktu */
  initTime();
}

/* Update kondisi hewan piaraan */
function updatePetCondition() {
  /* Kurangi kondisi setiap kali update */
  petHunger -= 10;
  petSleepiness -= 5;
  petHappiness -= 10;

  /* Update kondisi kesehatan */
  let health = (petHunger + petSleepiness + petHappiness) / 3;
  petHealth = health;
}

/* cek kondisi kesehatan */
function cekKesehatan() {
  if (kesehatan <= 0) {
    clearInterval(interval);
    clearInterval(waktu);
    alert("Game over, " + namaHewan + "meninggal karena sakit");
    btnAktivitas.forEach((btn) => (btn.disabled = true));
  } else if (kesehatan < 30) {
    kondisiHewan.innerHTML = "Kesehatan: ";
    progressKesehatan.classList.add("bg-danger");
  } else if (kesehatan < 60) {
    kondisiHewan.innerHTML = "Kesehatan: ";
    progressKesehatan.classList.add("bg-warning");
  } else {
    kondisiHewan.innerHTML = "Kesehatan: ";
    progressKesehatan.classList.add("bg-success");
  }
}

/* update kondisi pemain */
function updateKondisi() {
  makananBar.style.width = makanan + "%";
  tidurBar.style.width = tidur + "%";
  mainBar.style.width = main + "%";
  kesehatanBar.style.width = kesehatan + "%";

  cekKondisiLevel();
  cekKesehatan();
}

/* mengurangi kondisi pemain secara berkala */
function kurangKondisi() {
  makanan -= 5;
  tidur -= 10;
  main -= 7;
  kesehatan -= 2;

  updateKondisi();
}

/* aktivitas makan */
// btnMakan.addEventListener("click", () => {
//   makan += 30;
//   kesehatan += 10;
//   kondisiHewan.innerHTML = "Makan: ";
//   avatarHewan.src = "img/hewan-makan.gif";
//   setTimeout(() => {
//     avatarHewan.src = avatarMood();
//   }, 15000);
// });

/* aktivitas tidur */
// btnTidur.addEventListener("click", () => {
//   tidur += 30;
//   makan -= 10;
//   kondisiHewan.innerHTML = "Tidur: ";
//   avatarHewan.src = "img/hewan-tidur.gif";
//   setTimeout(() => {
//     avatarHewan.src = avatarMood();
//   }, 30000);
// });

/* aktivitas main */
// btnMain.addEventListener("click", () => {
//   main += 20;
//   makan -= 5;
//   kondisiHewan.innerHTML = "Main: ";
//   avatarHewan.src = "img/hewan-main.gif";
//   setTimeout(() => {
//     avatarHewan.src = avatarMood();
//   }, 20000);
// });

/* aktivitas minum obat */
// btnObat.addEventListener("click", () => {
//   kesehatan += 20;
//   kondisiHewan.innerHTML = "Obat: ";
//   avatarHewan.src = "img/hewan-sehat.gif";
//   setTimeout(() => {
//     avatarHewan.src = avatarMood();
//   }, 5000);
// });

/* set interval mengurangi kondisi pemain secara berkala */
// const intervalKondisi = setInterval(() => {
//   kurangKondisi();
// }, 10000);

// /* set interval update waktu */
// const waktu = setInterval(() => {
//   updateWaktu();
// }, 1000);
