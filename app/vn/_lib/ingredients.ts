/**
 * 전성분(INCI) 6종 — 본사 회신 2026-10-19 (요청서 ④).
 * 정본은 `S06 윤준상 볼트/02_산출물/2026-10-19 La Théorie 전성분(INCI) 6종 — 본사 회신 정리 · 명시 가능한 사실 · 기존 글과 충돌.md`.
 * 순서는 원본 문서의 함량 내림차순 = 라벨 표기 순서. 🔴 함량(%)은 제조사 기밀 — 코드에도 화면에도 넣지 않는다.
 * `facts` 는 성분표에서 바로 읽히는 「있다/없다」뿐이다(판단 아님). 웹 문장은 「theo bảng thành phần do công ty cung cấp」을 붙인다.
 */
export interface IngredientSheet {
  id: string;
  /** 본사 라벨 표기 */
  label: string;
  /** 시장 표기 제품명 (Shopee 리스팅) */
  name: string;
  /** 원본 문서 날짜 (YYYY-MM) — 화면에 「tài liệu công thức, tháng MM/YYYY」로 */
  docDate: string;
  inci: string[];
  facts: {
    fragrance: boolean;   // Parfum / Fragrance
    ethanol: boolean;     // Alcohol / Alcohol Denat. (cồn béo 제외)
    paraben: boolean;     // paraben · phenoxyethanol
    plantOil: boolean;    // 식물성·동물성 오일 · lanolin
    petrolatum: boolean;  // Mineral Oil · Petrolatum · Paraffinum Liquidum
    silicone: boolean;    // dimethicone · siloxane 류
  };
}

export const INGREDIENTS: IngredientSheet[] = [
  {
    id: 'P001',
    label: 'Cleanser :: Clearing Gel',
    name: 'Gel Rửa Mặt Clearing Gel 210ml',
    docDate: '2023-09',
    inci: ['Water', 'Glycerin', 'Sodium Lauryl Sulfoacetate', '1,2-Hexanediol', 'Xylitol', 'Xanthan Gum', 'Butylene Glycol', 'Hydroxyacetophenone', 'Sodium Chloride', 'Sodium Sulfate', 'Ethylhexylglycerin', 'Disodium EDTA'],
    facts: { fragrance: false, ethanol: false, paraben: false, plantOil: false, petrolatum: false, silicone: false },
  },
  {
    id: 'P006',
    label: 'Toner :: Soothing Treatment',
    name: 'Nước Cân Bằng Soothing Toner 210ml',
    docDate: '2022-01',
    inci: ['Water', 'Glycerin', 'Propanediol', '1,2-Hexanediol', 'Glycereth-26', 'Hydroxyacetophenone', 'Xanthan Gum', 'Ethylhexylglycerin', 'Butylene Glycol', 'Disodium EDTA', 'Sodium Hyaluronate', 'Panthenol'],
    facts: { fragrance: false, ethanol: false, paraben: false, plantOil: false, petrolatum: false, silicone: false },
  },
  {
    id: 'P002',
    label: 'Cream :: Hydrating Ingredients',
    name: 'Kem Dưỡng Ẩm Hydrating Gel Cream 60ml',
    docDate: '2026-07',
    inci: ['Water', 'Squalane', '1,2-Hexanediol', 'Glycerin', 'Panthenol', 'Ammonium Acryloyldimethyltaurate/VP Copolymer', 'Dimethicone', 'Cyclopentasiloxane', 'Carbomer', 'Tromethamine', 'Ethylhexylglycerin', 'Polyquaternium-51', 'Disodium EDTA', 'Xanthan Gum', 'Sodium Hyaluronate', 'Tocopherol'],
    facts: { fragrance: false, ethanol: false, paraben: false, plantOil: false, petrolatum: false, silicone: true },
  },
  {
    id: 'P003',
    label: 'Enhancer :: Dual Effect Essence',
    name: 'Tinh Chất Dual Effect Essence 40ml',
    docDate: '2026-06',
    inci: ['Water', 'Glycerin', 'Squalane', 'Petrolatum', '1,2-Hexanediol', 'Butylene Glycol', 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer', 'Ammonium Acryloyldimethyltaurate/VP Copolymer', 'Arginine', 'Centella Asiatica Extract', 'Caprylyl Glycol', 'Asiatic Acid', 'Asiaticoside', 'Madecassoside'],
    facts: { fragrance: false, ethanol: false, paraben: false, plantOil: false, petrolatum: true, silicone: false },
  },
  {
    id: 'P004',
    label: 'Sunscreen :: Protection Factor',
    name: 'Kem Chống Nắng Sunscreen 50ml',
    docDate: '2026-06',
    inci: ['Water', 'Homosalate', 'Butylene Glycol', 'Octocrylene', 'Ethylhexyl Salicylate', 'Butyl Methoxydibenzoylmethane', 'Alcohol', 'Butyloctyl Salicylate', 'Methyl Methacrylate Crosspolymer', 'Niacinamide', '1,2-Hexanediol', 'Propanediol', 'Benzotriazolyl Dodecyl p-Cresol', 'Pentylene Glycol', 'Ethylhexyl Methoxycrylene', 'Sodium Acrylates Crosspolymer-2', 'Sodium Polyacryloyldimethyl Taurate', 'Dibutyl Lauroyl Glutamide', 'Dibutyl Ethylhexanoyl Glutamide', 'C30-45 Alkyldimethylsilyl Polypropylsilsesquioxane', 'Ammonium Acryloyldimethyltaurate/VP Copolymer', 'Polyacrylate Crosspolymer-6', 'Adenosine', 'Biosaccharide Gum-1', 'Sodium Phytate', 'Ethylhexylglycerin'],
    facts: { fragrance: false, ethanol: true, paraben: false, plantOil: false, petrolatum: false, silicone: true },
  },
  {
    id: 'P005',
    label: 'BB Cream :: Blemish Balm',
    name: 'Kem BB Blemish Balm SPF25 20ml',
    docDate: '2026-10',
    inci: ['Water (Aqua)', 'Cyclopentasiloxane', 'Titanium Dioxide', 'Glycerin', 'Butyloctyl Salicylate', 'Phenyl Trimethicone', 'Dipropylene Glycol', 'Diphenylsiloxy Phenyl Trimethicone', 'Caprylyl Methicone', 'Lauryl PEG-10 Tris(Trimethylsiloxy)silylethyl Dimethicone', 'Niacinamide', 'Disteardimonium Hectorite', 'Hydrogenated Polydecene', 'Cetyl PEG/PPG-10/1 Dimethicone', 'Magnesium Sulfate', 'Dimethicone', '1,2-Hexanediol', 'Ethylhexyl Methoxycinnamate', 'Octyldodecanol', 'Methyl Methacrylate Crosspolymer', 'Iron Oxides (CI 77492)', 'Mica', 'Dimethicone/Vinyl Dimethicone Crosspolymer', 'Propanediol', 'Acrylates/Dimethicone Copolymer', 'Iron Oxides (CI 77491)', 'Iron Oxides (CI 77499)', 'Triethoxycaprylylsilane', 'Aluminum Hydroxide', 'Glyceryl Caprylate', 'Ethylhexylglycerin', 'Adenosine', 'Propylene Carbonate', 'Tocopherol', 'Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate'],
    facts: { fragrance: false, ethanol: false, paraben: false, plantOil: false, petrolatum: false, silicone: true },
  },
];

export function getIngredients(id: string): IngredientSheet | undefined {
  return INGREDIENTS.find((s) => s.id === id);
}

/** 「tháng MM/YYYY」 */
export function docMonth(d: string) {
  const [y, m] = d.split('-');
  return `tháng ${Number(m)}/${y}`;
}
