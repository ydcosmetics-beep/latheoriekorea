import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C1 첫 글 · 대표 키워드 `da dầu mụn` (VN 키워드 클러스터.md 1장) · H1 = AEO 질문 창고 PAA 2026-08-31 C1 원문.
 * 근거는 `S06 윤준상 볼트\02_산출물\La Théorie 지성 여드름(C1) 일반 지식 근거표.md` 1절 문헌만 쓴다(2026-10-14 원문 확인).
 *   [1] Bộ Y tế QĐ 4416/QĐ-BYT 2023 「TRỨNG CÁ」 tr.433–442 (현행판 — QĐ 75/2015 를 대체, 스캔본을 S06 세션이 직접 판독) · [2] 하노이 중학생 단면연구 2023 · [3] NICE NG198 · [4] StatPearls Acne Vulgaris · [5] Endly & Miller 2017
 * 🔴 근거표 3절: 「hết mụn」·기간 약속 · 약물 · 성분 효능 · 식단 문장 금지 · QĐ 75 「Rửa mặt bằng xà phòng」 인용 금지 ·
 *    1.90배는 대상(하노이 11–15세)·연관성과 함께만 · 지방산 프리를 C1 일반 지식에 잇지 않는다 · 저pH 를 「NICE 권고 충족」으로 잇지 않는다.
 *    출처 표기는 「Bộ Y tế (QĐ 4416/QĐ-BYT, 2023)」까지 — 문서 제목에 금지어가 있다. 2023판 「Phòng bệnh」의 식단(đường, sữa) 문장은 쓰지 않는다.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 클렌저(지방산 배제 계면활성제 · 저pH · 세안 후 당김 없음) · products.ts P001 이름.
 * 2026-10-18 보강(대중 어휘 전략 4-B B2) — W-2 「Sữa rửa mặt cho da nhạy cảm dễ nổi mụn」 링크(본문 1문 + Đọc thêm).
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C1&p=P001`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// [1] 2023 §1.3 — 네 기전 (설명 칸은 [4] StatPearls Pathophysiology)
const FACTORS: [string, string][] = [
  ['Tăng bài tiết bã nhờn', 'Tuyến bã hoạt động mạnh — da dầu là nền thuận lợi'],
  ['Dày sừng cổ nang lông', 'Chất sừng và bã nhờn tích tụ trong nang lông, tạo thành nhân mụn'],
  ['Vi khuẩn C. acnes', 'Dùng bã nhờn làm nguồn dinh dưỡng; môi trường nhiều lipid, ít oxy trong nang lông bị bít giúp vi khuẩn phát triển'],
  ['Chất trung gian viêm', 'Làm xuất hiện sẩn viêm, sẩn mủ, cục, nang'],
];

// [3] 1.2 · [4] Deterrence
const ROUTINE: [string, string][] = [
  ['Làm sạch', 'Sữa rửa mặt dịu nhẹ, không kiềm (pH trung tính hoặc hơi axit), 2 lần mỗi ngày — thay cho xà phòng hay sản phẩm tẩy rửa mạnh'],
  ['Dưỡng ẩm', 'Loại không gốc dầu, không gây bít tắc lỗ chân lông; dạng gel hoặc lỏng nhẹ'],
  ['Chống nắng', 'Không gốc dầu, không gây bít tắc — giúp hạn chế thâm sau mụn'],
  ['Trang điểm (nếu có)', 'Không gốc dầu, không gây bít tắc, tẩy trang vào cuối ngày'],
];

function Body() {
  return (
    <>
      <P>
        <B>Vì tăng bài tiết bã nhờn là một trong bốn cơ chế chính gây mụn.</B> Theo hướng dẫn của Bộ Y tế (2023), bốn cơ chế đó là tăng bài tiết chất bã,
        dày sừng cổ nang lông, vai trò của vi khuẩn <em>Cutibacterium acnes</em> (C. acnes) và các chất trung gian viêm [1]. Da dầu tiết nhiều bã hơn, nên khi
        cổ nang lông dày sừng và bị bít, bã nhờn dễ ứ lại thành nhân mụn. Da dầu không có nghĩa chắc chắn sẽ có mụn — nhưng là nền thuận lợi hơn.
      </P>

      <H2 id="bon-co-che">Bốn cơ chế tạo nên mụn</H2>
      <Table head={['Yếu tố', 'Điều gì xảy ra']}>
        {FACTORS.map(([f, what]) => (
          <tr key={f} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{f}</td>
            <td className="py-3 text-gray-700">{what}</td>
          </tr>
        ))}
      </Table>
      <P>
        Chất sừng và bã nhờn tích tụ dần trong nang lông, biến vi nhân mụn thành nhân mụn đóng (mụn đầu trắng) [4]. Bã nhờn còn là nguồn dinh dưỡng cho
        vi khuẩn C. acnes [4]. Ngoài ra, Bộ Y tế liệt kê các yếu tố làm mụn xuất hiện hoặc nặng thêm: gia đình, nội tiết, môi trường, vệ sinh, ăn uống,
        căng thẳng, sử dụng mỹ phẩm và thuốc bôi không hợp lý [1].
      </P>

      <H2 id="da-dau-va-mun">Da dầu và mụn liên quan đến nhau thế nào</H2>
      <P>
        Một nghiên cứu trên 1.751 học sinh 11–15 tuổi tại Hà Nội (2023) ghi nhận học sinh có da dầu hoặc da hỗn hợp thiên dầu có nguy cơ mắc trứng cá cao gấp
        1,90 lần so với học sinh da khô và da thường [2]. Đây là mối liên quan quan sát được ở một nhóm học sinh, không phải bằng chứng rằng da dầu là nguyên nhân duy nhất.
      </P>
      <P>
        Khí hậu cũng có vai trò: lượng bã nhờn thường tăng vào mùa xuân, mùa hè và ở nơi có độ ẩm cao [5].
      </P>

      <H2 id="da-dau-mun-la-gi">Da dầu mụn trông như thế nào</H2>
      <P>
        Theo Bộ Y tế, trứng cá “đặc trưng bởi các tổn thương không viêm như mụn đầu đen, đầu trắng, hoặc tổn thương viêm như các sẩn viêm, sẩn mủ, cục, nang”,
        phân bố chủ yếu ở vùng nhiều tuyến bã như mặt, cổ, ngực, lưng trên [1]. Da dầu thường đi kèm lỗ chân lông to hơn và bề mặt trông bóng nhờn [5].
      </P>

      <H2 id="cham-soc-hang-ngay">Da dầu mụn thì chăm sóc hằng ngày thế nào</H2>
      <P>
        Mụn trứng cá là tình trạng viêm mạn tính của nang lông tuyến bã [4], nên chăm sóc cần đều đặn và lâu dài — không có bước nào làm mụn biến mất ngay.
        Các hướng dẫn chăm sóc da cho người bị mụn thống nhất ở mấy điểm cơ bản [3][4]:
      </P>
      <Table head={['Bước', 'Nên chọn']}>
        {ROUTINE.map(([step, what]) => (
          <tr key={step} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{step}</td>
            <td className="py-3 text-gray-700">{what}</td>
          </tr>
        ))}
      </Table>
      <P>
        <B>Đừng chà xát mạnh và đừng tự nặn mụn</B> — việc này có thể làm xuất hiện mụn mới và tăng nguy cơ để lại sẹo [3][4]. Ở phần phòng bệnh, hướng dẫn của
        Bộ Y tế khuyên tránh các yếu tố làm mụn nặng lên như stress, thức khuya, làm việc quá sức, và “sử dụng sản phẩm chăm sóc da phù hợp: sản phẩm rửa mặt,
        dưỡng ẩm kiềm dầu” [1].
      </P>
      <P>
        Nếu da bạn vừa dầu mụn vừa dễ châm chích, nóng rát với sản phẩm mới, cách chọn sữa rửa mặt cho làn da đó được bàn riêng trong bài{' '}
        <Link href="/vn/sua-rua-mat-cho-da-nhay-cam-de-noi-mun" className={LINK}>Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: chọn thế nào?</Link>
      </P>
      <P>
        Da dầu vẫn cần dưỡng ẩm — xem{' '}
        <Link href="/vn/da-dau-mun-co-nen-duong-am-khong" className={LINK}>Da dầu mụn có nên dưỡng ẩm không?</Link>
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Mụn sưng viêm, mụn bọc, hoặc mụn để lại thâm và sẹo nên được bác sĩ da liễu thăm khám sớm [4]. Các hoạt chất dùng cho mụn ở mức độ vừa và nặng cần
        bác sĩ hướng dẫn — bài viết này chỉ nói về chăm sóc da hằng ngày.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Bốn cơ chế gây mụn được mô tả trong hướng dẫn hiện hành của Bộ Y tế (QĐ 4416/QĐ-BYT, 2023) [1] và trong tổng quan StatPearls [4]. Khuyến nghị về sữa rửa mặt không kiềm,
        sản phẩm không gốc dầu, không gây bít tắc đến từ hướng dẫn NICE (Anh, 2021) — chính NICE ghi nhận bằng chứng về chăm sóc da còn hạn chế [3].
      </P>
      <H3>2. Gel rửa mặt <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Gel Rửa Mặt <span className="font-belleza">La&nbsp;Théorie</span> Clearing Gel 210ml làm sạch bằng chất hoạt động bề mặt không chứa axit béo, với độ pH thấp,
        để da không bị căng rít sau khi rửa. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về da dầu và mụn nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng trên da mụn.
        Rửa mặt đúng cách giúp da dễ chịu hơn — nhưng chưa có bằng chứng rằng riêng việc đổi sữa rửa mặt làm giảm mụn.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm" image="/vn-sg/p001-cleanser.webp" alt="La Théorie Clearing Gel 210ml">
        Nếu bạn đang tìm một sữa rửa mặt dịu nhẹ cho da dầu mụn, có thể tham khảo <B>Gel Rửa Mặt La Théorie Clearing Gel 210ml</B> —
        chất làm sạch không chứa axit béo, pH thấp, không để lại cảm giác căng rít sau khi rửa.
      </Cta>

      <ReadMore
        links={[
          ['/vn/sua-rua-mat-cho-da-nhay-cam-de-noi-mun', 'Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: chọn thế nào?'],
          ['/vn/da-dau-mun-co-nen-duong-am-khong', 'Da dầu mụn có nên dưỡng ẩm không?'],
          ['/vn/da-mun-nen-dung-kem-duong-am-nao', 'Da mụn nên dùng kem dưỡng ẩm nào?'],
          ['/vn/da-mun-khong-nen-dung-thanh-phan-gi', 'Da mụn không nên dùng thành phần gì?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'tai-sao-da-dau-lai-de-bi-mun',
  title: 'Tại sao da dầu lại dễ bị mụn?',
  description:
    'Vì sao da dầu dễ bị mụn theo hướng dẫn của Bộ Y tế (2023): bốn cơ chế tạo nên mụn, da dầu mụn trông như thế nào, và chăm sóc hằng ngày ra sao.',
  tldr: [
    'Theo Bộ Y tế (2023), mụn có bốn cơ chế chính: tăng bài tiết bã nhờn, dày sừng cổ nang lông, vi khuẩn C. acnes và các chất trung gian viêm — da dầu tiết nhiều bã nên là nền thuận lợi cho mụn.',
    'Ở 1.751 học sinh Hà Nội, da dầu và da hỗn hợp thiên dầu liên quan đến nguy cơ trứng cá cao gấp 1,90 lần; khí hậu nóng ẩm cũng có vai trò.',
    'Chăm sóc hằng ngày: sữa rửa mặt không kiềm 2 lần/ngày, dưỡng ẩm và chống nắng không gốc dầu, không gây bít tắc; không chà xát, không tự nặn mụn.',
  ],
  cluster: 'C1',
  stage: 'concept',
  targetQueries: [
    'tại sao da dầu lại dễ bị mụn',
    'da dầu mụn là da như thế nào',
    'da dầu mụn nên dùng gì',
    'da dầu mụn chăm sóc hằng ngày',
    'nguyên nhân gây mụn ở da dầu',
  ],
  published: '2026-10-14',
  updated: '2026-10-18',
  faq: [
    { q: 'Tại sao da dầu lại dễ bị mụn?', a: 'Vì tăng bài tiết bã nhờn là một trong bốn cơ chế chính gây mụn, cùng với dày sừng cổ nang lông, vi khuẩn C. acnes và các chất trung gian viêm (hướng dẫn của Bộ Y tế, 2023). Khi cổ nang lông bị bít, bã nhờn ứ lại thành nhân mụn.' },
    { q: 'Da dầu mụn là da như thế nào?', a: 'Da bóng nhờn, lỗ chân lông to hơn, có mụn đầu đen, đầu trắng, và khi viêm có thể có sẩn viêm, sẩn mủ, cục, nang; thường ở vùng nhiều tuyến bã như mặt, cổ, ngực, lưng trên.' },
    { q: 'Da dầu mụn nên dùng gì?', a: 'Sữa rửa mặt dịu nhẹ, không kiềm, dùng 2 lần mỗi ngày; kem dưỡng ẩm và kem chống nắng không gốc dầu, không gây bít tắc lỗ chân lông, dạng gel hoặc lỏng nhẹ.' },
    { q: 'Da dầu có cần dưỡng ẩm không?', a: 'Có. Hướng dẫn của Bộ Y tế (2023) khuyên dùng sản phẩm chăm sóc da phù hợp gồm sản phẩm rửa mặt và dưỡng ẩm kiềm dầu; các hướng dẫn quốc tế cũng coi kem dưỡng ẩm không gây bít tắc là một phần của chăm sóc cơ bản.' },
    { q: 'Khi nào mụn cần đi khám?', a: 'Khi có mụn sưng viêm, mụn bọc, hoặc mụn để lại thâm và sẹo — nên được bác sĩ da liễu thăm khám sớm.' },
  ],
  // 근거표 C1 1절 #1(2023 현행판으로 교체) · #2 · #4 · #7 · #8 — 2026-10-14 원문 확인
  references: [
    { label: 'Bộ Y tế (2023). Quyết định 4416/QĐ-BYT — Tài liệu chuyên môn về các bệnh da liễu, chương Trứng cá (tr. 433–442).', url: 'https://benhvienhatrung.vn/wp-content/uploads/2024/02/quyet-dinh-4416-qd-byt-2023-huong-dan-chan-doan-va-dieu-tri-cac-benh-da-lieu.pdf' },
    { label: 'Nguyễn Minh Quang, Đinh Thị Yến và cộng sự (2023). Thực trạng bệnh trứng cá và một số yếu tố liên quan của học sinh các trường trung học cơ sở tại Hà Nội năm 2022. Tạp chí Y học Cộng đồng 64(3):46–53.', url: 'https://doi.org/10.52163/yhc.v64i3.640' },
    { label: 'NICE (2021, cập nhật 2026). Acne vulgaris: management (NG198).', url: 'https://www.nice.org.uk/guidance/ng198' },
    { label: 'Saleh HM, Masood S, Schlessinger J. Acne Vulgaris. StatPearls (cập nhật 2026).', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459173/' },
    { label: 'Endly DC, Miller RA (2017). Oily Skin: A Review of Treatment Options. Journal of Clinical and Aesthetic Dermatology 10(8):49–55.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5605215/' },
  ],
  Body,
};
