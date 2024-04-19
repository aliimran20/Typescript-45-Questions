let processors = ['Core i5', ' Core i7', ' Core i9']
let graphicscard = ['RTX', ' 1060', ' 1060 Super']
let powersupply = ['400W', ' 500W', ' 600W']
let memory = ['4GB', ' 8GB', ' 16GB']
let harddisk = ['256GB', ' 512GB', ' 1TB']

//Combines all arrays into one single one
let pcitems = ['CPU: ' + [...processors], 'GPU: ' + [...graphicscard], 'PSU: ' +[...powersupply], 'RAM: ' + [...memory], 'HDD: ' + [...harddisk]]

console.log(pcitems)