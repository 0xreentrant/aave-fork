pool = await ethers.getContractAt("LendingPool", "0x6e5d1a9C405DF46a8503893DBa99c3af5Dc1FB5A")
provAddr = await pool.getAddressesProvider()
prov = await ethers.getContractAt("LendingPoolAddressesProvider", provAddr)
oracle = await ethers.getContractAt("AaveOracle", await prov.getPriceOracle())