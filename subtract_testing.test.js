const sub = require('./subtract_testing');

test('Empty parameters; one parameter only provided',()=>{
    expect(sub()).toBe('klsddnsdfd');
});

test('10 - 1 to equal 9',()=>{
    expect(sub(10,1)).toBe(9);
});

test('Rounding floats; case of (0.2)-(-0.1)', ()=>{
    expect(sub(0.2, -0.1)).toBeCloseTo(0.3)
});

test('Rounding floats; case of (0.1)-(-0.2)', ()=>{
    expect(sub(0.1, -0.2)).toBeCloseTo(0.3)
});

test('firstNumber and/or second Number are not real numbers',()=>{
    expect(sub(NaN, NaN)).toBe('klsddnsdfd');
});

test('firstNumber and secondNumber are Infinity',()=>{
    expect(sub(Infinity,Infinity)).toBe('klsddnsdfd');
})
