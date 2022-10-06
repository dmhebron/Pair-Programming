brackets = (str) => {
    const brackets = ["{}", "[]", "()"];
    brackets.forEach((e) =>
      e === `${str.slice(0, 1)}${str.slice(-1)}` ? console.log(true): 0
    );
  };
  
  brackets("{hello}");

  //The slice() method selects from a given start, up to a (not inclusive) given end.

  const bracketsTest = ["{}", "[]", "()"];