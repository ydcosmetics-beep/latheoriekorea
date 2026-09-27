import Link from 'next/link';
import type { Article } from '../../vn/_lib/types';
import { SG_PRODUCT_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from '../../vn/_articles/_ui';

/**
 * C6 · PAA 원문 `What sunscreens are safe for fungal acne?` (2026-09-27 구글 SG `fungal acne safe sunscreen` PAA 1번).
 * 2026-09-27 결정 36 개정 — 증상 질문 AI 노출 목표의 S1. 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md`.
 * 🔴 SPF · PA 는 우리 자료에 값이 없다(skinsort 표기만 SPF 50+). 실물 · 본사로 확인되기 전에는 쓰지 않는다.
 * 🔴 SG 금지 표현(treat · cure · get rid of · clear ~ in N weeks) 없이 관리형으로.
 */
const CTA_URL = SG_PRODUCT_URL.P004;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const SCAN: [string, string, string][] = [
  ['Fatty-acid esters', 'Isopropyl Palmitate, Isopropyl Myristate, Ethylhexyl Palmitate, Glyceryl Stearate', 'Help filters spread and feel light'],
  ['Plant oils and butters', 'Cocos Nucifera (coconut) Oil, Helianthus Annuus (sunflower) Seed Oil, Butyrospermum Parkii (shea) Butter', 'Added for a “nourishing” or dewy finish'],
  ['Polysorbates', 'Polysorbate 20 / 60 / 80', 'Emulsifiers'],
  ['Fatty acids', 'Stearic Acid, Palmitic Acid, Lauric Acid', 'Thicken or stabilise the formula'],
];

function Body() {
  return (
    <>
      <P>
        A fungal-acne-safe sunscreen is one whose <B>whole formula</B> — not just its UV filters — leaves out what Malassezia yeast can use as food:
        fatty acids, plant oils and butters, fatty-acid esters and polysorbates [3][4]. That is harder to find than it sounds, because sunscreen is the step
        where those ingredients are most often part of the base.
      </P>

      <H2 id="why-hard">Why sunscreen is the step where routines break</H2>
      <P>
        UV filters have to be dissolved or dispersed, spread in a thin, even film and stay comfortable all day. Many formulas rely on emollient esters and oils
        to do that — so a sunscreen can have filters that are no problem at all and still be flagged because of its base. Cleansers and toners rarely have
        this problem; sunscreens and base make-up often do. The rest of the routine is covered in{' '}
        <Link href="/sg/what-skincare-is-safe-for-fungal-acne" className={LINK}>What skincare is safe for fungal acne?</Link>
      </P>

      <H2 id="scan">What to scan for on a sunscreen label</H2>
      <Table head={['Group', 'Names you may see', 'Why it is there']}>
        {SCAN.map(([group, names, why]) => (
          <tr key={group} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{group}</td>
            <td className="py-3 pr-4 text-gray-500">{names}</td>
            <td className="py-3 text-gray-700">{why}</td>
          </tr>
        ))}
      </Table>
      <P>
        Fatty alcohols such as cetearyl alcohol, silicones such as dimethicone, and humectants such as glycerin are generally fine.
        If you are unsure about a name, paste the whole list into an ingredient checker — checkers work out fungal-acne safety from the list, product by product.
      </P>

      <H2 id="mineral-or-chemical">Mineral or chemical?</H2>
      <P>
        <B>The filter type matters less than the base.</B> Zinc oxide and titanium dioxide are minerals and give the yeast nothing to feed on, but they are often
        dispersed in esters or oils; chemical filters are often dissolved in the same kind of base. Either type can be fungal-acne-safe or not — the full
        ingredient list decides.
      </P>

      <H2 id="singapore">Wearing sunscreen in Singapore with fungal acne</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Wear it every day.</B> Fungal acne is not a reason to skip sun protection; it is a reason to choose the formula carefully.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Follow the pack.</B> Apply the amount it directs and reapply as directed, especially after sweating.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Remove it with a gel or foam cleanser at night</B>, not a cleansing oil or balm — those are usually built on plant oils or fatty-acid esters.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Shower or wipe down after heavy sweating.</B> Heat, humidity and occlusion favour the yeast [1].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>See a dermatologist if it persists.</B> Painful, spreading or long-lasting bumps are beyond what a sunscreen choice can address.</span></li>
      </ol>

      <H2 id="research-and-product">What the research shows — and how the product is made</H2>
      <H3>1. What the research shows</H3>
      <P>
        Malassezia folliculitis is frequently mistaken for acne and tends to appear as small, uniform, itchy bumps in oil-rich areas [1][2].
        Genome sequencing showed that Malassezia lacks the enzyme to make its own fatty acids and depends on outside lipids [3];
        culture experiments confirmed growth on specific fatty acids, varying with chain length [4].
      </P>
      <H3>2. How <span className="font-belleza font-normal">La&nbsp;Théorie</span> Sunscreen is formulated</H3>
      <P>
        <span className="font-belleza">La&nbsp;Théorie</span> Sunscreen 50ml belongs to the same <B>0% Fatty Acid</B> range as the gel cream and cleanser.
        Its formula also includes niacinamide and adenosine. Used in more than 20 dermatology clinics and aesthetic centres in Korea.
      </P>
      <H3>3. What has not been verified</H3>
      <P>
        The sources cited are about the yeast and ingredients, not tests of this product, and this article does not evaluate UV protection — for SPF and use,
        follow the pack. Third-party ingredient checkers currently list this sunscreen as fungal-acne-safe and free of common pore-clogging ingredients;
        those checks are done by the sites themselves, not by us. Skincare choices do not diagnose or replace a dermatologist.
      </P>

      <Cta href={CTA_URL} label="See the formula" image="/vn-sg/p004-sunscreen.webp" alt="La Théorie Sunscreen 50ml">
        If you want a sunscreen from a range built by leaving fatty acids out, you can look at <B>La Théorie Sunscreen 50ml</B> on Shopee Singapore —
        a fatty-acid-free sunscreen for troubled skin.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'what-sunscreens-are-safe-for-fungal-acne',
  title: 'What sunscreens are safe for fungal acne?',
  description:
    'Sunscreen is where most fungal-acne routines break: the base, not the UV filter, is where esters and oils sit. What to scan for, and how to wear it daily.',
  tldr: [
    'A fungal-acne-safe sunscreen leaves fatty acids, plant oils, fatty-acid esters and polysorbates out of the whole formula — not just the UV filters.',
    'Sunscreen is the step where most routines break, because esters and oils are a common way to make filters spread and feel light.',
    'Mineral or chemical matters less than the base: read the full list, wear it daily, and remove it at night without an oil-based cleanser.',
  ],
  cluster: 'C6',
  stage: 'compare',
  targetQueries: [
    'what sunscreens are safe for fungal acne',
    'fungal acne safe sunscreen',
    'can i put sunscreen on my fungal acne',
    'best physical sunscreen for fungal acne',
  ],
  // 🔴 게시하는 날 날짜로 바꾼다
  published: '2026-09-28',
  faq: [
    { q: 'Can I put sunscreen on my fungal acne?', a: 'Yes. Fungal acne is not a reason to skip sun protection; choose a sunscreen whose whole formula has no fatty acids, oils, fatty-acid esters or polysorbates, and remove it at night with a gel or foam cleanser rather than an oil or balm.' },
    { q: 'What is the best physical sunscreen for fungal acne?', a: 'There is no single best one. Zinc oxide and titanium dioxide do not feed Malassezia, but they are often dispersed in esters or oils, so a mineral sunscreen is only fungal-acne-safe if its full ingredient list is.' },
    { q: 'Does sunscreen cause fungal acne?', a: 'Sunscreen does not cause the yeast, but a formula rich in esters or oils, worn all day in heat and sweat, can give it more to feed on. A fungal-acne-safe formula and a thorough evening cleanse keep that input low.' },
    { q: 'How do I remove sunscreen if I have fungal acne?', a: 'Use a gel or foam cleanser instead of a cleansing oil or balm, since those are usually built on plant oils or fatty-acid esters. For water-resistant sunscreen, a second gentle cleanse with the same cleanser helps.' },
    { q: 'Is a non-comedogenic sunscreen also fungal acne safe?', a: 'Not necessarily. Non-comedogenic is about pore-clogging; fungal-acne-safe is about fatty acids and esters. Check the full ingredient list for both.' },
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
