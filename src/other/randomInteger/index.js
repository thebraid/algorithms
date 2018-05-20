window.randomInteger = (...args) => {
  if (args.length === 0) {
    console.log(Math.round(Math.random()));
  } else if (args.length === 1) {
    const max = args[0];
    console.log(Math.round(Math.random()*max));
  } else {
    let [min, max] = args;

    if (min > max) {
      [min, max] = [max, min];
    }

    console.log(Math.round(min + (Math.random() * (max - min))));
  }
};
