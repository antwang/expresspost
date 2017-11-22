let name = document.querySelector('#name');
let gender = document.querySelector('#gender');
let btn = document.querySelector('#btn');

function renderLi(data){
    if(!data.length){
        return
    }
    let ul = document.querySelector('#ul');
    let frag = document.createDocumentFragment();
    data.forEach((obj, index) => {
        let li = document.createElement('li');
        li.textContent = obj.name + '= ' + obj.gender;
        frag.appendChild(li)
    })
    ul.appendChild(frag)
}

// 拉取列表
function loadList (){
    $.get('/api/list', function(data){
        renderLi(data)
    })
}

// 初始拉取列表 
loadList()

// 更新列表
function updateDom(data){
    let li = document.createElement('li');
    li.textContent = data.name + '= ' + data.gender;
    ul.appendChild(li)
}
// 提交用户信息
btn.addEventListener('click', function(){
    $.post('/api/save', {name: name.value, gender: gender.value}, function(data){
        console.log(data)
        updateDom(data)
    }, false)
})