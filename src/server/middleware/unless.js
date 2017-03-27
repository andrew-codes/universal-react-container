export default (path, middleware) => (req, res, next) => {
  let paths = path;
  if (!Array.isArray(path)){
    paths = [path];
  }
  const isMatch = paths
    .filter((pathMatcher) => Boolean(pathMatcher))
    .reduce((output, pathMatcher) => output || new RegExp(pathMatcher).test(req.url), false);
  if (isMatch) {
    return next();
  } else {
    return middleware(req, res, next);
  }
};
