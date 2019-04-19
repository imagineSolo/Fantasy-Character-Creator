//--GETTING ELEMENTS--
const start = document.querySelector('.start');
const invitation = document.querySelector('.invitation');

const summary = document.querySelector('.summary');
const summaryName = document.querySelector('h2.summaryName span');
const summaryGender = document.querySelector('p.summaryGender span');
const summaryRace = document.querySelector('p.summaryRace span');
const summaryClass = document.querySelector('p.summaryClass span');

const resetGenderButton = document.querySelector('button.resetGender');
const resetRaceButton = document.querySelector('button.resetRace');
const resetNameButton = document.querySelector('button.resetName');
const resetClassButton = document.querySelector('button.resetClass');
const showHidden = document.querySelector('.hidden');

const genderForward = document.querySelector('button.genderForward');
const raceForward = document.querySelector('button.raceForward');
const nameForward = document.querySelector('button.nameForward');
const classForward = document.querySelector('button.classForward');

const btnGender = document.querySelectorAll('button.gender');
const btnRace = document.querySelectorAll('.charRace');

const genderPanel = document.querySelector('div.genderSelection');
const racePanel = document.querySelector('div.raceSelection');
const namePanel = document.querySelector('div.nameSelection');
const classPanel = document.querySelector('div.classSelection');
const genderType = document.querySelector('.genderSelected');
const raceType = document.querySelector('.raceSelected');
const nameValue = document.body.querySelector('.nameSelected');
const classValue = document.body.querySelector('.classSelected');


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
    showHidden.classList.remove('hidden');
    summaryName.textContent = '';
    resetRaceButton.classList.remove('hidden');
    raceForward.classList.remove('hidden');
}
const resetClass = (e) => {
    e.preventDefault();
    classValue.textContent = "";
    classValue.style.backgroundColor = 'rgb(94, 32, 32)';
    resetClassButton.classList.add("hidden");
    summaryClass.textContent = '';
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
    btnRace.getAttribute('disabled');
});

nameForward.addEventListener('click', (e) => {
    e.preventDefault();
    genderPanel.classList.add('hidden');
    classPanel.classList.remove('hidden');
    submitName.getAttribute('disabled');
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
        if (event.target.classList.contains('warrior')) {
            classValue.textContent = `You chose a Warrior class!`;
            classValue.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Warrior'
        }
        if (event.target.classList.contains('wizard')) {
            classValue.textContent = `You chose a Wizard class!`;
            classValue.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Wizard';
        }
        if (event.target.classList.contains('cleric')) {
            classValue.textContent = `You chose a Cleric class!`;
            classValue.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Cleric';
        }
        if (event.target.classList.contains('rogue')) {
            classValue.textContent = `You chose a Rogue class!`;
            classValue.style.backgroundColor = 'rgb(75, 19, 19)';
            summaryClass.textContent = 'Rogue';
        }
    }
});

document.body.querySelector('.resetGender').addEventListener('click', resetGender);
document.body.querySelector('.resetRace').addEventListener('click', resetRace);
document.body.querySelector('.resetName').addEventListener('click', resetName);
document.body.querySelector('.resetClass').addEventListener('click', resetClass);