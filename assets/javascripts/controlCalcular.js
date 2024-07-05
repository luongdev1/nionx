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
function handleCubicYards(diameter, depth, unitDiameter, unitDepth) {
     const duongkinh = convertToYards(diameter, unitDiameter)
     const dosau = convertToYards(depth, unitDepth)
     const dientich = Math.PI * Math.pow((duongkinh / 2), 2)
     const thetich = dosau * dientich
     const thetichYd3 = thetich / 27
     return thetichYd3
}


document.getElementById('formCal').addEventListener('submit', function (event) {
     event.preventDefault();
     var formData = new FormData(this);
     var formObject = {};
     formData.forEach((value, key) => {
          formObject[key] = value;
     });

     const cubicYards = handleCubicYards(formObject.inputDiameter, formObject.inputDelpth, formObject.diameter, formObject.depth)

     // render html
     const textCubicYards = document.getElementById('curbicYards');
     textCubicYards.textContent = cubicYards.toFixed(2);
})
