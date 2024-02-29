fetch('https://api.github.com/repos/evanw/esbuild')
    .then((response) => response.json())
    .then((data) => console.log(data));

console.log('End of File');