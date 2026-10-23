import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C5 첫 글 · 대표 키워드 `da nhạy cảm` (VN 키워드 클러스터.md 1장) · H1 = AEO 질문 창고 PAA 2026-08-31 C5 원문.
 * 근거는 `S06 윤준상 볼트\02_산출물\La Théorie 민감 피부(C5) 일반 지식 근거표.md` 의 세 편만 쓴다(2026-10-14 원문 확인):
 *   [1] IFSI 2017 정의 · [2] IFSI 2020 원인·관리 · [3] 중앙피부과병원 2025 (Tạp chí Y học Việt Nam 554(3)).
 * 정의 문장은 [3] 이 실은 IFSI 정의의 베트남어판을 그대로 인용한다.
 * 🔴 근거표 3절: 일반 지식과 제품을 잇지 않는다 · 토너가 IFSI 조건(방부제·계면활성제·향료)을 채운다고 쓰지 않는다(데이터 없음) ·
 *    [3] 의 비율은 병원 방문자 자가 보고라고 조건을 붙인다.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 토너(점도 · 0% 지방산) · 라벨 대표 성분 Panthenol·Glycerin · VN PDP 상품명 「Dành cho da mụn ẩn, viêm nang lông và da nhạy cảm」.
 * 2026-10-18 보강(대중 어휘 전략 4-B B2) — H2 「Da nhạy cảm dễ nổi mụn thì sao?」 + W-1·W-2 링크 · FAQ 1문(M2) · [4] Bộ Y tế 2023(C1·C2 근거표) · [5] NICE(C1 근거표) 추가.
 */
const CTA_URL = `${BRIDGE_URL}?s=seo&k=LATHWEB&cp=C5&p=P006`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// [3] 표 4 — 자가 인식 민감 피부군 n=120
const SYMPTOMS: [string, string][] = [
  ['Ngứa', '70,0%'],
  ['Ban đỏ (đỏ da)', '54,2%'],
  ['Châm chích', '33,3%'],
  ['Bỏng rát', '6,7%'],
  ['Cảm giác kiến bò', '6,7%'],
  ['Đau', '5,8%'],
];

// [3] 표 2 — 전체 n=198 중 그 요인에 불편을 느낀 비율
const TRIGGERS: [string, string][] = [
  ['Không khí nóng và/hoặc khô', '57,1%'],
  ['Ánh nắng mặt trời', '47,0%'],
  ['Không khí lạnh và/hoặc ẩm', '35,9%'],
  ['Khói bụi, ô nhiễm', '35,9%'],
  ['Mỹ phẩm', '24,7%'],
  ['Xà phòng, chất tẩy rửa', '19,7%'],
  ['Tập thể dục', '16,7%'],
  ['Căng thẳng', '16,2%'],
];

function Body() {
  return (
    <>
      <P>
        <B>Ít sản phẩm hơn, dịu hơn.</B> Nhóm chuyên gia về da nhạy cảm của Diễn đàn Nghiên cứu Ngứa Quốc tế (IFSI) đưa ra lời khuyên chính là hạn chế bớt
        mỹ phẩm, hoặc chọn sản phẩm dễ dung nạp — ít chất bảo quản, ít chất hoạt động bề mặt, không hương liệu — đồng thời tránh những yếu tố khiến da khó chịu [2].
        Nói cách khác: bắt đầu từ bước đơn giản nhất sau khi rửa mặt, và thêm từng sản phẩm một.
      </P>

      <H2 id="da-nhay-cam-la-gi">Da nhạy cảm là gì</H2>
      <P>
        Theo IFSI, da nhạy cảm là “một hội chứng được xác định bởi sự xuất hiện của các cảm giác khó chịu (cảm giác châm chích, nóng rát, đau, ngứa hoặc kiến bò)
        khi phản ứng với các kích thích thường không gây ra những cảm giác đó” [1][3].
      </P>
      <P>
        Định nghĩa này có thêm ba ý: những cảm giác đó <B>không giải thích được bằng tổn thương của một bệnh da nào</B>; da có thể <B>trông bình thường hoặc kèm ban đỏ</B>;
        và da nhạy cảm có thể gặp ở mọi vị trí trên cơ thể, <B>đặc biệt là mặt</B> [1][3].
      </P>

      <H2 id="bieu-hien">Da nhạy cảm có biểu hiện gì</H2>
      <P>
        Nghiên cứu đầu tiên tại Việt Nam về da nhạy cảm được thực hiện ở Bệnh viện Da liễu Trung ương (2025): trong 198 người đến khám, 120 người tự nhận mình có
        da nhạy cảm. Triệu chứng họ gặp nhiều nhất [3]:
      </P>
      <Table head={['Triệu chứng', 'Tỷ lệ (n = 120)']}>
        {SYMPTOMS.map(([s, v]) => (
          <tr key={s} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{s}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>
      <P>
        Hơn hai phần ba (68,3%) nói triệu chứng thay đổi theo mùa — nặng hơn vào mùa đông (38,3%) và mùa hè (37,5%) [3].
        Đây là số liệu tự báo cáo của người đến khám tại một bệnh viện, không phải tỷ lệ chung của người Việt Nam.
      </P>

      <H2 id="vi-sao">Vì sao da bị nhạy cảm</H2>
      <P>
        <B>Nguyên nhân đến nay vẫn chưa được hiểu rõ và có thể do nhiều yếu tố</B> [1][2]. Điều nhóm chuyên gia IFSI thống nhất được: da nhạy cảm liên quan đến
        sự thay đổi của hệ thần kinh ở da, không phải một bệnh miễn dịch. Hàng rào bảo vệ da yếu thường đi kèm, nhưng chưa có bằng chứng đó là nguyên nhân trực tiếp [2].
      </P>
      <P>Những yếu tố khiến người tham gia nghiên cứu ở Bệnh viện Da liễu Trung ương thấy khó chịu nhiều nhất [3]:</P>
      <Table head={['Yếu tố', 'Tỷ lệ thấy khó chịu (n = 198)']}>
        {TRIGGERS.map(([t, v]) => (
          <tr key={t} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900">{t}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>
      <P>
        So với nhóm da thường, nhóm da nhạy cảm phản ứng nhiều hơn rõ rệt với gió, tập thể dục, căng thẳng và xà phòng/chất tẩy rửa [3].
      </P>

      <H2 id="nen-dung-gi">Vậy da nhạy cảm nên dùng gì</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">1.</span><span><B>Bớt trước, thêm sau.</B> Lời khuyên chính của IFSI là hạn chế bớt mỹ phẩm [2]. Ít lớp sản phẩm hơn cũng giúp dễ nhận ra thứ gì làm da khó chịu.</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">2.</span><span><B>Đọc bảng thành phần.</B> IFSI nêu các chất có thể gây kích ứng trong mỹ phẩm: axit alpha-hydroxy (AHA), propylene glycol, cồn, hương liệu, chất bảo quản, chất hoạt động bề mặt — và khuyên chọn sản phẩm ít chất bảo quản, ít chất hoạt động bề mặt, không hương liệu [2].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">3.</span><span><B>Rửa mặt dịu.</B> Xà phòng/chất tẩy rửa là một trong những yếu tố liên quan chặt nhất với da nhạy cảm trong nghiên cứu tại Việt Nam [3].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">4.</span><span><B>Tránh yếu tố kích hoạt.</B> Nắng, gió, không khí nóng, khô hoặc lạnh, thay đổi nhiệt độ — che chắn và chống nắng mỗi ngày [2][3].</span></li>
        <li className="flex gap-4"><span className="shrink-0 font-semibold text-gray-950">5.</span><span><B>Thêm từng sản phẩm một</B>, theo thứ tự đơn giản: rửa mặt → nước cân bằng → kem dưỡng ẩm.</span></li>
      </ol>
      <P>
        Da nhạy cảm và hàng rào bảo vệ da yếu hay đi cùng nhau — xem thêm{' '}
        <Link href="/vn/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu" className={LINK}>Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?</Link>
      </P>

      <H2 id="de-noi-mun">Da nhạy cảm dễ nổi mụn thì sao?</H2>
      <P>
        Da nhạy cảm và da mụn là hai tình trạng khác nhau: theo định nghĩa của IFSI, cảm giác khó chịu của da nhạy cảm <B>không</B> giải thích được bằng một bệnh da [1],
        còn mụn trứng cá là một bệnh viêm mạn tính của nang lông tuyến bã theo hướng dẫn của Bộ Y tế (2023) [4]. Hai tình trạng có thể cùng có trên một làn da — và khi đó,
        thứ tự ưu tiên ở trên không đổi: bớt sản phẩm, chọn loại dịu, thêm từng sản phẩm một. Riêng bước kem dưỡng ẩm, tiêu chí thường được nhắc cho da mụn là
        không gốc dầu, không gây bít tắc lỗ chân lông [5]; cách ghép hai bộ tiêu chí, và những gì nhãn sản phẩm có thể và không thể nói, có trong bài{' '}
        <Link href="/vn/da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao" className={LINK}>Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?</Link>. Với bước rửa mặt:{' '}
        <Link href="/vn/sua-rua-mat-cho-da-nhay-cam-de-noi-mun" className={LINK}>Sữa rửa mặt cho da nhạy cảm dễ nổi mụn: chọn thế nào?</Link>
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Theo định nghĩa, da nhạy cảm là khi cảm giác khó chịu <B>không</B> giải thích được bằng một bệnh da [1]. Vì vậy, nếu da đỏ lan rộng, sưng, bong vảy thành mảng,
        nổi mụn nước, chảy dịch hoặc ngứa kéo dài, hãy đến bác sĩ da liễu — viêm da cơ địa, viêm da tiếp xúc hay trứng cá đỏ cần được bác sĩ phân biệt.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Định nghĩa da nhạy cảm được nhóm chuyên gia IFSI thống nhất năm 2017 bằng phương pháp đồng thuận Delphi [1]. Bài đồng thuận năm 2020 của cùng nhóm kết luận
        da nhạy cảm liên quan đến hệ thần kinh ở da, và gợi ý tránh yếu tố kích hoạt cùng dùng mỹ phẩm dễ dung nạp [2]. Nghiên cứu năm 2025 tại Bệnh viện Da liễu
        Trung ương ghi nhận triệu chứng và yếu tố kích hoạt ở người Việt [3].
      </P>
      <H3>2. Nước cân bằng <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Nước Cân Bằng <span className="font-belleza">La&nbsp;Théorie</span> Soothing Toner 210ml không chứa axit béo (<B>0% Fatty Acid</B>), với panthenol và glycerin.
        Kết cấu hơi sánh, không lỏng như nước. Dùng ngay sau khi rửa mặt — bước đầu tiên trong chu trình. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về da nhạy cảm nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng trên da nhạy cảm.
        Bài viết không khẳng định sản phẩm đáp ứng các tiêu chí của IFSI — hãy xem bảng thành phần trên bao bì. Một số tác giả của tài liệu [2] là cố vấn cho các công ty
        mỹ phẩm, như chính bài báo đã công bố.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm" image="/vn-sg/p006-toner.webp" alt="La Théorie Soothing Toner 210ml">
        Nếu bạn muốn bắt đầu chu trình bằng một bước đơn giản sau khi rửa mặt, có thể tham khảo <B>Nước Cân Bằng La Théorie Soothing Toner 210ml</B> —
        0% axit béo, với panthenol và glycerin, dành cho da mụn ẩn, viêm nang lông và da nhạy cảm.
      </Cta>

      <ReadMore
        links={[
          ['/vn/da-nhay-cam-de-noi-mun-nen-dung-kem-duong-am-nao', 'Da nhạy cảm dễ nổi mụn nên dùng kem dưỡng ẩm nào?'],
          ['/vn/hang-rao-bao-ve-da-co-tu-phuc-hoi-duoc-khong', 'Hàng rào bảo vệ da có tự phục hồi được không?'],
          ['/vn/da-mun-khong-nen-dung-thanh-phan-gi', 'Da mụn không nên dùng thành phần gì?'],
          ['/vn/da-mun-nen-dung-kem-duong-am-nao', 'Da mụn nên dùng kem dưỡng ẩm nào?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'da-bi-nhay-cam-nen-dung-gi',
  title: 'Da bị nhạy cảm nên dùng gì?',
  description:
    'Da nhạy cảm là gì, biểu hiện và nguyên nhân theo định nghĩa của IFSI và nghiên cứu tại Bệnh viện Da liễu Trung ương, và nên chọn sản phẩm thế nào: ít hơn, dịu hơn.',
  tldr: [
    'Theo IFSI, da nhạy cảm là khi da châm chích, nóng rát, ngứa với những kích thích bình thường không gây khó chịu — không giải thích được bằng một bệnh da.',
    'Ở Bệnh viện Da liễu Trung ương (2025), triệu chứng hay gặp nhất là ngứa (70%), đỏ da (54,2%) và châm chích (33,3%); nóng khô và nắng là yếu tố khó chịu phổ biến nhất.',
    'Lời khuyên chính: hạn chế bớt mỹ phẩm, chọn sản phẩm ít chất bảo quản, ít chất hoạt động bề mặt, không hương liệu, và tránh yếu tố kích hoạt.',
  ],
  cluster: 'C5',
  stage: 'recommend',
  targetQueries: [
    'da bị nhạy cảm nên dùng gì',
    'da nhạy cảm là gì',
    'da nhạy cảm có biểu hiện gì',
    'tại sao da bị nhạy cảm',
    'chu trình chăm sóc da nhạy cảm',
    'da nhạy cảm dễ nổi mụn nên dùng gì',
    'da dầu mụn có phải da nhạy cảm không',
    'da dầu mụn nhạy cảm nên dùng toner gì',
  ],
  published: '2026-10-14',
  reviewer: 'jeon-ji-seung',
  reviewedOn: '2026-10-19',
  updated: '2026-10-19',
  faq: [
    { q: 'Da nhạy cảm là gì?', a: 'Theo Diễn đàn Nghiên cứu Ngứa Quốc tế (IFSI), da nhạy cảm là hội chứng xuất hiện các cảm giác khó chịu như châm chích, nóng rát, đau, ngứa hoặc kiến bò khi gặp những kích thích thường không gây ra cảm giác đó, và không giải thích được bằng tổn thương của một bệnh da.' },
    { q: 'Da nhạy cảm có biểu hiện gì?', a: 'Chủ yếu là cảm giác: ngứa, châm chích, nóng rát; da có thể trông bình thường hoặc đỏ, hay gặp nhất ở mặt. Trong nghiên cứu tại Bệnh viện Da liễu Trung ương (2025), ngứa chiếm 70%, đỏ da 54,2% và châm chích 33,3% ở người tự nhận da nhạy cảm.' },
    { q: 'Tại sao da bị nhạy cảm?', a: 'Nguyên nhân chưa được hiểu rõ và có thể do nhiều yếu tố. Nhóm chuyên gia IFSI cho rằng da nhạy cảm liên quan đến thay đổi của hệ thần kinh ở da, không phải bệnh miễn dịch; hàng rào da yếu thường đi kèm nhưng chưa phải nguyên nhân trực tiếp.' },
    { q: 'Da nhạy cảm nên tránh thành phần gì?', a: 'IFSI nêu các chất có thể gây kích ứng trong mỹ phẩm: AHA, propylene glycol, cồn, hương liệu, chất bảo quản và chất hoạt động bề mặt, và khuyên chọn sản phẩm ít chất bảo quản, ít chất hoạt động bề mặt, không hương liệu.' },
    { q: 'Khi nào da nhạy cảm cần đi khám?', a: 'Khi da đỏ lan rộng, sưng, bong vảy thành mảng, nổi mụn nước, chảy dịch hoặc ngứa kéo dài — các bệnh như viêm da cơ địa, viêm da tiếp xúc hay trứng cá đỏ cần bác sĩ da liễu phân biệt.' },
    { q: 'Da dầu mụn có phải da nhạy cảm không?', a: 'Không nhất thiết. Theo IFSI, da nhạy cảm là hội chứng cảm giác khó chịu không giải thích được bằng một bệnh da; mụn trứng cá là bệnh viêm mạn tính của nang lông tuyến bã theo hướng dẫn của Bộ Y tế (2023). Hai tình trạng khác nhau nhưng có thể cùng có trên một làn da — khi đó chọn sản phẩm theo cả hai bộ tiêu chí: không gây bít tắc, và không hương liệu, ít chất bảo quản.' },
    { q: 'Da dầu mụn nhạy cảm nên dùng toner gì?', a: 'Ưu tiên nước cân bằng không cồn ethanol, không hương liệu, ít chất bảo quản — tiêu chí IFSI cho da nhạy cảm — và không gốc dầu cho da mụn. Nước Cân Bằng La Théorie Soothing Toner 210ml không có hương liệu, không có cồn ethanol và không có paraben theo bảng thành phần do công ty cung cấp, với panthenol và glycerin; bảng thành phần đầy đủ có tại latheoriekorea.com/vn/thanh-phan.' },
    { q: 'Da nhạy cảm dễ nổi mụn nên dùng gì?', a: 'Thứ tự ưu tiên không đổi: hạn chế bớt mỹ phẩm, chọn sản phẩm dịu — không hương liệu, ít chất bảo quản, ít chất hoạt động bề mặt — và thêm từng sản phẩm một (IFSI). Với kem dưỡng ẩm, chọn loại không gốc dầu, không gây bít tắc lỗ chân lông; với sữa rửa mặt, loại không kiềm, pH trung tính hoặc hơi axit (NICE).' },
  ],
  // 근거표 1절 A·B·C — 2026-10-14 원문 확인 · [4][5] 는 2026-10-18 보강(C1·C2 근거표)
  references: [
    { label: 'Misery L. và cộng sự (2017). Definition of Sensitive Skin: An Expert Position Paper from the Special Interest Group on Sensitive Skin of the International Forum for the Study of Itch. Acta Dermato-Venereologica 97(1):4–6.', url: 'https://doi.org/10.2340/00015555-2397' },
    { label: 'Misery L. và cộng sự (2020). Pathophysiology and management of sensitive skin: position paper from the special interest group on sensitive skin of the International Forum for the Study of Itch (IFSI). Journal of the European Academy of Dermatology and Venereology 34(2):222–229.', url: 'https://doi.org/10.1111/jdv.16000' },
    { label: 'Nguyễn Thị Hồng Nhung, Nguyễn Thị Hà Vinh, Vũ Nguyệt Minh (2025). Mức độ phổ biến và các yếu tố liên quan của hội chứng da nhạy cảm tự nhận định. Tạp chí Y học Việt Nam 554(3):302–306.', url: 'https://vnras.com/muc-do-pho-bien-va-cac-yeu-to-lien-quan-cua-hoi-chung-da-nhay-cam-tu-nhan-dinh/' },
    { label: 'Bộ Y tế (2023). Quyết định 4416/QĐ-BYT — Tài liệu chuyên môn về các bệnh da liễu, chương Trứng cá (tr. 433–442).', url: 'https://benhvienhatrung.vn/wp-content/uploads/2024/02/quyet-dinh-4416-qd-byt-2023-huong-dan-chan-doan-va-dieu-tri-cac-benh-da-lieu.pdf' },
    { label: 'NICE (2021, cập nhật 2026). Acne vulgaris: management (NG198).', url: 'https://www.nice.org.uk/guidance/ng198' },
  ],
  Body,
};
