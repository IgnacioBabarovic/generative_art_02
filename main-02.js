// import { Point } from './elements/point';
const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ width, height, context}) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    const pointSize = 1;
    context.fillStyle = 'white';
    
    const CvsR = 100;

    const cols = CvsR;
    const rows = CvsR;

    const numCells = cols * rows;

    const gridw = width  * 0.9;
    const gridh = height * 0.9;

    const cellw = gridw / cols;
    const cellh = gridh / rows;

    const margx = (width  - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for(let i = 0; i < numCells; i++){
      let m =random.range(0.000000000000001, 5)

      const col = i % cols;
      const row = Math.floor( i / cols );

      const x = col * cellw;
      const y = row * cellh;

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh *0.5);

      context.beginPath();
      context.arc(0, 0, pointSize * m, 0, Math.PI*2)
      context.fill();

      context.restore();
    }
  };
}
  

canvasSketch(sketch, settings);
