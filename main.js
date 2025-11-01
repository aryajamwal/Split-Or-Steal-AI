const PAYOFF = {
  Split: { Split: [2, 2], Steal: [1, 3] },
  Steal: { Split: [3, 1], Steal: [-1, -1] },
};
let playerScore = 0;
let aiScore = 0;
let rounds = 0;
let history = [];
let aiMemory = [];

function chooseAI(playerLast, mode) {
  if (mode === "Random") return Math.random() < 0.5 ? "Split" : "Steal";
  if (mode === "Tit-for-Tat") return playerLast ? playerLast : "Split";
  if (mode === "Grim Trigger") {
    if (aiMemory.includes("Steal")) return "Steal";
    return playerLast === "Steal" ? "Steal" : "Split";
  }
  if (mode === "Adaptive") {
    let recent = history.slice(-5);
    let coopRate = recent.filter(h => h.player === "Split").length / (recent.length || 1);
    return Math.random() < coopRate ? "Split" : "Steal";
  }
  return "Split";
}

function play(playerMove) {
  const mode = document.getElementById("mode").value;
  const last = history[history.length - 1]?.player;
  const aiMove = chooseAI(last, mode);
  const [aiGain, playerGain] = PAYOFF[aiMove][playerMove];
  aiScore += aiGain;
  playerScore += playerGain;
  rounds++;
  history.push({ round: rounds, player: playerMove, ai: aiMove });
  aiMemory.push(aiMove);

  const target = parseInt(document.getElementById("target").value) || 20;
  let message = `You chose ${playerMove}, AI chose ${aiMove}.`;
  if (playerScore >= target) message += " You win!";
  if (aiScore >= target) message += " AI wins!";

  document.getElementById("roundInfo").innerText = `Rounds Played: ${rounds}`;
  document.getElementById("scoreInfo").innerText = `You: ${playerScore} | AI: ${aiScore}`;
  document.getElementById("result").innerText = message;
}

function resetAll() {
  playerScore = 0;
  aiScore = 0;
  rounds = 0;
  history = [];
  aiMemory = [];
  document.getElementById("roundInfo").innerText = "Rounds Played: 0";
  document.getElementById("scoreInfo").innerText = "You: 0 | AI: 0";
  document.getElementById("result").innerText = "";
}
