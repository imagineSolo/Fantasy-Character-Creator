//--RESET FUNCTIONS--//
const resetGender = (e) => {
  e.preventDefault();
  genderType.textContent = "";
  genderType.style.backgroundColor = 'rgb(94, 32, 32)';
  racePanel.classList.add('hidden');
  genderType.classList.add('hidden');
  summaryGender.textContent = '';
  resetGenderButton.classList.add('hidden');
  genderForward.classList.add('hidden');
  document.getElementById('btnFemale').disabled = !true;
  document.getElementById('btnMale').disabled = !true;
  const selectedGender = document.querySelectorAll('div.genderSelection button.selected');
  for (let i = 0; i < selectedGender.length; i++) {
    selectedGender[i].classList.remove('selected');
  }
  const activeGender = document.querySelectorAll('div.genderSelection button.active');
  for (let i = 0; i < activeGender.length; i++) {
    activeGender[i].classList.remove('active');
  }
};

const resetRace = (e) => {
  e.preventDefault();
  raceType.textContent = "";
  raceType.style.backgroundColor = 'rgb(94, 32, 32)';
  namePanel.classList.add('hidden');
  summaryRace.textContent = '';
  raceType.classList.add('hidden');
  resetGenderButton.classList.remove('hidden');
  genderForward.classList.remove('hidden');
  document.getElementById('human').disabled = !true;
  document.getElementById('elf').disabled = !true;
  document.getElementById('dwarf').disabled = !true;
  document.getElementById('halfling').disabled = !true;
  const selectedRace = document.querySelectorAll('div.raceSelection button.selected');
  for (let i = 0; i < selectedRace.length; i++) {
    selectedRace[i].classList.remove('selected');
  }
  const activeRace = document.querySelectorAll('div.raceSelection button.active');
  for (let i = 0; i < activeRace.length; i++) {
    activeRace[i].classList.remove('active');
  }
};

const resetName = (e) => {
  e.preventDefault();
  nameValue.textContent = "";
  nameValue.classList.add('hidden');
  nameValue.style.backgroundColor = 'rgb(94, 32, 32)';
  resetNameButton.classList.add('hidden');
  nameForward.classList.add('hidden');
  summaryName.textContent = '';
  resetRaceButton.classList.remove('hidden');
  raceForward.classList.remove('hidden');
  genderPanel.classList.remove('hidden');
  classPanel.classList.add('hidden');
  document.getElementById('inputName').disabled = !true;
  document.getElementById('submitName').disabled = !true;
};

const resetClass = (e) => {
  e.preventDefault();
  classType.classList.add('hidden');
  classType.textContent = "";
  classType.style.backgroundColor = 'rgb(94, 32, 32)';
  resetClassButton.classList.add('hidden');
  classForward.classList.add('hidden');
  summaryClass.textContent = '';
  resetNameButton.classList.remove('hidden');
  portraitPanel.classList.add('hidden');
  document.getElementById('warrior').disabled = !true;
  document.getElementById('wizard').disabled = !true;
  document.getElementById('cleric').disabled = !true;
  document.getElementById('rogue').disabled = !true;
  const selectedClass = document.querySelectorAll('div.classSelection button.selected');
  for (let i = 0; i < selectedClass.length; i++) {
    selectedClass[i].classList.remove('selected');
  }
  const activeClass = document.querySelectorAll('div.classSelection button.active');
  for (let i = 0; i < activeClass.length; i++) {
    activeClass[i].classList.remove('active');
  }
};

const resetPortrait = (e) => {
  e.preventDefault();
  summaryPortrait.classList.add('hidden');
  resetPortraitButton.classList.add('hidden');
  portraitForward.classList.add('hidden');
  document.getElementById('portrait1').disabled = !true;
  document.getElementById('portrait2').disabled = !true;
  document.getElementById('portrait3').disabled = !true;
  document.getElementById('portrait4').disabled = !true;
  const selectedPortrait = document.querySelectorAll('div.portraitSelection img.selected');
  for (let i = 0; i < selectedPortrait.length; i++) {
    selectedPortrait[i].classList.remove('selected');
  }
  const activePortrait = document.querySelectorAll('div.portraitSelection img.active');
  for (let i = 0; i < activePortrait.length; i++) {
    activePortrait[i].classList.remove('active');
  }
};

resetAttributes.addEventListener('click', (e) => {
  e.preventDefault();

});

document.body.querySelector('.resetGender').addEventListener('click', resetGender);
document.body.querySelector('.resetRace').addEventListener('click', resetRace);
document.body.querySelector('.resetName').addEventListener('click', resetName);
document.body.querySelector('.resetClass').addEventListener('click', resetClass);
document.body.querySelector('.resetPortrait').addEventListener('click', resetPortrait);