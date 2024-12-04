var employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};
var premiumData = {
    isPremium: true,
    premium: 1000
};
var payPerHour = 32;
var workingDays = 14;
var experienceCoefficients = [1, 1.1, 1.2, 1.3, 1.5];
var getSalaryInfo = function (employee, premiumData, payPerHour, workingDays, experienceCoefficient) {
    var name = employee.name, profession = employee.profession, workingHoursPerDay = employee.workingHoursPerDay;
    var isPremium = premiumData.isPremium, premium = premiumData.premium;
    var baseSalary = workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    var salary = isPremium ? baseSalary + premium : baseSalary;
    return "".concat(profession, " ").concat(name, " has a salary of ").concat(salary, " this month");
};
var salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);
console.log(salaryInfo);
