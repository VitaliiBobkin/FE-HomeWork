import { EmojiModel } from "/src/js/model/EmojiModel.js";
import { EmojiView } from "/src/js/view/EmojiView.js";

const emojis = ["😀", "😂", "😍", "🥳", "😎"];
const model = new EmojiModel(emojis);
const view = new EmojiView();


const voteHandler = (index) => {
  model.addVote(index);
  view.renderEmojis(model.emojis, model.getVotes(), voteHandler);
};


const showResultsHandler = () => {
  const winner = model.getWinner();
  view.renderWinner(winner);
};


view.renderEmojis(model.emojis, model.getVotes(), voteHandler);
view.bindShowResults(showResultsHandler);
