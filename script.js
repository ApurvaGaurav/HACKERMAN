// console.log(person_name)
// console.log(btn)
let start = () => {
    let person_name = document.getElementById("input-box").value;
    // console.log(person_name)

    let p1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Initialising hack program for ${person_name}'s gmail Account......`)
            }, 3000);

        })
    };
    let p2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Hacking ${person_name}'s useranme....PLZZ WAIT....`)
            }, 5000);

        })
    };
    let p3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`username found ${person_name}_123@gmail.com......PLZZ WAIT....`)
            }, 7000);

        })
    };
    let p4 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`connectiong to his facebook and other social media applications...PLZZ WAIT.....`)
            }, 9000);

        })
    };
    let p5 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Successfully hacked ${person_name} account and person details !!!`)
            }, 12000);

        })
    };
    let main = async () => {
        let a1 = await p1();
        document.getElementById("line1").innerHTML = a1;

        let a2 = await p2();
        document.getElementById("line2").innerHTML = a2
        let a3 = await p3();
        document.getElementById("line3").innerHTML = a3
        let a4 = await p4();
        document.getElementById("line4").innerHTML = a4
        let a5 = await p5();
        document.getElementById("line5").innerHTML = a5

    }

    main();
}

let btn = document.getElementsByClassName("btn")[0]
btn.addEventListener('click', start)
