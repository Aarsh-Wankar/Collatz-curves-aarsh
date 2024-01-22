function setup() {
  createCanvas(1200, 1200);   //creates canvas
  background(255, 255, 255);  //creates background
  for (let i = 1; i < 100000; i++) { 
    let sequence = [];
    let n = i;
    do {
      sequence.push(n);
      n = collatz(n);
    } while (n != 1);
    sequence.push(1);
    sequence.reverse();    //obtains a reversed collatz sequence for a number n (for example, for n = 5, we have [1, 2, 4, 8, 16, 5]

    let len = 5;
    let angle = -0.06;
    //creation of the saffron collatz tree feather
    resetMatrix();
    translate(width/4, height/2);    //starting position of the saffron feather
    rotate(3*PI/8);
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      // if value is odd, we rotate our plane by an angle, and if its negative, we rotate it by its negative
      if (value % 2 == 0) {    
        rotate(angle);
      } else {
        rotate(-angle);
      }
      strokeWeight(2);
      stroke(255, 165, 0, 5);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
    //creation of the lower green collatz tree feather
    resetMatrix();
    translate(3*width/4, height/2);
    rotate(-5*PI/8);   
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      if (value % 2 == 0) {
        rotate(angle);
      } else {
        rotate(-angle);
      }
      strokeWeight(2);
      stroke(0, 100, 0, 5);
      line(0, 0, 0, -len);
      translate(0, -len);
    }

    //creation of the centre blue collatz tree
    resetMatrix();
    translate(width/2, height/2);
    for (let j = 0; j < sequence.length; j++) {
      let value = sequence[j];
      if (value % 2 == 0) {
        rotate(-2);
      } else {
        rotate(2);
      }
      strokeWeight(2);
      stroke(0, 0, 100, 5);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
  }
}




function collatz(n) {
  // even
  if (n % 2 == 0) {
    return n / 2;
    // odd
  } else {
    return (n * 3 + 1)/2;
  }
}
