import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL, SHOPEE_VN_STORE } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * W-1 · C5×C2 선택형 글 · 대중 어휘 `da nhạy cảm dễ nổi mụn` (쇼피 리뷰 설문 10-09 · 10-17 구글 연관검색) · 측정 축 M1·M3 의 질문 꼴.
 * 기획: `S06 윤준상 볼트\02_산출물\2026-10-17 VN 대중 어휘 진입 전략 — 「da nhạy cảm · da dễ nổi mụn」 검색·AI 에서 우리 제품이 뜨게 (10-17~11-11 · GEO 2판 보강).md` 4-B B1 「B1-구조」.
 * 근거는 근거표 세 종의 문장·출처만 쓴다(2026-10-14 원문 확인):
 *   C5 `La Théorie 민감 피부(C5) 일반 지식 근거표.md` — [1] IFSI 2017 정의 · [2] IFSI 2020 관리 · [3] 중앙피부과병원 2025
 *   C2 `La Théorie 여드름 피부 보습(C2) 일반 지식 근거표.md` — [4] Bộ Y tế QĐ 4416/2023 · [5] StatPearls · [6] Oon 2019 싱가포르 · [7] Chularojanamontri 2014
 *   C1 `La Théorie 지성 여드름(C1) 일반 지식 근거표.md` — [8] NICE NG198
 * 🔴 넘지 않는 선 — C5 3절 1·2·6: 민감 피부 일반 지식과 제품을 잇지 않는다 · 「IFSI 기준 충족」 금지 · 지방산을 민감의 원인으로 쓰지 않는다.
 *    C2 3절: 「AAD 권고」 금지 · 약 이름 금지 · 업계 자금 문헌(See 2026 · Goh 2016 · See 2018)은 인용하지 않는다 · 「보습제가 여드름을 줄인다」 금지 · non-comedogenic 을 우리 제품 문구로 쓰지 않는다.
 *    향·알코올·pH 여부는 데이터 없음(USP 정의서 7절) → 명시하지 않는다. 「không chứa axit béo ≠ non-comedogenic」 은 양방향으로 적는다(09-07 정정 3).
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · chữa · kê đơn · được chứng minh lâm sàng · ngăn ngừa · 기간 단언 · hết mụn. 「giá trị」·「đặc trị」도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 P002 · 상품명 문자열은 `2026-10-15 쇼피 VN 상품명 9종 정정 — 오늘 반영 진행안` 1장 2행 그대로(4-B B4 매장 문장 일치).
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C5&p=P002`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// 10-17 AI 개요·Perplexity 답들이 공통으로 쓰는 기준 — 뜻과 출처는 근거표 문장만
const CRITERIA: [string, string, string][] = [
  ['Kết cấu', 'Gel hoặc lỏng nhẹ (fluid) gốc nước thường được nhắc cho da dầu; gel-cream khi da dầu nhưng thiếu nước; lotion hoặc cream khi da khô, bong tróc', '[5][6][7]'],
  ['Không gốc dầu (oil-free)', 'Tránh sản phẩm gốc dầu hoặc dễ gây bít tắc — kể cả kem chống nắng', '[5][8]'],
  ['Không hương liệu', 'Với da nhạy cảm, IFSI khuyên chọn sản phẩm không hương liệu, ít chất bảo quản, ít chất hoạt động bề mặt', '[2]'],
  ['Non-comedogenic', 'Nhãn trên bao bì cho biết sản phẩm được đánh giá là ít gây bít tắc lỗ chân lông — không phải bảo đảm; kem dưỡng dành cho da mụn có thể dùng mà không tạo thêm nhân mụn', '[6]'],
  ['pH', 'Thường được nhắc ở bước rửa mặt hơn là kem dưỡng: NICE khuyên sản phẩm làm sạch không kiềm (pH trung tính hoặc hơi axit)', '[8]'],
];

// USP 정의서 4장 P002 · 라벨 대표 성분 · 상품명 2슬롯 — 명시할 수 있는 것만. 향·알코올·pH 는 데이터 없음이라 행을 두지 않는다
const LABEL: [string, string][] = [
  ['Kết cấu', 'Gel-cream — nhẹ trên da, dành cho da dầu thiếu nước'],
  ['Dầu và axit béo', 'Bỏ axit béo và các loại dầu không cần thiết theo công thức 0% Fatty Acid (không chứa axit béo)'],
  ['Thành phần nổi bật trên nhãn', 'Panthenol (cấp ẩm), Phytosqualane (làm mềm — squalane nguồn gốc thực vật)'],
  ['Dành cho (theo gian hàng)', 'Da mụn, viêm nang lông và da nhạy cảm'],
];

function Body() {
  return (
    <>
      <P>
        <B>Một kem dưỡng nhẹ — gel hoặc gel-cream — không gốc dầu, không gây bít tắc, và càng ít thành phần dễ kích ứng càng tốt.</B> Với da mụn,
        hướng dẫn của Hội Da liễu Singapore mô tả kem dưỡng phù hợp là loại kết cấu nhẹ, cấp đủ ẩm và không gây bít tắc lỗ chân lông [6]; với da nhạy cảm,
        nhóm chuyên gia của Diễn đàn Nghiên cứu Ngứa Quốc tế (IFSI) khuyên hạn chế bớt mỹ phẩm hoặc chọn sản phẩm dễ dung nạp — ít chất bảo quản,
        ít chất hoạt động bề mặt, không hương liệu [2]. Khi hai điều này cùng đúng trên một làn da, bạn ghép cả hai bộ tiêu chí lại, rồi đọc bảng thành phần.
      </P>
      <P>
        <B>Ba tình trạng dễ bị gộp làm một.</B> “Da nhạy cảm” là chuyện cảm giác — châm chích, nóng rát, ngứa với những kích thích bình thường, và không
        giải thích được bằng một bệnh da [1]; “da mụn” là trứng cá, một bệnh viêm mạn tính của nang lông tuyến bã [4]; còn viêm nang lông là tình trạng khác nữa,
        được bàn trong bài <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>.
        Một làn da có thể gặp cả ba — nhưng tiêu chí chọn kem đến từ từng tình trạng, không từ một nhãn chung.
      </P>

      <H2 id="tieu-chi">AI và các bài tư vấn dùng tiêu chí nào</H2>
      <P>
        Những bài trả lời câu hỏi này — từ hiệu thuốc, trang tư vấn đến trợ lý AI — gần như dùng chung một bộ tiêu chí. Đây là nghĩa của từng tiêu chí theo các
        hướng dẫn mà bài này trích dẫn:
      </P>
      <Table head={['Tiêu chí', 'Nghĩa là', 'Nguồn']}>
        {CRITERIA.map(([k, v, src]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{k}</td>
            <td className="py-3 pr-4 text-gray-700">{v}</td>
            <td className="py-3 text-gray-500 whitespace-nowrap">{src}</td>
          </tr>
        ))}
      </Table>
      <P>
        Hai lưu ý khi đọc bảng. Thứ nhất, chất hút ẩm (glycerin, panthenol, axit hyaluronic) dùng một mình có thể làm tăng lượng nước mất qua da, nên thường được
        kết hợp với thành phần khóa ẩm [7] — kem “nhẹ” không có nghĩa là chỉ có nước. Thứ hai, “non-comedogenic”, “oil-free” và “không chứa axit béo” là ba nhãn
        khác nhau, không thay thế cho nhau — nhãn thứ ba được giải thích trong bài{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?</Link>
      </P>

      <H2 id="da-nhay-cam-them-gi">Da nhạy cảm cần thêm gì ngoài các tiêu chí trên</H2>
      <P>
        Nguyên nhân của da nhạy cảm đến nay vẫn chưa được hiểu rõ và có thể do nhiều yếu tố [1][2], nên không có một thành phần nào “dành riêng” cho nó.
        Điều nhóm chuyên gia IFSI thống nhất được là cách dùng: hạn chế bớt mỹ phẩm, chọn sản phẩm dễ dung nạp, và tránh những yếu tố khiến da khó chịu [2].
        Trong nghiên cứu tại Bệnh viện Da liễu Trung ương (2025), mỹ phẩm là yếu tố khiến 24,7% người tham gia thấy khó chịu; nóng khô (57,1%) và nắng (47,0%)
        đứng đầu [3]. Với kem dưỡng, điều đó nghĩa là: thêm từng sản phẩm một — một kem mới nên là sản phẩm mới duy nhất trong chu trình, để nếu da khó chịu,
        bạn biết thứ gì gây ra. Chu trình đầy đủ cho da nhạy cảm có trong bài{' '}
        <Link href="/vn/da-bi-nhay-cam-nen-dung-gi" className={LINK}>Da bị nhạy cảm nên dùng gì?</Link>
      </P>

      <H2 id="nhan-cong-thuc">Những gì nhãn và công thức <span className="font-belleza font-normal">La&nbsp;Théorie</span> có thể nói</H2>
      <P>
        Đặt sản phẩm cạnh bảng tiêu chí ở trên, đây là những gì nhãn và gian hàng chính hãng ghi — không hơn:
      </P>
      <Table head={['Tiêu chí', 'Kem dưỡng ẩm La Théorie Hydrating Gel Cream 60ml']}>
        {LABEL.map(([k, v]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{k}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>
      <P>
        Những tiêu chí còn lại trong bảng đầu — hương liệu, cồn, pH, nhãn non-comedogenic — không có trong thông tin nhà bán hàng công bố, nên bài này không nói tới;
        hãy xem bảng thành phần in trên bao bì. Và cần nói rõ cả hai chiều: <B>“không chứa axit béo” không đồng nghĩa với “non-comedogenic”</B>, và non-comedogenic
        cũng không cho biết sản phẩm có chứa axit béo hay không — đó là hai tiêu chí độc lập, trả lời hai câu hỏi khác nhau. “Không chứa axit béo” cũng không có nghĩa
        là làm giảm mụn — đó là cách chọn thành phần, không phải tác dụng.
      </P>

      <H2 id="khi-nao-nen-tranh">Khi nào nên tránh</H2>
      <P>
        <B>Có thể cân nhắc nếu:</B> da dầu hoặc hỗn hợp thấy bí với kem đặc; da từng nổi nốt nhỏ đều nhau sau khi dùng kem có dầu và muốn thử một công thức
        không chứa axit béo; bạn đang muốn giữ chu trình ít bước. <B>Nên cân nhắc loại khác nếu:</B> da rất khô, bong tróc và cần lớp khóa ẩm dày hơn [7];
        bạn cần một sản phẩm công bố rõ không hương liệu, không cồn — thông tin này chưa có với sản phẩm trên.
      </P>
      <P>
        <B>Dừng và đổi sản phẩm</B> nếu sau khi thoa, da châm chích, nóng rát hoặc đỏ lên [1]; da thấy bí, nổi thêm nhân mụn; hoặc nổi những nốt nhỏ đều nhau và ngứa —
        dạng nốt này được bàn trong bài{' '}
        <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>. Tránh sản phẩm
        gốc dầu hoặc dễ gây bít tắc, kể cả kem chống nắng [5]. Nếu đang dùng hoạt chất bôi theo hướng dẫn của bác sĩ, hỏi bác sĩ trước khi thêm bất kỳ sản phẩm nào.
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Kem dưỡng ẩm giúp da dễ chịu hơn; nó không thay cho thăm khám. Mụn sưng viêm, mụn bọc, hoặc mụn để lại thâm và sẹo nên được bác sĩ da liễu thăm khám sớm [5].
        Nếu da đỏ lan rộng, sưng, bong vảy thành mảng, nổi mụn nước, chảy dịch hoặc ngứa kéo dài, hãy đến bác sĩ da liễu — viêm da cơ địa, viêm da tiếp xúc hay
        trứng cá đỏ cần được bác sĩ phân biệt.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Tiêu chí kem dưỡng ẩm cho da mụn đến từ hướng dẫn của Hội Da liễu Singapore (2019) [6], tổng quan StatPearls [5] và hướng dẫn NICE (Anh, 2021) [8];
        hướng dẫn hiện hành của Bộ Y tế (QĐ 4416/QĐ-BYT, 2023) đưa sản phẩm rửa mặt và dưỡng ẩm kiềm dầu vào phần phòng bệnh trứng cá [4]. Lời khuyên cho da nhạy cảm
        đến từ nhóm chuyên gia IFSI (2017, 2020) [1][2] và nghiên cứu tại Bệnh viện Da liễu Trung ương (2025) [3]. Cả hai nhóm tài liệu đều ghi nhận bằng chứng về
        chăm sóc da còn hạn chế và dựa nhiều vào ý kiến chuyên gia.
      </P>
      <H3>2. Kem dưỡng ẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Kem Dưỡng Ẩm <span className="font-belleza">La&nbsp;Théorie</span> Hydrating Gel Cream 60ml là dạng gel-cream: bỏ axit béo và các loại dầu không cần thiết
        theo công thức <B>0% Fatty Acid</B>, cấp ẩm bằng panthenol và làm mềm bằng phytosqualane (squalane nguồn gốc thực vật). Dành cho da dầu thiếu nước —
        nhẹ trên da mà vẫn giữ ẩm. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc (theo tài liệu của công ty).
      </P>
      <H3>Nhãn và gian hàng chính hãng ghi gì</H3>
      <P>
        Trên gian hàng chính hãng tại Việt Nam (Shopee: {SHOPEE_VN_STORE}), sản phẩm được ghi là{' '}
        <B>Kem dưỡng ẩm cho da mụn La Théorie Hydrating Gel Cream 60ml | Viêm nang lông &amp; da nhạy cảm | Không chứa axit béo</B>.
        Thành phần nổi bật in trên nhãn: Phytosqualane, Panthenol. Dung tích 60 ml, kết cấu gel-cream. Đây là thông tin nhà bán hàng công bố, không phải kết quả thử nghiệm.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về da nhạy cảm và kem dưỡng ẩm cho da mụn nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng
        trên da nhạy cảm hay da mụn. Bài viết không khẳng định sản phẩm đáp ứng các tiêu chí của IFSI hay của các hướng dẫn trên — hãy xem bảng thành phần trên bao bì.
        Bài viết không nói kem dưỡng ẩm làm giảm mụn. Một số tác giả của tài liệu [2] là cố vấn cho các công ty mỹ phẩm, như chính bài báo đã công bố.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm">
        Nếu da bạn vừa dễ châm chích với sản phẩm mới vừa hay nổi mụn, và đang tìm một kem dưỡng nhẹ cho da dầu mụn thiếu nước, có thể tham khảo{' '}
        <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream 60ml</B> — gel-cream 0% axit béo với panthenol và phytosqualane. Hãy thêm nó như sản phẩm mới duy nhất
        trong chu trình, và theo dõi da.
      </Cta>

      <ReadMore
        links={[
          ['/vn/da-bi-nhay-cam-nen-dung-gi', 'Da bị nhạy cảm nên dùng gì?'],
          ['/vn/da-mun-nen-dung-kem-duong-am-nao', 'Da mụn nên dùng kem dưỡng ẩm nào?'],
          ['/vn/kem-duong-am-khong-chua-axit-beo-la-gi', 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?'],
          ['/vn/da-bi-mun-nam-nen-dung-my-pham-gi', 'Da bị mụn nấm nên dùng mỹ phẩm gì?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao',
  title: 'Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?',
  description:
    'Kem dưỡng ẩm cho da nhạy cảm dễ nổi mụn: tiêu chí theo IFSI, Hội Da liễu Singapore và NICE — nhẹ, không gốc dầu, không gây bít tắc, không hương liệu.',
  tldr: [
    'Ghép hai bộ tiêu chí: cho da mụn — kết cấu nhẹ, không gốc dầu, không gây bít tắc (Hội Da liễu Singapore, NICE); cho da nhạy cảm — ít sản phẩm hơn, không hương liệu, ít chất bảo quản và chất hoạt động bề mặt (IFSI).',
    'Da nhạy cảm, da mụn và viêm nang lông là ba tình trạng khác nhau, có thể cùng có trên một làn da — tiêu chí đến từ từng tình trạng, không từ một nhãn chung.',
    'Với Kem dưỡng ẩm La Théorie Hydrating Gel Cream, điều nhãn nói được là: gel-cream, không chứa axit béo, panthenol và phytosqualane; hương liệu, cồn, pH chưa công bố — bài không khẳng định.',
  ],
  cluster: 'C5',
  stage: 'recommend',
  targetQueries: [
    'kem dưỡng ẩm cho da nhạy cảm dễ nổi mụn',
    'da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào',
    'da dễ nổi mụn nên dùng kem dưỡng ẩm nào',
    'kem dưỡng ẩm cho da dầu mụn nhạy cảm',
    'kem dưỡng nào phù hợp cho da dầu mụn nhạy cảm',
  ],
  published: '2026-10-18',
  faq: [
    { q: 'Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?', a: 'Kem có kết cấu nhẹ (gel hoặc gel-cream), không gốc dầu, không gây bít tắc lỗ chân lông — và với da nhạy cảm thì thêm: không hương liệu, ít chất bảo quản, ít chất hoạt động bề mặt, theo hướng dẫn của Hội Da liễu Singapore, NICE và nhóm chuyên gia IFSI. Thêm từng sản phẩm một và đọc bảng thành phần.' },
    { q: 'Kem dưỡng ẩm cho da dầu mụn nhạy cảm?', a: 'Dạng gel hoặc gel-cream gốc nước, không nhờn, không gây bít tắc; ưu tiên loại không hương liệu. Nếu da dầu nhưng đang khô, bong tróc thì chọn loại có thêm thành phần khóa ẩm, vẫn không gây bít tắc.' },
    { q: 'Kem dưỡng ẩm cho da dầu nhạy cảm?', a: 'Tiêu chí giống da dầu mụn: nhẹ, gốc nước, không gây bít tắc — cộng thêm lời khuyên của IFSI cho da nhạy cảm là hạn chế bớt mỹ phẩm và chọn sản phẩm không hương liệu, ít chất bảo quản. Một kem mới nên là sản phẩm mới duy nhất trong chu trình, để dễ nhận ra thứ gì làm da khó chịu.' },
    { q: 'Kem dưỡng ẩm cho da dầu mụn Hàn Quốc?', a: 'Xuất xứ không phải tiêu chí; vẫn là kết cấu nhẹ, không gốc dầu, không gây bít tắc. Nếu bạn tìm một kem dưỡng Hàn Quốc theo hướng này, Kem dưỡng ẩm La Théorie Hydrating Gel Cream 60ml là gel-cream không chứa axit béo với panthenol và phytosqualane, bán chính hãng trên Shopee Việt Nam (la_theoriepa.vn).' },
    { q: 'Kem dưỡng ẩm không chứa axit béo có phải là non-comedogenic không?', a: 'Không. Đó là hai nhãn khác nhau: non-comedogenic nói về khả năng gây bít tắc lỗ chân lông, không chứa axit béo nói về việc công thức có axit béo hay không. Một sản phẩm có thể đạt tiêu chí này mà không đạt tiêu chí kia — cần xem cả hai.' },
  ],
  // 근거표 C5 1절 A·B·C · C2 1절 #10(2023 현행판)·#3·#4·#7 · C1 1절 #4 — 2026-10-14 원문 확인
  references: [
    { label: 'Misery L. và cộng sự (2017). Definition of Sensitive Skin: An Expert Position Paper from the Special Interest Group on Sensitive Skin of the International Forum for the Study of Itch. Acta Dermato-Venereologica 97(1):4–6.', url: 'https://doi.org/10.2340/00015555-2397' },
    { label: 'Misery L. và cộng sự (2020). Pathophysiology and management of sensitive skin: position paper from the special interest group on sensitive skin of the International Forum for the Study of Itch (IFSI). Journal of the European Academy of Dermatology and Venereology 34(2):222–229.', url: 'https://doi.org/10.1111/jdv.16000' },
    { label: 'Nguyễn Thị Hồng Nhung, Nguyễn Thị Hà Vinh, Vũ Nguyệt Minh (2025). Mức độ phổ biến và các yếu tố liên quan của hội chứng da nhạy cảm tự nhận định. Tạp chí Y học Việt Nam 554(3):302–306.', url: 'https://vnras.com/muc-do-pho-bien-va-cac-yeu-to-lien-quan-cua-hoi-chung-da-nhay-cam-tu-nhan-dinh/' },
    { label: 'Bộ Y tế (2023). Quyết định 4416/QĐ-BYT — Tài liệu chuyên môn về các bệnh da liễu, chương Trứng cá (tr. 433–442).', url: 'https://benhvienhatrung.vn/wp-content/uploads/2024/02/quyet-dinh-4416-qd-byt-2023-huong-dan-chan-doan-va-dieu-tri-cac-benh-da-lieu.pdf' },
    { label: 'Saleh HM, Masood S, Schlessinger J. Acne Vulgaris. StatPearls (cập nhật 2026).', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459173/' },
    { label: 'Oon HH. và cộng sự (2019). Acne Management Guidelines by the Dermatological Society of Singapore. Journal of Clinical and Aesthetic Dermatology 12(7):34–50.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6715335/' },
    { label: 'Chularojanamontri L. và cộng sự (2014). Moisturizers for Acne: What are their Constituents? Journal of Clinical and Aesthetic Dermatology 7(5):36–44.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4025519/' },
    { label: 'NICE (2021, cập nhật 2026). Acne vulgaris: management (NG198).', url: 'https://www.nice.org.uk/guidance/ng198' },
  ],
  Body,
};
