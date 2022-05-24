const useDebug = (isDebug) => [
  (...msgs) => isDebug && console.log(...msgs),
  (...msgs) => isDebug && console.error(...msgs),
];

export { useDebug };
