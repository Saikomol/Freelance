const freelanceWriters = [//1 start initial state
{name: 'Alice', occupation: 'Writer', price: 30},
{name: 'Bob', occupation: 'Teacher', price: 50},
{name: 'Carol', occupation: 'Programmer', price: 70 },
]

const addShapeIntervalId = setInterval( addWriter, 1000);

const names =["Dr. Slice","Dr. Pressure","Prof. Goose","Prof. Possibility",
"Prof. Prism","Dr. Impulse","Prof. Spark","Dr. Wire"]
const occupations =["gardener","programmer","driver","teacher"]
const prices =[25,51,81,43,76,47,72] 




render(); // We call this function once to render the initial state

function render() {
  // Render the squares
  
  const freelanceWritersEl = document.querySelector('tbody');
  const template = freelanceWriters.map((writer)=>
  {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent=writer.name;
    const td2 = document.createElement('td');
    td2.textContent=writer.occupation;
    const td3 = document.createElement('td');
    td3.textContent=`$${writer.price}`;
    tr.append(td1,td2,td3)
    return tr;
  
  });
  console.log(...template);
  freelanceWritersEl.replaceChildren(...template);
 
}
function addWriter(){
  const name = names[Math.floor(Math.random() * names.length)]
  const occupation = occupations[Math.floor(Math.random() * occupations.length)]
  const price = prices[Math.floor(Math.random() * prices.length)]

  freelanceWriters.push({name,occupation,price })
  render()
}
