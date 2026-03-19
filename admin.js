alert("admin.js LOADED");

const loadBtn = document.getElementById("loadLogs");
const clearBtn = document.getElementById("clearLogs");
const logoutBtn = document.getElementById("logoutBtn");

if (loadBtn) {
    loadBtn.addEventListener("click", () => {
        alert("LOAD LOGS clicked");
    });
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        alert("CLEAR LOGS clicked");
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        alert("LOG OUT clicked");
    });
}