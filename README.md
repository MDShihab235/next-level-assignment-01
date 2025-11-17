## 3. Explain the difference between any, unknown, and never types in TypeScript.

ans:  
১. any আসলে বোঝায় আপিন যে কোনো type use করতে পারেন। typescript আপনাকে বাঁধা দেবে না।
২. unknown নির্দেশ করে আপনি variable যে কোনো type এ assign করতে পারেন কিন্তু use করার ক্ষেত্রে variable এর type check করা হবে।
৩. never তখন use করা হয় যখন function এর return value এবং variable এর value exist করে না।

## 5. Provide an example of using union and intersection types in TypeScript.

ans:
// Union Type Example
type Employee = {
id: number;
name: string;
salary: number;
}
type Manager ={
id:number;
name:string;
department:string;
}
type EmployeeOrManager = Employee | Manager;

// Intersection Type Example
type FullTimeEmployee = Employee & {
benefits: string[];
};
