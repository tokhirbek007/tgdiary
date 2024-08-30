document.addEventListener("DOMContentLoaded", () => {
    const diaryEntryElement = document.getElementById("diary-entry");

    // Load saved diary entry
    diaryEntryElement.value = localStorage.getItem("diaryEntry") || "";

    // Save diary entry
    document.getElementById("save-entry").addEventListener("click", () => {
        const diaryEntry = diaryEntryElement.value;
        localStorage.setItem("diaryEntry", diaryEntry);
        alert("Diary entry saved successfully!");
    });
});
