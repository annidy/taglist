const { parse } = require('node-id3-reader')
var iconv = require('iconv-lite');
var encodings = require('iconv-lite/encodings')


function test(buffer) {
    for (const enc in encodings) {
        try {
            if (!parseInt(enc)) {
                const str = iconv.decode(buffer, enc);
                console.log(`${enc}: ${str}`);
            }
        } catch (error) {
            console.log("error: ", enc);
        }
    }
}


parse("./Honor.mp3").then((frames) => {

    for (const tag in frames) {
        const id3 = frames[tag];

        console.log(`${tag}: ${id3}`);

        test(id3[1])
    }
})
