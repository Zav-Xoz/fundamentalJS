const moveTo = new MoveTo();

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => moveTo.registerTrigger(btn));