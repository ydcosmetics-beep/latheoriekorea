import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL, SHOPEE_VN_STORE } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * W-2 · C5×C1 선택형 글 · 대중 어휘 `sữa rửa mặt cho da nhạy cảm dễ nổi mụn` (쇼피 리뷰 설문 10-09 · 10-17 Perplexity 가 제품 실명을 드는 질문) · 측정 축 M4.
 * 기획: `S06 윤준상 볼트\02_산출물\2026-10-17 VN 대중 어휘 진입 전략 — 「da nhạy cảm · da dễ nổi mụn」 검색·AI 에서 우리 제품이 뜨게 (10-17~11-11 · GEO 2판 보강).md` 4-B B1 — W-1 과 같은 골격.
 * 근거는 근거표 세 종의 문장·출처만 쓴다(2026-10-14 원문 확인):
 *   C5 `La Théorie 민감 피부(C5) 일반 지식 근거표.md` — [1] IFSI 2017 정의 · [2] IFSI 2020 관리 · [3] 중앙피부과병원 2025
 *   C1 `La Théorie 지성 여드름(C1) 일반 지식 근거표.md` — [4] StatPearls · [5] NICE NG198 · [6] Bộ Y tế QĐ 4416/2023
 *   (C2 근거표 Q1 「Rửa mặt quá mạnh tay có thể làm da kích ứng và khô hơn」 은 StatPearls 출처로만 인용)
 * 🔴 넘지 않는 선 — C1 3절 5·10: 「세안하면 여드름이 줄어든다」 금지 · QĐ 75 「Rửa mặt bằng xà phòng」 인용 금지 · 저pH 를 「NICE 권고 충족」으로 잇지 않는다 ·
 *    C1 3절 6: 곰팡이성 여드름 프레임을 C1 에 쓰지 않는다(viêm nang lông 은 「다른 상태」로 한 줄만) · C5 3절 1·2: 일반 지식과 제품을 잇지 않는다 · 「IFSI 기준 충족」 금지.
 *    향·방부제 여부는 데이터 없음 → 명시하지 않는다. 출처 표기는 「Bộ Y tế (QĐ 4416/QĐ-BYT, 2023)」까지 — 문서 제목에 금지어가 있다.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · chữa · kê đơn · được chứng minh lâm sàng · ngăn ngừa · 기간 단언 · hết mụn. 「giá trị」·「đặc trị」도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 클렌저(지방산 배제 계면활성제 · 저pH)만 · 상품명 문자열은 `2026-10-15 쇼피 VN 상품명 9종 정정 — 오늘 반영 진행안` 1장 3행 그대로(4-B B4).
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C5&p=P001`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// 세안 단계의 기준 — 뜻과 출처는 근거표 문장만 (C1 Q3·Q4 · C5 Q1 보강 · C5 Q4)
const CRITERIA: [string, string, string][] = [
  ['Dạng sản phẩm', 'Ưu tiên sữa rửa mặt dịu nhẹ, không kiềm thay cho xà phòng thông thường hay sản phẩm tẩy rửa mạnh', '[4][5]'],
  ['pH', 'Không kiềm: pH trung tính hoặc hơi axit', '[5]'],
  ['Chất hoạt động bề mặt', 'Ít chất hoạt động bề mặt; xà phòng và chất tẩy rửa là một trong những yếu tố liên quan chặt nhất với da nhạy cảm', '[2][3]'],
  ['Hương liệu, chất bảo quản', 'Không hương liệu, ít chất bảo quản', '[2]'],
  ['Cách rửa', '2 lần mỗi ngày; không chà xát mạnh, không tự nặn mụn — rửa quá mạnh tay có thể làm da kích ứng và khô hơn', '[4][5]'],
];

// USP 정의서 4장 클렌저 · 상품명 2슬롯 — 명시할 수 있는 것만. 향·방부제는 데이터 없음이라 행을 두지 않는다
const LABEL: [string, string][] = [
  ['Dạng sản phẩm', 'Gel rửa mặt, 210 ml'],
  ['Chất hoạt động bề mặt', 'Chất hoạt động bề mặt không chứa axit béo (0% Fatty Acid)'],
  ['pH', 'pH thấp — theo tài liệu của công ty — để da không bị căng rít sau khi rửa'],
  ['Hương liệu', 'Không có hương liệu (Parfum/Fragrance) trong bảng thành phần do công ty cung cấp'],
  ['Cồn (ethanol) · paraben', 'Không có Alcohol / Alcohol Denat., không có paraben trong bảng thành phần'],
  ['Dành cho (theo gian hàng)', 'Da dầu mụn và hàng rào bảo vệ da'],
];

function Body() {
  return (
    <>
      <P>
        <B>Một sữa rửa mặt dịu nhẹ, không kiềm (pH trung tính hoặc hơi axit), ít chất hoạt động bề mặt, không hương liệu — dùng 2 lần mỗi ngày, không chà xát.</B>{' '}
        Hướng dẫn NICE khuyên người bị mụn rửa mặt 2 lần mỗi ngày bằng sản phẩm làm sạch không kiềm [5]; nhóm chuyên gia của Diễn đàn Nghiên cứu Ngứa Quốc tế (IFSI)
        khuyên người có da nhạy cảm chọn sản phẩm dễ dung nạp — ít chất bảo quản, ít chất hoạt động bề mặt, không hương liệu [2]. Trong nghiên cứu tại Bệnh viện
        Da liễu Trung ương (2025), xà phòng và chất tẩy rửa nằm trong nhóm yếu tố liên quan chặt chẽ nhất với da nhạy cảm [3]. Vì vậy với làn da vừa nhạy cảm vừa
        dễ nổi mụn, bước rửa mặt là bước đáng chọn kỹ nhất — và cũng là bước dễ làm quá tay nhất.
      </P>
      <P>
        <B>Ba tình trạng dễ bị gộp làm một.</B> “Da nhạy cảm” là chuyện cảm giác — châm chích, nóng rát, ngứa với những kích thích bình thường, và không giải thích
        được bằng một bệnh da [1]; “da mụn” là trứng cá, một bệnh viêm mạn tính của nang lông tuyến bã [6]; còn viêm nang lông là tình trạng khác nữa, được bàn trong bài{' '}
        <Link href="/vn/da-de-bi-viem-nang-long-thi-cham-soc-the-nao" className={LINK}>Da dễ bị viêm nang lông thì chăm sóc thế nào?</Link>. Bài này nói về bước
        rửa mặt cho hai tình trạng đầu khi chúng cùng có trên một làn da.
      </P>

      <H2 id="tieu-chi">Các hướng dẫn và bài tư vấn dùng tiêu chí nào</H2>
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
        Có một điều các tiêu chí trên không hứa: rửa mặt đúng cách giúp da dễ chịu hơn, nhưng chưa có bằng chứng rằng riêng việc đổi sữa rửa mặt làm giảm mụn.
        Mụn trứng cá là tình trạng viêm mạn tính của nang lông tuyến bã [4], nên chăm sóc cần đều đặn và lâu dài. Vì sao da dầu dễ bị mụn được giải thích trong bài{' '}
        <Link href="/vn/tai-sao-da-dau-lai-de-bi-mun" className={LINK}>Tại sao da dầu lại dễ bị mụn?</Link>
      </P>

      <H2 id="da-nhay-cam-them-gi">Da nhạy cảm cần thêm gì ở bước rửa mặt</H2>
      <P>
        Nguyên nhân của da nhạy cảm đến nay vẫn chưa được hiểu rõ và có thể do nhiều yếu tố [1][2]. Lời khuyên chính của IFSI là hạn chế bớt mỹ phẩm và chọn sản phẩm
        dễ dung nạp [2]. Ở bước rửa mặt, điều đó nghĩa là: một sản phẩm, không chà xát mạnh [4][5]; và nếu da châm chích, nóng rát hay căng ngay sau khi rửa, đó là
        tín hiệu để đổi sản phẩm — không phải để rửa thêm. Da nhạy cảm và hàng rào bảo vệ da yếu hay đi cùng nhau, dù chưa có bằng chứng đó là nguyên nhân trực tiếp [2];
        chuyện hàng rào được bàn trong bài{' '}
        <Link href="/vn/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu" className={LINK}>Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?</Link>
      </P>

      <H2 id="da-dau-mun-nhay-cam">Sữa rửa mặt cho da dầu mụn nhạy cảm</H2>
      <P>
        Với làn da vừa dầu, vừa hay nổi mụn, vừa dễ châm chích — “da dầu mụn nhạy cảm” theo cách gọi phổ biến — tiêu chí ở bước rửa mặt không đổi:
        sản phẩm dịu nhẹ, không kiềm, 2 lần mỗi ngày, không chà xát [5]; ít chất hoạt động bề mặt, không hương liệu, ít chất bảo quản [2]. Da dầu không cần
        sản phẩm tẩy rửa mạnh hơn — rửa quá mạnh tay làm da khô và kích ứng hơn [4][5]. “Không hương liệu”, “không cồn” và “không paraben” đọc được ngay trên
        bảng thành phần; với gel rửa mặt La Théorie, cả ba đều không có theo <Link href="/vn/thanh-phan" className={LINK}>bảng thành phần đầy đủ</Link>.
      </P>

      <H2 id="nhan-cong-thuc">Những gì nhãn và công thức <span className="font-belleza font-normal">La&nbsp;Théorie</span> có thể nói</H2>
      <P>
        Đặt sản phẩm cạnh bảng tiêu chí ở trên, đây là những gì nhãn và gian hàng chính hãng ghi — không hơn:
      </P>
      <Table head={['Tiêu chí', 'Gel rửa mặt La Théorie Clearing Gel 210ml']}>
        {LABEL.map(([k, v]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{k}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>
      <P>
        Theo bảng thành phần do công ty cung cấp (xem <Link href="/vn/thanh-phan" className={LINK}>bảng thành phần đầy đủ của 6 sản phẩm</Link>), gel rửa mặt này không có hương liệu (Parfum), không có cồn ethanol
        và không có paraben. Bài viết không
        khẳng định sản phẩm đáp ứng tiêu chí của NICE hay IFSI; “pH thấp” là thông tin của nhà sản xuất, không phải kết quả kiểm nghiệm độc lập. Và “không chứa
        axit béo” là cách chọn thành phần, không phải tác dụng: nó không có nghĩa là làm giảm mụn.
      </P>

      <H2 id="khi-nao-nen-tranh">Khi nào nên tránh</H2>
      <P>
        <B>Có thể cân nhắc nếu:</B> da bạn thấy căng rít, “sạch kin kít” sau khi rửa với sữa rửa mặt hiện tại; bạn muốn giữ chu trình ít bước.{' '}
        <B>Nên cân nhắc loại khác nếu:</B> bạn cần một sản phẩm công bố pH cụ thể hoặc kết quả thử nghiệm trên da nhạy cảm — hai thông tin này chưa có với sản phẩm trên;
        hoặc bác sĩ đã chỉ định cho bạn một loại sữa rửa mặt khác.
      </P>
      <P>
        <B>Dừng và đổi sản phẩm</B> nếu ngay sau khi rửa, da châm chích, nóng rát, đỏ lên hoặc căng kéo dài [1]; hoặc da khô và bong tróc hơn khi dùng.
        Không chà xát mạnh và không tự nặn mụn — việc này có thể làm xuất hiện mụn mới và tăng nguy cơ để lại sẹo [4][5]. Nếu đang dùng hoạt chất bôi theo hướng dẫn
        của bác sĩ, hỏi bác sĩ trước khi đổi sữa rửa mặt.
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Mụn sưng viêm, mụn bọc, hoặc mụn để lại thâm và sẹo nên được bác sĩ da liễu thăm khám sớm [4]. Nếu da đỏ lan rộng, sưng, bong vảy thành mảng, nổi mụn nước,
        chảy dịch hoặc ngứa kéo dài, hãy đến bác sĩ da liễu — viêm da cơ địa, viêm da tiếp xúc hay trứng cá đỏ cần được bác sĩ phân biệt.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Khuyến nghị rửa mặt 2 lần mỗi ngày bằng sản phẩm không kiềm đến từ hướng dẫn NICE (Anh, 2021) — chính NICE ghi nhận bằng chứng về chăm sóc da còn hạn chế [5];
        tổng quan StatPearls xếp sữa rửa mặt dịu nhẹ vào chăm sóc cơ bản cùng kem dưỡng ẩm không gây bít tắc và chống nắng [4]; hướng dẫn hiện hành của Bộ Y tế
        (QĐ 4416/QĐ-BYT, 2023) đưa “sản phẩm rửa mặt, dưỡng ẩm kiềm dầu” vào phần phòng bệnh trứng cá [6]. Lời khuyên cho da nhạy cảm đến từ nhóm chuyên gia IFSI
        (2017, 2020) [1][2] và nghiên cứu tại Bệnh viện Da liễu Trung ương (2025) [3].
      </P>
      <H3>2. Gel rửa mặt <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Gel Rửa Mặt <span className="font-belleza">La&nbsp;Théorie</span> Clearing Gel 210ml làm sạch bằng chất hoạt động bề mặt không chứa axit béo, với độ pH thấp,
        để da không bị căng rít sau khi rửa. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>Nhãn và gian hàng chính hãng ghi gì</H3>
      <P>
        Trên gian hàng chính hãng tại Việt Nam (Shopee: {SHOPEE_VN_STORE}), sản phẩm được ghi là{' '}
        <B>Sữa rửa mặt dạng gel La Théorie Clearing Gel 210ml | Cho da dầu mụn &amp; hàng rào bảo vệ da | Không chứa axit béo</B>.
        Dung tích 210 ml, dạng gel. Đây là thông tin nhà bán hàng công bố, không phải kết quả thử nghiệm. Bảng thành phần đầy đủ: <Link href="/vn/thanh-phan" className={LINK}>bảng thành phần đầy đủ của 6 sản phẩm</Link>.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về da nhạy cảm, da dầu và mụn nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng trên
        da nhạy cảm hay da mụn. Rửa mặt đúng cách giúp da dễ chịu hơn — nhưng chưa có bằng chứng rằng riêng việc đổi sữa rửa mặt làm giảm mụn. Bài viết không khẳng định
        sản phẩm đáp ứng các tiêu chí của IFSI hay NICE — hãy xem bảng thành phần trên bao bì. Một số tác giả của tài liệu [2] là cố vấn cho các công ty mỹ phẩm,
        như chính bài báo đã công bố.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm" image="/vn-sg/p001-cleanser.webp" alt="La Théorie Clearing Gel 210ml">
        Nếu da bạn hay căng rít sau khi rửa và bạn đang tìm một sữa rửa mặt dịu nhẹ cho da dầu mụn, có thể tham khảo <B>Gel Rửa Mặt La Théorie Clearing Gel 210ml</B> —
        chất làm sạch không chứa axit béo, pH thấp, không để lại cảm giác căng rít sau khi rửa. Hãy thêm nó như sản phẩm mới duy nhất trong chu trình, và theo dõi da.
      </Cta>

      <ReadMore
        links={[
          ['/vn/tai-sao-da-dau-lai-de-bi-mun', 'Tại sao da dầu lại dễ bị mụn?'],
          ['/vn/da-bi-nhay-cam-nen-dung-gi', 'Da bị nhạy cảm nên dùng gì?'],
          ['/vn/da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao', 'Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?'],
          ['/vn/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu', 'Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'sua-rua-mat-cho-da-nhay-cam-de-noi-mun',
  title: 'Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: chọn thế nào?',
  description:
    'Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: tiêu chí theo NICE và IFSI — dịu nhẹ, không kiềm, ít chất hoạt động bề mặt, không hương liệu — và khi nào nên tránh.',
  tldr: [
    'Chọn sữa rửa mặt dịu nhẹ, không kiềm (pH trung tính hoặc hơi axit), ít chất hoạt động bề mặt, không hương liệu; rửa 2 lần mỗi ngày, không chà xát (NICE, IFSI).',
    'Xà phòng và chất tẩy rửa nằm trong nhóm yếu tố liên quan chặt nhất với da nhạy cảm ở nghiên cứu tại Bệnh viện Da liễu Trung ương (2025); rửa quá mạnh tay có thể làm da kích ứng và khô hơn.',
    'Với Gel rửa mặt La Théorie Clearing Gel, điều nhãn nói được là: chất hoạt động bề mặt không chứa axit béo, pH thấp (theo nhà sản xuất); không có hương liệu, không có cồn ethanol và không có paraben theo bảng thành phần; pH cụ thể chưa công bố.',
  ],
  cluster: 'C5',
  stage: 'recommend',
  targetQueries: [
    'sữa rửa mặt cho da nhạy cảm dễ nổi mụn',
    'sữa rửa mặt cho da dầu mụn nhạy cảm',
    'da nhạy cảm dễ nổi mụn nên rửa mặt thế nào',
    'sữa rửa mặt không kiềm cho da mụn',
    'sản phẩm skincare cho da dầu mụn nhạy cảm',
    'da dầu mụn nhạy cảm nên dùng sữa rửa mặt nào',
    'sữa rửa mặt cho da dầu mụn nhạy cảm',
  ],
  published: '2026-10-18',
  reviewer: 'jeon-ji-seung',
  reviewedOn: '2026-10-19',
  updated: '2026-10-19',
  faq: [
    { q: 'Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: chọn thế nào?', a: 'Chọn loại dịu nhẹ, không kiềm (pH trung tính hoặc hơi axit), ít chất hoạt động bề mặt, không hương liệu, và dùng 2 lần mỗi ngày, không chà xát. NICE khuyên sản phẩm làm sạch không kiềm cho da mụn; nhóm chuyên gia IFSI khuyên sản phẩm ít chất hoạt động bề mặt, không hương liệu cho da nhạy cảm.' },
    { q: 'Sữa rửa mặt cho da dầu mụn nhạy cảm?', a: 'Tiêu chí như trên: dịu nhẹ, không kiềm, ít chất hoạt động bề mặt, không hương liệu. Da dầu cũng không cần sản phẩm tẩy rửa mạnh — rửa quá mạnh tay có thể làm da kích ứng và khô hơn.' },
    { q: 'Da nhạy cảm dễ nổi mụn nên rửa mặt mấy lần một ngày?', a: 'Hướng dẫn NICE khuyên rửa mặt 2 lần mỗi ngày bằng sản phẩm không kiềm. Rửa nhiều hơn không có bằng chứng giúp giảm mụn, và rửa quá mạnh tay có thể làm da kích ứng và khô hơn.' },
    { q: 'Sữa rửa mặt pH bao nhiêu là phù hợp cho da nhạy cảm dễ nổi mụn?', a: 'NICE khuyên sản phẩm làm sạch không kiềm — pH trung tính hoặc hơi axit. Nếu bao bì không ghi pH, hãy theo dõi cảm giác da sau khi rửa: châm chích, nóng rát hay căng rít là tín hiệu nên đổi sản phẩm.' },
    { q: 'Da dầu mụn nhạy cảm nên dùng sữa rửa mặt nào?', a: 'Loại dịu nhẹ, không kiềm (pH trung tính hoặc hơi axit), ít chất hoạt động bề mặt, không hương liệu — theo NICE cho da mụn và IFSI cho da nhạy cảm — dùng 2 lần mỗi ngày, không chà xát. Gel rửa mặt La Théorie Clearing Gel 210ml không có hương liệu, không có cồn ethanol và không có paraben theo bảng thành phần do công ty cung cấp; pH thấp theo tài liệu của công ty.' },
    { q: 'Sản phẩm skincare cho da dầu mụn nhạy cảm?', a: 'Ba bước cơ bản theo StatPearls: sữa rửa mặt dịu nhẹ, kem dưỡng ẩm không gây bít tắc và chống nắng phù hợp. Với da nhạy cảm, nhóm chuyên gia IFSI khuyên hạn chế bớt mỹ phẩm và thêm từng sản phẩm một.' },
  ],
  // 근거표 C5 1절 A·B·C · C1 1절 #7·#4·#1(2023 현행판) — 2026-10-14 원문 확인
  references: [
    { label: 'Misery L. và cộng sự (2017). Definition of Sensitive Skin: An Expert Position Paper from the Special Interest Group on Sensitive Skin of the International Forum for the Study of Itch. Acta Dermato-Venereologica 97(1):4–6.', url: 'https://doi.org/10.2340/00015555-2397' },
    { label: 'Misery L. và cộng sự (2020). Pathophysiology and management of sensitive skin: position paper from the special interest group on sensitive skin of the International Forum for the Study of Itch (IFSI). Journal of the European Academy of Dermatology and Venereology 34(2):222–229.', url: 'https://doi.org/10.1111/jdv.16000' },
    { label: 'Nguyễn Thị Hồng Nhung, Nguyễn Thị Hà Vinh, Vũ Nguyệt Minh (2025). Mức độ phổ biến và các yếu tố liên quan của hội chứng da nhạy cảm tự nhận định. Tạp chí Y học Việt Nam 554(3):302–306.', url: 'https://vnras.com/muc-do-pho-bien-va-cac-yeu-to-lien-quan-cua-hoi-chung-da-nhay-cam-tu-nhan-dinh/' },
    { label: 'Saleh HM, Masood S, Schlessinger J. Acne Vulgaris. StatPearls (cập nhật 2026).', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459173/' },
    { label: 'NICE (2021, cập nhật 2026). Acne vulgaris: management (NG198).', url: 'https://www.nice.org.uk/guidance/ng198' },
    { label: 'Bộ Y tế (2023). Quyết định 4416/QĐ-BYT — Tài liệu chuyên môn về các bệnh da liễu, chương Trứng cá (tr. 433–442).', url: 'https://benhvienhatrung.vn/wp-content/uploads/2024/02/quyet-dinh-4416-qd-byt-2023-huong-dan-chan-doan-va-dieu-tri-cac-benh-da-lieu.pdf' },
  ],
  Body,
};
