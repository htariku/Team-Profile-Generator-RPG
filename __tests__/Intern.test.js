const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Helen', '101', 'hgtariku@yahoo.com', "GW");

    expect(intern.school).toBe('GW');
})

test('get Intern School name', () => {
    const intern = new Intern('Helen', '101', 'hgtariku@yahoo.com', "GW");
    
    expect(intern.getSchool()).toEqual("GW")
})
test('get the role that the Intern plays', () =>  {
    const intern = new Intern('Helen', '101', 'hgtariku@yahoo.com', "GW");

    expect(intern.getRole()).toEqual('Intern')

});
    

