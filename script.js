async function generateQuestions() {
  const topic = document.getElementById('topicInput').value.trim();
  const output = document.getElementById('questionOutput');
  output.innerHTML = "";

  if (!topic) {
    output.innerHTML = "<p>請先輸入主題！</p>";
    return;
  }

  output.innerHTML = "<p>正在產生問題中...</p>";

  try {
    const res = await fetch('https://66d0974c-8ae5-4d23-b1e6-026161b1dffd-00-3kqsu1q5q61y3.pike.replit.dev/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic })
    });

    const data = await res.json();
    output.innerHTML = "<h3>生成的問題：</h3><p>" + data.questions.replace(/\n/g, "<br>") + "</p>";
  } catch (err) {
    console.error(err);
    output.innerHTML = "<p>產生問題時發生錯誤，請稍後再試。</p>";
  }
}
