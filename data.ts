import { AppData } from './types';

// Images for produce
const produceImages = {
  durian: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
  coconut: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=800",
  papaya: "https://images.unsplash.com/photo-1617112848923-cc5c3b29b3d1?auto=format&fit=crop&q=80&w=800",
  guava: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&q=80&w=800",
  dragonfruit: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&q=80&w=800",
  pineapple: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800",
  soursop: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?auto=format&fit=crop&q=80&w=800"
};

export const enData: AppData = {
  ui: {
    nav: {
      home: 'Home',
      accommodations: 'Accommodations',
      activities: 'Activities',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Away From City',
      heroSubtitle: 'Experience Organic Farm Life',
      heroDesc: 'A 60-acre sanctuary in Selangor where sustainable agriculture meets modern comfort.',
      bookBtn: 'Book Your Stay',
      welcome: 'Welcome to Nature',
      aboutTitle: 'About',
      aboutDesc: 'We embrace the organic and sustainable agricultural movement. Our 60-acre integrated organic farm offers a sanctuary away from the bustle of city life. We believe in supporting the worldwide movement towards healthier, sustainable living.',
      aboutFeatures: [
        { title: "Organic Plantations", desc: "Home to Musang King Durian, Coconuts, Papaya, and sustainable crops.", image: "https://picsum.photos/id/1063/800/1000" },
        { title: "Livestock & Nature", desc: "Interact with our farm ecosystem, including fish ponds and wild boars.", image: "https://picsum.photos/id/292/800/1000" },
        { title: "Farmcation Stays", desc: "Experience modern chambers or camp under the stars in our sanctuary.", image: "https://picsum.photos/id/1039/800/1000" }
      ],
      freshTitle: 'Fresh from',
      freshSubtitle: 'the Earth',
      freshDesc: 'Our 60-acre land is rich with biodiversity. We cultivate a variety of fruits using strictly organic methods to ensure the best quality for our guests. From the pungent delight of Musang King to the refreshing sweetness of our coconuts, taste the difference of nature.',
      ctaTitle: 'Nature Awaits You',
      ctaSubtitle: 'Escape the Ordinary',
      ctaDesc: 'Connect with nature, rejuvenate your soul, and create lasting memories in our organic sanctuary.',
      ctaBtn: 'Plan Your Visit',
      stats: { acres: 'Acres of Land', organic: 'Pesticide Free' }
    },
    footer: {
      explore: 'Explore',
      visitUs: 'Visit Us',
      desc: 'Experience the tranquility of sustainable farm life. A 60-acre integrated organic farm away from the city, closer to nature.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We'd love to hear from you",
      location: 'Our Location',
      checkIn: 'Check-In / Out',
      reservations: 'Reservations',
      policy: 'Policy Note',
      policyText: 'Kerling Farm is a family farm. We are currently having refurbishment during weekdays. We only accept group bookings (4 Hostel Rooms minimum OR 8 pax and above for Campsite).'
    }
  },
  farmInfo: {
    totalArea: "60 Acres",
    produce: [
      { name: "Durian (Musang King)", image: produceImages.durian },
      { name: "Coconut", image: produceImages.coconut },
      { name: "Papaya", image: produceImages.papaya },
      { name: "Guava", image: produceImages.guava },
      { name: "Dragon Fruit", image: produceImages.dragonfruit },
      { name: "Pineapple", image: produceImages.pineapple },
      { name: "Graviola (Soursop)", image: produceImages.soursop }
    ],
    livestock: ["Fishes", "Wild Boar"]
  },
  accommodations: [
    {
      id: 'chai-chamber',
      name: 'Chai Chamber (蔡府)',
      type: 'Room',
      capacity: '2-4 Pax',
      priceWeekend: 'RM 250',
      priceWeekday: 'RM 200',
      description: 'Hotel-style rooms located in the heart of the farm. 4 rooms on the ground floor and 8 rooms on the first floor.',
      amenities: ['Air Conditioning', 'En-suite Bathroom', 'Toiletries', 'Parking'],
      image: 'https://picsum.photos/id/1029/800/600',
      note: 'Group booking reserved for 4 rooms.'
    },
    {
      id: 'superior-twin',
      name: 'Superior Twin Suite',
      type: 'Suite',
      capacity: 'Max 4 Guests (2 Adults + 2 Children)',
      priceWeekend: 'RM 250',
      priceWeekday: 'RM 200',
      description: 'Comfortable twin suite with en-suite bathroom. Perfect for small families.',
      amenities: ['2 Single Beds', 'En-suite Bathroom', 'Air Conditioning', 'Water Heater', 'Hair Dryer'],
      image: 'https://picsum.photos/id/1078/800/600'
    },
    {
      id: 'twin-shared',
      name: 'Twin Suite (Shared Bath)',
      type: 'Room',
      capacity: 'Max 4 Guests',
      priceWeekend: 'RM 200',
      priceWeekday: 'RM 150',
      description: 'Cozy room with two single beds and access to a shared bathroom facility.',
      amenities: ['2 Single Beds', 'Shared Bathroom', 'Air Conditioning', 'Shared Lounge Access'],
      image: 'https://picsum.photos/id/1040/800/600'
    },
    {
      id: 'family-suite',
      name: 'Superior Family Suite',
      type: 'Suite',
      capacity: 'Max 6 Guests (3 Adults + 3 Children)',
      priceWeekend: 'RM 375',
      priceWeekday: 'RM 300',
      description: 'Spacious accommodation for larger families featuring three single beds and private facilities.',
      amenities: ['3 Single Beds', 'En-suite Bathroom', 'Air Conditioning', 'Water Heater', 'Hair Dryer'],
      image: 'https://picsum.photos/id/1039/800/600'
    },
    {
      id: 'ant-chamber',
      name: 'Ant Chamber (蚁楼)',
      type: 'Room',
      capacity: 'Varies',
      priceWeekend: 'Contact for rates',
      description: 'Modern hotel rooms featuring 6 rooms on the ground floor and 7 rooms on the first floor. Reserved for group bookings of 5 rooms and above.',
      amenities: ['Air Conditioning', 'En-suite Bathroom', 'Modern Design'],
      image: 'https://picsum.photos/id/164/800/600'
    },
    {
      id: 'campsite-01',
      name: 'Campsite 01 (Odonata Courtyard)',
      type: 'Campsite',
      capacity: 'Min 8 Pax Group',
      priceWeekend: 'RM 70 / Pax',
      description: 'Open air camping ground with shared bathroom facilities. Experience nature up close.',
      amenities: ['Shared Bathroom', 'BBQ Pit (Excluded tools)', 'Water Heater', 'Designated Smoking Area'],
      image: 'https://picsum.photos/id/1068/800/600',
      note: 'Strictly NO smoking inside tents.'
    },
    {
      id: 'campsite-02',
      name: 'Campsite 02 (The Hive)',
      type: 'Campsite',
      capacity: 'Min 8 Pax Group',
      priceWeekend: 'RM 70 / Pax',
      description: 'Elevated camping experience with view deck. Includes 2 rooms and 2 bathrooms.',
      amenities: ['View Deck', '2 Rooms', '2 Bathrooms', 'Self Service Area'],
      image: 'https://picsum.photos/id/1047/800/600'
    }
  ],
  activities: [
    {
      id: 'fishing',
      name: 'Fishing Pond',
      description: 'Catch Tilapia, Lampan, Sultan, Marble Goby, and Snakehead. Guests must bring their own fishing equipment.',
      location: 'Fishing Pond',
      image: 'https://picsum.photos/id/1025/800/600',
      note: 'Single hook lures only. Strictly NO triple hook lures. Catch and release or weigh and pay.'
    },
    {
      id: 'event-hall',
      name: 'Event Hall (Odonata Chamber)',
      description: 'A spacious event hall perfect for gatherings, equipped with Karaoke and Audio System.',
      location: 'Odonata Chamber',
      price: 'Free to use',
      image: 'https://picsum.photos/id/1060/800/600',
      note: 'Cater for Kerling Farm guests only.'
    },
    {
      id: 'entertainment',
      name: 'Billiard & Karaoke Room',
      description: 'Relax and unwind with indoor games and singing.',
      location: 'Odonata Chamber',
      price: 'RM 200 / Day',
      image: 'https://picsum.photos/id/1059/800/600'
    },
    {
      id: 'kids-play',
      name: 'Kids Playroom',
      description: 'A safe and fun environment for children to play indoors.',
      location: 'Odonata Chamber',
      price: 'RM 200 / Day',
      image: 'https://picsum.photos/id/1066/800/600'
    },
    {
      id: 'conference',
      name: 'Conference Room',
      description: 'Fully equipped room for corporate meetings and discussions.',
      location: 'Odonata Chamber',
      price: 'RM 200 / Day',
      image: 'https://picsum.photos/id/1075/800/600'
    },
    {
      id: 'rejuvenate',
      name: 'Rejuvenate Room',
      description: 'A peaceful space designated for relaxation, yoga, or quiet activities.',
      location: 'Odonata Chamber',
      price: 'RM 200 / Day',
      image: 'https://picsum.photos/id/1049/800/600'
    },
    {
      id: 'daikado',
      name: 'Daikado (大蜗堂)',
      description: 'Designated self-service area with dining area, gas stoves, rice cookers, and BBQ pits.',
      location: 'Daikado',
      image: 'https://picsum.photos/id/195/800/600',
      note: 'Self-prep BBQ available. Guests bring their own charcoal and ingredients.'
    },
    {
      id: 'playground',
      name: 'Kids Playground',
      description: 'Sheltered outdoor playground for children.',
      location: 'Near Fishing Pond',
      image: 'https://picsum.photos/id/1053/800/600'
    }
  ]
};

export const zhData: AppData = {
  ui: {
    nav: {
      home: '主页',
      accommodations: '住宿',
      activities: '活动',
      contact: '联系'
    },
    home: {
      heroTitle: '远离城市',
      heroSubtitle: '体验有机农场生活',
      heroDesc: '位于雪兰莪的60英亩保护区，将可持续农业与现代舒适融为一体。',
      bookBtn: '预订住宿',
      welcome: '欢迎来到大自然',
      aboutTitle: '关于',
      aboutDesc: '我们坚信与支持全球近来受欢迎的有机与可持续的农业行动。在我们60英亩的综合有机农场中，提供远离城市喧嚣的避难所。我们相信支持迈向更健康、可持续生活的全球运动。',
      aboutFeatures: [
        { title: "有机种植", desc: "拥有猫山王榴莲、椰子、木瓜和可持续作物。", image: "https://picsum.photos/id/1063/800/1000" },
        { title: "家畜与自然", desc: "与我们的农场生态系统互动，包括鱼池和野猪。", image: "https://picsum.photos/id/292/800/1000" },
        { title: "农场住宿", desc: "体验现代化的房间，或在我们的保护区星空下露营。", image: "https://picsum.photos/id/1039/800/1000" }
      ],
      freshTitle: '源自',
      freshSubtitle: '大地',
      freshDesc: '我们60英亩的土地拥有丰富的生物多样性。我们使用严格的有机方法种植各种水果，以确保为客人提供最好的质量。从浓郁的猫山王到清爽的椰子，品尝大自然的差异。',
      ctaTitle: '大自然在等你',
      ctaSubtitle: '逃离平庸',
      ctaDesc: '与大自然联系，恢复灵魂活力，并在我们的有机保护区创造持久的回忆。',
      ctaBtn: '计划行程',
      stats: { acres: '英亩土地', organic: '无农药' }
    },
    footer: {
      explore: '探索',
      visitUs: '拜访我们',
      desc: '体验可持续农场生活的宁静。一个远离城市，更亲近自然的60英亩综合有机农场。'
    },
    contact: {
      title: '联系我们',
      subtitle: '我们很乐意听取您的意见',
      location: '我们的位置',
      checkIn: '入住 / 退房',
      reservations: '预订',
      policy: '政策说明',
      policyText: '吉林园是一个家庭经营的农场。我们在工作日进行翻新。我们只接受团体预订（最少4间宿舍客房或露营地8人以上）。'
    }
  },
  farmInfo: {
    totalArea: "60英亩",
    produce: [
      { name: "榴莲 (猫山王/黑刺)", image: produceImages.durian },
      { name: "椰子", image: produceImages.coconut },
      { name: "木瓜", image: produceImages.papaya },
      { name: "番石榴", image: produceImages.guava },
      { name: "火龙果", image: produceImages.dragonfruit },
      { name: "凤梨 (菠萝)", image: produceImages.pineapple },
      { name: "刺果番荔枝", image: produceImages.soursop }
    ],
    livestock: ["鱼", "野猪"]
  },
  accommodations: [
    {
      id: 'chai-chamber',
      name: '蔡府 (Chai Chamber)',
      type: 'Room',
      capacity: '2-4 人',
      priceWeekend: 'RM 250',
      priceWeekday: 'RM 200',
      description: '位于农场中心的酒店式客房。底楼有4间客房，二楼有8间客房。',
      amenities: ['空调', '私人浴室', '洗漱用品', '停车位'],
      image: 'https://picsum.photos/id/1029/800/600',
      note: '团体预订保留给4间客房以上。'
    },
    {
      id: 'superior-twin',
      name: '高级双床套房',
      type: 'Suite',
      capacity: '最多 4 人 (2 成人 + 2 儿童)',
      priceWeekend: 'RM 250',
      priceWeekday: 'RM 200',
      description: '舒适的双床套房，设有私人浴室。非常适合小家庭。',
      amenities: ['2 张单人床', '私人浴室', '空调', '热水器', '吹风机'],
      image: 'https://picsum.photos/id/1078/800/600'
    },
    {
      id: 'twin-shared',
      name: '双人套房 (共用浴室)',
      type: 'Room',
      capacity: '最多 4 人',
      priceWeekend: 'RM 200',
      priceWeekday: 'RM 150',
      description: '舒适的客房，配有两张单人床，可使用共用浴室设施。',
      amenities: ['2 张单人床', '共用浴室', '空调', '共用休息区'],
      image: 'https://picsum.photos/id/1040/800/600'
    },
    {
      id: 'family-suite',
      name: '高级家庭套房',
      type: 'Suite',
      capacity: '最多 6 人 (3 成人 + 3 儿童)',
      priceWeekend: 'RM 375',
      priceWeekday: 'RM 300',
      description: '宽敞的住宿，适合较大的家庭，设有三张单人床和私人设施。',
      amenities: ['3 张单人床', '私人浴室', '空调', '热水器', '吹风机'],
      image: 'https://picsum.photos/id/1039/800/600'
    },
    {
      id: 'ant-chamber',
      name: '蚁楼 (Ant Chamber)',
      type: 'Room',
      capacity: '不定',
      priceWeekend: '联系获取价格',
      description: '现代酒店客房，底楼6间，一楼7间。保留给5间及以上的团体预订。',
      amenities: ['空调', '私人浴室', '现代设计'],
      image: 'https://picsum.photos/id/164/800/600'
    },
    {
      id: 'campsite-01',
      name: '营地 01 (蜓院 Odonata Courtyard)',
      type: 'Campsite',
      capacity: '最少 8 人团体',
      priceWeekend: 'RM 70 / 人',
      description: '露天露营地，配有共用浴室设施。近距离体验大自然。',
      amenities: ['共用浴室', '烧烤炉 (不含工具)', '热水器', '指定吸烟区'],
      image: 'https://picsum.photos/id/1068/800/600',
      note: '帐篷内严禁吸烟。'
    },
    {
      id: 'campsite-02',
      name: '营地 02 (蜂巢 The Hive)',
      type: 'Campsite',
      capacity: '最少 8 人团体',
      priceWeekend: 'RM 70 / 人',
      description: '带有观景台的高架露营体验。包括2个房间和2个浴室。',
      amenities: ['观景台', '2 房间', '2 浴室', '自助区'],
      image: 'https://picsum.photos/id/1047/800/600'
    }
  ],
  activities: [
    {
      id: 'fishing',
      name: '钓鱼池',
      description: '捕获非洲鱼、南邦鱼、苏丹鱼、笋壳鱼和生鱼。客人需自备钓具。',
      location: '钓鱼池',
      image: 'https://picsum.photos/id/1025/800/600',
      note: '仅限单钩假饵。严禁使用三本钩。钓后放流或称重付费。'
    },
    {
      id: 'event-hall',
      name: '活动厅 (蜓府 Odonata Chamber)',
      description: '宽敞的活动厅，非常适合聚会，配备卡拉OK和音响系统。',
      location: '蜓府',
      price: '免费使用',
      image: 'https://picsum.photos/id/1060/800/600',
      note: '仅供吉林园住客使用。'
    },
    {
      id: 'entertainment',
      name: '台球与卡拉OK房',
      description: '通过室内游戏和唱歌放松身心。',
      location: '蜓府',
      price: 'RM 200 / 天',
      image: 'https://picsum.photos/id/1059/800/600'
    },
    {
      id: 'kids-play',
      name: '儿童游戏室',
      description: '儿童室内玩耍的安全有趣环境。',
      location: '蜓府',
      price: 'RM 200 / 天',
      image: 'https://picsum.photos/id/1066/800/600'
    },
    {
      id: 'conference',
      name: '会议室',
      description: '设备齐全的房间，适合公司会议和讨论。',
      location: '蜓府',
      price: 'RM 200 / 天',
      image: 'https://picsum.photos/id/1075/800/600'
    },
    {
      id: 'rejuvenate',
      name: '修身房',
      description: '专为放松、瑜伽或安静活动而设的宁静空间。',
      location: '蜓府',
      price: 'RM 200 / 天',
      image: 'https://picsum.photos/id/1049/800/600'
    },
    {
      id: 'daikado',
      name: '大蜗堂 (Daikado)',
      description: '指定自助区，设有用餐区、煤气炉、电饭煲和烧烤炉。',
      location: '大蜗堂',
      image: 'https://picsum.photos/id/195/800/600',
      note: '提供自助烧烤。客人自备木炭和食材。'
    },
    {
      id: 'playground',
      name: '儿童游乐场',
      description: '为儿童提供的有顶户外游乐场。',
      location: '靠近钓鱼池',
      image: 'https://picsum.photos/id/1053/800/600'
    }
  ]
};