
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Helen', '101', 'hgtariku@yahoo.com');

    expect(employee.name).toBe('Helen');
    expect(employee.id).toBe('101');
    expect(employee.email).toBe('hgtariku@yahoo.com');
})
test('gets employees name', () => {
    const employee = new Employee('Helen', '101', 'hgtariku@yahoo.com');

    expect(employee.getName()).toEqual("Helen");
})
test('gets employee id', () => {
    const employee = new Employee('Helen', '101', 'hgtariku@yahoo.com');
    employee.id = '101';

    expect(employee.getId()).toEqual('101');

})
test('get employee email', () => {
    const employee = new Employee('Helen', '101', 'hgtariku@yahoo.com');
   
    
    expect(employee.getEmail()).toEqual('hgtariku@yahoo.com');
})
test('get the role that the employee plays', () =>  {
    const employee = new Employee('Helen', '101', 'hgtariku@yahoo.com');

    expect(employee.getRole()).toEqual('Employee')
});


