// TODO Weight
const changeBgColor = ['bg-primary', 'bg-success', 'bg-danger', 'bg-secondary', 'bg-info', 'bg-warning']
const bgChange = lis => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.add(changeBgColor[i])
  }
};

// At first, input and outputs are hidden
const wForm = document.querySelector('.w-form');
const wOutputWrapper = document.getElementById('w-op-wrapper');
wForm.style.visibility = "hidden";
wOutputWrapper.style.visibility = 'hidden';

const wInput = document.getElementById('weight-ip');
const wSelectTag = document.querySelector('.w-select');
const wOutputs = document.querySelectorAll('.w-op');

// for bg change
const wOpEachWrapper = document.querySelectorAll('.w-card');

wSelectTag.addEventListener('change', (e) => {
  let wSelected = e.target.value;
  wInput.style.visibility = 'visible'
  // wInput.value = "";
  wOutputs.innerHTML = "";
  const wList = ['kg', 'lb', 'oz']
  const wFilteredList = wList.filter(w => (w !== wSelected))
  // console.log(filteredList);

  wInput.addEventListener('input', function(e){
    wOutputWrapper.style.visibility = 'visible';
    let wInputValue = e.target.value;
    wInputValue = Number(wInputValue)
    // console.log(typeof wInput);

    // Make a convert calc lis depending on wSelected.
    let wConv;
    if (wSelected === 'kg') {
      wConv = [2.20462, 35.274]
    } else if (wSelected === 'lb') {
      wConv = [.453592, 16]
    } else{
      wConv = [0.0283495, 0.0625]
    };
    
    // console.log(wConv, wSelected);

    // Add classname to change each bg
    bgChange(wOpEachWrapper);
    // Actual output
    for (let i = 0; i < wOutputs.length; i++) {
      const element = wOutputs[i];
      const displayValue = wConv[i]*wInputValue
      element.innerHTML = wFilteredList[i] + ': ' + displayValue.toFixed(2);
    }
  })
});

// todo: temp
// At first, input and outputs are hidden
const tempForm = document.querySelector('.temp-form');
const tempOpWrapper = document.querySelector('#temp-op-wrapper');
tempForm.style.visibility = 'hidden';
tempOpWrapper.style.visibility = 'hidden';
const tempSelect = document.querySelector('.temp-select');
const tempInput = document.querySelector('#temp-ip');
const tempOutputs = document.querySelector('.temp-op');

// for bg change
const tempOpEachWrapper = document.querySelectorAll('.temp-card');

tempSelect.addEventListener('change', (e) => {
  let whichTemp = e.target.value;
  tempForm.style.visibility = 'visible';
  tempInput.addEventListener('input', (e) => {
    let tempInputValue = e.target.value;
    tempOpWrapper.style.visibility = 'visible';

    // Add classname to change each bg
    bgChange(tempOpEachWrapper);

    // Actual outputs
    if (whichTemp === 'fa') {
      tempOutputs.innerHTML = `°C: ${((tempInputValue-32)*5/9).toFixed(1)}`;
    } else {
      tempOutputs.innerHTML = `°F: ${(tempInputValue/5*9+32).toFixed(1)}`;
    }
  });
});


// todo: speed
// At first, input and outputs are hidden
const speedForm = document.querySelector('.speed-form');
const speedOpWrapper = document.querySelector('#speed-op-wrapper');
speedForm.style.visibility = 'hidden';
speedOpWrapper.style.visibility = 'hidden';
const speedSelect = document.querySelector('.speed-select');
const speedInput = document.querySelector('#speed-ip');
const speedOutputs = document.querySelector('.speed-op');
// for bg change
const speedOpEachWrapper = document.querySelectorAll('.speed-card');

speedSelect.addEventListener('change', (e) => {
  let whichSpeed = e.target.value;
  speedForm.style.visibility = 'visible';
  speedInput.addEventListener('input', (e) => {
    let speedInputValue = e.target.value;
    speedOpWrapper.style.visibility = 'visible';

    // Add classname to change each bg
    bgChange(speedOpEachWrapper);

    // Actual outputs
    if (whichSpeed === 'kph') {
      speedOutputs.innerHTML = `mph: ${(speedInputValue*.621).toFixed(1)}`;
    } else {
      speedOutputs.innerHTML = `kph: ${(speedInputValue*1.609).toFixed(1)}`;
    }
  });
});


// todo: shoes
// At first, input and outputs are hidden
const shoesForm = document.querySelector('.shoes-form');
const shoesOpWrapper = document.querySelector('#shoes-op-wrapper');
shoesForm.style.visibility = 'hidden';
shoesOpWrapper.style.visibility = 'hidden';

const shoesSelectTag = document.querySelector('#shoes-select');
const shoesInputTag = document.querySelector('#shoes-ip');
const shoesOutputs = document.querySelectorAll('.shoes-op');
// for bg change
const shoesOpEachWrapper = document.querySelectorAll('.shoes-card');
const shoesList = ['US_Men', 'US_Women', 'UK', 'Euro', 'cm']
shoesSelectTag.addEventListener('change', (e) => {
  // Have input visible  // get the option a user selected and delete it from shoesList
  shoesForm.style.visibility = 'visible';
  let shoesSelected = e.target.value;
  const filteredShoesList = shoesList.filter(shoe => shoe !== shoesSelected)

  // when users input a number...
  shoesInputTag.addEventListener('input', (e) => {

    // get the input // Have outputs visible
    let shoesInputValue = e.target.value;
    shoesInputValue = Number(shoesInputValue)
    shoesOpWrapper.style.visibility = 'visible';

    const showShoesOutput = function() {
      for (let i = 0; i < shoesOutputs.length; i++) {
        const element = shoesOutputs[i];
        bgChange(shoesOpEachWrapper);
        element.innerHTML = `${filteredShoesList[i]}: ${shoesInputValue+shoesCalcList[i]}`;
      }
    }
    switch (shoesSelected) {
      case 'US_Men':
        var shoesCalcList = [1.5, -0.5, 33, 18.5]
        showShoesOutput();
        break;
      case 'US_Women':
        var shoesCalcList = [-1.5, -2, 31, 17]
        showShoesOutput();
        break;
      case 'UK':
        var shoesCalcList = [0.5, 2, 33, 19]
        showShoesOutput();
        break;
      case 'Euro':
        var shoesCalcList = [-32.5, -31, -33, -14]
        showShoesOutput();
        break;
      case 'cm':
        var shoesCalcList = [-18.5, -17, -19, 13]
        showShoesOutput();
        break;
      default:
        break;
    }
  });
});


// todo: time
// At first, input and outputs are hidden
const timeForm = document.querySelector('.time-form');
const timeOpWrapper = document.querySelector('#time-op-wrapper');
timeForm.style.visibility = 'hidden';
timeOpWrapper.style.visibility = 'hidden';

const timeSelectTag = document.querySelector('#time-select');
const timeInputTag = document.querySelector('#time-ip');
const timeOutputs = document.querySelectorAll('.time-op');
const timeOpEachWrapper = document.querySelectorAll('.time-card');
const timeList = ['JP', 'US_PST', 'US_MST', 'US_CST', 'US_EST', 'UK']
const summerTimeOnOff = document.getElementById('summerTimeOnOff');
// Get today
let checkSummerTime = false;
let today = new Date();
let todayMonth = today.getMonth() + 1;
let todayHour = today.getHours();
let originDate = today.getDate();
// console.log(today, todayMonth);
todayMonth = 3

// During April to October => DST is on
if (4 <= todayMonth && todayMonth <= 10) 
{
  checkSummerTime = true;
} 
// In March and Novenmer => if DST is on depends on date
else if (todayMonth === 3 || todayMonth === 11) 
{
  let todayDate = today.getDate();

  today.setDate(15);
  today.setMonth(2);
  // if it's in the third week in March or in the first week in Novemver, DST is on
  if ((todayMonth === 3 && todayDate >= 15) || (todayMonth === 11 && todayDate <= 7)) {
    checkSummerTime = true;
    console.log('っ子通った', checkSummerTime);
  }
  // if it's in the second week, need to compare if today is after the second Sunday
  else if (8 <= todayDate <= 14)
  {
    // // Set date to March 8 and get the day
    // どうやって第二週日曜を取得するか、
    // それ以降ならsummerTime on
    let todayDay = today.getDay();
    // 1. Get this week's Sunday date 2. if it's Sunday, subtract 7
    sundayDate = 8 + (7-todayDay);
    if (sundayDate === 15) sundayDate -= 7;
    console.log(`today => ${today},\n todayMonth => ${todayMonth}, \n todayDay => ${todayDay},\n sundayDate => ${sundayDate}`);

    if (todayMonth === 3) 
    {
      // if true, set DST to true
      if (sundayDate < originDate) 
      {
        checkSummerTime = true;
      } 
      // if same, I need to check if it's after 2 a.m. and if true, set DST to true
      else if (sundayDate === originDate) 
      {
        if (todayHour >= 2) 
        {
          checkSummerTime = true;
        }
      }
    }
    else if (todayMonth === 11)
    {
      // if true, set DST to true
      if (sundayDate > originDate) 
      {
        checkSummerTime = true;
      } 
      // if same, I need to check if it's before 2 a.m. and if true, set DST to true
      else if (sundayDate === originDate) 
      {
        if (todayHour <= 2) 
        {
          checkSummerTime = true;
        }
      }
    }
  }
} 
console.log('っ子通った', checkSummerTime);

timeSelectTag.addEventListener('change', (e) => {
  // Have input visible  // get the option a user selected and delete it from timeList
  timeForm.style.visibility = 'visible';
  let timeSelected = e.target.value;
  const filteredTimeList = timeList.filter(shoe => shoe !== timeSelected)
  console.log(filteredTimeList);
  // when users input a number...
  timeInputTag.addEventListener('input', (e) => {

    // get the input // Have outputs visible
    let timeInputValue = e.target.value;
    let timeGetHour = timeInputValue.slice(0, 2);
    let timeGetMinute = timeInputValue.slice(-3)
    timeGetHour = Number(timeGetHour);
    console.log(timeInputValue, timeGetHour, timeGetMinute);
    timeOpWrapper.style.visibility = 'visible';

    const showTimeOutput = () => {
      for (let i = 0; i < timeOutputs.length; i++) {
        const element = timeOutputs[i];
        console.log(timeOutputs);
        bgChange(timeOpEachWrapper);
        let timeCalcResult = timeGetHour+timeCalcList[i];
        if (timeCalcResult < 0) {
          timeCalcResult += 24;
          element.innerHTML = `${filteredTimeList[i]}: ${timeCalcResult}${timeGetMinute} -1d`;
        } else if (timeCalcResult > 24) {
          timeCalcResult -= 24;
          element.innerHTML = `${filteredTimeList[i]}: ${timeCalcResult}${timeGetMinute} +1d`;
        } else {
          element.innerHTML = `${filteredTimeList[i]}: ${timeCalcResult}${timeGetMinute}`;
        }
        console.log(element.innerHTML, timeOutputs.length);
      }
    }
    
    
    const subtractOneHourFromJapanAndUkTime = () => 
    {
      if (checkSummerTime === true) {
        timeCalcList[0] -= 1;
        timeCalcList[4] -= 1;
      }
    }
    switch (timeSelected) {
      case 'JP':
        var timeCalcList = [-17, -16, -15, -14, -9]
        if (checkSummerTime === true) timeCalcList = [-16, -15, -14. -13, -9];
        showTimeOutput();
        break;
      case 'US_PST':
        var timeCalcList = [17, 1, 2, 3, 8]
        subtractOneHourFromJapanAndUkTime();
        showTimeOutput();
        break;
      case 'US_MST':
        var timeCalcList = [16, -1, 1, 2, 7]
        subtractOneHourFromJapanAndUkTime();
        showTimeOutput();
        break;
      case 'US_CST':
        var timeCalcList = [15, -2, -1, 1, 6]
        subtractOneHourFromJapanAndUkTime();
        showTimeOutput();
        break;
      case 'US_EST':
        var timeCalcList = [14, -3, -2, -1, 5]
        subtractOneHourFromJapanAndUkTime();
        showTimeOutput();
        break;
      case 'UK':
        var timeCalcList = [9, -8, -7, -6, -5]
        subtractOneHourFromJapanAndUkTime();
        showTimeOutput();
        break;
      default:
        break;
    }
    if (checkSummerTime === true) summerTimeOnOff.innerHTML = 'DST is on.'
  });
});


// todo: weight refactoring => done on 12/14
// todo: use bgChange and when it's summer time, change it => done on 12/15












