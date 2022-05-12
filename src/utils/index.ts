export const getParams = (params: Record<string, string>) => {
  let a: string = "";
  for (let property in params) {
    if (params[property] !== "") {
      a += `&${property}=${params[property]}`;
    }
  }
  return a;
};
