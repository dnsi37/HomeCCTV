console.log(process.env.OPENCV_DIR);
console.log(process.env.OPENCV_INCLUDE_DIR);
console.log(process.env.OPENCV_LIB_DIR);
console.log(process.env.OPENCV_BIN_DIR);

const cv = require('opencv4nodejs');

const image = cv.imread('./test.PNG');
cv.imshowWait('Image', image);