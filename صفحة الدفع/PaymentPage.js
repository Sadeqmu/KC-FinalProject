let optgroup1 = document.getElementById('Hawally');
let optgroup2 = document.getElementById('Kuwait');
let optgroup3 = document.getElementById('Ahmadi');
let optgroup4 = document.getElementById('Jahra');
let optgroup5 = document.getElementById('MubarakAlkabeer');
let optgroup6 = document.getElementById('Farwaniya');
let trees = document.getElementById('treesCards');

let Hawally= ["حولي","السالمية","الرميثية","سلوى","الجابرية","بيان","مشرف"]
let Kuwait = ["الشويخ","اليرموك","النزهة","الدعية","العديلية","الدسمة","الروضة","الشامية"];
let Ahmadi = ["ضاحية علي صباح السالم","ضاحية جابر العلي", "النويصيب","المنقف","الفحيحيل","العقيلة","الظهر"]
let MubarakAlkabeer = ["ضاحية صباح السالم","القصور","القرين","الفنيطيس","العدان","أبو فطيرة" ,"أبو الحصانية"]
let Jahra = ["الواحة","النسيم","القيصرية","العيون","القصر","كبد","الواحة"]
let Farwaniya = ["خيطان","العمرية","الري","الرحاب","الرابية","الأندلس","العارضية"]
let tree_info = [
    {tree_name:"السدر" , tree_price:"5 KD" , tree_image: './tree2.jpg'  },
    {tree_name:"القرض" , tree_price:"6 KD" , tree_image: './tree1.jpg'},
    {tree_name:"الغاف" , tree_price:"7 KD" , tree_image: './tree3.jpg'}
] 
tree_info.forEach(element => {
    trees.innerHTML+= `<div id = 'trees1'>
    <img src = ${element.tree_image} id = "tree_images">
    <div id = "CardsInformation">
    <h1 id = "TreeName">${element.tree_name}</h1>
    <h1 id = "TreePrice">${element.tree_price}</h1>
    <input type="radio" name= "radio" id = "RadioInput">
    </div>
    </div>`
});
Hawally.forEach(element1 => {
    optgroup1.innerHTML += `<option>${element1}</option>`
});
Kuwait.forEach(element1 => {
    optgroup2.innerHTML += `<option>${element1}</option>`
});
Ahmadi.forEach(element1 => {
    optgroup3.innerHTML += `<option>${element1}</option>`
});
Jahra.forEach(element1 => {
    optgroup4.innerHTML += `<option>${element1}</option>`
});
MubarakAlkabeer.forEach(element1 => {
    optgroup5.innerHTML += `<option>${element1}</option>`
});
Farwaniya.forEach(element1 => {
    optgroup6.innerHTML += `<option>${element1}</option>`
});



