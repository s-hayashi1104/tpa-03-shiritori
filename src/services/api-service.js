const apiService = {
  fetchUsedWords: function({ playerName }) {
    return fetch(`/api/used-words?playerName=${playerName}`)
      .then(resp => resp.json());
  },
  playWord: function({ playerName, inputWord }) {
    return fetch('/api/play-word', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName,
        inputWord,
      }),
    })
      .then(resp => resp.json());
  },
  resetGame: function({ playerName }) {
    return fetch('/api/reset-game', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName,
      }),
    })
      .then(resp => resp.json())
      .catch((error) => {
        console.log('Server error', error);
        throw new Error('There has been a problem with your fetch operation');
      });
  },
};

export default apiService;
