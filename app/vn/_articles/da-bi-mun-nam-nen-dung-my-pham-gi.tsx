import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL, SHOPEE_VN_STORE } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C3 · 증상 질문 「Da bị mụn nấm nên dùng mỹ phẩm gì?」 — SG `/sg/what-skincare-is-safe-for-fungal-acne`
 * (Search Console AI 기능 노출 58%, 증상 질문 → 직답 형식)의 VN 대응판. 단계별 「적합성」이 중심이라 C3 로 둔다
 * (1차 범위 C6 3편은 이미 2편 + 선크림 글로 찬다).
 * 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md`.
 * 진입 어휘는 `viêm nang lông` 을 본문 첫 문단에 같이 둔다 (VN 키워드 클러스터.md 2장 — mụn nấm 단독 앵커 금지).
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C3&p=P002`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const BY_STEP: [string, string, string][] = [
  ['Sữa rửa mặt', 'Dạng gel hoặc bọt nhẹ, pH thấp', 'Dầu tẩy trang, sáp tẩy trang (cleansing balm) — thường làm từ dầu thực vật hoặc este của axit béo'],
  ['Nước cân bằng', 'Gốc nước, có chất giữ ẩm như glycerin, panthenol', 'Toner có thêm dầu hoặc este “nuôi dưỡng”'],
  ['Kem dưỡng ẩm', 'Gel hoặc gel-cream; chất giữ ẩm; squalane hoặc silicone nếu muốn da mềm', 'Dầu và bơ thực vật, lanolin, polysorbate, nhiều loại kem “phục hồi” giàu axit béo'],
  ['Kem chống nắng', 'Kết cấu lỏng nhẹ; đọc toàn bộ bảng thành phần, không chỉ mặt trước vỏ hộp', 'Nhiều kem chống nắng dùng este (isopropyl palmitate, C12–15 alkyl benzoate) làm nền'],
  ['Trang điểm', 'Ít sản phẩm, lớp mỏng; tẩy trang buổi tối không dùng dầu', 'Kem nền thường giàu este và sáp'],
];

const CHECK: [string, string][] = [
  ['Axit béo', 'Oleic, Palmitic, Stearic, Linoleic, Lauric Acid'],
  ['Dầu và bơ thực vật', 'Olea Europaea (ô liu), Persea Gratissima (bơ), Cocos Nucifera (dừa), Butyrospermum Parkii (bơ hạt mỡ)'],
  ['Este của axit béo', 'Isopropyl Palmitate, Isopropyl Myristate, Glyceryl Stearate, Cetyl Palmitate, Ethylhexyl Palmitate'],
  ['Polysorbate', 'Polysorbate 20 / 60 / 80'],
  ['Lanolin', 'Lanolin, Lanolin Oil, Acetylated Lanolin'],
];

function Body() {
  return (
    <>
      <P>
        <B>Da bị mụn nấm nên dùng mỹ phẩm không chứa những gì nấm men Malassezia dùng làm thức ăn</B>: axit béo, dầu và bơ thực vật, este của axit béo
        và polysorbate — ở <B>mọi bước</B> của quy trình, không chỉ ở kem dưỡng. “Mụn nấm” là tên thường gọi của viêm nang lông do Malassezia, một dạng
        viêm nang lông rất hay bị nhầm với mụn trứng cá [1][2].
      </P>

      <H2 id="an-toan-nghia-la-gi">“An toàn cho da mụn nấm” nghĩa là gì</H2>
      <P>
        Malassezia sống trên da của hầu hết mọi người. Nấm men này <B>không tự tạo được axit béo</B> mà lấy từ bã nhờn và từ những gì bạn thoa lên da [3][4].
        Vì vậy một sản phẩm được gọi là an toàn cho da mụn nấm (fungal-acne-safe) khi công thức <B>bỏ ra ngoài những chất nấm men có thể dùng</B>.
      </P>
      <P>
        Có hai điều nhãn này <B>không</B> có nghĩa: nó không giống “non-comedogenic” (đó là chuyện bít tắc lỗ chân lông), và nó không có nghĩa là
        không có cồn béo (cetyl, cetearyl alcohol là cồn, không phải axit, và thường ổn). Danh sách thành phần gây bít tắc có trong bài{' '}
        <Link href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className={LINK}>Da mụn không nên dùng thành phần gì?</Link>
      </P>

      <H2 id="tung-buoc">Từng bước: nên chọn gì</H2>
      <Table head={['Bước', 'Thường phù hợp', 'Thường bị đánh dấu']}>
        {BY_STEP.map(([step, ok, no]) => (
          <tr key={step} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{step}</td>
            <td className="py-3 pr-4 text-gray-700">{ok}</td>
            <td className="py-3 text-gray-500">{no}</td>
          </tr>
        ))}
      </Table>
      <P>
        Để ý quy luật: <B>càng về cuối quy trình, sản phẩm mặc định càng nhiều dầu</B>. Sữa rửa mặt dễ chọn; kem chống nắng và đồ trang điểm mới là chỗ
        nhiều người vấp, vì este nằm ở phần nền của sản phẩm chứ không phải ở hoạt chất chính. Riêng kem chống nắng có bài{' '}
        <Link href="/vn/da-viem-nang-long-mun-nam-nen-dung-kem-chong-nang-nao" className={LINK}>Da dễ bị viêm nang lông, mụn nấm nên dùng kem chống nắng nào?</Link>
      </P>

      <H3>Năm nhóm cần dò trên nhãn</H3>
      <Table head={['Nhóm', 'Tên trên bảng thành phần']}>
        {CHECK.map(([name, label]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{name}</td>
            <td className="py-3 text-gray-500">{label}</td>
          </tr>
        ))}
      </Table>
      <P>
        Không phải axit béo nào cũng “nuôi” nấm men như nhau — trong nuôi cấy, Malassezia phát triển tốt với palmitic và oleic acid, kém hơn nhiều với
        các chuỗi ngắn trong dầu dừa [4] — nhưng để đọc nhãn nhanh, dò năm nhóm này là đủ cho phần lớn trường hợp. Cách đọc nhãn kem dưỡng chi tiết hơn có trong bài{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì?</Link>
      </P>

      <H2 id="quy-trinh">Một quy trình hợp với khí hậu Việt Nam</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Ít lớp hơn.</B> Mỗi sản phẩm là thêm một cơ hội đưa axit béo lên da. Sữa rửa mặt, nước cân bằng, gel-cream và kem chống nắng là một quy trình đủ.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Tắm hoặc lau khô sau khi đổ mồ hôi.</B> Nóng, ẩm và bí là điều kiện nấm men ưa thích [1] — điều này quan trọng không kém bất kỳ sản phẩm nào.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Lớp mỏng ở ngực và lưng.</B> Thoa dày không thêm ẩm, chỉ thêm bí.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Đổi từng sản phẩm một.</B> Đổi tất cả cùng lúc thì bạn sẽ không biết thay đổi nào có ích.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Đi khám nếu tình trạng kéo dài.</B> Nốt đau, lan rộng hoặc kéo dài nhiều tuần vượt quá những gì việc chọn mỹ phẩm làm được, và chỉ bác sĩ da liễu mới xác định được nguyên nhân có phải nấm men hay không.</span></li>
      </ol>
      <P>
        Những thói quen hằng ngày khác cho da dễ bị viêm nang lông có trong bài{' '}
        <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Các tổng quan y khoa mô tả viêm nang lông do Malassezia là tình trạng hay bị nhầm với mụn trứng cá, với nốt nhỏ đều nhau, ngứa, ở vùng tiết nhiều dầu [1][2].
        Giải mã bộ gen cho thấy Malassezia thiếu enzyme tổng hợp axit béo và phụ thuộc vào lipid từ bên ngoài [3]; thí nghiệm nuôi cấy xác nhận nấm men này
        phát triển khi có sẵn từng loại axit béo nhất định, khác nhau theo độ dài chuỗi [4].
      </P>
      <H3>2. Sản phẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Mọi sản phẩm trong dòng <span className="font-belleza">La&nbsp;Théorie</span> — sữa rửa mặt, nước cân bằng, gel-cream, tinh chất, kem chống nắng và kem BB —
        đều xây dựng trên công thức <B>0% Fatty Acid</B>, nên có thể dùng thành một quy trình trọn vẹn thay vì kiểm tra từng sản phẩm một.
        Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>Nhãn và gian hàng chính hãng ghi gì</H3>
      <P>
        Trên gian hàng chính hãng tại Việt Nam (Shopee: {SHOPEE_VN_STORE}), mỗi sản phẩm đều ghi <B>Không chứa axit béo</B> trong tên sản phẩm; ví dụ kem dưỡng ẩm được ghi là{' '}
        <B>Kem dưỡng ẩm cho da mụn La Théorie Hydrating Gel Cream 60ml | Viêm nang lông &amp; da nhạy cảm | Không chứa axit béo</B> (thành phần nổi bật in trên nhãn: Phytosqualane, Panthenol).
        Đây là thông tin nhà bán hàng công bố, không phải kết quả thử nghiệm.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các nghiên cứu trích dẫn là về nấm men và thành phần, không phải thử nghiệm trên các sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng cho mụn nấm.
        Các trang kiểm tra thành phần hiện xếp một số sản phẩm La Théorie vào nhóm an toàn với mụn nấm; đó là đánh giá của chính các trang đó, không phải của chúng tôi.
        Chọn mỹ phẩm có thể khiến da bớt thuận lợi cho nấm men; nó không chẩn đoán và không thay cho bác sĩ da liễu.
      </P>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn bắt đầu từ bước dưỡng ẩm, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        gel-cream 0% axit béo, dành cho da mụn, da dễ bị viêm nang lông và da nhạy cảm.
      </Cta>

      <ReadMore
        links={[
          ['/vn/kem-duong-am-khong-chua-axit-beo-la-gi', 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?'],
          ['/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao', 'Da dễ bị viêm nang lông thì chăm sóc thế nào?'],
          ['/vn/da-viem-nang-long-mun-nam-nen-dung-kem-chong-nang-nao', 'Da dễ bị viêm nang lông, mụn nấm nên dùng kem chống nắng nào?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'da-bi-mun-nam-nen-dung-my-pham-gi',
  title: 'Da bị mụn nấm nên dùng mỹ phẩm gì?',
  description:
    '“An toàn cho da mụn nấm” nghĩa là gì, nên chọn gì ở từng bước từ sữa rửa mặt đến kem chống nắng, năm nhóm thành phần cần dò và một quy trình hợp khí hậu nóng ẩm.',
  tldr: [
    'Da bị mụn nấm nên dùng mỹ phẩm không chứa thứ nấm men Malassezia dùng làm thức ăn: axit béo, dầu và bơ thực vật, este của axit béo và polysorbate.',
    'Sữa rửa mặt dễ chọn; kem chống nắng và đồ trang điểm là chỗ nhiều người vấp, vì este nằm ở phần nền của sản phẩm.',
    'Ở khí hậu nóng ẩm, ít lớp và lau khô mồ hôi quan trọng không kém sản phẩm — nốt đau, lan rộng hoặc kéo dài cần đến bác sĩ da liễu.',
  ],
  cluster: 'C3',
  stage: 'explore',
  targetQueries: [
    'da bị mụn nấm nên dùng mỹ phẩm gì',
    'mụn nấm nên dùng skincare gì',
    'mỹ phẩm an toàn cho da mụn nấm',
    'quy trình skincare cho da mụn nấm',
    'thành phần an toàn cho da viêm nang lông',
  ],
  published: '2026-10-11',
  faq: [
    { q: 'Da bị mụn nấm nên dùng kem dưỡng ẩm như thế nào?', a: 'Chọn gel hoặc gel-cream cấp ẩm bằng chất giữ ẩm (glycerin, axit hyaluronic, panthenol) và không chứa axit béo, dầu thực vật, este của axit béo hay polysorbate. Squalane và silicone thường ổn vì không chứa axit béo.' },
    { q: 'Mỹ phẩm non-comedogenic có an toàn cho da mụn nấm không?', a: 'Không nhất thiết. Non-comedogenic nói về khả năng gây bít tắc lỗ chân lông; an toàn cho da mụn nấm nói về axit béo. Một sản phẩm có thể đạt tiêu chí này mà không đạt tiêu chí kia, nên cần kiểm tra cả hai.' },
    { q: 'Da mụn nấm có dùng dầu tẩy trang được không?', a: 'Thường nên tránh. Dầu tẩy trang và sáp tẩy trang phần lớn làm từ dầu thực vật hoặc este của axit béo. Gel hoặc sữa rửa mặt dạng bọt nhẹ là lựa chọn an toàn hơn.' },
    { q: 'Squalane có dùng được cho da mụn nấm không?', a: 'Thường là có. Squalane là hydrocarbon, không phải axit béo, nên không làm thức ăn cho Malassezia.' },
    { q: 'Khi nào da mụn nấm cần đi khám?', a: 'Khi nốt đau, lan rộng hoặc kéo dài nhiều tuần dù đã đổi sản phẩm và lau khô mồ hôi kịp thời. Chỉ bác sĩ da liễu mới xác định được nguyên nhân có phải nấm men hay không.' },
  ],
  // 2026-09-16 확인분 재사용 — [1] Europe PMC (PMID 24688625 · PMC3970831) · [2][3][4] Crossref (VN C6 · SG C6 글과 같은 문헌)
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. và cộng sự (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. và cộng sự (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
