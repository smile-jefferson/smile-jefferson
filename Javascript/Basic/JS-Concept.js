// if ... else if ... else
// switch case
    
    let key = 'original-value'
    switch(key){
        case 'first-value':
            console.log("if key = first-value then print this msg")
            break;
        case 'second-value':
            console.log("if key = second-value then print this msg")
            break;
        case 'third-value':
            console.log("if key = third-value then print this msg")
            break;
        default:
            console.log("if key = original then print this msg")
            break;
    }

    let keyB = 100
    switch(keyB){
        case 100:
            console.log("if key = 100 then print this msg")
            break;
        case 80:
            console.log("if key = 80 then print this msg")
            break;
        case 60:
            console.log("if key = 60 then print this msg")
            break;
        default:
            console.log("if key = none then print this msg")
            break;
    }

// For loop
// while loop
    for (let i = 0 ; i < 100 ; i+=5){ // i++ == i=i+1 ; i+=5 == i=i+5 ; i*=5 == i = i*5
        console.log('i :' , i)
    }


    let data = ['100' , 'abc' , 'x*y']
    for (let j = 0 ; j < 3 ; j++){
        if(j===1){
            data[j] = 'abcde'
        }
        console.log('data[j] : ' ,data[j])
    }


    let data2 = [
        { name:'Jefferson', type:'scrpio' },
        { name:'yammy', type:'lion' },
    ]
    for (let y = 0 ; y < data2.length ; y++){
        if( y === 0){
            let output = data2[y]
            console.log("output : " , output)

            data2[y].type = 'just a man'
            data2[y].word = 'miss you';
            console.log("output again : " , output)
        }
    }


    // while(條件){
    //     執行內容
    //     if( i === reach goal){
    //         條件 = false
    //     }
    // }

    let condition = true
    let goal = 10
    let i = 0
    while (condition) {
        i++ ;
        
        if ( i === goal){
            condition = false
        };
        
        console.log("while i :" , i)
    }



// i++ ++i i=+X
    // i++ 與 ++i可以怎麼理解？
        // https://ithelp.ithome.com.tw/articles/10192800






// 函數 function
    function Hello (){
        console.log('Hello')
    }
    Hello()

    // 設定有兩個參數的function
    function World (parameterA , parameterB){
        console.log(parameterA)
        console.log(parameterB)
        console.log(parameterA + parameterB)
    }
    World(100,200)

    // 有回傳值的function
    function HelloWorld(parameterA , parameterB , parameterC){
        let result = parameterA + parameterB - parameterC
        return result
    }
    let total = HelloWorld(1000,200,30)
    console.log('total : ' , total)



    function advance(parameterA , parameterB , parameterC){
        let result = parameterA + parameterB - parameterC
        let message = "Position"
        if (result > 1000){
            message = "High"
        }
        else if (result > 500){
            message = "Medium"
        }
        else{
            message = "Low"
        }
        return message
    }
    let msg = advance(1000,200,30)
    console.log('msg : ' , msg)



    function advance_B(parameterA , parameterB , parameterC){
        let result = parameterA + parameterB - parameterC
        let message = "Position"
        if (result > 1000){
            message = "High"
            // return message // 有沒有這行指令的差別可以試試看
        }
        if (result > 500){
            message = "Medium"
        }
        return message
    }
    let msg_B = advance_B(1000,200,30)
    console.log('msg_B : ' , msg_B)



    // 構造函數
    function createCard(name){
        this.name = name
    }

    const a_name = new createCard('小小')
    console.log('a_name : ' , a_name)



    // function 基本寫法
    // function test () {}
    // let test = function () {}
    // let test = () =>{}


// class 類別
    class createCard_2 {
        constructor(name){
            this.name = name
        }
    }
    const cardA = new createCard_2('大大')
    console.log('cardA : ' , cardA)
    console.log('cardA.name : ' , cardA.name)

    // this -- 取決當下環境是誰，this就是誰
    class createCard_3 {
        constructor(name){
            this.name = name
        }
        hello () {
            console.log('hello~from createCard_3' , this.name)
        }
    }
    const cardB = new createCard_3('中中')
    console.log('cardB : ' , cardB)
    cardB.hello()

    const newObj = {name:'AA'}
    newObj.hellooooo = cardB .hello
    newObj.hellooooo()




        
//
// setTimeout
    // 08. [JS] 請寫出間隔一秒印出 1, 2, 3, 4, 5 的程式碼。
        // https://ithelp.ithome.com.tw/articles/10220329