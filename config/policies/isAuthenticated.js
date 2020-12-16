module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    return await next();
  }

  return ctx.unauthorized("You're not logged in!");
};
