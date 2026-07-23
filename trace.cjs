const fs = require('fs');
const potrace = require('potrace');

const imagePath = './public/brand/logo.png';
const svgPath = './public/brand/logo.svg';

potrace.trace(imagePath, { color: 'white', background: 'transparent' }, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync(svgPath, svg);
  console.log('Successfully traced logo.png to logo.svg');
});
