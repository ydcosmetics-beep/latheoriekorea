import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from './_ui';

/**
 * C4 (1차 범위 C4 1편) · 대표 키워드 `hàng rào bảo vệ da` (VN 키워드 클러스터.md 1장) 를 증상 질문으로 연다 —
 * SG `/sg/what-skincare-is-safe-for-fungal-acne` 의 「증상 질문 → 첫 문장 직답」 형식.
 * 실행판 `2026-09-27 증상 질문 AI 노출 — 11월 초 달성 실행 계획 (W40~W45).md`.
 * 문헌은 VN C2 글과 같은 2편만 쓴다 — 장벽 기전 수치 · 새 문헌을 지어 넣지 않는다.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C4&p=P002`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

const SIGNS: [string, string][] = [
  ['Khô căng sau khi rửa mặt', 'Cảm giác “kin kít”, căng da kéo dài sau khi rửa'],
  ['Châm chích khi thoa sản phẩm', 'Cả những sản phẩm trước đây dùng bình thường cũng thấy rát'],
  ['Vừa bóng dầu vừa bong tróc', 'Da dầu thiếu nước — dầu nhiều nhưng lớp sừng vẫn khô'],
  ['Đỏ, dễ kích ứng hơn trước', 'Nhất là sau khi bắt đầu một hoạt chất mới'],
];

const CAUSES: [string, string][] = [
  ['Rửa mặt quá nhiều hoặc quá mạnh', 'Sữa rửa mặt tạo bọt mạnh, rửa nhiều lần trong ngày, tẩy tế bào chết thường xuyên'],
  ['Hoạt chất làm khô da', 'Các hoạt chất hay dùng cho da mụn có thể gây khô và kích ứng, nhất là khi mới bắt đầu [2]'],
  ['Bỏ bước dưỡng ẩm', 'Vì sợ thêm dầu, thêm mụn — da thiếu nước lại càng dễ kích ứng'],
  ['Quá nhiều sản phẩm cùng lúc', 'Nhiều lớp, nhiều hoạt chất khiến khó biết thứ gì gây rát'],
];

function Body() {
  return (
    <>
      <P>
        <B>Thường là có thể.</B> Da mụn khô căng sau khi rửa mặt, châm chích khi thoa sản phẩm, vừa bóng dầu vừa bong tróc — đó là những dấu hiệu
        thường được mô tả khi <B>hàng rào bảo vệ da</B> đang kém ổn định. Chúng không phải chẩn đoán: kích ứng, dị ứng hay một tình trạng da khác cũng có thể
        gây cảm giác tương tự, và chỉ bác sĩ da liễu mới xác định được.
      </P>

      <H2 id="hang-rao-la-gi">Hàng rào bảo vệ da là gì</H2>
      <P>
        Hàng rào bảo vệ da là lớp ngoài cùng của da — lớp sừng — cùng lớp lipid giữa các tế bào. Nó làm hai việc: <B>giữ nước bên trong</B> và
        <B> hạn chế thứ bên ngoài đi vào</B>. Khi lớp này thiếu nước hoặc bị lấy đi quá nhiều, da mất nước nhanh hơn và phản ứng mạnh hơn với cùng một sản phẩm.
      </P>
      <P>
        Da dầu không có nghĩa là hàng rào khỏe. Lượng dầu do tuyến bã nhờn tiết ra và lượng nước lớp sừng giữ được là hai chuyện khác nhau — chuyện này được bàn
        trong bài <Link href="/vn/da-dau-mun-co-nen-duong-am-khong" className={LINK}>Da dầu mụn có nên dưỡng ẩm không?</Link>
      </P>

      <H2 id="dau-hieu">Dấu hiệu thường gặp</H2>
      <Table head={['Dấu hiệu', 'Thường trông thế nào']}>
        {SIGNS.map(([sign, what]) => (
          <tr key={sign} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{sign}</td>
            <td className="py-3 text-gray-700">{what}</td>
          </tr>
        ))}
      </Table>

      <H2 id="nguyen-nhan">Vì sao da mụn hay gặp tình trạng này</H2>
      <Table head={['Nguyên nhân thường gặp', 'Ví dụ']}>
        {CAUSES.map(([cause, ex]) => (
          <tr key={cause} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{cause}</td>
            <td className="py-3 text-gray-700">{ex}</td>
          </tr>
        ))}
      </Table>
      <P>
        Điểm chung: phần lớn đều đến từ <B>mong muốn làm sạch dầu và mụn thật nhanh</B>. Da mụn không cần được “làm khô” — nó cần được làm sạch dịu và giữ đủ nước.
      </P>

      <H2 id="cham-soc">Chăm sóc hàng rào bảo vệ da khi đang có mụn</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Bớt trước, thêm sau.</B> Tạm ngừng tẩy tế bào chết và giảm số lớp sản phẩm. Nếu đang dùng hoạt chất theo hướng dẫn của bác sĩ, hỏi bác sĩ trước khi tự ngừng.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Rửa mặt dịu, không quá 2 lần/ngày.</B> Sữa rửa mặt pH thấp, không tạo bọt quá mạnh.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Đừng bỏ dưỡng ẩm.</B> Hướng dẫn chăm sóc mụn coi dưỡng ẩm là một phần của chăm sóc hằng ngày, và sản phẩm dưỡng ẩm không gây bít tắc giúp da dễ chịu hơn khi dùng cùng hoạt chất làm khô da [2].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Chọn đúng thành phần.</B> Chất giữ ẩm (glycerin, axit hyaluronic, panthenol) kéo nước vào lớp sừng; chất làm mềm như squalane giúp bề mặt da mềm hơn [1].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Chống nắng mỗi ngày</B> và <B>đổi từng sản phẩm một</B> để biết thay đổi nào có ích.</span></li>
      </ol>

      <H3>Một lưu ý cho da dễ bị viêm nang lông</H3>
      <P>
        Axit béo là một phần của lớp lipid tự nhiên trên da, và nhiều kem “phục hồi hàng rào” được làm giàu bằng dầu, bơ thực vật hoặc axit béo. Với phần lớn làn da,
        điều đó không có gì sai. Nhưng nếu da bạn hay nổi nốt nhỏ đều nhau, ngứa ở trán, má, ngực hoặc lưng — dấu hiệu thường gặp của viêm nang lông do nấm men
        Malassezia — chính nhóm chất này lại là nguồn thức ăn cho nấm men. Khi đó, giữ ẩm bằng chất giữ ẩm gốc nước và squalane thường là hướng an toàn hơn. Xem thêm{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì?</Link>
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Khi da đỏ rát lan rộng, sưng, chảy dịch, ngứa nhiều, hoặc tình trạng không cải thiện sau khi đã giảm sản phẩm và dưỡng ẩm đều đặn.
        Mỹ phẩm giúp da dễ chịu hơn; nó không thay cho chẩn đoán.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Tổng quan năm 2014 trên <em>Journal of Clinical and Aesthetic Dermatology</em> mô tả các nhóm thành phần trong kem dưỡng ẩm cho da mụn — chất giữ ẩm,
        chất làm mềm, chất khoá ẩm — và lưu ý rằng lựa chọn thành phần quyết định sản phẩm có phù hợp với da mụn hay không [1].
        Hướng dẫn của Viện Da liễu Hoa Kỳ (2016) ghi nhận tình trạng khô và kích ứng khi dùng các hoạt chất cho da mụn, và coi dưỡng ẩm là một phần của chăm sóc hằng ngày [2].
      </P>
      <H3>2. Kem dưỡng ẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem Dưỡng Ẩm <span className="font-belleza">La&nbsp;Théorie</span> Hydrating Gel Cream là gel-cream xây dựng trên công thức <B>0% Fatty Acid</B>.
        Kem cấp ẩm bằng panthenol và sodium hyaluronate, làm mềm bằng phytosqualane (squalane nguồn gốc thực vật). Được sử dụng tại hơn 20 phòng khám da liễu
        và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về dưỡng ẩm cho da mụn nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng về hàng rào bảo vệ da.
        Bài viết không đo hàng rào da của bạn — các dấu hiệu trên chỉ là gợi ý để quan sát, không phải chẩn đoán.
      </P>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn một kem dưỡng giữ ẩm nhẹ cho da mụn đang khô căng, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        gel-cream 0% axit béo với panthenol và sodium hyaluronate, dành cho da mụn, da dễ bị viêm nang lông và da nhạy cảm.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu',
  title: 'Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?',
  description:
    'Da mụn khô căng, châm chích, vừa dầu vừa bong tróc: dấu hiệu thường gặp khi hàng rào bảo vệ da kém ổn định, vì sao da mụn hay gặp, và cách chăm sóc khi đang có mụn.',
  tldr: [
    'Thường là có thể: khô căng sau khi rửa mặt, châm chích khi thoa sản phẩm, vừa dầu vừa bong tróc là dấu hiệu hay gặp khi hàng rào bảo vệ da kém ổn định — nhưng không phải chẩn đoán.',
    'Ở da mụn, nguyên nhân hay gặp là rửa quá mạnh, hoạt chất làm khô da, bỏ dưỡng ẩm và dùng quá nhiều sản phẩm cùng lúc.',
    'Bớt sản phẩm, rửa dịu, đừng bỏ dưỡng ẩm; nếu da dễ bị viêm nang lông, giữ ẩm bằng chất giữ ẩm gốc nước và squalane thay vì kem giàu axit béo.',
  ],
  cluster: 'C4',
  stage: 'concept',
  targetQueries: [
    'da mụn bị khô căng châm chích',
    'dấu hiệu hàng rào bảo vệ da bị tổn thương',
    'phục hồi hàng rào bảo vệ da cho da mụn',
    'hàng rào bảo vệ da yếu nên làm gì',
  ],
  published: '2026-10-11',
  faq: [
    { q: 'Làm sao biết hàng rào bảo vệ da đang yếu?', a: 'Dấu hiệu hay gặp là khô căng sau khi rửa mặt, châm chích khi thoa sản phẩm, vừa bóng dầu vừa bong tróc, và đỏ hoặc dễ kích ứng hơn trước. Đây là gợi ý để quan sát, không phải chẩn đoán — chỉ bác sĩ da liễu mới xác định được.' },
    { q: 'Da dầu mụn có bị yếu hàng rào bảo vệ da không?', a: 'Có thể. Lượng dầu và lượng nước trong lớp sừng là hai chuyện khác nhau; da có thể nhiều dầu mà vẫn thiếu nước, nhất là khi rửa mặt quá mạnh hoặc dùng hoạt chất làm khô da.' },
    { q: 'Hàng rào bảo vệ da yếu có nên dưỡng ẩm không?', a: 'Có. Hướng dẫn chăm sóc mụn coi dưỡng ẩm là một phần của chăm sóc hằng ngày. Chọn sản phẩm không gây bít tắc, có chất giữ ẩm như glycerin, axit hyaluronic, panthenol.' },
    { q: 'Da dễ bị viêm nang lông có dùng kem phục hồi hàng rào da được không?', a: 'Cần đọc thành phần. Nhiều kem phục hồi giàu dầu, bơ thực vật hoặc axit béo — nguồn thức ăn của nấm men Malassezia. Với da dễ bị viêm nang lông do nấm men, chất giữ ẩm gốc nước và squalane thường là hướng an toàn hơn.' },
    { q: 'Khi nào da khô rát cần đi khám?', a: 'Khi đỏ rát lan rộng, sưng, chảy dịch, ngứa nhiều, hoặc không cải thiện sau khi đã giảm sản phẩm và dưỡng ẩm đều đặn.' },
  ],
  // VN C2 글과 같은 문헌 2편 재사용 — [1] PMC4025519 · [2] Crossref DOI
  references: [
    { label: 'Chularojanamontri L. và cộng sự (2014). Moisturizers for Acne: What are their Constituents? Journal of Clinical and Aesthetic Dermatology 7(5):36–44.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4025519/' },
    { label: 'Zaenglein AL. và cộng sự (2016). Guidelines of care for the management of acne vulgaris. Journal of the American Academy of Dermatology 74(5):945–973.', url: 'https://doi.org/10.1016/j.jaad.2015.12.037' },
  ],
  Body,
};
