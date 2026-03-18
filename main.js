/* تأثير الماتريكس */
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 40);

/* زر الدخول */
document.getElementById("enterBtn").addEventListener("click", () => {
    // تأثير بسيط قبل الانتقال
    document.querySelector(".intro-container").style.opacity = "0";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 800);
});
/* تسجيل الدخول */
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();
        const errorMsg = document.getElementById("errorMsg");

        const validUsers = {
            "black": "zone1",
            "black666": "zone2",
            "black_box666": "zone3"
        };

        if (pass !== "159654black" || !validUsers[user]) {
            errorMsg.textContent = "ACCESS DENIED";
            return;
        }

        // حفظ اليوزر للصفحة التالية
        localStorage.setItem("currentUser", user);
        localStorage.setItem("currentZone", validUsers[user]);

        // الانتقال لصفحة الأسئلة
        window.location.href = "verify.html";
    });
}
/* صفحة التحقق */
const verifyBtn = document.getElementById("verifyBtn");

if (verifyBtn) {
    verifyBtn.addEventListener("click", () => {
        const q1 = document.getElementById("q1").value.trim();
        const q2 = document.getElementById("q2").value.trim();
        const q3 = document.getElementById("q3").value.trim();
        const error = document.getElementById("verifyError");

        if (q1 === "") {
            error.textContent = "This field is required";
            return;
        }

        // حفظ المعلومات
        const user = localStorage.getItem("currentUser");
        const zone = localStorage.getItem("currentZone");

        const logEntry = {
            user: user,
            zone: zone,
            from: q1,
            how: q2,
            sent: q3,
            time: new Date().toLocaleString()
        };

        // تخزين السجلات
        let logs = JSON.parse(localStorage.getItem("logs") || "[]");
        logs.push(logEntry);
        localStorage.setItem("logs", JSON.stringify(logs));

        // الانتقال للمنطقة الخاصة
        window.location.href = zone + ".html";
    });
}
/* زر تسجيل الخروج */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentZone");
        window.location.href = "login.html";
    });
}