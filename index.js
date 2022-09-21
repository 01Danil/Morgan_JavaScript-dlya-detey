// let name = prompt("Как вас зовут");
// console.log("Привет, " + name);
// let likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
// 	console.log("Ты классная кошка!");
// } else {
// 	console.log("Что ж, не проблема. Все равно ты молодец!");
// }
// alert("JavaScript это здорово!");

// Выбрать случайное слово
// Пока слово не угадано {
// 	Показать игроку текущее состояние игры
// 	Запросить к игрока вариант ответа
// 	Если игрок хочет выйти из игры {
// 		Выйти из игры
// 	}
// 	Иначе Если вариант ответа - не одиночная буква {
// 		Сообщить игроку, что он должен ввести букву
// 	}
// 	Иначе {
// 		Если такая буква есть в слове {
// 			Обновить состояние игры, поставив новую букву
// 		}
// 	}
// }
// Поздравить игрока с победой - слово угадано

// let words = ["программа", "макака", "прекрасный", "оладушек"];

// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }
// let remainingLetters = word.length;

// while (remainingLetters > 0) {
//   alert(answerArray.join(" "));

//   let guess = prompt("Угадай букву или нажмите Отмена для выхода из игры");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     aletr("Пожалуйста, введите только одну букву.");
//   } else {
//     for (let j = 0; j < word.lentgth; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }
// }

// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);

let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "чебуречек",
  "слон",
  "чайник",
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;


while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
let result = answerArray.toLowerCase();

alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
