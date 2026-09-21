import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table } from './_ui';

/**
 * C6 · PAA 원문 「Làm sao để hết bị viêm nang lông?」(`viêm nang lông`, 2026-08-23) 은 결과 단정형이라
 * 질문 창고의 전환문 「Da dễ bị viêm nang lông thì chăm sóc thế nào?」 를 H1 으로 쓴다.
 * 진입 어휘는 `viêm nang lông`, `mụn nấm` · Malassezia 는 본문 중반 (VN 키워드 클러스터.md 2장).
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C6&p=P002`;

const HABITS: [string, string][] = [
  ['Tắm hoặc lau khô ngay sau khi đổ mồ hôi', 'Mồ hôi đọng lại trong nang lông là môi trường ẩm — nóng mà nấm men và vi khuẩn đều ưa thích'],
  ['Mặc đồ thoáng, thay áo sau khi tập', 'Ma sát và đồ bó giữ nhiệt và ẩm sát da, nhất là ở lưng, ngực và vai'],
  ['Giặt khăn mặt, vỏ gối, mũ thường xuyên', 'Những thứ chạm vào da mỗi ngày tích dầu và mồ hôi'],
  ['Không cạo, không nặn, không chà mạnh', 'Nang lông đang viêm cần được để yên; chà xát chỉ làm lan rộng'],
  ['Rửa mặt dịu, không quá 2 lần/ngày', 'Rửa quá nhiều làm hàng rào da yếu đi, và da yếu thì dễ viêm hơn'],
];

const THREE: [string, string, string][] = [
  ['Mụn trứng cá thông thường', 'Nhân mụn, mụn đầu đen / đầu trắng, kích thước không đều', 'Bã nhờn, tế bào chết, vi khuẩn trong lỗ chân lông'],
  ['Viêm nang lông do vi khuẩn', 'Nốt đỏ có mủ quanh sợi lông, hay ở vùng cạo hoặc cọ xát', 'Vi khuẩn xâm nhập nang lông sau cạo, ma sát, mồ hôi'],
  ['Viêm nang lông do Malassezia (“mụn nấm”)', 'Nốt nhỏ đều nhau, thành cụm, hay ngứa; trán, hai bên má, ngực, lưng', 'Nấm men Malassezia phát triển quá mức trong nang lông'],
];

function Body() {
  return (
    <>
      <P>
        Viêm nang lông là tình trạng nang lông — cái “túi” nhỏ bao quanh mỗi sợi lông — bị viêm. Nó có thể xuất hiện ở bất kỳ chỗ nào có lông:
        trán, hai bên má, ngực, lưng, vai, đùi. Trong khí hậu nóng ẩm như Việt Nam, nó phổ biến và hay tái đi tái lại — không phải vì bạn chăm da chưa kỹ,
        mà vì <B>điều kiện khí hậu và một vài thói quen hằng ngày đang giữ nang lông trong trạng thái ẩm và bí</B>.
      </P>
      <P>
        Bài này không thay cho việc đi khám. Nó giúp bạn làm hai việc: <B>chăm sóc hằng ngày để da bớt dễ viêm</B>, và{' '}
        <B>biết khi nào tình trạng đã vượt khỏi phạm vi chăm sóc tại nhà</B>.
      </P>

      <H2 id="phan-biet">Trước hết: viêm nang lông không phải một thứ duy nhất</H2>
      <P>Ba tình trạng dưới đây hay bị gọi chung một tên. Cách chăm sóc có phần giống nhau, nhưng nguyên nhân khác nhau — và điều đó quyết định bạn cần tránh gì.</P>
      <Table head={['Tình trạng', 'Biểu hiện thường gặp', 'Liên quan tới']}>
        {THREE.map(([name, sign, cause]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{sign}</td>
            <td className="py-3 text-gray-500">{cause}</td>
          </tr>
        ))}
      </Table>
      <P>
        Dạng thứ ba — viêm nang lông do nấm men Malassezia, trong dân gian gọi là <B>mụn nấm</B> — thường bị nhầm với mụn trứng cá thông thường
        vì nhìn khá giống nhau [2]. Điểm khác dễ nhận: các nốt <B>đều nhau về kích thước</B>, mọc <B>thành cụm</B>, và thường <B>ngứa</B>.
        Việc xác định chắc chắn cần bác sĩ da liễu.
      </P>

      <H2 id="thoi-quen">Năm thói quen hằng ngày</H2>
      <Table head={['Thói quen', 'Vì sao']}>
        {HABITS.map(([name, why]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 text-gray-700">{why}</td>
          </tr>
        ))}
      </Table>
      <P>
        Không có thói quen nào trong số này là “bí quyết”. Chúng đều nhắm vào một thứ: <B>giảm thời gian nang lông ở trong trạng thái ẩm, nóng và bị bịt kín</B>.
      </P>

      <H2 id="san-pham">Chọn sản phẩm cho da dễ bị viêm nang lông</H2>
      <H3>Điều nên tránh</H3>
      <P>
        Với dạng viêm nang lông do Malassezia, nghiên cứu cho thấy nấm men này <B>không tự tạo được axit béo</B> mà lấy từ môi trường —
        bao gồm bã nhờn và những gì bạn thoa lên da [3][4]. Vì vậy, các sản phẩm giàu axit béo (dầu ô liu, dầu bơ, bơ hạt mỡ, lanolin, nhiều loại dầu dưỡng)
        là thứ nên hạn chế trước tiên. Nhãn <B>non-comedogenic</B> không trả lời câu hỏi này — nó chỉ nói về khả năng gây bít tắc lỗ chân lông.
      </P>
      <H3>Điều thường ổn</H3>
      <P>
        Chất giữ ẩm gốc nước (glycerin, axit hyaluronic, panthenol), squalane, niacinamide. Kết cấu gel hoặc gel-cream để da không có thêm một lớp
        bí trong ngày nóng. Với vùng lưng và ngực, một lớp mỏng là đủ — thoa dày không giúp gì.
      </P>
      <H3>Sữa rửa mặt và sữa tắm</H3>
      <P>
        Dịu, pH thấp, không tạo bọt quá mạnh. Với vùng lưng, tắm ngay sau khi tập thể thao quan trọng hơn loại sữa tắm bạn dùng.
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <ul className="my-6 space-y-3 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Nốt viêm <B>đau</B>, sưng to, có mủ, hoặc lan nhanh sang vùng khác</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Tình trạng <B>kéo dài nhiều tuần</B> dù đã thay đổi thói quen và sản phẩm</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Bạn <B>không chắc</B> đó là mụn thường, viêm nang lông do vi khuẩn hay do nấm men — ba tình trạng này cần hướng xử lý khác nhau, và chỉ bác sĩ mới xác định được</span></li>
        <li className="flex gap-3"><span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-gray-400" /><span>Có sốt, hoặc vùng da viêm nóng và đỏ lan rộng</span></li>
      </ul>
      <P>Chăm sóc tại nhà giúp da bớt dễ viêm. Nó không thay cho chẩn đoán, và không có sản phẩm mỹ phẩm nào làm việc đó.</P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Các tổng quan y khoa mô tả viêm nang lông do Malassezia là tình trạng hay bị chẩn đoán nhầm thành mụn trứng cá, với đặc điểm nốt nhỏ đều nhau, ngứa,
        ở vùng tiết nhiều dầu [1][2]. Về cơ chế, giải mã bộ gen cho thấy Malassezia thiếu enzyme tổng hợp axit béo và phụ thuộc vào lipid từ bên ngoài [3];
        thí nghiệm nuôi cấy xác nhận nấm men này phát triển khi có sẵn từng loại axit béo nhất định [4].
      </P>
      <H3>2. Sản phẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Dòng sản phẩm của <span className="font-belleza">La&nbsp;Théorie</span> được xây dựng trên công thức <B>0% Fatty Acid</B> — bỏ chính nhóm thành phần
        mà Malassezia sử dụng. Kem dưỡng ẩm là dạng gel-cream, dành cho da mụn tuổi trưởng thành, da dễ gặp viêm nang lông và da nhạy cảm.
        Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các nghiên cứu trích dẫn là về nấm men và thành phần, không phải thử nghiệm trên sản phẩm này. Sản phẩm chưa có thử nghiệm lâm sàng riêng về viêm nang lông.
        Mỹ phẩm không thay cho việc khám và không xác định được nguyên nhân viêm nang lông của bạn.
      </P>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn xem một kem dưỡng ẩm được xây dựng theo hướng bỏ axit béo, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        gel-cream không chứa axit béo, dành cho da mụn, viêm nang lông và da nhạy cảm.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'da-de-bi-viem-nang-long-thi-cham-soc-the-nao',
  title: 'Da dễ bị viêm nang lông thì chăm sóc thế nào?',
  description:
    'Năm thói quen hằng ngày, cách chọn sản phẩm cho da dễ bị viêm nang lông, và khi nào nên đến khám. Kèm phần phân biệt viêm nang lông do vi khuẩn và do nấm men Malassezia.',
  tldr: [
    'Viêm nang lông trong khí hậu nóng ẩm hay tái phát vì nang lông ở lâu trong trạng thái ẩm, nóng và bị bịt kín — chăm sóc hằng ngày nhắm vào đúng chỗ đó.',
    'Với dạng do nấm men Malassezia (“mụn nấm”), nên hạn chế sản phẩm giàu axit béo; nhãn non-comedogenic không cho biết điều này.',
    'Nốt đau, có mủ, lan nhanh hoặc kéo dài nhiều tuần là lúc cần đến khám — mỹ phẩm không thay cho chẩn đoán.',
  ],
  cluster: 'C6',
  stage: 'explore',
  targetQueries: ['da dễ bị viêm nang lông thì chăm sóc thế nào', 'viêm nang lông chăm sóc tại nhà', 'viêm nang lông và mụn nấm khác nhau thế nào', 'kem dưỡng cho da viêm nang lông'],
  published: '2026-09-16',
  faq: [
    { q: 'Viêm nang lông và mụn trứng cá khác nhau thế nào?', a: 'Mụn trứng cá liên quan tới bã nhờn, tế bào chết và vi khuẩn trong lỗ chân lông, với nhân mụn và kích thước không đều. Viêm nang lông là nang lông bị viêm, do vi khuẩn hoặc nấm men; dạng do Malassezia có nốt nhỏ đều nhau, mọc thành cụm và hay ngứa. Bác sĩ da liễu mới phân biệt chắc chắn được.' },
    { q: 'Da bị viêm nang lông có nên dưỡng ẩm không?', a: 'Có, nhưng bằng kết cấu nhẹ (gel, gel-cream) và thành phần không giàu axit béo. Bỏ dưỡng ẩm làm hàng rào da yếu đi, và da yếu thì dễ viêm hơn.' },
    { q: 'Viêm nang lông ở lưng thì chăm sóc thế nào?', a: 'Tắm ngay sau khi đổ mồ hôi, mặc đồ thoáng, thay áo sau khi tập, giặt khăn và vỏ gối thường xuyên, không chà mạnh. Nếu nốt viêm đau, có mủ hoặc kéo dài, nên đến khám.' },
    { q: 'Non-comedogenic có đủ cho da dễ bị viêm nang lông không?', a: 'Không hẳn. Non-comedogenic nói về khả năng gây bít tắc lỗ chân lông, không nói về việc sản phẩm có chứa axit béo — nguồn thức ăn của nấm men Malassezia — hay không.' },
    { q: 'Khi nào viêm nang lông cần đi khám?', a: 'Khi nốt viêm đau, sưng, có mủ, lan nhanh, kéo dài nhiều tuần dù đã thay đổi thói quen, hoặc khi bạn không chắc đó là mụn thường hay viêm nang lông do vi khuẩn hay nấm men.' },
  ],
  // 2026-09-16 확인 — [1] Europe PMC (PMID 24688625 · PMC3970831) · [2][3][4] Crossref (VN C3 1편과 같은 문헌)
  references: [
    { label: 'Rubenstein RM, Malerich SA (2014). Malassezia (Pityrosporum) Folliculitis. Journal of Clinical and Aesthetic Dermatology 7(3):37–41.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3970831/' },
    { label: 'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.', url: 'https://doi.org/10.3390/jof11090662' },
    { label: 'Xu J. và cộng sự (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.', url: 'https://doi.org/10.1073/pnas.0706756104' },
    { label: 'Liebregts J. và cộng sự (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.', url: 'https://doi.org/10.1093/femsyr/foaf043' },
  ],
  Body,
};
