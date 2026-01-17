const ak47Products = [
  {
    id: 1,
    name: "AK-47 Gas Piston",
    description: "Premium chrome-lined gas piston engineered for reliable cycling in all weather conditions. Compatible with standard AKM pattern rifles and designed to ensure smooth operation even in extreme environments. This military-grade component features corrosion-resistant coating and precision machining for optimal gas flow regulation. Essential for maintaining consistent firing rates and reducing wear on internal components. Manufactured to strict military specifications with enhanced durability for extended service life.",
    price: 24.99,
    image: "https://www.shutterstock.com/shutterstock/photos/1498905386/display_1500/stock-photo-studio-shot-of-a-black-ak-on-a-grey-background-1498905386.jpg"
  },
  {
    id: 2,
    name: "Polymer Handguard Set",
    description: "Advanced heat-resistant polymer handguard set featuring improved ergonomics and tactical functionality. Equipped with multiple M-LOK slots for versatile accessory mounting including lights, lasers, and grips. Fits standard AKM rifles with easy drop-in installation. The lightweight polymer construction reduces overall weapon weight while maintaining structural integrity. Features enhanced grip texture for superior control in wet conditions and includes all necessary mounting hardware. Compatible with most aftermarket accessories and maintains the classic AK aesthetic.",
    price: 45.99,
    image: "https://www.shutterstock.com/shutterstock/photos/2319941029/display_1500/stock-photo-dirty-toy-gun-ak-rifle-magazine-isolated-2319941029.jpg"
  },
  {
    id: 3,
    name: "AK-47 Bolt Carrier",
    description: "Military specification bolt carrier manufactured from high-grade steel with precision machining for smooth cycling and enhanced reliability. This critical component includes a complete firing pin assembly and extractor for optimal performance. Heat-treated for maximum durability and resistance to wear under high-volume firing conditions. Features proper headspace dimensions and surface finish for consistent lockup. Essential replacement part that maintains factory specifications while providing improved longevity over standard components.",
    price: 89.99,
    image: "https://www.shutterstock.com/shutterstock/photos/2135092495/display_1500/stock-vector--d-ak-vector-gun-and-part-design-ak-side-view-d-automatic-weapon-and-illustration-work-2135092495.jpg"
  },
  {
    id: 4,
    name: "30-Round Steel Magazine",
    description: "Authentic military surplus steel magazine with reinforced feed lips and robust construction for reliable feeding with various ammunition types. Features a 30-round capacity with anti-tilt follower design that ensures consistent feeding even when fully loaded. Includes durable floor plate and spring assembly tested for thousands of loading cycles. The steel construction provides superior durability compared to polymer alternatives and maintains proper geometry under stress. Compatible with all standard 7.62x39mm ammunition and fits securely in AKM pattern rifles.",
    price: 19.99,
    image: "https://www.shutterstock.com/shutterstock/photos/2618008683/display_1500/stock-photo-studio-shot-x-mm-bullet-used-with-ak-on-white-background-2618008683.jpg"
  },
  {
    id: 5,
    name: "Recoil Spring Assembly",
    description: "OEM-specification recoil spring assembly with precision-manufactured guide rod designed to maintain proper cycling rate and reduce component wear. This essential replacement part ensures consistent bolt velocity and timing for optimal reliability. The spring is manufactured from high-carbon steel with proper tension characteristics to handle various ammunition weights. Includes detailed installation instructions and is essential for maintaining factory performance in older rifles. Reduces felt recoil and improves overall shooting experience while extending the life of other internal components.",
    price: 15.99,
    image: "https://www.shutterstock.com/shutterstock/photos/2205634549/display_1500/stock-photo-bekaa-lebanon-september-man-shooting-with-ak-or-kalachnikov-rifle-2205634549.jpg"
  },
  {
    id: 6,
    name: "AK-47 Trigger Group",
    description: "Complete trigger assembly featuring hammer, disconnector, and all necessary springs for smooth operation. Designed for drop-in installation in standard AKM receivers with no gunsmithing required. Provides a crisp 5.5-pound trigger pull with minimal creep and clean break. All components are manufactured to military specifications with proper heat treatment and surface finish. Includes detailed installation guide and maintains full-auto compatibility where legally permitted. Enhanced trigger geometry provides improved accuracy and shooter confidence.",
    price: 65.99,
    image: "https://www.shutterstock.com/shutterstock/photos/1661717374/display_1500/stock-photo-the-barrel-of-a-kalashnikov-ak-assault-rifle-on-a-black-background-1661717374.jpg"
  },
  {
    id: 7,
    name: "Wooden Stock Set",
    description: "Traditional laminated wood stock and pistol grip set featuring authentic military appearance with durable polyurethane finish. Pre-fitted for easy installation on standard AKM pattern rifles with all mounting hardware included. The laminated construction provides superior strength and resistance to warping compared to solid wood alternatives. Features classic Soviet-era styling with proper dimensions and ergonomics. The finish is resistant to moisture, chemicals, and normal wear while maintaining the traditional aesthetic that AK enthusiasts prefer.",
    price: 79.99,
    image: "https://media.istockphoto.com/id/1461704122/photo/two-kalashnikovs-standing-near-sandbagged-fortifications-ak-74-outdoor.jpg?s=1024x1024&w=is&k=20&c=elNT_EL7rNkmwdbhsKKE6yareax6ykxS3YBbNzHXcvA="
  },
  {
    id: 8,
    name: "Muzzle Brake Compensator",
    description: "Professional-grade muzzle brake compensator with 14x1 left-hand threading designed to significantly reduce recoil and muzzle climb. CNC machined from high-strength steel with black oxide finish for corrosion resistance and durability. Features multiple expansion chambers and directional ports that redirect gases to counteract muzzle rise. Includes crush washer for proper installation and timing. Improves follow-up shot accuracy and reduces shooter fatigue during extended shooting sessions. Compatible with all standard AKM pattern rifles.",
    price: 32.99,
    image: "https://media.istockphoto.com/id/1437569914/photo/kalashnikov-ak47-gun-on-army-green-crate.jpg?s=1024x1024&w=is&k=20&c=aBF1HvjMilvZXcK0kIu6VLrn6D7WG4ltFsYUALrU2cw="
  },
  {
    id: 9,
    name: "AK-47 Dust Cover",
    description: "Heavy-duty stamped steel dust cover featuring integrated side rail mount for optic attachment. Allows secure mounting of scopes, red dots, and other optical devices while maintaining zero through repeated removal and installation. Fits standard AKM pattern rifles with no modifications required. The rail system is manufactured to military specifications with proper height and spacing for standard optic mounts. Maintains the rifle's ability to field strip normally while providing a stable platform for precision shooting accessories.",
    price: 55.99,
    image: "https://media.istockphoto.com/id/137349383/photo/ak-47-shells.jpg?s=1024x1024&w=is&k=20&c=Y4NzRB3qvaWV8bo5MdYWBU1Nq8KnxvAB-t1rIuaDYRA="
  },
  {
    id: 10,
    name: "Complete AKM-47 Rifle",
    description: "Factory-built AKM pattern rifle featuring chrome-lined barrel for enhanced accuracy and longevity. Equipped with modern polymer furniture, integrated side rail mount, and fully adjustable iron sights. Includes one 30-round steel magazine and comprehensive owner's manual. The 16.5-inch barrel is optimized for 7.62x39mm ammunition with proper rifling twist rate for maximum accuracy. Built to military specifications with all components manufactured from high-grade materials. Features enhanced safety mechanisms and improved ergonomics while maintaining the legendary AK reliability and simplicity.",
    price: 899.99,
    image: "https://media.istockphoto.com/id/1461704122/photo/two-kalashnikovs-standing-near-sandbagged-fortifications-ak-74-outdoor.jpg?s=1024x1024&w=is&k=20&c=elNT_EL7rNkmwdbhsKKE6yareax6ykxS3YBbNzHXcvA="
  },
  {
    id: 11,
    name: "Front Sight Block Assembly",
    description: "Complete front sight assembly with integrated gas block featuring precision-aligned sight post, detent, and spring mechanism. Manufactured to exact military specifications for consistent point of impact and durability. The gas block portion regulates gas pressure for reliable cycling while the sight assembly provides accurate target acquisition. All components are properly heat-treated and finished for corrosion resistance. Installation requires basic gunsmithing skills and proper tools. Essential for maintaining accuracy and proper gas system function in AK pattern rifles.",
    price: 42.99,
    image: "https://media.istockphoto.com/id/1437569914/photo/kalashnikov-ak47-gun-on-army-green-crate.jpg?s=1024x1024&w=is&k=20&c=aBF1HvjMilvZXcK0kIu6VLrn6D7WG4ltFsYUALrU2cw="
  },
  {
    id: 12,
    name: "Charging Handle",
    description: "Robust steel charging handle with ergonomically designed knob for enhanced grip and manipulation. Features improved grip design with aggressive texturing for positive control even with wet or gloved hands. Manufactured from high-strength steel with proper heat treatment for durability under repeated use. Fits all standard AK variants including AKM, AK-74, and similar platforms. The enhanced design provides better leverage and control during charging operations while maintaining compatibility with all standard AK accessories and modifications.",
    price: 18.99,
    image: "https://media.istockphoto.com/id/137349383/photo/ak-47-shells.jpg?s=1024x1024&w=is&k=20&c=Y4NzRB3qvaWV8bo5MdYWBU1Nq8KnxvAB-t1rIuaDYRA="
  },
  {
    id: 13,
    name: "AK-74 Style Complete Rifle",
    description: "Modern 5.45x39mm AK-74 pattern rifle with side-folding stock for compact storage and transport. Features advanced polymer furniture, enhanced muzzle brake for recoil reduction, and integrated rail system for accessories. Includes two 30-round magazines and complete cleaning kit with all necessary tools. The 16-inch chrome-lined barrel is optimized for the high-velocity 5.45x39mm cartridge with proper rifling for maximum accuracy. Built with improved manufacturing techniques while maintaining the legendary AK reliability. Perfect for tactical applications and sport shooting.",
    price: 1099.99,
    image: "https://media.istockphoto.com/id/1461704122/photo/two-kalashnikovs-standing-near-sandbagged-fortifications-ak-74-outdoor.jpg?s=1024x1024&w=is&k=20&c=elNT_EL7rNkmwdbhsKKE6yareax6ykxS3YBbNzHXcvA="
  },
  {
    id: 14,
    name: "Pistol Grip",
    description: "Ergonomic polymer pistol grip featuring aggressive texturing for superior control and comfort during rapid fire sequences. Designed as a direct replacement for factory grip with improved angle and palm swell for better ergonomics. The textured surface provides secure grip even in adverse conditions including wet weather or when wearing gloves. Manufactured from high-impact polymer with reinforced mounting points for durability. Installation requires no modifications and includes all necessary hardware. Significantly improves shooter comfort and control during extended shooting sessions.",
    price: 22.99,
    image: "https://media.istockphoto.com/id/1349267168/photo/ak-47-2.jpg?s=1024x1024&w=is&k=20&c=nlFHqeNsYMs49tMl5LBk-Y19xi0fiolBvSWcSFmDmGo="
  },
  {
    id: 15,
    name: "Gas Tube",
    description: "Stainless steel gas tube with integrated heat shield designed to prevent gas tube wear and maintain proper gas pressure regulation. The heat shield protects the tube from excessive temperatures during sustained firing while the stainless construction resists corrosion and wear. Standard length for AKM rifles with proper dimensions for optimal gas system function. Features smooth interior finish for consistent gas flow and includes all mounting hardware. Essential component for maintaining reliable cycling and preventing gas system malfunctions in high-volume shooting applications.",
    price: 28.99,
    image: "https://media.istockphoto.com/id/137349383/photo/ak-47-shells.jpg?s=1024x1024&w=is&k=20&c=Y4NzRB3qvaWV8bo5MdYWBU1Nq8KnxvAB-t1rIuaDYRA="
  },
  {
    id: 16,
    name: "Premium AK-47 Tactical Rifle",
    description: "Premium AK-47 tactical rifle featuring quad-rail handguard system and Picatinny top cover for maximum accessory compatibility. Equipped with adjustable stock, enhanced trigger mechanism, and effective flash hider for tactical applications. Includes three 30-round magazines, professional optic mount, and protective hard case for transport and storage. The 16-inch cold hammer-forged barrel provides exceptional accuracy and durability. Built with premium components throughout including enhanced safety features and improved ergonomics. Perfect for tactical training, competition shooting, and professional applications requiring maximum reliability and accuracy.",
    price: 1499.99,
    image: "https://www.shutterstock.com/shutterstock/photos/2708091365/display_1500/stock-photo-close-up-of-the-barrel-of-a-toy-ak-isolated-on-a-white-background-2708091365.jpg"
  }
];


export async function GET(){
  return Response.json(
     ak47Products
  )
}
