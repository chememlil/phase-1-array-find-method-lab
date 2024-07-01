// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // ... other entries
  ];
  
  console.log(superbowlWin(record)); // Output: "2015" (assuming there's a "W" entry for 2015)
  
function superbowlWin(record) {
    // Use the find method to search for a result of "W"
    let winningYearObj = record.find(entry => entry.result === "W");

    return winningYearObj ? winningYearObj.year : undefined;
  }
  