let input = document.querySelector('.todo_list');
let add = document.querySelector('.add');
let list_div = document.querySelector('.list_div');
let list_ul = document.querySelector('.list_ul');
let kinko;
// 金庫の中に物を保存するときは絶対配列の形にする！
// []が配列
if(localStorage.getItem('please')){
 kinko = JSON.parse(localStorage.getItem('please'));
}
else{kinko = []}

// for（初期値; 何回繰り返す; 増え方）{}
for (let number = 0; number < kinko.length; number++) {
    notyet(kinko[number]);
    // これは呼び出す文言
    // console.log(JSON.parse(localStorage.getItem('key')));
}

// console.log(JSON.stringify(kinko));
add.addEventListener('click',function(){
    notyet(input.value);
    kinko.push(input.value);
    console.log(kinko);
    // これは保管する文言
    localStorage.setItem('please',JSON.stringify(kinko));
    input.value = '';
});


function notyet(box){
    let todolist = document.createElement('li');
	let icon1 = document.createElement('i');
	icon1.classList.add('fas');
	icon1.classList.add('fa-trash-alt');
	icon1.classList.add('fa-lg');
    todolist.textContent = box;
    console.log(todolist.textContent);
    // 子(todolist)を親に会わせる！これで表示される
    list_ul.appendChild(todolist);
    todolist.appendChild(icon1);
    icon1.addEventListener('click',function(){
    // spliceは消すより潰すという意味
    // 何を.splice(基準,消す個数)
        kinko.splice(kinko.indexOf(this.parentElement.textContent),1);
        // kinko.indexOf(this.parentElement.textContent);
        console.log(kinko.indexOf(this.parentElement.textContent));
        localStorage.setItem('please',JSON.stringify(kinko));
        todolist.remove();
    });

};

// どこを状況に応じて箱を変えたいか考える！
// そこに引数名（空箱）をいれる