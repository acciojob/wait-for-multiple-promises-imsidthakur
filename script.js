//your JS code here. If required.
const tbody = document.getElementById("output");
const tr = document.createElement('tr');
const td = document.createElement('td');
tr.setAttribute("id","loading");
td.textContent = "Loading...";
td.setAttribute("colSpan","2");
tr.append(td);
tbody.append(tr);



const promise1 = new Promise((res,rej)=> {
  const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');

	setTimeout(()=> {
	td1.textContent = "Promise 1";
	td2.textContent = 2;
	tr.append(td1);
	tr.append(td2);
	res(tr);
	},2000)
})

const promise2 = new Promise((res,rej)=> {
  const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');

	setTimeout(()=> {
	td1.textContent = "Promise 2";
	td2.textContent = 1;
	tr.append(td1);
	tr.append(td2);
	res(tr);
	},1000)
})

const promise3 = new Promise((res,rej)=> {
  const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');

	setTimeout(()=> {
	td1.textContent = "Promise 3";
	td2.textContent = 3;
	tr.append(td1);
	tr.append(td2);
	res(tr);
	},3000)
})







Promise.all([promise1,promise2,promise3]).then((val) => {
  tr.remove();
	val.forEach((row)=> {
	  tbody.append(row);
	})
  
  const tr1 = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.textContent = "Total";
	td2.textContent = 6;

	tr1.append(td1);
	tr1.append(td2);
	tbody.append(tr1);
	
})
