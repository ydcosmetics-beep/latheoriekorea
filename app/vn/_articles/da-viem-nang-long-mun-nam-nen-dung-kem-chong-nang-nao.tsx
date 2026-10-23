import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C6 (1차 범위 C6 3편째) · SG `/sg/what-sunscreens-are-safe-for-fungal-acne` (S1) 의 VN 대응판.
 * 진입 어휘 `viêm nang lông` 을 H1 앞에, 롱테일 `mụn nấm` 을 뒤에 둔다 (VN 키워드 클러스터.md 2장).
 * 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md` · 제품 P004 (products.ts).
 * 🔴 SPF · PA 는 우리 자료에 값이 없다 — 실물 · 본사 확인 전에는 쓰지 않는다 (실행판 7장 3).
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 */
const CTA_URL = `${BRIDGE_URL}?s=seo&k=LATHWEB&cp=C6&p=P004`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const SCAN: [string, string, string][] = [
  ['Este của axit béo', 'Isopropyl Palmitate, Isopropyl Myristate, Ethylhexyl Palmitate, Glyceryl Stearate', 'Giúp màng lọc dàn đều, tạo cảm giác nhẹ'],
  ['Dầu và bơ thực vật', 'Cocos Nucifera (dừa) Oil, Helianthus Annuus (hướng dương) Seed Oil, Butyrospermum Parkii (bơ hạt mỡ) Butter', 'Thêm vào cho cảm giác “nuôi dưỡng” hay lớp hoàn thiện căng bóng'],
  ['Polysorbate', 'Polysorbate 20 / 60 / 80', 'Chất nhũ hóa'],
  ['Axit béo', 'Stearic Acid, Palmitic Acid, Lauric Acid', 'Làm đặc hoặc ổn định công thức'],
];

function Body() {
  return (
    <>
      <P>
        Kem chống nắng an toàn cho da dễ bị viêm nang lông do nấm men — thường gọi là <B>mụn nấm</B> — là kem mà <B>toàn bộ công thức</B>, không chỉ màng lọc UV,
        không chứa những gì nấm men Malassezia dùng làm thức ăn: axit béo, dầu và bơ thực vật, este của axit béo và polysorbate [3][4].
        Loại này khó tìm hơn tưởng tượng, vì kem chống nắng là bước mà các chất đó hay nằm sẵn trong phần nền.
      </P>

      <H2 id="vi-sao-kho">Vì sao kem chống nắng là bước quy trình hay “vỡ”</H2>
      <P>
        Màng lọc UV phải được hòa tan hoặc phân tán, dàn thành một lớp mỏng đều và dễ chịu suốt cả ngày. Nhiều công thức dựa vào este và dầu làm mềm để
        làm việc đó — nên một kem chống nắng có màng lọc hoàn toàn ổn vẫn có thể bị đánh dấu vì phần nền. Sữa rửa mặt và nước cân bằng hiếm khi gặp chuyện này;
        kem chống nắng và kem nền thì hay gặp. Các bước còn lại của quy trình có trong bài{' '}
        <Link href="/vn/da-bi-mun-nam-nen-dung-my-pham-gi" className={LINK}>Da bị mụn nấm nên dùng mỹ phẩm gì?</Link>
      </P>

      <H2 id="doc-nhan">Cần dò gì trên nhãn kem chống nắng</H2>
      <Table head={['Nhóm', 'Tên có thể thấy', 'Vì sao có trong công thức']}>
        {SCAN.map(([group, names, why]) => (
          <tr key={group} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{group}</td>
            <td className="py-3 pr-4 text-gray-500">{names}</td>
            <td className="py-3 text-gray-700">{why}</td>
          </tr>
        ))}
      </Table>
      <P>
        Cồn béo như cetearyl alcohol, silicone như dimethicone và chất giữ ẩm như glycerin thường ổn. Nếu không chắc một cái tên, hãy dán toàn bộ bảng thành phần
        vào một trang kiểm tra thành phần — các trang này đánh giá mức an toàn với mụn nấm theo từng sản phẩm. Cách đọc nhãn chung có trong bài{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì?</Link>
      </P>

      <H2 id="vat-ly-hay-hoa-hoc">Kem chống nắng vật lý hay hóa học?</H2>
      <P>
        <B>Loại màng lọc ít quan trọng hơn phần nền.</B> Zinc oxide và titanium dioxide là khoáng chất, không làm thức ăn cho nấm men, nhưng thường được phân tán
        trong este hoặc dầu; màng lọc hóa học cũng hay được hòa tan trong cùng kiểu nền đó. Loại nào cũng có thể an toàn hoặc không — bảng thành phần đầy đủ mới quyết định.
      </P>

      <H2 id="dung-hang-ngay">Dùng kem chống nắng mỗi ngày ở Việt Nam khi da dễ bị mụn nấm</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Dùng mỗi ngày.</B> Mụn nấm không phải lý do để bỏ chống nắng; nó là lý do để chọn công thức cẩn thận.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Làm theo hướng dẫn trên vỏ hộp.</B> Thoa đúng lượng và thoa lại theo hướng dẫn, nhất là sau khi đổ mồ hôi.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Buổi tối rửa sạch bằng sữa rửa mặt dạng gel hoặc bọt</B>, không dùng dầu hay sáp tẩy trang — chúng thường làm từ dầu thực vật hoặc este của axit béo.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Tắm hoặc lau khô sau khi đổ nhiều mồ hôi.</B> Nóng, ẩm và bí là điều kiện nấm men ưa thích [1].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Đi khám nếu tình trạng kéo dài.</B> Nốt đau, lan rộng hoặc kéo dài nhiều tuần vượt quá những gì việc chọn kem chống nắng làm được. Cách phân biệt các dạng viêm nang lông có trong bài <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link></span></li>
      </ol>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Viêm nang lông do Malassezia hay bị nhầm với mụn trứng cá và thường xuất hiện dưới dạng nốt nhỏ đều nhau, ngứa, ở vùng tiết nhiều dầu [1][2].
        Giải mã bộ gen cho thấy Malassezia thiếu enzyme tổng hợp axit béo và phụ thuộc vào lipid từ bên ngoài [3]; thí nghiệm nuôi cấy xác nhận nấm men này
        phát triển khi có sẵn từng loại axit béo nhất định, khác nhau theo độ dài chuỗi [4].
      </P>
      <H3>2. Kem chống nắng <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem Chống Nắng <span className="font-belleza">La&nbsp;Théorie</span> Sunscreen 50ml thuộc cùng dòng <B>0% Fatty Acid</B> với gel-cream và sữa rửa mặt.
        Công thức có thêm niacinamide và adenosine. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các nghiên cứu trích dẫn là về nấm men và thành phần, không phải thử nghiệm trên sản phẩm này, và bài viết không đánh giá khả năng chống tia UV — về chỉ số chống nắng
        và cách dùng, hãy làm theo vỏ hộp. Các trang kiểm tra thành phần hiện xếp kem chống nắng này vào nhóm an toàn với mụn nấm và không có thành phần gây bít tắc thường gặp;
        đó là đánh giá của chính các trang đó, không phải của chúng tôi. Mỹ phẩm không chẩn đoán và không thay cho bác sĩ da liễu.
      </P>

      <Cta href={CTA_URL} label="Xem công thức" image="/vn-sg/p004-sunscreen.webp" alt="La Théorie Sunscreen 50ml">
        Nếu bạn muốn một kem chống nắng thuộc dòng sản phẩm bỏ axit béo, có thể tham khảo <B>Kem Chống Nắng La Théorie Sunscreen 50ml</B> —
        kem chống nắng không axit béo cho da có vấn đề.
      </Cta>

      <ReadMore
        links={[
          ['/vn/da-bi-mun-nam-nen-dung-my-pham-gi', 'Da bị mụn nấm nên dùng mỹ phẩm gì?'],
          ['/vn/kem-duong-am-khong-chua-axit-beo-la-gi', 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?'],
          ['/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao', 'Da dễ bị viêm nang lông thì chăm sóc thế nào?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'da-viem-nang-long-mun-nam-nen-dung-kem-chong-nang-nao',
  title: 'Da dễ bị viêm nang lông, mụn nấm nên dùng kem chống nắng nào?',
  description:
    'Kem chống nắng là bước hay làm “vỡ” quy trình của da mụn nấm: este và dầu nằm ở phần nền, không phải ở màng lọc. Cần dò gì trên nhãn và cách dùng mỗi ngày.',
  tldr: [
    'Kem chống nắng an toàn cho da mụn nấm không có axit béo, dầu thực vật, este của axit béo và polysorbate trong toàn bộ công thức — không chỉ màng lọc UV.',
    'Đây là bước quy trình hay “vỡ” nhất, vì este và dầu là cách phổ biến để màng lọc dàn đều và có cảm giác nhẹ.',
    'Vật lý hay hóa học ít quan trọng hơn phần nền: đọc toàn bộ bảng thành phần, dùng mỗi ngày, và buổi tối rửa sạch không dùng dầu tẩy trang.',
  ],
  cluster: 'C6',
  stage: 'compare',
  targetQueries: [
    'kem chống nắng cho da viêm nang lông',
    'kem chống nắng cho da mụn nấm',
    'kem chống nắng không chứa axit béo',
    'da mụn nấm có nên dùng kem chống nắng không',
  ],
  published: '2026-10-11',
  reviewer: 'jeon-ji-seung',
  reviewedOn: '2026-10-19',
  faq: [
    { q: 'Da bị mụn nấm có nên dùng kem chống nắng không?', a: 'Có. Mụn nấm không phải lý do để bỏ chống nắng; hãy chọn kem mà toàn bộ công thức không có axit béo, dầu, este của axit béo hay polysorbate, và buổi tối rửa sạch bằng sữa rửa mặt dạng gel hoặc bọt thay vì dầu tẩy trang.' },
    { q: 'Kem chống nắng vật lý có an toàn cho da mụn nấm hơn không?', a: 'Không nhất thiết. Zinc oxide và titanium dioxide không làm thức ăn cho Malassezia, nhưng thường được phân tán trong este hoặc dầu, nên kem chống nắng vật lý chỉ an toàn khi bảng thành phần đầy đủ cũng an toàn.' },
    { q: 'Kem chống nắng có gây mụn nấm không?', a: 'Kem chống nắng không tạo ra nấm men, nhưng một công thức giàu este hoặc dầu, thoa cả ngày trong nóng và mồ hôi, có thể cho nấm men thêm thức ăn. Công thức an toàn với mụn nấm và rửa sạch buổi tối giúp giảm phần đó.' },
    { q: 'Da mụn nấm nên tẩy kem chống nắng bằng gì?', a: 'Dùng sữa rửa mặt dạng gel hoặc bọt thay vì dầu hay sáp tẩy trang, vì những loại này thường làm từ dầu thực vật hoặc este của axit béo. Với kem chống nắng chống nước, rửa lần hai nhẹ nhàng bằng cùng sữa rửa mặt sẽ giúp ích.' },
    { q: 'Kem chống nắng non-comedogenic có an toàn cho da mụn nấm không?', a: 'Không nhất thiết. Non-comedogenic nói về khả năng gây bít tắc lỗ chân lông; an toàn với mụn nấm nói về axit béo và este. Hãy kiểm tra bảng thành phần đầy đủ cho cả hai.' },
  ],
  // 2026-09-16 확인분 재사용 — [1] Europe PMC (PMID 24688625 · PMC3970831) · [2][3][4] Crossref (SG 선크림 글과 같은 문헌)
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. và cộng sự (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. và cộng sự (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
