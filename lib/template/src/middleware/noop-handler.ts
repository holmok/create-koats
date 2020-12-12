export const noopHandler = () => {
  return async (ctx: any, next: any) => {
    await next()
  }
}
