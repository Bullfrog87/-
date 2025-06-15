
function generateQuestions() {
  const topic = document.getElementById('topicInput').value.trim();
  const output = document.getElementById('questionOutput');
  output.innerHTML = "";

  if (!topic) {
    output.innerHTML = "<p>請先輸入主題！</p>";
    return;
  }

  const questions = [
    `你為什麼對「${topic}」感興趣？`,
    `「${topic}」在你生活中扮演什麼角色？`,
    `你覺得未來「${topic}」會變成什麼樣子？`,
    `有哪些人或事件影響了你對「${topic}」的看法？`,
    `如果你要說服別人重視「${topic}」，你會怎麼說？`
  ];

  output.innerHTML = "<h3>生成的問題：</h3><ul>" +
    questions.map(q => `<li>${q}</li>`).join('') +
    "</ul>";
}
