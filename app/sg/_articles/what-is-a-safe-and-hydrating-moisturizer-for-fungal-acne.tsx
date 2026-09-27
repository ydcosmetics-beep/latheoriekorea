import Link from 'next/link';
import type { Article } from '../../vn/_lib/types';
import { SG_PRODUCT_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from '../../vn/_articles/_ui';

/**
 * C6 · PAA 원문 `What is a safe and hydrating moisturizer for fungal acne?` (SG 키워드 클러스터.md C6 AEO 질문).
 * 2026-09-27 결정 36 개정 — 증상 질문 AI 노출 목표의 S3. 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md`.
 * 🔴 SG 금지 표현(treat · cure · get rid of · clear ~ in N weeks) 없이 관리형으로.
 */
const CTA_URL = SG_PRODUCT_URL.P002;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const LABEL: [string, string, string][] = [
  ['Hydration', 'Glycerin, Sodium Hyaluronate / Hyaluronic Acid, Panthenol, Butylene Glycol', '—'],
  ['Softness and slip', 'Squalane, Dimethicone and other silicones', 'Plant oils and butters, Isopropyl Palmitate, Isopropyl Myristate, Ethylhexyl Palmitate'],
  ['Texture and emulsifiers', 'Carbomer and other gel-formers; fatty alcohols such as Cetearyl Alcohol', 'Polysorbate 20 / 60 / 80, Glyceryl Stearate'],
  ['Thickeners', '—', 'Stearic, Palmitic, Lauric and Myristic Acid'],
];

function Body() {
  return (
    <>
      <P>
        A safe and hydrating moisturizer for fungal acne does two jobs at once. It <B>hydrates with humectants</B> — glycerin, hyaluronic acid, panthenol —
        that hold water in the skin, and it <B>leaves out what Malassezia yeast can use as food</B>: fatty acids, the plant oils and butters that contain them,
        fatty-acid esters and polysorbates [3][4]. In practice, that usually means a gel or a gel-cream.
      </P>

      <H2 id="why-hard">Why “hydrating” and “fungal-acne safe” pull in opposite directions</H2>
      <P>
        Most moisturizers feel comforting because of their oils, butters and esters — the ingredients that soften skin and slow water loss.
        They are also what the yeast behind fungal acne lives on. Malassezia cannot make its own fatty acids; it takes them from sebum and from what is
        applied to the skin [3], and in culture it grows on specific fatty acids [4].
      </P>
      <P>
        So a fungal-acne-safe moisturizer has to be built differently: it <B>binds water with humectants</B>, gets its slip from ingredients that contain
        no fatty acids — squalane or silicones — and keeps the layer thin. Skipping moisturizer altogether is not the answer either; see{' '}
        <Link href="/sg/should-i-moisturize-acne-prone-skin" className={LINK}>Should I moisturize acne-prone skin?</Link>
      </P>

      <H2 id="label">What to look for on the label</H2>
      <Table head={['What it does', 'Usually fine', 'Usually flagged']}>
        {LABEL.map(([role, ok, no]) => (
          <tr key={role} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{role}</td>
            <td className="py-3 pr-4 text-gray-700">{ok}</td>
            <td className="py-3 text-gray-500">{no}</td>
          </tr>
        ))}
      </Table>
      <P>
        Two names cause most of the confusion. <B>Hyaluronic acid</B> is not a fatty acid — it is a water-binding sugar chain — so it is fine.{' '}
        <B>Cetearyl and cetyl alcohol</B> are fatty alcohols, not fatty acids, and are generally fine too. The word “acid” or “fatty” on its own does not
        decide it; the chemical group does.
      </P>

      <H2 id="check">A 60-second label check</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Go to the full ingredient list.</B> “Oil-free” and “non-comedogenic” on the front are different claims and say nothing about fatty acids.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Scan for fatty acids</B> — stearic, palmitic, lauric, myristic, oleic, linoleic. Hyaluronic, salicylic and lactic acid are not fats.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Scan for oils and butters</B> — usually a Latin plant name followed by “Oil” or “Butter”.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Scan for esters and polysorbates</B> — palmitate, myristate, stearate, laurate, oleate, and Polysorbate 20 / 60 / 80. Sodium hyaluronate also ends in “-ate”, but it is the salt of hyaluronic acid, not a fat.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Still unsure?</B> Paste the list into an ingredient checker. Checkers work out fungal-acne safety from the ingredient list, product by product.</span></li>
      </ol>

      <H2 id="climate">Using it in Singapore’s humidity</H2>
      <P>
        A thin layer is enough. Humectants work best on skin that is still slightly damp after cleansing or toner, and a thin gel layer does not trap sweat
        the way a rich cream can. On the chest and back — where fungal acne often appears — the same rule applies: thin layers, and wash off sweat promptly,
        because heat, humidity and occlusion favour the yeast [1].
      </P>

      <H2 id="research-and-product">What the research shows — and how the product is made</H2>
      <H3>1. What the research shows</H3>
      <P>
        Malassezia folliculitis is frequently mistaken for acne and tends to appear as small, uniform, itchy bumps in oil-rich areas [1][2].
        Genome sequencing showed that Malassezia lacks the enzyme to make its own fatty acids and depends on outside lipids [3];
        culture experiments confirmed growth on specific fatty acids, varying with chain length [4].
      </P>
      <H3>2. How <span className="font-belleza font-normal">La&nbsp;Théorie</span> Hydrating Gel Cream is formulated</H3>
      <P>
        <span className="font-belleza">La&nbsp;Théorie</span> Hydrating Gel Cream is a gel-cream built on a <B>0% Fatty Acid</B> formula. It hydrates with
        panthenol and sodium hyaluronate and softens with phytosqualane, a plant-derived squalane — the combination this article describes.
        Used in more than 20 dermatology clinics and aesthetic centres in Korea.
      </P>
      <H3>3. What has not been verified</H3>
      <P>
        The sources cited are about the yeast and ingredients, not tests of this product. The gel cream has no clinical trial of its own for fungal acne.
        Third-party ingredient checkers currently list it as fungal-acne-safe; those checks are done by the sites themselves, not by us.
        A moisturizer can make skin less hospitable to the yeast; it does not diagnose or replace a dermatologist.
      </P>

      <Cta href={CTA_URL} label="See the formula">
        If you want to see a moisturizer built this way, you can look at <B>La Théorie Hydrating Gel Cream 60ml</B> on Shopee Singapore —
        a 0% fatty acid gel-cream for oily, acne-prone and fungal-acne-prone skin.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'what-is-a-safe-and-hydrating-moisturizer-for-fungal-acne',
  title: 'What is a safe and hydrating moisturizer for fungal acne?',
  description:
    'A gel or gel-cream that hydrates with humectants and leaves out fatty acids, oils, esters and polysorbates — what to look for, and a 60-second label check.',
  tldr: [
    'A safe and hydrating moisturizer for fungal acne hydrates with humectants — glycerin, hyaluronic acid, panthenol — and leaves out fatty acids, plant oils, fatty-acid esters and polysorbates.',
    'Squalane and silicones add slip without feeding the yeast; rich creams usually get their comfort from exactly the ingredients to avoid.',
    'Texture is a clue, not proof: read the full ingredient list, and see a dermatologist if bumps persist.',
  ],
  cluster: 'C6',
  stage: 'compare',
  targetQueries: [
    'what is a safe and hydrating moisturizer for fungal acne',
    'what moisturizer is safe for fungal acne',
    'fungal acne safe moisturizer',
    'best moisturizer if you have fungal acne',
  ],
  // 🔴 게시하는 날 날짜로 바꾼다
  published: '2026-09-28',
  faq: [
    { q: 'What moisturizer is safe for fungal acne?', a: 'One whose full ingredient list has no fatty acids, plant oils or butters, fatty-acid esters or polysorbates. Most fungal-acne-safe moisturizers are gels or gel-creams that hydrate with glycerin, hyaluronic acid or panthenol.' },
    { q: 'What is a good non-comedogenic moisturizer that is also safe for fungal acne?', a: 'Check the two separately: non-comedogenic is about pore-clogging, fungal-acne-safe is about fatty acids, and a product can pass one and fail the other. A light gel-cream with no oils, esters or polysorbates often passes both — confirm with the full ingredient list or a checker.' },
    { q: 'Is hyaluronic acid safe for fungal acne?', a: 'Generally yes. Hyaluronic acid is not a fatty acid; it is a water-binding sugar chain, so it hydrates without feeding Malassezia. Sodium hyaluronate, its salt form, is the same.' },
    { q: 'Can a moisturizer make fungal acne worse?', a: 'It can, if it contains what the yeast feeds on — fatty acids, oils, esters or polysorbates — especially under heat, sweat and thick layers. Switching to a fungal-acne-safe moisturizer removes that source; persistent bumps still need a dermatologist.' },
    { q: 'What brands are fungal acne safe?', a: 'Checkers rate individual formulas, not brands, so safety is decided product by product. A few brands formulate their whole range without fatty acids; La Théorie is one, and third-party ingredient checkers currently list several of its products as fungal-acne-safe.' },
  ],
  // 2026-09-16 확인분 재사용 — [1] Europe PMC (PMID 24688625) · [2][3][4] Crossref
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. et al. (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. et al. (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
