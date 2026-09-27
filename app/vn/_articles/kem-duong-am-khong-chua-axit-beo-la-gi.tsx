import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from './_ui';

/**
 * C6 롱테일 `không chứa axit béo` (VN 키워드 클러스터.md 2장) · 좁은 질문 V4 `kem dưỡng ẩm không chứa axit béo`.
 * V4 는 PAA 가 없다(2026-09-27 기준선) — 쿼리 문구를 H1 맨 앞에 그대로 둔다.
 * 2026-09-27 결정 36 개정 — VN 은 「우리 URL 인용」만 센다. 이 글이 V4 AI 개요의 출처(지금은 GoSupps · eBay) 자리를 노린다.
 * 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md` 5-2 ②.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C6&p=P002`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const LABEL: [string, string, string][] = [
  ['Axit béo', 'Stearic Acid, Palmitic Acid, Lauric Acid, Myristic Acid, Oleic Acid, Linoleic Acid', 'Hyaluronic Acid, Salicylic Acid, Lactic Acid không phải axit béo'],
  ['Dầu và bơ thực vật', 'Olea Europaea (ô liu), Cocos Nucifera (dừa), Butyrospermum Parkii (bơ hạt mỡ) … Oil / Butter', 'Dầu thực vật chứa sẵn axit béo'],
  ['Este của axit béo', 'Isopropyl Palmitate, Isopropyl Myristate, Ethylhexyl Palmitate, Glyceryl Stearate', 'Tên thường ghép tên axit béo với đuôi -ate'],
  ['Polysorbate', 'Polysorbate 20 / 60 / 80', 'Chất nhũ hóa'],
  ['Lanolin', 'Lanolin, Lanolin Oil', 'Chiết xuất từ lông cừu, giàu axit béo'],
];

function Body() {
  return (
    <>
      <P>
        <B>Kem dưỡng ẩm không chứa axit béo</B> là kem dưỡng không có axit béo trong công thức — và thường cũng không có dầu, bơ thực vật,
        este của axit béo hay polysorbate, vì đó là những dạng khác của cùng nhóm chất này. Người ta tìm loại kem này vì một lý do rất cụ thể:
        nấm men <B>Malassezia</B>, sống trên da của hầu hết mọi người, <B>không tự tạo được axit béo</B> mà lấy từ bã nhờn và từ những gì bạn thoa lên da [3][4].
      </P>

      <H2 id="vi-sao">Vì sao axit béo quan trọng với da dễ bị mụn nấm</H2>
      <P>
        Khi Malassezia phát triển quá mức trong nang lông, da nổi những nốt nhỏ đều nhau, mọc thành cụm và hay ngứa — thường gọi là <B>mụn nấm</B>,
        tên y khoa là viêm nang lông do Malassezia. Tình trạng này hay bị nhầm với mụn trứng cá thông thường [1][2]. Cách phân biệt ba dạng hay bị gọi chung
        một tên có trong bài{' '}
        <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>
      </P>
      <P>
        Phần lớn kem dưỡng tạo cảm giác mềm mượt nhờ dầu, bơ và este — cũng chính là nguồn axit béo cho nấm men. Vì vậy với làn da này,
        câu hỏi không phải “có nên dưỡng ẩm không” mà là <B>“dưỡng ẩm bằng gì”</B>. Chuyện có nên dưỡng ẩm hay không được bàn trong bài{' '}
        <Link href="/vn/da-dau-mun-co-nen-duong-am-khong" className={LINK}>Da dầu mụn có nên dưỡng ẩm không?</Link>
      </P>

      <H2 id="ai-nen-dung">Ai nên dùng kem dưỡng ẩm không chứa axit béo</H2>
      <ul className="my-6 space-y-3 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Da hay nổi <B>nốt nhỏ đều nhau, ngứa</B> ở trán, hai bên má, ngực hoặc lưng — dấu hiệu thường gặp của mụn nấm (chỉ bác sĩ da liễu mới xác định được)</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Da dầu mụn sống trong khí hậu nóng ẩm, dễ thấy bí sau khi thoa kem dưỡng</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Da đã thử nhiều kem “non-comedogenic” mà vẫn nổi nốt nhỏ li ti</span></li>
      </ul>
      <P>
        Nếu da bạn không gặp những vấn đề này, kem dưỡng có axit béo không có gì sai — axit béo là một phần của hàng rào da khỏe mạnh.
        Loại kem này dành cho những làn da mà chính nhóm chất đó đang là nguồn thức ăn cho nấm men.
      </P>

      <H2 id="doc-thanh-phan">Cách đọc bảng thành phần trong 60 giây</H2>
      <Table head={['Nhóm cần tránh', 'Tên thường thấy trên nhãn', 'Ghi chú']}>
        {LABEL.map(([group, names, note]) => (
          <tr key={group} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{group}</td>
            <td className="py-3 pr-4 text-gray-500">{names}</td>
            <td className="py-3 text-gray-700">{note}</td>
          </tr>
        ))}
      </Table>
      <P>
        Những thành phần thường ổn: chất giữ ẩm gốc nước (glycerin, sodium hyaluronate, panthenol), squalane, silicone như dimethicone,
        và <B>cồn béo</B> như cetearyl alcohol — cồn béo không phải axit béo. Nếu không chắc, hãy dán bảng thành phần vào một trang kiểm tra thành phần:
        các trang này đánh giá mức an toàn với mụn nấm theo từng sản phẩm.
      </P>

      <H2 id="khong-dong-nghia">“Không chứa axit béo” không đồng nghĩa với…</H2>
      <ul className="my-6 space-y-3 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span><B>Non-comedogenic</B> — nhãn này nói về khả năng gây bít tắc lỗ chân lông, không nói về axit béo. Hai tiêu chí cần kiểm tra riêng; danh sách thành phần gây bít tắc có trong bài <Link href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className={LINK}>Da mụn không nên dùng thành phần gì?</Link></span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span><B>“Oil-free” trên vỏ hộp</B> — sản phẩm không có dầu vẫn có thể chứa este hoặc polysorbate</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span><B>Thuốc</B> — kem dưỡng không thay cho chẩn đoán hay hướng xử lý của bác sĩ da liễu</span></li>
      </ul>

      <H2 id="cach-dung">Dùng thế nào trong khí hậu nóng ẩm</H2>
      <P>
        Một lớp mỏng là đủ, thoa khi da còn hơi ẩm sau khi rửa mặt hoặc dùng toner. Với lưng và ngực — nơi mụn nấm hay xuất hiện — cũng chỉ cần một lớp mỏng.
        Tắm hoặc lau khô ngay sau khi đổ mồ hôi quan trọng không kém loại kem bạn chọn, vì nóng, ẩm và bí là điều kiện nấm men ưa thích [1].
        Nếu nốt viêm đau, lan rộng hoặc kéo dài nhiều tuần, hãy đến khám.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Các tổng quan y khoa mô tả viêm nang lông do Malassezia là tình trạng hay bị nhầm với mụn trứng cá, với nốt nhỏ đều nhau, ngứa, ở vùng tiết nhiều dầu [1][2].
        Giải mã bộ gen cho thấy Malassezia thiếu enzyme tổng hợp axit béo và phụ thuộc vào lipid từ bên ngoài [3]; thí nghiệm nuôi cấy xác nhận nấm men này
        phát triển khi có sẵn từng loại axit béo nhất định, khác nhau theo độ dài chuỗi [4].
      </P>
      <H3>2. Kem dưỡng ẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem Dưỡng Ẩm <span className="font-belleza">La&nbsp;Théorie</span> Hydrating Gel Cream là gel-cream xây dựng trên công thức <B>0% Fatty Acid</B> —
        không chứa axit béo. Kem cấp ẩm bằng panthenol và sodium hyaluronate, làm mềm bằng phytosqualane (squalane nguồn gốc thực vật) — đúng cách kết hợp
        mà bài này mô tả. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các nghiên cứu trích dẫn là về nấm men và thành phần, không phải thử nghiệm trên sản phẩm này. Các trang kiểm tra thành phần hiện xếp sản phẩm này
        vào nhóm an toàn với mụn nấm (fungal-acne-safe); đó là đánh giá của chính các trang đó, không phải của chúng tôi. Mỹ phẩm không thay cho việc khám.
      </P>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn xem một kem dưỡng ẩm không chứa axit béo, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        gel-cream 0% axit béo, dành cho da mụn, da dễ bị viêm nang lông và da nhạy cảm.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'kem-duong-am-khong-chua-axit-beo-la-gi',
  title: 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?',
  description:
    'Kem dưỡng ẩm không chứa axit béo là gì, vì sao da dễ bị mụn nấm và viêm nang lông cần để ý, và cách tự đọc bảng thành phần trong 60 giây.',
  tldr: [
    'Kem dưỡng ẩm không chứa axit béo không có axit béo trong công thức — và thường cũng không có dầu, bơ thực vật, este của axit béo hay polysorbate.',
    'Nó dành cho da dễ gặp mụn nấm (viêm nang lông do Malassezia) và da dầu mụn trong khí hậu nóng ẩm, vì nấm men Malassezia dùng axit béo làm thức ăn.',
    '“Không chứa axit béo” khác “non-comedogenic” và khác “oil-free”: hãy đọc bảng thành phần, và đi khám nếu nốt đau, lan rộng hoặc kéo dài.',
  ],
  cluster: 'C6',
  stage: 'compare',
  targetQueries: [
    'kem dưỡng ẩm không chứa axit béo',
    'kem dưỡng không chứa axit béo cho da mụn nấm',
    'kem dưỡng ẩm cho da mụn nấm',
    'kem dưỡng cho da viêm nang lông',
  ],
  // 🔴 게시하는 날 날짜로 바꾼다
  published: '2026-09-28',
  faq: [
    { q: 'Kem dưỡng ẩm không chứa axit béo có tác dụng gì?', a: 'Nó cấp ẩm cho da mà không thêm axit béo — nguồn thức ăn của nấm men Malassezia. Vì vậy nó phù hợp với da dễ gặp mụn nấm và viêm nang lông do Malassezia. Nó không phải thuốc và không thay cho chẩn đoán của bác sĩ da liễu.' },
    { q: 'Kem dưỡng không chứa axit béo có khác non-comedogenic không?', a: 'Có. Non-comedogenic nói về khả năng gây bít tắc lỗ chân lông; không chứa axit béo nói về việc công thức có axit béo hay không. Một sản phẩm có thể đạt tiêu chí này mà không đạt tiêu chí kia.' },
    { q: 'Cetearyl alcohol có phải axit béo không?', a: 'Không. Cetearyl alcohol và cetyl alcohol là cồn béo, không phải axit béo, và thường được xem là ổn với da dễ bị mụn nấm.' },
    { q: 'Axit hyaluronic có phải axit béo không?', a: 'Không. Axit hyaluronic là một chuỗi đường giữ nước, không phải axit béo, nên nó cấp ẩm mà không làm thức ăn cho nấm men Malassezia.' },
    { q: 'Squalane có an toàn cho da bị mụn nấm không?', a: 'Thường là có. Squalane là hydrocarbon, không phải axit béo, nên không làm thức ăn cho Malassezia. Đây là một trong số ít chất làm mềm thường vượt qua các trang kiểm tra mụn nấm.' },
  ],
  // 2026-09-16 확인분 재사용 — [1] Europe PMC (PMID 24688625 · PMC3970831) · [2][3][4] Crossref (VN C3 · C6 글과 같은 문헌)
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. và cộng sự (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. và cộng sự (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
