/* =========================================================
   UNTITLED MONEY GAEM.
   ========================================================= */


/* ==================== STATE ==================== */

let money = 3500000;
let savings = 0;

let happiness = 70;
let health = 50;

let day = 1;

let xp = 0;
let level = 1;

let currentEvent = null;
let decisionMade = false;

let unlockedAchievements = [];
let unlockedCollectibles = [];

let language = localStorage.getItem("umg-language") || "en";
let theme = localStorage.getItem("umg-theme") || "light";


/* ==================== TRANSLATIONS ==================== */

const translations = {

    en: {

        start: "start game",
        options: "options",
        credits: "credits",

        subtitle: "learn money. make choices. try not to go broke.",

        dictionary: "dictionary",

        balance: "balance",
        savings: "savings",
        happiness: "happiness",
        health: "financial health",

        level: "level",
        xp: "xp",
        day: "day",

        achievements: "achievements",
        collectibles: "collectibles",
        activity: "activity",

        restart: "restart game",
        next: "next day",

        tutorial: [
            {
                title: "welcome to untitled money gaem.",
                text: "you start with rp3,500,000 and 30 days to manage your finances."
            },
            {
                title: "your stats matter",
                text: "balance and savings affect your money, while happiness and financial health measure how well you're doing."
            },
            {
                title: "there isn't always one answer",
                text: "spending money can improve happiness. saving can improve financial health. balance is the point."
            },
            {
                title: "watch out",
                text: "scams, impulse purchases, debt and bad investments can hurt your financial situation."
            }
        ],

        back: "back",
        nextTutorial: "next",
        finishTutorial: "start",

        dictionaryTitle: "financial dictionary",
        dictionarySubtitle: "english → indonesian",
        search: "search a term...",

        optionsTitle: "options",
        language: "language",
        theme: "theme",
        light: "light",
        dark: "dark",
        english: "english",
        indonesia: "indonesia",

        creditsTitle: "credits",
        creditsDescription: "an educational financial literacy web game",
        creditsFooter: "made for educational purposes",

        finalReport: "final report",
        totalMoney: "total money",
        finalSavings: "savings",
        finalHappiness: "happiness",
        finalHealth: "financial health",
        finalAchievements: "achievements",
        playAgain: "play again",

        achievementUnlocked: "achievement unlocked",
        collectibleUnlocked: "collectible unlocked",

        endings: {
            master: {
                title: "financial master",
                message: "you managed your money while keeping both your finances and happiness healthy."
            },

            strong: {
                title: "financially strong",
                message: "you made mostly responsible decisions and maintained a good balance."
            },

            solid: {
                title: "pretty solid",
                message: "you made some mistakes, but your overall financial situation stayed healthy."
            },

            learning: {
                title: "still learning",
                message: "some decisions hurt your finances, but you still have room to improve."
            },

            chaos: {
                title: "financial chaos",
                message: "your finances took a serious hit. time to rethink those decisions."
            }
        }
    },


    id: {

        start: "mulai game",
        options: "opsi",
        credits: "kredit",

        subtitle: "belajar uang. buat pilihan. jangan sampai bangkrut.",

        dictionary: "kamus",

        balance: "saldo",
        savings: "tabungan",
        happiness: "kebahagiaan",
        health: "kesehatan finansial",

        level: "level",
        xp: "xp",
        day: "hari",

        achievements: "pencapaian",
        collectibles: "koleksi",
        activity: "aktivitas",

        restart: "mulai ulang",
        next: "hari berikutnya",

        tutorial: [
            {
                title: "selamat datang di untitled money gaem.",
                text: "kamu mulai dengan rp3.500.000 dan punya 30 hari untuk mengatur keuangan."
            },
            {
                title: "statistikmu penting",
                text: "saldo dan tabungan memengaruhi uangmu, sementara kebahagiaan dan kesehatan finansial menunjukkan kondisimu."
            },
            {
                title: "tidak selalu ada satu jawaban",
                text: "mengeluarkan uang bisa meningkatkan kebahagiaan. menabung bisa meningkatkan kesehatan finansial. yang penting adalah keseimbangan."
            },
            {
                title: "hati-hati",
                text: "penipuan, pembelian impulsif, utang, dan investasi buruk dapat merusak kondisi keuanganmu."
            }
        ],

        back: "kembali",
        nextTutorial: "lanjut",
        finishTutorial: "mulai",

        dictionaryTitle: "kamus finansial",
        dictionarySubtitle: "english → indonesia",
        search: "cari istilah...",

        optionsTitle: "opsi",
        language: "bahasa",
        theme: "tema",
        light: "terang",
        dark: "gelap",
        english: "english",
        indonesia: "indonesia",

        creditsTitle: "kredit",
        creditsDescription: "web game edukasi literasi keuangan",
        creditsFooter: "dibuat untuk tujuan edukasi",

        finalReport: "laporan akhir",
        totalMoney: "total uang",
        finalSavings: "tabungan",
        finalHappiness: "kebahagiaan",
        finalHealth: "kesehatan finansial",
        finalAchievements: "pencapaian",
        playAgain: "main lagi",

        achievementUnlocked: "pencapaian terbuka",
        collectibleUnlocked: "koleksi terbuka",

        endings: {
            master: {
                title: "master finansial",
                message: "kamu berhasil menjaga keuangan sekaligus mempertahankan kebahagiaan."
            },

            strong: {
                title: "keuangan kuat",
                message: "kamu membuat sebagian besar keputusan dengan bertanggung jawab dan menjaga keseimbangan."
            },

            solid: {
                title: "cukup solid",
                message: "ada beberapa kesalahan, tetapi kondisi keuanganmu secara keseluruhan masih sehat."
            },

            learning: {
                title: "masih belajar",
                message: "beberapa keputusan merugikan keuanganmu, tetapi masih banyak ruang untuk berkembang."
            },

            chaos: {
                title: "keuangan kacau",
                message: "kondisi keuanganmu terkena dampak cukup besar. saatnya mengevaluasi keputusanmu."
            }
        }
    }

};


/* ==================== DICTIONARY ==================== */

const dictionary = [

    ["income", "pendapatan"],
    ["expense", "pengeluaran"],
    ["budget", "anggaran"],
    ["savings", "tabungan"],
    ["investment", "investasi"],
    ["interest", "bunga"],
    ["debt", "utang"],
    ["emergency fund", "dana darurat"],
    ["scam", "penipuan"],
    ["phishing", "phishing"],
    ["digital payment", "pembayaran digital"],
    ["needs", "kebutuhan"],
    ["wants", "keinginan"],
    ["financial health", "kesehatan finansial"],
    ["budgeting", "penganggaran"],
    ["diversification", "diversifikasi"],
    ["risk", "risiko"],
    ["profit", "keuntungan"],
    ["loss", "kerugian"],
    ["transaction", "transaksi"]
];


/* ==================== ACHIEVEMENTS ==================== */

const achievements = [

    {
        id: "scam-survivor",
        icon: "shield",
        name: "scam survivor",
        description: "avoid a scam or phishing attempt"
    },

    {
        id: "digital-spender",
        icon: "wallet",
        name: "digital spender",
        description: "make a responsible digital payment"
    },

    {
        id: "first-investor",
        icon: "chart",
        name: "first investor",
        description: "make an investment decision"
    },

    {
        id: "emergency-ready",
        icon: "safe",
        name: "emergency ready",
        description: "build an emergency fund"
    },

    {
        id: "balanced-life",
        icon: "balance",
        name: "balanced life",
        description: "reach 90 happiness and 90 health"
    },

    {
        id: "impulse-control",
        icon: "pause",
        name: "impulse control",
        description: "reject an impulse purchase"
    },

    {
        id: "budget-master",
        icon: "budget",
        name: "budget master",
        description: "make a budgeting decision"
    },

    {
        id: "goal-setter",
        icon: "target",
        name: "goal setter",
        description: "choose a savings goal"
    }

];


/* ==================== COLLECTIBLES ==================== */

const collectibles = [

    {
        id: "scam-shield",
        icon: "shield",
        name: "scam shield",
        description: "earned by avoiding scams"
    },

    {
        id: "market-chart",
        icon: "chart",
        name: "market chart",
        description: "earned by exploring investments"
    },

    {
        id: "emergency-card",
        icon: "safe",
        name: "emergency fund",
        description: "earned by preparing for emergencies"
    },

    {
        id: "balance-card",
        icon: "balance",
        name: "balance card",
        description: "earned by maintaining balance"
    },

    {
        id: "risk-card",
        icon: "risk",
        name: "risk card",
        description: "earned by understanding financial risk"
    },

    {
        id: "goal-card",
        icon: "target",
        name: "goal card",
        description: "earned by setting a savings goal"
    }

];


/* ==================== 30 EVENTS ==================== */

const events = [

    {
        title: "new sneakers",
        description: "you really want new sneakers. what do you do?",
        image: "images/sneakers.jpg",
        options: [
            {
                text: "buy them for rp750,000",
                action: () => {
                    money -= 750000;
                    happiness += 15;
                    health -= 5;
                }
            },
            {
                text: "wait and save first",
                action: () => {
                    health += 5;
                    unlockAchievement("impulse-control");
                }
            },
            {
                text: "find a cheaper option",
                action: () => {
                    money -= 350000;
                    happiness += 8;
                    health += 2;
                }
            }
        ]
    },


    {
        title: "lunch with friends",
        description: "your friends invite you to an expensive lunch. what do you do?",
        image: "images/lunch.jpg",
        options: [
            {
                text: "go and spend rp150,000",
                action: () => {
                    money -= 150000;
                    happiness += 12;
                }
            },
            {
                text: "choose a cheaper place",
                action: () => {
                    money -= 60000;
                    happiness += 7;
                    health += 2;
                }
            },
            {
                text: "skip it to save money",
                action: () => {
                    health += 4;
                    happiness -= 5;
                }
            }
        ]
    },


    {
        title: "suspicious message",
        description: "you receive a message saying you won a prize and need to click a link.",
        image: "images/scam.jpg",
        options: [
            {
                text: "click the link",
                action: () => {
                    money -= 250000;
                    health -= 15;
                }
            },
            {
                text: "ignore and report it",
                action: () => {
                    health += 8;
                    unlockAchievement("scam-survivor");
                    unlockCollectible("scam-shield");
                }
            },
            {
                text: "ask a trusted adult first",
                action: () => {
                    health += 5;
                    unlockAchievement("scam-survivor");
                }
            }
        ]
    },


    {
        title: "digital wallet",
        description: "you want to start using a digital wallet. what should you consider?",
        image: "images/wallet.jpg",
        options: [
            {
                text: "security and transaction fees",
                action: () => {
                    health += 6;
                    unlockAchievement("digital-spender");
                }
            },
            {
                text: "only how cool the app looks",
                action: () => {
                    happiness += 2;
                    health -= 2;
                }
            },
            {
                text: "use it without checking anything",
                action: () => {
                    health -= 6;
                }
            }
        ]
    },


    {
        title: "investment opportunity",
        description: "someone offers an investment with guaranteed huge returns.",
        image: "images/investment.jpg",
        options: [
            {
                text: "invest immediately",
                action: () => {
                    money -= 500000;
                    health -= 12;
                }
            },
            {
                text: "research it first",
                action: () => {
                    health += 7;
                    unlockAchievement("first-investor");
                    unlockCollectible("market-chart");
                }
            },
            {
                text: "avoid guaranteed-return claims",
                action: () => {
                    health += 8;
                    unlockCollectible("risk-card");
                }
            }
        ]
    },


    {
        title: "emergency repair",
        description: "something important suddenly needs repairing.",
        image: "images/repair.jpg",
        options: [
            {
                text: "pay using emergency savings",
                action: () => {
                    const amount = Math.min(savings, 400000);
                    savings -= amount;
                    money -= Math.max(0, 400000 - amount);
                    health += 5;
                    unlockAchievement("emergency-ready");
                }
            },
            {
                text: "use all your spending money",
                action: () => {
                    money -= 400000;
                    happiness -= 3;
                }
            },
            {
                text: "borrow money",
                action: () => {
                    money += 400000;
                    health -= 8;
                }
            }
        ]
    },


    {
        title: "extra allowance",
        description: "you unexpectedly receive an extra rp300,000.",
        image: "images/money.jpg",
        options: [
            {
                text: "save most of it",
                action: () => {
                    savings += 250000;
                    health += 6;
                }
            },
            {
                text: "spend it all",
                action: () => {
                    happiness += 15;
                    health -= 5;
                }
            },
            {
                text: "split it between saving and fun",
                action: () => {
                    savings += 150000;
                    money += 0;
                    happiness += 8;
                    health += 3;
                }
            }
        ]
    },


    {
        title: "limited-time deal",
        description: "an online store says something is 70% off, but only for ten minutes.",
        image: "images/sale.jpg",
        options: [
            {
                text: "buy it immediately",
                action: () => {
                    money -= 350000;
                    happiness += 6;
                    health -= 5;
                }
            },
            {
                text: "check if you actually need it",
                action: () => {
                    health += 6;
                    unlockAchievement("impulse-control");
                }
            },
            {
                text: "close the store",
                action: () => {
                    health += 4;
                }
            }
        ]
    },


    {
        title: "weekly budget",
        description: "you have money for the week. how should you divide it?",
        image: "images/budget.jpg",
        options: [
            {
                text: "plan needs first",
                action: () => {
                    health += 7;
                    unlockAchievement("budget-master");
                }
            },
            {
                text: "spend first, calculate later",
                action: () => {
                    happiness += 5;
                    health -= 7;
                }
            },
            {
                text: "save everything",
                action: () => {
                    health += 8;
                    happiness -= 5;
                }
            }
        ]
    },


    {
        title: "new game",
        description: "a new game you really want just released.",
        image: "images/game.jpg",
        options: [
            {
                text: "buy it for rp300,000",
                action: () => {
                    money -= 300000;
                    happiness += 12;
                }
            },
            {
                text: "wait for a sale",
                action: () => {
                    health += 4;
                    unlockAchievement("impulse-control");
                }
            },
            {
                text: "decide you don't need it",
                action: () => {
                    health += 5;
                }
            }
        ]
    },


    {
        title: "bank interest",
        description: "your savings account earns interest. what does that mean?",
        image: "images/bank.jpg",
        options: [
            {
                text: "your savings earn extra money",
                action: () => {
                    savings += 50000;
                    health += 6;
                }
            },
            {
                text: "the bank takes money from savings",
                action: () => {
                    health -= 3;
                }
            },
            {
                text: "interest has nothing to do with savings",
                action: () => {
                    health -= 5;
                }
            }
        ]
    },


    {
        title: "subscription trap",
        description: "a cheap subscription automatically renews every month.",
        image: "images/subscription.jpg",
        options: [
            {
                text: "check the renewal terms",
                action: () => {
                    health += 6;
                }
            },
            {
                text: "subscribe because it's cheap",
                action: () => {
                    money -= 100000;
                    health -= 4;
                }
            },
            {
                text: "ignore the price completely",
                action: () => {
                    money -= 150000;
                    health -= 6;
                }
            }
        ]
    },


    {
        title: "friend wants a loan",
        description: "a friend asks to borrow money. what should you consider?",
        image: "images/loan.jpg",
        options: [
            {
                text: "whether you can afford to lose it",
                action: () => {
                    health += 6;
                }
            },
            {
                text: "lend your entire balance",
                action: () => {
                    money = 0;
                    happiness += 3;
                    health -= 10;
                }
            },
            {
                text: "borrow money to lend them",
                action: () => {
                    health -= 12;
                }
            }
        ]
    },


    {
        title: "online giveaway",
        description: "an online giveaway asks for your bank details.",
        image: "images/giveaway.jpg",
        options: [
            {
                text: "send the information",
                action: () => {
                    money -= 300000;
                    health -= 15;
                }
            },
            {
                text: "check whether the giveaway is legitimate",
                action: () => {
                    health += 7;
                    unlockAchievement("scam-survivor");
                }
            },
            {
                text: "leave the website",
                action: () => {
                    health += 6;
                    unlockCollectible("scam-shield");
                }
            }
        ]
    },


    {
        title: "needs vs wants",
        description: "you have limited money but need something important and want something fun.",
        image: "images/needs.jpg",
        options: [
            {
                text: "buy the need first",
                action: () => {
                    health += 7;
                    unlockAchievement("budget-master");
                }
            },
            {
                text: "buy the want first",
                action: () => {
                    happiness += 8;
                    health -= 6;
                }
            },
            {
                text: "compare prices for the need",
                action: () => {
                    health += 6;
                }
            }
        ]
    },


    {
        title: "discount psychology",
        description: "something is discounted from rp500,000 to rp350,000. does that mean you should buy it?",
        image: "images/discount.jpg",
        options: [
            {
                text: "only if you actually need it",
                action: () => {
                    health += 6;
                }
            },
            {
                text: "yes because it's cheaper",
                action: () => {
                    money -= 350000;
                    happiness += 4;
                    health -= 5;
                }
            },
            {
                text: "compare the price elsewhere first",
                action: () => {
                    health += 7;
                }
            }
        ]
    },


    {
        title: "unexpected gift",
        description: "you receive a large monetary gift. how could you use it?",
        image: "images/gift.jpg",
        options: [
            {
                text: "save most of it",
                action: () => {
                    savings += 300000;
                    health += 7;
                }
            },
            {
                text: "spend it all",
                action: () => {
                    happiness += 15;
                    health -= 7;
                }
            },
            {
                text: "split it between goals and fun",
                action: () => {
                    savings += 180000;
                    happiness += 8;
                    health += 4;
                }
            }
        ]
    },


    {
        title: "fake bank call",
        description: "someone calls claiming to be from your bank and asks for personal information.",
        image: "images/phone.jpg",
        options: [
            {
                text: "give them the information",
                action: () => {
                    money -= 400000;
                    health -= 15;
                }
            },
            {
                text: "hang up and contact the bank directly",
                action: () => {
                    health += 8;
                    unlockAchievement("scam-survivor");
                }
            },
            {
                text: "ask for their password",
                action: () => {
                    health += 2;
                }
            }
        ]
    },


    {
        title: "saving goal",
        description: "you want to save for something expensive. how should you approach it?",
        image: "images/goal.jpg",
        options: [
            {
                text: "set a specific target",
                action: () => {
                    savings += 150000;
                    health += 7;
                    unlockAchievement("goal-setter");
                    unlockCollectible("goal-card");
                }
            },
            {
                text: "save whatever is left",
                action: () => {
                    savings += 50000;
                    health += 2;
                }
            },
            {
                text: "buy it using debt",
                action: () => {
                    health -= 10;
                }
            }
        ]
    },


    {
        title: "borrowing money",
        description: "you want something but don't have enough money. should you borrow?",
        image: "images/borrowing.jpg",
        options: [
            {
                text: "consider whether the debt is necessary",
                action: () => {
                    health += 6;
                }
            },
            {
                text: "borrow immediately",
                action: () => {
                    money += 300000;
                    health -= 10;
                }
            },
            {
                text: "wait and save",
                action: () => {
                    health += 7;
                }
            }
        ]
    },


    {
        title: "investment research",
        description: "before investing, what should you do?",
        image: "images/research.jpg",
        options: [
            {
                text: "research risk and returns",
                action: () => {
                    health += 8;
                    unlockAchievement("first-investor");
                    unlockCollectible("market-chart");
                }
            },
            {
                text: "trust a random influencer",
                action: () => {
                    health -= 8;
                }
            },
            {
                text: "invest because everyone else does",
                action: () => {
                    health -= 10;
                }
            }
        ]
    },


    {
        title: "cash or digital?",
        description: "when paying for something, what should influence your payment method?",
        image: "images/payment.jpg",
        options: [
            {
                text: "security and convenience",
                action: () => {
                    health += 6;
                    unlockAchievement("digital-spender");
                }
            },
            {
                text: "use whatever is fastest",
                action: () => {
                    happiness += 2;
                }
            },
            {
                text: "never use digital payments",
                action: () => {
                    health -= 2;
                }
            }
        ]
    },


    {
        title: "birthday spending",
        description: "you want to spend a lot on your birthday. how can you balance fun and finances?",
        image: "images/birthday.jpg",
        options: [
            {
                text: "set a spending limit",
                action: () => {
                    happiness += 10;
                    health += 5;
                    unlockAchievement("balanced-life");
                }
            },
            {
                text: "spend without a limit",
                action: () => {
                    happiness += 15;
                    health -= 8;
                }
            },
            {
                text: "don't spend anything",
                action: () => {
                    health += 6;
                    happiness -= 8;
                }
            }
        ]
    },


    {
        title: "monthly review",
        description: "at the end of the month, what should you review?",
        image: "images/review.jpg",
        options: [
            {
                text: "income and expenses",
                action: () => {
                    health += 7;
                    unlockAchievement("budget-master");
                }
            },
            {
                text: "only your purchases",
                action: () => {
                    health += 2;
                }
            },
            {
                text: "nothing",
                action: () => {
                    health -= 5;
                }
            }
        ]
    },


    {
        title: "emergency fund",
        description: "why is having an emergency fund useful?",
        image: "images/emergency.jpg",
        options: [
            {
                text: "it helps with unexpected costs",
                action: () => {
                    savings += 200000;
                    health += 8;
                    unlockAchievement("emergency-ready");
                    unlockCollectible("emergency-card");
                }
            },
            {
                text: "it is only for investments",
                action: () => {
                    health -= 3;
                }
            },
            {
                text: "you never need one",
                action: () => {
                    health -= 7;
                }
            }
        ]
    },


    {
        title: "phishing website",
        description: "a website looks exactly like your bank but has a strange url.",
        image: "images/phishing.jpg",
        options: [
            {
                text: "check the official website instead",
                action: () => {
                    health += 8;
                    unlockAchievement("scam-survivor");
                    unlockCollectible("scam-shield");
                }
            },
            {
                text: "enter your password",
                action: () => {
                    money -= 350000;
                    health -= 15;
                }
            },
            {
                text: "download the app from the site",
                action: () => {
                    health -= 12;
                }
            }
        ]
    },


    {
        title: "saving too much?",
        description: "is saving every single rupiah always the best financial decision?",
        image: "images/saving.jpg",
        options: [
            {
                text: "no, balance matters",
                action: () => {
                    happiness += 8;
                    health += 5;
                    unlockAchievement("balanced-life");
                    unlockCollectible("balance-card");
                }
            },
            {
                text: "yes, never spend anything",
                action: () => {
                    health += 10;
                    happiness -= 12;
                }
            },
            {
                text: "spend everything instead",
                action: () => {
                    happiness += 12;
                    health -= 12;
                }
            }
        ]
    },


    {
        title: "financial advice",
        description: "someone online gives you financial advice. what should you check first?",
        image: "images/advice.jpg",
        options: [
            {
                text: "their credibility and evidence",
                action: () => {
                    health += 7;
                }
            },
            {
                text: "how many followers they have",
                action: () => {
                    health -= 3;
                }
            },
            {
                text: "whether they promise easy money",
                action: () => {
                    health += 6;
                    unlockCollectible("risk-card");
                }
            }
        ]
    },


    {
        title: "end-of-month bonus",
        description: "you receive an unexpected bonus. how should you allocate it?",
        image: "images/bonus.jpg",
        options: [
            {
                text: "save most and enjoy some",
                action: () => {
                    savings += 250000;
                    happiness += 7;
                    health += 5;
                }
            },
            {
                text: "spend it all",
                action: () => {
                    happiness += 15;
                    health -= 8;
                }
            },
            {
                text: "save all of it",
                action: () => {
                    savings += 350000;
                    health += 8;
                    happiness -= 4;
                }
            }
        ]
    },


    {
        title: "final financial decision",
        description: "you have money left at the end of the game. what is your overall strategy?",
        image: "images/final.jpg",
        options: [
            {
                text: "keep a balance between saving and enjoying",
                action: () => {
                    savings += 150000;
                    happiness += 6;
                    health += 6;
                    unlockAchievement("balanced-life");
                    unlockCollectible("balance-card");
                }
            },
            {
                text: "spend everything",
                action: () => {
                    happiness += 15;
                    health -= 15;
                }
            },
            {
                text: "save everything",
                action: () => {
                    savings += 250000;
                    health += 10;
                    happiness -= 8;
                }
            }
        ]
    }

];


/* ==================== HELPERS ==================== */

function t(key) {
    return translations[language][key];
}


function formatMoney(value) {
    return `rp${Math.max(0, Math.round(value)).toLocaleString("id-ID")}`;
}


function clampStats() {

    money = Math.max(0, money);
    savings = Math.max(0, savings);

    happiness = Math.max(0, Math.min(100, happiness));
    health = Math.max(0, Math.min(100, health));

}


/* ==================== UI ==================== */

function updateStats() {

    clampStats();

    document.getElementById("money").textContent = formatMoney(money);
    document.getElementById("savings").textContent = formatMoney(savings);

    document.getElementById("happiness").textContent = happiness;
    document.getElementById("health").textContent = health;

    document.getElementById("happiness-bar").style.width = `${happiness}%`;
    document.getElementById("health-bar").style.width = `${health}%`;

    document.getElementById("level").textContent = level;

    document.getElementById("xp-text").textContent = `${xp} / 100`;
    document.getElementById("xp-bar").style.width = `${xp}%`;

    document.getElementById("day").textContent = `${day} / 30`;

}


function updateLabels() {

    document.getElementById("dictionary-btn").textContent = t("dictionary");

    document.getElementById("game-options-btn").textContent = t("options");
    document.getElementById("game-credits-btn").textContent = t("credits");

    document.getElementById("balance-label").textContent = t("balance");
    document.getElementById("savings-label").textContent = t("savings");
    document.getElementById("happiness-label").textContent = t("happiness");
    document.getElementById("health-label").textContent = t("health");

    document.getElementById("level-label").textContent = t("level");
    document.getElementById("xp-label").textContent = t("xp");
    document.getElementById("day-label").textContent = t("day");

    document.getElementById("achievements-title").textContent = t("achievements");
    document.getElementById("collectibles-title").textContent = t("collectibles");
    document.getElementById("activity-title").textContent = t("activity");

    document.getElementById("restart-btn").textContent = t("restart");
    document.getElementById("next-btn").textContent = t("next");

    document.getElementById("cover-subtitle").textContent = t("subtitle");

    document.getElementById("start-btn").textContent = t("start");
    document.getElementById("cover-options-btn").textContent = t("options");
    document.getElementById("cover-credits-btn").textContent = t("credits");

    document.getElementById("dictionary-title").textContent = t("dictionaryTitle");
    document.getElementById("dictionary-subtitle").textContent = t("dictionarySubtitle");

    document.getElementById("dictionary-search").placeholder = t("search");

    document.getElementById("options-title").textContent = t("optionsTitle");
    document.getElementById("language-label").textContent = t("language");
    document.getElementById("theme-label").textContent = t("theme");

    document.getElementById("light-btn").textContent = t("light");
    document.getElementById("dark-btn").textContent = t("dark");

    document.getElementById("english-btn").textContent = t("english");
    document.getElementById("indonesian-btn").textContent = t("indonesia");

    document.getElementById("credits-title").textContent = t("creditsTitle");
    document.getElementById("credits-description").textContent = t("creditsDescription");
    document.getElementById("credits-footer").textContent = t("creditsFooter");

    document.getElementById("final-money-label").textContent = t("totalMoney");
    document.getElementById("final-savings-label").textContent = t("finalSavings");
    document.getElementById("final-happiness-label").textContent = t("finalHappiness");
    document.getElementById("final-health-label").textContent = t("finalHealth");
    document.getElementById("final-achievements-label").textContent = t("finalAchievements");
    document.getElementById("final-restart-btn").textContent = t("playAgain");

}


function updateToggleButtons() {

    document.querySelectorAll("[data-language]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });

    document.querySelectorAll("[data-theme]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.theme === theme
        );
    });

}


/* ==================== THEME ==================== */

function applyTheme() {

    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );

    localStorage.setItem("umg-theme", theme);

    updateToggleButtons();

}


/* ==================== LANGUAGE ==================== */

function applyLanguage() {

    document.documentElement.lang = language;

    updateLabels();

    updateToggleButtons();

    renderDictionary();

    renderAchievements();
    renderCollectibles();

    if (currentEvent) {
        renderEvent();
    }

    updateTutorial();

}


/* ==================== EVENT ==================== */

function generateEvent() {

    currentEvent = events[day - 1];

    decisionMade = false;

    renderEvent();

}


function renderEvent() {

    if (!currentEvent) return;

    document.getElementById("event-day").textContent =
        `${t("day")} ${day}`;

    document.getElementById("event-title").textContent =
        currentEvent.title;

    document.getElementById("event-description").textContent =
        currentEvent.description;

    const imageWrapper =
        document.getElementById("event-image-wrapper");

    const image =
        document.getElementById("event-image");

    if (currentEvent.image) {

        image.src = currentEvent.image;

        image.onerror = () => {
            imageWrapper.classList.add("hidden");
        };

        imageWrapper.classList.remove("hidden");

    } else {

        imageWrapper.classList.add("hidden");

    }


    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";

    currentEvent.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "choice-btn";

        button.textContent = option.text;

        button.addEventListener("click", () => {
            chooseOption(index, button);
        });

        choices.appendChild(button);

    });

    document.getElementById("next-btn")
        .classList.add("hidden");

    updateStats();

}


function chooseOption(index, button) {

    if (decisionMade) return;

    decisionMade = true;

    currentEvent.options[index].action();

    clampStats();

    button.classList.add("selected");

    document.querySelectorAll(".choice-btn")
        .forEach(choice => {
            choice.disabled = true;
        });


    gainXP(25);


    addActivity(
        `${currentEvent.title}: ${currentEvent.options[index].text}`
    );


    if (happiness >= 90 && health >= 90) {

        unlockAchievement("balanced-life");
        unlockCollectible("balance-card");

    }


    updateStats();
    renderAchievements();
    renderCollectibles();


    document.getElementById("next-btn")
        .classList.remove("hidden");

}


/* ==================== NEXT DAY ==================== */

function nextDay() {

    if (!decisionMade) return;

    if (day >= 30) {

        finishGame();

        return;
    }


    // daily income
    money += 25000;

    day++;

    decisionMade = false;

    generateEvent();

}


/* ==================== XP ==================== */

function gainXP(amount) {

    xp += amount;

    while (xp >= 100) {

        xp -= 100;

        level++;

        addActivity(
            language === "en"
                ? `level up! you reached level ${level}.`
                : `naik level! kamu mencapai level ${level}.`
        );

    }

}


/* ==================== ACHIEVEMENTS ==================== */

function unlockAchievement(id) {

    if (unlockedAchievements.includes(id)) {
        return;
    }

    unlockedAchievements.push(id);

    const achievement =
        achievements.find(item => item.id === id);

    if (!achievement) return;

    addActivity(
        `${t("achievementUnlocked")}: ${achievement.name}`
    );

}


function renderAchievements() {

    const container =
        document.getElementById("achievements-list");

    container.innerHTML = "";

    achievements.forEach(achievement => {

        const unlocked =
            unlockedAchievements.includes(achievement.id);

        const item =
            document.createElement("div");

        item.className =
            `achievement ${unlocked ? "" : "locked"}`;

        item.innerHTML = `
            <div class="achievement-icon">
                ${achievement.icon}
            </div>

            <div class="achievement-info">
                <strong>${achievement.name}</strong>
                <span>${achievement.description}</span>
            </div>
        `;

        container.appendChild(item);

    });

}


/* ==================== COLLECTIBLES ==================== */

function unlockCollectible(id) {

    if (unlockedCollectibles.includes(id)) {
        return;
    }

    unlockedCollectibles.push(id);

    const collectible =
        collectibles.find(item => item.id === id);

    if (!collectible) return;

    addActivity(
        `${t("collectibleUnlocked")}: ${collectible.name}`
    );

}


function renderCollectibles() {

    const container =
        document.getElementById("collectibles-list");

    container.innerHTML = "";

    collectibles.forEach(collectible => {

        const unlocked =
            unlockedCollectibles.includes(collectible.id);

        const item =
            document.createElement("div");

        item.className =
            `collectible ${unlocked ? "" : "locked"}`;

        item.innerHTML = `
            <div class="collectible-icon">
                ${collectible.icon}
            </div>

            <div class="collectible-info">
                <strong>${collectible.name}</strong>
                <span>${collectible.description}</span>
            </div>
        `;

        container.appendChild(item);

    });

}


/* ==================== ACTIVITY ==================== */

function addActivity(text) {

    const log =
        document.getElementById("activity-log");

    const item =
        document.createElement("div");

    item.className = "activity-item";

    item.textContent = text;

    log.prepend(item);

}


/* ==================== DICTIONARY ==================== */

function renderDictionary(search = "") {

    const container =
        document.getElementById("dictionary-list");

    container.innerHTML = "";

    const query =
        search.trim().toLowerCase();

    dictionary
        .filter(([english, indonesian]) => {

            return (
                english.includes(query) ||
                indonesian.includes(query)
            );

        })
        .forEach(([english, indonesian]) => {

            const item =
                document.createElement("div");

            item.className = "dictionary-item";

            item.innerHTML = `
                <strong>${english}</strong>
                <span>${indonesian}</span>
            `;

            container.appendChild(item);

        });

}


/* ==================== TUTORIAL ==================== */

let tutorialPage = 0;

function updateTutorial() {

    const pages =
        document.querySelectorAll(".tutorial-page");

    pages.forEach((page, index) => {

        page.classList.toggle(
            "active",
            index === tutorialPage
        );

    });


    const data =
        t("tutorial")[tutorialPage];

    document.getElementById("tutorial-title-1").textContent =
        t("tutorial")[0].title;

    document.getElementById("tutorial-text-1").textContent =
        t("tutorial")[0].text;

    document.getElementById("tutorial-title-2").textContent =
        t("tutorial")[1].title;

    document.getElementById("tutorial-text-2").textContent =
        t("tutorial")[1].text;

    document.getElementById("tutorial-title-3").textContent =
        t("tutorial")[2].title;

    document.getElementById("tutorial-text-3").textContent =
        t("tutorial")[2].text;

    document.getElementById("tutorial-title-4").textContent =
        t("tutorial")[3].title;

    document.getElementById("tutorial-text-4").textContent =
        t("tutorial")[3].text;


    document.getElementById("tutorial-progress").textContent =
        `${tutorialPage + 1} / 4`;

    document.getElementById("tutorial-back").textContent =
        t("back");

    document.getElementById("tutorial-next").textContent =
        tutorialPage === 3
            ? t("finishTutorial")
            : t("nextTutorial");

}


/* ==================== START GAME ==================== */

function resetGame() {

    money = 3500000;
    savings = 0;

    happiness = 70;
    health = 50;

    day = 1;

    xp = 0;
    level = 1;

    currentEvent = null;
    decisionMade = false;

    unlockedAchievements = [];
    unlockedCollectibles = [];

    document.getElementById("activity-log").innerHTML = "";

    updateStats();

    renderAchievements();
    renderCollectibles();

    showScreen("game-screen");

    tutorialPage = 0;

    updateTutorial();

    openModal("tutorial-modal");

}


/* ==================== FINISH GAME ==================== */

function finishGame() {

    const finalMoney =
        money + savings;


    let ending;


    /*
       important:
       achievements DO NOT determine the ending.
       actual financial performance does.
    */

    if (
        health >= 90 &&
        happiness >= 90 &&
        finalMoney >= 3500000
    ) {

        ending = "master";

    } else if (
        health >= 80 &&
        happiness >= 80
    ) {

        ending = "strong";

    } else if (
        health >= 65 &&
        happiness >= 65
    ) {

        ending = "solid";

    } else if (
        health >= 45
    ) {

        ending = "learning";

    } else {

        ending = "chaos";

    }


    const result =
        translations[language].endings[ending];


    document.getElementById("final-result").textContent =
        result.title;

    document.getElementById("final-message").textContent =
        result.message;

    document.getElementById("final-money").textContent =
        formatMoney(finalMoney);

    document.getElementById("final-savings").textContent =
        formatMoney(savings);

    document.getElementById("final-happiness").textContent =
        happiness;

    document.getElementById("final-health").textContent =
        health;

    document.getElementById("final-achievements").textContent =
        `${unlockedAchievements.length} / ${achievements.length}`;


    openModal("game-over-modal");

}


/* ==================== SCREEN CONTROL ==================== */

function showScreen(id) {

    document.querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    document.getElementById(id)
        .classList.add("active");

}


/* ==================== MODALS ==================== */

function openModal(id) {

    document.getElementById(id)
        .classList.remove("hidden");

}


function closeModal(id) {

    document.getElementById(id)
        .classList.add("hidden");

}


/* ==================== EVENT LISTENERS ==================== */


/* start */

document.getElementById("start-btn")
    .addEventListener("click", () => {

        resetGame();

    });


/* cover options */

document.getElementById("cover-options-btn")
    .addEventListener("click", () => {

        openModal("options-modal");

    });


/* cover credits */

document.getElementById("cover-credits-btn")
    .addEventListener("click", () => {

        openModal("credits-modal");

    });


/* game options */

document.getElementById("game-options-btn")
    .addEventListener("click", () => {

        openModal("options-modal");

    });


/* game credits */

document.getElementById("game-credits-btn")
    .addEventListener("click", () => {

        openModal("credits-modal");

    });


/* dictionary */

document.getElementById("dictionary-btn")
    .addEventListener("click", () => {

        renderDictionary();

        openModal("dictionary-modal");

    });


/* close buttons */

document.querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener("click", () => {

            closeModal(button.dataset.close);

        });

    });


/* dictionary search */

document.getElementById("dictionary-search")
    .addEventListener("input", event => {

        renderDictionary(event.target.value);

    });


/* options language */

document.querySelectorAll("[data-language]")
    .forEach(button => {

        button.addEventListener("click", () => {

            language = button.dataset.language;

            localStorage.setItem(
                "umg-language",
                language
            );

            applyLanguage();

        });

    });


/* options theme */

document.querySelectorAll("[data-theme]")
    .forEach(button => {

        button.addEventListener("click", () => {

            theme = button.dataset.theme;

            applyTheme();

        });

    });


/* tutorial */

document.getElementById("tutorial-next")
    .addEventListener("click", () => {

        if (tutorialPage < 3) {

            tutorialPage++;

            updateTutorial();

        } else {

            closeModal("tutorial-modal");

        }

    });


document.getElementById("tutorial-back")
    .addEventListener("click", () => {

        if (tutorialPage > 0) {

            tutorialPage--;

            updateTutorial();

        }

    });


/* next day */

document.getElementById("next-btn")
    .addEventListener("click", nextDay);


/* restart */

document.getElementById("restart-btn")
    .addEventListener("click", resetGame);


/* final restart */

document.getElementById("final-restart-btn")
    .addEventListener("click", () => {

        closeModal("game-over-modal");

        resetGame();

    });


/* click outside modal */

document.querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener("click", event => {

            if (event.target === modal) {

                modal.classList.add("hidden");

            }

        });

    });


/* escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal")
            .forEach(modal => {

                modal.classList.add("hidden");

            });

    }

});


/* ==================== INITIALIZE ==================== */

applyTheme();
applyLanguage();
updateStats();
renderAchievements();
renderCollectibles();
