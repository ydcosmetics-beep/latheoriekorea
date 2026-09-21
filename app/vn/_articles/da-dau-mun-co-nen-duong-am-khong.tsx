import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from './_ui';

/** C2 · PAA 원문 `dưỡng ẩm cho da mụn` (2026-08-31) · 고정 쿼리 Q01·Q02 와 같은 질문. */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C2&p=P002`;

const TEXTURE: [string, string, string][] = [
  ['Gel', 'Chủ yếu là nước và chất giữ ẩm (humectant). Không hoặc gần như không có dầu', 'Da dầu, da mụn, khí hậu nóng ẩm'],
  ['Gel-cream', 'Gel có thêm một chút chất làm mềm. Đủ ẩm hơn gel thuần mà vẫn nhẹ', 'Da dầu thiếu nước; da hỗn hợp'],
  ['Lotion', 'Nhũ tương loãng, có dầu nhưng ít', 'Da thường; da dầu vào mùa khô'],
  ['Kem đặc', 'Nhiều dầu và chất khoá ẩm (occlusive)', 'Da khô — thường quá nặng cho da dầu mụn'],
];

function Body() {
  return (
    <>
      <P>
        Câu hỏi này xuất hiện vì một logic nghe rất hợp lý: <em>da đã nhiều dầu rồi, bôi thêm kem thì chỉ thêm bí và thêm mụn.</em>{' '}
        Nhiều người vì thế bỏ hẳn bước dưỡng ẩm, chỉ rửa mặt và chấm mụn. Kết quả thường là da vừa bóng dầu vừa bong tróc — và mụn không giảm.
      </P>
      <P>
        Câu trả lời ngắn: <B>có, da dầu mụn vẫn cần dưỡng ẩm.</B> Câu trả lời dài hơn — và hữu ích hơn — là <B>dưỡng bằng gì</B>.
      </P>

      <H2 id="dau-va-nuoc">Dầu và nước là hai chuyện khác nhau</H2>
      <P>
        “Da dầu” nói về lượng bã nhờn tuyến dầu tiết ra. “Da đủ ẩm” nói về lượng nước giữ được trong lớp sừng. Hai thứ này không thay thế cho nhau:
        da có thể tiết rất nhiều dầu mà lớp sừng vẫn thiếu nước. Tình trạng đó hay được gọi là <B>da dầu thiếu nước</B> (<em>da dầu thiếu nước</em>),
        và nó phổ biến hơn nhiều người nghĩ — nhất là khi rửa mặt bằng sữa rửa mặt mạnh nhiều lần trong ngày.
      </P>
      <P>
        Khi lớp sừng thiếu nước, hàng rào bảo vệ da kém ổn định hơn, da dễ kích ứng hơn, và tuyến bã nhờn thường được mô tả là phản ứng bằng cách
        tiết thêm dầu. Đó là lý do “bỏ dưỡng ẩm để bớt dầu” hay cho kết quả ngược lại.
      </P>

      <H2 id="huong-dan-y-khoa">Hướng dẫn chuyên môn nói gì</H2>
      <P>
        Hướng dẫn chăm sóc mụn của Viện Da liễu Hoa Kỳ ghi nhận rằng các sản phẩm dưỡng ẩm không gây bít tắc có thể giúp da dễ chịu hơn khi dùng
        cùng các hoạt chất làm khô da, và khuyến khích duy trì dưỡng ẩm như một phần của chăm sóc hằng ngày [2]. Một bài tổng quan năm 2014 về kem dưỡng ẩm
        cho da mụn đi xa hơn: điều quan trọng không phải là <em>có</em> dưỡng ẩm hay không, mà là <B>thành phần của sản phẩm dưỡng ẩm đó</B> [1].
      </P>

      <H2 id="ket-cau">Chọn kết cấu: gel hay kem?</H2>
      <Table head={['Kết cấu', 'Bên trong có gì', 'Thường hợp với']}>
        {TEXTURE.map(([name, what, fit]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{what}</td>
            <td className="py-3 text-gray-500">{fit}</td>
          </tr>
        ))}
      </Table>
      <P>
        Với da dầu mụn trong khí hậu Việt Nam, <B>gel hoặc gel-cream</B> thường là lựa chọn hợp lý: cấp nước bằng chất giữ ẩm
        (glycerin, axit hyaluronic, panthenol) thay vì phủ một lớp dầu lên trên. Da không có cảm giác nặng, và mồ hôi buổi trưa không biến lớp kem thành màng bí.
      </P>

      <H3>Kết cấu chưa phải là tất cả</H3>
      <P>
        Hai sản phẩm cùng ghi “gel” có thể khác nhau hoàn toàn về thành phần. Điều nhãn kết cấu không nói là sản phẩm có chứa{' '}
        <B>axit béo</B> hay không — nhóm thành phần mà nấm men Malassezia trên da dùng làm thức ăn. Với làn da hay nổi những nốt li ti đều nhau
        ở trán, hai bên má hay lưng, đây là câu hỏi thứ hai cần đặt ra, sau câu hỏi về kết cấu. Chi tiết trong bài{' '}
        <a href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className="font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900">
          Da mụn không nên dùng thành phần gì?
        </a>
      </P>

      <H2 id="cach-dung">Dưỡng ẩm cho da dầu mụn như thế nào</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Rửa mặt dịu.</B> Sữa rửa mặt pH thấp, không tạo bọt mạnh. Cảm giác “kin kít” sau khi rửa là dấu hiệu lớp dầu tự nhiên đã bị lấy đi quá nhiều.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Thoa khi da còn hơi ẩm.</B> Chất giữ ẩm hoạt động tốt hơn khi có sẵn nước trên bề mặt.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Lượng vừa đủ, mỏng đều.</B> Với gel-cream, một lượng bằng hạt đậu cho cả mặt thường là đủ. Thêm lớp không có nghĩa là thêm ẩm.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Thứ tự: nước cân bằng → kem dưỡng → tinh chất (nếu dùng).</B> Tinh chất là bước bổ sung, không phải bước bắt buộc.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Cho da thời gian.</B> Da cần vài tuần để thích nghi với một quy trình mới; đổi sản phẩm liên tục khiến bạn không biết cái nào có tác dụng.</span></li>
      </ol>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Tổng quan năm 2014 trên <em>Journal of Clinical and Aesthetic Dermatology</em> mô tả các nhóm thành phần trong kem dưỡng ẩm cho da mụn —
        chất giữ ẩm, chất làm mềm, chất khoá ẩm — và lưu ý rằng lựa chọn thành phần quyết định sản phẩm có phù hợp với da mụn hay không [1].
        Hướng dẫn của Viện Da liễu Hoa Kỳ (2016) coi dưỡng ẩm là một phần của chăm sóc da mụn hằng ngày [2].
      </P>
      <H3>2. Sản phẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem dưỡng ẩm của <span className="font-belleza">La&nbsp;Théorie</span> là dạng gel-cream: cấp nước bằng chất giữ ẩm, và bỏ axit béo cùng
        các loại dầu không cần thiết theo công thức <B>0% Fatty Acid</B>. Đây là lựa chọn cho da dầu thiếu nước và da dễ gặp viêm nang lông —
        những làn da đã thử kem đặc mà thấy nặng, thử bỏ dưỡng mà thấy khô. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về dưỡng ẩm cho da mụn nói chung, không phải thử nghiệm trên sản phẩm này. Sản phẩm chưa có thử nghiệm lâm sàng riêng.
        Không có kết cấu nào hợp với mọi làn da; nếu da bạn khô nhiều, một sản phẩm giàu ẩm hơn có thể phù hợp hơn.
      </P>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn xem một gel-cream được xây dựng theo hướng bỏ axit béo, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        dành cho da dầu thiếu nước, da mụn và da dễ gặp viêm nang lông.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'da-dau-mun-co-nen-duong-am-khong',
  title: 'Da dầu mụn có nên dưỡng ẩm không?',
  description:
    'Có — nhưng câu hỏi thực sự là dưỡng bằng gì. Vì sao da dầu vẫn thiếu nước, chọn gel hay kem, và điều mà nhãn kết cấu không nói: axit béo.',
  tldr: [
    'Da dầu và da thiếu nước là hai chuyện khác nhau; da có thể vừa bóng dầu vừa thiếu nước.',
    'Với da dầu mụn trong khí hậu nóng ẩm, gel hoặc gel-cream cấp nước bằng chất giữ ẩm thường phù hợp hơn kem đặc.',
    'Kết cấu không cho biết sản phẩm có chứa axit béo hay không — với da dễ gặp mụn nấm, đó là câu hỏi thứ hai.',
  ],
  cluster: 'C2',
  stage: 'explore',
  targetQueries: ['da dầu mụn có nên dưỡng ẩm không', 'dưỡng ẩm cho da mụn', 'da mụn có nên dùng kem dưỡng không', 'gel hay kem dưỡng cho da dầu'],
  published: '2026-09-16',
  faq: [
    { q: 'Da dầu có cần kem dưỡng ẩm không?', a: 'Có. Da dầu vẫn có thể thiếu nước ở lớp sừng, và khi thiếu nước, hàng rào bảo vệ da kém ổn định và da dễ kích ứng hơn. Nên chọn kết cấu nhẹ như gel hoặc gel-cream.' },
    { q: 'Bỏ dưỡng ẩm có làm da bớt dầu không?', a: 'Thường là không. Khi da bị làm khô, tuyến bã nhờn thường được mô tả là tiết thêm dầu để bù lại. Bỏ dưỡng ẩm hay cho kết quả ngược lại: da vừa bóng dầu vừa bong tróc.' },
    { q: 'Gel hay kem dưỡng tốt hơn cho da dầu mụn?', a: 'Với da dầu mụn trong khí hậu nóng ẩm, gel hoặc gel-cream thường phù hợp hơn kem đặc vì cấp nước mà không phủ lớp dầu nặng. Da khô nhiều có thể cần kết cấu giàu ẩm hơn.' },
    { q: 'Kem dưỡng ẩm có gây mụn không?', a: 'Tuỳ thành phần, không tuỳ kết cấu. Dầu khoáng, dầu dừa, dầu ô liu và lanolin là những nhóm hay gây bít tắc; với da dễ gặp mụn nấm, cần kiểm tra thêm nhóm axit béo.' },
    { q: 'Nên thoa kem dưỡng ẩm trước hay sau tinh chất?', a: 'Với dòng La Théorie, thứ tự là nước cân bằng → kem dưỡng → tinh chất, vì tinh chất là bước tăng cường (Enhancer), không phải bước bắt buộc. Với sản phẩm khác, hãy theo hướng dẫn của nhà sản xuất.' },
  ],
  // 2026-09-16 확인 — [1] Europe PMC (PMID 24847408 · PMC4025519) · [2] Crossref DOI
  references: [
    { label: 'Chularojanamontri L. và cộng sự (2014). Moisturizers for Acne: What are their Constituents? Journal of Clinical and Aesthetic Dermatology 7(5):36–44.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4025519/' },
    { label: 'Zaenglein AL. và cộng sự (2016). Guidelines of care for the management of acne vulgaris. Journal of the American Academy of Dermatology 74(5):945–973.', url: 'https://doi.org/10.1016/j.jaad.2015.12.037' },
  ],
  Body,
};
