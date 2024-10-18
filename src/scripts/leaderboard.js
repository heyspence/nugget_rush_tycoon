import { formatTime } from "./util";

export const postScore = async (username, score) => {
    const apiUrl = process.env.NODE_ENV === 'production'
        ? 'https://nugget-rush.spencerheywood.com/api/leaderboard'
        : 'http://localhost:5004/api/leaderboard';

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, score })
    })

    if (!response.ok) {
        console.error(response)
        throw new Error("Failed to post score");
    }

    const data = await response.json();
    localStorage.setItem("leaderboard", JSON.stringify(data));
}

export const collectUsername = () => {
    const username = prompt("Enter your username");
    return username;
}

export const fetchLeaderboard = () => {
    const apiUrl = process.env.NODE_ENV === 'production'
        ? 'https://nugget-rush.spencerheywood.com/api/leaderboard'
        : 'http://localhost:5004/api/leaderboard';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("leaderboard", JSON.stringify(data));
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
};

const getLeaderboard = () => {
    const leaderboard = localStorage.getItem("leaderboard");
    return leaderboard ? JSON.parse(leaderboard) : [];
}

export const displayLeaderboard = () => {
    fetchLeaderboard();
    const leaderboard = getLeaderboard();
    const leaderboardContainer = document.getElementById("leaderboard-container");
    leaderboardContainer.innerHTML = "";

    leaderboard.forEach((entry, index) => {
        const row = document.createElement("div");
        row.classList.add("leaderboard-row");
        row.innerHTML = `
            <div class="leaderboard-cell" style="width: 100px;">${index + 1}</div>
            <div class="leaderboard-cell" style="width: 100px;">${entry.username}</div>
            <div class="leaderboard-cell" style="width: 100px;">${formatTime(entry.score)}</div>
        `;
        leaderboardContainer.appendChild(row);
    });
}