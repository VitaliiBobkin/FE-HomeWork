export class EmojiModel {
  constructor(emojis) {
    this.emojis = emojis;
    this.votes = new Array(emojis.length).fill(0);
  }

  addVote(index) {
    this.votes[index]++;
  }

  getVotes() {
    return this.votes;
  }

  getWinner() {
    const maxVotes = Math.max(...this.votes);
    if (maxVotes === 0) return null;
    const winnerIndex = this.votes.indexOf(maxVotes);
    return { emoji: this.emojis[winnerIndex], votes: maxVotes };
  }
}
