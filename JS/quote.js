const quotes = [
  {
    quote:
      "당신이 생각하는 대로 되기를 두려워하지 마세요. 항상 믿고 꿈을 향해 나아가세요.",
    author: "월트 디즈니",
  },
  {
    quote: "당신의 미래는 당신의 행동에 달려 있습니다. 지금 당장 움직이세요.",
    author: "나폴레옹 힐",
  },
  {
    quote:
      "성공은 실패로부터 나오는 것이다. 더 많은 실패를 겪을수록 더 가까이 성공에 다가갑니다.",
    author: "마이클 조던",
  },
  {
    quote: "단순하게 시작하고, 과감하게 꾸준히 나아가라.",
    author: "존 A. 셜튼",
  },
  {
    quote: "매일 조금씩 나아가면 어느 날 큰 변화가 올 것이다.",
    author: "카렌 캘러만",
  },
  {
    quote: "당신은 무엇을 믿느냐에 따라 가능하다고 생각하는 것이 달라집니다.",
    author: "오브라이언",
  },
  {
    quote: "모든 어려움은 성장의 기회를 안고 있습니다.",
    author: "존 F. 케네디",
  },
  {
    quote:
      "계속해서 목표를 향해 나아가라. 언젠가는 당신이 원하는 곳에 도착할 것이다.",
    author: "닐 골만",
  },
  {
    quote:
      "성공의 핵심은 열정입니다. 당신이 무엇을 열정적으로 사랑하느냐에 따라 모든 것이 바뀝니다.",
    author: "오드리 햅번",
  },
  {
    quote:
      "당신이 원하는 것을 얻기 위해서는 당신이 얼마나 열정적으로 노력하는지가 중요하다.",
    author: "이디손",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuotes() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

randomQuotes();
