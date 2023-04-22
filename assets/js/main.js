// homework

function ageClassification(n) {
  age = '';
  age = n >= 0 && n <= 24 ? 'детский возраст'
    : n > 24 && n <= 44 ? 'молодой возраст'
      : n > 44 && n <= 65 ? 'средний возраст'
        : n > 65 && n <= 75 ? 'пожилой возраст'
          : n > 75 && n <= 90 ? 'старческий возраст'
            : n > 90 && n <= 122 ? 'долгожители'
              : n < 0 || n >= 122 ? null : undefined;
  return age;
}

function weekFn(n) {
  var days = '';
  switch (n) {
    case 1: days = 'Понедельник'; break;
    case 2: days = 'Вторник'; break;
    case 3: days = 'Среда'; break;
    case 4: days = 'Четверг'; break;
    case 5: days = 'Пятница'; break;
    case 6: days = 'Суббота'; break;
    case 7: days = 'Воскресенье'; break;
    default: days = null;
  }
  return days;
}



