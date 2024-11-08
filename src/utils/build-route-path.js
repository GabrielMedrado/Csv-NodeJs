export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithoutParameters = path.replace(
    routeParametersRegex,
    '(?<$1>[a-z0-9-_]+)'
  );

  const pathRegex = new RegExp(`^${pathWithoutParameters}(?<query>\\?(.*))?$`);

  return pathRegex;
}
