type Employee = {
    name: string;
    profession: string;
    workingHoursPerDay: number;
};

type PremiumData = {
    isPremium: boolean;
    premium: number;
};

const employee : Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

const premiumData : PremiumData = {
    isPremium: true,
    premium: 1000
};

const payPerHour : number = 32;
const workingDays : number = 14;

const experienceCoefficients : number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
    employee: Employee,
    premiumData: PremiumData,
    payPerHour: number,
    workingDays: number,
    experienceCoefficient: number
): string => {
    const {name, profession, workingHoursPerDay} = employee;
    const {isPremium, premium} = premiumData;

    const baseSalary = workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    const salary = isPremium ? baseSalary + premium : baseSalary;

    return `${profession} ${name} has a salary of ${salary} this month`;
}

const salaryInfo : string = getSalaryInfo(
    employee,
    premiumData,
    payPerHour,
    workingDays,
    experienceCoefficients[2]
);
console.log(salaryInfo);