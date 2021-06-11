const btn = document.getElementById('fetch');
const result = document.getElementById('result');

btn.addEventListener('click', async () => {
  const url = `/${encodeURIComponent('范')}.txt`;
  let response;

  try {
    response = await fetch(url);
  } catch (error) {
    console.error(error);
  }

  if (response) {
    const text = await response.text();
    result.textContent = text;
  } else {
    result.textContent = 'Error';
  }
});
