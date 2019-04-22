//--GETTING ELEMENTS--
const start = document.querySelector('.start');
invitation = document.querySelector('.invitation');

summary = document.querySelector('.summary');
summaryName = document.querySelector('h2.summaryName span');
summaryGender = document.querySelector('p.summaryGender span');
summaryRace = document.querySelector('p.summaryRace span');
summaryClass = document.querySelector('p.summaryClass span');

resetGenderButton = document.querySelector('button.resetGender');
resetRaceButton = document.querySelector('button.resetRace');
resetNameButton = document.querySelector('button.resetName');
resetClassButton = document.querySelector('button.resetClass');
resetPortrait = document.querySelector('button.resetPortrait');

genderForward = document.querySelector('button.genderForward');
raceForward = document.querySelector('button.raceForward');
nameForward = document.querySelector('button.nameForward');
classForward = document.querySelector('button.classForward');

btnGender = document.querySelectorAll('button.gender');
btnRace = document.querySelectorAll('.charRace');

genderPanel = document.querySelector('div.genderSelection');
racePanel = document.querySelector('div.raceSelection');
namePanel = document.querySelector('div.nameSelection');
classPanel = document.querySelector('div.classSelection');
portraitPanel = document.querySelector('div.portraitSelection');
genderType = document.querySelector('.genderSelected');
raceType = document.querySelector('.raceSelected');
nameValue = document.body.querySelector('.nameSelected');
classType = document.body.querySelector('.classSelected');
portraitType = document.body.querySelector('.portraitSelected');


//--RESET & FORWARD FUNCTIONS--
const resetGender = (e) => {
    e.preventDefault();
    genderType.textContent = "";
    genderType.style.backgroundColor = 'rgb(94, 32, 32)';
    racePanel.classList.add('hidden');
    summaryGender.textContent = '';
    document.getElementById('btnFemale').disabled = !true;
    document.getElementById('btnMale').disabled = !true;
}
const resetRace = (e) => {
    e.preventDefault();
    raceType.textContent = "";
    raceType.style.backgroundColor = 'rgb(94, 32, 32)';
    namePanel.classList.add('hidden');
    summaryRace.textContent = '';
    resetGenderButton.classList.remove('hidden');
    genderForward.classList.remove('hidden');
}
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
}
const resetClass = (e) => {
    e.preventDefault();
    classType.textContent = "";
    classType.style.backgroundColor = 'rgb(94, 32, 32)';
    resetClassButton.classList.add("hidden");
    summaryClass.textContent = '';
    resetNameButton.classList.remove('hidden');
}

genderForward.addEventListener('click', (e) => {
    e.preventDefault();
    racePanel.classList.remove('hidden');
    document.getElementById('btnFemale').disabled = true;
    document.getElementById('btnMale').disabled = true;
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
});

//--FUNCTIONS--
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
        if (e.target.classList.contains('human')) {
            raceType.textContent = `You chose a human.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Human';
        }
        if (e.target.classList.contains('elf')) {
            raceType.textContent = `You chose an elf.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Elf';
        }
        if (e.target.classList.contains('dwarf')) {
            raceType.textContent = `You chose a dwarf.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Dwarf';
        }
        if (e.target.classList.contains('halfling')) {
            raceType.textContent = `You chose a halfling.`;
            raceType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryRace.textContent = 'Halfling';
        }
    }
});

document.body.querySelector('.submitName').addEventListener('click', function nameSelect(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const userNameSelection = input.value;
    if (userNameSelection) {
        nameValue.textContent = `You'll be known as ${userNameSelection}!`;
        nameValue.style.backgroundColor = 'rgb(75, 19, 19)';
        input.value = "";
        resetNameButton.classList.remove('hidden');
        nameForward.classList.remove('hidden');
        summaryName.textContent = userNameSelection;
        resetRaceButton.classList.add('hidden');
        raceForward.classList.add('hidden');
    }
    if (!userNameSelection || userNameSelection === number) {
        alert('Input name!');
        nameValue.textContent = "";
    }
});

document.body.querySelector('.classSelection').addEventListener('click', function classSelect(event) {
    if (event.target.classList.contains('charClass')) {
        resetClassButton.classList.remove('hidden');
        resetNameButton.classList.add('hidden');
        nameForward.classList.add('hidden');
        classForward.classList.remove('hidden');
        if (event.target.classList.contains('warrior')) {
            classType.textContent = `You chose a Warrior class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Warrior'
        }
        if (event.target.classList.contains('wizard')) {
            classType.textContent = `You chose a Wizard class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Wizard';
        }
        if (event.target.classList.contains('cleric')) {
            classType.textContent = `You chose a Cleric class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Cleric';
        }
        if (event.target.classList.contains('rogue')) {
            classType.textContent = `You chose a Rogue class!`;
            classType.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Rogue';
        }
    }
});

document.body.querySelector('.resetGender').addEventListener('click', resetGender);
document.body.querySelector('.resetRace').addEventListener('click', resetRace);
document.body.querySelector('.resetName').addEventListener('click', resetName);
document.body.querySelector('.resetClass').addEventListener('click', resetClass);