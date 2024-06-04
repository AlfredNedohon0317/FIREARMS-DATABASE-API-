
const db = require('../DB');
db.on('error', console.error.bind(console, 'mondgodb connection error'))
const {Firearm,Manufacturer} = require('../models');
const resetCollections = async () => {
  try {
      await Firearm.deleteMany({});
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
};

const main = async() => {
  await resetCollections();
  const colt  = await Manufacturer.find({name: 'Colt Manufacting Company' })
  const hk  = await Manufacturer.find({name: 'Heckler & Koch (H&K)' })
  const Benelli  = await Manufacturer.find({name: 'Benelli' })
  const Beretta  = await Manufacturer.find({name: 'Beretta' })
  const  FN = await Manufacturer.find({name: 'FN Herstal' })
  const  Browning = await Manufacturer.find({name: 'Browning Arms Company' })
  const  Sig = await Manufacturer.find({name: 'Sig Sauer' })
  const  Mauser = await Manufacturer.find({name: 'Mauser' })
  const  Remington = await Manufacturer.find({name: 'remington' })
  const  CZ = await Manufacturer.find({name: 'Česká zbrojovka Uherský Brod (CZ)' })
  const  Walther = await Manufacturer.find({name: 'Walther' })
  const  Winchester = await Manufacturer.find({name: 'Winchester' })
  const   Springfield = await Manufacturer.find({name: 'Springfield Armory' })
  const   Armalite = await Manufacturer.find({name: 'Armalite' })
  const   KAC = await Manufacturer.find({name: 'Knight Armament Company (KAC) ' })
  const  Kalashnikov = await Manufacturer.find({name: 'Kalashnikov Concern (Izh)' })
  const  SW = await Manufacturer.find({name: 'Smith & Wesson ' })
 




const firearms = [
 
 {
    name:'Model 1911',
    caliber:'.45 ACP',
    manufacturerId: colt[0]._id,
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 614',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 921',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Python',
    caliber:'.357 Magnum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Single Action Army',
    caliber:'.45 Long Colt',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AR-15',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AR-50',
    caliber:'.50 BMG',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AR-10',
    caliber:'7.62x51mm NATO',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'SR25',
    caliber:'7.62x51mm NATO',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Glock 17',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Glock 19',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Glock 23',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Super Blackhawk',
    caliber:'.44 Remington Magnum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'10/22',
    caliber:'.22 Long Rifle',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'MKIII',
    caliber:'.22 Long Rifle',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'G3',
    caliber:'7.62x51mm NATO',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'HK53',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'USP .45',
    caliber:'.45 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Mark 23',
    caliber:'.45 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'UMP9',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'UMP45',
    caliber:'.45 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'MP5',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'PSG-1',
    caliber:'7.62x51mm NATO',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'M4',
    caliber:'12 Gauge',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'MP 90 S World Cup .22lr',
    caliber:'.22 Long Rifle',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'92FS',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'1301',
    caliber:'12 Gauge',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Cx4 Storm',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'FNC',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'FNX .45',
    caliber:'.45 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'SCAR 16',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'SCAR 17',
    caliber:'7.62x51mm NATO',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'FN 509',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'P90',
    caliber:'5.7x28mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Five-seveN',
    caliber:'5.7x28mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Browning Automatic Rifle',
    caliber:'.308 Winchester',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Auto 5',
    caliber:'12 Gauge',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Hi-Power MkIII',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'P320',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'P226',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'MCX-Spear',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'SG-552',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Kar 98k',
    caliber:'7.92x57mm Mauser',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'C96',
    caliber:'7.63x25mm Mauser',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 870',
    caliber:'12 Gauge',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 700',
    caliber:'.308 Winchester',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'R5',
    caliber:'5.56x45mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1876',
    caliber:'.44 Henry',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1892',
    caliber:'.32-20 Winchester',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1886',
    caliber:'12 Gauge',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1895',
    caliber:'7.62x54mm Rimmed',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 70',
    caliber:'.270 Winchester',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1903',
    caliber:'.30-06 Springfield',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Hellcat',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'M-14',
    caliber:'7.62x51mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 1873',
    caliber:'.45-70',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'CZ-75',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'CZ 527',
    caliber:'7.62x39mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'CZ 550',
    caliber:'7.62x51mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'PP',
    caliber:'.32 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'PPK',
    caliber:'.32 ACP',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'P99',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'PPQ',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'WA2000',
    caliber:'.300 Winchester Magnum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AK-47',
    caliber:'7.62x39mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AKM',
    caliber:'7.62x39mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'AKM-74',
    caliber:'5.45x39mm',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'PP-19 Vityaz',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 29',
    caliber:'.44 Remington Magnum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 500',
    caliber:'.500 Smith and Wesson Magnum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
  {
    name:'Model 3906',
    caliber:'9x19mm Parabellum',
    manufacturerId: '',
    historyId: '',
    fflType: '',
    Image: '',
  },
 
  


];
await Firearm.insertMany(firearms)
console.log('created some firearms')
}

const run = async()=>{
  await main ()
  db.close()
}
run ()


