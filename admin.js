/* تحميل السجلات */
const loadBtn = document.getElementById("loadLogs");
const clearBtn = document.getElementById("clearLogs");
const logsBox = document.getElementById("logsBox");
const logoutBtn = document.getElementById("logoutBtn");

if (loadBtn) {
    loadBtn.addEventListener("click", () => {
        logsBox.innerHTML = "";

        let logs = JSON.parse(localStorage.getItem("logs") || "[]");

        if (logs.length === 0) {
            logsBox.innerHTML = "<p>No logs found.</p>";
            return;
        }

        logs.forEach((log, index) => {
            logsBox.innerHTML += 
                <div class="log-entry">
                    <p><b>User:</b> ${log.user}</p>
                    <p><b>Zone:</b> ${log.zone}</p>
                    <p><b>From:</b> ${log.from}</p>
                    <p><b>How:</b> ${log.how}</p>
                    <p><b>Sent by:</b> ${log.sent}</p>
                    <p><b>Time:</b> ${log.time}</p>
                    <hr>
                </div>
            ;
        });
    });
}

/* حذف السجلات */
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("logs");
        logsBox.innerHTML = "<p>Logs cleared.</p>";
    });
}

/* تسجيل الخروج */
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        window.location.href = "login.html";
    });
}