const Blockchain= require('./blockchain');

let coreDao = new Blockchain();

coreDao.createNewTransaction(
    "10",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
  );

  coreDao.createNewBlock();

console.log(coreDao);