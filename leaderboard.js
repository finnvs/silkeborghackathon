document.addEventListener('DOMContentLoaded', () => {
  fetch('data/leaderboard.json')
    .then((response) => response.json())
    .then((data) => renderLeaderboard(data));
});

function renderLeaderboard(data) {
  const weekLabel = document.getElementById('week-label');
  weekLabel.textContent = `Week of ${data.week}`;

  const tbody = document.querySelector('#leaderboard-table tbody');
  data.leaderboard
    .sort((a, b) => b.xp - a.xp)
    .forEach((player, index) => {
      const tr = document.createElement('tr');
      const rankTd = document.createElement('td');
      const nameTd = document.createElement('td');
      const xpTd = document.createElement('td');
      const quizzesTd = document.createElement('td');

      rankTd.textContent = index + 1;
      nameTd.textContent = player.name;
      xpTd.textContent = player.xp;
      quizzesTd.textContent = player.quizzesWon;

      if (index === 0) {
        nameTd.innerHTML = `<span class="trophy">🏆</span>${player.name}`;
      }

      tr.appendChild(rankTd);
      tr.appendChild(nameTd);
      tr.appendChild(xpTd);
      tr.appendChild(quizzesTd);
      tbody.appendChild(tr);
    });
}
