// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
    return function(para = "special") {
      return `You are ${flair}${para}${flair}!`;
    }
};

var Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
};

function actionApplyer(start, arr) {
    let action = start;

    for (let i = 0; i < arr.length; i++) {
      action = arr[i](action)
    };
  
    return action;
};