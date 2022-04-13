// 一開始都先透過console.log確認有沒有打通，之後就正式宣告變數來使用
let selectedFile;
// 並且用這個來找出xlsx檔的取得路徑
console.log(window)

document.getElementById('input').addEventListener('change',(event)=>{
    // 先確認檔案的觸發路徑
    // console.log(event);
    // console.log(event.target.files);

    // 在這裡設定選擇的檔案，但是在button的部分才去執行轉檔
    selectedFile = event.target.files[0]
})


document.getElementById('button').addEventListener('click',()=>{
    // 確定有打通
    // console.log('clicked')
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) =>{
            console.log(event.target.result); // 這裡會是一篇亂碼，需要cdn來幫助解譯
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:'binary'});
            console.log('workbook : ' , workbook); // 通過這個就能找到正確的檔案資料
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log('rowObject : ' , rowObject); // 這邊會把excel檔裡面的資料已分頁為單位做成list，因為我只有第一頁有資料，所以印出的時候會多出兩個空的list
                // document.getElementById('jsondata').innerHTML=JSON.stringify(rowObject) //這邊印出的時候，只會印出最後一個資料，但因為上面說過，最後的list是空的，所以也許要保留
                document.getElementById('jsondata').innerHTML=JSON.stringify(rowObject[0],undefined,4)
            })
        }
    }
})