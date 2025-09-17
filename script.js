// Data Pertanyaan DISC (Paling & Paling Tidak)
const quizQuestions = [
    {
        question: "1. Saat dihadapkan pada keputusan penting, saya cenderung:",
        options: [
            { text: "Mengambil keputusan cepat dan tegas", type: "D" },
            { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" },
            { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" },
            { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }
        ]
    },
    {
        question: "2. Dalam menghadapi konflik, saya biasanya:",
        options: [
            { text: "Menghadapinya secara langsung dan cepat", type: "D" },
            { text: "Berusaha mencairkan suasana dengan humor", type: "I" },
            { text: "Menenangkan semua orang agar tidak terjadi ketegangan", type: "S" },
            { text: "Mengumpulkan fakta sebelum menyimpulkan", type: "C" }
        ]
    },
    {
        question: "3. Ketika bekerja dalam tim, saya cenderung:",
        options: [
            { text: "Mengambil peran pemimpin dan mengarahkan", type: "D" },
            { text: "Menjaga semangat tim dan membangun hubungan", type: "I" },
            { text: "Menjadi pendengar dan penengah yang baik", type: "S" },
            { text: "Menjaga struktur dan memastikan ketepatan", type: "C" }
        ]
    },
    {
        question: "4. Saat menghadapi perubahan, saya biasanya:",
        options: [
            { text: "Segera bertindak dan menyesuaikan diri", type: "D" },
            { text: "Menyambut dengan antusias dan semangat baru", type: "I" },
            { text: "Membutuhkan waktu untuk merasa nyaman", type: "S" },
            { text: "Menganalisis terlebih dahulu dampaknya", type: "C" }
        ]
    },
    {
        question: "5. Gaya komunikasi saya lebih cenderung:",
        options: [
            { text: "Langsung, singkat, dan jelas", type: "D" },
            { text: "Ceria, ekspresif, dan spontan", type: "I" },
            { text: "Tenang, penuh empati, dan ramah", type: "S" },
            { text: "Terstruktur, sopan, dan berbasis data", type: "C" }
        ]
    },
    {
        question: "6. Dalam menghadapi tekanan deadline, saya:",
        options: [
            { text: "Fokus pada hasil dan cepat menyelesaikan tugas", type: "D" },
            { text: "Mencari bantuan atau mengajak kolaborasi", type: "I" },
            { text: "Menjaga suasana agar tetap tenang dan nyaman", type: "S" },
            { text: "Membuat daftar prioritas dan mengikuti langkah kerja", type: "C" }
        ]
    },
    {
        question: "7. Saat menyampaikan ide, saya lebih suka:",
        options: [
            { text: "Menyampaikan inti ide dengan tegas", type: "D" },
            { text: "Menceritakan dengan semangat dan antusiasme", type: "I" },
            { text: "Menyesuaikan cara bicara agar tidak menyinggung", type: "S" },
            { text: "Menyusun data pendukung sebelum berbicara", type: "C" }
        ]
    },
    {
        question: "8. Ketika bertugas di proyek baru, saya:",
        options: [
            { text: "Langsung mulai dan cari tantangan", type: "D" },
            { text: "Senang bertemu orang baru dan bekerja kelompok", type: "I" },
            { text: "Ingin tahu siapa saja yang akan saya bantu", type: "S" },
            { text: "Membaca semua panduan terlebih dahulu", type: "C" }
        ]
    },
    {
        question: "9. Jika ada masalah di tim, saya cenderung:",
        options: [
            { text: "Segera selesaikan dan ambil tindakan", type: "D" },
            { text: "Mencairkan suasana agar tidak tegang", type: "I" },
            { text: "Mendengarkan semua pihak terlebih dahulu", type: "S" },
            { text: "Mencari tahu penyebab pastinya dengan teliti", type: "C" }
        ]
    },
    {
        question: "10. Dalam mengambil keputusan penting, saya:",
        options: [
            { text: "Fokus pada hasil dan objektif", type: "D" },
            { text: "Melibatkan orang lain agar lebih dinamis", type: "I" },
            { text: "Memastikan semua orang nyaman", type: "S" },
            { text: "Berdasarkan data dan pertimbangan matang", type: "C" }
        ]
    },
    {
        question: "11. Dalam menyelesaikan tugas, saya:",
        options: [
            { text: "Suka tantangan dan hasil cepat", type: "D" },
            { text: "Butuh suasana menyenangkan", type: "I" },
            { text: "Perlu kenyamanan dan ritme stabil", type: "S" },
            { text: "Senang membuat checklist dan analisis", type: "C" }
        ]
    },
    {
        question: "12. Saat diskusi tim, saya:",
        options: [
            { text: "Menyampaikan pendapat dengan yakin", type: "D" },
            { text: "Antusias dan ekspresif", type: "I" },
            { text: "Mendukung dan menenangkan tim", type: "S" },
            { text: "Teliti dan hati-hati dalam berpendapat", type: "C" }
        ]
    },
    {
        question: "13. Ketika diberikan kebebasan, saya:",
        options: [
            { text: "Menentukan tujuan dan langsung bekerja", type: "D" },
            { text: "Mencari teman kerja dan kolaborasi", type: "I" },
            { text: "Menyesuaikan ritme dan membantu tim", type: "S" },
            { text: "Membuat rencana dan evaluasi risiko", type: "C" }
        ]
    },
    {
        question: "14. Gaya kerja saya lebih ke arah:",
        options: [
            { text: "Cepat, to the point, dan kompetitif", type: "D" },
            { text: "Energik, kreatif, dan spontan", type: "I" },
            { text: "Stabil, ramah, dan suportif", type: "S" },
            { text: "Teliti, logis, dan sistematis", type: "C" }
        ]
    },
    {
        question: "15. Jika tim dalam kondisi tidak ideal, saya:",
        options: [
            { text: "Tetap fokus dan dorong hasil", type: "D" },
            { text: "Menghibur agar semangat kembali", type: "I" },
            { text: "Menenangkan agar suasana kondusif", type: "S" },
            { text: "Analisis masalah dan cari akar penyebab", type: "C" }
        ]
    },
    {
        question: "16. Saat presentasi, saya:",
        options: [
            { text: "Langsung ke inti pesan dan solusi", type: "D" },
            { text: "Gunakan humor dan energi tinggi", type: "I" },
            { text: "Jaga suasana nyaman dan terhubung", type: "S" },
            { text: "Beri data, grafik, dan penjelasan runtut", type: "C" }
        ]
    },
    {
        question: "17. Jika atasan memberi kritik, saya:",
        options: [
            { text: "Terima dan segera perbaiki", type: "D" },
            { text: "Tanyakan sambil tersenyum", type: "I" },
            { text: "Pikirkan dulu dan renungkan", type: "S" },
            { text: "Catat dan evaluasi", type: "C" }
        ]
    },
    {
        question: "18. Dalam tim, saya dikenal sebagai orang yang:",
        options: [
            { text: "Tegas dan berani ambil keputusan", type: "D" },
            { text: "Ceria dan penuh semangat", type: "I" },
            { text: "Sabar dan penengah", type: "S" },
            { text: "Teliti dan detail", type: "C" }
        ]
    },
    {
        question: "19. Ketika mendapat tugas baru, saya:",
        options: [
            { text: "Ingin segera menyelesaikan sebaik mungkin", type: "D" },
            { text: "Cari teman kerja untuk diskusi", type: "I" },
            { text: "Lihat bagaimana dampaknya pada orang lain", type: "S" },
            { text: "Minta SOP dan instruksi terlebih dahulu", type: "C" }
        ]
    },
    {
        question: "20. Dalam situasi darurat, saya:",
        options: [
            { text: "Langsung bertindak", type: "D" },
            { text: "Ajak orang lain bekerja sama", type: "I" },
            { text: "Pastikan semua aman secara emosional", type: "S" },
            { text: "Pikirkan konsekuensi dan langkah terstruktur", type: "C" }
        ]
    },
    {
        question: "21. Saat bekerja, saya lebih suka:",
        options: [
            { text: "Tujuan yang jelas dan hasil cepat", type: "D" },
            { text: "Lingkungan seru dan tidak kaku", type: "I" },
            { text: "Ritme tenang dan tidak terburu-buru", type: "S" },
            { text: "Struktur kerja yang jelas dan detail", type: "C" }
        ]
    },
    {
        question: "22. Jika harus memilih peran, saya lebih suka:",
        options: [
            { text: "Pemimpin atau pengambil keputusan", type: "D" },
            { text: "Presenter atau penghubung tim", type: "I" },
            { text: "Pendengar dan penyeimbang", type: "S" },
            { text: "Pengelola data dan sistem kerja", type: "C" }
        ]
    },
    {
        question: "23. Saat diberi target tinggi, saya:",
        options: [
            { text: "Tertantang dan siap ngebut", type: "D" },
            { text: "Ajukan ide kreatif dan libatkan tim", type: "I" },
            { text: "Minta arahan jelas dan waktu stabil", type: "S" },
            { text: "Minta acuan data dan strategi jelas", type: "C" }
        ]
    },
    {
        question: "24. Kalau tim tidak kompak, saya akan:",
        options: [
            { text: "Tegur dan ambil alih kendali", type: "D" },
            { text: "Bikin games atau candaan", type: "I" },
            { text: "Dampingi yang merasa tertekan", type: "S" },
            { text: "Identifikasi masalah sistem dan peran", type: "C" }
        ]
    }
];

const discNames = {
    "D": "Dominance",
    "I": "Influence",
    "S": "Steadiness",
    "C": "Conscientiousness"
};

let currentQuestionIndex = 0;
let scores = { "D": 0, "I": 0, "S": 0, "C": 0 };
let scoresLeast = { "D": 0, "I": 0, "S": 0, "C": 0 };

const introContainer = document.getElementById('intro-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const progressBar = document.getElementById('progress-bar');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const quizForm = document.getElementById('quiz-form');

function startQuiz() {
    introContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    scores = { "D": 0, "I": 0, "S": 0, "C": 0 };
    scoresLeast = { "D": 0, "I": 0, "S": 0, "C": 0 };
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        questionText.textContent = `(${currentQuestionIndex + 1}/24) Pilih yang PALING dan PALING TIDAK menggambarkan Anda:`;
        optionsContainer.innerHTML = '';
        
        quizQuestions[currentQuestionIndex].options.forEach((option, index) => {
            const optionRow = document.createElement('div');
            optionRow.classList.add('option-row');
            
            const mostInput = document.createElement('input');
            mostInput.type = 'radio';
            mostInput.name = `most-${currentQuestionIndex}`;
            mostInput.value = option.type;
            
            const leastInput = document.createElement('input');
            leastInput.type = 'radio';
            leastInput.name = `least-${currentQuestionIndex}`;
            leastInput.value = option.type;
            
            const optionText = document.createElement('span');
            optionText.classList.add('option-text');
            optionText.textContent = option.text;

            optionRow.appendChild(mostInput);
            optionRow.appendChild(leastInput);
            optionRow.appendChild(optionText);

            optionsContainer.appendChild(optionRow);
        });

        const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        
    } else {
        calculateAndShowResult();
    }
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const mostValue = document.querySelector(`input[name="most-${currentQuestionIndex}"]:checked`);
    const leastValue = document.querySelector(`input[name="least-${currentQuestionIndex}"]:checked`);
    
    if (mostValue && leastValue && mostValue.value !== leastValue.value) {
        scores[mostValue.value]++;
        scoresLeast[leastValue.value]++;
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            calculateAndShowResult();
        }
    } else {
        alert("Mohon pilih satu jawaban PALING dan satu jawaban PALING TIDAK yang berbeda.");
    }
});

function calculateAndShowResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    let dominantDiscType = '';
    let maxDiscScore = -100;
    for (const type in scores) {
        const finalScore = scores[type] - scoresLeast[type];
        if (finalScore > maxDiscScore) {
            maxDiscScore = finalScore;
            dominantDiscType = type;
        }
    }
    
    resultTitle.textContent = `Hasil Kepribadian DISC Anda: ${discNames[dominantDiscType]}`;
    resultDescription.textContent = "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama Mas Ali Mahfud.";
}

function restartQuiz() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    scores = { "D": 0, "I": 0, "S": 0, "C": 0 };
    scoresLeast = { "D": 0, "I": 0, "S": 0, "C": 0 };
    quizForm.reset();
}

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);