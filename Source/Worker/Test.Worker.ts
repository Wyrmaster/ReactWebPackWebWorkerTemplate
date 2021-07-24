const ctx: Worker = self as any;

ctx.addEventListener('message', async (e) => {
  ctx.postMessage(1+1);
});



