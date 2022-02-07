const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Helen', '101', 'hgtariku@yahoo.com','12');

    expect(manager.officeNumber).toBe('12')

})

test('get office number', () => {
    const manager = new Manager('Helen', '101', 'hgtariku@yahoo.com','12');
   
    
    expect(manager.getOfficeNumber()).toEqual('12');
})
test('get the role that the Manager plays', () =>  {
    const manager = new Manager('Helen', '101', 'hgtariku@yahoo.com','12');

    expect(manager.getRole()).toEqual('Manager');
});
