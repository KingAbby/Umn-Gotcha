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

/* Pilihan gambar avatar hewan */
let avatarImages = [
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200",
  "https://via.placeholder.com/200x200"
];
// Ubah variabel waktu supaya menjadi 1 detik irl = 1 menit in-game

/* Inisialisasi waktu */
function initTime() {
  setInterval(updateTime, 1000);
}

/* Update waktu */
function updateTime() {
  time += 1;
  hour = time % 24;

  /* Update jam pada tampilan */
  let timeElement = document.getElementById("time");
  let greetingElement = document.getElementById("greeting");

  if (hour >= 5 && hour < 12) {
    timeElement.textContent = "Good Morning!";
    greetingElement.textContent = "Good Morning!";
    setBackground("bg-morning");
  } else if (hour >= 12 && hour < 18) {
    timeElement.textContent = "Good Afternoon!";
    greetingElement.textContent = "Good Afternoon!";
    setBackground("bg-afternoon");
  } else {
    timeElement.textContent = "Good Night!";
    greetingElement.textContent = "Good Night!";
    setBackground("bg-night");
  }
}

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
    btnMakan.addEventListener("click", () => {
    makan += 30;
    kesehatan += 10;
    kondisiHewan.innerHTML = "Makan: ";
    avatarHewan.src = "img/hewan-makan.gif";
    setTimeout(() => {
    avatarHewan.src = avatarMood();
    }, 15000);
    });
    
    /* aktivitas tidur */
    btnTidur.addEventListener("click", () => {
    tidur += 30;
    makan -= 10;
    kondisiHewan.innerHTML = "Tidur: ";
    avatarHewan.src = "img/hewan-tidur.gif";
    setTimeout(() => {
    avatarHewan.src = avatarMood();
    }, 30000);
    });
    
    /* aktivitas main */
    btnMain.addEventListener("click", () => {
    main += 20;
    makan -= 5;
    kondisiHewan.innerHTML = "Main: ";
    avatarHewan.src = "img/hewan-main.gif";
    setTimeout(() => {
    avatarHewan.src = avatarMood();
    }, 20000);
    });
    
    /* aktivitas minum obat */
    btnObat.addEventListener("click", () => {
    kesehatan += 20;
    kondisiHewan.innerHTML = "Obat: ";
    avatarHewan.src = "img/hewan-sehat.gif";
    setTimeout(() => {
    avatarHewan.src = avatarMood();
    }, 5000);
    });
    
    /* set interval mengurangi kondisi pemain secara berkala */
    const interval = setInterval(() => {
    kurangKondisi();
    }, 10000);
    
    /* set interval update waktu */
    const waktu = setInterval(() => {
    updateWaktu();
    }, 1000);
    
    
    
    