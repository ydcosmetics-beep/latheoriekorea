import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL, SHOPEE_VN_STORE } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C2 2편째 · 대표 키워드 `dưỡng ẩm cho da mụn` · H1 = AEO 질문 창고 PAA 2026-08-31 C2 원문(09-01 진단 글 목록 2순위 「제품 선택 질문 = 구매 직전」).
 * 근거는 `S06 윤준상 볼트\02_산출물\La Théorie 여드름 피부 보습(C2) 일반 지식 근거표.md` 문헌만 쓴다(2026-10-14 원문 확인).
 *   [1] Bộ Y tế QĐ 4416/QĐ-BYT 2023 「TRỨNG CÁ」 4. Phòng bệnh (S06 세션 직접 판독) · [2] StatPearls Acne Vulgaris · [3] Oon 2019 싱가포르 피부과학회 지침 ·
 *   [4] Chularojanamontri 2014 · [5] Zaenglein 2016 AAD(건조 부작용에만) · [6] Rahrovan 2018 남녀 피부 · [7] Misery 2020 IFSI(C5 근거표 B · 2026-10-18 보강 — 「da nhạy cảm 이면」 조건 1문 + W-1 링크 + FAQ)
 * 🔴 근거표 3절: 「AAD 권고」 금지(AAD 2016 보습 언급 0) · 약 이름 금지 · 업계 자금 합의문(See 2026 · Goh 2016 · See 2018)은 인용하지 않는다 ·
 *    「보습제가 여드름을 줄인다」 금지 · non-comedogenic 을 우리 제품 문구로 쓰지 않는다 · 남성 전용 제품이 낫다 금지 ·
 *    싱가포르 지침 Table 5 「Avoid astringents and toners」(여드름 약 사용자) — 토너 권유 문장 없음.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」·「đặc trị」도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 P002(지방산·불필요한 오일 뺀 젤 타입 · 수분부족지성) · 라벨 대표 성분 Phytosqualane·Panthenol · 기존 /vn C4 글의 P002 서술.
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C2&p=P002`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// [3] Table 12 · [2] · [4]
const CRITERIA: [string, string][] = [
  ['Kết cấu nhẹ', 'Gốc nước, không nhờn — dạng gel hoặc lỏng nhẹ thường dễ dùng cho da dầu [2][3]'],
  ['Cấp đủ ẩm', 'Có chất hút ẩm như glycerin, axit hyaluronic, panthenol [3][4]'],
  ['Không gây bít tắc', 'Ghi “non-comedogenic”; tránh sản phẩm gốc dầu và dễ gây bít tắc [2][3]'],
  ['Dịu nhẹ', 'Ít thành phần dễ kích ứng — nhất là khi da đang khô, rát'],
];

// [2][3] gel·fluid 가 가볍고 수성 · [4] 휴멕턴트는 밀폐제와 함께 · [3] 유성·면포 유발 제품 회피 · [5] 활성 성분의 건조 부작용
const TEXTURES: [string, string, string, string][] = [
  ['Gel / lỏng nhẹ (fluid)', 'Gốc nước, không nhờn, thấm nhanh [2][3]', 'Da dầu, da hỗn hợp, khí hậu nóng ẩm [3]', 'Da đang khô, bong tróc — chất hút ẩm dùng riêng có thể làm tăng mất nước qua da [4]'],
  ['Gel-cream', 'Nhẹ như gel nhưng có thêm thành phần làm mềm', 'Da dầu thiếu nước, muốn nhẹ mặt mà vẫn giữ ẩm', 'Vẫn cần đọc bảng thành phần — tên gọi không bảo đảm không gây bít tắc'],
  ['Lotion / cream', 'Có thêm thành phần khóa ẩm và làm mềm [4]', 'Da khô mụn, nhất là khi đang dùng hoạt chất bôi gây khô [3][5]', 'Da dầu thấy bí; tránh loại gốc dầu, dễ gây bít tắc [3]'],
];

function Body() {
  return (
    <>
      <P>
        <B>Một kem dưỡng nhẹ, cấp đủ ẩm và không gây bít tắc.</B> Hướng dẫn của Hội Da liễu Singapore mô tả kem dưỡng ẩm cho da mụn là loại có kết cấu nhẹ,
        cấp đủ ẩm và không gây bít tắc lỗ chân lông [3]; hướng dẫn hiện hành của Bộ Y tế khuyên “sử dụng sản phẩm chăm sóc da phù hợp: sản phẩm rửa mặt,
        dưỡng ẩm kiềm dầu” [1]. Không có một loại kem chung cho mọi làn da mụn — chọn theo tiêu chí, rồi theo tình trạng da của bạn.
        Bài này đưa tiêu chí chọn, bảng so sánh kết cấu, và nói rõ trường hợp nào <B>không</B> hợp với từng kết cấu.
      </P>

      <H2 id="co-nen-duong-am">Da mụn có cần dưỡng ẩm không</H2>
      <P>
        Có. Phần lớn hướng dẫn chăm sóc mụn coi kem dưỡng ẩm không gây bít tắc là một phần của chăm sóc cơ bản, cùng sữa rửa mặt dịu nhẹ và chống nắng [2].
        Hướng dẫn của Hội Da liễu Singapore ghi nhận kem dưỡng ẩm dành cho da mụn có thể dùng mà không tạo thêm nhân mụn [3]. Chi tiết hơn trong bài{' '}
        <Link href="/vn/da-dau-mun-co-nen-duong-am-khong" className={LINK}>Da dầu mụn có nên dưỡng ẩm không?</Link>
      </P>

      <H2 id="tieu-chi">Tiêu chí chọn kem dưỡng ẩm cho da mụn</H2>
      <Table head={['Tiêu chí', 'Nghĩa là']}>
        {CRITERIA.map(([k, v]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{k}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>
      <P>
        Tổng quan năm 2014 về kem dưỡng ẩm cho da mụn lưu ý: chất hút ẩm dùng một mình có thể làm tăng lượng nước mất qua da, nên thường được kết hợp với
        thành phần khóa ẩm [4]. Và “non-comedogenic” là một nhãn ghi trên bao bì, không phải bảo đảm — đọc bảng thành phần vẫn cần thiết.
      </P>
      <P>
        “Non-comedogenic”, “oil-free” và “không chứa axit béo” là ba nhãn khác nhau, không thay thế cho nhau — nhãn thứ ba được giải thích trong bài{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?</Link>. Những thành phần
        nên dò trên bảng thành phần có trong bài <Link href="/vn/da-mun-khong-nen-dung-thanh-phan-gi" className={LINK}>Da mụn không nên dùng thành phần gì?</Link>
      </P>
      <P>
        Nếu da bạn còn dễ châm chích, nóng rát với sản phẩm mới — da nhạy cảm — thì ngoài các tiêu chí trên, nhóm chuyên gia IFSI khuyên hạn chế bớt mỹ phẩm và chọn
        sản phẩm không hương liệu, ít chất bảo quản, ít chất hoạt động bề mặt [7]. Cách ghép hai bộ tiêu chí có trong bài{' '}
        <Link href="/vn/da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao" className={LINK}>Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?</Link>
      </P>

      <H2 id="so-sanh-ket-cau">So sánh kết cấu: gel – lotion – cream</H2>
      <Table head={['Kết cấu', 'Cảm giác', 'Thường hợp với', 'Cân nhắc nếu']}>
        {TEXTURES.map(([k, feel, fit, caution]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{k}</td>
            <td className="py-3 pr-4 text-gray-700">{feel}</td>
            <td className="py-3 pr-4 text-gray-700">{fit}</td>
            <td className="py-3 text-gray-700">{caution}</td>
          </tr>
        ))}
      </Table>
      <P>
        Kết cấu chỉ là điểm bắt đầu. Với mọi kết cấu, tiêu chí không gây bít tắc vẫn đứng trước [3]; bảng thành phần mới quyết định.
      </P>

      <H2 id="da-kho-mun">Da khô mà vẫn bị mụn thì chọn thế nào</H2>
      <P>
        Da mụn cũng có thể khô, bong tróc, châm chích — nhất là khi đang dùng các hoạt chất bôi dành cho da mụn, vốn hay gây khô và bong tróc [5].
        Khi đó, hướng dẫn của Hội Da liễu Singapore khuyên dùng kem dưỡng ẩm song song để da dễ dung nạp hơn [3]. Chọn kem có cả chất hút ẩm và thành phần
        khóa ẩm, vẫn giữ tiêu chí không gây bít tắc; nếu đang dùng hoạt chất theo hướng dẫn của bác sĩ, hỏi bác sĩ trước khi thêm sản phẩm.
      </P>

      <H2 id="nam-gioi">Nam giới da dầu mụn có cần loại riêng không</H2>
      <P>
        Da nam thường tiết nhiều bã nhờn hơn, vì bã nhờn chịu ảnh hưởng mạnh của hormone sinh dục [6]. Tổng quan năm 2018 về khác biệt da nam và nữ cũng nhắc
        đến việc cảm giác bết dính khiến nhiều người bỏ qua bước chăm sóc da [6]. Nhưng chưa có tài liệu nào đặt tiêu chí riêng cho kem dưỡng của nam giới —
        tiêu chí vẫn như trên: nhẹ, gốc nước, không nhờn, không gây bít tắc. Kết cấu gel thường dễ chấp nhận hơn với người ngại cảm giác bết.
      </P>

      <H2 id="khi-nao-nen-tranh">Khi nào nên tránh một kem dưỡng</H2>
      <P>
        Dừng và đổi sản phẩm nếu sau khi thoa, da thấy bí, nổi thêm nhân mụn, hoặc nổi những nốt nhỏ đều nhau và ngứa — dạng nốt này được bàn trong bài{' '}
        <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>. Tránh sản phẩm
        gốc dầu hoặc dễ gây bít tắc, kể cả kem chống nắng [3]. Nếu đang dùng hoạt chất bôi theo hướng dẫn của bác sĩ, hỏi bác sĩ trước khi thêm bất kỳ sản phẩm nào.
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Kem dưỡng ẩm giúp da dễ chịu hơn; nó không thay cho thăm khám. Mụn sưng viêm, mụn bọc, hoặc mụn để lại thâm và sẹo nên được bác sĩ da liễu thăm khám sớm [2].
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Hướng dẫn hiện hành của Bộ Y tế (QĐ 4416/QĐ-BYT, 2023) đưa sản phẩm rửa mặt và dưỡng ẩm kiềm dầu vào phần phòng bệnh trứng cá [1]. Tiêu chí kem dưỡng
        ẩm cho da mụn đến từ hướng dẫn của Hội Da liễu Singapore (2019) [3] và tổng quan StatPearls [2]; cả hai đặt dưỡng ẩm ở mức khuyến nghị thực hành,
        dựa nhiều vào ý kiến chuyên gia. Hướng dẫn của Viện Da liễu Hoa Kỳ không đưa ra khuyến nghị riêng về kem dưỡng ẩm.
      </P>
      <H3>2. Kem dưỡng ẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem Dưỡng Ẩm <span className="font-belleza">La&nbsp;Théorie</span> Hydrating Gel Cream 60ml là dạng gel-cream: bỏ axit béo và các loại dầu không cần thiết
        theo công thức <B>0% Fatty Acid</B>, cấp ẩm bằng panthenol và làm mềm bằng phytosqualane (squalane nguồn gốc thực vật). Dành cho da dầu thiếu nước —
        nhẹ trên da mà vẫn giữ ẩm. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc (theo tài liệu của công ty).
      </P>
      <P>
        <B>Có thể cân nhắc nếu:</B> da dầu hoặc hỗn hợp thấy bí với kem đặc; da từng nổi nốt nhỏ đều nhau sau khi dùng kem có dầu và muốn thử một công thức
        không chứa axit béo. <B>Nên cân nhắc loại khác nếu:</B> da rất khô, bong tróc và cần lớp khóa ẩm dày hơn (xem mục “Da khô mà vẫn bị mụn”). Và “không chứa
        axit béo” không có nghĩa là làm giảm mụn — đó là cách chọn thành phần, không phải tác dụng.
      </P>
      <H3>Nhãn và gian hàng chính hãng ghi gì</H3>
      <P>
        Trên gian hàng chính hãng tại Việt Nam (Shopee: {SHOPEE_VN_STORE}), sản phẩm được ghi là{' '}
        <B>Kem dưỡng ẩm cho da mụn La Théorie Hydrating Gel Cream 60ml | Viêm nang lông &amp; da nhạy cảm | Không chứa axit béo</B>.
        Thành phần nổi bật in trên nhãn: Phytosqualane, Panthenol. Dung tích 60 ml, kết cấu gel-cream. Đây là thông tin nhà bán hàng công bố, không phải kết quả thử nghiệm.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về kem dưỡng ẩm cho da mụn nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng
        trên da mụn. Bài viết không nói kem dưỡng ẩm làm giảm mụn.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm">
        Nếu da bạn thấy bí với kem đặc và bạn đang tìm một kem dưỡng nhẹ cho da dầu mụn thiếu nước, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream 60ml</B> —
        gel-cream 0% axit béo với panthenol và phytosqualane.
      </Cta>

      <ReadMore
        links={[
          ['/vn/da-dau-mun-co-nen-duong-am-khong', 'Da dầu mụn có nên dưỡng ẩm không?'],
          ['/vn/da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao', 'Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?'],
          ['/vn/kem-duong-am-khong-chua-axit-beo-la-gi', 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?'],
          ['/vn/da-mun-khong-nen-dung-thanh-phan-gi', 'Da mụn không nên dùng thành phần gì?'],
          ['/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao', 'Da dễ bị viêm nang lông thì chăm sóc thế nào?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'da-mun-nen-dung-kem-duong-am-nao',
  title: 'Da mụn nên dùng kem dưỡng ẩm nào?',
  description:
    'Tiêu chí chọn kem dưỡng ẩm cho da mụn theo Bộ Y tế (2023), Hội Da liễu Singapore và StatPearls: nhẹ, cấp đủ ẩm, không gây bít tắc — kèm bảng so sánh gel, lotion, cream và khi nào nên tránh.',
  tldr: [
    'Chọn kem dưỡng nhẹ, cấp đủ ẩm, không gây bít tắc lỗ chân lông; Bộ Y tế (2023) khuyên dùng sản phẩm rửa mặt và dưỡng ẩm kiềm dầu phù hợp.',
    'Da khô mụn — nhất là khi đang dùng hoạt chất bôi — cần kem có cả chất hút ẩm và thành phần khóa ẩm, vẫn không gây bít tắc.',
    'Nam giới tiết nhiều bã nhờn hơn nhưng tiêu chí giống nhau; kết cấu gel thường dễ dùng hơn với người ngại bết dính.',
  ],
  cluster: 'C2',
  stage: 'recommend',
  targetQueries: [
    'da mụn nên dùng kem dưỡng ẩm nào',
    'da khô mụn nên dùng kem dưỡng nào',
    'kem dưỡng ẩm nào tốt cho nam da dầu mụn',
    'tiêu chí chọn kem dưỡng ẩm cho da mụn',
    'da dầu mụn nên dùng dưỡng ẩm gì',
  ],
  published: '2026-10-14',
  reviewer: 'jeon-ji-seung',
  reviewedOn: '2026-10-19',
  updated: '2026-10-22',
  faq: [
    { q: 'Da mụn nên dùng kem dưỡng ẩm nào?', a: 'Loại có kết cấu nhẹ, cấp đủ ẩm và không gây bít tắc lỗ chân lông — thường là gel hoặc dạng lỏng nhẹ gốc nước. Hướng dẫn của Bộ Y tế (2023) khuyên dùng sản phẩm rửa mặt và dưỡng ẩm kiềm dầu phù hợp. Kem dưỡng ẩm La Théorie Hydrating Gel Cream 60ml là một lựa chọn theo hướng này: gel-cream 0% axit béo, không có hương liệu, không có cồn ethanol và không có paraben theo bảng thành phần do công ty cung cấp; được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.' },
    { q: 'Da khô mụn nên dùng kem dưỡng nào?', a: 'Kem có cả chất hút ẩm (như glycerin, panthenol) và thành phần khóa ẩm, vẫn không gây bít tắc. Da mụn hay khô hơn khi đang dùng hoạt chất bôi; nếu đang dùng theo hướng dẫn của bác sĩ, hỏi bác sĩ trước khi thêm sản phẩm.' },
    { q: 'Kem dưỡng ẩm nào tốt cho nam da dầu mụn?', a: 'Tiêu chí giống nữ giới: nhẹ, gốc nước, không nhờn, không gây bít tắc. Da nam thường tiết nhiều bã nhờn hơn, nên kết cấu gel thường dễ dùng hơn.' },
    { q: 'Kem dưỡng ẩm có làm da mụn nổi thêm mụn không?', a: 'Hướng dẫn của Hội Da liễu Singapore ghi nhận kem dưỡng ẩm dành cho da mụn có thể dùng mà không tạo thêm nhân mụn. Sản phẩm gốc dầu hoặc dễ gây bít tắc thì nên tránh.' },
    { q: 'Da dầu mụn nên dùng dưỡng ẩm gì?', a: 'Dạng gel hoặc lỏng nhẹ gốc nước, không nhờn, không gây bít tắc. Nếu da dầu nhưng đang khô, bong tróc thì chọn loại có thêm thành phần khóa ẩm, vẫn không gây bít tắc. Kem dưỡng ẩm La Théorie Hydrating Gel Cream 60ml là gel-cream gốc nước, 0% axit béo, không có hương liệu và không có cồn ethanol theo bảng thành phần do công ty cung cấp.' },
    { q: '“Non-comedogenic” có nghĩa là chắc chắn không gây mụn?', a: 'Không hẳn. Đó là nhãn ghi trên bao bì, không phải bảo đảm; vẫn nên đọc bảng thành phần và theo dõi da khi dùng sản phẩm mới.' },
    { q: 'Da nhạy cảm mà vẫn bị mụn thì chọn kem dưỡng ẩm nào?', a: 'Tiêu chí không đổi — nhẹ, gốc nước, không gây bít tắc — và thêm lời khuyên của nhóm chuyên gia IFSI cho da nhạy cảm: hạn chế bớt mỹ phẩm, chọn sản phẩm không hương liệu, ít chất bảo quản, ít chất hoạt động bề mặt; thêm từng sản phẩm một. Kem dưỡng ẩm La Théorie Hydrating Gel Cream 60ml không có hương liệu, không có cồn ethanol và không có paraben theo bảng thành phần do công ty cung cấp.' },
  ],
  // 근거표 C2 · 2026-10-14 원문 확인 ([1] 2023판 tr.442 · [2]·[3] S06 세션 재확인)
  references: [
    { label: 'Bộ Y tế (2023). Quyết định 4416/QĐ-BYT — Tài liệu chuyên môn về các bệnh da liễu, chương Trứng cá (tr. 433–442).', url: 'https://benhvienhatrung.vn/wp-content/uploads/2024/02/quyet-dinh-4416-qd-byt-2023-huong-dan-chan-doan-va-dieu-tri-cac-benh-da-lieu.pdf' },
    { label: 'Saleh HM, Masood S, Schlessinger J. Acne Vulgaris. StatPearls (cập nhật 2026).', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459173/' },
    { label: 'Oon HH. và cộng sự (2019). Acne Management Guidelines by the Dermatological Society of Singapore. Journal of Clinical and Aesthetic Dermatology 12(7):34–50.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6715335/' },
    { label: 'Chularojanamontri L. và cộng sự (2014). Moisturizers for Acne: What are their Constituents? Journal of Clinical and Aesthetic Dermatology 7(5):36–44.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4025519/' },
    { label: 'Zaenglein AL. và cộng sự (2016). Guidelines of care for the management of acne vulgaris. Journal of the American Academy of Dermatology 74(5):945–973.', url: 'https://doi.org/10.1016/j.jaad.2015.12.037' },
    { label: 'Rahrovan S. và cộng sự (2018). Male versus female skin: What dermatologists and cosmeticians should know. International Journal of Women’s Dermatology 4(3):122–130.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6116811/' },
    { label: 'Misery L. và cộng sự (2020). Pathophysiology and management of sensitive skin: position paper from the special interest group on sensitive skin of the International Forum for the Study of Itch (IFSI). Journal of the European Academy of Dermatology and Venereology 34(2):222–229.', url: 'https://doi.org/10.1111/jdv.16000' },
  ],
  Body,
};
