//--MAIN FUNCTIONS--//
btnGender.forEach((gender) => gender.addEventListener('click', function genderSelect(e) {
  if (e.target.classList.contains('gender')) {
    resetGenderButton.classList.remove('hidden');
    genderForward.classList.remove('hidden');
    this.classList.add('selected');
    this.classList.add('active');
    document.getElementById('btnFemale').disabled = true;
    document.getElementById('btnMale').disabled = true;
    if (e.target.classList.contains('female')) {
      genderType.textContent = 'Female';
      genderType.classList.remove('hidden');
      genderType.style.backgroundColor = 'rgb(75, 19, 19)';
      genderType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryGender.textContent = genderType.textContent;
    }
    if (e.target.classList.contains('male')) {
      genderType.textContent = 'Male';
      genderType.classList.remove('hidden');
      genderType.style.backgroundColor = 'rgb(75, 19, 19)';
      genderType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryGender.textContent = genderType.textContent;
    }
  }
}));

document.body.querySelector('.raceSelection').addEventListener('click', function raceSelect(e) {
  if (e.target.classList.contains('charRace')) {
    raceType.classList.remove('hidden');
    resetRaceButton.classList.remove('hidden');
    raceForward.classList.remove('hidden');
    resetGenderButton.classList.add('hidden');
    genderForward.classList.add('hidden');
    e.target.classList.add('selected');
    e.target.classList.add('active');
    document.getElementById('human').disabled = true;
    document.getElementById('elf').disabled = true;
    document.getElementById('dwarf').disabled = true;
    document.getElementById('halfling').disabled = true;
    if (e.target.classList.contains('human')) {
      raceType.textContent = `You chose a human.`;
      raceType.style.backgroundColor = 'rgb(75, 19, 19)';
      raceType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryRace.textContent = 'Human';
      chaValue.innerHTML = parseInt(chaValue.innerHTML) + 1;
      willValue.innerHTML = parseInt(willValue.innerHTML) - 1;
    }
    if (e.target.classList.contains('elf')) {
      raceType.textContent = `You chose an elf.`;
      raceType.style.backgroundColor = 'rgb(75, 19, 19)';
      raceType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryRace.textContent = 'Elf';
      intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
      conValue.innerHTML = parseInt(conValue.innerHTML) - 1;
    }
    if (e.target.classList.contains('dwarf')) {
      raceType.textContent = `You chose a dwarf.`;
      raceType.style.backgroundColor = 'rgb(75, 19, 19)';
      raceType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryRace.textContent = 'Dwarf';
      conValue.innerHTML = parseInt(conValue.innerHTML) + 1;
      dexValue.innerHTML = parseInt(dexValue.innerHTML) - 1;

    }
    if (e.target.classList.contains('halfling')) {
      raceType.textContent = `You chose a halfling.`;
      raceType.style.backgroundColor = 'rgb(75, 19, 19)';
      raceType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryRace.textContent = 'Halfling';
      dexValue.innerHTML = parseInt(dexValue.innerHTML) + 1;
      strValue.innerHTML = parseInt(strValue.innerHTML) - 1;
    }
  }
});

document.body.querySelector('.submitName').addEventListener('click', function nameSelect(e) {
  e.preventDefault();
  const userNameSelection = inputName.value;
  nameValue.classList.remove('hidden');
  if (typeof userNameSelection === 'string') {
    nameValue.textContent = `You'll be known as ${userNameSelection}!`;
    nameValue.style.backgroundColor = 'rgb(75, 19, 19)';
    nameValue.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
    inputName.value = "";
    resetNameButton.classList.remove('hidden');
    nameForward.classList.remove('hidden');
    summaryName.textContent = userNameSelection;
    resetRaceButton.classList.add('hidden');
    raceForward.classList.add('hidden');
    document.getElementById('inputName').disabled = true;
    document.getElementById('submitName').disabled = true;
  }
  if (typeof userNameSelection === 'number' || userNameSelection.length == 0) {
    alert('Input name!');
  }
});

document.body.querySelector('.classSelection').addEventListener('click', function classSelect(e) {
  if (e.target.classList.contains('charClass')) {
    classType.classList.remove('hidden');
    resetClassButton.classList.remove('hidden');
    classForward.classList.remove('hidden');
    resetNameButton.classList.add('hidden');
    nameForward.classList.add('hidden');
    e.target.classList.add('selected');
    e.target.classList.add('active');
    document.getElementById('warrior').disabled = true;
    document.getElementById('wizard').disabled = true;
    document.getElementById('cleric').disabled = true;
    document.getElementById('rogue').disabled = true;
    if (e.target.classList.contains('warrior')) {
      classType.textContent = `You chose a Warrior class!`;
      classType.style.backgroundColor = 'rgb(75, 19, 19)';
      classType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryClass.textContent = 'Warrior';
      strValue.innerHTML = parseInt(strValue.innerHTML) + 1;
      conValue.innerHTML = parseInt(conValue.innerHTML) + 1;
    }
    if (e.target.classList.contains('wizard')) {
      classType.textContent = `You chose a Wizard class!`;
      classType.style.backgroundColor = 'rgb(75, 19, 19)';
      classType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryClass.textContent = 'Wizard';
      intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
      willValue.innerHTML = parseInt(willValue.innerHTML) + 1;
    }
    if (e.target.classList.contains('cleric')) {
      classType.textContent = `You chose a Cleric class!`;
      classType.style.backgroundColor = 'rgb(75, 19, 19)';
      classType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryClass.textContent = 'Cleric';
      chaValue.innerHTML = parseInt(chaValue.innerHTML) + 1;
      willValue.innerHTML = parseInt(willValue.innerHTML) + 1;
    }
    if (e.target.classList.contains('rogue')) {
      classType.textContent = `You chose a Rogue class!`;
      classType.style.backgroundColor = 'rgb(75, 19, 19)';
      classType.style.boxShadow = 'inset 0px 0px 14px -1px rgba(31,4,4,1)';
      summaryClass.textContent = 'Rogue';
      dexValue.innerHTML = parseInt(dexValue.innerHTML) + 1;
      intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
    }
  }
});

const portraitSelection = () => {
  const img1 = new Image();
  const img2 = new Image();
  const img3 = new Image();
  const img4 = new Image();

  img1.onload = function () {
    portrait1.appendChild(img1);
  };

  img2.onload = function () {
    portrait2.appendChild(img2);
  };

  img3.onload = function () {
    portrait3.appendChild(img3);
  };

  img4.onload = function () {
    portrait4.appendChild(img4);
  };

  if (summaryGender.textContent === 'Female' && summaryRace.textContent === 'Human') {
    img1.src = 'img/portraits/Human/Female/humFemale01.bmp';
    img2.src = 'img/portraits/Human/Female/humFemale02.bmp';
    img3.src = 'img/portraits/Human/Female/humFemale03.bmp';
    img4.src = 'img/portraits/Human/Female/humFemale04.bmp';
  }
  if (summaryGender.textContent === 'Male' && summaryRace.textContent === 'Human') {
    img1.src = 'img/portraits/Human/Male/humMale01.bmp';
    img2.src = 'img/portraits/Human/Male/humMale02.bmp';
    img3.src = 'img/portraits/Human/Male/humMale03.bmp';
    img4.src = 'img/portraits/Human/Male/humMale04.bmp';
  }
  if (summaryGender.textContent === 'Female' && summaryRace.textContent === 'Elf') {
    img1.src = 'img/portraits/Elf/Female/elfFemale01.bmp';
    img2.src = 'img/portraits/Elf/Female/elfFemale02.bmp';
    img3.src = 'img/portraits/Elf/Female/elfFemale03.bmp';
    img4.src = 'img/portraits/Elf/Female/elfFemale04.bmp';
  }
  if (summaryGender.textContent === 'Male' && summaryRace.textContent === 'Elf') {
    img1.src = 'img/portraits/Elf/Male/elfMale01.bmp';
    img2.src = 'img/portraits/Elf/Male/elfMale02.bmp';
    img3.src = 'img/portraits/Elf/Male/elfMale03.bmp';
    img4.src = 'img/portraits/Elf/Male/elfMale04.bmp';
  }
  if (summaryGender.textContent === 'Female' && summaryRace.textContent === 'Dwarf') {
    img1.src = 'img/portraits/Dwarf/Female/dwarfFemale01.bmp';
    img2.src = 'img/portraits/Dwarf/Female/dwarfFemale02.bmp';
    img3.src = 'img/portraits/Dwarf/Female/dwarfFemale03.bmp';
    img4.src = 'img/portraits/Dwarf/Female/dwarfFemale04.bmp';
  }
  if (summaryGender.textContent === 'Male' && summaryRace.textContent === 'Dwarf') {
    img1.src = 'img/portraits/Dwarf/Male/DwarfMale01.bmp';
    img2.src = 'img/portraits/Dwarf/Male/DwarfMale02.bmp';
    img3.src = 'img/portraits/Dwarf/Male/DwarfMale03.bmp';
    img4.src = 'img/portraits/Dwarf/Male/DwarfMale04.bmp';
  }
  if (summaryGender.textContent === 'Female' && summaryRace.textContent === 'Halfling') {
    img1.src = 'img/portraits/Halfling/Female/halfFemale01.bmp';
    img2.src = 'img/portraits/Halfling/Female/halfFemale02.bmp';
    img3.src = 'img/portraits/Halfling/Female/halfFemale03.bmp';
    img4.src = 'img/portraits/Halfling/Female/halfFemale04.bmp';
  }
  if (summaryGender.textContent === 'Male' && summaryRace.textContent === 'Halfling') {
    img1.src = 'img/portraits/Halfling/Male/halfMale01.bmp';
    img2.src = 'img/portraits/Halfling/Male/halfMale02.bmp';
    img3.src = 'img/portraits/Halfling/Male/halfMale03.bmp';
    img4.src = 'img/portraits/Halfling/Male/halfMale04.bmp';
  }
};

portraitSelect.forEach((portrait) => portrait.addEventListener('click', function portraitSelect(e) {
  resetPortraitButton.classList.remove('hidden');
  portraitForward.classList.remove('hidden');
  e.target.classList.add('selected');
  e.target.classList.add('active');
  document.getElementById('portrait1').disabled = true;
  document.getElementById('portrait2').disabled = true;
  document.getElementById('portrait3').disabled = true;
  document.getElementById('portrait4').disabled = true;
  summaryPortrait.classList.remove('hidden');
  summaryPortrait.src = e.target.src;
}));

const attributeSelect = () => {
  document.getElementById('strPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && strValue.innerHTML < 20) {
      strValue.innerHTML = parseInt(strValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('strMinus').addEventListener('click', (e) => {
    if (parseInt(document.getElementById('strValue').innerHTML) > 3) {
      strValue.innerHTML = parseInt(strValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
      if (summaryClass.textContent == 'Warrior' && parseInt(strValue.innerHTML) === 4) return;
    }
  });

  document.getElementById('dexPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('dexValue').innerHTML < 20) {
      dexValue.innerHTML = parseInt(dexValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('dexMinus').addEventListener('click', (e) => {
    if (parseInt(document.getElementById('dexValue').innerHTML) > 3) {
      if (summaryRace.textContent == 'Halfling' && parseInt(dexValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Rogue' && parseInt(dexValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Rogue' && summaryRace.textContent == 'Halfling' && parseInt(dexValue.innerHTML) === 5) return;
      dexValue.innerHTML = parseInt(dexValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
  });

  document.getElementById('conPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('conValue').innerHTML < 20) {
      conValue.innerHTML = parseInt(conValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('conMinus').addEventListener('click', () => {
    if (parseInt(document.getElementById('conValue').innerHTML) > 3) {
      if (summaryRace.textContent == 'Dwarf' && parseInt(conValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Warrior' && parseInt(conValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Warrior' && summaryRace.textContent == 'Dwarf' && parseInt(conValue.innerHTML) === 5) return;
      conValue.innerHTML = parseInt(conValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
  });

  document.getElementById('intPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('intValue').innerHTML < 20) {
      intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('intMinus').addEventListener('click', () => {
    if (parseInt(document.getElementById('intValue').innerHTML) > 3) {
      if (summaryRace.textContent == 'Elf' && parseInt(intValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Wizard' && parseInt(intValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Wizard' && summaryRace.textContent == 'Elf' && parseInt(intValue.innerHTML) === 5) return;
      if (summaryClass.textContent == 'Rogue' && summaryRace.textContent == 'Elf' && parseInt(intValue.innerHTML) === 5) return;
      intValue.innerHTML = parseInt(intValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
  });

  document.getElementById('chaPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('chaValue').innerHTML < 20) {
      chaValue.innerHTML = parseInt(chaValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('chaMinus').addEventListener('click', () => {
    if (parseInt(document.getElementById('chaValue').innerHTML) > 3) {
      if (summaryRace.textContent == 'Human' && parseInt(chaValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Cleric' && parseInt(chaValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Cleric' && summaryRace.textContent == 'Human' && parseInt(chaValue.innerHTML) === 5) return;
      chaValue.innerHTML = parseInt(chaValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
  });

  document.getElementById('willPlus').addEventListener('click', () => {
    if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('willValue').innerHTML < 20) {
      willValue.innerHTML = parseInt(willValue.innerHTML) + 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
    }
  });

  document.getElementById('willMinus').addEventListener('click', () => {
    if (parseInt(document.getElementById('willValue').innerHTML) > 3) {
      if (summaryClass.textContent == 'Wizard' && parseInt(willValue.innerHTML) === 4) return;
      if (summaryClass.textContent == 'Cleric' && parseInt(willValue.innerHTML) === 4) return;
      willValue.innerHTML = parseInt(willValue.innerHTML) - 1;
      pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
  });
};