const sub = require('./subtract_testing');

test('Empty parameters; one parameter only provided',()=>{
    expect(sub()).toBe('jdsfsfdsdf');
});

test('10 - 1 to equal 9',()=>{
    expect(sub(10,1)).toBe(9);
})