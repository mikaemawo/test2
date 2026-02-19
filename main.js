// Задание 1
// function extractNumbers(str) {
//     let nums = str.match(/\d/g);
//     if(nums) {
//         return nums.map(Number);
//     } else {
//         return [];
//     }
// }

// console.log(extractNumbers("a1fg5hj6")); // [1,5,6]

// Задание 2
// function fib(a = 0, b = 1) {
//     if(a > 144) return; 
//     console.log(a);
//     setTimeout(() => fib(b, a + b), 1000);
// }

// fib();

// Задание 3
// async function getTitles() {
//     try {
//         let res = await fetch("https://fakestoreapi.com/products");
//         let data = await res.json();
//         console.log("3) Titles:");
//         data.forEach(item => console.log(item.title));
//     } catch(err) {
//         console.log("Ошибка:", err);
//     }
// }
// getTitles();

// Задание 4
// document.getElementById("colors")?.addEventListener("click", e=>{
//     if(e.target.tagName === "BUTTON") {
//         document.body.style.backgroundColor = e.target.textContent;
//     }
// });


// Задание 7
const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log('Полученные данные:', data);

    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
    }
});
