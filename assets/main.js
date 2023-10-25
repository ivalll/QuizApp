let currentQuestion = 0;
const maxQuestions = 10;
let answeredQuestions = 0;
let score = 0; // Tambahkan variabel skor
let questions = [
  {
    question: "Shalat sunnah yang dikerjakan sebelum shalat Subuh disebut apa?",
    options: ["Tahajud", "Tarawih", "Rawatib", "Qabliyah Subuh"],
    answer: 3,
  },
  {
    question: "Berapa rakaat shalat sunnah Tahajud?",
    options: ["2", "3", "12", "Tidak Ada Batasan"],
    answer: 3,
  },
  {
    question:
      "Kapan waktu yang disarankan untuk melaksanakan shalat sunnah Dhuha?",
    options: [
      "Ketika Matahari Terbit",
      "Menjelang Sore",
      "Setelah Matahari Tergelincir",
      "Setelah matahari terbit dan naik sedikit",
    ],
    answer: 3,
  },
  {
    question: "Apa tujuan dari melaksanakan shalat sunnah?",
    options: [
      "Untuk mendapatkan pahala tambahan",
      "Pengganti Shalat",
      "Disuruh Orang Tua",
      "Agar Tidak Perlu Shalat Wajib",
    ],
    answer: 0,
  },
  {
    question:
      "Shalat sunnah yang dikerjakan setelah shalat Maghrib disebut apa?",
    options: ["Tarawih", "Ba'diyah", "Qobliyah", "Semua Jawaban Salah"],
    answer: 1,
  },
  {
    question: "Berapa rakaat shalat sunnah Rawatib?",
    options: ["4", "2", "12", "11"],
    answer: 2,
  },
  {
    question:
      "Kapan waktu yang disarankan untuk melaksanakan shalat sunnah Istikharah?",
    options: [
      "Setelah terbit fajar",
      "Setelah matahari terbenam",
      "Setelah matahari tergelincir",
      "Setelah shalat wajib",
    ],
    answer: 3,
  },
  {
    question: "Apa tujuan dari melaksanakan shalat sunnah Istikharah?",
    options: [
      "Untuk mendapatkan pahala tambahan",
      "Untuk meminta petunjuk kepada Allah dalam mengambil keputusan",
      "Agar Tidak Berdosa",
      "Menunaikan Kewajiban",
    ],
    answer: 1,
  },
  {
    question: "Berapa rakaat shalat sunnah Witir?",
    options: ["2", "3", "4", "12"],
    answer: 1,
  },
  {
    question:
      "Kapan waktu yang disarankan untuk melaksanakan shalat sunnah Tahajud?",
    options: [
      "Setelah terbit fajar",
      "Setelah matahari terbenam",
      "Setelah matahari tergelincir",
      "Setelah shalat Isya dan sebelum shalat Subuh",
    ],
    answer: 3,
  },
  {
    question: "Apa tujuan dari melaksanakan shalat sunnah Tahajud?",
    options: [
      "Untuk mendapatkan pahala tambahan",
      "Agar Tidak Dimarah Orang Tua",
      "Pengganti Shalat Isya",
      "Untuk meminta petunjuk kepada Allah dalam mengambil keputusan",
    ],
    answer: 0,
  },
  {
    question: "Berapa rakaat shalat sunnah Qobliyah Dzuhur?",
    options: ["2", "4", "12", "3"],
    answer: 1,
  },
  {
    question:
      "Kapan waktu yang disarankan untuk melaksanakan shalat sunnah Rawatib?",
    options: [
      "Setelah terbit fajar",
      "Setelah matahari terbenam",
      "Sebelum atau setelah shalat wajib",
      "Setelah matahari tergelincir",
    ],
    answer: 2,
  },
  {
    question: "Shalat yang dikerjakan saat terjadi gerhana disebut apa?",
    options: [
      "Shalat Tahajud",
      "Shalat Gerhana",
      "Shalat Sunnah Rawatib",
      "Shalat Sunnah Qabliyah",
    ],
    answer: 1,
  },
  {
    question: "Berapa rakaat shalat gerhana?",
    options: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    question: "PKapan waktu yang disarankan untuk melaksanakan shalat gerhana?",
    options: [
      "Setelah terbit fajar",
      "Saat terjadi gerhana",
      "Setelah matahari tergelincir",
      "Setelah matahari terbit ",
    ],
    answer: 1,
  },
  {
    question: "Shalat yang dikerjakan saat meminta hujan disebut apa?",
    options: [
      "Shalat Tahajud",
      "Shalat Istisqa",
      "Shalat Istihza",
      "Shalat Gerhana",
    ],
    answer: 0,
  },
  {
    question: "Berapa rakaat shalat Istisqa?",
    options: ["1", "2", "23", "12"],
    answer: 1,
  },
  {
    question: "Kapan waktu yang disarankan untuk melaksanakan shalat Istisqa?",
    options: [
      "Setelah terbit fajar",
      "Saat Musim Hujan",
      "Saat Kemarau",
      "Saat Membutuhkan Petunjuk",
    ],
    answer: 3,
  },
  {
    question: "Apa tujuan dari melaksanakan shalat Istisqa?",
    options: [
      "Memohon ampun",
      "Meminta petunjuk",
      "Agar tidak dimarahi Ustadz",
      "Memohon hujan kepada Allah",
    ],
    answer: 3,
  },
  // ... tambahkan pertanyaan lainnya
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const currentQuestionData = questions[currentQuestion];

  questionDiv.innerHTML = currentQuestionData.question;
  optionsDiv.innerHTML = "";

  currentQuestionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline-secondary mt-2";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsDiv.appendChild(button);
  });
}

document.getElementById("prevButton").addEventListener("click", function () {
  prevQuestion();
});

document.getElementById("nextButton").addEventListener("click", function () {
  nextQuestion();
});

function selectOption(selectedIndex) {
  answeredQuestions++;
  const currentQuestionData = questions[currentQuestion];
  if (selectedIndex === currentQuestionData.answer) {
    score++; // Tambahkan skor jika jawaban benar
  }

  if (answeredQuestions >= maxQuestions) {
    alert("Anda telah selesai menjawab 10 pertanyaan. Kuis selesai!");
    document.getElementById("finishButton").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("form").style.display = "block";
    document.getElementById("form1").style.display = "block";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("prevButton").style.display = "none";
  } else {
    nextQuestion();
  }
  // Perbarui tampilan skor
  document.getElementById("score").textContent = "Skor: " + score;
}

function prevQuestion() {
  currentQuestion--;
  if (currentQuestion >= 0) {
    loadQuestion();
  } else {
    currentQuestion = 0;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Kuis selesai!");
    currentQuestion = 0;
    shuffleArray(questions);
    loadQuestion();
  }
}
// Fungsi untuk mengirim data ke skrip Google Apps
function sendDataToGoogleAppsScript() {
  // Mengambil nilai dari inputan nama, kelas, dan skor
  var nama = document.getElementById("nama").value;
  var kelas = document.getElementById("kelas").value;
  var skor = score;

  // Membuat objek data
  var data = {
    Nama: nama,
    Kelas: kelas,
    Skor: skor,
  };

  // Mengirim data ke skrip Google Apps menggunakan metode POST
  fetch(
    "https://script.google.com/macros/s/AKfycbz_2PsYmS2EnEAefpFK2p-HlhQq6ALjym4YoUMMO68AF46oLMmsahCi8gD_YEh0bAAB/exec?action=insert",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Berhasil:", data);
      // Handle respons dari skrip di sini jika diperlukan
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle kesalahan di sini jika diperlukan
    });
}

shuffleArray(questions);
loadQuestion();
