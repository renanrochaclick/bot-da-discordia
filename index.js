const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/sorteio', (req, res) => {
  const now = new Date();
  const day = now.getDay();

  if (day === 6 || day === 0) {
    return;
  } else if (day === 5) {
    res.send({ "winner": 'Hoje é sexta-feira, dia de corrida dos patos.' });
    return;
  }

  const names = ["Renata", "Janaina", "Percinio", "Larissa", "Renan", "Luigi", "Naira", "Julia", "Antonio"];
  const winner = names[Math.floor(Math.random() * names.length)];

  res.send({ "winner": `${winner} você terá o grandissímo prazer de apresentar a KM hoje.` });
});

app.listen(port, () => {
  console.log(`Bot de sorteio rodando na porta ${port}`);
});