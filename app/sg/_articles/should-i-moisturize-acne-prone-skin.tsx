import type { Article } from '../../vn/_lib/types';
import { SG_PRODUCT_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from '../../vn/_articles/_ui';

/** C2 · 세트 SG-C2-SNS-01 · PAA 원문 `moisturizer for acne-prone skin` (2026-09-05). H1 은 원문 그대로. */
const CTA_URL = SG_PRODUCT_URL.P002;

const TEXTURE: [string, string, string][] = [
  ['Gel', 'Mostly water and humectants. Little or no oil', 'Oily and acne-prone skin; humid climates'],
  ['Gel-cream', 'A gel with a small amount of emollient. More hydrating than a plain gel, still light', 'Dehydrated oily skin; combination skin'],
  ['Lotion', 'A light emulsion — some oil, not much', 'Normal skin; oily skin in air-conditioned offices'],
  ['Rich cream', 'More oil and occlusives', 'Dry skin — usually too heavy for oily, acne-prone skin'],
];

function Body() {
  return (
    <>
      <P>
        The logic behind skipping moisturiser sounds reasonable: <em>my skin is already oily — adding cream will only make it greasier and break out more.</em>{' '}
        So a lot of people in Singapore cleanse, dab on a spot product and stop there. The usual result is skin that is shiny by lunchtime and flaky around the nose — and the breakouts do not improve.
      </P>
      <P>
        The short answer: <B>yes, acne-prone skin should be moisturised.</B> The longer, more useful answer is about <B>what you moisturise with</B>.
      </P>

      <H2 id="oil-vs-water">Oily and dehydrated are not opposites</H2>
      <P>
        “Oily” describes how much sebum your glands produce. “Hydrated” describes how much water the outer layer of skin holds. One does not replace the other:
        skin can produce plenty of sebum while its outer layer is short of water. That state — <B>dehydrated oily skin</B> — is far more common than people think,
        especially with frequent washing, strong cleansers and long hours in air-conditioning.
      </P>
      <P>
        When the outer layer is short of water, the skin barrier is less stable, the skin reacts more easily, and the sebaceous glands are commonly described as
        compensating with more oil. That is why “skipping moisturiser to be less oily” so often backfires.
      </P>

      <H2 id="guidelines">What the professional guidance says</H2>
      <P>
        The American Academy of Dermatology’s acne guidelines note that non-comedogenic moisturisers can make skin more comfortable alongside drying actives,
        and place moisturising within everyday acne care rather than outside it [2]. A 2014 review of moisturisers for acne goes one step further:
        the question is not <em>whether</em> to moisturise, but <B>what the moisturiser is made of</B> [1].
      </P>

      <H2 id="texture">Choosing a texture: gel or cream?</H2>
      <Table head={['Texture', 'What is inside', 'Usually suits']}>
        {TEXTURE.map(([name, what, fit]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{what}</td>
            <td className="py-3 text-gray-500">{fit}</td>
          </tr>
        ))}
      </Table>
      <P>
        For oily, acne-prone skin in Singapore’s humidity, a <B>gel or gel-cream</B> is usually the sensible choice: it hydrates with humectants
        (glycerin, hyaluronic acid, panthenol) instead of laying oil on top. The skin does not feel weighed down, and the midday sweat does not turn the layer into a seal.
      </P>

      <H3>Texture is not the whole story</H3>
      <P>
        Two products both labelled “gel” can be completely different inside. What the texture label does not tell you is whether the formula contains{' '}
        <B>fatty acids</B> — the group of ingredients the Malassezia yeast on your skin uses as food. If you get small, even, itchy bumps on the forehead,
        chest or back, that is the second question to ask, after texture. It is covered in{' '}
        <a href="/sg/what-to-avoid-if-i-have-fungal-acne" className="font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">
          What to avoid if I have fungal acne?
        </a>
      </P>

      <H2 id="how-to">How to moisturise oily, acne-prone skin</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Cleanse gently.</B> A low-pH cleanser without a harsh foam. A “squeaky clean” feeling means too much of the skin’s own lipid has been removed.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Apply to slightly damp skin.</B> Humectants work better when there is water on the surface to hold.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>A thin, even layer.</B> For a gel-cream, a pea-sized amount is usually enough for the whole face. More layers do not mean more hydration.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Order: toner → moisturiser → essence (if you use one).</B> The essence is an add-on step, not a required one.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Give it time.</B> Skin takes a few weeks to settle into a new routine; changing products every few days means you never learn what is working.</span></li>
      </ol>

      <H2 id="research-and-product">What the research shows — and how the product is made</H2>
      <H3>1. What the research shows</H3>
      <P>
        The 2014 review in the <em>Journal of Clinical and Aesthetic Dermatology</em> describes the ingredient groups in moisturisers for acne — humectants, emollients,
        occlusives — and notes that the choice of ingredients decides whether a moisturiser suits acne-prone skin [1]. The American Academy of Dermatology guidelines (2016)
        count moisturising as part of everyday acne care [2].
      </P>
      <H3>2. How <span className="font-belleza font-normal">La&nbsp;Théorie</span> is formulated</H3>
      <P>
        The <span className="font-belleza">La&nbsp;Théorie</span> moisturiser is a gel-cream: it hydrates with humectants and leaves out fatty acids and unnecessary oils
        under the <B>0% Fatty Acid</B> formula. It is made for dehydrated oily skin and skin prone to folliculitis — skin that found rich creams too heavy and skipping
        moisturiser too drying. Used in more than 20 dermatology clinics and aesthetic centres in Korea.
      </P>
      <H3>3. What has not been verified</H3>
      <P>
        The sources cited are about moisturising acne-prone skin in general, not tests of this product. The product has no clinical trial of its own.
        No texture suits every skin; if yours is genuinely dry, a richer product may serve you better.
      </P>

      <Cta href={CTA_URL} label="See the formula">
        If you want to see a gel-cream built by leaving fatty acids out, you can look at <B>La Théorie Hydrating Gel Cream 60ml</B> on Shopee Singapore —
        made for dehydrated oily, acne-prone and fungal-acne-prone skin.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'should-i-moisturize-acne-prone-skin',
  title: 'Should I moisturize acne prone skin?',
  description:
    'Yes — but the real question is what with. Why oily skin still gets dehydrated, gel versus cream in Singapore’s humidity, and what a texture label does not tell you: fatty acids.',
  tldr: [
    'Oily and dehydrated are not opposites; skin can be shiny and short of water at the same time.',
    'For oily, acne-prone skin in a humid climate, a gel or gel-cream that hydrates with humectants usually suits better than a rich cream.',
    'Texture does not tell you whether a product contains fatty acids — for fungal-acne-prone skin, that is the second question.',
  ],
  cluster: 'C2',
  stage: 'explore',
  targetQueries: ['should i moisturize acne prone skin', 'does acne prone skin need moisturizer', 'moisturizer for acne-prone skin', 'is moisturizing gel good for oily skin'],
  published: '2026-09-16',
  faq: [
    { q: 'Does oily skin need moisturiser?', a: 'Yes. Oily skin can still be short of water in its outer layer, and when it is, the skin barrier is less stable and the skin reacts more easily. Choose a light texture such as a gel or gel-cream.' },
    { q: 'Will skipping moisturiser make my skin less oily?', a: 'Usually not. When skin is dried out, the sebaceous glands are commonly described as compensating with more oil. Skipping moisturiser tends to give shiny, flaky skin rather than less oil.' },
    { q: 'Is gel or cream better for oily, acne-prone skin?', a: 'In a humid climate, a gel or gel-cream usually suits better than a rich cream because it hydrates without a heavy oil layer. Genuinely dry skin may need a richer texture.' },
    { q: 'Can a moisturiser cause breakouts?', a: 'It depends on the ingredients, not the texture. Mineral oil, coconut oil, olive oil and lanolin are common pore-clogging groups; for fungal-acne-prone skin, check for fatty acids as well.' },
    { q: 'Do I apply moisturiser before or after essence?', a: 'With the La Théorie range, the order is toner → gel cream → essence, because the essence is an enhancer rather than a required step. For other brands, follow the maker’s instructions.' },
  ],
  // 2026-09-16 확인 — [1] Europe PMC (PMID 24847408 · PMC4025519) · [2] Crossref DOI
  references: [
    { label: 'Chularojanamontri L. et al. (2014). Moisturizers for Acne: What are their Constituents? Journal of Clinical and Aesthetic Dermatology 7(5):36–44.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4025519/' },
    { label: 'Zaenglein AL. et al. (2016). Guidelines of care for the management of acne vulgaris. Journal of the American Academy of Dermatology 74(5):945–973.', url: 'https://doi.org/10.1016/j.jaad.2015.12.037' },
  ],
  Body,
};
