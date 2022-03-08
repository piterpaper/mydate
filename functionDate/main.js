function getDayInfo(date) {
    const sp = date.split('.');
    date = new Date(sp[2], sp[1] - 1, sp[0]);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const year = date.getFullYear();
    const week = Math.ceil((date.getDate() + date.getDay()) / 7);
    console.log(days[date.getDay()] + ', ' + week + " неделя " + ' ' + month[date.getMonth()] + ' ' + year + ' ' +
        "года")
}

getDayInfo("08.04.2022");