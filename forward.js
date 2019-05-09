//--FORWARD FUNCTIONS--//
genderForward.addEventListener('click', (e) => {
  e.preventDefault();
  racePanel.classList.remove('hidden');
});

raceForward.addEventListener('click', (e) => {
  e.preventDefault();
  namePanel.classList.remove('hidden');
});

nameForward.addEventListener('click', (e) => {
  e.preventDefault();
  genderPanel.classList.add('hidden');
  classPanel.classList.remove('hidden');
});

classForward.addEventListener('click', (e) => {
  e.preventDefault();
  racePanel.classList.add('hidden');
  namePanel.classList.add('hidden');
  portraitPanel.classList.remove('hidden');
  portraitSelection();
});

portraitForward.addEventListener('click', (e) => {
  e.preventDefault();
  classPanel.classList.add('hidden');
  portraitPanel.classList.add('hidden');
  attributePanel.classList.remove('hidden');
  attributeSelect();
});

attributeForward.addEventListener('click', (e) => {
  e.preventDefault();
  if (pointsLeft.textContent === '0') {
    summaryStrength.textContent = strValue.textContent;
    summaryDexterity.innerHTML = dexValue.textContent;
    summaryConstitution.innerHTML = conValue.textContent;
    summaryIntelligence.innerHTML = intValue.textContent;
    summaryCharisma.innerHTML = chaValue.textContent;
    summaryWillpower.innerHTML = willValue.textContent;
  } else {
    alert('You have points left to spend!');
  }
});