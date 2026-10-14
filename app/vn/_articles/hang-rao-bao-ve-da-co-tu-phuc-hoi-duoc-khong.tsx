import Link from 'next/link';
import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, H2, H3, P, B, Table, ReadMore } from './_ui';

/**
 * C4 2편째 · 대표 키워드 `hàng rào bảo vệ da` · H1 = AEO 질문 창고 PAA 2026-08-31 C4 원문(제품컷 표준 C4 배정 질문).
 * 근거는 `S06 윤준상 볼트\02_산출물\La Théorie 피부 장벽(C4) 일반 지식 근거표.md` 1절 문헌만 쓴다(2026-10-14 원문 확인).
 *   [1] Del Rosso & Levin 2011 · [2] Ghadially 1995 · [3] Ali & Yosipovitch 2013 · [4] Purnamawati 2017 · [5] Baker 2023 · [6] Châu Thị Kim Trang 2026 (Tạp chí Y học Việt Nam) · [7] Feingold & Elias 2024
 * 🔴 근거표 3절: 회복 시간·회복률 수치 금지(기간 단언) · 실험실 손상 모델을 「제품을 쓰면 회복」으로 바꾸지 않는다 · 3:1:1 금지 ·
 *    장벽 지질에 유리지방산이 들어간다 → 0% 지방산을 장벽 회복과 잇지 않는다 · P003 성분을 「장벽 회복 성분」으로 쓰지 않는다 ·
 *    베트남 문헌 [6] 은 손 습진 연구 — 기전 문장만, 「chiến lược điều trị」 앞부분은 쓰지 않는다.
 * 🔴 금지 표현(브랜드.md 7절): trị · điều trị · kê đơn · được chứng minh lâm sàng · 기간 단언 · 진단명 단정. 「giá trị」처럼 trị 가 든 낱말도 쓰지 않는다.
 * 제품 문장 근거: USP 정의서 4장 P003(대표 성분 Madecassoside·Squalane · 건조·각질·당김 피부) · products.ts P003 이름 · 사용 순서(토너 → 수분크림 → 크림에센스).
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C4&p=P003`;
const LINK = 'font-medium text-gray-950 underline underline-offset-4 decoration-gray-400 hover:decoration-gray-900';

// [1] 「practices to avoid」 · [3] · [4]
const DO_DONT: [string, string][] = [
  ['Rửa mặt', 'Không rửa quá nhiều lần; tránh sữa rửa mặt quá mạnh và xà phòng có tính kiềm [1]. Ưu tiên sữa rửa mặt có pH gần với pH tự nhiên của da, khoảng 4,5–6,5 [3]'],
  ['Tẩy tế bào chết', 'Hạn chế sản phẩm có hạt chà, chất tẩy tế bào chết hoặc chất làm se dễ gây kích ứng [1]'],
  ['Dưỡng ẩm', 'Đều đặn; sản phẩm có thành phần khóa ẩm nên thoa khi da còn ẩm, ngay sau khi rửa [4]'],
];

function Body() {
  return (
    <>
      <P>
        <B>Có — nhưng có giới hạn.</B> Hàng rào da có cơ chế tự phục hồi: khi lượng nước thoát qua da tăng, da giải phóng lipid dự trữ và tăng tổng hợp lipid mới
        để tái lập hàng rào [1]. Nhưng nếu tác động gây hại lặp lại, kéo dài hoặc cộng dồn, quá trình tự phục hồi có thể không theo kịp — da trở nên khô, ráp,
        bong vảy [1]. Việc của chăm sóc da là bớt những tác động đó và giữ đủ ẩm.
      </P>

      <H2 id="hang-rao-la-gi">Hàng rào bảo vệ da gồm những gì</H2>
      <P>
        Không có một con số cố định. Tài liệu da liễu thường mô tả da là hàng rào vật lý, hóa học và miễn dịch [5]. Lớp ngoài cùng — lớp sừng — đảm nhận nhiều vai trò
        cùng lúc: giữ nước, chống vi khuẩn, chống oxy hóa, tham gia miễn dịch và giảm tác hại của tia UV [1].
      </P>
      <P>
        Giữa các tế bào sừng là một lớp lipid, chủ yếu gồm ceramide, cholesterol và axit béo tự do [7]. Khi lớp lipid này sụt giảm, hàng rào suy yếu: nước thoát qua da
        nhiều hơn và độ ẩm lớp sừng giảm [6]. Độ ẩm lớp sừng và lượng nước mất qua da (TEWL) là hai chỉ số dùng để đánh giá chức năng hàng rào [6].
      </P>

      <H2 id="tu-phuc-hoi">Da tự phục hồi hàng rào như thế nào</H2>
      <P>
        Lớp sừng phát hiện rất sớm khi lượng nước mất qua da tăng lên, rồi phản ứng bằng cách giải phóng lipid đang dự trữ và tăng tổng hợp lipid mới [1].
        Đó là lý do một lần rửa mặt hơi mạnh thường không để lại hậu quả lâu dài.
      </P>
      <P>
        Khả năng này không giống nhau ở mọi người: ở người cao tuổi, hàng rào da phục hồi sau tổn thương chậm hơn so với người trẻ [2]. Và khi nhiều tác động
        cùng xảy ra, lặp lại hoặc kéo dài — rửa mặt nhiều lần, tẩy tế bào chết thường xuyên, thời tiết khô — da có thể không kịp tự phục hồi [1].
      </P>

      <H2 id="dau-hieu">Dấu hiệu hàng rào đang quá tải</H2>
      <P>
        Da khô do hàng rào suy yếu thường xỉn màu, thô ráp, bong vảy, có cảm giác căng và đôi khi ngứa [1]. Khi hàng rào bị tổn thương, nước thoát qua da nhiều hơn
        và các chất gây kích ứng dễ đi vào hơn [6]. Với da mụn, xem thêm{' '}
        <Link href="/vn/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu" className={LINK}>Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?</Link>
      </P>

      <H2 id="ho-tro">Làm thế nào để hỗ trợ hàng rào bảo vệ da</H2>
      <Table head={['Việc', 'Nên làm']}>
        {DO_DONT.map(([k, v]) => (
          <tr key={k} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{k}</td>
            <td className="py-3 text-gray-700">{v}</td>
          </tr>
        ))}
      </Table>

      <H3>Chọn kem dưỡng thế nào</H3>
      <P>
        Không có một loại kem dùng chung cho mọi làn da. Tiêu chí chung là kết hợp <B>chất hút ẩm</B> (humectant) và <B>chất khóa ẩm</B> (occlusive), và/hoặc chứa
        lipid tự nhiên của da [1]. Chất hút ẩm dùng một mình có thể làm nước bay hơi nhiều hơn, nên thường được kết hợp với chất khóa ẩm [4].
      </P>
      <P>
        Một lưu ý: axit béo là một phần của lớp lipid tự nhiên, và nhiều kem “phục hồi” giàu dầu hoặc axit béo — với phần lớn làn da, điều đó không có gì sai. Nếu da bạn
        dễ bị viêm nang lông, đọc thêm{' '}
        <Link href="/vn/kem-duong-am-khong-chua-axit-beo-la-gi" className={LINK}>Kem dưỡng ẩm không chứa axit béo là gì?</Link>
      </P>

      <H2 id="khi-nao-di-kham">Khi nào nên đến khám</H2>
      <P>
        Khi da đỏ rát lan rộng, nứt, chảy dịch, ngứa nhiều, hoặc tình trạng khô ráp không cải thiện dù đã giảm bớt sản phẩm và dưỡng ẩm đều đặn — các bệnh như
        viêm da cơ địa hay chàm cần bác sĩ da liễu xác định.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Cơ chế tự phục hồi của lớp sừng và giới hạn của nó được mô tả trong tổng quan của Del Rosso và Levin (2011) [1]; khả năng phục hồi chậm hơn ở người cao tuổi đến từ
        nghiên cứu của Ghadially và cộng sự (1995) [2]. Những nghiên cứu này đo hàng rào sau khi gây tổn thương trong phòng thí nghiệm — không phải tốc độ phục hồi của làn da
        hằng ngày.
      </P>
      <H3>2. Tinh chất <span className="font-belleza font-normal">La&nbsp;Théorie</span> Dual Effect Essence được xây dựng thế nào</H3>
      <P>
        Tinh Chất <span className="font-belleza">La&nbsp;Théorie</span> Dual Effect Essence 40ml có madecassoside và squalane, dành cho da khô, bong tróc, có cảm giác căng.
        Dùng sau kem dưỡng ẩm — thứ tự: nước cân bằng → kem dưỡng ẩm → tinh chất. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>
      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các tài liệu trích dẫn nói về hàng rào bảo vệ da nói chung, không phải thử nghiệm trên sản phẩm này; sản phẩm chưa có thử nghiệm lâm sàng riêng về hàng rào bảo vệ da.
        Bài viết không nói sản phẩm giúp hàng rào phục hồi nhanh hơn.
      </P>

      <Cta href={CTA_URL} label="Xem sản phẩm" image="/vn-sg/p003-essence.webp" alt="La Théorie Dual Effect Essence 40ml">
        Nếu da bạn đang khô, bong tróc và có cảm giác căng, có thể tham khảo <B>Tinh Chất La Théorie Dual Effect Essence 40ml</B> — với madecassoside và squalane,
        dùng sau kem dưỡng ẩm.
      </Cta>

      <ReadMore
        links={[
          ['/vn/da-mun-kho-cang-cham-chich-co-phai-hang-rao-bao-ve-da-yeu', 'Da mụn bị khô căng, châm chích có phải do hàng rào bảo vệ da yếu?'],
          ['/vn/kem-duong-am-khong-chua-axit-beo-la-gi', 'Kem dưỡng ẩm không chứa axit béo là gì? Ai nên dùng?'],
          ['/vn/da-mun-nen-dung-kem-duong-am-nao', 'Da mụn nên dùng kem dưỡng ẩm nào?'],
        ]}
      />
    </>
  );
}

export const article: Article = {
  slug: 'hang-rao-bao-ve-da-co-tu-phuc-hoi-duoc-khong',
  title: 'Hàng rào bảo vệ da có tự phục hồi được không?',
  description:
    'Hàng rào bảo vệ da có cơ chế tự phục hồi nhưng có giới hạn. Hàng rào gồm những gì, khi nào da không kịp tự phục hồi, và cách hỗ trợ theo các tổng quan da liễu.',
  tldr: [
    'Có, nhưng có giới hạn: khi nước thoát qua da tăng, lớp sừng giải phóng lipid dự trữ và tổng hợp lipid mới để tái lập hàng rào.',
    'Khi tác động gây hại lặp lại, kéo dài hoặc cộng dồn — rửa quá nhiều, tẩy tế bào chết thường xuyên — da có thể không kịp tự phục hồi; ở người cao tuổi phục hồi chậm hơn.',
    'Hỗ trợ bằng cách rửa dịu với pH gần pH da (4,5–6,5), hạn chế tẩy tế bào chết, dưỡng ẩm đều đặn với chất hút ẩm kết hợp chất khóa ẩm.',
  ],
  cluster: 'C4',
  stage: 'explore',
  targetQueries: [
    'hàng rào bảo vệ da có tự phục hồi được không',
    'có bao nhiêu hàng rào bảo vệ da',
    'làm thế nào để tăng hàng rào bảo vệ da',
    'kem nào giúp phục hồi hàng rào bảo vệ da',
  ],
  published: '2026-10-14',
  faq: [
    { q: 'Hàng rào bảo vệ da có tự phục hồi được không?', a: 'Có. Khi nước thoát qua da tăng, lớp sừng giải phóng lipid dự trữ và tăng tổng hợp lipid mới để tái lập hàng rào. Nhưng nếu tác động gây hại lặp lại, kéo dài hoặc cộng dồn, quá trình này có thể không theo kịp.' },
    { q: 'Có bao nhiêu hàng rào bảo vệ da?', a: 'Không có một con số cố định. Tài liệu da liễu thường mô tả da là hàng rào vật lý, hóa học và miễn dịch; một số tổng quan tính thêm hàng rào vi sinh vật.' },
    { q: 'Làm thế nào để tăng hàng rào bảo vệ da?', a: 'Tránh rửa quá nhiều lần và xà phòng có tính kiềm, chọn sữa rửa mặt có pH gần pH da (khoảng 4,5–6,5), hạn chế tẩy tế bào chết, và dưỡng ẩm đều đặn ngay sau khi rửa.' },
    { q: 'Kem nào giúp phục hồi hàng rào bảo vệ da?', a: 'Không có loại kem dùng chung cho mọi làn da. Tiêu chí chung là kết hợp chất hút ẩm với chất khóa ẩm, và/hoặc chứa lipid tự nhiên của da như ceramide, cholesterol, axit béo.' },
    { q: 'Dấu hiệu hàng rào bảo vệ da bị suy yếu là gì?', a: 'Da xỉn màu, thô ráp, bong vảy, có cảm giác căng và đôi khi ngứa; da cũng dễ bị kích ứng hơn vì nước thoát ra và chất kích ứng đi vào dễ hơn.' },
  ],
  // 근거표 C4 1절 #3 · #6 · #7 · #8 · #1 · #9 · #5 — 2026-10-14 원문 확인 (제목은 저널 페이지에서 대조)
  references: [
    { label: 'Del Rosso JQ, Levin J (2011). The clinical relevance of maintaining the functional integrity of the stratum corneum in both healthy and disease-affected skin. Journal of Clinical and Aesthetic Dermatology 4(9):22–42.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3175800/' },
    { label: 'Ghadially R. và cộng sự (1995). The aged epidermal permeability barrier. Journal of Clinical Investigation 95(5):2281–2290.', url: 'https://doi.org/10.1172/JCI117919' },
    { label: 'Ali SM, Yosipovitch G (2013). Skin pH: from basic science to basic skin care. Acta Dermato-Venereologica 93:261–267.', url: 'https://doi.org/10.2340/00015555-1531' },
    { label: 'Purnamawati S. và cộng sự (2017). The Role of Moisturizers in Addressing Various Kinds of Dermatitis: A Review. Clinical Medicine & Research 15(3–4):75–87.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5849435/' },
    { label: 'Baker P. và cộng sự (2023). Skin Barrier Function: The Interplay of Physical, Chemical, and Immunologic Properties. Cells 12(23):2745.', url: 'https://doi.org/10.3390/cells12232745' },
    { label: 'Châu Thị Kim Trang, Lý Thị Mỹ Nhung, Văn Thế Trung (2026). Độ ẩm lớp sừng thượng bì bàn tay và mối liên quan với đặc điểm lâm sàng ở bệnh nhân chàm bàn tay tại Bệnh viện Đa khoa khu vực Thủ Đức, TP. Hồ Chí Minh. Tạp chí Y học Việt Nam 561(3).', url: 'https://doi.org/10.51298/vmj.v561i3.18461' },
    { label: 'Feingold KR, Elias PM (2024). The role of ceramides in the disruption of the cutaneous permeability barrier, a common manifestation of skin disorders. Journal of Lipid Research 65(8):100593.', url: 'https://doi.org/10.1016/j.jlr.2024.100593' },
  ],
  Body,
};
