// Replace img values with your actual image paths e.g. "/images/sesame-oil.jpg"
// Place your images in the /public/images/ folder of your React project
import sesameWhite from "../assets/sesame.jpg";
import groundnutOil from "../assets/ground.jpg";
import sesameBlack from "../assets/blacksesame.jpg";
import coconutOil from "../assets/coconut.jpg";
import mustardOil from "../assets/mustard.jpg";
import sunflowerOil from "../assets/sun.jpg";
import dhaniya from "../assets/dhaniya.jpg";
import avisaginjalu from "../assets/avasa.jpg";
import garamMasala from "../assets/garammasala.jpg";
import karevepaku from "../assets/karevepaku.jpg";
import sambar from "../assets/sambar.jpg";
import groundnutPowder from "../assets/groundnut.jpg";
import palm from "../assets/palm.jpg";
import pacchaJonnalu from "../assets/pacchajonna.jpg";
import ragi from "../assets/ragi.jpg";
import wheat from "../assets/wheat.jpg";
import rice from "../assets/rice.jpg";
import ragimillet from "../assets/ragimillet.jpg";
import ulava from "../assets/ulava.jpg";
import besan from "../assets/besen.jpg";
import corn from "../assets/corn.jpg";
import sajjalu from "../assets/sajjalu.jpg";
import soapnut from "../assets/soapnut.jpg";
import shikakai from "../assets/shikakai.jpg";
import arikalu from "../assets/arikalu.jpg";
import udhalu from "../assets/udhalu.jpg";
import sammalu from "../assets/samulu.jpg";
import tellaJonnalu from "../assets/tellajonna.jpg";
import putnala from "../assets/putnalapodi.jpg"; 
import jeera from "../assets/jeera.jpg";
import pesara from "../assets/pesarapodi.jpg";
import multi from "../assets/multiflora.jpg";
import korralu from "../assets/korralu.jpg";
import kandiPodi from "../assets/kandipodi.jpg";
import instant from "../assets/instant.jpg";
import andu from "../assets/andu.jpg";
import filter from "../assets/filter.jpg";
import foxtail from "../assets/foxtail.jpg";
import forest from "../assets/forest.jpg";
import godhumulu from "../assets/godumulu.jpg";
import jamun from "../assets/jamun.jpg";
import triphala from "../assets/tripla.jpg";
import brown from "../assets/brownrice.jpg";
import fennel from "../assets/fennel.jpg";
import barnyard from "../assets/baryand.jpg";
const categories = [
  {
    id: "oils",
    label: "Cold Pressed Oils",
    icon: "🫙",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Sesame Oil (White)",
        sizes: ["1 lt", "½ lt", "5 lt"],
        img: sesameWhite,
        desc: "Cold-pressed from premium white sesame seeds. Rich in antioxidants, ideal for cooking and skin care.",
      },
      {
        name: "Groundnut Oil",
        sizes: ["1 lt", "½ lt", "5 lt"],
        img: groundnutOil,
        desc: "Traditionally pressed groundnut oil with a rich nutty aroma. High smoke point, perfect for deep frying.",
      },
      {
        name: "Sesame Oil (Black)",
        sizes: ["1 lt", "½ lt"],
        img: sesameBlack,
        desc: "Pressed from black sesame seeds. Stronger flavour, excellent for hair care and Ayurvedic use.",
      },
      {
        name: "Coconut Oil",
        sizes: ["1 lt", "½ lt"],
        img: coconutOil,
        desc: "Pure cold-pressed virgin coconut oil. Great for cooking, moisturising skin and hair nourishment.",
      },
      {
        name: "Mustard Oil",
        sizes: ["1 lt", "½ lt"],
        img: mustardOil,
        desc: "Pungent and flavourful cold-pressed mustard oil. A staple in traditional Indian cooking.",
      },
      {
        name: "Sunflower Oil",
        sizes: ["1 lt", "½ lt"],
        img: sunflowerOil,
        desc: "Light and mild cold-pressed sunflower oil. Low in saturated fats, heart-friendly choice.",
      },
    ],
  },
  {
    id: "powders",
    label: "Spice Powders",
    icon: "🌶️",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Sompu (Saunf)",
        sizes: ["available"],
        img: fennel,
        desc: "Freshly ground fennel seeds. Aids digestion, adds a sweet aromatic flavour to dishes.",
      },
      {
        name: "Dhaniya Powder",
        sizes: ["available"],
        img: dhaniya,
        desc: "Sun-dried coriander seeds ground fresh. Earthy and citrusy, essential in every kitchen.",
      },
      {
        name: "Avisaginjalu",
        sizes: ["available"],
        img: avisaginjalu,
        desc: "Traditional Andhra spice blend used in curries and chutneys. Bold, authentic flavour.",
      },
      {
        name: "Garam Masala",
        sizes: ["available"],
        img: garamMasala,
        desc: "A warm, aromatic blend of hand-picked whole spices ground fresh. No fillers added.",
      },
      {
        name: "Kandi Podi",
        sizes: ["available"],
        img: kandiPodi,
        desc: "Classic Andhra lentil powder. Pairs perfectly with hot rice and ghee.",
      },
      {
        name: "Curry Leaves Powder",
        sizes: ["available"],
        img: karevepaku,
        desc: "Sun-dried curry leaves ground to a fine powder. Rich in iron and antioxidants.",
      },
      {
        name: "Putnala Karam Podi",
        sizes: ["available"],
        img: putnala,
        desc: "Roasted gram spice powder with chilli. A quick side dish with idli, dosa or rice.",
      },
      {
        name: "Sambar Powder",
        sizes: ["available"],
        img: sambar,
        desc: "Traditional South Indian sambar masala. Freshly blended with 15+ spices for authentic taste.",
      },
      {
        name: "Groundnut Powder",
        sizes: ["available"],
        img: groundnutPowder,
        desc: "Coarsely ground roasted groundnuts. Perfect chutney base, rich in protein.",
      },
      
      {
        name: "Jeera Powder",
        sizes: ["available"],
        img: jeera,
        desc: "Fresh-roasted cumin seeds ground to powder. Enhances digestion and adds depth of flavour.",
      },
    ],
  },
  {
    id: "millets",
    label: "Millets & Grains",
    icon: "🌾",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Arikalu (Kodo Millet)",
        sizes: ["½ kg", "1 kg"],
        img: arikalu,
        desc: "High fibre ancient grain. Helps manage blood sugar and supports gut health.",
      },
      {
        name: "Udhalu (Black Gram)",
        sizes: ["½ kg", "1 kg"],
        img: udhalu,
        desc: "Protein-rich black gram. Ideal for idli, dosa batter and traditional dals.",
      },
      {
        name: "Barnyard Millet",
        sizes: ["½ kg", "1 kg"],
        img: barnyard,
        desc: "Gluten-free millet rich in iron and fibre. Great for weight management.",
      },
      {
        name: "Kooralu (Foxtail Millet)",
        sizes: ["½ kg", "1 kg"],
        img: korralu,
        desc: "Nutty-flavoured millet packed with minerals. Use like rice in everyday meals.",
      },
      {
        name: "Andu Karalu (Little Millet)",
        sizes: ["½ kg", "1 kg"],
        img: andu,
        desc: "Tiny but nutrient-dense millet. Easy to digest, suitable for all age groups.",
      },
      {
        name: "Saamalu (Same Millet)",
        sizes: ["½ kg", "1 kg"],
        img: sammalu,
        desc: "Smooth textured millet with a mild taste. Used in upma, khichdi and kheer.",
      },
      {
        name: "Tella Jonnalu (White Sorghum)",
        sizes: ["½ kg", "1 kg"],
        img: tellaJonnalu,
        desc: "Gluten-free white sorghum grain. High in protein, great for rotis and porridges.",
      },
      {
        name: "Pacha Jonnalu (Green Sorghum)",
        sizes: ["½ kg", "1 kg"],
        img: pacchaJonnalu,
        desc: "Green sorghum variety with a rich earthy flavour. Traditionally used in Andhra cuisine.",
      },
      {
        name: "Sajjalu (Pearl Millet)",
        sizes: ["½ kg", "1 kg"],
        img: sajjalu,
        desc: "Energy-dense pearl millet. Cooling in summer, excellent for bajra rotis.",
      },
      {
        name: "Brown Rice",
        sizes: ["500 g", "1 kg"],
        img: brown,
        desc: "Raw unpolished rice retaining full nutrients. Light, fluffy and naturally fragrant.",
      },
      {
        name: "Ragi (Finger Millet)",
        sizes: ["½ kg", "1 kg"],
        img: ragimillet,
        desc: "Calcium-rich finger millet. Ideal for ragi mudde, porridge, and health drinks.",
      },
      {
        name: "Godhumulu (Wheat)",
        sizes: ["1 kg"],
        img: godhumulu,
        desc: "Whole wheat grain stone-ground. Nutritious flour for rotis, chapatis and bread.",
      },
      {
        name: "Vari Galey (Foxtail Millet)",
        sizes: ["500 g"],
        img: foxtail,
        desc: "Traditional Andhra grain used in festive cooking. Unique nutty taste.",
      },
    ],
  },
  {
    id: "flours",
    label: "Flours & Jaggery",
    icon: "🏺",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Ulava Flour (Horse Gram)",
        sizes: ["available"],
        img: ulava,
        desc: "Protein-packed horse gram flour. Helps in weight loss and kidney health.",
      },
      {
        name: "Besan Flour",
        sizes: ["available"],
        img: besan,
        desc: "Freshly ground chickpea flour. Versatile for pakoras, cheela and sweets.",
      },
      {
        name: "Corn Flour",
        sizes: ["available"],
        img: corn,
        desc: "Fine corn flour for thickening gravies, making tortillas and crispy coatings.",
      },
      {
        name: "Ragi Flour",
        sizes: ["available"],
        img: ragi,
        desc: "Freshly stone-ground finger millet flour. Rich in calcium, iron and fibre.",
      },
      {
        name: "Ragi Malt",
        sizes: ["available"],
        img: ragi,
        desc: "Sprouted ragi malt powder. Nutritious health drink for kids and adults.",
      },
      {
        name: "Rice Flour",
        sizes: ["available"],
        img: rice,
        desc: "Fine raw rice flour for idiyappam, murukku, puttu and sweets.",
      },
      {
        name: "Wheat Flour",
        sizes: ["available"],
        img: wheat,
        desc: "Whole wheat flour stone-ground to retain bran and germ. No maida blending.",
      },
      {
        name: "Palm Jaggery Powder",
        sizes: ["available"],
        img: palm,
        desc: "Natural unrefined palm jaggery in powder form. Rich in minerals, replaces sugar.",
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    icon: "☕",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Instant 100% Pure Coffee",
        sizes: ["50 g", "100 g"],
        img: instant,
        desc: "100% pure Arabica instant coffee. No chicory, no additives — strong and smooth.",
      },
      {
        name: "Instant 60-40 Blend",
        sizes: ["50 g", "100 g"],
        img: instant,
        desc: "60% coffee, 40% chicory instant blend. Classic South Indian taste.",
      },
      {
        name: "Filter Coffee 100%",
        sizes: ["available"],
        img: filter,
        desc: "Pure filter coffee powder for the traditional South Indian filter. Bold and aromatic.",
      },
      {
        name: "Filter Coffee 60-40",
        sizes: ["available"],
        img: filter,
        desc: "60% coffee and 40% chicory filter blend. Rich decoction, perfect with frothy milk.",
      },
      {
        name: "Filter Coffee 70-30",
        sizes: ["available"],
        img: filter,
        desc: "70% coffee and 30% chicory. Stronger coffee-forward flavour for connoisseurs.",
      },
      {
        name: "Filter Coffee 80-20",
        sizes: ["available"],
        img: filter,
        desc: "80% coffee and 20% chicory. Near-pure blend with intense aroma and taste.",
      },
    ],
  },
  {
    id: "wellness",
    label: "Wellness & Beauty",
    icon: "🍃",
    color: "#098a25",
    bg: "#F0FAF2",
    products: [
      {
        name: "Soap Nut Shampoo",
        sizes: ["500 ml", "1000 ml"],
        img: soapnut,
        desc: "Natural soap nut liquid shampoo. Gentle on scalp, reduces dandruff and hair fall.",
      },
      {
        name: "Shikaka Shampoo",
        sizes: ["50 ml", "100 ml"],
        img: shikakai,
        desc: "Herbal shikakai shampoo for strong, shiny hair. Chemical-free, sulphate-free.",
      },
      {
        name: "Triphala Juice",
        sizes: ["available"],
        img: triphala,
        desc: "Blend of amla, haritaki and bibhitaki. Supports digestion, immunity and detox.",
      },
      {
        name: "Honey (3 varieties)",
        sizes: ["available"],
        img: forest,
        desc: "Pure raw honey in 3 natural varieties. Unprocessed, unheated and full of enzymes.",
      },
      {
        name: "Honey multiflora(3 varieties)",
        sizes: ["available"],
        img: multi,
        desc: "Pure raw honey in 3 natural varieties. Unprocessed, unheated and full of enzymes.",
      },
      {
        name: "Jamun Honey (3 varieties)",
        sizes: ["available"],
        img: jamun,
        desc: "Pure raw honey in 3 natural varieties. Unprocessed, unheated and full of enzymes.",
      },
    ],
  },
];

export default categories;