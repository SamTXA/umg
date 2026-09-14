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

const dictionary = [
    ["income", "pendapatan", "uang yang kamu terima."],
    ["expense", "pengeluaran", "uang yang kamu keluarkan."],
    ["budget", "anggaran", "rencana penggunaan uang."],
    ["savings", "tabungan", "uang yang disisihkan untuk masa depan."],
    ["investment", "investasi", "menempatkan uang dengan harapan mendapat hasil."],
    ["interest", "bunga", "tambahan uang dari simpanan atau pinjaman."],
    ["debt", "utang", "uang yang harus dibayar kembali."],
    ["emergency fund", "dana darurat", "uang untuk keadaan tidak terduga."],
    ["scam", "penipuan", "usaha menipu untuk mendapatkan uang atau informasi."],
    ["phishing", "phishing", "usaha mendapatkan data melalui pesan atau situs palsu."],
    ["digital payment", "pembayaran digital", "pembayaran menggunakan sistem elektronik."],
    ["needs", "kebutuhan", "sesuatu yang memang diperlukan."],
    ["wants", "keinginan", "sesuatu yang diinginkan tetapi tidak wajib."],
    ["financial health", "kesehatan finansial", "kondisi keseluruhan keuangan."],
    ["budgeting", "penganggaran", "proses merencanakan penggunaan uang."],
    ["diversification", "diversifikasi", "membagi uang ke beberapa jenis investasi."],
    ["risk", "risiko", "kemungkinan mengalami kerugian."],
    ["profit", "keuntungan", "hasil positif setelah biaya dikurangi."],
    ["loss", "kerugian", "uang yang hilang atau berkurang."],
    ["transaction", "transaksi", "kegiatan pertukaran uang atau barang."]
];


// =====================================================
// 30 FINANCIAL QUESTIONS
// =====================================================

const events = [

    // 1
    {
        title: "new sneakers",
        description: "you find sneakers you really like for Rp450,000. your current shoes still work.",
        choices: [
            {
                title: "buy them",
                description: "spend Rp450,000. happiness +12, health -5",
                action: () => {
                    money -= 450000;
                    happiness += 12;
                    health -= 5;
                }
            },
            {
                title: "save the money",
                description: "put Rp450,000 into savings. health +6",
                action: () => {
                    savings += 450000;
                    health += 6;
                }
            },
            {
                title: "wait and think",
                description: "don't buy anything yet. health +3",
                action: () => {
                    health += 3;
                }
            }
        ]
    },

    // 2
    {
        title: "lunch with friends",
        description: "your friends want to eat at an expensive restaurant.",
        choices: [
            {
                title: "expensive restaurant",
                description: "spend Rp150,000. happiness +12",
                action: () => {
                    money -= 150000;
                    happiness += 12;
                    health -= 2;
                }
            },
            {
                title: "cheaper restaurant",
                description: "spend Rp70,000. happiness +7",
                action: () => {
                    money -= 70000;
                    happiness += 7;
                }
            },
            {
                title: "eat at home",
                description: "spend nothing. happiness -3, health +4",
                action: () => {
                    happiness -= 3;
                    health += 4;
                }
            }
        ]
    },

    // 3
    {
        title: "suspicious message",
        description: "a message says you've won Rp5,000,000 and asks for your bank information.",
        choices: [
            {
                title: "send the information",
                description: "take the risk. money -Rp300,000, health -20",
                action: () => {
                    money -= 300000;
                    health -= 20;
                }
            },
            {
                title: "ignore and report",
                description: "protect your information. health +10",
                action: () => {
                    health += 10;
                    unlockAchievement("scam survivor");
                    unlockCollectible(
                        "shield",
                        "scam shield",
                        "you identified a suspicious message."
                    );
                }
            }
        ]
    },

    // 4
    {
        title: "digital wallet",
        description: "you've started making lots of small digital payments.",
        choices: [
            {
                title: "track every transaction",
                description: "build better spending habits. health +8",
                action: () => {
                    health += 8;
                    unlockAchievement("digital spender");
                }
            },
            {
                title: "don't track them",
                description: "small purchases can add up. health -8, money -50,000",
                action: () => {
                    health -= 8;
                    money -= 50000;
                }
            }
        ]
    },

    // 5
    {
        title: "investment opportunity",
        description: "someone offers an investment promising guaranteed huge returns.",
        choices: [
            {
                title: "invest immediately",
                description: "spend Rp300,000. high risk. health -5",
                action: () => {
                    money -= 300000;
                    health -= 5;
                }
            },
            {
                title: "research first",
                description: "learn about the investment before deciding. health +8",
                action: () => {
                    health += 8;
                    unlockAchievement("first investor");
                    unlockCollectible(
                        "chart",
                        "market chart",
                        "you learned that investments involve risk."
                    );
                }
            },
            {
                title: "avoid it",
                description: "keep your money safe. health +3",
                action: () => {
                    health += 3;
                }
            }
        ]
    },

    // 6
    {
        title: "emergency repair",
        description: "something important suddenly needs Rp250,000 for repairs.",
        choices: [
            {
                title: "use emergency savings",
                description: "use money saved for emergencies.",
                action: () => {
                    if (savings >= 250000) {
                        savings -= 250000;
                        health += 12;

                        unlockAchievement("emergency ready");

                        unlockCollectible(
                            "safe",
                            "emergency fund",
                            "your savings helped during an unexpected expense."
                        );
                    } else {
                        money -= 250000;
                        health += 3;
                    }
                }
            },
            {
                title: "use normal balance",
                description: "pay directly from your available money. health +3",
                action: () => {
                    money -= 250000;
                    health += 3;
                }
            }
        ]
    },

    // 7
    {
        title: "extra allowance",
        description: "you receive an unexpected extra Rp200,000.",
        choices: [
            {
                title: "save everything",
                description: "savings +Rp200,000, happiness -3",
                action: () => {
                    savings += 200000;
                    happiness -= 3;
                }
            },
            {
                title: "spend everything",
                description: "happiness +10, health -5",
                action: () => {
                    money += 200000;
                    money -= 200000;
                    happiness += 10;
                    health -= 5;
                }
            },
            {
                title: "split it",
                description: "save Rp100,000 and enjoy Rp100,000. balanced.",
                action: () => {
                    savings += 100000;
                    happiness += 5;
                    health += 4;

                    unlockAchievement("balanced life");

                    unlockCollectible(
                        "balance",
                        "balance card",
                        "you balanced saving with enjoying your money."
                    );
                }
            }
        ]
    },

    // 8
    {
        title: "limited-time deal",
        description: "an online store says your favorite item is 40% off for only 10 minutes.",
        choices: [
            {
                title: "buy immediately",
                description: "spend Rp175,000. happiness +5, health -5",
                action: () => {
                    money -= 175000;
                    happiness += 5;
                    health -= 5;
                }
            },
            {
                title: "think first",
                description: "avoid an impulse purchase. health +7",
                action: () => {
                    health += 7;
                    unlockAchievement("impulse control");
                }
            }
        ]
    },

    // 9
    {
        title: "weekly budget",
        description: "you have Rp500,000 available for the week.",
        choices: [
            {
                title: "plan your spending",
                description: "make a simple budget. health +10",
                action: () => {
                    health += 10;
                    unlockAchievement("budget master");
                }
            },
            {
                title: "spend normally",
                description: "don't make a plan. health -3",
                action: () => {
                    health -= 3;
                }
            }
        ]
    },

    // 10
    {
        title: "new game",
        description: "a game you've wanted costs Rp300,000.",
        choices: [
            {
                title: "buy it",
                description: "happiness +10, money -Rp300,000",
                action: () => {
                    money -= 300000;
                    happiness += 10;
                }
            },
            {
                title: "save for later",
                description: "keep the money. health +5",
                action: () => {
                    savings += 300000;
                    health += 5;
                }
            }
        ]
    },

    // 11
    {
        title: "bank interest",
        description: "your savings account gives you Rp25,000 in fictional interest.",
        choices: [
            {
                title: "keep it in savings",
                description: "add the interest to your savings.",
                action: () => {
                    savings += 25000;
                    health += 5;
                }
            },
            {
                title: "spend it",
                description: "enjoy the extra money. happiness +4",
                action: () => {
                    money += 25000;
                    happiness += 4;
                }
            }
        ]
    },

    // 12
    {
        title: "subscription trap",
        description: "you notice you're paying for three subscriptions you barely use.",
        choices: [
            {
                title: "cancel unused subscriptions",
                description: "save Rp75,000. health +8",
                action: () => {
                    savings += 75000;
                    health += 8;
                }
            },
            {
                title: "keep everything",
                description: "continue paying. health -6",
                action: () => {
                    money -= 75000;
                    health -= 6;
                }
            }
        ]
    },

    // 13
    {
        title: "friend wants a loan",
        description: "a friend asks to borrow Rp200,000 but has no clear repayment plan.",
        choices: [
            {
                title: "lend the money",
                description: "money -Rp200,000. happiness +4, health -5",
                action: () => {
                    money -= 200000;
                    happiness += 4;
                    health -= 5;
                }
            },
            {
                title: "politely decline",
                description: "protect your budget. health +5",
                action: () => {
                    health += 5;
                }
            }
        ]
    },

    // 14
    {
        title: "online giveaway",
        description: "a random account asks you to pay Rp100,000 to claim a prize.",
        choices: [
            {
                title: "pay the fee",
                description: "money -Rp100,000. health -15",
                action: () => {
                    money -= 100000;
                    health -= 15;
                }
            },
            {
                title: "ignore it",
                description: "don't pay suspicious fees. health +8",
                action: () => {
                    health += 8;
                    unlockAchievement("scam survivor");
                }
            }
        ]
    },

    // 15
    {
        title: "needs vs wants",
        description: "you have Rp250,000 left for the week and need school supplies.",
        choices: [
            {
                title: "buy school supplies",
                description: "spend Rp100,000 on a need. health +8",
                action: () => {
                    money -= 100000;
                    health += 8;
                }
            },
            {
                title: "buy a new accessory",
                description: "spend Rp200,000 on a want. happiness +7, health -7",
                action: () => {
                    money -= 200000;
                    happiness += 7;
                    health -= 7;
                }
            }
        ]
    },

    // 16
    {
        title: "discount psychology",
        description: "something costs Rp500,000 after a huge discount. you didn't plan to buy it.",
        choices: [
            {
                title: "buy because it's discounted",
                description: "money -Rp500,000. health -8",
                action: () => {
                    money -= 500000;
                    health -= 8;
                }
            },
            {
                title: "skip it",
                description: "remember that a discount isn't savings if you didn't need it. health +8",
                action: () => {
                    health += 8;
                    unlockAchievement("impulse control");
                }
            }
        ]
    },

    // 17
    {
        title: "unexpected gift",
        description: "someone gives you Rp150,000.",
        choices: [
            {
                title: "save it",
                description: "savings +Rp150,000. health +5",
                action: () => {
                    savings += 150000;
                    health += 5;
                }
            },
            {
                title: "enjoy it",
                description: "happiness +8",
                action: () => {
                    money += 150000;
                    money -= 150000;
                    happiness += 8;
                }
            }
        ]
    },

    // 18
    {
        title: "fake bank call",
        description: "someone calls claiming to be your bank and asks for your OTP.",
        choices: [
            {
                title: "give the OTP",
                description: "never share OTPs. health -20, money -Rp250,000",
                action: () => {
                    money -= 250000;
                    health -= 20;
                }
            },
            {
                title: "hang up",
                description: "protect your account. health +10",
                action: () => {
                    health += 10;
                    unlockAchievement("scam survivor");
                }
            }
        ]
    },

    // 19
    {
        title: "saving goal",
        description: "you want to save Rp1,000,000 for something important.",
        choices: [
            {
                title: "set a target",
                description: "create a clear savings goal. health +10",
                action: () => {
                    health += 10;
                    unlockAchievement("goal setter");
                }
            },
            {
                title: "save whatever is left",
                description: "less structured. health +2",
                action: () => {
                    health += 2;
                }
            }
        ]
    },

    // 20
    {
        title: "borrowing money",
        description: "you want something that costs Rp400,000 but don't have enough.",
        choices: [
            {
                title: "borrow the money",
                description: "create debt. health -10",
                action: () => {
                    money += 400000;
                    health -= 10;
                }
            },
            {
                title: "wait and save",
                description: "avoid unnecessary debt. health +8",
                action: () => {
                    health += 8;
                    savings += 50000;
                }
            }
        ]
    },

    // 21
    {
        title: "investment research",
        description: "you hear that every investment can make guaranteed money.",
        choices: [
            {
                title: "believe it",
                description: "trust the claim. health -8",
                action: () => {
                    health -= 8;
                }
            },
            {
                title: "remember risk",
                description: "investments can gain or lose value. health +10",
                action: () => {
                    health += 10;
                    unlockCollectible(
                        "risk",
                        "risk card",
                        "you learned that investment returns are not guaranteed."
                    );
                }
            }
        ]
    },

    // 22
    {
        title: "cash or digital?",
        description: "you need to pay Rp50,000 for something.",
        choices: [
            {
                title: "pay digitally and record it",
                description: "practice tracking transactions. health +6",
                action: () => {
                    health += 6;
                }
            },
            {
                title: "pay and forget",
                description: "don't track the expense. health -4",
                action: () => {
                    health -= 4;
                }
            }
        ]
    },

    // 23
    {
        title: "birthday spending",
        description: "your friend's birthday is coming up.",
        choices: [
            {
                title: "buy an expensive gift",
                description: "spend Rp250,000. happiness +8, health -5",
                action: () => {
                    money -= 250000;
                    happiness += 8;
                    health -= 5;
                }
            },
            {
                title: "buy a reasonable gift",
                description: "spend Rp100,000. happiness +6",
                action: () => {
                    money -= 100000;
                    happiness += 6;
                }
            }
        ]
    },

    // 24
    {
        title: "monthly review",
        description: "you check where your money went this month.",
        choices: [
            {
                title: "review every expense",
                description: "learn from your spending. health +10",
                action: () => {
                    health += 10;
                    unlockAchievement("budget master");
                }
            },
            {
                title: "ignore it",
                description: "keep doing the same thing. health -5",
                action: () => {
                    health -= 5;
                }
            }
        ]
    },

    // 25
    {
        title: "emergency fund",
        description: "you currently have some savings. should you keep part of it untouched?",
        choices: [
            {
                title: "keep an emergency fund",
                description: "protect yourself from unexpected expenses. health +10",
                action: () => {
                    health += 10;
                    unlockCollectible(
                        "safe",
                        "emergency fund",
                        "money reserved for unexpected situations."
                    );
                }
            },
            {
                title: "spend everything",
                description: "happiness +8, health -10",
                action: () => {
                    savings = Math.max(0, savings - 200000);
                    happiness += 8;
                    health -= 10;
                }
            }
        ]
    },

    // 26
    {
        title: "phishing website",
        description: "a website looks like your bank but the address is slightly different.",
        choices: [
            {
                title: "enter your password",
                description: "dangerous. health -20",
                action: () => {
                    health -= 20;
                }
            },
            {
                title: "leave the website",
                description: "check the official website instead. health +10",
                action: () => {
                    health += 10;
                    unlockCollectible(
                        "shield",
                        "phishing shield",
                        "you spotted a suspicious website."
                    );
                }
            }
        ]
    },

    // 27
    {
        title: "saving too much?",
        description: "you've been saving constantly and haven't spent anything on fun for weeks.",
        choices: [
            {
                title: "keep saving everything",
                description: "savings +Rp100,000, happiness -8",
                action: () => {
                    savings += 100000;
                    happiness -= 8;
                }
            },
            {
                title: "use some money responsibly",
                description: "happiness +8, health +3",
                action: () => {
                    money -= 100000;
                    happiness += 8;
                    health += 3;
                }
            }
        ]
    },

    // 28
    {
        title: "financial advice",
        description: "someone online says you should put all your money into one investment.",
        choices: [
            {
                title: "put everything in",
                description: "high concentration risk. health -15",
                action: () => {
                    health -= 15;
                }
            },
            {
                title: "diversify",
                description: "learn why diversification can reduce concentration risk. health +10",
                action: () => {
                    health += 10;
                    unlockCollectible(
                        "balance",
                        "diversification card",
                        "you learned not to put everything in one place."
                    );
                }
            }
        ]
    },

    // 29
    {
        title: "end-of-month bonus",
        description: "you receive a fictional Rp300,000 bonus.",
        choices: [
            {
                title: "save it",
                description: "savings +Rp300,000. health +8",
                action: () => {
                    savings += 300000;
                    health += 8;
                }
            },
            {
                title: "spend it all",
                description: "happiness +12, health -6",
                action: () => {
                    happiness += 12;
                    health -= 6;
                }
            },
            {
                title: "split it",
                description: "save Rp150,000 and spend Rp150,000.",
                action: () => {
                    savings += 150000;
                    happiness += 7;
                    health += 5;

                    unlockAchievement("balanced life");
                }
            }
        ]
    },

    // 30
    {
        title: "final financial decision",
        description: "you've reached the final day. how will you handle your remaining money?",
        choices: [
            {
                title: "save most of it",
                description: "savings +Rp200,000. health +10",
                action: () => {
                    savings += 200000;
                    health += 10;
                }
            },
            {
                title: "enjoy some of it",
                description: "spend Rp100,000. happiness +10",
                action: () => {
                    money -= 100000;
                    happiness += 10;
                }
            },
            {
                title: "make a balanced plan",
                description: "save Rp100,000 and spend responsibly. health +7, happiness +5",
                action: () => {
                    savings += 100000;
                    money -= 50000;
                    health += 7;
                    happiness += 5;

                    unlockAchievement("balanced life");
                }
            }
        ]
    }

];


// =====================================================
// ACHIEVEMENTS
// =====================================================

const achievements = [
    "scam survivor",
    "digital spender",
    "first investor",
    "emergency ready",
    "balanced life",
    "impulse control",
    "budget master",
    "goal setter"
];


// =====================================================
// GAME FUNCTIONS
// =====================================================

function formatMoney(amount) {
    return "Rp" + Math.max(0, Math.round(amount)).toLocaleString("id-ID");
}


function clampStats() {
    happiness = Math.max(0, Math.min(100, happiness));
    health = Math.max(0, Math.min(100, health));

    money = Math.max(0, money);
    savings = Math.max(0, savings);
}


function updateStats() {

    clampStats();

    document.getElementById("money").textContent =
        formatMoney(money);

    document.getElementById("savings").textContent =
        formatMoney(savings);

    document.getElementById("happiness").textContent =
        happiness;

    document.getElementById("health").textContent =
        health;

    document.getElementById("happinessBar").style.width =
        happiness + "%";

    document.getElementById("healthBar").style.width =
        health + "%";

    document.getElementById("level").textContent =
        level;

    document.getElementById("day").textContent =
        day;

    const xpNeeded = level * 100;

    document.getElementById("xpBar").style.width =
        Math.min(100, (xp / xpNeeded) * 100) + "%";

    renderAchievements();
    renderCollectibles();
}


function generateEvent() {

    decisionMade = false;

    // day 1 = question 1
    // day 30 = question 30
    currentEvent = events[day - 1];

    document.getElementById("eventTitle").textContent =
        currentEvent.title;

    document.getElementById("eventDescription").textContent =
        currentEvent.description;

    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";

    currentEvent.choices.forEach((choice, index) => {

        const button =
            document.createElement("button");

        button.className = "choice";

        button.innerHTML = `
            <strong>${choice.title}</strong>
            <span>${choice.description}</span>
        `;

        button.addEventListener("click", () => {
            chooseOption(index, button);
        });

        choices.appendChild(button);

    });

    document.getElementById("nextDayBtn").style.display =
        "none";
}


function chooseOption(index, selectedButton) {

    if (decisionMade) return;

    decisionMade = true;

    currentEvent.choices[index].action();

    document.querySelectorAll(".choice").forEach(button => {
        button.disabled = true;
    });

    selectedButton.classList.add("selected");

    gainXP(25);

    addLog(
        `day ${day}: ${currentEvent.choices[index].title}`
    );

    updateStats();

    document.getElementById("nextDayBtn").style.display =
        "block";
}


function gainXP(amount) {

    xp += amount;

    const xpNeeded = level * 100;

    if (xp >= xpNeeded) {

        xp -= xpNeeded;
        level++;

        addLog(
            `level up! you reached level ${level}.`
        );

    }

}


function unlockAchievement(name) {

    if (!unlockedAchievements.includes(name)) {

        unlockedAchievements.push(name);

        addLog(
            `achievement unlocked: ${name}`
        );

    }

}


function renderAchievements() {

    const container =
        document.getElementById("achievements");

    container.innerHTML = "";

    achievements.forEach(name => {

        const div =
            document.createElement("div");

        div.className = "achievement";

        if (unlockedAchievements.includes(name)) {

            div.innerHTML =
                `✓ ${name}`;

        } else {

            div.className += " locked";

            div.innerHTML =
                `○ ${name}`;

        }

        container.appendChild(div);

    });

}


function unlockCollectible(id, name, description) {

    if (
        !unlockedCollectibles.some(
            collectible => collectible.id === id
        )
    ) {

        unlockedCollectibles.push({
            id,
            name,
            description
        });

        addLog(
            `collectible found: ${name}`
        );

    }

}


function renderCollectibles() {

    const container =
        document.getElementById("collectibles");

    container.innerHTML = "";

    if (unlockedCollectibles.length === 0) {

        container.innerHTML =
            `<div class="locked">no collectibles yet.</div>`;

        return;
    }

    unlockedCollectibles.forEach(item => {

        const div =
            document.createElement("div");

        div.className = "collectible";

        div.innerHTML = `
            <div class="collectible-icon">
                ${item.id.toUpperCase().slice(0, 3)}
            </div>

            <div>
                <strong>${item.name}</strong>
                <br>
                <span>${item.description}</span>
            </div>
        `;

        container.appendChild(div);

    });

}


function addLog(text) {

    const log =
        document.getElementById("activityLog");

    const item =
        document.createElement("div");

    item.className = "log-item";

    item.textContent = text;

    log.prepend(item);

    while (log.children.length > 7) {
        log.removeChild(log.lastChild);
    }

}


function nextDay() {

    if (!decisionMade) return;

    if (day >= 30) {
        finishGame();
        return;
    }

    day++;

    // daily income
    money += 25000;

    addLog(
        "daily income: +Rp25,000"
    );

    generateEvent();
    updateStats();

}


function finishGame() {

    clampStats();

    const totalMoney =
        money + savings;

    const score =
        Math.round(
            totalMoney / 10000 +
            health * 20 +
            happiness * 10 +
            level * 100 +
            unlockedAchievements.length * 150
        );

    document.getElementById("finalMoney").textContent =
        formatMoney(money);

    document.getElementById("finalSavings").textContent =
        formatMoney(savings);

    document.getElementById("finalHappiness").textContent =
        happiness;

    document.getElementById("finalHealth").textContent =
        health;

    document.getElementById("finalLevel").textContent =
        level;

    document.getElementById("finalScore").textContent =
        score.toLocaleString("id-ID");

    let message;

    if (score >= 9000) {

        message =
            "excellent financial decisions. humanity may yet survive.";

    } else if (score >= 6000) {

        message =
            "pretty solid. you managed your money reasonably well.";

    } else if (score >= 3500) {

        message =
            "not terrible. there were definitely some questionable purchases.";

    } else {

        message =
            "your financial advisor is currently staring at the ceiling.";

    }

    document.getElementById("finalMessage").textContent =
        message;

    document
        .getElementById("gameOverOverlay")
        .classList.remove("hidden");

}


// =====================================================
// DICTIONARY
// =====================================================

function openDictionary() {

    document
        .getElementById("dictionaryOverlay")
        .classList.remove("hidden");

    renderDictionary("");

}


function closeDictionary() {

    document
        .getElementById("dictionaryOverlay")
        .classList.add("hidden");

}


function renderDictionary(search) {

    const container =
        document.getElementById("dictionaryList");

    container.innerHTML = "";

    const filtered =
        dictionary.filter(item =>
            item[0]
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            item[1]
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    filtered.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "dictionary-item";

        div.innerHTML = `
            <strong>${item[0]} → ${item[1]}</strong>
            <span>${item[2]}</span>
        `;

        container.appendChild(div);

    });

}


// =====================================================
// TUTORIAL
// =====================================================

const tutorialPages = [

    {
        title: "welcome to untitled money gaem.",
        text:
            "you're starting with Rp3,500,000. over 30 days, you'll face 30 different financial situations."
    },

    {
        title: "manage your money",
        text:
            "balance is the money you currently have. savings are money you've intentionally put aside for the future."
    },

    {
        title: "watch your happiness",
        text:
            "saving everything isn't always the best choice. responsible spending can increase happiness, while overspending can hurt your financial health."
    },

    {
        title: "learn while playing",
        text:
            "every decision teaches a financial concept. earn XP, unlock achievements, find collectibles, and check the financial dictionary whenever you need it."
    }

];


let tutorialPage = 0;


function showTutorialPage() {

    const page =
        tutorialPages[tutorialPage];

    document.getElementById("tutorialNumber").textContent =
        `${tutorialPage + 1} / ${tutorialPages.length}`;

    document.getElementById("tutorialTitle").textContent =
        page.title;

    document.getElementById("tutorialText").textContent =
        page.text;

    document.getElementById("tutorialNext").textContent =
        tutorialPage === tutorialPages.length - 1
            ? "start game →"
            : "continue →";

}


// =====================================================
// RESET
// =====================================================

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

    document.getElementById("activityLog").innerHTML = "";

    addLog(
        "game started with Rp3,500,000."
    );

    updateStats();

    tutorialPage = 0;

    showTutorialPage();

    document
        .getElementById("tutorialOverlay")
        .classList.remove("hidden");

    document
        .getElementById("gameOverOverlay")
        .classList.add("hidden");

    generateEvent();

}


// =====================================================
// EVENT LISTENERS
// =====================================================

document
    .getElementById("nextDayBtn")
    .addEventListener("click", nextDay);


document
    .getElementById("dictionaryBtn")
    .addEventListener("click", openDictionary);


document
    .getElementById("closeDictionary")
    .addEventListener("click", closeDictionary);


document
    .getElementById("dictionarySearch")
    .addEventListener("input", event => {

        renderDictionary(
            event.target.value
        );

    });


document
    .getElementById("tutorialNext")
    .addEventListener("click", () => {

        if (
            tutorialPage <
            tutorialPages.length - 1
        ) {

            tutorialPage++;

            showTutorialPage();

        } else {

            document
                .getElementById("tutorialOverlay")
                .classList.add("hidden");

            generateEvent();

        }

    });


document
    .getElementById("restartBtn")
    .addEventListener("click", resetGame);


document
    .getElementById("playAgainBtn")
    .addEventListener("click", resetGame);


// =====================================================
// START
// =====================================================

resetGame();