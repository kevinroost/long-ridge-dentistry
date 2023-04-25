import { ServiceCategory } from "../types/data"


const services: ServiceCategory[] = [
  {
    name: 'Prevention',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime quae ipsum id minima dolor sequi dolorem iure ducimus quis, modi provident ad eos fugiat. Magnam eum aliquid omnis sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorem maxime est unde quos exercitationem quae hic repudiandae? Sequi velit eos culpa eaque dolor ipsum quam, dolorum corrupti tempora repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum dolores labore in quod quos accusamus. Ab neque dolore veniam illum fugit assumenda dolores maxime. Obcaecati eaque excepturi temporibus animi!',
    image: '/services/sample.jpg',
    position: 'service-card left',
    services: ['Prophylaxis ("Cleaning")', 'Exams', 'Oral Cancer Screening', 'Cavity Prevention, including:', ],
    methods: ['Sealants', 'Flouride Varnish', 'Silver Diamine Flouride', 'Prescription Toothpaste']
  }, {
    name: 'General Dentistry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non similique consectetur vel accusantium aliquam necessitatibus, quia consequuntur velit eos cum ad cumque asperiores fuga maxime natus nobis amet! Dignissimos.',
    image: '/services/sample.jpg',
    position: 'service-card right',
    services: ['White Bonded Tooth Fillings', 'Onlays', 'Crowns', 'Root Canals', 'Tooth Extractions', 'Nitrous Oxide ("Laughing Gas")']
  }, {
    name: 'Periodontal ("Gum") Therapies',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto, dolores quibusdam quisquam laborum, voluptates modi sequi praesentium ipsa alias sint perferendis reprehenderit ea fuga eveniet iste, asperiores labore veniam?',
    image: '/services/sample.jpg',
    position: 'service-card left',
    services: ['Periodontal Initial Therapy', 'Periodontal Maintenance', 'Laser Gum Therapy']
  }, {
    name: 'Pediatric Child Dentistry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card right',
    services: ['Cleanings & Exams', 'White Bonded Tooth Fillings', 'Pediatric Crowns', 'Healthy Start', 'Space Maintainers', 'Expanders', 'Nitrous Oxide ("Laughing Gas")']
  }, {
    name: 'Orthodontics',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card left',
    services: ['HealthyStart', 'Invisalign']
  }, {
    name: 'Restoration',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card right',
    services: ['Implants', 'Bridges', 'Jull Mouth Reconstructions', 'Removable Partials', 'Dentures']
  }, {
    name: 'Cosmetic Dentistry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card left',
    services: ['Veneers', 'Teeth Whitening', 'Resin Infiltration', 'Invisalign']
  }, {
    name: 'Airway Therapy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card right',
    services: ['Nasal Breathing Therapy', 'Sleep Apnea Treatment', 'Oral Airway Expansion']
  }, {
    name: 'TMJ Disorder & Pain Therapy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum ea, unde accusamus dolorum dignissimos officiis dolores corporis, maiores id in vitae vero fugit. Dolor maxime nam earum quod illum!',
    image: '/services/sample.jpg',
    position: 'service-card left',
    services: ['Bite Equilibration', 'Splint Therapy', 'Low Level Laser Therapy']
  }
]

export { services }