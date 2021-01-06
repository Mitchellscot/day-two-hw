let refrigeratorContents  = {
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  eggs: 4,
  onions: 1,
  pancakeMixBags: 1,
  tomatoes: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents, people) {
  // Your code goes here
  const baconNeeded = people*3;
  const eggsNeeded = people*2;
  const pancakeBagsNeeded = people*.3;
  const chocolateNeeded = people*45;
  let enoughFood = false;
  if (contents.baconStrips >= baconNeeded && contents.eggs >= eggsNeeded) {
    enoughFood = true;
  }
  if (contents.pancakeMixBags >= pancakeBagsNeeded && contents.chocolateChips >= chocolateNeeded) {
    enoughFood = true;
  }
  return enoughFood;
}

// Your function should return 'yes' or 'no'
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents, 4));