import { iif } from ".";

describe('Utils', () => {

  it ('deve invocar a função quando verdadeira', () => {
    const dummy = {
      functionVerdadeira: () => {},
      functionFalsa: () => {}
    };

    spyOn(dummy, "functionVerdadeira");
    spyOn(dummy, "functionFalsa");

    iif(true, dummy.functionVerdadeira, dummy.functionFalsa);

    expect(dummy.functionVerdadeira).toHaveBeenCalled();
    expect(dummy.functionFalsa).not.toHaveBeenCalled();

  });

  it ('deve invocar a função quando falsa', () => {
    const dummy = {
      functionVerdadeira: () => {},
      functionFalsa: () => {}
    };
    
    spyOn(dummy, "functionFalsa");
    spyOn(dummy, "functionVerdadeira")

    iif(false, dummy.functionVerdadeira, dummy.functionFalsa);

    expect(dummy.functionFalsa).toHaveBeenCalled();
    expect(dummy.functionVerdadeira).not.toHaveBeenCalled();
  });


});