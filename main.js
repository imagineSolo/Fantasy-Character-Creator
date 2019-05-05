//--GETTING ELEMENTS--//
const start = document.querySelector('.start');
invitation = document.querySelector('.invitation');

summary = document.querySelector('.summary');
summaryName = document.querySelector('h2.summaryName span');
summaryGender = document.querySelector('p.summaryGender span');
summaryRace = document.querySelector('p.summaryRace span');
summaryClass = document.querySelector('p.summaryClass span');
summaryPortrait = document.querySelector('img.summaryPortrait');
summaryStrength = document.getElementById('summaryStrength');
summaryDexterity = document.getElementById('summaryDexterity');
summaryConstitution = document.getElementById('summaryConstitution');
summaryIntelligence = document.getElementById('summaryIntelligence');
summaryCharisma = document.getElementById('summaryCharisma');
summaryWillpower = document.getElementById('summaryWillpower');

resetGenderButton = document.querySelector('button.resetGender');
resetRaceButton = document.querySelector('button.resetRace');
resetNameButton = document.querySelector('button.resetName');
resetClassButton = document.querySelector('button.resetClass');
resetPortraitButton = document.querySelector('button.resetPortrait');
resetAttributes = document.querySelector('button.resetAttributes');

genderForward = document.querySelector('button.genderForward');
raceForward = document.querySelector('button.raceForward');
nameForward = document.querySelector('button.nameForward');
classForward = document.querySelector('button.classForward');
portraitForward = document.querySelector('button.portraitForward');
attributeForward = document.querySelector('button.attributeForward');

btnGender = document.querySelectorAll('button.gender');
btnRace = document.querySelectorAll('.charRace');
inputName = document.getElementById('inputName');
portraitSelect = document.querySelectorAll('.portraits button');

genderPanel = document.querySelector('div.genderSelection');
racePanel = document.querySelector('div.raceSelection');
namePanel = document.querySelector('div.nameSelection');
classPanel = document.querySelector('div.classSelection');
portraitPanel = document.querySelector('div.portraitSelection');
attributePanel = document.querySelector('div.attributeSelection');

genderType = document.querySelector('.genderSelected');
raceType = document.querySelector('.raceSelected');
nameValue = document.querySelector('.nameSelected');
classType = document.querySelector('.classSelected');
attributeValue = document.querySelectorAll('.attribute span')

portraits = document.getElementById('portraits');
portrait1 = document.getElementById('portrait1');
portrait2 = document.getElementById('portrait2');
portrait3 = document.getElementById('portrait3');
portrait4 = document.getElementById('portrait4');

strValue = document.getElementById('strValue');
dexValue = document.getElementById('dexValue');
conValue = document.getElementById('conValue');
intValue = document.getElementById('intValue');
chaValue = document.getElementById('chaValue');
willValue = document.getElementById('willValue');
pointsLeft = document.querySelector('.pointsLeft span');

//--RESET FUNCTIONS--//
const resetGender = (e) => {
    e.preventDefault();
    genderType.textContent = "";
    genderType.style.backgroundColor = 'rgb(94, 32, 32)';
    racePanel.classList.add('hidden');
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

//--MAIN FUNCTIONS--
document.body.querySelector('.start').addEventListener('click', startGame = (e) => {
    e.preventDefault();
    invitation.classList.add('hidden');
    summary.classList.remove('hidden');
    genderPanel.classList.remove('hidden');
});

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
            genderType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryGender.textContent = genderType.textContent;
        }
        if (e.target.classList.contains('male')) {
            genderType.textContent = 'Male';
            genderType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryGender.textContent = genderType.textContent;
        }
    }
}));

document.body.querySelector('.raceSelection').addEventListener('click', function raceSelect(e) {
    if (e.target.classList.contains('charRace')) {
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
            summaryRace.textContent = 'Human';
            chaValue.innerHTML = parseInt(chaValue.innerHTML) + 1;
            willValue.innerHTML = parseInt(willValue.innerHTML) - 1;
        }
        if (e.target.classList.contains('elf')) {
            raceType.textContent = `You chose an elf.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Elf';
            intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
            conValue.innerHTML = parseInt(conValue.innerHTML) - 1;
        }
        if (e.target.classList.contains('dwarf')) {
            raceType.textContent = `You chose a dwarf.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Dwarf';
            conValue.innerHTML = parseInt(conValue.innerHTML) + 1;
            dexValue.innerHTML = parseInt(dexValue.innerHTML) - 1;

        }
        if (e.target.classList.contains('halfling')) {
            raceType.textContent = `You chose a halfling.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Halfling';
            dexValue.innerHTML = parseInt(dexValue.innerHTML) + 1;
            strValue.innerHTML = parseInt(strValue.innerHTML) - 1;
        }
    }
});

document.body.querySelector('.submitName').addEventListener('click', function nameSelect(e) {
    e.preventDefault();
    const userNameSelection = inputName.value;
    if (typeof userNameSelection === 'string') {
        nameValue.textContent = `You'll be known as ${userNameSelection}!`;
        nameValue.style.backgroundColor = 'rgb(75, 19, 19)';
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
            summaryClass.textContent = 'Warrior';
            strValue.innerHTML = parseInt(strValue.innerHTML) + 1;
            conValue.innerHTML = parseInt(conValue.innerHTML) + 1;
        }
        if (e.target.classList.contains('wizard')) {
            classType.textContent = `You chose a Wizard class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Wizard';
            intValue.innerHTML = parseInt(intValue.innerHTML) + 1;
            willValue.innerHTML = parseInt(willValue.innerHTML) + 1;
        }
        if (e.target.classList.contains('cleric')) {
            classType.textContent = `You chose a Cleric class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Cleric';
            chaValue.innerHTML = parseInt(chaValue.innerHTML) + 1;
            willValue.innerHTML = parseInt(willValue.innerHTML) + 1;
        }
        if (e.target.classList.contains('rogue')) {
            classType.textContent = `You chose a Rogue class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
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
        img1.src = 'img/portraits/Dwarf/Male/dwarfMale01.bmp';
        img2.src = 'img/portraits/Dwarf/Male/dwarfMale02.bmp';
        img3.src = 'img/portraits/Dwarf/Male/dwarfMale03.bmp';
        img4.src = 'img/portraits/Dwarf/Male/dwarfMale04.bmp';
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

    document.getElementById('strMinus').addEventListener('click', () => {
        if (parseInt(document.getElementById('strValue').innerHTML) > 3) {
            strValue.innerHTML = parseInt(strValue.innerHTML) - 1;
            pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
        }
    });

    document.getElementById('dexPlus').addEventListener('click', () => {
        if (parseInt(pointsLeft.innerHTML) > 0 && document.getElementById('dexValue').innerHTML < 20) {
            dexValue.innerHTML = parseInt(dexValue.innerHTML) + 1;
            pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) - 1;
        }
    });

    document.getElementById('dexMinus').addEventListener('click', () => {
        if (parseInt(document.getElementById('dexValue').innerHTML) > 3) {
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
            willValue.innerHTML = parseInt(willValue.innerHTML) - 1;
            pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
        }
    });
};

document.body.querySelector('.resetGender').addEventListener('click', resetGender);
document.body.querySelector('.resetRace').addEventListener('click', resetRace);
document.body.querySelector('.resetName').addEventListener('click', resetName);
document.body.querySelector('.resetClass').addEventListener('click', resetClass);
document.body.querySelector('.resetPortrait').addEventListener('click', resetPortrait);