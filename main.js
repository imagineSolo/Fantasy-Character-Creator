//--GLOBAL SCOPE--//
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

//--START--//
document.body.querySelector('.start').addEventListener('click', startGame = (e) => {
    const background = document.querySelector('.wrap')
    e.preventDefault();
    invitation.classList.add('hidden');
    summary.classList.remove('hidden');
    genderPanel.classList.remove('hidden');
    background.style.backgroundImage = 'url("img/bgc-bricks.jpg")';
    background.style.backgroundSize = 'auto auto';
    background.style.backgroundRepeat = 'repeat';
});