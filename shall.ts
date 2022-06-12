const shall = require('child_process').exec;

async function shallrun() {
    await shall('git push', (err: any) => {
        console.log(err);
        if (err) {
            console.log( 'default:' + count ++);
            shallrun();
        }
    })
}
let count = 0;
shallrun();