class Format {
  date(today) {
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear().toString();
    if (month.length === 1) {month = '0' + month};
    return day + '/' + month + '/' + year;
  };
};
