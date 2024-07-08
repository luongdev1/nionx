// convert to yards
function convertToYards(value, unit) {
     switch (unit) {
          case 'in':
               return value / 36; // 1 yard = 36 inches
          case 'ft':
               return value / 3; // 1 yard = 3 feet
          case 'cm':
               return value / 91.44; // 1 yard = 91.44 cm
          case 'm':
               return value / 0.9144; // 1 yard = 0.9144 meters
          case 'yd':
               return value
          default:
               throw new Error('don vi khong duoc ho tro');
     }
}
// format currency
function formatCurrency(number) {
     return number.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
     });
};
// radio bulk
function handleCostBulk(valueYard, valueFeet, valueMeter, typeSelect, price) {
     switch (typeSelect) {
          case 'cubic foot':
               return valueFeet * price;
          case 'cubic yard':
               return valueYard * price;;
          case 'cubic meter':
               return valueMeter * price;;
     }
}
// radio bags
function handleNumOfBags(valueYard, valueFeet, typeSelect) {
     switch (typeSelect) {
          case '1':
               return valueFeet / 2;
          case '2':
               return valueFeet / 1.8;
          case '3':
               return valueFeet / 1.5;
          case '4':
               return valueFeet / 1;
          case '5':
               return valueFeet / 0.8;
          case '6':
               return valueYard / 1;
     }
}
//cubic yard
function handleCubicYards(diameter, depth, unitDiameter, unitDepth) {
     const duongkinh = convertToYards(diameter, unitDiameter)
     const dosau = convertToYards(depth, unitDepth)
     const dientich = Math.PI * Math.pow((duongkinh / 2), 2)
     const thetich = dosau * dientich
     return thetich
}
// query
const textCubicYards = document.getElementById('curbicYards');
const textCubicFeet = document.getElementById('curbicFeet');
const textCubicMetter = document.getElementById('curbicMetter');
const bulkRadio = document.getElementById('bulk');
const bagsRadio = document.getElementById('bags');
const textNumberOfBags = document.getElementById('numberOfBags');
const textPsNumberOfBags = document.getElementById('psNumberOfBags');
const numberOfBagsDiv = document.getElementById('wrap-numberOfBags');
const textCost = document.getElementById('cost');
const textPs = document.getElementById('ps');
const wrapCost = document.getElementById('wrap-cost');
// cac bien
let cubicYards
let cubicFeet
let cubicMetter
let cost
let formatCost
let qtBags
document.addEventListener('DOMContentLoaded', function () {
     const perDiv = document.getElementById('wrap-per');
     const sizeOfBagsDiv = document.getElementById('wrap-sizeOfBags');
     function togglePerDiv() {
          if (bulkRadio.checked) {
               perDiv.classList.remove('hidden');
               wrapCost.classList.add('hidden');
               sizeOfBagsDiv.classList.add('hidden');
               numberOfBagsDiv.classList.add('hidden');
          } else {
               perDiv.classList.add('hidden');
               sizeOfBagsDiv.classList.remove('hidden');
          }
     }
     bulkRadio.addEventListener('change', togglePerDiv);
     bagsRadio.addEventListener('change', togglePerDiv);

     // Initialize the state on page load
     togglePerDiv();
});

document.getElementById('formCal').addEventListener('submit', function (event) {
     event.preventDefault();
     // form data
     var formData = new FormData(this);
     var formObject = {};
     formData.forEach((value, key) => {
          formObject[key] = value;
     });
     cubicYards = handleCubicYards(formObject.inputDiameter, formObject.inputDelpth, formObject.diameter, formObject.depth)//kq cubic yards
     cubicFeet = cubicYards * 27//kq cubic feet
     cubicMetter = cubicYards * 0.764555//kq cubic metter
     cost = handleCostBulk(cubicYards, cubicFeet, cubicMetter, formObject.per, formObject.price)
     formatCost = formatCurrency(cost) //conver to usd
     qtBags = handleNumOfBags(cubicYards, cubicFeet, formObject.sizeOfBags)     //tinh so luong bags
     // render cubic yard feet metter html
     textCubicYards.textContent = cubicYards.toFixed(2);
     textCubicFeet.textContent = cubicFeet.toFixed(2);
     textCubicMetter.textContent = cubicMetter.toFixed(2);
     // neu checked bulk radio
     if (bulkRadio.checked) {
          // show div
          wrapCost.classList.remove('hidden');
          // render result cost to hmtl
          textCost.textContent = formatCost;
          textPs.textContent = "$ " + formObject.price + ' per ' + formObject.per;
     }
     // neu checked bags radio
     if (bagsRadio.checked) {
          // show div
          wrapCost.classList.remove('hidden');
          numberOfBagsDiv.classList.remove('hidden');
          // render result bags and cost to hmtl
          textNumberOfBags.textContent = Math.ceil(qtBags);
          textPsNumberOfBags.textContent = `You need ${qtBags.toFixed(2)} bags`;
          textCost.textContent = formatCurrency(formObject.price * Math.ceil(qtBags));
          textPs.textContent = "$ " + formObject.price + ' per ' + formObject.per;
     }
})
