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
  resetGame: async function({ playerName }) {
    try {
      const url = '/api/reset-game';
      const type = 'application/json';
      const resp = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': type,
        },
        body: JSON.stringify({
          playerName,
        }),
      });
      return resp.json();
    } catch (error) {
      console.log('Server error', error);
      throw new Error('There has been a problem with your fetch operation');
    }
  },
};

export default apiService;
