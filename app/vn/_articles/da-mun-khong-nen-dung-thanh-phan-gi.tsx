import type { Article } from '../_lib/types';
import { BRIDGE_URL } from '../_lib/site';
import { Cta, B } from './_ui';

/**
 * 글 → Shopee 는 전부 브릿지를 거친다 (2026-09-07 결정 · 핸드오프 결정 29).
 * 코드는 기존 LATHWEB 재사용, 출처는 s=seo 로 s=web 과 가르고, cp= 에 클러스터를 적는다.
 */
const CTA_URL = `${BRIDGE_URL}/?s=seo&k=LATHWEB&cp=C3&p=P002`;

const AVOID = [
  ['Dầu khoáng', 'Tạo lớp màng kín trên da, dễ gây bít tắc lỗ chân lông', 'Mineral Oil, Petrolatum, Paraffinum Liquidum'],
  ['Dầu dừa', 'Chỉ số gây bít tắc rất cao dù được xem là “lành tính”', 'Coconut Oil, Cocos Nucifera Oil'],
  ['Dầu ô liu · dầu bơ', 'Dầu thực vật nặng, ở nồng độ cao dễ gây bít tắc', 'Olea Europaea Oil, Persea Gratissima Oil'],
  ['Silicone', 'Tạo cảm giác mịn tức thì nhưng cản trở da thoát ẩm', 'Dimethicone, Cyclomethicone, Cyclopentasiloxane'],
  ['Cồn khô', 'Làm khô bề mặt, khiến da tiết dầu bù lại nhiều hơn', 'Alcohol Denat., SD Alcohol, Isopropyl Alcohol'],
  ['Hương liệu tổng hợp', 'Không cải thiện gì cho da mụn, dễ gây kích ứng', 'Fragrance, Parfum'],
  ['Lanolin', 'Chiết xuất từ mỡ cừu, chỉ số gây bít tắc cao', 'Lanolin, Acetylated Lanolin'],
  ['Chất tạo bọt mạnh', 'Lấy đi lớp dầu tự nhiên, phá vỡ cân bằng pH bề mặt', 'SLS, SLES, Cocamidopropyl Betaine'],
];

const PREFER: [string, string, string, boolean][] = [
  ['Salicylic Acid (BHA)', 'Làm sạch sâu trong lỗ chân lông, hỗ trợ kiểm soát dầu', 'Da dầu, lỗ chân lông to', false],
  ['Niacinamide', 'Hỗ trợ điều tiết bã nhờn, làm dịu, cải thiện vẻ ngoài lỗ chân lông', 'Da dầu mụn', false],
  ['Axit Hyaluronic', 'Cấp ẩm dạng nhẹ, không tạo lớp màng dày', 'Mọi loại da, kể cả da dầu', false],
  ['Panthenol (B5)', 'Làm dịu, hỗ trợ hàng rào bảo vệ da', 'Da nhạy cảm, da đang kích ứng', false],
  ['Chiết xuất trà xanh', 'Chống oxy hóa, làm dịu', 'Da dầu mụn', false],
  ['Đất sét', 'Hấp thụ dầu thừa (dùng dạng mặt nạ, 1–2 lần/tuần)', 'Da dầu', false],
  ['Công thức không chứa axit béo', 'Không cung cấp nguồn dinh dưỡng cho nấm men Malassezia', 'Da dễ gặp mụn nấm, viêm nang lông', true],
];

/** 세 개념 분리표 (2026-09-07 정정 2). 섞이면 효능 확대로 읽힌다. */
const THREE = [
  ['Mụn trứng cá thông thường', 'Nhân mụn, mụn đầu đen / đầu trắng, kích thước không đều', 'Bã nhờn, tế bào chết, vi khuẩn trong lỗ chân lông'],
  ['Viêm nang lông (nói chung)', 'Nang lông bị viêm; có thể ở bất kỳ vùng nào có lông', 'Nhiều nguyên nhân: vi khuẩn, cạo / ma sát, mồ hôi, bít tắc'],
  ['Viêm nang lông do Malassezia (“mụn nấm”)', 'Nốt nhỏ đều nhau, thành cụm, hay ngứa nhẹ; trán, hai bên má, ngực, lưng', 'Nấm men Malassezia phát triển quá mức trong nang lông'],
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-14 mb-4 scroll-mt-28 text-2xl md:text-[28px] font-semibold leading-snug text-gray-950">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-9 mb-3 text-lg md:text-xl font-semibold text-gray-900">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="my-4 text-[15px] md:text-base leading-[1.85] text-gray-700">{children}</p>;
}

function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="my-7 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-gray-900">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4 font-semibold text-gray-950">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function Body() {
  return (
    <>
      <P>
        Bạn đã đọc kỹ nhãn, đã chọn sản phẩm “dành cho da mụn”, đã dưỡng da đều đặn mỗi tối — nhưng da vẫn nổi mụn.
        Nhiều người nghĩ mình chưa chăm đủ kỹ. Thực tế, vấn đề thường nằm ở chỗ khác:{' '}
        <strong className="font-semibold text-gray-900">một vài thành phần quen thuộc trong mỹ phẩm đang âm thầm nuôi mụn.</strong>
      </P>
      <P>
        Bài viết này liệt kê những thành phần mà làn da mụn nên tránh, và quan trọng hơn —{' '}
        <strong className="font-semibold text-gray-900">giải thích điểm chung giữa chúng</strong>, thứ mà phần lớn các bài viết dừng lại trước khi nói tới.
      </P>

      <H2 id="vi-sao">Vì sao cùng là “dưỡng ẩm” mà có loại làm da nổi mụn thêm?</H2>
      <P>
        Da mụn vẫn cần dưỡng ẩm. Đây là điều đã được nhắc nhiều và hoàn toàn đúng: khi da bị làm khô quá mức,
        tuyến bã nhờn phản ứng bằng cách tiết thêm dầu, và tình trạng dầu — mụn thường nặng hơn chứ không nhẹ đi.
      </P>
      <P>
        Vấn đề không nằm ở việc <em>có</em> dưỡng ẩm hay không, mà ở việc{' '}
        <strong className="font-semibold text-gray-900">dưỡng ẩm bằng gì</strong>.
      </P>
      <P>
        Cách giải thích phổ biến nhất là <strong className="font-semibold text-gray-900">bít tắc lỗ chân lông</strong>: một số thành phần
        tạo lớp màng dày trên bề mặt da, bã nhờn và tế bào chết không thoát ra được, lỗ chân lông tắc lại và mụn hình thành.
        Đây là lý do khái niệm <strong className="font-semibold text-gray-900">non-comedogenic</strong> (không gây bít tắc) xuất hiện trên bao bì mỹ phẩm.
      </P>
      <P>
        Cách giải thích này đúng, nhưng <strong className="font-semibold text-gray-900">chưa đủ</strong>. Có những người dùng đúng sản phẩm
        ghi non-comedogenic mà da vẫn nổi những nốt li ti đều nhau ở trán, hai bên má hoặc lưng. Chúng ta sẽ quay lại chuyện này ở phần sau.
      </P>

      <H2 id="can-tranh">Những thành phần da mụn nên tránh</H2>
      <Table head={['Thành phần', 'Vì sao nên tránh', 'Tên thường gặp trên nhãn']}>
        {AVOID.map(([name, why, label]) => (
          <tr key={name} className="border-b border-gray-200 align-top">
            <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{why}</td>
            <td className="py-3 text-gray-500">{label}</td>
          </tr>
        ))}
      </Table>

      <H3>Vài điểm dễ bị hiểu nhầm</H3>
      <P>
        <strong className="font-semibold text-gray-900">“Thiên nhiên” không đồng nghĩa với “an toàn cho da mụn”.</strong>{' '}
        Dầu dừa là ví dụ rõ nhất — nó là dầu thực vật nguyên chất, nhưng lại nằm ở nhóm dễ gây bít tắc nhất.
      </P>
      <P>
        <strong className="font-semibold text-gray-900">Không phải mọi loại dầu đều xấu.</strong> Những loại giàu linoleic acid
        như dầu tầm xuân, dầu hạt nho, dầu hạt bí có kết cấu nhẹ hơn và thường được đánh giá là phù hợp hơn với da dầu.
        Sự khác biệt giữa “dầu tốt” và “dầu xấu” nằm ở{' '}
        <strong className="font-semibold text-gray-900">thành phần axit béo bên trong loại dầu đó</strong> — và đây chính là chi tiết dẫn tới phần tiếp theo.
      </P>
      <P>
        <strong className="font-semibold text-gray-900">Cồn không phải lúc nào cũng là cồn khô.</strong> Cetyl Alcohol hay
        Cetearyl Alcohol là cồn béo, dùng để làm đặc kết cấu, không có tác dụng làm khô như Alcohol Denat.
      </P>

      <H2 id="diem-chung">Điểm chung của những loại dầu đó là gì?</H2>
      <P>
        Hãy nhìn lại danh sách phía trên: dầu ô liu, dầu bơ, lanolin. Chúng khác nguồn gốc, khác kết cấu, khác giá tiền.
        Nhưng chúng có một điểm chung.
      </P>
      <p className="my-7 border-l-2 border-gray-900 pl-5 text-xl md:text-2xl font-semibold leading-snug text-gray-950">
        Tất cả đều giàu axit béo.
      </p>
      <P>
        Đây là chỗ mà cách giải thích “bít tắc lỗ chân lông” bắt đầu không đủ. Bít tắc là một cơ chế vật lý — chất nhờn phủ lên và bịt kín.
        Nhưng axit béo còn có một vai trò khác, mang tính sinh học.
      </P>
      <P>
        <em>Lưu ý:</em> dầu dừa là một trường hợp hơi khác. Axit béo chủ yếu trong dầu dừa thuộc nhóm chuỗi ngắn hơn
        (lauric C12, myristic C14), và nghiên cứu nuôi cấy cho thấy nhóm này hỗ trợ nấm men phát triển kém hơn nhiều so với
        axit palmitic (C16) hay oleic (C18:1) [3]. Với dầu dừa, lý do nên hạn chế nằm ở khả năng gây bít tắc, chứ không phải ở
        cơ chế được mô tả bên dưới.
      </P>

      <H3>Malassezia — loại nấm men sống sẵn trên da bạn</H3>
      <P>
        Trên bề mặt da của hầu hết mọi người đều có một loại nấm men tên là{' '}
        <strong className="font-semibold text-gray-900">Malassezia</strong>. Bình thường nó không gây vấn đề gì. Nhưng Malassezia{' '}
        <strong className="font-semibold text-gray-900">không tự tạo ra được axit béo mà nó cần để sống — nó lấy từ môi trường xung quanh</strong> [1][2].
      </P>
      <P>Nghĩa là: khi bạn thoa lên da một sản phẩm giàu axit béo, bạn đang cung cấp thức ăn cho nó.</P>
      <P>
        Trong điều kiện khí hậu nóng ẩm, nhiều mồ hôi như ở Việt Nam, Malassezia có thể phát triển mạnh hơn mức bình thường.
        Kết quả là những nốt sẩn nhỏ, đều nhau, thường ngứa nhẹ, xuất hiện thành cụm ở trán, hai bên má, ngực hoặc lưng.
        Tình trạng này hay được gọi là <strong className="font-semibold text-gray-900">mụn nấm</strong>, và nó{' '}
        <strong className="font-semibold text-gray-900">khác với mụn trứng cá thông thường</strong> — dù nhìn bằng mắt thường rất dễ nhầm [4].
      </P>

      <H3>Ba tình trạng dễ bị gộp làm một</H3>
      <P>
        Trước khi đi tiếp, cần tách rõ ba khái niệm hay bị dùng lẫn. Bài này chỉ nói về nhóm thứ ba.
      </P>
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
        <strong className="font-semibold text-gray-900">Không phải mọi trường hợp viêm nang lông đều do Malassezia</strong>, và không phải
        nốt mụn nào cũng liên quan tới axit béo. Cơ chế “thức ăn của nấm men” chỉ áp dụng cho nhóm thứ ba. Việc phân biệt
        chắc chắn cần bác sĩ da liễu — bài viết chỉ giúp bạn nhận ra khi nào nên đặt câu hỏi đó.
      </P>

      <H3>Vì sao “non-comedogenic” chưa đủ</H3>
      <P>
        Nhãn <strong className="font-semibold text-gray-900">non-comedogenic</strong> trả lời câu hỏi:{' '}
        <em>sản phẩm này có bịt lỗ chân lông không?</em>
      </P>
      <P>
        Nó <strong className="font-semibold text-gray-900">không</strong> trả lời câu hỏi:{' '}
        <em>sản phẩm này có chứa axit béo mà Malassezia dùng làm thức ăn không?</em>
      </P>
      <P>
        Một sản phẩm hoàn toàn có thể đạt non-comedogenic mà vẫn giàu axit béo. Đó là lý do vì sao có người chọn đúng sản phẩm
        ghi non-comedogenic nhưng da vẫn nổi những nốt li ti đều nhau như mô tả ở trên.
      </P>
      <P>
        Và điều ngược lại cũng đúng:{' '}
        <strong className="font-semibold text-gray-900">“không chứa axit béo” không đồng nghĩa với “non-comedogenic”.</strong>{' '}
        Đây là hai tiêu chí độc lập, trả lời hai câu hỏi khác nhau. Với làn da dễ gặp tình trạng mụn nấm, cần xem xét{' '}
        <strong className="font-semibold text-gray-900">cả hai</strong> chứ không phải một.
      </P>

      <H2 id="nghien-cuu-va-san-pham">Nghiên cứu nói gì — và sản phẩm được làm thế nào</H2>
      <P>Ba phần dưới đây được tách riêng có chủ ý: điều đã được nghiên cứu, điều chúng tôi lựa chọn khi xây dựng công thức, và điều chưa được kiểm chứng.</P>

      <H3>1. Điều nghiên cứu đã chỉ ra</H3>
      <P>
        Giải mã bộ gen cho thấy Malassezia thiếu enzyme tổng hợp axit béo và vì vậy phụ thuộc vào lipid từ bên ngoài [1].
        Các mô hình chuyển hóa và thí nghiệm nuôi cấy sau đó xác nhận nấm men này phát triển được khi có sẵn từng loại axit béo
        nhất định, với mức độ khác nhau tùy chuỗi carbon [2][3]. Một nghiên cứu năm 2019 trên tạp chí <em>Cosmetics</em> đã khảo sát
        ảnh hưởng của một số thành phần mỹ phẩm phổ biến tới các vi sinh vật thường trú trên da, trong đó có Malassezia [5].
      </P>

      <H3>2. Sản phẩm <span className="font-belleza font-normal">La&nbsp;Théorie</span> được xây dựng thế nào</H3>
      <P>
        Đây là lý do dòng sản phẩm của <span className="font-belleza">La&nbsp;Théorie</span> được xây dựng trên công thức{' '}
        <strong className="font-semibold text-gray-900">0% Fatty Acid</strong> — không chứa axit béo. Thay vì chỉ hướng tới việc
        không gây bít tắc, công thức này loại bỏ chính nhóm thành phần mà nấm men Malassezia sử dụng. Đây là một lựa chọn về{' '}
        <strong className="font-semibold text-gray-900">thành phần</strong>, dành cho những làn da đã thử nhiều sản phẩm
        non-comedogenic mà chưa thấy phù hợp. Được sử dụng tại hơn 20 phòng khám da liễu và thẩm mỹ viện tại Hàn Quốc.
      </P>

      <H3>3. Điều chưa được kiểm chứng</H3>
      <P>
        Các nghiên cứu trích dẫn ở trên là nghiên cứu về <strong className="font-semibold text-gray-900">thành phần và nấm men</strong>,
        không phải thử nghiệm trên sản phẩm này. Sản phẩm chưa có thử nghiệm lâm sàng riêng về mụn nấm hay viêm nang lông.
        Không chứa axit béo không đảm bảo sản phẩm phù hợp với mọi làn da, và như đã nói, không thay thế cho tiêu chí non-comedogenic.
      </P>

      <H2 id="nen-chon">Vậy nên chọn thành phần nào?</H2>
      <Table head={['Thành phần', 'Vai trò', 'Phù hợp với']}>
        {PREFER.map(([name, role, fit, highlight]) => (
          <tr key={name} className={`border-b border-gray-200 align-top ${highlight ? 'bg-gray-50' : ''}`}>
            <td className="py-3 pr-4 font-semibold text-gray-900">{name}</td>
            <td className="py-3 pr-4 text-gray-700">{role}</td>
            <td className="py-3 text-gray-500">{fit}</td>
          </tr>
        ))}
      </Table>
      <P>
        <strong className="font-semibold text-gray-900">Sáu dòng đầu là danh sách quen thuộc</strong> — bạn sẽ thấy chúng trong hầu hết
        bài viết về da mụn. <strong className="font-semibold text-gray-900">Dòng cuối là câu hỏi thứ hai</strong> mà phần lớn danh sách bỏ qua.
      </P>
      <P>
        Về kết cấu, với da dầu mụn nên ưu tiên <strong className="font-semibold text-gray-900">dạng gel hoặc gel-cream</strong> thay vì kem đặc.
        Kết cấu nhẹ giúp da không có cảm giác nặng và bí trong thời tiết nóng ẩm.
      </P>

      <H2 id="doc-nhan">Cách đọc nhãn sản phẩm</H2>
      <ol className="my-6 space-y-4 text-[15px] md:text-base leading-[1.85] text-gray-700">
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">1.</span>
          <span><strong className="font-semibold text-gray-900">Đọc từ trên xuống, chỉ cần 5–7 dòng đầu.</strong> Bảng thành phần được sắp theo hàm lượng giảm dần. Nếu dầu khoáng hay dầu dừa nằm trong nhóm đầu, hàm lượng của chúng không nhỏ.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">2.</span>
          <span><strong className="font-semibold text-gray-900">Tìm chữ “Oil” và tên latin của thực vật.</strong> <em>Cocos Nucifera</em> là dầu dừa, <em>Olea Europaea</em> là dầu ô liu, <em>Persea Gratissima</em> là dầu bơ.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">3.</span>
          <span><strong className="font-semibold text-gray-900">Phân biệt hai loại cồn.</strong> <em>Alcohol Denat.</em> là cồn khô. <em>Cetyl / Cetearyl Alcohol</em> là cồn béo dùng làm đặc — không giống nhau.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">4.</span>
          <span><strong className="font-semibold text-gray-900">Đừng dừng ở chữ non-comedogenic.</strong> Nếu da bạn từng nổi những nốt li ti đều nhau, ngứa nhẹ, thành cụm — hãy kiểm tra thêm nhóm axit béo.</span>
        </li>
        <li className="flex gap-4">
          <span className="shrink-0 font-semibold text-gray-950">5.</span>
          <span><strong className="font-semibold text-gray-900">Thử trên một vùng nhỏ trước.</strong> Thoa ở cằm hoặc mặt trong cổ tay, chờ 24–48 giờ.</span>
        </li>
      </ol>

      <Cta href={CTA_URL} label="Xem công thức">
        Nếu bạn muốn xem một công thức được xây dựng theo hướng loại bỏ axit béo, có thể tham khảo <B>Kem Dưỡng Ẩm La Théorie Hydrating Gel Cream</B> —
        dạng gel-cream, không chứa axit béo, dành cho da mụn, viêm nang lông và da nhạy cảm.
      </Cta>
    </>
  );
}

export const article: Article = {
  slug: 'da-mun-khong-nen-dung-thanh-phan-gi',
  title: 'Da mụn không nên dùng thành phần gì?',
  description:
    'Danh sách thành phần da mụn nên tránh, và điểm chung ít được nói tới giữa chúng: axit béo — nguồn thức ăn của nấm men Malassezia.',
  tldr: [
    'Dầu khoáng, dầu dừa, dầu ô liu, lanolin và silicone là những nhóm da mụn nên hạn chế.',
    'Điểm chung của phần lớn các loại dầu đó là hàm lượng axit béo cao.',
    'Nhãn “non-comedogenic” không cho biết sản phẩm có chứa axit béo hay không — đó là câu hỏi thứ hai.',
  ],
  cluster: 'C3',
  stage: 'concept',
  targetQueries: [
    'da mụn không nên dùng thành phần gì',
    'thành phần cần tránh cho da mụn',
    'da mụn có nên dùng dầu dừa không',
    'non-comedogenic là gì',
  ],
  published: '2026-09-03',
  updated: '2026-09-15',
  faq: [
    {
      q: 'Da dầu mụn có cần dưỡng ẩm không?',
      a: 'Có. Khi da bị làm khô quá mức, tuyến bã nhờn thường tiết thêm dầu để bù lại. Điều cần lưu ý là chọn kết cấu nhẹ — dạng gel hoặc gel-cream — và tránh các thành phần dễ gây bít tắc.',
    },
    {
      q: 'Kem dưỡng ẩm nào không chứa axit béo?',
      a: 'Số lượng không nhiều, vì phần lớn kem dưỡng dùng dầu hoặc bơ thực vật làm nền. Cách kiểm tra là đọc bảng thành phần và tìm các loại dầu thực vật, bơ (shea butter, cocoa butter) và lanolin.',
    },
    {
      q: 'Non-comedogenic có đủ cho da bị mụn nấm không?',
      a: 'Không hẳn. Non-comedogenic nói về khả năng gây bít tắc lỗ chân lông, không nói về việc sản phẩm có chứa axit béo hay không. Đây là hai câu hỏi khác nhau, và điều ngược lại cũng đúng: không chứa axit béo không đồng nghĩa với non-comedogenic.',
    },
    {
      q: 'Da mụn có nên dùng dầu tự nhiên không?',
      a: 'Tùy loại. Các loại giàu linoleic acid (dầu tầm xuân, dầu hạt nho) thường nhẹ hơn. Các loại giàu oleic acid và axit béo chuỗi trung bình (dầu dừa, dầu ô liu) thì ngược lại.',
    },
    {
      q: 'Làm sao biết mình bị mụn nấm hay mụn thường?',
      a: 'Mụn nấm thường là những nốt sẩn nhỏ đều nhau về kích thước, mọc thành cụm, hay kèm ngứa nhẹ, xuất hiện nhiều ở trán, hai bên má, ngực và lưng. Để xác định chắc chắn, bạn nên đến khám tại cơ sở da liễu.',
    },
  ],
  // 2026-09-03 확인 4건 + 2026-09-07 정정 1(Dobler 2019) 추가. 2026-09-15 Crossref 로 5건 전부 재확인.
  references: [
    {
      label:
        'Xu J. và cộng sự (2007). Dandruff-associated Malassezia genomes reveal convergent and divergent virulence traits. PNAS 104(47):18730–18735.',
      url: 'https://doi.org/10.1073/pnas.0706756104',
    },
    {
      label:
        'Triana S. và cộng sự (2017). Lipid metabolic versatility in Malassezia spp. yeasts studied through metabolic modeling. Frontiers in Microbiology 8:1772.',
      url: 'https://doi.org/10.3389/fmicb.2017.01772',
    },
    {
      label:
        'Liebregts J. và cộng sự (2025). Lipid-dependent growth of Malassezia spp. in defined medium with single fatty acids. FEMS Yeast Research 25:foaf043.',
      url: 'https://doi.org/10.1093/femsyr/foaf043',
    },
    {
      label:
        'Chalupczak NV, Lipner SR (2025). Malassezia Folliculitis: An Underdiagnosed Mimicker of Acneiform Eruptions. Journal of Fungi 11(9):662.',
      url: 'https://doi.org/10.3390/jof11090662',
    },
    {
      label:
        'Dobler D. và cộng sự (2019). Impact of Selected Cosmetic Ingredients on Common Microorganisms of Healthy Human Skin. Cosmetics 6(3):45.',
      url: 'https://doi.org/10.3390/cosmetics6030045',
    },
  ],
  Body,
};
