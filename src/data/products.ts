import type { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'microneedling',
    name: 'Dr. Pen Microneedling Devices',
    description: 'Precision devices for collagen induction and skin rejuvenation',
    image: import.meta.env.BASE_URL + 'images/product-microneedling.png',
    productCount: 6,
  },
  {
    id: 'laser',
    name: 'Laser & IPL Devices',
    description: 'Safe, effective hair reduction and skin rejuvenation devices',
    image: import.meta.env.BASE_URL + 'images/product-laser.png',
    productCount: 4,
  },
  {
    id: 'hifu',
    name: 'HIFU & Skin Tightening',
    description: 'Focused ultrasound for non-surgical lifting and tightening',
    image: import.meta.env.BASE_URL + 'images/hifu-device.jpg',
    productCount: 1,
  },
  {
    id: 'bb-glow',
    name: 'BB Glow & Lip Products',
    description: 'Complete treatment kits for professional results',
    image: import.meta.env.BASE_URL + 'images/product-bb-glow.png',
    productCount: 2,
  },
  {
    id: 'serums',
    name: 'Injectables & Serums',
    description: 'Premium treatment serums for enhanced results',
    image: import.meta.env.BASE_URL + 'images/serum-bottles.jpg',
    productCount: 13,
  },
  {
    id: 'masks-skincare',
    name: 'Masks & Skin Care',
    description: 'Professional skincare products for clinic use',
    image: import.meta.env.BASE_URL + 'images/product-masks-skincare.png',
    productCount: 9,
  },
  {
    id: 'cosmetic-kits',
    name: 'Cosmetic Kits',
    description: 'Specialized cosmetic kits for advanced treatments',
    image: import.meta.env.BASE_URL + 'images/cosmetic-kits.png',
    productCount: 1,
  },
];

export const products: Product[] = [
  {
    id: 'drpen-m8',
    name: 'Dr Pen Ultima M8 Microneedling Latest Model',
    category: 'microneedling',
    price: 16500,
    originalPrice: 20000,
    image: import.meta.env.BASE_URL + 'images/product-drpen-m8.png',
    rating: 5,
    description: "Dr. pen Ultima M8 Professional Skin Care Tools\nThe Dr pen M8 is the newest product in the Dr pen series. It equipped a digital LED display to show you which speed you're working on (6 speed levels) and has a BUILT-IN battery, just charge and GO, or use wired with the power cord provided. The Dr. Pen M8 will help with the appearance of skin, giving you a smoother look and feel, resulting in overall beautiful skin.\n\nTake Skin Of All Ages To A New Level With Dr Pen. Get and maintain a healthy-looking, more beautiful and youthful appearance.",
    features: [
      '6 levels adjustable for all skin types',
      'Exclusive cartridge with arc edge for smooth working',
      'LCD digital screen Display for intuitive operation',
      '3 slots for more stable connection cartridge and pen',
      'One-click operation: One-handed control switches',
      'Imported internal motor: High-performance, low noise',
      'Longer battery life: 500mAh high-capacity battery'
    ],
    packageIncludes: [
      '1x Dr. Pen M8',
      '2x 16 Pins Needles',
      '1x Power Adaptor',
      '1x User Manual',
      '1x Box'
    ],
    inStock: true,
    badge: 'Best Seller',
  },
  {
    id: 'drpen-a6',
    name: 'Dr Pen Ultima A6 Microneedling Facial Care',
    category: 'microneedling',
    price: 15000,
    originalPrice: 18500,
    image: import.meta.env.BASE_URL + 'images/product-drpen-a6.png',
    rating: 4.8,
    description: "LUMINOUS LOOK: Use professional Dr Pen kit in the comfort of your own home.\nCOST-EFFECTIVE and TIME SAVING: No more expensive, time-consuming salon facials.\nADJUSTABLE and PORTABLE: Lightweight, cordless design with adjustable dial and 5-speed levels. NON-HARMFUL: Always put fresh Dr. Pen cartridges and consistently follow your regime.\n\nAnti-Puffiness, Scar removal including acne scar treatment, Anti-Wrinkle Treatment, Anti-Aging, Hair Loss Treatment, Surgical Scar Removal, and Hyper pigmentation treatment.",
    features: [
      'Cost-Effective and Time Saving',
      'Adjustable needle length (0.25mm - 3.0mm)',
      'Lightweight and Cordless with 2 rechargeable batteries',
      '5-speed levels adjust to skin needs',
      'Non-harmful, consistent at-home facial treatment'
    ],
    packageIncludes: [
      '1x Dr Pen A6',
      '2x 12 pins cartridges',
      '2x Rechargeable batteries',
      '1x Adapter to use the pen plugged in',
      '1x Battery charging adapter with cover',
      '1x Wall charger and cord',
      '1x User manual & Retail box'
    ],
    inStock: true,
  },
  {
    id: 'drpen-a1-w',
    name: 'Dr Pen Ultima A1 Microneedle Facial Care',
    category: 'microneedling',
    price: 12500,
    originalPrice: 16000,
    image: import.meta.env.BASE_URL + 'images/product-drpen-a1-w.png',
    rating: 4.7,
    description: "Dr Pen Ultima A1-Wireless\nIf you've tried all the cosmetics and creams in the world yet are still looking for a more effective way. Dr. Pen Ultima A1 is your best assistant, which will leave you feeling and looking better. It's safe to share the host with other persons. Also, it's economical, you just need to replace the cartridges after every use. All cartridges are disposable with sealed packaging.\n\nDr Pen Ultima A1 effectively solves skin problems such as Acne Scarring, Stretch Marks, Hyperpigmentation & Melasma, Sun damage, overall Skin Texture & Tone, Hair loss & Alopecia.",
    features: [
      'Wired or wireless working modes with 2 rechargeable batteries (8h working time)',
      'High-quality aviation aluminum alloy, lightweight and attractive',
      'Latest mute technology (less than 15 decibels)',
      'Disposable aseptic design prevents cross-infection',
      'Adjustable needle depth for different skin problems',
      '5 levels speed with high-speed internal motor'
    ],
    packageIncludes: [
      '1x Dr Pen Ultima A1-W',
      '2x Rechargeable Batteries',
      '1x Power Adapter & Cord',
      '1x User Manual & Color Box'
    ],
    inStock: true,
  },
  {
    id: 'drpen-a1-wired',
    name: 'Dr. Pen A1 (Wired)',
    category: 'microneedling',
    price: 12500,
    originalPrice: 16000,
    image: import.meta.env.BASE_URL + 'images/product-drpen-a1-wired.png',
    rating: 4.6,
    description: 'I find this to be the most reliable entry-level professional device for those who prefer consistent corded power.',
    features: [
      'Stainless steel build',
      '5 speed levels',
      'Broad compatibility with standard needle types'
    ],
    packageIncludes: [],
    inStock: true,
  },
  {
    id: 'ipl-ice-cool-pro',
    name: 'IPL Ice Cool Pro Laser',
    category: 'laser',
    price: 28000,
    originalPrice: 35000,
    image: import.meta.env.BASE_URL + 'images/product-ipl-ice-cool-pro.png',
    rating: 4.9,
    description: "This IPL Laser Permanent hair removing device with latest technology and Ice cool function features:\n\n• Effective Laser Hair Removal: The IPL hair removal device uses Intense pulsed light (IPL) technology to reduce unwanted hair growth. The pursed light with 5J/CM² high energy and 600nm wavelength can arrive at the hair follicle to break the cycle of hair growth, kill the hair follicle more efficiently and safely. Within 12 weeks, you'll see up to 97% less hair.\n\n• 9 Energy Levels and 2 Flash Modes: The laser hair removal device has upgraded 9 energy levels will adapt to different skin areas and different hair growth speeds, giving you more precise treatment. Auto and manual mode suitable for different body area.\n\n• Upgraded Ice Cooling Care: The laser hair removal for women with ice cool care features, it can cool the skin while emitting pulsed light. Skin temperature as low as 8°C, soothes the burning sensation and won't cause skin redness.\n\n• At home laser hair removal: IPL hair removal device is with 999,999 flashes, twice longer usage than 500,000 flashes devices on the market. You can share it among with whole family and friends.",
    features: [
      '9 Energy Levels which is more effective than any other IPL Laser Device',
      'Original Xenon-Quartz Lamp',
      '999,999 Flashes which is enough for 10 years',
      'Skin Rejuvenation function makes your skin soft, tight and shiny',
      'Can be used for full body of both genders',
      'FDA approved with zero side effects'
    ],
    packageIncludes: [
      'IPL device',
      'Protective eyewear',
      'Razor',
      'Power adapter'
    ],
    inStock: true,
    badge: 'Popular',
  },
  {
    id: 'ipl-ice-cool-painless',
    name: 'IPL Ice Cool Painless Laser',
    category: 'laser',
    price: 26000,
    originalPrice: 32500,
    image: import.meta.env.BASE_URL + 'images/product-ipl-ice-cool-painless.png',
    rating: 4.8,
    description: "990,000 Flashes IPL Laser Epilator for Women Permanent Painless Whole-Body Hair Remover Electric Depilator Hot Sell.\n\nDual point cooling for the ultimate ice feeling experience up to 8-12°C. Comes with six modes to meet the needs of different individuals and manual/automatic dual operation modes. Large flat light outlet area gives high hair removal efficiency.",
    features: [
      'Dual point cooling, ultimate ice feeling experience',
      '360° knob gear adjustment for easy control',
      'Touch the button, one touch is instant',
      'High-definition LED display screen, clear and visible',
      'Six modes to meet the needs of different individuals',
      'Large flat light outlet area and high hair removal efficiency',
      'Manual/automatic dual operation mode'
    ],
    packageIncludes: [
      '1x Hair removal machine',
      '1x Power adapter US Plug',
      '1x Goggles',
      '1x Scraper',
      '1x Manual & User Manual'
    ],
    inStock: true,
  },
  {
    id: 'mini-ipl',
    name: 'Mini IPL Laser Hair Removal Device',
    category: 'laser',
    price: 7000,
    originalPrice: 11000,
    image: import.meta.env.BASE_URL + 'images/product-mini-ipl.png',
    rating: 4.5,
    description: "Mini IPL Ice Cool Laser Hair Removal Device\n\nPainless • Portable • Pocket-Friendly • Long-Lasting Results\n\nThe Mini IPL Laser Hair Removal Device is a compact, lightweight, and highly effective solution for removing unwanted hair anytime, anywhere. Designed with advanced IPL (Intense Pulsed Light) technology, this device targets hair follicles at the root to reduce regrowth and help you achieve smooth, hair-free skin at home or on the go.\n\nInitial Phase: Use 2-3 times per week for 4-6 weeks.\nMaintenance Phase: Use once every 2-4 weeks.\nSession Time: Approximately 10-20 minutes depending on area.",
    features: [
      '5 Adjustable Energy Levels based on skin sensitivity',
      'Manual Mode: Best for small or sensitive areas (face, underarms, bikini)',
      'Auto Mode: Ideal for larger areas like legs, arms, and back',
      'Mini Size & Pocket-Friendly Design, perfect for travel',
      'Safe & Skin-Friendly Technology suitable for home use'
    ],
    packageIncludes: [
      '1x Mini IPL Device',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'mini-hifu',
    name: 'Mini HIFU Ultrasonic Machine EMS Microcurrent Facial Treatment',
    category: 'hifu',
    price: 18000,
    originalPrice: 22500,
    image: import.meta.env.BASE_URL + 'images/product-mini-hifu.png',
    rating: 4.7,
    description: "This is a newest generation mini HIFU machine, it has 3 main functions: HIFU, RF (Radio frequency), EMS (Micro current).\n\nHIFU: Facial anti-aging and wrinkle reduction, face thinning, lifting and firming skin, tightening loose skin around the eyes, promote absorption.\nRF: Radio frequency skin tightening use the latest bipolar RF technology, no side effects. Built-in safety system automatically adjusts energy depending on the temperature of your skin.\nEMS: Handheld Skin Care Device to Lift Skin Reduce Look of Wrinkles, mainly use for face neck skin tightening.\n\nRemoval of wrinkles: deep facial wrinkles, forehead wrinkles, nasolabial fold, eye wrinkles, crow's feet, eye bags, tighten the loose skin around the eyes.",
    features: [
      'Automatic scanning and deep skin penetration',
      'Activate and tighten the skin and solve loose skin',
      'Tighten muscles and restore skin elasticity',
      'Improve skin tone, accelerate circulation and eliminate wrinkles',
      'LED Therapy (650nm Wavelength)'
    ],
    packageIncludes: [
      '1x Mini HIFU machine',
      '1x Power adapter',
      '1x User Manual'
    ],
    inStock: true,
  },
  {
    id: 'bb-glow-kit',
    name: 'BB Glow Korea Booster Starter Ampoule Kit for Micro needling Treatment',
    category: 'bb-glow',
    price: 12500,
    originalPrice: 15000,
    image: import.meta.env.BASE_URL + 'images/product-bb-glow-kit.png',
    rating: 4.8,
    description: "Booster Ampoule Starter Kit contains five different ampoules in one box along with varied shades.\n\nShades included: Light, Light Rose, Medium, Medium 2, Deep, and Deep Plus to cover all skin tones from very light to dark brown.\n\nIncludes multiple specialized ampoules:\n• Whitening Stem Cell Culture Ampoule for wrinkle reducing and brightening.\n• AC Stem Cell Gold Ampoule for acne or skin irritation (anti-inflammatory).\n• Salmon DNA Gold Ampoule with PDRN for regenerating and firming.\n• AQUA Stem Cell Culture Ampoule for deep hydration and dry skin.\n• EGF Peptide Gold Ampoule containing 99.9% pure gold powder and peptides to brighten and reduce wrinkles.\n• Culture Ampoule containing various plant stem cell, peptides, and niacinamide.",
    features: [
      '6 distinct shades for customizable skin tone matching',
      'Whitening Stem Cell Ampoule for elasticity',
      'AC Stem Cell Gold Ampoule for acne healing',
      'Salmon DNA Gold Ampoule for firmness & anti-aging',
      'Aqua Stem Cell Culture Ampoule for deep hydration',
      'EGF Peptide Gold Ampoule containing 99.9% pure gold'
    ],
    packageIncludes: [
      'BB Glow Korea Booster Starter Ampoule Kit'
    ],
    inStock: true,
    badge: 'Complete Kit',
  },
  {
    id: 'bb-lips-kit',
    name: 'Korea 8ml BB Lips Glow Ampoule Starter Kit',
    category: 'bb-glow',
    price: 11000,
    originalPrice: 13500,
    image: import.meta.env.BASE_URL + 'images/product-bb-lips-kit.png',
    rating: 4.6,
    description: "Korea Glow BB Lips Ampoule Serum Starter Set Semi-Permanent BB Lip Gloss Tinted Pigment Lasting Moisturizing For Lip Care.\n\nWHAT IS BB LIPS?\nLip colored ampoules made by plants and together with boosters can be used with Beauty introduction instrument tool that gives you that immediate lip colorful effect using micro needles to maximize direct penetration of active ingredients into the lip. KFDA approved 100% natural ingredients.",
    features: [
      'Net weight: 8ml * 5 ampoules',
      'Colors: Romantic Red, Pink, Sweet Orange',
      'Semi-Permanent BB Lip Gloss Tinted Pigment',
      'Lasting Moisturizing For Lip Care',
      '100% natural ingredients, KFDA approved'
    ],
    packageIncludes: [
      '5x 8ml BB Lips Ampoule Serums'
    ],
    inStock: true,
  },
  {
    id: 'miracle-white-injection',
    name: 'Miracle White Injection 120000mg | Switzerland | 6 Sessions',
    category: 'serums',
    price: 19000,
    originalPrice: 24500,
    image: import.meta.env.BASE_URL + 'images/product-miracle-white-injection.png',
    rating: 4.9,
    description: "Ultimate Skin Brightening & Anti-Aging Formula\n\nMiracle White 120,000 mg Injections are a premium skin care solution formulated with high-dose Glutathione, Collagen, Vitamins, and essential nutrients to help achieve a radiant, youthful, and even-toned complexion. Specially designed for those seeking fast, visible skin enhancement, these injections target dullness, hyperpigmentation, and early signs of aging.\n\nKey Benefits:\n• Skin Whitening & Brightening – Helps reduce melanin production, promoting a fairer, more luminous skin tone.\n• Anti-Aging Effects – Boosts collagen production, minimizing fine lines, wrinkles, and sagging.\n• Improved Skin Texture – Makes skin smoother, softer, and more hydrated.\n• Fades Dark Spots & Blemishes – Helps diminish acne scars, age spots, and sun damage.\n• Powerful Antioxidant Protection – Neutralizes free radicals, supporting healthier and younger-looking skin.\n• Overall Wellness Support – May improve immunity and detoxify the body through antioxidant action.",
    features: [
      'Skin whitening and brightening treatments',
      'Anti-aging skin rejuvenation',
      'Improves uneven skin tone and reducing hyperpigmentation',
      'Boosts collagen for firmer, healthier skin',
      'Professional Use Only – Not for self-administration'
    ],
    packageIncludes: [
      '6 Sessions of Miracle White Injection'
    ],
    inStock: true,
  },
  {
    id: 'gold-serum',
    name: '24K Gold Face Serum Anti Aging Whitening Facial Lefting Hyaluronic Acid',
    category: 'serums',
    price: 3000,
    originalPrice: 4000,
    image: import.meta.env.BASE_URL + 'images/product-gold-serum.jpg',
    rating: 4.9,
    description: "100ml 24k Gold Hyaluronic Acid Nicotinamide Face Serum Anti-Aging Facial Lifting Collagen Essence Skin Care Whitening Serum.\n\nHigh concentration of skin activating essence allows all levels of nutrients to pass through the skin. It is necessary to replenish energy, resist aging skin, tighten the skin, reduce fine lines, increase skin moisture, and solve problems such as rough and dull skin. It is easy to absorb when used in combine with cream. Collagen, skin regeneration, plum firm.",
    features: [
      'Basic skin care: use drops directly on face after cleaning',
      'Mix with lotion or face cream for improved absorption',
      'Mix with makeup formulation for a gentler, suitable look',
      'Apply before facial masks for deep moisture absorption',
      'Suitable for various skin types with 3 years shelf life'
    ],
    packageIncludes: [
      '1x 100ml 24K Gold Face Serum'
    ],
    inStock: true,
    badge: 'Premium',
  },
  {
    id: 'gold-foil-serum',
    name: 'Gold Foil Serum',
    category: 'serums',
    price: 3000,
    originalPrice: 4000,
    image: import.meta.env.BASE_URL + 'images/product-gold-foil-serum.png',
    rating: 4.8,
    description: 'A variations of my gold serum focused on a high-gloss finish and intensive repair.',
    features: [
      'Targets dullness and rough texture',
      'Ideal for post-microneedling recovery'
    ],
    packageIncludes: [],
    inStock: true,
  },
  {
    id: 'dld-anti-aging-kit',
    name: 'Korea DLD Anti-Aging Essence Skin Care Combination Kit',
    category: 'serums',
    price: 8500,
    originalPrice: 11500,
    image: import.meta.env.BASE_URL + 'images/product-dld-anti-aging-kit.png',
    rating: 4.7,
    description: "Korea DLD Anti-Aging Essence Skin Care Combination Kit features 5 distinct formulations to improve complexion and nourish skin simultaneously.\n\n1. Complexion (WH): Hyaluronic acid to replenish, lock, and moisturize.\n2. Salmon DNA: Hexapeptide to improve skin elasticity and smoothen fine lines.\n3. Peptide: Vitamin C to resist skin oxidation and suppress pale spots.\n4. AC: Oligotitanium-1 (EGF) to promote protein synthesis, repair damaged skin, and improve texture.\n5. Aqua: Niacinamide to increase antioxidant capacity and brighten the skin.\n\nProvides Salon Results at home. BB Cream Glow Pigment Function with five mixing shades (Light, Medium, Light Rose, Deep, Deep Plus).",
    features: [
      'Complexion (WH) with Hyaluronic acid',
      'Salmon DNA with Hexapeptide for elasticity',
      'Peptide with Vitamin C for oxidation',
      'AC with Oligotitanium-1 for cell growth',
      'Aqua with Niacinamide for brightening',
      '5 Shades of BB Cream Glow pigment function'
    ],
    packageIncludes: [
      'Korea DLD Anti-Aging Essence Skin Care Kit'
    ],
    inStock: true,
  },
  {
    id: 'led-7-color-mask',
    name: 'Facial 7 Color LED Mask With Neck For Skin Care',
    category: 'masks-skincare',
    price: 12500,
    originalPrice: 16000,
    image: import.meta.env.BASE_URL + 'images/product-led-7-color-mask.png',
    rating: 4.8,
    description: "Led face mask is very effective for kinds of skin care treatments. When using it on a daily basis for no more than 30 minutes per day. The mask has eye patch itself, do not worry, the LED light will not hurt the eyes.\n\n7 Colors LED mask can solve stubborn skin problems:\nRed light (630nm): Whiten pale spot, tender skin and anti-wrinkle.\nBlue light (470nm): Efficiently minimize and heal acne.\nPurple light: Combination of two kinds of phototherapy effect, especially in healing and repairing the acne scar.\nLaser light (White light): Resolve age spots, improve fine lines and sagging skin.\nGreen light (520nm): Balance skin condition, relieve mental stress.\nYellow light (590nm): Improve coarse skin and wrinkle, redness, increase immunity.\nGreen Blue light: Enhance cell energy gradually.",
    features: [
      'Reduce and prevent wrinkles, helps fight fatty areas',
      'Improve skin elasticity and minimize pores',
      'Accelerate Detoxification and blood circulation',
      'Easy to operate with full touch screen',
      'Including Electro stimulation treatment',
      'Promote skin collagen growth'
    ],
    packageIncludes: [
      'Facial 7 Color LED Mask with Neck',
      'USB Connector/Remote',
      'Power Adapter',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'plasma-pen-mole-remover',
    name: 'Plasma Pen Skin Mole Removal Freckle Removal Machine',
    category: 'cosmetic-kits',
    price: 11000,
    originalPrice: 13500,
    image: import.meta.env.BASE_URL + 'images/product-plasma-pen-mole-remover.png',
    rating: 4.7,
    description: "The High-Frequency Mole Remover Pen is an advanced skin care device designed for safe and effective removal of unwanted skin imperfections such as moles, freckles, dark spots, skin tags, and age spots. Using innovative high-frequency plasma micro discharge technology, this device generates a fine electrical spark at the needle tip that precisely targets pigmentation or skin irregularities without damaging surrounding tissue.\n\nThe pen is portable, rechargeable, and easy to use, making it suitable for both professional beauty clinics and at-home users (with proper practice). It is equipped with adjustable power levels, an LED display for intensity control, and a comfortable ergonomic design to ensure precision and ease of handling.",
    features: [
      'High-Frequency Plasma Technology',
      'Adjustable Power Levels parameter',
      'Clear LED display for power level and battery status',
      'Built-in rechargeable battery with USB charging',
      'Safe and Non-Invasive'
    ],
    packageIncludes: [
      '1 × High-Frequency Mole Remover Pen',
      '1 × USB Charging Cable',
      '1 × Set of Replaceable Needles (Fine & Coarse)',
      '1 × User Manual'
    ],
    inStock: true,
  },
  {
    id: 'six-peptide-serum',
    name: 'Six Peptide Anti-Wrinkles Anti-Aging & Smoothing Facial Serum',
    category: 'serums',
    price: 1550,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-six-peptide-serum.png',
    rating: 4.8,
    description: "ARTISCARE Six Peptides Serum is a high-performance anti-aging solution formulated with six powerful peptides that target fine lines, wrinkles, and skin laxity. This lightweight, fast-absorbing serum penetrates deep into the skin layers to restore elasticity, improve firmness, and smooth the skin’s texture. Enriched with natural moisturizing factors, it revitalizes dull skin, promoting a youthful, radiant complexion. Perfect for daily use, this serum is suitable for all skin types, including sensitive skin.",
    features: [
      'Increases Skin Firmness & Stimulates collagen production',
      'Reduces Fine Lines & Wrinkles via powerful peptides',
      'Moisture Restoring deep hydration',
      'Brightens Complexion and fades dullness',
      'High Efficiency & Safety natural ingredients'
    ],
    packageIncludes: [
      '10ml ARTISCARE Essences Six Peptides Serum'
    ],
    inStock: true,
  },
  {
    id: 'snail-collagen-sheet-mask',
    name: '5 PCS Korea Snail Collagen Essence Facial Sheet Mask',
    category: 'masks-skincare',
    price: 1250,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-snail-collagen-sheet-mask.png',
    rating: 4.9,
    description: "The Korea Snail Collagen Essence Mask – SOFT TOUCH is a rejuvenating facial sheet mask designed to hydrate, repair, and revitalize the skin using a powerful blend of scientifically-backed ingredients. It delivers a surge of moisture and nourishment through its rich essence infused with snail mucin, collagen, Vitamin B5, and hyaluronic acid. Each mask is made with a skin-friendly fabric that adheres seamlessly to the face, providing deep absorption and a luxurious spa-like feel at home.",
    features: [
      'Hydration Boost deeply moisturizes dry and dehydrated skin',
      'Skin Repair & Healing via Snail mucin and panthenol',
      'Anti-Aging Support with Hydrolyzed collagen',
      'Brightening & Smoothing for a more radiant skin',
      'Soothing Effect Vitamin B5 calms inflammation'
    ],
    packageIncludes: [
      '5 x Korea Snail Collagen Essence Facial Sheet Masks'
    ],
    inStock: true,
  },
  {
    id: 'ems-facial-massager',
    name: 'EMS Facial Massager Photon Light Therapy Skin Care Device',
    category: 'masks-skincare',
    price: 12500,
    originalPrice: 17000,
    image: import.meta.env.BASE_URL + 'images/product-ems-facial-massager.png',
    rating: 4.8,
    description: "EMS Facial Massager Galvanic LED Photon Light Therapy Hot Cold Treatment Anti-Aging Acne Reduce Face Lifting Beauty Face Cleaner.\n\nProvides a comprehensive skincare solution by combining Hot/Cold Compress, Vibration Massage, Photon Therapy (Red/Blue light), and EMS Stimulation to accelerate skin repair, tighten the skin, and improve absorption of skincare products.",
    features: [
      'Hot Compress: Enhances tissue regeneration and open up pores',
      'Cold Compress: Calm skin, shrink pores and lock nutrition',
      'Vibration Massage: Activate cell metabolism and tighten skin',
      'Photon Therapy: Red light for collagen & anti-aging, Blue light for acne',
      'EMS Stimulation: Micro-currents to boost collagen production',
      'Deep Pores Cleansing: Remove cosmetic metal ion residuals',
      'Intelligent Operation: Smart timer and LED function',
      'Convenient Skin Care: Portable with 1000mAh rechargeable battery'
    ],
    packageIncludes: [
      '1x EMS Facial Massager',
      'USB Charging Cable',
      'Stand Holder',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'ipl-laser-3-in-1',
    name: 'IPL Laser 3-IN-1 Permanent Hair Removing and Skin Treatment Device',
    category: 'laser',
    price: 19500,
    originalPrice: 24000,
    image: import.meta.env.BASE_URL + 'images/product-ipl-laser-3-in-1.png',
    rating: 4.9,
    description: "This multifunctional hair removal instrument uses intense pulse light to destroy hair follicles painlessly and efficiently. It includes three types of lamp holders: HR (Hair Removal), SR (Skin Rejuvenation), and FR (Acne Removing). With 990,000 flashes, it offers enough capacity for whole body treatments.\n\nFeatures dual modes (Manual and Auto) and an LCD Display that clearly shows energy level and remaining flashes. Adjust the intensity according to individual needs with an 8-gear mode adjustment for your comfort.",
    features: [
      'IPL Technology for Permanent Hair Removal',
      '990,000 Flashes for whole body',
      'Two Light Area Covers for small and large Spots',
      'Eight Levels of Light Intensity',
      'Multifunction (3 in 1): HR, SR, and FR lamps',
      'Dual Mode: Manual and Auto',
      'High-quality quartz lamp'
    ],
    packageIncludes: [
      'IPL Laser 3-IN-1 Device',
      '3x Lamp Holders (HR, SR, FR)',
      'Light Area Covers',
      'Power Adapter',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'facial-led-mask-rechargeable',
    name: 'Facial LED Mask 7 Color Skin Care Rechargeable',
    category: 'masks-skincare',
    price: 7500,
    originalPrice: 10000,
    image: import.meta.env.BASE_URL + 'images/product-facial-led-mask-rechargeable.png',
    rating: 4.6,
    description: "Ergonomically designed 7 Color LED Facial Mask made of medical silica gel. It fits the face comfortably, is non-irritating, lightweight (290g), and allows you to stand, sit, or lie down during use. Fully charged in 1.5 hours, providing 30-40 minutes of operation.\n\nLight Functions:\nRed light (630nm): improve skin, rejuvenate, deep repair\nBlue light (470nm): Calms skin, balances secretion\nYellow light (590nm): Decomposes pigments, detoxifies lymph\nGreen light (520nm): Balance water and oil\nPurple light: Treat acne, remove acne marks\nCyan light: Metabolism, enhance energy\nLaser: Break down stains, improve fine lines",
    features: [
      '7 Color Light Therapy for various skin treatments',
      'Made of safe, non-toxic medical silica gel',
      'Ergonomically designed and extremely lightweight (290g)',
      'Rechargeable and fully wireless operation',
      'Tighten pores, increase oxygen and repair skin'
    ],
    packageIncludes: [
      'Facial LED Mask',
      'USB Charging Cable',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'nano-oxygen-injector-led',
    name: 'Nano Oxygen Facial Injector Red Blue Light Therapy',
    category: 'masks-skincare',
    price: 9000,
    originalPrice: 12000,
    image: import.meta.env.BASE_URL + 'images/product-nano-oxygen-injector-led.png',
    rating: 4.8,
    description: "Multi-functional beauty device for skin rejuvenation and oxygen injection. The nebulizer smoothly applies a fine mist of water and oxygen to the skin, promoting blood circulation. It emits red and blue light therapy to help reduce inflammation, improve skin tone, and reduce fine lines.\n\nHigh-pressure nano-spray (160KPA) and 0.3mm nano-jet atomization quickly and efficiently injects moisture and nutrients into the skin. Two levels of spray volume can be adjusted. Portable, compact, and rechargeable via USB.",
    features: [
      'High-pressure nano-spray oxygen injection (160KPA)',
      '0.3mm nano-jet atomization for deep hydration',
      'Red and blue light therapy for skin tone and fine lines',
      'Deeply cleans pores and reduces oil',
      'Two levels of spray volume adjustment',
      'Portable, USB rechargeable (Type-C) and CE Certified'
    ],
    packageIncludes: [
      'Nano Oxygen Facial Injector',
      'USB-C Charging Cable',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'nano-oxygen-injector',
    name: 'Nano Oxygen Facial Injector',
    category: 'masks-skincare',
    price: 8000,
    originalPrice: 11000,
    image: import.meta.env.BASE_URL + 'images/product-nano-oxygen-injector.png',
    rating: 4.7,
    description: "Multi-functional beauty device for skin rejuvenation and oxygen injection. The nebulizer smoothly applies a fine mist of water and oxygen to the skin, promoting blood circulation and leaving the skin looking refreshed.\n\nHigh-pressure nano-spray (160KPA) and 0.3mm nano-jet atomization quickly and efficiently injects moisture and nutrients into the skin. Two levels of spray volume can be adjusted. Portable, compact, and rechargeable via USB.",
    features: [
      'High-pressure nano-spray oxygen injection (160KPA)',
      '0.3mm nano-jet atomization for deep hydration',
      'Skin rejuvenation and powerful oxygen injection',
      'Deeply cleans pores and reduces oil',
      'Two levels of spray volume adjustment',
      'Portable, USB rechargeable (Type-C) and CE Certified'
    ],
    packageIncludes: [
      'Nano Oxygen Facial Injector',
      'USB-C Charging Cable',
      'User Manual'
    ],
    inStock: true,
  },
  {
    id: 'neck-face-beauty-massager',
    name: 'Neck Face Beauty Massager 7 Mode',
    category: 'masks-skincare',
    price: 5500,
    originalPrice: 8500,
    image: import.meta.env.BASE_URL + 'images/product-neck-face-beauty-massager.png',
    rating: 4.7,
    description: "Neck Face Beauty Device Vibration Massage Personal Care Improve Neck Lines Home Use Face Lifting Machine with 7 Modes and 3 Levels.\n\nAchieve deep cleansing effect through sonic vibration, massage, and cleansing at the same time. Dolphin biomimetic design with 160° surround for neck protection fits your neck well. Seven-color LED light functions included for complete skincare: Red (collagen), Orange (relax), Yellow (natural), Green (calm), Purple (lymphatic), Blue (microcirculation), and Cyan (capillary swelling).",
    features: [
      '7 modes and 3 levels of intensity adjustment',
      'Constant temperature vibration massage',
      'Seven-color LED light therapy for customized treatment',
      'Dolphin biomimetic design with 160° surround fit',
      'Deep cleansing sonic vibration effect',
      'Exquisite, compact, and easy to carry (82g)'
    ],
    packageIncludes: [
      '1x Neck beauty device',
      '1x Type-C charging cable',
      '1x Instruction manual'
    ],
    inStock: true,
  },
  {
    id: 'hyaluronic-acid-serum-pack',
    name: 'Hyaluronic Acid 100% Original Serum Facial Skincare 10-pack',
    category: 'serums',
    price: 4000,
    originalPrice: 5500,
    image: import.meta.env.BASE_URL + 'images/product-hyaluronic-acid-serum-pack.png',
    rating: 4.9,
    description: "10pcs BIOAQUA Hyaluronic Acid Serum Facial skin care Moisturizing Firming Facial Essence Liquid Face Skin Care.\n\nRich in hyaluronic acid ingredients to help the skin to add water to relieve dryness. Contains Sodium hyaluronate, glycerol, folic acid, a variety of vitamins (B1, B2, B3, B6, H) and other nourishing moisturizing ingredients. Gentle care of the skin, deep nourish, clear texture and moist, fresh and not sticky. Delicate and smooth, easy to absorb. Beautiful outer packaging makes it perfect as a gift.",
    features: [
      'Set of 10 bottles (5ml each)',
      'Rich in Hyaluronic Acid to relieve dryness',
      'Contains Vitamins H, B1, B2, B3, B6, and Folic Acid',
      'Deeply nourishing without being sticky',
      'Suit for all kinds of skin, especially dry skin'
    ],
    packageIncludes: [
      '10x 5ml BIOAQUA Hyaluronic Acid Serums (1 Box)'
    ],
    inStock: true,
  },
  {
    id: 'hair-regrowth-stem-cell',
    name: 'Hair Regrowth Hair Lose - Polypeptide & Stem Cell Treatment',
    category: 'serums',
    price: 10000,
    originalPrice: 12500,
    image: import.meta.env.BASE_URL + 'images/product-hair-regrowth-stem-cell.png',
    rating: 4.8,
    description: "ALIDINA Hair Care is an advanced 28-day hair restoration treatment that combines the power of polypeptides and stem cells to rejuvenate hair follicles, stimulate growth, and reduce hair thinning or shedding. This powerful formula is designed for both men and women experiencing hair loss, scalp thinning, or slow hair growth.\n\nThe dual-vial system includes a Stem Cell Solution (5ml) and a Polypeptide Powder (100mg) that are mixed before application to unleash epidermal growth factors (EGF).",
    features: [
      'Stimulates Hair Growth and Reduces Hair Loss',
      'Non-Surgical & Non-Invasive EGF Technology',
      'Dual-vial system (Stem Cell Solution + Polypeptide Powder)',
      'Free from harsh chemicals, parabens, and sulfates',
      'Effective when used with microneedling (Dr. Pen) or syringe',
      'Visible improvement in as little as 28 days with consistent use'
    ],
    packageIncludes: [
      '1 vial x 5ml (Stem Cell Serum)',
      '1 vial x 100mg (Polypeptide Powder)'
    ],
    inStock: true,
  },
  {
    id: 'miracle-white-60k',
    name: 'Miracle White Injection 60000mg | Switzerland | 6 Sessions',
    category: 'serums',
    price: 17500,
    originalPrice: 21000,
    image: import.meta.env.BASE_URL + 'images/product-miracle-white-60k.png',
    rating: 4.8,
    description: "Miracle White – Your Beautiful Skin Starts Here!\n\nMiracle White is a premium skin-brightening IV drip formulation developed after years of research in skin science. It is designed to lighten skin tone, smooth and clear blemishes, fade dark spots, and brighten dull complexions. Provides anti-aging benefits by promoting skin regeneration and reducing signs of aging.\n\nRecommended Dosage: IV Only – administered intravenously once or twice a week. For professional use only.",
    features: [
      'Skin Lightening: Reduces melanin production (Kojic Acid, Nano Concentrated Glutathione 60,000 mg)',
      'Blemish & Dark Spot Reduction: Targets pigmentation, acne marks',
      'Anti-Aging Action: Stimulates collagen and cell regeneration (EGF 3500 mg)',
      'Skin Hydration & Glow: Marine collagen provides healthy radiance',
      'Cell Repair & Protection: Defends against free radical damage (CoQ10, Vitamin C)'
    ],
    packageIncludes: [
      '6 Sessions of Miracle White 60000mg'
    ],
    inStock: true,
  },
  {
    id: 'nexcain-numbing-cream',
    name: 'Nexcain Numbing Cream 10.56 Lidocaine',
    category: 'masks-skincare',
    price: 12500,
    originalPrice: 15000,
    image: import.meta.env.BASE_URL + 'images/product-nexcain-numbing-cream.png',
    rating: 4.9,
    description: "Experience pain-free beauty treatments with Nexcain Numbing Cream 10.56%, a fast-acting lidocaine-based topical anesthetic trusted by skin experts and professionals worldwide.\n\nThis advanced formula provides deep, long-lasting numbness for up to 3 hours, making it ideal for microneedling, laser treatments, tattoos, waxing, and more. Formulated for quick absorption and a non-greasy finish.",
    features: [
      'Fast Numbing Action: Begins working within 15–25 minutes',
      'Long-Lasting Effect: Provides up to 2–3 hours of numbing',
      'High Lidocaine Strength (10.56%): Professional-grade anesthetic',
      'Multi-Purpose: Ideal for microneedling, laser, tattoos, waxing, PRP',
      'Non-Greasy & Skin-Friendly: Dermatologically tested'
    ],
    packageIncludes: [
      '1x Nexcain Numbing Cream (500g)'
    ],
    inStock: true,
  },
  {
    id: 'vitamin-c-lemon-mask',
    name: '5 PCS Vitamin C Lemon Hydrating & Brightening Essence Sheet Mask',
    category: 'masks-skincare',
    price: 1250,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-vitamin-c-lemon-mask.png',
    rating: 4.7,
    description: "The BIOAQUA Vitamin C Lemon Mask is a premium facial sheet mask infused with the power of Vitamin C and natural lemon extracts. Specially designed to hydrate, brighten, and revitalize dull skin, this mask helps restore your skin’s natural glow. It targets uneven skin tone, dark spots, and dryness while providing a refreshing and nourishing skincare experience. Suitable for all skin types, it is an ideal addition to your weekly skincare routine.",
    features: [
      'Vitamin C: Brightens skin tone, reduces pigmentation, protects against environmental damage',
      'Lemon Extract: Gently exfoliates and cleanses the skin',
      'Hyaluronic Acid: Deeply hydrates the skin by retaining moisture',
      'Glycerin & Allantoin: Moisturizes, softens, and soothes the skin',
      'Anti-Aging Effects: Supports firmer, more elastic skin by promoting collagen production'
    ],
    packageIncludes: [
      '5x BIOAQUA Vitamin C Lemon Sheet Masks'
    ],
    inStock: true,
  },
  {
    id: 'drpen-m8-cartridges-10',
    name: 'Needle Cartridge For Dr Pen M8 10 PCS',
    category: 'microneedling',
    price: 2500,
    originalPrice: 2500,
    image: import.meta.env.BASE_URL + 'images/product-drpen-m8-cartridges-10.png',
    rating: 4.8,
    description: "Boosts collagen and elastin production, improves skin texture and tone, reduces fine lines, wrinkles, scars & stretch marks, and enhances absorption of serums and skincare products.\n\nSafe, sterile, and individually sealed cartridges compatible with the Dr. Pen M8 Microneedling Device. Adjustable needle depth for customized treatments. Single-use, disposable, and hygienic.\n\nAvailable types include:\n• 16 Needle Cartridge – For deep scars, stretch marks, and stubborn wrinkles\n• 36 Needle Cartridge – For general facial rejuvenation, large pores, fine lines\n• 42 Needle Cartridge – For sensitive skin areas, pigmentation, brightening\n• Nano Round Cartridge – For BB Glow, serum infusion, hydration",
    features: [
      'Compatible with Dr. Pen M8 Microneedling Device',
      'Safe, sterile, and individually sealed cartridges',
      'Adjustable needle depth for customized treatments',
      'Single-use, disposable, and hygienic',
      'Available in 16, 36, 42 pin & Nano Round options'
    ],
    packageIncludes: [
      '10x Needle Cartridges (Select Type)'
    ],
    inStock: true,
  },
  {
    id: 'drpen-a1-a6-cartridges-10',
    name: 'Needle Cartridge For Dr Pen A1,A6 10 PCS',
    category: 'microneedling',
    price: 1500,
    originalPrice: 1700,
    image: import.meta.env.BASE_URL + 'images/product-drpen-a1-a6-cartridges-10.png',
    rating: 4.7,
    description: "Derma pen needle cartridge for micro needle is your best choice for beauty and skin care treatments. Stimulates collagen fiber growth, improves micro-circulation, and enhances skin care product's active substances into deeper skin layers.\n\nTreatment for hair loss, thin hair, acne/chicken pox/trauma scars, stretch marks. Does not destroy structural integrity of the skin while gradually removing skin-deep toxins and waste.",
    features: [
      'Steel Microneedle: Sharp and Smooth, less incisional wound, less pain',
      'Nano Microneedles: Soft and painless tip, promotes absorption',
      'Compatible with Dr. Pen A1 and A6 models',
      '12-pin: Best for stretch marks, acne scars, deep scars',
      '36-pin: Recommended for larger areas (thighs, buttocks)',
      '42-pin: Greater coverage and stimulation',
      'Round Nano: Perfect for sensitive areas (lips, eyelids, under-eye)'
    ],
    packageIncludes: [
      '10x Needle Cartridges for Dr Pen A1/A6'
    ],
    inStock: true,
  },
  {
    id: 'artiscare-vitc-serum',
    name: 'Vitamin C Serum Moisture Restoring – Whitening & Anti-Blemish',
    category: 'serums',
    price: 1550,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-artiscare-vitc-serum.png',
    rating: 4.8,
    description: "ARTISCARE Vitamin C Serum is a powerful skincare solution designed to rejuvenate dull, uneven, and tired-looking skin. Infused with high-potency Vitamin C and moisturizing ingredients, this serum targets dark spots, freckles, and blemishes while deeply hydrating the skin.\n\nIts lightweight formula absorbs quickly and works beneath the surface to brighten, repair, and protect your skin from environmental stressors.",
    features: [
      'Fades Dark Spots & Freckles to reveal even-toned complexion',
      'Brightens & Whitens Skin: boosts luminosity',
      'Anti-Blemish Formula: cleans up acne marks',
      'Deep Moisturization: locks in hydration',
      'Antioxidant Protection: protects against environmental damage',
      'Bottle Size: 10ml'
    ],
    packageIncludes: [
      '1x 10ml ARTISCARE Vitamin C Serum'
    ],
    inStock: true,
  },
  {
    id: 'artiscare-ha-serum',
    name: 'Hyaluronic Acid Serum for Moisturizing and Skin Care Firming',
    category: 'serums',
    price: 1450,
    originalPrice: 1700,
    image: import.meta.env.BASE_URL + 'images/product-artiscare-ha-serum.png',
    rating: 4.9,
    description: "ARTISCARE Hyaluronic Acid Serum – 10ml\n\n24 Hours Non-Stop Deep Moisture for Radiant, Youthful Skin. Experience the power of intense hydration with the ARTISCARE Hyaluronic Acid Serum, a highly effective moisture-restoring formula designed to transform dull, tired skin into a smooth, plump, and glowing complexion.\n\nIdeal for all skin types, including sensitive skin. This lightweight serum delivers long-lasting hydration while targeting signs of aging.",
    features: [
      'Long-Lasting Hydration: deeply moisturizes for up to 24 hours',
      'Anti-Aging Formula: reduces appearance of fine lines and wrinkles',
      'Restores Skin Elasticity: helps firm and tighten skin',
      'Brightens Complexion: enhances overall radiance',
      'Fast-Absorbing Texture: lightweight and non-sticky',
      'Bottle Size: 10ml'
    ],
    packageIncludes: [
      '1x 10ml ARTISCARE Hyaluronic Acid Serum'
    ],
    inStock: true,
  },
  {
    id: 'artiscare-egf-serum',
    name: 'EGF Multiple Repair Skin Care Solution Serum',
    category: 'serums',
    price: 1550,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-artiscare-egf-serum.png',
    rating: 4.8,
    description: "ARTISCARE EGF Repair Solution is a high-efficiency serum designed to deeply restore and rejuvenate your skin. Infused with Epidermal Growth Factor (EGF), this advanced skincare formula promotes skin regeneration, smooths out imperfections, and helps heal damaged skin.\n\nIdeal for anyone looking to eliminate acne marks, reduce redness, and achieve smoother, healthier-looking skin.",
    features: [
      'Multiple Repair Action: repairs damaged layers and promotes regeneration',
      'Soothes the Skin: calms irritated and sensitive skin',
      'Eliminates Acne Marks: fades post-acne scars and blemishes',
      'Boosts Skin Self-Repair: activates natural recovery',
      'Moisture Restoring: keeps skin hydrated and prevents dryness',
      'Safe & Natural formula suitable for daily use (Volume: 10ml)'
    ],
    packageIncludes: [
      '1x 10ml ARTISCARE EGF Repair Serum'
    ],
    inStock: true,
  },
  {
    id: 'artiscare-acne-serum',
    name: 'Acne Treatment Serum Moisture Restoring – Whitening & Smoothing',
    category: 'serums',
    price: 1550,
    originalPrice: 1750,
    image: import.meta.env.BASE_URL + 'images/product-artiscare-acne-serum.png',
    rating: 4.7,
    description: "ARTISCARE Acne Treatment Serum is specially formulated to fight acne, reduce acne scars, and calm irritated skin. This lightweight, fast-absorbing serum helps minimize inflammation, control excess oil, and unclog pores for clearer, smoother skin.\n\nEnriched with natural essences and skin-soothing ingredients, it promotes healing while moisturizing the skin—making it ideal for sensitive, acne-prone skin types.",
    features: [
      'Acne Treatment: targets active acne and prevents new breakouts',
      'Reduces Acne Scars & Blemishes: fades post-acne marks',
      'Oil Control: regulates sebum production to keep skin matte',
      'Tightens Pores: helps shrink enlarged pores',
      'Whitening & Smoothing: improves overall clarity and tone',
      'Bottle Size: 10ml'
    ],
    packageIncludes: [
      '1x 10ml ARTISCARE Acne Treatment Serum'
    ],
    inStock: true,
  },
  {
    id: '5in1-face-serum',
    name: '5 IN 1 Face Serum Hyaluronic Acid, Vitamin C, Vitamin E, Collagen, Niacinamide',
    category: 'serums',
    price: 1400,
    originalPrice: 1700,
    image: import.meta.env.BASE_URL + 'images/product-5in1-face-serum.png',
    rating: 4.9,
    description: "5 IN 1 Face Serum rich in vitamins and antioxidants such as hyaluronic acid, nicotinamide, and collagen. Its light texture enriches and reduces fine lines while protecting the water barrier to prevent dryness.\n\nSuitable for all skin types, especially dry or sensitive skin. Materials are safe, without unnecessary chemicals, animal ingredients or artificial flavors.",
    features: [
      'Light texture to protect water barrier and prevent dryness',
      'Rich in Hyaluronic Acid, Vitamin C, Vitamin E, Collagen, & Niacinamide',
      'Suitable for all skin types (especially dry/sensitive)',
      'Safe materials, cruelty-free and no artificial flavors',
      'Net content: 30ml (Shelf Life: 3 years)'
    ],
    packageIncludes: [
      '1x 30ml 5 IN 1 Face Serum'
    ],
    inStock: true,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((p) => p.category === categoryId);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.badge || p.rating >= 4.8).slice(0, 6);
};
