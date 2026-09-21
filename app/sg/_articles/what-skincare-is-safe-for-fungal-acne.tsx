import type { Article } from '../../vn/_lib/types';
import { SG_PRODUCT_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from '../../vn/_articles/_ui';

/** C6 · 세트 SG-C6-SNS-03 · PAA 원문 `fungal acne safe moisturizer` (2026-09-05). 「아는 단어(fungal acne)로 들어와 0% fatty acid 를 배운다」 세트. */
const CTA_URL = SG_PRODUCT_URL.P002;

const BY_STEP: [string, string, string][] = [
  ['Cleanser', 'Gel or foam-light, low pH, no oil-based “cleansing balm” step at night', 'Cleansing oils and balms are often built on plant oils or fatty-acid esters'],
  ['Toner', 'Water-based; humectants such as glycerin or panthenol', 'Toners with oils or “nourishing” esters'],
  ['Moisturiser', 'Gel or gel-cream; humectants; squalane or silicones if you want slip', 'Plant oils and butters, lanolin, polysorbates, most “barrier” creams built on fatty acids'],
  ['Sunscreen', 'Lightweight, fluid textures; check the full list, not the front label', 'Many sunscreens use esters (isopropyl palmitate, C12–15 alkyl benzoate) as the base'],
  ['Make-up', 'Fewer products, thinner layers; remove at night without an oil-based remover', 'Base make-up is often rich in esters and waxes'],
];

const CHECK: [string, string][] = [
  ['Fatty acids', 'Oleic, palmitic, stearic, linoleic, lauric acid'],
  ['Plant oils and butters', 'Olea Europaea (olive), Persea Gratissima (avocado), Cocos Nucifera (coconut), Butyrospermum Parkii (shea)'],
  ['Fatty-acid esters', 'Isopropyl Palmitate, Isopropyl Myristate, Glyceryl Stearate, Cetyl Palmitate, Ethylhexyl Palmitate'],
  ['Polysorbates', 'Polysorbate 20 / 60 / 80'],
  ['Lanolin', 'Lanolin, Lanolin Oil, Acetylated Lanolin'],
];

function Body() {
  return (
    <>
      <P>
        If you have fungal acne, you have probably already met the checkers — websites where you paste an ingredient list and get a green or red result.
        They are useful. But they answer product by product, and they do not explain <B>why</B> a product is flagged. This article does the other half:
        what “fungal acne safe” actually means, what to look for at each step of a routine, and how to read a label yourself when there is no checker to hand.
      </P>

      <H2 id="what-safe-means">What “fungal acne safe” means</H2>
      <P>
        “Fungal acne” is the everyday name for Malassezia folliculitis — hair follicles inflamed by an overgrowth of a yeast that lives on almost everyone’s skin,
        and that is easily mistaken for regular acne [1][2]. The yeast <B>cannot make the fatty acids it needs</B>; it takes them from sebum and from what you apply [3][4].
      </P>
      <P>
        So a product is called fungal-acne-safe when it <B>leaves out the ingredients Malassezia can use as food</B>: fatty acids, the plant oils and butters that contain them,
        their esters, and polysorbates. Two things this label is <B>not</B>: it is not the same as non-comedogenic (pore-clogging is a different question), and it is not the same as
        “fatty alcohol-free” (cetyl and cetearyl alcohol are alcohols, not acids, and are generally fine).
      </P>

      <H2 id="by-step">Step by step: what to look for</H2>
      <Table head={['Step', 'What usually works', 'What usually gets flagged']}>
        {BY_STEP.map(([step, ok, no]) => (
          <tr key={step} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{step}</td>
            <td className="py-3 pr-4 text-gray-700">{ok}</td>
            <td className="py-3 text-gray-500">{no}</td>
          </tr>
        ))}
      </Table>
      <P>
        Notice the pattern: <B>the further into the routine you go, the more oil-based the default products become</B>. Cleansers are easy; sunscreens and make-up are where
        most people get caught, because the base of the product — not the headline active — is where the esters sit.
      </P>

      <H3>The five groups to scan for</H3>
      <Table head={['Group', 'Names on the label']}>
        {CHECK.map(([name, label]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 text-gray-500">{label}</td>
          </tr>
        ))}
      </Table>
      <P>
        Not every fatty acid feeds the yeast equally — in culture, Malassezia grows well on palmitic and oleic acid and far less on the shorter chains in coconut oil [4] —
        but for reading a label quickly, scanning for these five groups covers most cases.
      </P>

      <H2 id="routine">A routine that suits Singapore’s climate</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Fewer layers.</B> Every product is another chance to add fatty acids. A cleanser, a toner, a gel-cream and a sunscreen is a complete routine.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Shower or wipe down after sweating.</B> Sweat trapped in follicles is the warm, humid environment the yeast prefers. This matters more than any single product.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Thin layers on the chest and back.</B> A gel-cream, applied thinly. Thick layers do not add hydration; they add occlusion.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Change one product at a time.</B> If you swap everything at once, you will not know which change helped.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>See a dermatologist if it persists.</B> Painful, spreading or long-lasting bumps are beyond what skincare choices can address, and only a doctor can confirm whether the cause is the yeast at all.</span></li>
      </ol>

      <H2 id="research-and-product">What the research shows — and how the product is made</H2>
      <H3>1. What the research shows</H3>
      <P>
        Clinical reviews describe Malassezia folliculitis as a condition frequently misread as acne, with small uniform itchy bumps in oil-rich areas [1][2].
        On mechanism, genome sequencing showed that Malassezia lacks the enzyme for making its own fatty acids and depends on outside lipids [3];
        culture experiments confirmed growth on specific fatty acids, varying with chain length [4].
      </P>
      <H3>2. How <span className="font-belleza font-normal">La&nbsp;Théorie</span> is formulated</H3>
      <P>
        Every product in the <span className="font-belleza">La&nbsp;Théorie</span> range — cleanser, toner, gel cream, essence, sunscreen and BB cream — is built on a{' '}
        <B>0% Fatty Acid</B> formula, which is why the range can be used as a complete routine rather than checked product by product. Used in more than 20 dermatology
        clinics and aesthetic centres in Korea.
      </P>
      <H3>3. What has not been verified</H3>
      <P>
        The sources cited are about the yeast and ingredients, not tests of these products. The products have no clinical trial of their own for fungal acne.
        Third-party ingredient checkers currently list several La Théorie products as fungal-acne-safe; those checks are done by the sites themselves, not by us.
        Skincare choices can make skin less hospitable to the yeast; they do not diagnose or replace a dermatologist.
      </P>

      <Cta href={CTA_URL} label="See the formula">
        If you want to see a moisturiser built by leaving fatty acids out, you can look at <B>La Théorie Hydrating Gel Cream 60ml</B> on Shopee Singapore —
        a gel-cream with 0% fatty acid, made for oily, acne-prone and fungal-acne-prone skin.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'what-skincare-is-safe-for-fungal-acne',
  title: 'What skincare is safe for fungal acne?',
  description:
    'What “fungal acne safe” actually means, what to look for at each step from cleanser to sunscreen, the five ingredient groups to scan for, and a routine that suits Singapore’s humidity.',
  tldr: [
    'Fungal-acne-safe means the product leaves out what Malassezia yeast can use as food: fatty acids, plant oils and butters, their esters and polysorbates.',
    'Cleansers are easy; sunscreens and make-up are where most people get caught, because the base of the product is where the esters sit.',
    'In a humid climate, fewer layers and washing off sweat matter as much as any single product — and persistent bumps need a dermatologist.',
  ],
  cluster: 'C6',
  stage: 'explore',
  targetQueries: ['what skincare is safe for fungal acne', 'fungal acne safe skincare', 'fungal acne safe moisturizer', 'fungal acne safe products'],
  published: '2026-09-16',
  faq: [
    { q: 'What is a safe and hydrating moisturizer for fungal acne?', a: 'A gel or gel-cream that hydrates with humectants (glycerin, hyaluronic acid, panthenol) and contains no fatty acids, plant oils, fatty-acid esters or polysorbates. Squalane and silicones are generally fine because they contain no fatty acids.' },
    { q: 'Is squalane safe for fungal acne?', a: 'Generally yes. Squalane is a hydrocarbon, not a fatty acid, so it does not feed Malassezia. It is one of the few emollients that usually passes fungal-acne checks.' },
    { q: 'Is non-comedogenic the same as fungal acne safe?', a: 'No. Non-comedogenic is about pore-clogging; fungal-acne-safe is about fatty acids. A product can meet one criterion without the other, so both need checking.' },
    { q: 'Which sunscreens are fungal acne safe?', a: 'Ones whose base avoids fatty-acid esters such as isopropyl palmitate or C12–15 alkyl benzoate. The front label rarely tells you; read the full ingredient list or run it through a checker.' },
    { q: 'How long should I try a fungal-acne-safe routine before seeing a doctor?', a: 'If bumps are painful, spreading or have persisted for weeks despite changing products and washing off sweat promptly, see a dermatologist. Only a doctor can confirm whether the cause is the yeast at all.' },
  ],
  // 2026-09-16 확인 — [1] Europe PMC (PMID 24688625) · [2][3][4] Crossref
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. et al. (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. et al. (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
