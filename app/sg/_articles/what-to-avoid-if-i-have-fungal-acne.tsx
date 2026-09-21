import type { Article } from '../../vn/_lib/types';
import { SG_PRODUCT_URL } from '../_lib/site';
import { Cta } from '../../vn/_articles/_ui';

/** SG 는 브릿지가 없어 Shopee SG 상품 페이지로 직접 간다 (site.ts 주석). */
const CTA_URL = SG_PRODUCT_URL.P002;

/** 세트 SG-C3-SNS-02 (C6 교차). H1 은 PAA 원문 그대로 — `fungal acne safe ingredients` 쿼리, 2026-09-05 실측. */

const AVOID: [string, string, string][] = [
  ['Plant oils and butters rich in fatty acids', 'Olive, avocado, argan, shea and cocoa butter are mostly long-chain fatty acids — the type Malassezia grows on best', 'Olea Europaea Oil, Persea Gratissima Oil, Butyrospermum Parkii Butter'],
  ['Free fatty acids', 'Listed on the label as the acid itself', 'Oleic Acid, Palmitic Acid, Stearic Acid, Linoleic Acid'],
  ['Fatty-acid esters', 'Commonly flagged on fungal-acne lists: skin enzymes can split some esters back into fatty acids', 'Isopropyl Palmitate, Isopropyl Myristate, Glyceryl Stearate, Cetyl Palmitate'],
  ['Polysorbates', 'Emulsifiers built on fatty acids; commonly flagged', 'Polysorbate 20, 60, 80'],
  ['Lanolin', 'Wool wax; rich in fatty-acid esters', 'Lanolin, Lanolin Oil, Acetylated Lanolin'],
  ['Yeast and ferment extracts', 'Often listed as a precaution; evidence is mostly anecdotal', 'Galactomyces Ferment Filtrate, Saccharomyces Ferment'],
];

const OK: [string, string][] = [
  ['Squalane', 'A hydrocarbon, not a fatty acid. Lightweight emollient'],
  ['Glycerin · Hyaluronic Acid · Panthenol', 'Water-binding humectants; no lipid for the yeast'],
  ['Niacinamide', 'Supports oil balance and barrier; not a lipid'],
  ['Silicones (Dimethicone)', 'Not a fatty acid. Heavy for some pores, but not food for Malassezia'],
  ['Mineral oil', 'Same logic — occlusive, but contains no fatty acids. Whether it suits your pores is a separate question'],
  ['Fatty alcohols (Cetyl, Cetearyl, Stearyl Alcohol)', 'Alcohols, not acids. Generally considered fungal-acne-safe despite the similar name'],
];

const THREE: [string, string, string][] = [
  ['Regular acne (acne vulgaris)', 'Blackheads, whiteheads, pimples of different sizes', 'Sebum, dead skin cells and bacteria inside the pore'],
  ['Folliculitis (in general)', 'Inflamed hair follicles anywhere hair grows', 'Many causes: bacteria, shaving or friction, sweat, occlusion'],
  ['Malassezia folliculitis (“fungal acne”)', 'Small, uniform, often itchy bumps in clusters — forehead, hairline, chest, back', 'Overgrowth of Malassezia yeast inside the follicle'],
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-14 mb-4 scroll-mt-28 text-2xl md:text-[28px] font-semibold leading-snug text-gray-950">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-9 mb-3 text-lg md:text-xl font-semibold text-gray-900">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="my-4 text-[15px] md:text-base leading-[1.85] text-gray-700">{children}</p>;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-gray-900">{children}</strong>;
}

function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="my-7 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-gray-900">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4 font-semibold text-gray-950">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function Body() {
  return (
    <>
      <P>
        If you live in Singapore, you probably know the term already: small, even bumps across the forehead or chest that itch a little,
        come back after every humid week, and do not respond to the usual acne routine. You may have run your products through a
        fungal-acne checker and still be getting them. <B>The reason is usually not the checker. It is that two different questions are being mixed up.</B>
      </P>
      <P>
        This article goes through what to avoid if you have fungal acne — and, more usefully, <B>why those ingredients share one trait</B>,
        so you can read a label yourself instead of depending on a list.
      </P>

      <H2 id="what-it-is">First, what fungal acne is — and what it is not</H2>
      <P>
        “Fungal acne” is the everyday name for <B>Malassezia folliculitis</B>: hair follicles inflamed by an overgrowth of a yeast that
        lives on almost everyone’s skin. It looks like acne, which is why it is so often mistaken for it [4]. Three conditions get bundled
        under one word, and only the third one is what this article is about.
      </P>
      <Table head={['Condition', 'What it usually looks like', 'What it involves']}>
        {THREE.map(([name, sign, cause]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{sign}</td>
            <td className="py-3 text-gray-500">{cause}</td>
          </tr>
        ))}
      </Table>
      <P>
        <B>Not every case of folliculitis is fungal, and not every bump is about fatty acids.</B> The mechanism described below applies to
        the third row only. Telling them apart with certainty is a dermatologist’s job — this article only helps you know when to ask.
      </P>

      <H2 id="avoid">What to avoid if you have fungal acne</H2>
      <P>
        Malassezia cannot make the fatty acids it needs to live. It takes them from its surroundings — which, on your face, means sebum
        and whatever you apply [1][2]. So the ingredients to avoid are, almost without exception, <B>sources of fatty acids</B>.
      </P>
      <Table head={['Group', 'Why it matters', 'Names you will see on the label']}>
        {AVOID.map(([name, why, label]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{why}</td>
            <td className="py-3 text-gray-500">{label}</td>
          </tr>
        ))}
      </Table>

      <H3>A note on chain length — and coconut oil</H3>
      <P>
        Not all fatty acids feed the yeast equally. In culture, Malassezia grows well on <B>long-chain fatty acids</B> such as palmitic (C16)
        and oleic (C18:1) acid, and much less on shorter chains such as lauric (C12) and myristic (C14) [3]. Coconut oil is mostly lauric
        acid, which is why some people tolerate it. The reason to be careful with coconut oil on acne-prone skin is its pore-clogging
        tendency, not this mechanism.
      </P>

      <H3>What is usually fine</H3>
      <P>
        This is the part most lists skip, and it is where the two questions separate. Several ingredients that are “heavy” for pores are
        <B> not</B> food for Malassezia, because they contain no fatty acids at all.
      </P>
      <Table head={['Ingredient', 'Why it is generally considered fungal-acne-safe']}>
        {OK.map(([name, why]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 text-gray-700">{why}</td>
          </tr>
        ))}
      </Table>

      <H2 id="two-questions">Fungal-acne-safe is not the same as non-comedogenic</H2>
      <P>
        A <B>non-comedogenic</B> label answers one question: <em>does this product clog pores?</em>
      </P>
      <P>
        It does <B>not</B> answer the second question: <em>does this product contain fatty acids that Malassezia can use?</em>
      </P>
      <P>
        A moisturiser can be non-comedogenic and still be rich in fatty acids — plant oils are the usual reason. That is how someone
        chooses “the right product” and still gets the even, itchy bumps. And the reverse is also true: <B>a formula with no fatty acids is
        not automatically non-comedogenic.</B> They are two independent criteria. If your skin is prone to fungal acne, you need to check <B>both</B>.
      </P>
      <H3>And it is not the same as “fatty alcohol-free”</H3>
      <P>
        Search results mix these up constantly. <B>Fatty alcohols</B> — cetyl, cetearyl, stearyl alcohol — are waxy thickeners, not acids,
        and are generally fine for fungal acne. <B>Fatty acids</B> — oleic, palmitic, stearic acid and the oils that contain them — are the
        ones that matter here. A product can be “fatty alcohol-free” and still full of fatty acids.
      </P>

      <H2 id="research-and-product">What the research shows — and how the product is made</H2>
      <P>The three parts below are kept separate on purpose: what has been studied, what we chose when building the formula, and what has not been verified.</P>

      <H3>1. What the research shows</H3>
      <P>
        Genome sequencing found that Malassezia lacks the enzyme for making its own fatty acids and therefore depends on lipids from
        outside [1]. Later metabolic models and culture experiments confirmed that the yeast grows when specific fatty acids are
        available, with different results depending on chain length [2][3]. A 2019 study in <em>Cosmetics</em> examined how a range of
        common cosmetic ingredients affect the microorganisms that normally live on healthy skin, Malassezia among them [5].
      </P>

      <H3>2. How <span className="font-belleza font-normal">La&nbsp;Théorie</span> is formulated</H3>
      <P>
        This is why the <span className="font-belleza">La&nbsp;Théorie</span> range is built on a <B>0% Fatty Acid</B> formula. Rather than
        aiming only at “does not clog pores”, it removes the group of ingredients that Malassezia uses — a choice about <B>ingredients</B>,
        made for skin that has already tried several non-comedogenic products without finding a fit. Used in more than 20 dermatology
        clinics and aesthetic centres in Korea.
      </P>

      <H3>3. What has not been verified</H3>
      <P>
        The studies cited above are about <B>ingredients and the yeast</B>, not tests of this product. The product has no clinical trial of
        its own for fungal acne or folliculitis. Third-party ingredient checkers currently list several La Théorie products as
        fungal-acne-safe; those checks are done by the sites themselves, not by us. And, as above, “no fatty acids” does not guarantee a
        product suits every skin, and it does not replace the non-comedogenic criterion.
      </P>

      <H2 id="read-a-label">How to read a label for fungal acne</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">1.</span>
          <span><B>Read the first 5–7 lines.</B> Ingredients are listed by amount. An oil or butter in the top lines is a large share of the formula.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">2.</span>
          <span><B>Look for “Oil”, “Butter” and Latin plant names.</B> <em>Olea Europaea</em> is olive, <em>Persea Gratissima</em> is avocado, <em>Butyrospermum Parkii</em> is shea.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">3.</span>
          <span><B>Separate acids from alcohols.</B> <em>Stearic Acid</em> is a fatty acid. <em>Stearyl Alcohol</em> is a fatty alcohol. Only the first one is the concern.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">4.</span>
          <span><B>Do not stop at “non-comedogenic”.</B> If your bumps are small, even, itchy and clustered, check the fatty-acid question as well.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">5.</span>
          <span><B>Patch-test first.</B> Apply to the jawline or inner wrist and wait 24–48 hours — humidity makes reactions show up faster.</span>
        </li>
      </ol>

      <Cta href={CTA_URL} label="See the formula">
        If you want to see a formula built by removing fatty acids, you can look at <B>La Théorie Hydrating Gel Cream 60ml</B> on Shopee Singapore —
        a gel-cream with 0% fatty acid, made for oily, acne-prone and fungal-acne-prone skin.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'what-to-avoid-if-i-have-fungal-acne',
  title: 'What to avoid if I have fungal acne?',
  description:
    'The ingredients to avoid with fungal acne share one trait: they are sources of fatty acids, which Malassezia yeast cannot make on its own. What that means for reading a label — and why non-comedogenic is not the same thing.',
  tldr: [
    'Fungal acne is Malassezia folliculitis — a yeast, not bacteria — and it is not the same as regular acne.',
    'Malassezia cannot make its own fatty acids, so the ingredients to avoid are plant oils, butters, free fatty acids, their esters and polysorbates.',
    '“Non-comedogenic” and “fatty alcohol-free” do not tell you whether a product contains fatty acids — that is a separate question.',
  ],
  cluster: 'C3',
  stage: 'concept',
  targetQueries: [
    'what to avoid if i have fungal acne',
    'fungal acne safe ingredients',
    'fungal acne ingredients to avoid',
    'fungal acne safe moisturizer',
  ],
  published: '2026-09-15',
  faq: [
    {
      q: 'Is fungal acne the same as regular acne?',
      a: 'No. Regular acne involves sebum, dead skin cells and bacteria inside the pore. Fungal acne is Malassezia folliculitis — hair follicles inflamed by an overgrowth of yeast. The bumps tend to be small, uniform, itchy and clustered on the forehead, chest or back. A dermatologist can tell them apart.',
    },
    {
      q: 'Is a non-comedogenic moisturiser enough for fungal acne?',
      a: 'Not necessarily. Non-comedogenic describes pore-clogging potential; it says nothing about whether the product contains fatty acids that Malassezia can use. They are two independent criteria — and a fatty-acid-free formula is not automatically non-comedogenic either.',
    },
    {
      q: 'Are fatty alcohols like cetyl alcohol a problem for fungal acne?',
      a: 'Generally no. Cetyl, cetearyl and stearyl alcohol are waxy thickeners, not acids, and are usually considered fungal-acne-safe. The ingredients that matter are fatty acids — oleic, palmitic, stearic acid — and the plant oils and esters that contain them.',
    },
    {
      q: 'Does coconut oil feed fungal acne?',
      a: 'Less than most oils. Coconut oil is mostly lauric acid (C12), and in culture Malassezia grows far less on short-chain fatty acids than on palmitic (C16) or oleic (C18:1) acid. The reason to be careful with coconut oil is its pore-clogging tendency, which is a separate issue.',
    },
    {
      q: 'How do I know if my bumps are fungal acne?',
      a: 'Typical signs are small bumps of the same size, in clusters, often itchy, on the forehead, hairline, chest or back — and a routine for regular acne that does not help. To be sure, see a dermatologist; the appearance alone is easy to misread.',
    },
  ],
  // VN C3 1편과 같은 5건. 2026-09-15 Crossref 로 실재 확인.
  references: [
    {
      label: 'Xu J. et al. (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.',
      url: 'https://doi.org/10.1073/pnas.0706756104',
    },
    {
      label: 'Triana S. et al. (2017). Lipid metabolic versatility in Malassezia spp. yeasts studied through metabolic modeling. Frontiers in Microbiology 8:1772.',
      url: 'https://doi.org/10.3389/fmicb.2017.01772',
    },
    {
      label: 'Liebregts J. et al. (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.',
      url: 'https://doi.org/10.1093/femsyr/foaf043',
    },
    {
      label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.',
      url: 'https://doi.org/10.3390/jof11090662',
    },
    {
      label: 'Dobler D. et al. (2019). Impact of Selected Cosmetic Ingredients on Common Microorganisms of Healthy Human Skin. Cosmetics 6(3):45.',
      url: 'https://doi.org/10.3390/cosmetics6030045',
    },
  ],
  Body,
};
