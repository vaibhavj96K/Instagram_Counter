let myNum = document.querySelectorAll(".count"); // three h2 tag
let speed = 200;
// console.log(myCount);
myNum.forEach((myCount) => {
  let targetCount = myCount.dataset.count; // get the tageted values
  let initalCount = +myCount.innerText; // get the initial count

  let new_Incremet = Math.floor(targetCount / speed); // to do eqaul increment

  const updateNumber = () => {
    // to update number
    initalCount += new_Incremet; // in initial count added increment
    myCount.innerText = initalCount; // and put the new incremneted value in h2
    if (initalCount < targetCount) {
      // check the condtion if  count is not equal to target then again incremnet by calling function
      setTimeout(() => {
        return updateNumber();
      }, 1000);
    }
  };
  updateNumber();
});
