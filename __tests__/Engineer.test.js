const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Helen', '101', 'hgtariku@yahoo.com', 'htariku');

    expect(engineer.github).toBe('htariku');
});

test('get github username', () => {
    const engineer = new Engineer('Helen', '101', 'hgtariku@yahoo.com', 'htariku');
 
    expect(engineer.github).toEqual('htariku');
})
test('get the role that the engineer plays', () =>  {
    const engineer = new Engineer('Helen', '101', 'hgtariku@yahoo.com', 'htariku');

    expect(engineer.getRole()).toEqual('Engineer')
});
    


