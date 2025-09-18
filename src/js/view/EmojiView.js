export class EmojiView {
  constructor() {
    this.container = document.getElementById("emoji-container");
    this.winnerEl = document.getElementById("winner");
    this.showResultsBtn = document.getElementById("show-results");
  }

  renderEmojis(emojis, votes, voteCallback) {
    this.container.innerHTML = "";

    emojis.forEach((emoji, index) => {
      const div = document.createElement("div");

      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-primary", "emoji-btn");
      btn.textContent = emoji;
      btn.addEventListener("click", () => voteCallback(index));

      const voteCount = document.createElement("div");
      voteCount.className = "votes";
      voteCount.textContent = `votes: ${votes[index]}`;

      div.appendChild(btn);
      div.appendChild(voteCount);
      this.container.appendChild(div);
    });
  }

  renderWinner(winner) {
    if (!winner) {
      this.winnerEl.textContent = "Nobody voted. 😢";
    } else {
      this.winnerEl.textContent = `The smiley won: ${winner.emoji} with ${winner.votes} votes`;
    }
  }

  bindShowResults(handler) {
    this.showResultsBtn.addEventListener("click", handler);
  }
}
