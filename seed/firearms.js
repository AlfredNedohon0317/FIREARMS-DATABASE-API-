
// const { default: mongoose } = require("mongoose");
const db = require("../db");
db.on("error", console.error.bind(console, "mondgodb connection error"))
const {Firearm,Manufacturer} = require("../models");
const resetCollections = async () => {
  try {
      await Firearm.deleteMany({});
      console.log("All collection reset");
  } catch (error) {
      console.error("Error resetting collections:", error);
  }
};

const main = async() => {
  await resetCollections();
  const Colt = await Manufacturer.find({name: "Colt Manufacting Company"})
console.log(Colt)
  const HK = await Manufacturer.find({name: "Heckler & Koch (H&K)" })
  const Benelli  = await Manufacturer.find({name: "Benelli" })
  const Beretta  = await Manufacturer.find({name: "Beretta" })
  const  FN = await Manufacturer.find({name: "FN Herstal" })
  const  Browning = await Manufacturer.find({name: "Browning Arms Company" })
  const  SIG = await Manufacturer.find({name: "Sig Sauer" })
  const  Mauser = await Manufacturer.find({name: "Mauser" })
  const  Remington = await Manufacturer.find({name: "Remington" })
  const  CZ = await Manufacturer.find({name: "Česká zbrojovka Uherský Brod (CZ)" })
  const  Walther = await Manufacturer.find({name: "Walther" })
  const  Winchester = await Manufacturer.find({name: "Winchester" })
  const  Springfield = await Manufacturer.find({name: "Springfield Armory" })
  const  Armalite = await Manufacturer.find({name: "Armalite" })
  const  KAC = await Manufacturer.find({name: "Knight Armament Company (KAC)" })
  const  Kalashnikov = await Manufacturer.find({name: "Kalashnikov Concern (Izh)" })
  const  SW = await Manufacturer.find({name: "Smith & Wesson" })
  const  Glock = await Manufacturer.find({name: "Glock" })
  const  Ruger = await Manufacturer.find({name: "Ruger" })
  console.log(Colt)
  const data=await Manufacturer.find({})
  console.log(data)

  const firearms = [
    {
      name: "Model 1911",
      caliber: ".45 ACP",
      manufacturerId: `${Colt[0]._id}`,
      history: "The Model 1911 served as the standard-issue sidearm for the United States Armed Forces from 1911 to 1985, seeing action in multiple conflicts including World War I, World War II, the Korean War, and the Vietnam War.",
      Ownership: "allowed, with pistol permit.",
      Image: "https://image.invaluable.com/housePhotos/bradfordsauction/42/688942/H22021-L233448886_original.jpg",
    },
    {
      name: "Model 614",
      caliber: "5.56x45mm",
      manufacturerId: `${Colt[0]._id}`,
      history: "The Model 614, based on the AR-15 platform, has been used by the United States military since the Vietnam War, becoming the standard infantry rifle for many countries.",
      Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
      Image: "https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_m16a1_p01.jpg/--/img/ws/fa_ar_m16a1_p01.jpg",
    },
    {
      name: "Model 921",
      caliber: "5.56x45mm",
      manufacturerId: `${Colt[0]._id}`,
      history: "The Model 921, part of the CAR-15 Military Weapons System, was designed in 1966 to fulfill the need for a compact M16 variant for the US military.",
      Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
      Image: "https://www.imfdb.org/images/thumb/c/c2/ColtModel610-XM177.jpg/500px-ColtModel610-XM177.jpg",
    },
    {
      name: "Python",
      caliber: ".357 Magnum",
      manufacturerId: `${Colt[0]._id}`,
      history: "Introduced in 1955, the Colt Python is renowned for its accuracy, smooth trigger pull, and tight cylinder lock-up, becoming one of the most iconic revolvers in history.",
      Ownership: "allowed, pistol permit required.",
      Image: "https://www.sportsmans.com/medias/colt-python-357-magnum-6in-stainless-revolver-6-rounds-1620948-1.jpg?context=bWFzdGVyfGltYWdlc3w1NTQxMHxpbWFnZS9qcGVnfGFEZGtMMmhrTXk4eE1qRXlOVGcyTURjeU5EYzJOaTh4TWpBd0xXTnZiblpsY25OcGIyNUdiM0p0WVhSZlltRnpaUzFqYjI1MlpYSnphVzl1Um05eWJXRjBYM050ZHkweE5qSXdPVFE0TFRFdWFuQm58ZDU0OGM1YjgxODRhNDU4YzViNTcwODI0MjdjYzcyOWQ5Y2E0MTU2MDU1MmQxMjM3YzE5OWU3ZDFlNzc4NDkwNw",
    },
    {
      name: "Single Action Army",
      caliber: ".45 Long Colt",
      manufacturerId: `${Colt[0]._id}`,
      history: "Introduced in the 1870s, the Single Action Army, also known as the Peacemaker, played a significant role in the Old West, becoming one of the most iconic revolvers of the era.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://dyn1.heritagestatic.com/lf?set=path%5B1%2F1%2F3%2F5%2F7%2F11357217%5D&call=url%5Bfile%3Aproduct.chain%5D",
    },
    {
      name: "AR-15",
      caliber: "5.56x45mm",
      manufacturerId: `${Armalite[0]._id}`,
      history: "Designed in 1956, the AR-15 was based on the AR-10 rifle. It was intended to be lightweight and fire a new high-velocity, small-caliber cartridge, allowing soldiers to carry more ammunition.",
      Ownership: "allowed, must pass background check and some states may require a permit to purchase long guns.",
      Image: "https://www.armalite.com/images/M15TAC16/FINISHED/ON%20WHITE/M15TAC16-1.jpg",
    },
    {
      name: "AR-50",
      caliber: ".50 BMG",
      manufacturerId: `${Armalite[0]._id}`,
      history: "The AR-50 rifle, introduced in 1999, is a single-shot bolt-action rifle designed to reduce recoil and ensure precision. It features a thick and rigid barrel to prevent flexing.",
      Ownership: "allowed, must pass background check and some states may require a permit to purchase long guns. Some states may have restrictions on .50 BMG rifles.",
      Image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Ar-50-2-2.png",
    },
    {
      name: "AR-10",
      caliber: "7.62x51mm NATO",
      manufacturerId: `${Armalite[0]._id}`,
      history: "The AR-10, developed in the mid-1950s, was one of the first rifles to use the 7.62x51mm NATO cartridge. It was designed as a potential replacement for the M1 Garand.",
      Ownership: "allowed, must pass background check and some states may require a permit to purchase long guns.",
      Image: "https://rainsammoandgunshop.com/wp-content/uploads/2021/03/download-51.jpg",
    },
    {
      name: "SR25",
      caliber: "7.62x51mm NATO",
      manufacturerId: `${KAC[0]._id}`,
      history: "The SR25, designed in the early 1990s by Eugene Stoner and manufactured by Knights Armament Company, combines aspects of the AR-10 and AR-15 designs with modern technology.",
      Ownership: "allowed, must pass background check and some states may require a permit to purchase long guns.",
      Image: "https://www.imfdb.org/images/thumb/3/37/Knights-Armament-SR-25-Mk11-Mod-0Unsuppressed.jpg/450px-Knights-Armament-SR-25-Mk11-Mod-0Unsuppressed.jpg",
    },
    {
      name: "Glock 17",
      caliber: "9x19mm Parabellum",
      manufacturerId: `${Glock[0]._id}`,
      history: "Introduced in 1983, theGlock 17 revolutionized pistol design with its innovative features. It quickly gained acceptance by military and law enforcement agencies worldwide.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/1303005.json",
    },
    {
      name: "Glock 19",
      caliber: "9x19mm Parabellum",
      manufacturerId: `${Glock[0]._id}`,
      history: "The Glock 19, introduced in 1988, is a compact version of the Glock 17. Its versatility and compatibility with Glock 17 magazines contributed to its widespread popularity.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/997815.json?$Prod_PLPThumb$",
    },
    {
      name: "Glock 23",
      caliber: ".40 S&W",
      manufacturerId: `${Glock[0]._id}`,
      history: "Debuted in 1990, the Glock 23 was designed to accommodate the .40 S&W cartridge. It shares similarities with the Glock 19 but features a heavier slide and larger barrel hole.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnationalinterest.org%2Fblog%2Fbuzz%2Fwhy-fbi-and-police-prefer-glock-23-glock-19-166484&psig=AOvVaw2jorStNrVXBJYT538JoL3H&ust=1717615025073000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDisd_UwoYDFQAAAAAdAAAAABAD",
    },
    {
      name: "Super Blackhawk",
      caliber: ".44 Remington Magnum",
      manufacturerId: `${Ruger[0]._id}`,
      history: "Introduced in the 1950s, the Super Blackhawk was Ruger's response to the demand for cowboy-style revolvers. It was developed to meet the market need for a single-action revolver with increased power.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/127076.json",
    },
    {
      name: "10/22",
      caliber: ".22 Long Rifle",
      manufacturerId: `${Ruger[0]._id}`,
      history: "The Ruger 10/22, introduced in 1964, was designed as a companion to the .44 Magnum carbine. Its design drew inspiration from the World War II-famous M1 Carbine.",
      Ownership: "allowed, must pass background check and some states may require a permit to purchase long guns.",
      Image: "https://www.shootingillustrated.com/media/j5znrcbu/ruger1022.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132681456563930000&quality=60",
    },
    {
      name: "MKIII",
      caliber: ".22 Long Rifle",
      manufacturerId: `${Ruger[0]._id}`,
      history: "The Ruger MKIII, part of the oldest line of pistols from Sturm, Ruger & Co., can trace its design back to the 1950s with the Ruger Standard. It remains a popular choice for target shooting and plinking.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://images.guns.com/prod/oaARsCsC2R6tm7On649qpNlY35NgNESfqIUBP3bF.jpeg",
    },
    {
      name: "G3",
      caliber: "7.62x51mm NATO",
      manufacturerId: `${HK[0]._id}`,
      history: "Developed in the 1950s by Heckler & Koch, the G3 was designed to supply the West German military with a new rifle after World War II. It was based on earlier developments such as the Spanish CETME Model 58.",
      Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
      Image: "",
    },
    {
      name: "HK53",
      caliber: "5.56x45mm",
      manufacturerId: `${HK[0]._id}`,
      history: "The HK53, launched in 1968, was Heckler & Koch's response to compete with Colt's AR-15/M16. It used the same roller-delayed blowback action developed for the G3 but saw limited adoption by major military contracts.",
      Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
      Image: "https://photo.weaponsystems.net/image/s-carousel/n-fa_smg_hk53_p01.jpg/--/img/ws/fa_smg_hk53_p01.jpg",
    },
    {
      name: "USP .45",
      caliber: ".45 ACP",
      manufacturerId: `${HK[0]._id}`,
      history: "Introduced in 1995, the Heckler & Koch USP .45 was designed as a universal self-loading pistol, incorporating modern features and materials for reliability and accuracy. It has been adopted by various military and law enforcement agencies worldwide.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://cdn11.bigcommerce.com/s-vxfkqern53/images/stencil/1280x1280/products/16325/65308/IMG_9912HKPARTS__90025.1696340719.jpg?c=1",
    },
    {
      name: "Mark 23",
      caliber: ".45 ACP",
      manufacturerId: `${HK[0]._id}`,
      history: "Developed in the early 1990s for the U.S. Special Operations Command, the Heckler & Koch Mark 23 combines the reliability of a combat pistol with the precision of a target pistol.",
      Ownership: "allowed, pistol permit and background check required.",
      Image: "https://hk-usa.com/wp-content/uploads/2-Mark-23-w-suppressor-and-LAM-AUG-19-2014.jpg",
    },
    {
      name: "UMP9",
      caliber: "9x19mm Parabellum",
      manufacturerId: `${HK[0]._id}`,
      history: "The Heckler & Koch UMP9 is a submachine gun developed by Heckler & Koch in the late 1990s. It was designed to offer a lighter and more affordable alternative to the MP5, utilizing modern polymers and a simple blowback operation. The UMP9 is chambered in 9x19mm Parabellum ammunition, making it suitable for close-quarters combat and law enforcement applications. Despite its relatively recent introduction, the UMP9 has gained popularity among military and law enforcement units worldwide for its reliability and compact design.",
      Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
      image:"https://www.jamesbondlifestyle.com/sites/default/files/styles/full_width_image/public/images/product/ga031-heckler-koch-ump9-large.jpg?itok=m3z9p72u",
    },
{
    name: "UMP45",
    caliber: ".45 ACP",
    manufacturerId: `${HK[0]._id}`,
    history: "The Heckler & Koch UMP45, introduced in 1999, is part of the UMP series of submachine guns. It was designed for use with .45 ACP cartridges, providing greater stopping power compared to its 9mm counterpart.",
    Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
    Image: "https://www.hkdefense.us/pages/military-le/mil-leimages/ump45rt.jpg",
},
{
    name: "MP5",
    caliber: "9x19mm Parabellum",
    manufacturerId: `${HK[0]._id}`,
    history: "The Heckler & Koch MP5 is a legendary submachine gun first developed in the 1960s. Its roller-delayed blowback mechanism ensures high accuracy and reliability. It remains one of the most popular submachine guns in use by military and law enforcement worldwide.",
    Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
    Image: "https://hk-usa.com/wp-content/uploads/1-MP5A2-NT-RIGHT-JULY-20161.jpg",
},
{
    name: "PSG-1",
    caliber: "7.62x51mm NATO",
    manufacturerId: `${HK[0]._id}`,
    history: "The Heckler & Koch PSG-1 is a high-precision sniper rifle introduced in the 1970s. It was developed following the Munich massacre as a tool for counter-terrorism units, offering exceptional accuracy and build quality.",
    Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
    Image: "https://cdn.rockislandauction.com/dev_cdn/79/516.jpg",
},
{
  name: "M4",
  caliber: "12 Gauge",
  manufacturerId: `${Benelli[0]._id}`,
  history: "The Benelli M4 is a semi-automatic shotgun developed in the late 1990s. It is used by military and law enforcement agencies worldwide.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.brownells.com/globalassets/10000/6f/430105583_1w.jpg",
},
{
  name: "MP 90 S World Cup .22lr",
  caliber: ".22 Long Rifle",
  manufacturerId: `${Benelli[0]._id}`,
  history: "The Benelli MP 90 S is a competition-grade pistol designed for target shooting and has been used in numerous world championships.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://benelli-guns.be/media/djcatalog2/images/item/0/mp-90-s-world-cup-cal-22-l-r_f.jpg",
},
{
  name: "92FS",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Beretta[0]._id}`,
  history: "The Beretta 92FS is a military-grade pistol introduced in 1975 and has been widely adopted by military and police forces around the world.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.krale.shop/media/catalog/product/cache/c3077125627ae237cf5a67567c9733e4/b/e/beretta_92_fs_1_.jpg",
},
{
  name: "1301",
  caliber: "12 Gauge",
  manufacturerId: `${Beretta[0]._id}`,
  history: "The Beretta 1301 is a tactical shotgun known for its reliability and speed, used by law enforcement and for home defense.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.budsgunshop.com/images/hiRes/161150_MN1LL8.jpg?v=1",
},
{
  name: "Cx4 Storm",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Beretta[0]._id}`,
  history: "The Beretta Cx4 Storm is a pistol-caliber carbine introduced in 2003, designed for ease of use and compatibility with Beretta handguns.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.sharkcoasttactical.com/wp-content/uploads/2021/12/beretta-cx4-storm-9mm-ngz90-new-scaled.jpg",
},
{
  name: "FNC",
  caliber: "5.56x45mm",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN FNC is a Belgian assault rifle developed in the late 1970s, known for its durability and use by several military forces.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://images.proxibid.com/AuctionImages/11026/219384/156_1.jpg",
},
{
  name: "FNX .45",
  caliber: ".45 ACP",
  manufacturerId: `${FN[0]._id}`,
  history: "The FNX .45 is a tactical pistol designed for military and law enforcement use, featuring a threaded barrel for suppressors.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://images.coreware.com/images/products/24123-14138927.jpg",
},
{
  name: "SCAR 16",
  caliber: "5.56x45mm",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN SCAR 16 is a modular assault rifle designed for U.S. Special Operations Command, known for its adaptability and performance.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.shootingillustrated.com/media/iymp25kt/scar.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132846447300170000&quality=60",
},
{
  name: "SCAR 17",
  caliber: "7.62x51mm NATO",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN SCAR 17 is a battle rifle variant of the SCAR series, used for long-range engagements and favored by special forces.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://fnamerica.com/wp-content/uploads/2016/12/SCAR-17S-FDE_029.jpg",
},
{
  name: "FN 509",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN 509 is a striker-fired pistol designed for military and law enforcement, featuring enhanced ergonomics and reliability.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://fnamerica.com/wp-content/uploads/2018/07/FN509T_FDE_rDot_027b.jpg",
},
{
  name: "Ps90",
  caliber: "5.7x28mm",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN P90 is a compact personal defense weapon developed in the late 1980s, known for its high-capacity magazine and futuristic design.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://fnamerica.com/wp-content/uploads/2016/12/PS90-Std-Blk_028.jpg",
},
{
  name: "Five-seveN",
  caliber: "5.7x28mm",
  manufacturerId: `${FN[0]._id}`,
  history: "The FN Five-seveN is a semi-automatic pistol developed alongside the P90, designed to use the same high-velocity ammunition.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://academy.scene7.com/is/image/academy/20077470?$pdp-gallery-ng$",
},
{
  name: "Browning Automatic Rifle",
  caliber: ".308 Winchester",
  manufacturerId: `${Browning[0]._id}`,
  history: "The Browning Automatic Rifle (BAR) was developed in the early 20th century and saw extensive use during World War I and II.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://www.shootingillustrated.com/media/ftehbcld/bar.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132683366432400000&quality=60",
},
{
  name: "Auto 5",
  caliber: "12 Gauge",
  manufacturerId: `${Browning[0]._id}`,
  history: "The Browning Auto-5 is a recoil-operated semi-automatic shotgun designed by John Browning, first produced in 1902.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.americanhunter.org/media/simlzwle/2012615155010-browning_a5_home.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132781876106370000&quality=60",
},
{
  name: "Hi-Power MkIII",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Browning[0]._id}`,
  history: "The Browning Hi-Power is one of the most widely used military pistols in history, designed by John Browning and introduced in 1935.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.thefirearmblog.com/blog/wp-content/uploads/2014/02/hipower-0035.jpg",
},
{
  name: "P320",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${SIG[0]._id}`,
  history: "The SIG P320 is a modular, striker-fired pistol adopted by the U.S. Army as the M17 and M18 in 2017.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://m.media-amazon.com/images/I/61YW0vakAtL._AC_UF1000,1000_QL80_.jpg",
},
{
  name: "P226",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${SIG[0]._id}`,
  history: "The SIG P226 is a full-sized, service-type pistol introduced in the 1980s, widely used by military and law enforcement.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.midwestgunworks.com/mm5/graphics/00000001/32/E26R-9-LEGION.jpg",
},
{
  name: "MCX-Spear",
  caliber: "6.8x51",
  manufacturerId: `${SIG[0]._id}`,
  history: "The SIG MCX-Spear is part of the MCX family, known for its modularity and use by special operations forces.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.sigsauer.com/media/catalog/product/cache/2f7933e2ff16f0ec074a16ab6b6195f2/m/c/mcx-spear-web-16-2.jpg",
},
{
  name: "SG-552",
  caliber: "5.56x45mm",
  manufacturerId: `${SIG[0]._id}`,
  history: "The SIG SG-552 is a compact carbine version of the SG 550 series, popular with special forces and police units.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them ",
  Image: "https://static.wikia.nocookie.net/tuckerverse/images/2/2f/SIG_SG_552.jpg/revision/latest?cb=20150519155418",
},
{
  name: "Kar 98k",
  caliber: "7.92x57mm Mauser",
  manufacturerId: `${Mauser[0]._id}`,
  history: "The Karabiner 98k is a bolt-action rifle that was the standard service rifle of the German military during World War II.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://cdn11.bigcommerce.com/s-9mcepdq780/images/stencil/1280x1280/products/516/1765/2__90094.1554149538.jpg?c=2",
},
{
  name: "C96",
  caliber: "7.63x25mm Mauser",
  manufacturerId: `${Mauser[0]._id}`,
  history: "The Mauser C96 is a distinctive semi-automatic pistol developed in the late 19th century, known for its integral box magazine.",
  Ownership: "allowed, pistol permit and background check required as well as tax stamp and sot class 2, or 3 ",
  Image: "https://www.americanrifleman.org/media/gf1faeig/mauser-c96-broomhandle-pistol-2.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132621932271670000&quality=60",
},
{
  name: "Model 870",
  caliber: "12 Gauge",
  manufacturerId: `${Remington[0]._id}`,
  history: "The Remington Model 870 is one of the best-selling shotguns in history, known for its versatility and reliability since 1950.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.remarms.com/assets/imagesRA/870%20Wingmaster/870%20Wingmaster_Right%20profile.png",
},
{
  name: "Model 700",
  caliber: ".308 Winchester",
  manufacturerId: `${Remington[0]._id}`,
  history: "The Remington Model 700 is a bolt-action rifle known for its accuracy and use in both civilian and military applications.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states have restrictions on them ie banning certain features on them",
  Image: "https://www.shootingillustrated.com/media/r4fd0ivd/upgrading-a-remington-700-sps-tactical-rifle-f.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132682458796430000&quality=60",
},
{
  name: "R5",
  caliber: "5.56x45mm",
  manufacturerId: `${Remington[0]._id}`,
  history: "The Remington R5 is a modern carbine designed for military and law enforcement, offering high performance and reliability.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_r5rgp_o1.jpg/--/img/ws/fa_ar_r5rgp_o1.jpg",
},
{
  name: "Model 1876",
  caliber: ".44 Henry",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 1876 is a lever-action rifle known for its role in the American West, offering greater power than earlier models.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns,",
  Image: "https://www.ubertireplicas.com/wp-content/uploads/2018/07/1876CARABINE.jpg",
},
{
  name: "Model 1892",
  caliber: ".32-20 Winchester",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 1892 is a lever-action repeating rifle that replaced the earlier 1873 model, known for its smooth action.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://media.mwstatic.com/product-images/src/Primary/410/410549.jpg",
},
{
  name: "Model 1887",
  caliber: "12 Gauge",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 1886 is a lever-action rifle designed to handle the more powerful cartridges of the late 19th century.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns,",
  Image: "https://www.taylorsfirearms.com/media/catalog/product/cache/28deaf2d1e2e6c4957c5e62674a78021/2/2/220102_base.png",
},
{
  name: "Model 1895",
  caliber: "7.62x54mm Rimmed",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 1895 is a lever-action rifle that was used by several military forces, including the Russian Empire.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://www.collectorsfirearms.com/577547/winchester-1895-7-62mm-w9143.jpg",
},
{
  name: "Model 70",
  caliber: ".270 Winchester",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 70 is a bolt-action rifle known for its accuracy and reliability, introduced in 1936 and used for hunting and target shooting.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns,",
  Image: "https://cdn4.volusion.store/jbkag-abfzx/v/vspfiles/photos/WINMD70SE375-2.jpg?v-cache=1532603203",
},
{
  name: "Model 1903",
  caliber: ".30-06 Springfield",
  manufacturerId: `${Springfield[0]._id}`,
  history: "The Springfield Model 1903 is a bolt-action rifle that served as the standard-issue rifle of the U.S. military from 1903 until the late 1930s.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns,",
  Image: "https://ids.si.edu/ids/deliveryService?id=NMAH-JN2016-02641-000001",
},
{
  name: "Hellcat",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Springfield[0]._id}`,
  history: "The Springfield Hellcat is a compact, high-capacity pistol introduced in 2019, designed for concealed carry and self-defense.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://dukessportshop.com/wp-content/uploads/2024/03/main-1.jpg",
},
{
  name: "M-14",
  caliber: "7.62x51mm",
  manufacturerId: `${Springfield[0]._id}`,
  history: "The Springfield M-14 is a selective fire battle rifle that served as the standard-issue rifle of the U.S. military from the late 1950s to the 1970s.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_m14_v1.jpg/--/img/ws/fa_ar_m14_v1.jpg",
},
{
  name: "Model 1873",
  caliber: ".44-40 Winchester",
  manufacturerId: `${Winchester[0]._id}`,
  history: "The Winchester Model 1873 is a lever-action rifle known as 'The Gun that Won the West,' introduced in 1873 and used extensively on the American frontier.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://media.mwstatic.com/product-images/src/Primary/506/506439.jpg",
},
{
  name: "CZ-75",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${CZ[0]._id}`,
  history: "The CZ-75 is a semi-automatic pistol developed in Czechoslovakia in the 1970s, known for its ruggedness and accuracy.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.sportsmans.com/medias/cz-75-b-9mm-luger-46in-black-pistol-101-rounds-california-compliant-1155348-1.jpg?context=bWFzdGVyfGltYWdlc3wyNzQzNTV8aW1hZ2UvanBlZ3xhR1EyTDJneU1pOHhNVE0wTlRjMU1USTNOelU1T0M4eE1qQXdMV052Ym5abGNuTnBiMjVHYjNKdFlYUmZZbUZ6WlMxamIyNTJaWEp6YVc5dVJtOXliV0YwWDNOdGR5MHhNVFUxTXpRNExURXVhbkJufGFkYWZmOGJhMDRkOGE4MzgwMzExZjg5NTdjNTUzM2JiYThiOTcwYzk2OTYwNmRjOWU1NzU3Njk2ZDJiMjYzOTU",
},
{
  name: "CZ 527",
  caliber: "7.62x39mm",
  manufacturerId: `${CZ[0]._id}`,
  history: "The CZ 527 is a bolt-action rifle designed for hunting and sport shooting, known for its compact size and accuracy.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://cz-usa.com/wp-content/uploads/2021/09/cz-usa-cz-527-carbine-1.png",
},
{
  name: "CZ 550",
  caliber: "7.62x51mm",
  manufacturerId: `${CZ[0]._id}`,
  history: "The CZ 550 is a bolt-action rifle designed for hunting and long-range shooting, offering high accuracy and reliability.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns",
  Image: "https://cz-usa.com/wp-content/uploads/2021/09/cz-550-american.png",
},
{
  name: "PP",
  caliber: ".32 ACP",
  manufacturerId: `${Walther[0]._id}`,
  history: "The Walther PP (Polizeipistole) is a semi-automatic pistol introduced in 1929, known for its compact size and reliability.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.americanrifleman.org/media/ehqowt5v/walther_lede.jpg?anchor=center&mode=crop&width=987&height=551&rnd=132621221975130000&quality=60",
},
{
  name: "PPK",
  caliber: ".32 ACP",
  manufacturerId: `${Walther[0]._id}`,
  history: "The Walther PPK (Polizeipistole Kriminalmodell) is a smaller version of the PP, popularized as James Bond's handgun.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.gricegunshop.com/media/catalog/product/cache/dc47a7f8b90ffd5555a0ef8a8ab8e7be/w/t/wth4796004-ppks-380-stainless.png",
},
{
  name: "P99",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Walther[0]._id}`,
  history: "The Walther P99 is a semi-automatic pistol introduced in 1997, known for its innovative design and use by law enforcement agencies.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.krale.shop/media/catalog/product/u/m/umarex-walther-p99-dao-_1_.jpg",
},
{
  name: "PPQ",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Walther[0]._id}`,
  history: "The Walther PPQ is a striker-fired pistol known for its ergonomic design and smooth trigger, popular for both duty and competition.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://dracutgunrange.com/wp-content/uploads/2024/02/38361_21CC2C4C-214A-4AE3-94DA-E5B0D563E4D5.jpeg",
},
{
  name: "WA2000",
  caliber: ".300 Winchester Magnum",
  manufacturerId: `${Walther[0]._id}`,
  history: "The Walther WA2000 is a semi-automatic bullpup sniper rifle developed in the 1970s, known for its precision and rarity.",
  Ownership: "allowed, must pass background check as wel as some states have a permit to purchase long guns, furthermore some states may have restrictions on them ie banning certain features on them",
  Image: "https://photo.weaponsystems.net/image/s-carousel/n-fa_sr_wa2000_v1.jpg/--/img/ws/fa_sr_wa2000_v1.jpg",
},
{
  name: "AK-47",
  caliber: "7.62x39mm",
  manufacturerId: `${Kalashnikov[0]._id}`,
  history: "The AK-47 is a legendary assault rifle designed by Mikhail Kalashnikov in the late 1940s, known for its reliability and widespread use.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://www.therange702.com/wp-content/uploads/2016/10/shutterstock_102492452_1.jpg",
},
{
  name: "AKM",
  caliber: "7.62x39mm",
  manufacturerId: `${Kalashnikov[0]._id}`,
  history: "The AKM is a modernized version of the AK-47, featuring stamped metal parts for easier production and improved performance.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://static.wikia.nocookie.net/terranalliance/images/a/a7/AKM.jpg/revision/latest?cb=20221021085054",
},
{
  name: "AKM-74",
  caliber: "5.45x39mm",
  manufacturerId: `${Kalashnikov[0]._id}`,
  history: "The AKM-74 is a variant of the AKM chambered for the smaller 5.45x39mm cartridge, adopted by the Soviet military in the 1970s.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://img.kalashnikovgroup.ru/2120,fit/https://cdn.kalashnikovgroup.ru/static/images/a/k/7/ak74m-d019134-3kh2-13363-1080.jpg",
},
{
  name: "PP-19 Vityaz",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${Kalashnikov[0]._id}`,
  history: "The PP-19 Vityaz is a Russian submachine gun derived from the AK platform, known for its compact size and reliability.",
  Ownership: "allowed, but will require a sot class 3 tax stamp, or FFL type 7 with an sot class 2,3.",
  Image: "https://cdn.kalashnikovgroup.ru/static/images/2/-/d/2-d019318-13894-1080.jpg",
},
{
  name: "Model 29",
  caliber: ".44 Remington Magnum",
  manufacturerId: `${SW[0]._id}`,
  history: "The Smith & Wesson Model 29 is a large frame, double-action revolver chambered in .44 Magnum, famously wielded by Clint Eastwood in Dirty Harry.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://therangewi.com/wp-content/uploads/2022/02/SW-Model-29-2-8in.jpg",
},
{
  name: "Model 500",
  caliber: ".500 Smith and Wesson Magnum",
  manufacturerId: `${SW[0]._id}`,
  history: "The Smith & Wesson Model 500 is the most powerful production revolver in the world, capable of firing the .500 S&W Magnum cartridge.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://www.imfdb.org/images/thumb/4/4f/S%26W500.jpg/400px-S%26W500.jpg",
},
{
  name: "Model 3906",
  caliber: "9x19mm Parabellum",
  manufacturerId: `${SW[0]._id}`,
  history: "The Smith & Wesson Model 3906 is a compact semi-automatic pistol introduced in the 1990s, designed for concealed carry and self-defense.",
  Ownership: "allowed, pistol permit and background check required",
  Image: "https://image.invaluable.com/housePhotos/Milestone/55/725955/H19536-L292609907.jpg",
},


    

];
await Firearm.insertMany(firearms)
console.log("created some firearms")
}

const run = async()=>{
  await main ()
  db.close()
}
run ()


