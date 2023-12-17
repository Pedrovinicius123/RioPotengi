function displayDevs(){

  const devs = {
    names : ['Pedro Vinícius',
    'Ana Clara',
    'Jamilly',
    'Enzo Lucatonny',
    'Diego',
    'Ana Luiza',
    'Angela'
    ]
  }

  let element = document.getElementById('designers-programers-searchers')
  let HTMLCode = document.createElement('div');
  let HTMLstring = [];

  for (i of devs.names) {

    if (devs.names.indexOf(i) != 0 && devs.names.indexOf(i) != devs.names.lenght - 1) {
      
      HTMLstring.push(`
        <img src="/vite-project/assets/dot.svg" alt="ponto">
        <h3> ${i} </h3>
      `)
    }

    else {
      
      
      HTMLstring.push(`
        <h3> ${i} </h3>
      `)

    }        
  }

  let code = HTMLstring.join();
  element.innerHTML = code;
  
}

displayDevs();
