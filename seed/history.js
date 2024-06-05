// const db =require('../DB')
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// const {History, Firearm} = require('../models');
// const resetCollections = async () => {
//   try {
//       await History.deleteMany({});
//       console.log('All collection reset');
//   } catch (error) {
//       console.error('Error resetting collections:', error);
//   }
// };
// const main = async() => {
//   await resetCollections();
//   const Model1911 = await Firearm.find({name: 'Model 1911'})
//   const Model614 = await Firearm.find({name: 'Model 614'})
//   const Model921 = await Firearm.find({name: 'Model 921'})
//   const Python = await Firearm.find({name: 'Python'})
//   const SingleActionArmy = await Firearm.find({name: 'Single Action Army'})
//   const AR15 = await Firearm.find({name: 'AR-15'})
//   const AR50 = await Firearm.find({name: 'AR-50'})
//   const AR10 = await Firearm.find({name: 'AR-10'})
//   const SR25 = await Firearm.find({name: 'SR-25'})
//   const Glock17= await Firearm.find({name: 'Glock 17'})
//   const Glock19= await Firearm.find({name: 'Glock 19'})
//   const Glock23= await Firearm.find({name: 'Glock 23'})
//   const SuperBlackhawk = await Firearm.find({name: 'Super Blackahwk'})
//   const Ruger1022 = await Firearm.find({name: 'Ruger 10/22'})
//   const MKIII = await Firearm.find({name: 'MK III'})
//   const G3 = await Firearm.find({name: 'G3'})
//   const HK53 = await Firearm.find({name: 'HK53'})
//   const USP45 = await Firearm.find({name: 'USP .45'})
//   const Mark23 = await Firearm.find({name: 'Mark 23'})
//   const UMP9 = await Firearm.find({name: 'UMP9'})
//   const UMP45 = await Firearm.find({name: 'UMP45'})
//   const MP5 = await Firearm.find({name: 'MP5'})
//   const PSG1 = await Firearm.find({name: 'PSG-1'})
//   const M4 = await Firearm.find({name: 'M4'})
//   const MP90sWorldCup22Lr = await Firearm.find({name: 'MP 90 S World Cup .22lr'})
//   const Beretta92Fs = await Firearm.find({name: '92 FS'})
//   const Beretta1301 = await Firearm.find({name: '1301'})
//   const Cx4Storm = await Firearm.find({name: 'Cx4 storm'})
//   const FNC = await Firearm.find({name: 'FNC'})
//   const Fnx45 = await Firearm.find({name: 'Fnx .45'})
//   const SCAR16 = await Firearm.find({name: 'SCAR 16'})
//   const SCAR17 = await Firearm.find({name: 'SCAR 17'}) 
//   const FN509 = await Firearm.find({name: 'FN 509'})
//   const P90 = await Firearm.find({name: 'P90'})
//   const FiveSeven = await Firearm.find({name: 'Five-seven'})
//   const BrowningAutomaticRifle = await Firearm.find({name: 'Browning Automatic Rifle'})
//   const Auto5 = await Firearm.find({name: 'Auto 5'})
//   const HiPowerMKIII = await Firearm.find({name: 'Hi-Power MkIII'})
//   const P320 = await Firearm.find({name: 'P320'})
//   const P226 = await Firearm.find({name: 'P226'})
//   const MCXSpear = await Firearm.find({name: 'MCX-SPEAR'})
//   const SG552 = await Firearm.find({name: 'SG-552'})
//   const Kar98k = await Firearm.find({name: 'Kar 98k'})
//   const C96 = await Firearm.find({name: 'C96'})
//   const Model870 = await Firearm.find({name: 'Model 870'})
//   const Model700 = await Firearm.find({name: 'Model700'})
//   const R5 = await Firearm.find({name: 'R5'})
//   const Model1876 = await Firearm.find({name: 'Model 1876'})
//   const Model1892 = await Firearm.find({name: 'Model 1892'})
//   const Model1886 = await Firearm.find({name: 'Model 1886'})
//   const Model1895= await Firearm.find({name: 'Model 1895'})
//   const Model70 = await Firearm.find({name: 'Model 70'})
//   const Model1903 = await Firearm.find({name: 'Model 1903'})
//   const Hellcat = await Firearm.find({name: 'Hellcat'})
//   const M14 = await Firearm.find({name: 'M-14'})
//   const Model1873 = await Firearm.find({name: 'Model 1873'})
//   const CZ75 = await Firearm.find({name: 'CZ-75'})
//   const CZ527 = await Firearm.find({name: 'CZ 527'})
//   const CZ550 = await Firearm.find({name: 'CZ 550'})
//   const PP = await Firearm.find({name: 'PP'})
//   const PPK = await Firearm.find({name: 'PPK'})
//   const P99 = await Firearm.find({name: 'P99'})
//   const PPQ = await Firearm.find({name: 'PPQ'})
//   const WA2000 = await Firearm.find({name: 'WA2000'})
//   const AK47= await Firearm.find({name: 'AK-47'})
//   const AKM = await Firearm.find({name: 'AKM'})
//   const AKM74 = await Firearm.find({name: 'AKM-74'})
//   const PP19 = await Firearm.find({name: 'PP-19 Vityaz'})
//   const Model29 = await Firearm.find({name: 'Model 29'})
//   const Model500 = await Firearm.find({name: 'Model 500'})
//   const Model3906 = await Firearm.find({name: 'Model 3906'})



// const history = [
//   {
//     firearmId: Model1911[0]._id, 
//     content: '',
//     date: '2022-01-01',
//   },
//   {
//     firearmId: Model614[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model921[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Python[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SingleActionArmy[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },
//   {
//     firearmId: AR15[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: AR50[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: AR10[0]._id , 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SR25[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Glock17[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Glock19[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Glock23[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SuperBlackhawk[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Ruger1022[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: MKIII[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },
//   {
//     firearmId: G3[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: HK53[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: USP45[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Mark23[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },


//   {
//     firearmId: UMP9[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: UMP45[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: MP5[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: PSG1[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: M4[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: MP90sWorldCup22Lr[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Beretta92Fs[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Beretta1301[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Cx4Storm[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: FNC[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//    {
//     firearmId: Fnx45[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SCAR16[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SCAR17[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: FN509[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: P90[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: FiveSeven[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: BrowningAutomaticRifle[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Auto5[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: HiPowerMKIII[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: P320[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: P226[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: MCXSpear[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: SG552[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Kar98k[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: C96[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model870[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model700[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: R5[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1876[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1892[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1886[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1895[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model70[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1903[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Hellcat[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: M14[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model1873[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: CZ75[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: CZ527[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: CZ550[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: PP[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: PPK[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: P99[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: PPQ[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: WA2000[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: AK47[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: AKM[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: AKM74[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: PP19[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model29[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },

//   {
//     firearmId: Model500[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },



//   {
//     firearmId: Model3906[0]._id, 
//     content: '',
//     date: '2022-02-01',
//   },




// ];


// await Firearm.insertMany(firearms)
// console.log('created some firearms')
// }

// const run = async()=>{
//   await main ()
//   db.close()
// }
// run ()








