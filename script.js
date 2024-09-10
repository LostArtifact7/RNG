var sheet = document.styleSheets[0];
sheet.insertRule(`
  @keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(currentColor, 0.1);
  }
  50% {
    text-shadow: 0 0 10px rgba(currentColor, 1);
  }
  100% {
    text-shadow: 0 0 10px rgba(currentColor, 0.1);
  }
}
`, sheet.cssRules.length);

var arrayShuffle = function(array) {
  for (var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++) {
    swap = Math.floor(Math.random() * (i + 1));
    temp = array[swap];
    array[swap] = array[i];
    array[i] = temp;
  }
  return array;
};

var percentageChance = function(values, chances) {
  for (var i = 0, pool = []; i < chances.length; i++) {
    for (var i2 = 0; i2 < chances[i]; i2++) {
      pool.push(i);
    }
  }
  return values[arrayShuffle(pool)['0']];
};

const wordColors = {
  Silverleaf: { display: 'Silverleaf', color: 'silver', chance: '2', realchance: '50' },
  Ironfang: { display: 'Ironfang', color: 'white', chance: '4', realchance: '25' },
  Boneblade: { display: 'Boneblade', color: '#F2EBE3', chance: '8', realchance: '12' },
  Shatterblade: { display: 'Shatter Blade', color: 'purple', chance: '16', realchance: '6' },
  Crimsonshard: { display: 'Crimson Shard', color: 'red', chance: '32', realchance: '3' },
  Foulfang: { display: 'Foul Fang', color: 'grey', chance: '64', realchance: '1.7' },
  Heavensfaith: { display: 'Heaven\'s Faith', color: 'yellow', chance: '128', realchance: '0.5' },
  Voidwalker: { display: 'Voidwalker', color: 'blue', chance: '256', realchance: '0.25' },
  ValhallaVanguard: { display: 'Valhalla Vanguard', color: 'green', chance: '512', realchance: '0.125' },
  Luminescene: { display: 'Luminesence', color: 'orange', chance: '1024', realchance: '0.0025' },
  Plasmaedge: { display: 'Plasma Edge', color: 'pink', chance: '2048', realchance: '0.00125' },
  Goldenblossom: { display: 'Golden Blossom', color: 'Gold', chance: '4096', realchance: '0.000125' },
};

function buttonPercent() {
  const elements = document.querySelectorAll("#word, #chance");

  elements.forEach((element) => {
    element.style.fontFamily = 'Roboto';
    element.style.fontSize = '50px';
    element.style.textAlign = 'center';
    element.style.color = 'white';
  });

  const chosenWord = percentageChance(Object.keys(wordColors), Object.values(wordColors).map((word) => word.realchance));
  const wordColor = wordColors[chosenWord].color;

  document.getElementById("word").innerHTML = wordColors[chosenWord].display;
  document.getElementById("word").style.color = wordColor;
  document.getElementById("word").style.textShadow = '0 0 10px ' + wordColor
  document.getElementById("word").classList.add(`glow-${wordColor}`);
  document.getElementById("chance").innerHTML = "1 in " + wordColors[chosenWord].chance;
  document.getElementById("word").style.animation = `glow 2s ease-in-out infinite`;
}
