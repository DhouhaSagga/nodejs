var sum = 0;

// Start at second argument because first two commandline arguments are:
// 'node' and '02-baby-steps.js'
for (var i = 2; i < process.argv.length; i++) {
    // Coerce process.argv strings into numbers
    sum += Number(process.argv[i]);
}

console.log(sum);