// interface Point{
//     x: number,
//     y: number,
//     draw: () => void
// }

// let drawPoint = (point: Point) => {
//     //....   
//     console.log(point)
//     console.log(point.x)
// }

// // drawPoint({
// //     x:1,
// //     y:2
// // })

// drawPoint({
//     x: 1,
//     y: 2,
//     draw: () => {
//         console.log('Drawing at:', 1, 2);
//     }
// });

// // drawPoint({1,2})


//Classes

class Point{
    x: number;
    y: number;
    draw() {
        console.log(`printing X` + this.x + 'printing Y' +this.y)
    }
}

let point = new Point();
point.draw()