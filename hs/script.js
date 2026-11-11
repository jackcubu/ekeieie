
/* =====================================
   1. THEME SYSTEM
===================================== */

const themes = {

    kaya: {
        name: "Kaya",
        icon: "ʚɞ",
        light: {
            bg: "#f5f1fa",
            surface: "rgba(255,255,255,0.76)",
            solid: "#ffffff",
            text: "#373044",
            muted: "#90889e",
            primary: "#9581c2",
            soft: "rgba(149,129,194,0.15)",
            border: "rgba(149,129,194,0.2)",
            gradient: "linear-gradient(135deg,#eee8f8,#ffffff,#f4eff9)"
        },
        dark: {
            bg: "#000000",
            surface: "rgba(38,31,50,0.82)",
            solid: "#292234",
            text: "#f1ebfa",
            muted: "#aaa0b8",
            primary: "#b19add",
            soft: "rgba(177,154,221,0.16)",
            border: "rgba(177,154,221,0.2)",
            gradient: "linear-gradient(135deg,#21182d,#17131f,#302036)"
        }
    },

    mia: {
        name: "Mia",
        icon: "❤︎",
        light: {
            bg: "#fcf2f5",
            surface: "rgba(255,255,255,0.78)",
            solid: "#ffffff",
            text: "#44313a",
            muted: "#a28b95",
            primary: "#db91ad",
            soft: "rgba(219,145,173,0.15)",
            border: "rgba(219,145,173,0.2)",
            gradient: "linear-gradient(135deg,#fce5ed,#ffffff,#f9edf2)"
        },
        dark: {
            bg: "#20151b",
            surface: "rgba(48,31,41,0.85)",
            solid: "#32232c",
            text: "#f8eaf0",
            muted: "#b69ca8",
            primary: "#e6a2bf",
            soft: "rgba(230,162,191,0.15)",
            border: "rgba(230,162,191,0.2)",
            gradient: "linear-gradient(135deg,#321d2b,#20151b,#3b202d)"
        }
    },

    luki: {
        name: "Luki",
        icon: "♫",
        light: {
            bg: "#f0f6ef",
            surface: "rgba(255,255,255,0.77)",
            solid: "#ffffff",
            text: "#304236",
            muted: "#879a8b",
            primary: "#70a77e",
            soft: "rgba(112,167,126,0.15)",
            border: "rgba(112,167,126,0.2)",
            gradient: "linear-gradient(135deg,#e5f2e6,#ffffff,#edf6ee)"
        },
        dark: {
            bg: "#111b15",
            surface: "rgba(28,45,34,0.85)",
            solid: "#203328",
            text: "#e9f5eb",
            muted: "#9cb5a1",
            primary: "#75d68b",
            soft: "rgba(117,214,139,0.15)",
            border: "rgba(117,214,139,0.2)",
            gradient: "linear-gradient(135deg,#142d1c,#111b15,#1c3825)"
        }
    },

    dach: {
        name: "Dach",
        icon: "☀",
        light: {
            bg: "#faf6e9",
            surface: "rgba(255,255,255,0.8)",
            solid: "#ffffff",
            text: "#493e27",
            muted: "#a19477",
            primary: "#c39b42",
            soft: "rgba(195,155,66,0.15)",
            border: "rgba(195,155,66,0.22)",
            gradient: "linear-gradient(135deg,#f7edcf,#ffffff,#f8f2df)"
        },
        dark: {
            bg: "#1d190f",
            surface: "rgba(48,40,23,0.85)",
            solid: "#302817",
            text: "#f7efda",
            muted: "#b8a985",
            primary: "#e2b74f",
            soft: "rgba(226,183,79,0.15)",
            border: "rgba(226,183,79,0.2)",
            gradient: "linear-gradient(135deg,#352b16,#1d190f,#3b3019)"
        }
    },

    ht: {
        name: "HT",
        icon: "🗒",
        light: {
            bg: "#f4f4f4",
            surface: "rgba(255,255,255,0.82)",
            solid: "#ffffff",
            text: "#303030",
            muted: "#858585",
            primary: "#555555",
            soft: "rgba(80,80,80,0.1)",
            border: "rgba(80,80,80,0.17)",
            gradient: "linear-gradient(135deg,#eeeeee,#ffffff,#f5f5f5)"
        },
        dark: {
            bg: "#111111",
            surface: "rgba(36,36,36,0.88)",
            solid: "#252525",
            text: "#f1f1f1",
            muted: "#a3a3a3",
            primary: "#dddddd",
            soft: "rgba(220,220,220,0.12)",
            border: "rgba(220,220,220,0.18)",
            gradient: "linear-gradient(135deg,#292929,#111111,#333333)"
        }
    },

    sorry: {
        name: "sorry",
        icon: "🐟︎",
        light: {
            bg: "#eef6fc",
            surface: "rgba(255,255,255,0.78)",
            solid: "#ffffff",
            text: "#304252",
            muted: "#879bac",
            primary: "#629ac5",
            soft: "rgba(98,154,197,0.15)",
            border: "rgba(98,154,197,0.2)",
            gradient: "linear-gradient(135deg,#e0effa,#ffffff,#edf5fb)"
        },
        dark: {
            bg: "#111a24",
            surface: "rgba(29,45,61,0.86)",
            solid: "#203143",
            text: "#eaf4fc",
            muted: "#9db2c4",
            primary: "#78b6e6",
            soft: "rgba(120,182,230,0.15)",
            border: "rgba(120,182,230,0.2)",
            gradient: "linear-gradient(135deg,#172e43,#111a24,#1c3448)"
        }
    },

    kino: {
        name: "Kino",
        icon: "🜲",
        light: {
            bg: "#faf0f0",
            surface: "rgba(255,255,255,0.78)",
            solid: "#ffffff",
            text: "#472f32",
            muted: "#a28b8c",
            primary: "#cb666c",
            soft: "rgba(203,102,108,0.14)",
            border: "rgba(203,102,108,0.2)",
            gradient: "linear-gradient(135deg,#f7e4e4,#ffffff,#faeeee)"
        },
        dark: {
            bg: "#201315",
            surface: "rgba(49,30,32,0.86)",
            solid: "#322124",
            text: "#faebec",
            muted: "#b89b9e",
            primary: "#e77b83",
            soft: "rgba(231,123,131,0.15)",
            border: "rgba(231,123,131,0.2)",
            gradient: "linear-gradient(135deg,#3a1d20,#201315,#401d24)"
        }
    },

    mai: {
        name: "Mai",
        icon: "✦",
        light: {
            bg: "#f6f0e9",
            surface: "rgba(255,255,255,0.78)",
            solid: "#ffffff",
            text: "#47392e",
            muted: "#a08d7e",
            primary: "#a77c58",
            soft: "rgba(167,124,88,0.14)",
            border: "rgba(167,124,88,0.2)",
            gradient: "linear-gradient(135deg,#eee1d3,#ffffff,#f6eee6)"
        },
        dark: {
            bg: "#1c1713",
            surface: "rgba(48,37,29,0.86)",
            solid: "#30251d",
            text: "#f4e9dc",
            muted: "#b5a18e",
            primary: "#c99b73",
            soft: "rgba(201,155,115,0.15)",
            border: "rgba(201,155,115,0.2)",
            gradient: "linear-gradient(135deg,#38271c,#1c1713,#3b2c20)"
        }
    },

    dtuan: {
        name: "DTuan",
        icon: "☁",
        light: {
            bg: "#f5eff8",
            surface: "rgba(255,255,255,0.78)",
            solid: "#ffffff",
            text: "#403147",
            muted: "#9b8ba3",
            primary: "#a375b7",
            soft: "rgba(163,117,183,0.15)",
            border: "rgba(163,117,183,0.2)",
            gradient: "linear-gradient(135deg,#eee3f6,#ffffff,#f8eaf1)"
        },
        dark: {
            bg: "#1c1521",
            surface: "rgba(47,33,54,0.86)",
            solid: "#30223a",
            text: "#f5eafa",
            muted: "#b49dbd",
            primary: "#c391d7",
            soft: "rgba(195,145,215,0.16)",
            border: "rgba(195,145,215,0.2)",
            gradient: "linear-gradient(135deg,#322039,#1c1521,#3c2139)"
        }
    }

};


/* =====================================
   2. APPLY THEME
===================================== */

const themeSelect = document.getElementById("themeSelect");
const modeToggle = document.getElementById("modeToggle");
const brandIcon = document.getElementById("brandIcon");

let currentTheme = localStorage.getItem("ag-theme") || "kaya";
let currentMode = localStorage.getItem("ag-mode") || "light";

function applyTheme() {

    const theme = themes[currentTheme];
    const colors = theme[currentMode];

    document.documentElement.style.setProperty("--bg", colors.bg);
    document.documentElement.style.setProperty("--surface", colors.surface);
    document.documentElement.style.setProperty("--surface-solid", colors.solid);
    document.documentElement.style.setProperty("--text", colors.text);
    document.documentElement.style.setProperty("--muted", colors.muted);
    document.documentElement.style.setProperty("--primary", colors.primary);
    document.documentElement.style.setProperty("--primary-soft", colors.soft);
    document.documentElement.style.setProperty("--border", colors.border);
    document.documentElement.style.setProperty("--gradient", colors.gradient);

    document.body.style.backgroundColor = colors.bg;
    document.body.style.backgroundImage = colors.gradient;

    themeSelect.value = currentTheme;
    brandIcon.textContent = theme.icon;

    modeToggle.textContent = currentMode === "light" ? "☾" : "☀";

    localStorage.setItem("ag-theme", currentTheme);
    localStorage.setItem("ag-mode", currentMode);

}

themeSelect.addEventListener("change", () => {
    currentTheme = themeSelect.value;
    applyTheme();
});

modeToggle.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light";
    applyTheme();
});

applyTheme();


/* =====================================
   3. PAGE NAVIGATION
===================================== */

const navItems = document.querySelectorAll(".nav-item");
const studyCards = document.querySelectorAll(".study-card");

const dashboardPage = document.getElementById("dashboardPage");
const flashcardsPage = document.getElementById("flashcardsPage");
const addVocabularyPage = document.getElementById("addVocabularyPage");
const placeholderPage = document.getElementById("placeholderPage");
const speakingPage = document.getElementById("speakingPage");
const readingPage = document.getElementById("readingPage");
const breadcrumbTitle = document.getElementById("breadcrumbTitle");
const placeholderTitle = document.getElementById("placeholderTitle");


function openPage(pageName) {

    navItems.forEach(item => {
        item.classList.toggle(
            "active",
            item.dataset.page === pageName
        );
    });

    dashboardPage.hidden = pageName !== "dashboard";
    flashcardsPage.hidden = pageName !== "vocabulary";
    speakingPage.hidden = pageName !== "speaking";
    readingPage.hidden = pageName !== "reading";

    addVocabularyPage.hidden = true;

    placeholderPage.hidden = [
        "dashboard",
        "vocabulary",
        "speaking",
        "reading"
    ].includes(pageName);

    if (pageName === "vocabulary") {
        switchStudyMode("flashcard");
    }

    if (pageName === "speaking") {
        initializeSpeaking();
    }

    if (pageName === "reading") {
        initializeReadingPage();
    }

    breadcrumbTitle.textContent =
        pageName === "vocabulary"
            ? "Vocabulary"
            : pageName.charAt(0).toUpperCase() + pageName.slice(1);

    if (!placeholderPage.hidden) {
        placeholderTitle.textContent =
            pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}
// Điều hướng từ sidebar
navItems.forEach(item => {
    item.addEventListener("click", () => {
        openPage(item.dataset.page);
    });
});

// Điều hướng từ các thẻ trên Dashboard
studyCards.forEach(card => {
    card.addEventListener("click", () => {
        openPage(card.dataset.page);
    });
});
/* =====================================
   4. VOCABULARY DATABASE
===================================== */

// Mỗi từ là một object riêng.
// Sau này có thể thêm từ mới vào danh sách này.

const vocabulary = [

    {
        word: "Serendipity",
        ipa: "/ˌser.ənˈdɪp.ə.ti/",
        category: "Vocabulary",
        type: "noun",
        meaning: "Sự tình cờ may mắn; tình cờ tìm thấy điều tốt đẹp.",
        definition: "The occurrence of finding something good or useful without looking for it.",
        example: "Finding this little bookstore was pure serendipity."
    },

    {
        word: "Resilient",
        ipa: "/rɪˈzɪl.i.ənt/",
        category: "Vocabulary",
        type: "adjective",
        meaning: "Kiên cường; có khả năng phục hồi sau khó khăn.",
        definition: "Able to recover quickly after difficulties or challenges.",
        example: "She remained resilient despite facing many challenges."
    },

    {
        word: "Meticulous",
        ipa: "/məˈtɪk.jə.ləs/",
        category: "Vocabulary",
        type: "adjective",
        meaning: "Tỉ mỉ; chú ý đến từng chi tiết nhỏ.",
        definition: "Very careful and precise about every detail.",
        example: "She is meticulous about her work."
    },

    {
        word: "Acquire",
        ipa: "/əˈkwaɪər/",
        category: "Vocabulary",
        type: "verb",
        meaning: "Đạt được; tiếp thu; có được.",
        definition: "To gain or obtain something through effort or experience.",
        example: "Children acquire language naturally."
    }

];

// Load words previously saved in this browser.
const EXTRA_VOCAB_KEY = "agpractice-extra-vocabulary-v2";

function loadSavedVocabulary() {
    try {
        const saved = JSON.parse(localStorage.getItem(EXTRA_VOCAB_KEY) || "[]");
        if (Array.isArray(saved)) {
    saved.forEach(item => {
        vocabulary.push({
            ...item,
            category: item.category || "Vocabulary"
        });
    });
}
    } catch (error) {
        console.warn("Could not load saved vocabulary:", error);
    }
}

function persistVocabulary() {
    // The first four entries are the original sample words.
    localStorage.setItem(EXTRA_VOCAB_KEY, JSON.stringify(vocabulary.slice(4)));
}

loadSavedVocabulary();


/* =====================================
   5. FLASHCARD ELEMENTS
===================================== */

const flashcard = document.getElementById("flashcard");

const frontWord = document.getElementById("frontWord");
const backWord = document.getElementById("backWord");

const wordIPA = document.getElementById("wordIPA");
const wordType = document.getElementById("wordType");
const wordMeaning = document.getElementById("wordMeaning");
const wordDefinition = document.getElementById("wordDefinition");
const wordExample = document.getElementById("wordExample");

const cardPosition = document.getElementById("cardPosition");

let currentIndex = 0;

function renderFlashcard() {

    if (!vocabulary.length) return;
    currentIndex = (currentIndex + vocabulary.length) % vocabulary.length;
    const item = vocabulary[currentIndex];

    flashcard.classList.remove("flipped");

    frontWord.textContent = item.word;
    backWord.textContent = item.word;

    wordIPA.textContent = item.ipa;
    wordType.textContent = item.type;
    wordMeaning.textContent = item.meaning;
    wordDefinition.textContent = item.definition;
    wordExample.textContent = item.example;

    cardPosition.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(vocabulary.length).padStart(2, "0")}`;

    updatePronunciationVisibility();

}

function flipCard() {
    flashcard.classList.toggle("flipped");
}

flashcard.addEventListener("click", flipCard);

document.getElementById("flipCard").addEventListener("click", flipCard);


function previousCard() {

    currentIndex =
        (currentIndex - 1 + vocabulary.length) % vocabulary.length;

    renderFlashcard();

}

function nextCard() {

    currentIndex =
        (currentIndex + 1) % vocabulary.length;

    renderFlashcard();

}

document.getElementById("previousCard").addEventListener("click", previousCard);

document.getElementById("nextCard").addEventListener("click", nextCard);


/* =====================================
   6. PRONUNCIATION SETTINGS
===================================== */

const pronunciationToggle = document.getElementById("pronunciationToggle");

function updatePronunciationVisibility() {

    const enabled = pronunciationToggle.checked;

    document.querySelectorAll(".audio-control").forEach(button => {
        button.hidden = !enabled;
    });

    document.querySelectorAll(".ipa-row").forEach(row => {
        row.hidden = !enabled;
    });

}

pronunciationToggle.addEventListener("change", () => {

    updatePronunciationVisibility();

    if (!pronunciationToggle.checked && "speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

});


/* =====================================
   7. TEXT TO SPEECH
===================================== */

function pronounceWord(word) {

    if (!pronunciationToggle.checked) return;

    if (!("speechSynthesis" in window)) {
        alert("Your browser does not support pronunciation audio.");
        return;
    }

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

}

document.getElementById("cardAudio").addEventListener("click", (event) => {

    event.stopPropagation();

    const item = vocabulary[currentIndex];

    pronounceWord(item.word);

});



/* =====================================
   8. VOCABULARY STUDY MODES
===================================== */

const modeItems = document.querySelectorAll(".mode-item");

const flashcardMode = document.getElementById("flashcardMode");
const randomMode = document.getElementById("randomMode");
const wordMatchingMode = document.getElementById("wordMatchingMode");
const quizMode = document.getElementById("quizMode");


/* =====================================
   TYPE THE WORD PRACTICE
===================================== */
const typeWordMode = document.getElementById("typeWordMode");
const typeWordForm = document.getElementById("typeWordForm");
const typeWordInput = document.getElementById("typeWordInput");
const typeWordMeaning = document.getElementById("typeWordMeaning");
const typeWordCounter = document.getElementById("typeWordCounter");
const typeWordScore = document.getElementById("typeWordScore");
const typeWordFeedback = document.getElementById("typeWordFeedback");
const typeWordNext = document.getElementById("typeWordNext");
const typeWordHint = document.getElementById("typeWordHint");
let typeWordDeck = [];
let typeWordCurrent = null;
let typeWordCount = 0;
let typeWordCorrect = 0;
let typeWordWrongAttempts = 0;
let typeWordAnswered = false;

function getTypeWordHint(word, revealRatio) {
    const chars = [...word];
    const letterIndexes = chars.map((char, index) =>
        /[a-z]/i.test(char) ? index : -1
    ).filter(index => index >= 0);
    const revealCount = Math.min(
        letterIndexes.length,
        Math.max(3, Math.ceil(letterIndexes.length * revealRatio))
    );
    const revealed = new Set();
    if (letterIndexes.length) revealed.add(letterIndexes[0]);
    if (letterIndexes.length > 2) revealed.add(letterIndexes[Math.floor((letterIndexes.length - 1) / 2)]);
    if (letterIndexes.length > 1) revealed.add(letterIndexes[letterIndexes.length - 1]);

    // Reveal additional letters from left to right at the stronger hint level.
    for (const index of letterIndexes) {
        if (revealed.size >= revealCount) break;
        revealed.add(index);
    }
    return chars.map((char, index) => {
        if (!/[a-z]/i.test(char)) return char;
        return revealed.has(index) ? char : "_";
    }).join(" ");
}

function createTypeWordQuestion() {
    const words = vocabulary.filter(item => item.word && item.meaning);
    if (!words.length) {
        typeWordCurrent = null;
        typeWordMeaning.textContent = "You haven't added any vocabulary yet.";
        typeWordCounter.textContent = "No words available";
        typeWordFeedback.textContent = "Add vocabulary first, then come back to practise.";
        typeWordInput.disabled = true;
        document.getElementById("typeWordCheck").disabled = true;
        typeWordNext.hidden = true;
        typeWordHint.hidden = true;
        return;
    }
    if (!typeWordDeck.length) typeWordDeck = shuffleArray(words);
    typeWordCurrent = typeWordDeck.pop();
    typeWordCount++;
    typeWordWrongAttempts = 0;
    typeWordAnswered = false;
    typeWordMeaning.textContent = typeWordCurrent.meaning;
    typeWordCounter.textContent = "Question " + typeWordCount;
    typeWordScore.textContent = "Score: " + typeWordCorrect;
    typeWordInput.value = "";
    typeWordInput.disabled = false;
    document.getElementById("typeWordCheck").disabled = false;
    typeWordFeedback.textContent = "Type your answer and press Enter.";
    typeWordFeedback.className = "type-word-feedback";
    typeWordHint.textContent = "";
    typeWordHint.hidden = true;
    typeWordNext.hidden = true;
    typeWordInput.focus();
}

typeWordForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!typeWordCurrent || typeWordAnswered) return;
    const answer = typeWordInput.value.trim().toLowerCase();
    if (!answer) {
        typeWordFeedback.textContent = "Please type an answer first.";
        return;
    }
    const correct = answer === typeWordCurrent.word.trim().toLowerCase();
    if (correct) {
        typeWordAnswered = true;
        typeWordCorrect++;
        typeWordFeedback.textContent = "✓ Correct! " + typeWordCurrent.word;
        typeWordFeedback.className = "type-word-feedback correct";
        typeWordScore.textContent = "Score: " + typeWordCorrect;
        typeWordInput.disabled = true;
        document.getElementById("typeWordCheck").disabled = true;
        typeWordNext.hidden = false;
        typeWordNext.focus();
        return;
    }

    typeWordWrongAttempts++;
    typeWordInput.value = "";
    typeWordInput.focus();

    if (typeWordWrongAttempts >= 10) {
        typeWordHint.textContent = "Hint (10 attempts): " + getTypeWordHint(typeWordCurrent.word, 0.7);
        typeWordHint.hidden = false;
        typeWordFeedback.textContent = "Not quite. More letters have been revealed — try again!";
    } else if (typeWordWrongAttempts >= 3) {
        typeWordHint.textContent = "Hint (3 attempts): " + getTypeWordHint(typeWordCurrent.word, 0.4);
        typeWordHint.hidden = false;
        typeWordFeedback.textContent = "Not quite. Here's a small hint — try again!";
    } else {
        typeWordFeedback.textContent = "Not quite. Try again! (" + (3 - typeWordWrongAttempts) + " more wrong attempt(s) until a hint.)";
    }
    typeWordFeedback.className = "type-word-feedback incorrect";
});
typeWordNext.addEventListener("click", createTypeWordQuestion);

function switchStudyMode(mode) {

    modeItems.forEach(item => {
        item.classList.toggle(
            "active",
            item.dataset.mode === mode
        );
    });

    const isAdd = mode === "add";

    flashcardsPage.hidden = false;
    addVocabularyPage.hidden = !isAdd;

    document.querySelector(".vocab-toolbar").hidden = isAdd;

    // Hiển thị chế độ tương ứng
    flashcardMode.hidden = mode !== "flashcard";
    randomMode.hidden = mode !== "guess";
    wordMatchingMode.hidden = mode !== "match";
    quizMode.hidden = mode !== "quiz";
    typeWordMode.hidden = mode !== "typeword";

    // Các chế độ chưa triển khai
    const comingSoon = ["mixed"].includes(mode);

    let notice = document.getElementById("modeComingSoon");

    if (comingSoon) {

        if (!notice) {
            notice = document.createElement("div");
            notice.id = "modeComingSoon";
            notice.className = "glass";
            notice.style.cssText =
                "padding:28px;margin-top:24px;text-align:center;border-radius:18px";

            flashcardsPage.appendChild(notice);
        }

        const labels = {
            mixed: "Mixed practice"
        };

        notice.innerHTML =
            `<h2>${labels[mode]}</h2>
             <p>This learning mode will be available in a future update.</p>`;

        notice.hidden = false;

    } else if (notice) {
        notice.hidden = true;
    }

    // Khởi tạo chế độ học
    if (mode === "guess") {
        createScrambleGame();
    }

    if (mode === "match") {
        createWordMatchingGame();
    }

    if (mode === "flashcard") {
        renderFlashcard();
    }

    if (mode === "quiz") {
        createQuizQuestion();
    }

    if (mode === "typeword") {
        createTypeWordQuestion();
    }
}


// Sự kiện chuyển chế độ
modeItems.forEach(item => {
    item.addEventListener("click", () => {
        switchStudyMode(item.dataset.mode);
    });
});
/* =====================================
   9. WORD MATCHING GAME
===================================== */

const matchingEnglish = document.getElementById("matchingEnglish");
const matchingVietnamese = document.getElementById("matchingVietnamese");
const matchingMessage = document.getElementById("matchingMessage");
const matchingProgress = document.getElementById("matchingProgress");
const matchingProgressBar = document.getElementById("matchingProgressBar");
const restartMatching = document.getElementById("restartMatching");

let matchingPairs = [];
let selectedEnglish = null;
let selectedVietnamese = null;
let matchedCount = 0;
let checkingAnswer = false;


// Xáo trộn danh sách
function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// Tạo trò chơi nối từ
function createWordMatchingGame() {

    matchingEnglish.innerHTML = "";
    matchingVietnamese.innerHTML = "";

    selectedEnglish = null;
    selectedVietnamese = null;
    matchedCount = 0;
    checkingAnswer = false;

    const availableWords = vocabulary.filter(item =>
        item.word && item.meaning
    );

    if (availableWords.length === 0) {

        matchingMessage.textContent =
            "You haven't added any vocabulary yet.";

        matchingProgress.textContent = "0 / 0 pairs matched";
        matchingProgressBar.style.width = "0%";

        return;
    }

    // Mỗi lượt tối đa 6 cặp
    const selectedWords = shuffleArray(availableWords).slice(0, 6);

    matchingPairs = selectedWords.map((item, index) => ({
        id: index,
        word: item.word,
        meaning: item.meaning
    }));

    // Xáo trộn hai cột riêng biệt
    const englishList = shuffleArray(matchingPairs);
    const vietnameseList = shuffleArray(matchingPairs);

    englishList.forEach(pair => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "matching-option";
        button.textContent = pair.word;
        button.dataset.pairId = pair.id;

        button.addEventListener("click", () => {
            selectMatchingOption(button, "english");
        });

        matchingEnglish.appendChild(button);
    });

    vietnameseList.forEach(pair => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "matching-option";
        button.textContent = pair.meaning;
        button.dataset.pairId = pair.id;

        button.addEventListener("click", () => {
            selectMatchingOption(button, "vietnamese");
        });

        matchingVietnamese.appendChild(button);
    });

    matchingMessage.textContent =
        "Choose an English word and its Vietnamese meaning.";

    matchingMessage.className = "matching-message";

    updateMatchingProgress();
}


// Khi người học chọn một đáp án
function selectMatchingOption(button, column) {

    if (checkingAnswer || button.disabled) return;

    if (column === "english") {

        if (selectedEnglish) {
            selectedEnglish.classList.remove("selected");
        }

        selectedEnglish = button;
        button.classList.add("selected");

    } else {

        if (selectedVietnamese) {
            selectedVietnamese.classList.remove("selected");
        }

        selectedVietnamese = button;
        button.classList.add("selected");
    }

    if (selectedEnglish && selectedVietnamese) {
        checkMatchingAnswer();
    }
}


// Kiểm tra đáp án nối từ
function checkMatchingAnswer() {

    const englishId = selectedEnglish.dataset.pairId;
    const vietnameseId = selectedVietnamese.dataset.pairId;

    checkingAnswer = true;

    if (englishId === vietnameseId) {

        selectedEnglish.classList.remove("selected");
        selectedVietnamese.classList.remove("selected");

        selectedEnglish.classList.add("matched");
        selectedVietnamese.classList.add("matched");

        selectedEnglish.disabled = true;
        selectedVietnamese.disabled = true;

        matchedCount++;

        matchingMessage.textContent = "Correct! Well done.";
        matchingMessage.className = "matching-message correct";

        selectedEnglish = null;
        selectedVietnamese = null;

        updateMatchingProgress();

        checkingAnswer = false;

        if (matchedCount === matchingPairs.length) {

            matchingMessage.textContent =
                "Excellent! You matched all the words.";

            matchingMessage.className =
                "matching-message correct";
        }

    } else {

        selectedEnglish.classList.add("incorrect");
        selectedVietnamese.classList.add("incorrect");

        matchingMessage.textContent =
            "Not quite! Try another combination.";

        matchingMessage.className =
            "matching-message incorrect";

        const wrongEnglish = selectedEnglish;
        const wrongVietnamese = selectedVietnamese;

        setTimeout(() => {

            wrongEnglish.classList.remove("selected", "incorrect");
            wrongVietnamese.classList.remove("selected", "incorrect");

            selectedEnglish = null;
            selectedVietnamese = null;

            checkingAnswer = false;

        }, 650);
    }
}


// Cập nhật tiến độ
function updateMatchingProgress() {

    const total = matchingPairs.length;

    matchingProgress.textContent =
        `${matchedCount} / ${total} pairs matched`;

    const percentage = total
        ? (matchedCount / total) * 100
        : 0;

    matchingProgressBar.style.width = `${percentage}%`;
}


// Chơi lại Word Matching
restartMatching.addEventListener("click", createWordMatchingGame);

/* =====================================
   9.2 WORD SCRAMBLE GAME
===================================== */

const scrambleHint = document.getElementById("scrambleHint");
const scrambleLetters = document.getElementById("scrambleLetters");
const scrambleAnswer = document.getElementById("scrambleAnswer");
const scrambleFeedback = document.getElementById("scrambleFeedback");

const scrambleReset = document.getElementById("scrambleReset");
const scrambleCheck = document.getElementById("scrambleCheck");
const scrambleNext = document.getElementById("scrambleNext");

let currentScrambleItem = null;
let scramblePool = [];
let selectedScrambleTiles = [];
let lastScrambleWord = "";
let scrambleLocked = false;


// Xáo trộn chữ cái
function shuffleScrambleLetters(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// Tạo câu hỏi mới
function createScrambleGame() {

    const availableWords = vocabulary.filter(item =>
        item.word &&
        item.meaning &&
        /^[a-zA-Z]+$/.test(item.word.trim())
    );

    if (availableWords.length === 0) {
        currentScrambleItem = null;

        scrambleHint.textContent =
            "You haven't added any suitable vocabulary yet.";

        scrambleLetters.innerHTML = "";
        scrambleAnswer.innerHTML = "";

        scrambleFeedback.textContent =
            "Add some single-word English vocabulary first.";

        scrambleCheck.hidden = true;
        scrambleReset.hidden = true;
        scrambleNext.hidden = true;

        return;
    }

    let wordList = availableWords.filter(item =>
        item.word.trim().toLowerCase() !== lastScrambleWord
    );

    if (wordList.length === 0) {
        wordList = availableWords;
    }

    const selectedItem =
        wordList[Math.floor(Math.random() * wordList.length)];

    currentScrambleItem = selectedItem;
    lastScrambleWord = selectedItem.word.trim().toLowerCase();

    scrambleHint.textContent = selectedItem.meaning;

    const originalLetters = selectedItem.word
        .trim()
        .toUpperCase()
        .split("");

    let shuffledLetters = shuffleScrambleLetters(originalLetters);

    // Tránh trường hợp chữ vẫn giữ nguyên thứ tự
    if (
        originalLetters.length > 1 &&
        shuffledLetters.every((letter, index) =>
            letter === originalLetters[index]
        )
    ) {
        shuffledLetters = shuffleScrambleLetters(originalLetters);
    }

    scramblePool = shuffledLetters.map((letter, index) => ({
        id: index,
        letter: letter,
        used: false
    }));

    selectedScrambleTiles = [];
    scrambleLocked = false;

    scrambleFeedback.textContent =
        "Select the letters in the correct order.";

    scrambleFeedback.className = "scramble-feedback";

    randomizeScrambleState();

    scrambleCheck.hidden = false;
    scrambleReset.hidden = false;
    scrambleNext.hidden = true;

    renderScrambleLetters();
    renderScrambleAnswer();
}


// Trạng thái màu của trò chơi
function randomizeScrambleState() {
    randomMode.classList.remove(
        "scramble-success",
        "scramble-error"
    );
}


// Hiển thị khay chữ cái
function renderScrambleLetters() {

    scrambleLetters.innerHTML = "";

    scramblePool.forEach(tile => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "scramble-tile";
        button.textContent = tile.letter;
        button.disabled = tile.used;

        button.addEventListener("click", () => {

            if (tile.used || scrambleLocked) return;

            tile.used = true;
            selectedScrambleTiles.push(tile);

            renderScrambleLetters();
            renderScrambleAnswer();
        });

        scrambleLetters.appendChild(button);
    });
}


// Hiển thị các ô đáp án có sẵn
function renderScrambleAnswer() {

    scrambleAnswer.innerHTML = "";

    // Tạo đủ số ô theo độ dài của từ
    scramblePool.forEach((tile, index) => {

        const selectedTile = selectedScrambleTiles[index];

        const slot = document.createElement("button");

        slot.type = "button";
        slot.className = "scramble-answer-slot";

        if (selectedTile) {

            slot.classList.add("filled");
            slot.classList.add("scramble-answer-letter");

            slot.textContent = selectedTile.letter;

            // Bấm vào chữ để trả về khay
            slot.addEventListener("click", () => {

                if (scrambleLocked) return;

                const removedTile = selectedScrambleTiles.splice(index, 1)[0];

                removedTile.used = false;

                renderScrambleLetters();
                renderScrambleAnswer();
            });

        } else {

            slot.textContent = "";
            slot.disabled = true;
            slot.setAttribute("aria-label", "Empty answer slot");
        }

        scrambleAnswer.appendChild(slot);
    });
}


// Đặt lại đáp án
function resetScrambleAnswer() {

    if (!currentScrambleItem || scrambleLocked) return;

    selectedScrambleTiles = [];

    scramblePool.forEach(tile => {
        tile.used = false;
    });

    randomizeScrambleState();

    renderScrambleLetters();
    renderScrambleAnswer();

    scrambleFeedback.textContent =
        "Try arranging the letters again.";

    scrambleFeedback.className = "scramble-feedback";
}


// Kiểm tra đáp án
function checkScrambleAnswer() {

    if (!currentScrambleItem || scrambleLocked) return;

    if (selectedScrambleTiles.length !== scramblePool.length) {

        scrambleFeedback.textContent =
            "Please fill in all the answer slots first.";

        scrambleFeedback.className = "scramble-feedback incorrect";
        return;
    }

    const userAnswer = selectedScrambleTiles
        .map(tile => tile.letter)
        .join("")
        .toLowerCase();

    const correctAnswer = currentScrambleItem.word
        .trim()
        .toLowerCase();

    if (userAnswer === correctAnswer) {

        scrambleLocked = true;

        randomMode.classList.remove("scramble-error");
        randomMode.classList.add("scramble-success");

        scrambleFeedback.textContent =
            "✓ Correct! Great job!";

        scrambleFeedback.className =
            "scramble-feedback correct";

        scrambleCheck.hidden = true;
        scrambleReset.hidden = true;
        scrambleNext.hidden = false;

        pronounceWord(currentScrambleItem.word);

    } else {

        scrambleLocked = true;

        randomMode.classList.remove("scramble-success");
        randomMode.classList.add("scramble-error");

        scrambleFeedback.textContent =
            "Not quite! Try again.";

        scrambleFeedback.className =
            "scramble-feedback incorrect";

        // Đợi hiệu ứng rung kết thúc rồi trả chữ về khay
        setTimeout(() => {

            selectedScrambleTiles = [];

            scramblePool.forEach(tile => {
                tile.used = false;
            });

            scrambleLocked = false;

            randomMode.classList.remove("scramble-error");

            renderScrambleLetters();
            renderScrambleAnswer();

        }, 650);
    }
}


// Sự kiện các nút
scrambleReset.addEventListener("click", resetScrambleAnswer);
scrambleCheck.addEventListener("click", checkScrambleAnswer);
scrambleNext.addEventListener("click", createScrambleGame);

/* =====================================
   9.3 QUIZ MODE
===================================== */

const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizScore = document.getElementById("quizScore");
const quizQuestionType = document.getElementById("quizQuestionType");
const quizPrompt = document.getElementById("quizPrompt");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizNext = document.getElementById("quizNext");

let quizDeck = [];
let quizCurrentQuestion = null;
let quizQuestionCount = 0;
let quizCorrectCount = 0;
let quizLastWord = "";
let quizAnswered = false;


// Xáo trộn danh sách
function shuffleQuizArray(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


// Lấy danh sách từ vựng hợp lệ
function getQuizVocabulary() {

    const uniqueWords = new Map();

    vocabulary.forEach(item => {

        if (!item.word || !item.meaning) return;

        const word = item.word.trim();
        const meaning = item.meaning.trim();

        if (!word || !meaning) return;

        const key = word.toLowerCase();

        if (!uniqueWords.has(key)) {
            uniqueWords.set(key, {
                word: word,
                meaning: meaning
            });
        }
    });

    return [...uniqueWords.values()];
}


// Tạo danh sách câu hỏi
function refillQuizDeck(words) {

    quizDeck = shuffleQuizArray(words);

    // Tránh câu cuối lượt trước trùng câu đầu lượt mới
    if (
        quizDeck.length > 1 &&
        quizDeck[quizDeck.length - 1].word.toLowerCase() ===
        quizLastWord.toLowerCase()
    ) {
        [
            quizDeck[0],
            quizDeck[quizDeck.length - 1]
        ] = [
            quizDeck[quizDeck.length - 1],
            quizDeck[0]
        ];
    }
}


// Tạo câu hỏi mới
function createQuizQuestion() {

    const words = getQuizVocabulary();

    // Cần ít nhất 4 từ để tạo 4 đáp án
    if (words.length < 4) {

        quizPrompt.textContent = "Not enough vocabulary!";
        quizQuestionType.textContent = "QUIZ UNAVAILABLE";

        quizOptions.innerHTML = "";

        quizFeedback.textContent =
            "You need at least 4 different words to play.";

        quizNext.hidden = true;
        quizCurrentQuestion = null;

        return;
    }

    // Khi hết danh sách, xáo trộn lại
    if (quizDeck.length === 0) {
        refillQuizDeck(words);
    }

    const answerWord = quizDeck.pop();

    quizLastWord = answerWord.word;

    // Chọn ngẫu nhiên chiều câu hỏi
    const direction = Math.random() < 0.5
        ? "meaning-to-word"
        : "word-to-meaning";

    const otherWords = words.filter(item =>
        item.word.toLowerCase() !== answerWord.word.toLowerCase()
    );

    const distractors = shuffleQuizArray(otherWords).slice(0, 3);

    let options;
    let correctAnswer;

    // Nghĩa tiếng Việt → Từ tiếng Anh
    if (direction === "meaning-to-word") {

        quizQuestionType.textContent = "AG yeu dau";

        quizPrompt.textContent = answerWord.meaning;

        options = [
            answerWord.word,
            ...distractors.map(item => item.word)
        ];

        correctAnswer = answerWord.word;

    }

    // Từ tiếng Anh → Nghĩa tiếng Việt
    else {

        quizQuestionType.textContent = "dach dang yeu";

        quizPrompt.textContent = answerWord.word;

        options = [
            answerWord.meaning,
            ...distractors.map(item => item.meaning)
        ];

        correctAnswer = answerWord.meaning;
    }

    // Xáo trộn vị trí đáp án
    options = shuffleQuizArray(options);

    quizCurrentQuestion = {
        options: options,
        correctAnswer: correctAnswer
    };

    quizAnswered = false;
    quizQuestionCount++;

    quizQuestionNumber.textContent =
        `Question ${quizQuestionCount}`;

    quizScore.textContent =
        `Score: ${quizCorrectCount}`;

    quizFeedback.textContent = "Choose one answer.";
    quizFeedback.className = "quiz-feedback";

    quizNext.hidden = true;

    renderQuizOptions();
}


// Hiển thị 4 đáp án
function renderQuizOptions() {

    quizOptions.innerHTML = "";

    if (!quizCurrentQuestion) return;

    const labels = ["A", "B", "C", "D"];

    quizCurrentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";

        const label = document.createElement("span");

        label.className = "quiz-option-label";
        label.textContent = labels[index];

        const text = document.createElement("span");

        text.className = "quiz-option-text";
        text.textContent = option;

        button.append(label, text);

        button.addEventListener("click", () => {
            selectQuizAnswer(index, button);
        });

        quizOptions.appendChild(button);
    });
}


// Kiểm tra đáp án
function selectQuizAnswer(selectedIndex, selectedButton) {

    if (quizAnswered || !quizCurrentQuestion) return;

    quizAnswered = true;

    const selectedAnswer =
        quizCurrentQuestion.options[selectedIndex];

    const correctAnswer =
        quizCurrentQuestion.correctAnswer;

    const allButtons =
        quizOptions.querySelectorAll(".quiz-option");

    // Khóa đáp án và đánh dấu đáp án đúng
    allButtons.forEach((button, index) => {

        button.disabled = true;

        if (
            quizCurrentQuestion.options[index] === correctAnswer
        ) {
            button.classList.add("correct");
        }
    });

    // Trả lời đúng
    if (selectedAnswer === correctAnswer) {

        quizCorrectCount++;

        selectedButton.classList.add("correct");

        quizFeedback.textContent =
            "✓ Correct! Great job!";

        quizFeedback.className =
            "quiz-feedback correct";

    }

    // Trả lời sai
    else {

        selectedButton.classList.add("incorrect");

        quizFeedback.textContent =
            `✗ Incorrect! The correct answer is: ${correctAnswer}`;

        quizFeedback.className =
            "quiz-feedback incorrect";
    }

    quizScore.textContent =
        `Score: ${quizCorrectCount}`;

    quizNext.hidden = false;
}


// Chuyển sang câu tiếp theo
quizNext.addEventListener("click", createQuizQuestion);
/* =====================================
   10. ADD VOCABULARY
===================================== */

const POS_OPTIONS = ["Noun", "Verb", "Adjective", "Adverb", "Pronoun", "Preposition", "Conjunction", "Interjection", "Determiner", "Other"];
const CATEGORY_OPTIONS = ["Vocabulary", "Phrasal Verb", "Idiom", "Collection"];
const manualRows = document.getElementById("manualRows");
const manualMessage = document.getElementById("manualMessage");
const csvFileInput = document.getElementById("vocabCsvFile");
const csvPreviewSection = document.getElementById("csvPreviewSection");
const csvPreviewBody = document.getElementById("csvPreviewBody");
const csvMessage = document.getElementById("csvMessage");
let csvEntries = [];

function makeSelect(options, selected = options[0], className = "") {
    const select = document.createElement("select");
    select.className = className;
    options.forEach(option => {
        const item = document.createElement("option");
        item.value = option;
        item.textContent = option;
        select.appendChild(item);
    });
    select.value = options.includes(selected) ? selected : options[0];
    return select;
}

function updatePosSelect(row) {
    const category = row.querySelector("[data-field='category']").value;
    const pos = row.querySelector("[data-field='pos']");

    if (category === "Vocabulary") {
        pos.innerHTML = "";
        POS_OPTIONS.forEach(option => {
            const item = document.createElement("option");
            item.value = option;
            item.textContent = option;
            pos.appendChild(item);
        });
        if (!POS_OPTIONS.includes(pos.dataset.previousValue)) pos.value = "Noun";
        else pos.value = pos.dataset.previousValue;
        pos.disabled = false;
    } else {
        pos.innerHTML = "";
        const item = document.createElement("option");
        item.value = category;
        item.textContent = category;
        pos.appendChild(item);
        pos.value = category;
        pos.dataset.previousValue = "";
        pos.disabled = true;
    }
}

function addManualRow(values = {}) {
    const row = document.createElement("div");
    row.className = "manual-entry-row";

    const word = document.createElement("input");
    word.placeholder = "e.g. Serendipity";
    word.value = values.word || "";
    word.dataset.field = "word";
    word.setAttribute("aria-label", "Word");

    const ipa = document.createElement("input");
    ipa.placeholder = "/ˌ.../";
    ipa.value = values.ipa || "";
    ipa.dataset.field = "ipa";
    ipa.setAttribute("aria-label", "IPA");

    const category = makeSelect(CATEGORY_OPTIONS, values.category || "Vocabulary");
    category.dataset.field = "category";
    category.setAttribute("aria-label", "Category");

    const posValue = values.pos || values.type || "Noun";
    const pos = makeSelect(POS_OPTIONS, POS_OPTIONS.includes(posValue) ? posValue : "Noun");
    pos.dataset.field = "pos";
    pos.setAttribute("aria-label", "Part of Speech");

    const meaning = document.createElement("input");
    meaning.placeholder = "Vietnamese meaning";
    meaning.value = values.meaning || "";
    meaning.dataset.field = "meaning";
    meaning.setAttribute("aria-label", "Meaning");

    const example = document.createElement("input");
    example.placeholder = "Example sentence";
    example.value = values.example || "";
    example.dataset.field = "example";
    example.setAttribute("aria-label", "Example");

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-entry-btn";
    remove.textContent = "×";
    remove.title = "Remove this row";
    row.append(word, ipa, category, pos, meaning, example, remove);
    manualRows.appendChild(row);
    updatePosSelect(row);
}

// Xử lý cả dòng nhập có sẵn trong HTML và những dòng được thêm bằng nút.
manualRows.addEventListener("change", event => {
    if (event.target.matches("[data-field='pos']")) {
        event.target.dataset.previousValue = event.target.value;
    }
    if (event.target.matches("[data-field='category']")) {
        const row = event.target.closest(".manual-entry-row");
        const pos = row.querySelector("[data-field='pos']");
        if (event.target.value === "Vocabulary" && !pos.disabled) {
            pos.dataset.previousValue = pos.value;
        }
        updatePosSelect(row);
    }
});

manualRows.addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-entry-btn");
    if (!removeButton) return;

    const row = removeButton.closest(".manual-entry-row");
    if (manualRows.children.length > 1) {
        row.remove();
    } else {
        row.querySelectorAll("input").forEach(input => input.value = "");
        row.querySelector("[data-field='category']").value = "Vocabulary";
        updatePosSelect(row);
    }
    manualMessage.textContent = "";
});

function readManualRows() {
    return [...manualRows.querySelectorAll(".manual-entry-row")].map(row => ({
        word: row.querySelector("[data-field='word']").value.trim(),
        ipa: row.querySelector("[data-field='ipa']").value.trim(),
        category: row.querySelector("[data-field='category']").value,
        pos: row.querySelector("[data-field='pos']").value,
        meaning: row.querySelector("[data-field='meaning']").value.trim(),
        example: row.querySelector("[data-field='example']").value.trim()
    })).filter(item => item.word || item.meaning || item.ipa || item.example);
}
/* =====================================
   MANAGE SAVED VOCABULARY
===================================== */

const savedVocabList = document.getElementById("savedVocabList");
const savedVocabMessage = document.getElementById("savedVocabMessage");

function renderSavedVocabulary() {
    if (!savedVocabList) return;

    savedVocabList.innerHTML = "";

    const savedWords = vocabulary
        .map((item, index) => ({ item, index }))
        .filter(({ index }) => index >= 4);

    if (savedWords.length === 0) {
        savedVocabList.innerHTML =
            `<p class="saved-vocab-empty">You haven't added any words yet.</p>`;
        return;
    }

    savedWords.forEach(({ item, index }) => {
        const card = document.createElement("div");
        card.className = "saved-vocab-item";

        const info = document.createElement("div");
        info.className = "saved-vocab-info";

        const word = document.createElement("h3");
        word.textContent = item.word;

        const ipa = document.createElement("span");
        ipa.textContent = item.ipa || "";

        const meaning = document.createElement("p");
        meaning.textContent = item.meaning || "";

        info.append(word, ipa, meaning);

        const actions = document.createElement("div");
        actions.className = "saved-vocab-actions";

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "saved-edit-btn";
        editButton.textContent = "✎";
        editButton.title = "Edit word";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "saved-delete-btn";
        deleteButton.textContent = "🗑";
        deleteButton.title = "Delete word";

        actions.append(editButton, deleteButton);
        card.append(info, actions);

        // Khu vực chỉnh sửa
        const editArea = document.createElement("div");
        editArea.className = "saved-vocab-edit";
        editArea.hidden = true;

        const fields = [
            ["Word", "word"],
            ["IPA", "ipa"],
            ["Category", "category"],
            ["Part of Speech", "type"],
            ["Meaning", "meaning"],
            ["Example", "example"]
        ];

        fields.forEach(([label, field]) => {
            const wrapper = document.createElement("label");
            wrapper.className = "saved-vocab-field";

            const title = document.createElement("span");
            title.textContent = label;

            const input = document.createElement("input");
            input.type = "text";
            input.value = item[field] || "";
            input.dataset.field = field;

            wrapper.append(title, input);
            editArea.appendChild(wrapper);
        });

        const editActions = document.createElement("div");
        editActions.className = "saved-vocab-edit-actions";

        const saveButton = document.createElement("button");
        saveButton.type = "button";
        saveButton.className = "primary-btn";
        saveButton.textContent = "Save changes";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.className = "saved-cancel-btn";
        cancelButton.textContent = "Cancel";

        editActions.append(saveButton, cancelButton);
        editArea.appendChild(editActions);
        card.appendChild(editArea);

        // Mở chỉnh sửa
        editButton.addEventListener("click", () => {
            editArea.hidden = !editArea.hidden;
        });

        // Hủy chỉnh sửa
        cancelButton.addEventListener("click", () => {
            renderSavedVocabulary();
        });

        // Lưu chỉnh sửa
        saveButton.addEventListener("click", () => {
            const updated = {};

            editArea.querySelectorAll("input").forEach(input => {
                updated[input.dataset.field] = input.value.trim();
            });

            if (!updated.word || !updated.meaning) {
                savedVocabMessage.textContent =
                    "Word and Meaning cannot be empty.";
                savedVocabMessage.className = "form-message error";
                return;
            }

            const duplicate = vocabulary.some((other, otherIndex) =>
                otherIndex !== index &&
                other.word.toLowerCase() === updated.word.toLowerCase()
            );

            if (duplicate) {
                savedVocabMessage.textContent =
                    "This word already exists.";
                savedVocabMessage.className = "form-message error";
                return;
            }

            Object.assign(item, updated);
            item.definition = item.meaning;

            persistVocabulary();
            renderSavedVocabulary();
            renderFlashcard();

            savedVocabMessage.textContent =
                "Word updated successfully!";
            savedVocabMessage.className = "form-message success";
        });

        // Xóa từ
        deleteButton.addEventListener("click", () => {
            if (!confirm(`Delete "${item.word}"?`)) return;

            vocabulary.splice(index, 1);

            persistVocabulary();
            renderSavedVocabulary();
            renderFlashcard();

            document.getElementById("wordCount").textContent =
                vocabulary.length;

            savedVocabMessage.textContent =
                "Word deleted successfully!";
            savedVocabMessage.className = "form-message success";
        });

        savedVocabList.appendChild(card);
    });
}
function validateAndSave(entries, messageElement) {
    const incomplete = entries.find(item => !item.word || !item.meaning);
    if (incomplete) {
        messageElement.textContent = "Please fill in both Word and Meaning for every row.";
        messageElement.className = "form-message error";
        return;
    }

    const existing = new Set(vocabulary.map(item => item.word.trim().toLowerCase()));
    const batch = new Set();
    const duplicates = [];
    const accepted = [];

    entries.forEach(item => {
        const key = item.word.trim().toLowerCase();
        if (existing.has(key) || batch.has(key)) duplicates.push(item.word);
        else {
            batch.add(key);
            accepted.push({
                word: item.word.trim(),
                ipa: item.ipa || "",
                category: item.category || "Vocabulary",
                type: item.category === "Vocabulary" ? (item.pos || "Other").toLowerCase() : item.category,
                meaning: item.meaning.trim(),
                definition: item.meaning.trim(),
                example: item.example || ""
            });
        }
    });

    if (!accepted.length) {
        messageElement.textContent = duplicates.length ? `No new words saved. Already exists: ${duplicates.join(", ")}` : "There are no words to save.";
        messageElement.className = "form-message error";
        return;
    }

    vocabulary.push(...accepted);
    persistVocabulary();
    renderSavedVocabulary();
    document.getElementById("wordCount").textContent = vocabulary.length;
    currentIndex = vocabulary.length - accepted.length;
    renderFlashcard();

    let result = `${accepted.length} word(s) saved successfully.`;
    if (duplicates.length) result += ` Skipped duplicates: ${duplicates.join(", ")}.`;
    messageElement.textContent = result;
    messageElement.className = "form-message success";
}

document.getElementById("addManualRow").addEventListener("click", () => addManualRow());
document.getElementById("saveManualWords").addEventListener("click", () => {
    const entries = readManualRows();
    if (!entries.length) {
        manualMessage.textContent = "Please enter at least one word.";
        manualMessage.className = "form-message error";
        return;
    }
    validateAndSave(entries, manualMessage);
    if (manualMessage.classList.contains("success")) {
        manualRows.innerHTML = "";
        addManualRow();
    }
});

function parseCSVLine(line) {
    const result = [];
    let value = "";
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' && line[i + 1] === '"' && quoted) { value += '"'; i++; }
        else if (char === '"') quoted = !quoted;
        else if (char === "," && !quoted) { result.push(value.trim()); value = ""; }
        else value += char;
    }
    result.push(value.trim());
    return result;
}

function renderCSVPreview() {
    csvPreviewBody.innerHTML = "";
    csvEntries.forEach((entry, index) => {
        const tr = document.createElement("tr");
        const fields = ["word", "ipa", "category", "pos", "meaning", "example"];
        fields.forEach(field => {
            const td = document.createElement("td");
            let control;
            if (field === "category") control = makeSelect(CATEGORY_OPTIONS, entry.category || "Vocabulary");
            else if (field === "pos") control = makeSelect(POS_OPTIONS, POS_OPTIONS.includes(entry.pos) ? entry.pos : "Noun");
            else {
                control = document.createElement("input");
                control.value = entry[field] || "";
            }
            control.addEventListener("input", () => entry[field] = control.value);
            control.addEventListener("change", () => {
                entry[field] = control.value;
                if (field === "category" && entry.category !== "Vocabulary") entry.pos = entry.category;
            });
            td.appendChild(control);
            tr.appendChild(td);
        });
        const removeCell = document.createElement("td");
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-entry-btn";
        remove.textContent = "×";
        remove.addEventListener("click", () => {
            csvEntries.splice(index, 1);
            renderCSVPreview();
        });
        removeCell.appendChild(remove);
        tr.appendChild(removeCell);
        csvPreviewBody.appendChild(tr);
    });
    document.getElementById("csvPreviewCount").textContent = `${csvEntries.length} rows`;
    csvPreviewSection.hidden = false;
}

csvFileInput.addEventListener("change", async () => {
    const file = csvFileInput.files[0];
    if (!file) return;
    document.getElementById("csvFileName").textContent = file.name;
    const text = (await file.text()).replace(/^\uFEFF/, "");
    const lines = text.split(/\r?\n/).filter(line => line.trim());
    if (!lines.length) return;

    const first = parseCSVLine(lines[0]).map(value => value.toLowerCase());
    const hasHeader = first[0] === "word" || first.includes("meaning");
    const dataLines = hasHeader ? lines.slice(1) : lines;
    csvEntries = dataLines.map(line => {
        const cells = parseCSVLine(line);
        const category = CATEGORY_OPTIONS.find(item => item.toLowerCase() === (cells[2] || "Vocabulary").toLowerCase()) || "Vocabulary";
        const rawPos = cells[3] || "Noun";
        return {
            word: cells[0] || "", ipa: cells[1] || "", category,
            pos: category === "Vocabulary" ? (POS_OPTIONS.find(item => item.toLowerCase() === rawPos.toLowerCase()) || "Other") : category,
            meaning: cells[4] || "", example: cells[5] || ""
        };
    }).filter(item => item.word || item.meaning);
    csvMessage.textContent = "Check the rows before saving. Word and Meaning are required.";
    csvMessage.className = "form-message";
    renderCSVPreview();
});

document.getElementById("cancelCsvImport").addEventListener("click", () => {
    csvEntries = [];
    csvFileInput.value = "";
    document.getElementById("csvFileName").textContent = "No file selected";
    csvPreviewSection.hidden = true;
    csvMessage.textContent = "";
});

document.getElementById("saveCsvWords").addEventListener("click", () => {
    if (!csvEntries.length) {
        csvMessage.textContent = "There are no rows to import.";
        csvMessage.className = "form-message error";
        return;
    }
    validateAndSave(csvEntries, csvMessage);
    if (csvMessage.classList.contains("success")) {
        csvEntries = [];
        csvPreviewBody.innerHTML = "";
        csvPreviewSection.hidden = true;
        csvFileInput.value = "";
        document.getElementById("csvFileName").textContent = "No file selected";
    }
});

if (!manualRows.children.length) addManualRow();
manualRows.querySelectorAll(".manual-entry-row").forEach(updatePosSelect);


/* =====================================
   11. INITIALIZE
===================================== */

renderFlashcard();
renderSavedVocabulary();
document.getElementById("wordCount").textContent = vocabulary.length;

/* =====================================
   12. SPEAKING PRACTICE
===================================== */

const speakingModeButtons =
    document.querySelectorAll(".speaking-mode-btn");

const speakingModeIPAWord =
    document.getElementById("speakingIPAWord");

const speakingModeIPASpeech =
    document.getElementById("speakingIPASpeech");

const speakingModeWordSpeech =
    document.getElementById("speakingWordSpeech");

const speakingPrompt =
    document.getElementById("speakingPrompt");

const speakingInput =
    document.getElementById("speakingInput");

const speakingCheck =
    document.getElementById("speakingCheck");

const speakingNext =
    document.getElementById("speakingNext");

const speakingFeedback =
    document.getElementById("speakingFeedback");

const speakingTarget =
    document.getElementById("speakingTarget");

const speakingTranscript =
    document.getElementById("speakingTranscript");

const speakingRecord =
    document.getElementById("speakingRecord");

const speakingStatus =
    document.getElementById("speakingStatus");

let speakingMode = "ipa-word";
let speakingVocabulary = [];
let speakingCurrentItem = null;

let recognition = null;
let isRecognizing = false;


// Chỉ lấy từ thuộc Category Vocabulary
function getSpeakingVocabulary() {

    const uniqueWords = new Map();

    vocabulary.forEach(item => {

        if (
            item.category !== "Vocabulary" ||
            !item.word ||
            !item.ipa
        ) return;

        const key = item.word.trim().toLowerCase();

        if (!uniqueWords.has(key)) {
            uniqueWords.set(key, item);
        }
    });

    return [...uniqueWords.values()];
}


// Lấy một từ ngẫu nhiên
function getRandomSpeakingWord() {

    speakingVocabulary = getSpeakingVocabulary();

    if (!speakingVocabulary.length) {
        speakingCurrentItem = null;

        speakingPrompt.textContent =
            "No Vocabulary words available.";

        speakingFeedback.textContent =
            "Add words in the Vocabulary category first.";

        speakingTarget.textContent = "";
        speakingInput.value = "";

        speakingNext.disabled = true;

        return;
    }

    speakingNext.disabled = false;

    let availableWords = speakingVocabulary.filter(item =>
        item.word.toLowerCase() !==
        (speakingCurrentItem?.word || "").toLowerCase()
    );

    if (!availableWords.length) {
        availableWords = speakingVocabulary;
    }

    speakingCurrentItem =
        availableWords[
            Math.floor(Math.random() * availableWords.length)
        ];

    renderSpeakingQuestion();
}


// Hiển thị câu hỏi theo chế độ
function renderSpeakingQuestion() {

    if (!speakingCurrentItem) return;

    speakingInput.value = "";
    speakingTranscript.textContent = "";
    speakingTarget.textContent = "";

    speakingFeedback.textContent = "";
    speakingFeedback.className = "speaking-feedback";

    speakingStatus.textContent = "";

    if (speakingMode === "ipa-word") {

        speakingPrompt.textContent =
            speakingCurrentItem.ipa;

        speakingInput.hidden = false;
        speakingCheck.hidden = false;

        speakingRecord.hidden = true;
        speakingTranscript.hidden = true;

    }

    else if (speakingMode === "ipa-speech") {

        speakingPrompt.textContent =
            speakingCurrentItem.ipa;

        speakingInput.hidden = true;
        speakingCheck.hidden = true;

        speakingRecord.hidden = false;
        speakingTranscript.hidden = false;

    }

    else if (speakingMode === "word-speech") {

        speakingPrompt.textContent =
            speakingCurrentItem.word;

        speakingInput.hidden = true;
        speakingCheck.hidden = true;

        speakingRecord.hidden = false;
        speakingTranscript.hidden = false;

    }
}


// Chuyển chế độ Speaking
function switchSpeakingMode(mode) {

    speakingMode = mode;

    speakingModeButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.speakingMode === mode
        );
    });

    speakingModeIPAWord.hidden = mode !== "ipa-word";
    speakingModeIPASpeech.hidden = mode !== "ipa-speech";
    speakingModeWordSpeech.hidden = mode !== "word-speech";

    stopSpeakingRecognition();

    getRandomSpeakingWord();
}


// Khởi tạo Speaking
function initializeSpeaking() {

    switchSpeakingMode(speakingMode);

}


// Kiểm tra đáp án nhập bằng bàn phím
function checkSpeakingWord() {

    if (!speakingCurrentItem) return;

    const answer = speakingInput.value
        .trim()
        .toLowerCase();

    const correctAnswer = speakingCurrentItem.word
        .trim()
        .toLowerCase();

    if (!answer) {

        speakingFeedback.textContent =
            "Please enter your answer.";

        speakingFeedback.className =
            "speaking-feedback incorrect";

        return;
    }

    if (answer === correctAnswer) {

        speakingFeedback.textContent =
            "✓ Correct! Well done.";

        speakingFeedback.className =
            "speaking-feedback correct";

    } else {

        speakingFeedback.textContent =
            "Not quite. Try again!";

        speakingFeedback.className =
            "speaking-feedback incorrect";
    }

}


// Tạo Speech Recognition
function createSpeakingRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        speakingStatus.textContent =
            "Speech Recognition is not supported. Please use Google Chrome.";

        speakingRecord.disabled = true;

        return null;
    }

    const instance = new SpeechRecognition();

    instance.lang = "en-US";
    instance.continuous = false;
    instance.interimResults = false;
    instance.maxAlternatives = 1;

    instance.onstart = () => {

        isRecognizing = true;

        speakingRecord.textContent = "Listening...";
        speakingStatus.textContent =
            "Listening. Speak clearly.";

    };

    instance.onresult = event => {

        const transcript =
            event.results[0][0].transcript.trim();

        speakingTranscript.textContent =
            transcript;

        checkRecognizedWord(transcript);

    };

    instance.onerror = event => {

        speakingStatus.textContent =
            event.error === "not-allowed"
                ? "Microphone permission was denied."
                : "Could not recognize your speech. Please try again.";

    };

    instance.onend = () => {

        isRecognizing = false;

        speakingRecord.textContent = "Start speaking";

    };

    return instance;
}


// Kiểm tra từ được nhận diện
function checkRecognizedWord(transcript) {

    if (!speakingCurrentItem) return;

    const normalize = text =>
        text.toLowerCase()
            .replace(/[^a-z]/g, "")
            .trim();

    const recognized = normalize(transcript);
    const correct = normalize(speakingCurrentItem.word);

    speakingTarget.textContent =
        `Target word: ${speakingCurrentItem.word}`;

    if (recognized === correct) {

        speakingFeedback.textContent =
            "✓ The browser recognized the correct word!";

        speakingFeedback.className =
            "speaking-feedback correct";

    } else {

        speakingFeedback.textContent =
            "The recognized word is different. Try again!";

        speakingFeedback.className =
            "speaking-feedback incorrect";
    }

}


// Bắt đầu hoặc dừng ghi âm
function toggleSpeakingRecognition() {

    if (!recognition) {
        recognition = createSpeakingRecognition();
    }

    if (!recognition) return;

    if (isRecognizing) {

        recognition.stop();
        return;

    }

    speakingTranscript.textContent = "";
    speakingTarget.textContent = "";
    speakingFeedback.textContent = "";

    try {
        recognition.start();
    } catch (error) {
        speakingStatus.textContent =
            "Please wait a moment before trying again.";
    }

}


// Dừng nhận diện giọng nói
function stopSpeakingRecognition() {

    if (recognition && isRecognizing) {
        recognition.stop();
    }

}


// Sự kiện chuyển chế độ
speakingModeButtons.forEach(button => {

    button.addEventListener("click", () => {

        switchSpeakingMode(
            button.dataset.speakingMode
        );

    });

});


// Sự kiện kiểm tra đáp án
speakingCheck.addEventListener(
    "click",
    checkSpeakingWord
);


// Enter để kiểm tra
speakingInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        checkSpeakingWord();
    }

});


// Ghi âm
speakingRecord.addEventListener(
    "click",
    toggleSpeakingRecognition
);


// Từ tiếp theo
speakingNext.addEventListener("click", () => {

    stopSpeakingRecognition();

    getRandomSpeakingWord();

});

/* =====================================
   13. READING LIBRARY
===================================== */
const readingSearch = document.getElementById("readingSearch");
const readingSort = document.getElementById("readingSort");
const readingLevelFilters = document.getElementById("readingLevelFilters");
const readingTopicFilters = document.getElementById("readingTopicFilters");
const readingQuickList = document.getElementById("readingQuickList");
const readingExerciseList = document.getElementById("readingExerciseList");
const readingExerciseView = document.getElementById("readingExerciseView");
let readingExercises = [];
let readingLevel = "all";
let readingTopic = "all";
let currentReadingExercise = null;
let readingInitialized = false;
let readingCompleted = new Set(JSON.parse(localStorage.getItem("ag-reading-completed-v1") || "[]"));

function escapeReadingHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function getFilteredReadingExercises() {
    const query = readingSearch.value.trim().toLowerCase();
    return readingExercises.filter(item => {
        const matchesLevel = readingLevel === "all" || item.level === readingLevel;
        const matchesTopic = readingTopic === "all" || (item.topics || []).includes(readingTopic);
        const searchable = [item.title, item.summary, ...(item.topics || [])].join(" ").toLowerCase();
        return matchesLevel && matchesTopic && (!query || searchable.includes(query));
    }).sort((a,b) => {
        if (readingSort.value === "title") return a.title.localeCompare(b.title);
        const diff = new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0);
        return readingSort.value === "oldest" ? -diff : diff;
    });
}
function readingCard(item) {
    const tags = (item.topics || []).slice(0,3).map(t => '<span class="reading-topic-tag">'+escapeReadingHTML(t)+'</span>').join("");
    const done = readingCompleted.has(item.id);
    return '<article class="reading-card glass"><div class="reading-card-top"><span class="reading-level-tag">'+escapeReadingHTML(item.level)+'</span><span class="reading-format-tag">'+(item.format === "quick" ? "QUICK EXERCISE" : "READING PASSAGE")+'</span></div><h3>'+escapeReadingHTML(item.title)+'</h3><p>'+escapeReadingHTML(item.summary || "")+'</p><div class="reading-topic-tags">'+tags+'</div><div class="reading-card-bottom"><span>'+(item.questions || []).length+' question(s)</span><button type="button" class="reading-open-btn" data-reading-id="'+escapeReadingHTML(item.id)+'">'+(done ? "Review again" : "Start reading")+' →</button></div>'+(done ? '<span class="reading-done-mark">✓ Completed</span>' : '')+'</article>';
}
function updateReadingStats() {
    const total = readingExercises.length;
    const done = readingExercises.filter(item => readingCompleted.has(item.id)).length;
    document.getElementById("readingTotalCount").textContent = total;
    document.getElementById("readingCompletedCount").textContent = done;
    document.getElementById("readingProgressPercent").textContent = total ? Math.round(done / total * 100)+"%" : "0%";
}
function renderReadingLibrary() {
    const filtered = getFilteredReadingExercises();
    const quick = filtered.filter(item => item.format === "quick").slice(0,3);
    readingQuickList.innerHTML = quick.length ? quick.map(readingCard).join("") : '<p class="reading-no-quick">No quick exercises match the current filters.</p>';
    readingExerciseList.innerHTML = filtered.map(readingCard).join("");
    document.getElementById("readingEmptyState").hidden = filtered.length > 0;
    document.getElementById("readingResultCount").textContent = 'Showing '+filtered.length+' of '+readingExercises.length+' exercises';
    updateReadingStats();
}
async function initializeReadingPage() {
    if (readingInitialized) { renderReadingLibrary(); return; }
    readingInitialized = true;
    try {
        const response = await fetch("json/reading.json");
        if (!response.ok) throw new Error("Unable to load json/reading.json");
        readingExercises = await response.json();
        if (!Array.isArray(readingExercises)) throw new Error("Reading data must be an array");
        document.getElementById("readingLoadError").hidden = true;
        renderReadingLibrary();
    } catch (error) {
        console.error("Reading library:", error);
        document.getElementById("readingLoadError").hidden = false;
    }
}

/* =====================================
   READING WORD LOOKUP & VOCABULARY SAVE
===================================== */
const readingWordPopup = document.getElementById("readingWordPopup");
const readingPopupWord = document.getElementById("readingPopupWord");
const readingTranslateWord = document.getElementById("readingTranslateWord");
const readingTranslationResult = document.getElementById("readingTranslationResult");
const readingIpaResult = document.getElementById("readingIpaResult");
const readingPosResult = document.getElementById("readingPosResult");
const readingAddWord = document.getElementById("readingAddWord");
let selectedReadingWord = "";
let translatedReadingWord = "";
let lookedUpReadingIpa = "";
let lookedUpReadingPos = "Other";

function closeReadingWordPopup() {
    readingWordPopup.hidden = true;
    selectedReadingWord = "";
    translatedReadingWord = "";
    lookedUpReadingIpa = "";
    lookedUpReadingPos = "Other";
}

function showReadingWordPopup(word, rect) {
    selectedReadingWord = word;
    translatedReadingWord = "";
    lookedUpReadingIpa = "";
    lookedUpReadingPos = "Other";
    readingPopupWord.textContent = word;
    readingTranslationResult.textContent = "";
    readingIpaResult.textContent = "";
    readingPosResult.textContent = "";
    readingAddWord.hidden = true;
    readingTranslateWord.disabled = false;
    readingTranslateWord.textContent = "Translate and find word details";
    readingWordPopup.hidden = false;

    const popupWidth = Math.min(290, window.innerWidth - 28);
    const left = Math.max(14, Math.min(rect.left + rect.width / 2 - popupWidth / 2, window.innerWidth - popupWidth - 14));
    const estimatedHeight = 205;
    const top = rect.bottom + estimatedHeight < window.innerHeight
        ? rect.bottom + 10
        : Math.max(14, rect.top - estimatedHeight - 10);
    readingWordPopup.style.left = left + "px";
    readingWordPopup.style.top = top + "px";
}

function handleReadingTextSelection() {
    const passage = document.getElementById("readingPassage");
    const selection = window.getSelection();
    if (!passage || !selection || selection.isCollapsed || !selection.rangeCount) return;
    const text = selection.toString().trim();
    if (!/^[A-Za-z]+(?:['’-][A-Za-z]+)*$/.test(text)) return;
    const range = selection.getRangeAt(0);
    if (!passage.contains(range.commonAncestorContainer)) return;
    showReadingWordPopup(text, range.getBoundingClientRect());
}

document.addEventListener("mouseup", event => {
    if (readingWordPopup.contains(event.target)) return;
    window.setTimeout(handleReadingTextSelection, 0);
});
document.addEventListener("keyup", event => {
    if (["Shift", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        handleReadingTextSelection();
    }
});
document.getElementById("readingPopupClose").addEventListener("click", closeReadingWordPopup);
window.addEventListener("scroll", closeReadingWordPopup, true);
window.addEventListener("resize", closeReadingWordPopup);

readingTranslateWord.addEventListener("click", async () => {
    if (!selectedReadingWord) return;
    const word = selectedReadingWord;
    readingTranslateWord.disabled = true;
    readingTranslateWord.textContent = "Looking up...";
    readingTranslationResult.textContent = "Translating and checking the dictionary...";
    readingIpaResult.textContent = "";
    readingPosResult.textContent = "";
    readingAddWord.hidden = true;

    const translationTask = (async () => {
        const params = new URLSearchParams({ q: word, langpair: "en|vi" });
        const response = await fetch("https://api.mymemory.translated.net/get?" + params.toString());
        if (!response.ok) throw new Error("Translation service is unavailable.");
        const data = await response.json();
        const meaning = data?.responseData?.translatedText?.trim();
        if (Number(data?.responseStatus) !== 200 || !meaning || meaning.toLowerCase() === word.toLowerCase()) {
            throw new Error(data?.responseDetails || "No Vietnamese translation was found.");
        }
        return meaning;
    })();

    const dictionaryTask = (async () => {
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word.toLowerCase()));
        if (!response.ok) throw new Error("Dictionary entry not found.");
        const data = await response.json();
        if (!Array.isArray(data) || !data.length) throw new Error("No dictionary entry found.");
        const entries = data;
        const ipa = entries.map(entry => entry.phonetic || (entry.phonetics || []).find(item => item.text)?.text || "")
            .find(Boolean) || "";
        const meanings = entries.flatMap(entry => entry.meanings || []);
        const rawPos = meanings.find(item => item.partOfSpeech)?.partOfSpeech || "";
        const pos = POS_OPTIONS.find(option => option.toLowerCase() === rawPos.toLowerCase()) || "Other";
        return { ipa, pos, rawPos };
    })();

    const [translationResult, dictionaryResult] = await Promise.allSettled([translationTask, dictionaryTask]);

    if (translationResult.status === "fulfilled") {
        translatedReadingWord = translationResult.value;
        readingTranslationResult.textContent = "Vietnamese: " + translatedReadingWord;
        readingAddWord.hidden = false;
    } else {
        readingTranslationResult.textContent = "Vietnamese translation is unavailable right now. You can try again later.";
        console.warn("Word translation:", translationResult.reason);
    }

    if (dictionaryResult.status === "fulfilled") {
        lookedUpReadingIpa = dictionaryResult.value.ipa;
        lookedUpReadingPos = dictionaryResult.value.pos;
        readingIpaResult.textContent = "IPA: " + (lookedUpReadingIpa || "Not available");
        readingPosResult.textContent = "Part of speech: " + (dictionaryResult.value.rawPos
            ? dictionaryResult.value.rawPos.charAt(0).toUpperCase() + dictionaryResult.value.rawPos.slice(1)
            : "Not available");
    } else {
        lookedUpReadingIpa = "";
        lookedUpReadingPos = "Other";
        readingIpaResult.textContent = "IPA: Not available";
        readingPosResult.textContent = "Part of speech: Not available";
        console.warn("Dictionary lookup:", dictionaryResult.reason);
    }

    readingTranslateWord.disabled = false;
    readingTranslateWord.textContent = "Look up again";
});

readingAddWord.addEventListener("click", () => {
    if (!selectedReadingWord || !translatedReadingWord) return;
    const wordToAdd = selectedReadingWord;
    const meaningToAdd = translatedReadingWord;
    const ipaToAdd = lookedUpReadingIpa;
    const posToAdd = lookedUpReadingPos;

    closeReadingWordPopup();
    openPage("vocabulary");
    switchStudyMode("add");

    const firstRow = manualRows.querySelector(".manual-entry-row");
    if (!firstRow) addManualRow({ word: wordToAdd, ipa: ipaToAdd, meaning: meaningToAdd, pos: posToAdd });
    else {
        firstRow.querySelector("[data-field='word']").value = wordToAdd;
        firstRow.querySelector("[data-field='ipa']").value = ipaToAdd;
        firstRow.querySelector("[data-field='meaning']").value = meaningToAdd;
        firstRow.querySelector("[data-field='category']").value = "Vocabulary";
        updatePosSelect(firstRow);
        firstRow.querySelector("[data-field='pos']").value = POS_OPTIONS.includes(posToAdd) ? posToAdd : "Other";
    }

    manualMessage.textContent = "Check the word, IPA, part of speech and meaning, then save it to your Vocabulary.";
    manualMessage.className = "form-message";
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("mousedown", event => {
    if (!readingWordPopup.hidden && !readingWordPopup.contains(event.target)) {
        // Keep the popup while the user selects a different word in the passage.
        if (!document.getElementById("readingPassage").contains(event.target)) closeReadingWordPopup();
    }
});

function openReadingExercise(id) {
    const item = readingExercises.find(ex => ex.id === id);
    if (!item) return;
    currentReadingExercise = item;
    document.getElementById("readingExerciseTitle").textContent = item.title;
    document.getElementById("readingExerciseMeta").textContent = item.level+" · "+(item.topics || []).join(" / ");
    document.getElementById("readingPassage").innerHTML = (item.passage || "").split(/\n\n+/).map(p => "<p>"+escapeReadingHTML(p)+"</p>").join("");
    document.getElementById("readingQuestions").innerHTML = (item.questions || []).map((q,i) => {
        const type = q.type || "multiple-choice";
        let controls;
        if (type === "short-answer") controls = '<input class="reading-short-answer" type="text" aria-label="Answer to question '+(i+1)+'" placeholder="Type your answer...">';
        else {
            const opts = type === "true-false-not-given" ? ["TRUE","FALSE","NOT GIVEN"] : (type === "true-false" ? ["True","False"] : (q.options || []));
            controls = '<div class="reading-options">'+opts.map(option => '<label class="reading-option"><input type="radio" name="reading-question-'+i+'" value="'+escapeReadingHTML(option)+'"><span>'+escapeReadingHTML(option)+'</span></label>').join("")+'</div>';
        }
        return '<article class="reading-question" data-question-index="'+i+'"><h3><span>Q'+(i+1)+'</span>'+escapeReadingHTML(q.question)+'</h3>'+controls+'<div class="reading-question-feedback" hidden></div></article>';
    }).join("");
    document.getElementById("readingScore").textContent = "";
    document.getElementById("readingResultMessage").hidden = true;
    document.getElementById("readingTryAnother").hidden = true;
    document.getElementById("readingSubmitAnswers").hidden = false;
    readingExerciseView.hidden = false;
    readingExerciseView.scrollIntoView({behavior:"smooth",block:"start"});
}
function submitReadingAnswers() {
    if (!currentReadingExercise) return;
    let score = 0;
    const questions = currentReadingExercise.questions || [];
    questions.forEach((q,i) => {
        const card = document.querySelector('.reading-question[data-question-index="'+i+'"]');
        const input = card.querySelector(".reading-short-answer");
        const selected = card.querySelector('input[type="radio"]:checked');
        const answer = (input ? input.value : selected?.value || "").trim();
        const correct = answer.toLowerCase() === String(q.answer ?? "").trim().toLowerCase();
        if (correct) score++;
        const feedback = card.querySelector(".reading-question-feedback");
        feedback.hidden = false;
        feedback.className = "reading-question-feedback "+(correct ? "correct" : "incorrect");
        feedback.innerHTML = '<strong>'+(correct ? "Correct!" : "Not quite.")+'</strong> '+(!correct ? 'Correct answer: '+escapeReadingHTML(q.answer)+'. ' : '')+escapeReadingHTML(q.explanation || "");
        card.classList.toggle("answered-correct",correct);
        card.classList.toggle("answered-incorrect",!correct);
    });
    const percent = questions.length ? Math.round(score/questions.length*100) : 0;
    document.getElementById("readingScore").textContent = "Score: "+score+" / "+questions.length+" ("+percent+"%)";
    const result = document.getElementById("readingResultMessage");
    result.textContent = percent >= 70 ? "Well done! You have completed this exercise." : "Exercise checked! Review the explanations and try again when you are ready.";
    result.hidden = false;
    if (questions.length && score === questions.length) {
        readingCompleted.add(currentReadingExercise.id);
        localStorage.setItem("ag-reading-completed-v1",JSON.stringify([...readingCompleted]));
    }
    document.getElementById("readingSubmitAnswers").hidden = true;
    document.getElementById("readingTryAnother").hidden = false;
    renderReadingLibrary();
}
readingLevelFilters.addEventListener("click",event => {
    const btn = event.target.closest("[data-level]");
    if (!btn) return;
    readingLevel = btn.dataset.level;
    readingLevelFilters.querySelectorAll(".reading-chip").forEach(chip => chip.classList.toggle("active",chip===btn));
    renderReadingLibrary();
});
readingTopicFilters.addEventListener("click",event => {
    const btn = event.target.closest("[data-topic]");
    if (!btn) return;
    readingTopic = btn.dataset.topic;
    readingTopicFilters.querySelectorAll(".reading-chip").forEach(chip => chip.classList.toggle("active",chip===btn));
    renderReadingLibrary();
});
readingSearch.addEventListener("input",renderReadingLibrary);
readingSort.addEventListener("change",renderReadingLibrary);
document.getElementById("readingResetFilters").addEventListener("click",() => {
    readingLevel="all"; readingTopic="all"; readingSearch.value="";
    readingLevelFilters.querySelectorAll(".reading-chip").forEach(chip => chip.classList.toggle("active",chip.dataset.level==="all"));
    readingTopicFilters.querySelectorAll(".reading-chip").forEach(chip => chip.classList.toggle("active",chip.dataset.topic==="all"));
    renderReadingLibrary();
});
document.getElementById("readingRandomQuick").addEventListener("click",() => {
    const pool = getFilteredReadingExercises().filter(item => item.format==="quick");
    if (!pool.length) { document.getElementById("readingResultCount").textContent="No quick exercises match these filters."; return; }
    openReadingExercise(pool[Math.floor(Math.random()*pool.length)].id);
});
[readingQuickList,readingExerciseList].forEach(container => container.addEventListener("click",event => {
    const btn=event.target.closest("[data-reading-id]");
    if (btn) openReadingExercise(btn.dataset.readingId);
}));
document.getElementById("readingSubmitAnswers").addEventListener("click",submitReadingAnswers);
document.getElementById("readingBackToLibrary").addEventListener("click",() => { readingExerciseView.hidden=true; currentReadingExercise=null; });
document.getElementById("readingTryAnother").addEventListener("click",() => {
    readingExerciseView.hidden=true; currentReadingExercise=null;
    document.getElementById("readingExerciseList").scrollIntoView({behavior:"smooth",block:"start"});
});