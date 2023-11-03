// let input=document.querySelector('input')
// let elem=document.querySelector('.elem')
// input.addEventListener('blur',func);
// function func() {
//     elem.textContent +=input.value
// }


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let botton = document.querySelector('#button');
// button.addEventListener('click', ()  => {
// console.log(elem1.value);
// console.log(elem2.value);
// console.log(elem3.value);
// elem4.textContent = (Number(elem1.value)+Number(elem2.value)+Number(elem3.value));
// }); 


// let elem = document.querySelector('#number');
// elem.addEventListener('blur', () => {
//     let sum=0;
//     let str =elem.value;
//     let arr = str.split('');
//    for(let i=0; i<arr.length; i++){
//     sum+=+arr[i];
//    }
//    console.log(sum)
// });


// let elem = document.querySelector('#number');
// elem.addEventListener('blur', () => {
//     let sum=0;
//     let str =elem.value;
//     let arr = str.split(', ');
//     for(let i=0; i<arr.length; i++){
//         sum=+parseInt(arr[i]);
//     }
//     let res = sum/ arr.length;
//     console.log(res)
// });


// let elem = document.querySelector('#elem1');
// let name = document.querySelectorAll('#elem');
// elem.addEventListener('blur', () => {
//      let arr = elem.value.split(' ');
//      for(let i=0, j = 0; i<arr.length, j < name.length; i++, j++){
//         name[j].value = arr[i];
// }
// });


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split(' ');
//     for(let i=0; i<arr.length; i++){
//             arr[i]=arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
// }
// elem.value = arr.join(' ');
// });


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let num = 0;
//     let arr = elem.value.split(' ');
//     for(let i=0; i<arr.length; i++){
//         res= num++;
// }
// console.log(res)
// });      


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split('.');
//     arr2 = arr.reverse();
//     elem.value = arr2.join('-');
// }); 


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     let arr = elem.value.split('');
//     let arr2 = elem.value.split('').reverse();
//     for (let i = 0; i < arr.length; i++) {
//         res = arr[i] !== arr2[i]? 'false': 'true';
//     }
//     console.log(res);
// });   


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', () => {
//     let arr = elem.value.split('');
//     for (let i = 0; i < arr.length; i++) {
//         res = arr[i] === '3'? 'содержит 3': 'не содержит 3';
//     }
//     console.log(res); 
// });


// let elems_input_class = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// let count=1;
// button.addEventListener('click', () => {
//     for (let elem of elems_input_class){
//           elem.textContent+= count;
//           count+=1;
// }
// });


// let a = document.querySelectorAll('a')
// let button = document.querySelector('input')
// button.addEventListener ('click', func)
// function func() {
//     for (let i = 0; i < a.length; i++) {
//         a[i].innerHTML = a[i].innerHTML + '('+a[i].href+')'
//     }
// }


// let link = document.querySelectorAll('a')
// document.addEventListener ('DOMContentLoaded', func)
// function func() {
//     for (let i = 0; i < link.length; i++) {
//         if (link[i].href.indexOf('http://') === 0) {
//         link[i].innerHTML = link[i].innerHTML + '&rarr;';
//     }
//     }
// }


// let elems_class_p  = document.querySelectorAll('.elem');
// for (let elem of elems_class_p){
//     elem.addEventListener('click', function(){
//         elem.textContent= Number(elem.textContent) **2;
//     })
// }


// task 11
// let elem_input_id  = document.querySelector('#elem');
// let week = [
//       'Sun',
//       'Mon',
//       'Tue,
//       'Wed',
//       'Thu',
//       'Fri',
//       'Sat'
//     ];
// elem_input_id.addEventListener('blur', function(){
//     let data = elem.value.split('.').reverse().join(',');
//     let day = new Date(data).getDay();
//     elem.value = week[day]
// });


// let elem_input_id = document.querySelector('#elem');
// let button1 = document.querySelector("#button1");
// let  button2 = document.querySelector("#button2");
// button1.addEventListener('click', function(){
//      elem_input_id.value = +elem_input_id.value+1;
// })
// button2.addEventListener('click', function(){
//     if(elem_input_id.value>0) elem_input_id.value = +elem_input_id.value-1;
// });


// let elem_input_id = document.querySelector('#elem');
// let elems_p_class = document.querySelectorAll('.elem1');
//   for (let elem of elems_p_class){
//       elem.addEventListener('click', function(){
//           elem_input_id.value = +elem_input_id.value+1;
//   });
//   };


// let divs = document.querySelectorAll("div");
// for(let elem of divs){
// if(elem.textContent.length>10){
// elem.textContent=elem.textContent.slice(0, 10)+'...'
// };
// };


// let button= document.querySelector("#button");
// let elem_input_id = document.querySelector('#elem');
// let sym='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let str=''
// button.addEventListener('click', () =>{
//     for(let i = 0; i < 8; i++){
//         str += sym.charAt(Math.floor(Math.random() * sym.length));
//         elem.value = str;
// };
// });
/*


// let button= document.querySelector("#button");
// let elem_input_id = document.querySelector('#input');
// let k, temp;
// button.addEventListener('click', function(){
//     let arr=elem_input_id.value.split('');
// 	for(let i = arr.length - 1; i > 0; i--){ 
// 		k = Math.floor(Math.random()*(i + 1));
// 		temp = arr[k];
// 		arr[k] = arr[i];
// 		arr[i] = temp;
// 	}
//     elem_input_id.value=arr.join('')
// })


// let but= document.querySelector("#button");
// let elem1_input_id = document.querySelector('#input_elem_id_1');
// let elem1_p_id=document.querySelector('#elem1_p');
// but.addEventListener('click', function(){
//     elem1_p_id.textContent=(Number(elem1_input_id.value)-32)*5/9;
// })


// let button= document.querySelector("#button");
// let elem_id = document.querySelector('#elem');
// let elem_p_id=document.querySelector('#elem_p');
// button.addEventListener('click', () => {
//     let F=1;
// for(let i=1; i<=Number(elem.value); i++){
//     F*=i;
// }
// elem_p.textContent=F;
// });


// let elem_input_id = document.querySelector('#elem');
// let elem2_input_id = document.querySelector('#elem');
// let elem3_input_id = document.querySelector('#elem');
// let button= document.querySelector("#button");
// let elem_p_id=document.querySelector('#elem_p');
// button.addEventListener('click', function(){
// let D=Number(elem2_input_id.value)**2-4*+elem_input_id.value*+elem3_input_id.value;
// let x1, x2;
// if(D>0){
//     elem_p_id.innerHTML=`${(-Number(elem2_input_id.value)-Math.sqrt(D))/(2*+elem_input_id.value)}-корень1 
//      ${(-Number(elem2_input_id.value)+Math.sqrt(D))/(2*+elem_input_id.value)}-корень2`
// }else if(D==0){
//         elem_p_id.innerHTML=`${-Number(elem2_input_id.value)/(2*+elem_input_id.value)}-корень`
//      }else{
//         elem_p_id.innerHTML="-0 корней"
//     }
// })
