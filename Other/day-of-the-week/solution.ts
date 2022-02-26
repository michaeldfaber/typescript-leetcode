function dayOfTheWeek(day: number, month: number, year: number): string {
    const wd = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(year, month-1, day);
    return wd[d.getDay()];
};