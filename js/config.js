let wallet = "1EMuskD82xCftuQSvgQpJqCCRFb6cC4BUv";
let count = 12362;
let currentCount = 7812;



// dont edit
let titleCount = document.getElementById("titlecount").innerText = count.toLocaleString('ru');
let countLoad = document.getElementById("countload").innerText = count.toLocaleString('ru');
let countCurrent = document.getElementById("countcurrent").innerText = currentCount.toLocaleString('ru');
let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString('ru');
let adressWaller = document.getElementById("walletaddress").innerText = wallet.toLocaleString('ru');
let percentCount = currentCount * 100 / count;
let cicrele = document.getElementById("GaugeMeter_1").setAttribute('data-percent', percentCount);
// dont edit