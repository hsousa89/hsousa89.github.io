function FormValidation() {
    var elements = ['magic', 'times', 'eighteenth', 'r', 'reduce', 'recycle', 'reuse', 'juice', 'bags', 'waste', 'cool', 'try', 'work', 'trash', 'throw'];

    for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        if (element.value != elements[i]) {
            element.style.borderColor = "rgba(255, 0, 0, 0.8)";
            element.style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
            element.style.outline = "0 none";
            alert('You have got to check the ' + (i + 1) + 'th space.\nVerifica o ' + (i + 1) + 'º espaço.');
            return false;
        } else {
            element.style.borderColor = "rgba(126, 239, 104, 0.8)";
            element.style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
            element.style.outline = "0 none";
        }
    }
}



// function FormValidation() {
//     var magic = document.getElementById('magic').value;
//     var times = document.getElementById('times').value;
//     var eighteenth = document.getElementById('eighteenth').value;
//     var r = document.getElementById('r').value;
//     var reduce = document.getElementById('reduce').value;
//     var recycle = document.getElementById('recycle').value;
//     var reuse = document.getElementById('reuse').value;
//     var juice = document.getElementById('juice').value;
//     var bags = document.getElementById('bags').value;
//     var waste = document.getElementById('waste').value;
//     var cool = document.getElementById('cool').value;
//     var tryon = document.getElementById('try').value;
//     var work = document.getElementById('work').value;
//     var trash = document.getElementById('trash').value;
//     var throwit = document.getElementById('throw').value;
//     if (magic != "magic") {
//         document.getElementById('magic').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('magic').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('magic').style.outline = "0 none";
//         alert('You have got to check the first space.\nVerifica o primeiro espaço.');
//         return false;
//     } else {
//         document.getElementById('magic').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('magic').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('magic').style.outline = "0 none";
//     }
//     if (times != "times") {
//         document.getElementById('times').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('times').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('times').style.outline = "0 none";
//         alert('You have got to check the second space.\nVerifica o segundo espaço.');
//         return false;
//     } else {
//         document.getElementById('times').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('times').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('times').style.outline = "0 none";
//     }
//     if (eighteenth != "eighteenth") {
//         document.getElementById('eighteenth').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('eighteenth').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('eighteenth').style.outline = "0 none";
//         alert('You have got to check the third space.\nVerifica o terceiro espaço.');
//         return false;
//     } else {
//         document.getElementById('eighteenth').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('eighteenth').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('eighteenth').style.outline = "0 none";
//     }
//     if (r != "r") {
//         document.getElementById('r').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('r').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('r').style.outline = "0 none";
//         alert('You have got to check the fourth space.\nVerifica o quarto espaço.');
//         return false;
//     } else {
//         document.getElementById('r').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('r').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('r').style.outline = "0 none";
//     }
//     if (reduce != "reduce") {
//         document.getElementById('reduce').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('reduce').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('reduce').style.outline = "0 none";
//         alert('You have got to check the fifth space.\nVerifica o quinto espaço.');
//         return false;
//     } else {
//         document.getElementById('reduce').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('reduce').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('reduce').style.outline = "0 none";
//     }
//     if (recycle != "recycle") {
//         document.getElementById('recycle').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('recycle').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('recycle').style.outline = "0 none";
//         alert('You have got to check the sixth space.\nVerifica o sexto espaço.');
//         return false;
//     } else {
//         document.getElementById('recycle').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('recycle').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('recycle').style.outline = "0 none";
//     }
//     if (reuse != "reuse") {
//         document.getElementById('reuse').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('reuse').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('reuse').style.outline = "0 none";
//         alert('You have got to check the seventh space.\nVerifica o sétimo espaço.');
//         return false;
//     } else {
//         document.getElementById('reuse').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('reuse').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('reuse').style.outline = "0 none";
//     }
//     if (times != "juice") {
//         document.getElementById('juice').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('juice').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('juice').style.outline = "0 none";
//         alert('You have got to check the eighth space.\nVerifica o oitavo espaço.');
//         return false;
//     } else {
//         document.getElementById('juice').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('juice').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('juice').style.outline = "0 none";
//     }
//     if (bags != "bags") {
//         document.getElementById('bags').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('bags').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('bags').style.outline = "0 none";
//         alert('You have got to check the ninth space.\nVerifica o nono espaço.');
//         return false;
//     } else {
//         document.getElementById('bags').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('bags').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('bags').style.outline = "0 none";
//     }
//     if (waste != "waste") {
//         document.getElementById('waste').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('waste').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('waste').style.outline = "0 none";
//         alert('You have got to check the tenth space.\nVerifica o décimo espaço.');
//         return false;
//     } else {
//         document.getElementById('waste').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('waste').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('waste').style.outline = "0 none";
//     }
//     if (eighteenth != "cool") {
//         document.getElementById('cool').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('cool').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('cool').style.outline = "0 none";
//         alert('You have got to check the eleventh space.\nVerifica o décimo-primeiro espaço.');
//         return false;
//     } else {
//         document.getElementById('cool').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('cool').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('cool').style.outline = "0 none";
//     }
//     if (tryon != "try") {
//         document.getElementById('try').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('try').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('try').style.outline = "0 none";
//         alert('You have got to check the twelfth space.\nVerifica o décimo segundo espaço.');
//         return false;
//     } else {
//         document.getElementById('try').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('try').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('try').style.outline = "0 none";
//     }
//     if (work != "work") {
//         document.getElementById('work').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('work').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('work').style.outline = "0 none";
//         alert('You have got to check the thirteenth space.\nVerifica o décimo-terceiro espaço.');
//         return false;
//     } else {
//         document.getElementById('work').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('work').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('work').style.outline = "0 none";
//     }
//     if (trash != "trash") {
//         document.getElementById('trash').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('trash').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('trash').style.outline = "0 none";
//         alert('You have got to check the fourteenth space.\nVerifica o décimo-quarto espaço.');
//         return false;
//     } else {
//         document.getElementById('trash').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('trash').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('trash').style.outline = "0 none";
//     }
//     if (throwit != "throw") {
//         document.getElementById('throw').style.borderColor = "rgba(255, 0, 0, 0.8)";
//         document.getElementById('throw').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.6)";
//         document.getElementById('throw').style.outline = "0 none";
//         alert('You have got to check the fifteenth space.\nVerifica o décimo-quinto espaço.');
//         return false;
//     } else {
//         document.getElementById('throw').style.borderColor = "rgba(126, 239, 104, 0.8)";
//         document.getElementById('throw').style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)";
//         document.getElementById('throw').style.outline = "0 none";
//     }
// }
