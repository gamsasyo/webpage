// 2026-10-29 네이버 검색 쇼핑 블록에서 수집 (판매처: 컬러 유어 올리독 smartstore.naver.com/ododog)
// 가격·별점·리뷰수는 수집 시점 실데이터. 이미지는 public/img.

export const STORE_URL = 'https://smartstore.naver.com/ododog';
export const INSTAGRAM_URL = 'https://www.instagram.com/ol1dog';

export const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'harness', label: '하네스' },
  { id: 'lead', label: '리드줄' },
  { id: 'collar', label: '목줄' },
  { id: 'living', label: '가방 · 리빙' },
];

// 코튼(파스텔) 라인 먼저 노출
export const PRODUCTS = [
  { id: 'harness-vest', cat: 'harness', name: '조끼 하네스', desc: '통기성 좋은 면, 이름과 얼굴 자수', price: 39900, rating: 5.0, reviews: 20, img: 'harness-vest.jpg', tag: 'NEW' },
  { id: 'harness-cotton', cat: 'harness', name: '면사 인식표 하네스', desc: '100% 면사 · 파스텔 컬러', price: 49900, rating: 4.94, reviews: 16, img: 'harness-cotton.jpg' },
  { id: 'collar-cotton', cat: 'collar', name: '코튼 목줄', desc: '이모지 & 이름 자수 · 사이즈 맞춤', price: 19900, rating: 4.67, reviews: 12, img: 'collar-cotton.jpg' },
  { id: 'lead-cotton', cat: 'lead', name: '코튼 리드줄', desc: '100% 면 · 이름과 번호 자수', price: 19900, rating: 4.85, reviews: 26, img: 'lead-cotton.jpg' },
  { id: 'cushion-check', cat: 'living', name: '체크코튼 방석', desc: '얼굴 자수 · 100% 면 퀼팅 쿠션', price: 79000, rating: 5.0, reviews: 4, img: 'cushion-check.jpg' },
  { id: 'bag-check', cat: 'living', name: '체크코튼백', desc: '얼굴 자수 퀼팅 토트 · 크로스백', price: 47000, rating: 4.94, reviews: 16, img: 'bag-check.jpg' },
  { id: 'pouch-check', cat: 'living', name: '체크코튼 파우치', desc: '얼굴 자수 미니 파우치', price: 19900, rating: 5.0, reviews: 4, img: 'pouch-check.jpg' },
  { id: 'keyring', cat: 'living', name: '이름 키링', desc: '인식표 겸용 · 번호 각인', price: 16900, rating: 4.75, reviews: 4, img: 'keyring.jpg' },
  { id: 'harness-id', cat: 'harness', name: '인식표 하네스', desc: '이름 · 번호 · 얼굴 자수 맞춤제작', price: 39900, rating: 4.91, reviews: 172, img: 'harness-id.jpg', tag: 'BEST' },
  { id: 'harness-h-face', cat: 'harness', name: 'H타입 웨빙 하네스', desc: '이름 + 얼굴 자수 옵션', price: 37900, rating: 4.91, reviews: 123, img: 'harness-h-face.jpg' },
  { id: 'harness-h', cat: 'harness', name: 'H타입 하네스 + 와펜', desc: '이름 각인, 안전한 가슴줄', price: 29900, rating: 4.82, reviews: 130, img: 'harness-h.jpg' },
  { id: 'lead-name', cat: 'lead', name: '이름 리드줄', desc: '자수 각인 산책끈', price: 14900, rating: 4.84, reviews: 212, img: 'lead-name.jpg' },
  { id: 'lead-color', cat: 'lead', name: '컬러 리드줄', desc: '튼튼하고 가벼운 데일리 산책줄', price: 9900, rating: 4.86, reviews: 213, img: 'lead-color.jpg', tag: 'BEST' },
  { id: 'collar-color', cat: 'collar', name: '컬러 목줄', desc: '12가지 비비드 컬러 조합 · 이름 자수', price: 16900, rating: 4.89, reviews: 28, img: 'collar-color.jpg' },
];

// 웨빙 컬러 — 코튼 라인 파스텔 톤에서
export const WEBBING = [
  { name: '오트', hex: '#E6DCCB' },
  { name: '버터', hex: '#EEDB9F' },
  { name: '피치', hex: '#F1C3A8' },
  { name: '로즈', hex: '#E3AFA8' },
  { name: '라일락', hex: '#CBBEDC' },
  { name: '파우더블루', hex: '#B9CCDA' },
  { name: '세이지', hex: '#B5C2A7' },
  { name: '올리브', hex: '#8F946C' },
  { name: '클레이', hex: '#C08463' },
  { name: '모카', hex: '#8A6D5A' },
  { name: '차콜', hex: '#4A4440' },
  { name: '아이보리', hex: '#F6F0E4' },
];

export const THREAD = [
  { name: '아이보리', hex: '#FBF6EC' },
  { name: '브라운', hex: '#5A4134' },
  { name: '로즈', hex: '#C9776E' },
  { name: '세이지', hex: '#6F7F63' },
  { name: '네이비', hex: '#34405A' },
];

export const ICONS = ['♡', '✿', '☆', '✦', ''];

export const ITEM_TYPES = [
  { id: 'lead', label: '이름 리드줄', price: 14900 },
  { id: 'collar', label: '컬러 목줄', price: 16900 },
  { id: 'harness', label: '인식표 하네스', price: 39900 },
];
