export const newGame = ({ commit }, levelData) => {
  const { highScore, moveCount } = levelData;

  commit('UPDATE_CURRENT_SCORE', 0);
  commit('UPDATE_HIGH_SCORE', highScore);
  commit('UPDATE_MOVE_COUNT', moveCount);
};

export const updateMoves = ({ commit, state }, moves) => {
  commit('UPDATE_MOVE_COUNT', state.moveCount + moves);
};

export const updateScore = ({ commit, state }, points) => {
  const newScore = state.currentScore + points;

  commit('UPDATE_CURRENT_SCORE', newScore);
  if (newScore > state.highScore) {
    commit('UPDATE_HIGH_SCORE', newScore);
  }
};
