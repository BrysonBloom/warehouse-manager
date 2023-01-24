let packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }]

  function drawPackage(array){
    let packageElement = document.getElementById('packages')
    let trackName = ``
    array.forEach(package => { 
        trackName += `<div class="row p-4"><div class="col-6 text-start"><span class="text-light px-3">Name: ${package.to}</span></div><div class="col-6 text-end"><span class="text-light ">Tracking Number: ${package.trackingNumber}</span></div></div>`
    });
  packageElement.innerHTML = trackName

}

  function sortFragile(){
    const fragilePacks = packages.filter(package => package.isFragile)
    // console.log(fragilePacks);
    drawPackage(fragilePacks)

  }
  function sortHeavy(){
    const heavyPacks = packages.filter(package => package.weight > 4)
    // console.log(heavyPacks);
    drawPackage(heavyPacks)

  }
  function sortPriority(){
    const priorityPacks = packages.filter(package => package.priorityLevel == 'express')
    // console.log(priorityPacks);
    drawPackage(priorityPacks)
  }
  function home(){
    drawPackage(packages)
  }

  drawPackage(packages)
