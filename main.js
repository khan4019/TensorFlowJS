var a = tf.tensor([4,5,6],[3]);
var b = tf.tensor([4,5,6], [3,1]);
// 3 dimensional array
var c = tf.tensor([4,5,6], [3,1,1]);
// a.print()
// b.print()
// c.print()

//
var bb = a.transpose();
// bb.print()

var aa = tf.tensor([3,8,4,6], [2,2]);
var bb = tf.tensor([4,0,-1,-9], [2,2])

// add matrix
// aa.add(bb).print();

// what if you add 4 o all elements matrics 
// aa.add(4).print();
//similarly you can do 
//sub,division
aa.div(bb).print();


var aaa = tf.tensor([4,5,6],[3]);
var bbb = tf.tensor([2,3,4],[3,1]);
aaa.mul(bbb).print();
aaa.dot(bbb).print()
// bbb.print();

// console.log(a.rank)
// console.log(a.shape)


// you are declaring a tensor variable 
// initializing it with a scalar value 4.12
const x = tf.variable(tf.scalar(4.12));

const ys = tf.tensor([2,2,2,2,2], [5,1])
const res = ys.mul(x);
res.print()

console.log(res.dataSync())

const optimizer = tf.train.sgd(0.001)

console.log(x.dataSync())
for (let i = 0; i < 1000; i++) {
    optimizer.minimize(()=>{
        return ys
        .mul(x)
        .mean()
        .square();
    }) 
}

console.log(x.dataSync())


const normX = x => norm(x, windowWidth);
const normY = x => norm(x,windowHeight);

const denorm = (x,max) => map(x,0,1,0,max);
const denormX = x => denorm(x, windowWidth);
const denormY = x => denorm(x, windowHeight);

const aaaa = tf.variable(tf.scalar(Math.random()));
const cccc = tf.variable(tf.scalar(Math.random()));
const learningRate = 0.5;
const optimizer1 = tf.train.sgd(learningRate);

const predict = x => aaaa.mul(x).add(cccc)

function loss(predictedYs, actualYs) {
    // Mean Squared Error
    let x = predictedYs
      .sub(actualYs)
      .square()
      .mean();
    LOSS = x.dataSync()[0];
    return x;
  }


  async function train(numIterations = 1) {
    if (Xs.length) {
      for (CURRENT_EPOCH = 0; CURRENT_EPOCH < numIterations; CURRENT_EPOCH++) {
        tf.tidy(() => {
          const actualXs = tf.tensor(Xs, [Xs.length, 1]);
          const actualYs = tf.tensor(Ys, [Ys.length, 1]);
  
          optimizer.minimize(() => {
            let predictedYs = predict(actualXs);
            return loss(predictedYs, actualYs);
          });
  
          A = a.dataSync()[0];
          C = c.dataSync()[0];
          // console.log(A, C);
        });
        await tf.nextFrame();
      }
    }
  }



const A = 0.5; 
const C = 100;
const getY = x => A * x + C;


function setup(){
    createCanvas(windowWidth, windowHeight);
}
function draw(){
    const x1 =  0;
    const y1 = getY(x1);
    const x2 = windowWidth;
    const y2 = getY(x2);

    stroke(51);
    strokeWeight(10);
    line(x1,y1,x2,y2)
}