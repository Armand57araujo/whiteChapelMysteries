function addItem() {
  const pathName = window.location.pathname;
  const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
  let item = '';

  switch(pathName) {
    case '/druwardstreet': item = { itemName: 'Scratched Bolt', description: 'A bolt found on Druward Street. It seems to have some scratches on it'}
    break;
    case '/hanburystreet': item = { itemName: 'Cracked Bolt', description: 'A bolt found on Hanbury Street. It appears to have been split in two.'}
    break;
    case '/dutfieldyard': item = { itemName: 'Ragged Fabric', description: 'A piece of fabric found in Dutfield Yard. It appears to be from a dress'}
    break;
    case '/mitresquare': item = { itemName: 'Lipstick Case', description: 'A broken lipstick case found in Mitre Square. The initials "EL" are inscribed on the side'}
    break;
    case '/wharf': item = { itemName: `Worker's Glove`, description: `A worker's glove found in the wharf`}
    break;
    default: break;
  }
  
  let found = false;
  inventory.forEach((thing) => {
    if(thing.itemName === item.itemName) {
      found = true;
    }
  });

  if(!found) {
    inventory.push(item)
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }
}

export default addItem;